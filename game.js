/* ============================================================
   CS 背单词对战 v2 · 引擎 game.js  (纯原生 JS, 零依赖, 断网可跑)
   手机屏优先 · 大字 · 流畅体验。流程:
     菜单选关 → 学习阶段(逐张背单词卡) → 完成制对战 → 错题复盘
   对战: 英中对照短题(术语↔中文释义), 强干扰项(同 topic 近义),
         打完全部题、答错不结束, 结算列出所有错题+详细解释。
   桌面保留 Q W / A S 键位(2×2 选项位置), 手机直接点大按钮。
   计时器给足时间且可一键关闭。
   依赖: words_cs.js 提供 window.CS_WORDS / CS_TOPICS。
   数据: 每词用 cn(中文释义) 出题; 若 cn 缺失则用 definition 兜底不报错。
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 合成音效 (Web Audio, 零素材) ---------------- */
  const SFX = (function () {
    let ac = null, muted = false;
    const ctx = () => ac || (ac = new (window.AudioContext || window.webkitAudioContext)());
    function tone(freq, dur, type, gain, slideTo) {
      if (muted) return;
      try {
        const c = ctx(), o = c.createOscillator(), g = c.createGain();
        o.type = type || 'square'; o.frequency.setValueAtTime(freq, c.currentTime);
        if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, c.currentTime + dur);
        g.gain.setValueAtTime(gain || 0.2, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
        o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + dur);
      } catch (e) {}
    }
    function noise(dur, gain) {
      if (muted) return;
      try {
        const c = ctx(), b = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
        const s = c.createBufferSource(); s.buffer = b; const g = c.createGain(); g.gain.value = gain || 0.3;
        s.connect(g).connect(c.destination); s.start();
      } catch (e) {}
    }
    return {
      toggle() { muted = !muted; return muted; },
      isMuted() { return muted; },
      hit() { tone(240, 0.12, 'square', 0.16, 120); noise(0.07, 0.12); },
      crit() { tone(520, 0.15, 'sawtooth', 0.2, 180); tone(880, 0.18, 'square', 0.1); noise(0.12, 0.22); },
      special() { tone(150, 0.5, 'sawtooth', 0.22, 1000); noise(0.35, 0.18); setTimeout(() => tone(1200, 0.25, 'square', 0.14), 120); },
      hurt() { tone(170, 0.2, 'sawtooth', 0.18, 55); noise(0.1, 0.15); },
      click() { tone(660, 0.08, 'square', 0.14); },
      flip() { tone(520, 0.06, 'triangle', 0.1, 620); },
      win() { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => tone(f, 0.2, 'square', 0.16), i * 110)); },
      lose() { [392, 330, 247].forEach((f, i) => setTimeout(() => tone(f, 0.28, 'sawtooth', 0.16, f * 0.8), i * 150)); },
    };
  })();

  /* ---------------- 掌握度存档 (localStorage, 简易间隔重复) ---------------- */
  const SAVE_KEY = 'cs_vocab_battle_save_v2';
  const Progress = {
    load() { try { return JSON.parse(localStorage.getItem(SAVE_KEY) || '{}'); } catch (e) { return {}; } },
    save(s) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch (e) {} },
    stat(term) { const s = this.load(); return s[term] || { c: 0, w: 0 }; },
    record(term, ok) {
      const s = this.load(); const e = s[term] || (s[term] = { c: 0, w: 0 });
      ok ? e.c++ : e.w++; this.save(s); return e;
    },
    weight(term) {
      const e = this.stat(term); const total = e.c + e.w;
      if (total === 0) return 3;
      const wrongRate = e.w / total;
      const mastered = e.c >= 2 && e.c / total >= 0.7;
      if (mastered) return 1;
      return 2 + Math.round(wrongRate * 6);
    },
    mastery(term) {
      const e = this.stat(term); const total = e.c + e.w;
      if (total === 0) return 'new';
      return (e.c >= 2 && e.c / total >= 0.7) ? 'mastered' : 'learning';
    },
  };

  /* ---------------- 工具 ---------------- */
  const shuffle = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const pct = (c, t) => (t ? Math.round(c / t * 100) : 0);
  function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // 中文释义: cn 优先, 缺失时用英文 definition 兜底(不报错)
  const cnOf = (w) => (w && w.cn) ? w.cn : (w ? w.definition : '');
  // 中文详细解释: cn_def 优先, 缺失时用 cn 兜底(另一 agent 正在补 cn_def, 没有也不报错)
  const cnDefOf = (w) => (w && w.cn_def) ? w.cn_def : (w ? (w.cn || '') : '');

  // 朗读英文术语(浏览器内置 TTS, 无需数据/联网基本可用)
  function speak(text) {
    try {
      const synth = window.speechSynthesis; if (!synth) return;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(String(text));
      u.lang = 'en-US'; u.rate = 0.9;
      synth.speak(u);
    } catch (e) {}
  }

  // 加权抽词: 依据掌握度权重, 无放回地抽 n 个不同的词
  function weightedPick(pool, n) {
    const items = pool.map(w => ({ w, weight: Progress.weight(w.term) }));
    const out = [], avail = items.slice();
    while (out.length < n && avail.length) {
      let total = 0; for (const it of avail) total += it.weight;
      let r = Math.random() * total, idx = 0;
      for (let i = 0; i < avail.length; i++) { r -= avail[i].weight; if (r <= 0) { idx = i; break; } }
      out.push(avail[idx].w); avail.splice(idx, 1);
    }
    return out;
  }

  // 强干扰项: 优先同 topic、其次同 level, 最后全库兜底; 按目标字段去重
  function pickDistractors(word, pool, field, n) {
    const val = (w) => field === 'cn' ? cnOf(w) : w.term;
    const target = val(word);
    const sameTopic = shuffle(pool.filter(x => x.term !== word.term && x.topic === word.topic));
    const other = shuffle(pool.filter(x => x.term !== word.term && x.topic !== word.topic));
    const ranked = sameTopic.concat(other);
    const seen = new Set([target]); const out = [];
    for (const x of ranked) { const v = val(x); if (seen.has(v)) continue; seen.add(v); out.push(x); if (out.length >= n) break; }
    return out;
  }

  // 例句挖空: 把术语本身换成 _____ (整词, 大小写不敏感)。挖不到返回 null
  function clozeSentence(sentence, term) {
    if (!sentence) return null;
    const re = new RegExp('\\b' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if (!re.test(sentence)) return null;
    return sentence.replace(re, '_____');
  }

  // 该词可用的考法(form)。总有 term2cn / cn2term; 例句能挖空则再加 cloze
  function formsFor(word) {
    const forms = ['term2cn', 'cn2term'];
    if (clozeSentence(word.example, word.term)) forms.push('cloze');
    return forms;
  }

  // 造一道题。form: 'term2cn'(英->中) | 'cn2term'(中->英) | 'cloze'(例句填空->选术语)
  function buildQuestion(word, pool, form) {
    if (form === 'cloze') {
      const blanked = clozeSentence(word.example, word.term);
      if (blanked) {
        const wrong = pickDistractors(word, pool, 'term', 3).map(w => w.term);
        const options = shuffle([word.term, ...wrong]);
        return { form, kind: 'cloze', big: blanked, bigClass: 'cloze', dirLabel: '例句填空 → 选正确术语填入 _____',
          options, correctIdx: options.indexOf(word.term), word };
      }
      // 挖不到空: 回退英中对照
      form = 'cn2term';
    }
    if (form === 'cn2term') {
      const wrong = pickDistractors(word, pool, 'term', 3).map(w => w.term);
      const options = shuffle([word.term, ...wrong]);
      return { form: 'cn2term', kind: 'ec', big: cnOf(word), bigClass: 'cn', dirLabel: '中文释义 → 选英文术语',
        options, correctIdx: options.indexOf(word.term), word };
    }
    // term2cn: 英文术语 → 选正确中文释义
    const wrong = pickDistractors(word, pool, 'cn', 3).map(w => cnOf(w));
    const cn = cnOf(word);
    const options = shuffle([cn, ...wrong]);
    return { form: 'term2cn', kind: 'ec', big: word.term, bigClass: 'en', dirLabel: '英文术语 → 选中文释义',
      options, correctIdx: options.indexOf(cn), word };
  }

  /* ============================================================
     Boss 花名册 (纯抽象概念, 无角色美术)
     ============================================================ */
  const BOSS_ROSTER = [
    { name: 'The Null Core', sub: '空引用之核', face: '∅', img: 'assets/boss_null.png', taunts: ['你的引用……指向虚无！', 'NullPointerException 找上你了。'] },
    { name: 'Stack Overflower', sub: '爆栈巨兽', face: '≣', img: 'assets/boss_stack.png', taunts: ['递归太深，你会崩溃的！', '栈已满，无路可退。'] },
    { name: 'The Deadlock', sub: '死锁之环', face: '⊗', img: 'assets/boss_deadlock.png', taunts: ['谁也拿不到锁——包括你！', '资源被我全部占用了。'] },
    { name: 'Infinite Loop', sub: '无限循环', face: '∞', img: 'assets/boss_loop.png', taunts: ['while(true) 永不停歇！', '你找不到我的终止条件。'] },
  ];
  const HERO_IMG = 'assets/hero_back.png';

  /* ============================================================
     App: 屏幕路由 (menu / learn / battle / result)
     ============================================================ */
  const App = {
    root: null, level: 'AS', topic: 'ALL',
    _cur: null,     // 当前 Battle 实例(用于清理)

    init(root) { this.root = root; this.showMenu(); },

    _clear() {
      if (this._detachLearn) this._detachLearn();
      if (this._cur) { this._cur.stop(); this._cur = null; }
      this.root.innerHTML = '';
    },

    wordsFor(level, topic) {
      return CS_WORDS.filter(w => w.level === level && (topic === 'ALL' || w.topic === topic));
    },
    masteryStats(level) {
      const list = CS_WORDS.filter(w => w.level === level);
      let m = 0, l = 0, n = 0;
      for (const w of list) { const s = Progress.mastery(w.term); if (s === 'mastered') m++; else if (s === 'learning') l++; else n++; }
      return { total: list.length, mastered: m, learning: l, fresh: n };
    },

    /* ---------------- 菜单 ---------------- */
    showMenu() {
      this._clear();
      const st = this.masteryStats(this.level);
      const topics = (CS_TOPICS[this.level] || []);
      const chips = ['ALL'].concat(topics).map(t => {
        const n = t === 'ALL' ? this.wordsFor(this.level, 'ALL').length : this.wordsFor(this.level, t).length;
        const label = t === 'ALL' ? '全部 ALL' : t;
        return `<button class="cg-topic ${t === this.topic ? 'on' : ''}" data-topic="${esc(t)}">${esc(label)} <em>${n}</em></button>`;
      }).join('');

      const view = el(`
        <div class="cg-screen cg-menu">
          <div class="cg-menu-top">
            <div class="cg-logo"><span class="cg-logo-mark">&lt;/&gt;</span> CS 术语对战</div>
            <div class="cg-tagline">CIE 9618 · 先背单词卡, 再英中对照打 Boss</div>
          </div>

          <div class="cg-level-tabs">
            <button class="cg-level ${this.level === 'AS' ? 'on' : ''}" data-level="AS">AS 级<em>${this.wordsFor('AS', 'ALL').length} 词</em></button>
            <button class="cg-level ${this.level === 'A2' ? 'on' : ''}" data-level="A2">A2 级<em>${this.wordsFor('A2', 'ALL').length} 词</em></button>
          </div>

          <div class="cg-mastery">
            <div class="cg-mbar">
              <div class="cg-mseg cg-mmastered" style="width:${st.total ? st.mastered / st.total * 100 : 0}%"></div>
              <div class="cg-mseg cg-mlearning" style="width:${st.total ? st.learning / st.total * 100 : 0}%"></div>
            </div>
            <div class="cg-mlegend"><span><i class="d-m"></i>已掌握 ${st.mastered}</span><span><i class="d-l"></i>学习中 ${st.learning}</span><span><i class="d-n"></i>生词 ${st.fresh}</span></div>
          </div>

          <div class="cg-section-label">选择 Topic 关卡</div>
          <div class="cg-topics">${chips}</div>

          <div class="cg-menu-actions">
            <button class="cg-btn" data-ref="play">开始学习 + 对战 ▶</button>
            <div class="cg-mini-row">
              <button class="cg-btn ghost sm" data-ref="mute">${SFX.isMuted() ? '🔇 静音' : '🔊 音效'}</button>
              <button class="cg-btn ghost sm" data-ref="reset">重置进度</button>
            </div>
            <div class="cg-hint">先进 <b>背单词</b> 环节逐张看卡, 再进 <b>对战</b>。<br>桌面按 <b>Q W / A S</b> 作答 · 手机直接点 · 打完全部题, 错题会复盘。</div>
          </div>
        </div>`);

      this.root.appendChild(view);
      view.querySelectorAll('[data-level]').forEach(b => b.addEventListener('click', () => { SFX.click(); this.level = b.dataset.level; this.topic = 'ALL'; this.showMenu(); }));
      view.querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click', () => { SFX.click(); this.topic = b.dataset.topic; this.showMenu(); }));
      view.querySelector('[data-ref="play"]').addEventListener('click', () => { SFX.click(); this.startRound(); });
      view.querySelector('[data-ref="reset"]').addEventListener('click', () => { if (confirm('确定清空所有掌握度进度吗？')) { Progress.save({}); this.showMenu(); } });
      view.querySelector('[data-ref="mute"]').addEventListener('click', (e) => { SFX.toggle(); e.currentTarget.textContent = SFX.isMuted() ? '🔇 静音' : '🔊 音效'; });
    },

    /* ---------------- 开一轮: 选词 → 学习 → 对战 ---------------- */
    startRound(preWords) {
      const pool = this.wordsFor(this.level, this.topic);
      if (pool.length < 4) { alert('该关卡词数不足 4, 无法出四选一。'); return; }
      // 本轮词量: 6~12
      const count = Math.min(12, Math.max(6, pool.length));
      const roundWords = preWords && preWords.length ? preWords : weightedPick(pool, Math.min(count, pool.length));
      const boss = BOSS_ROSTER[Math.floor(Math.random() * BOSS_ROSTER.length)];
      this.showLearn(roundWords, pool, boss);
    },

    /* ---------------- 学习阶段: 背单词卡 ---------------- */
    showLearn(roundWords, pool, boss) {
      this._clear();
      let idx = 0;
      const total = roundWords.length;
      const topicName = this.topic === 'ALL' ? `${this.level} 全部` : this.topic;

      const view = el(`
        <div class="cg-screen cg-learn">
          <div class="cg-topbar">
            <button class="cg-back" data-ref="back" title="返回">‹</button>
            <div class="cg-topbar-title">背单词 · 记忆环节<small>${esc(topicName)}</small></div>
            <div class="cg-count" data-ref="count"></div>
          </div>
          <div class="cg-progress"><div class="cg-progress-fill" data-ref="prog"></div></div>
          <div class="cg-flashwrap" data-ref="wrap"></div>
          <div class="cg-learn-nav">
            <button class="cg-btn ghost" data-ref="prev">‹ 上一张</button>
            <button class="cg-btn" data-ref="next">下一张 ›</button>
          </div>
        </div>`);
      this.root.appendChild(view);
      const ref = {};
      view.querySelectorAll('[data-ref]').forEach(n => ref[n.dataset.ref] = n);

      const render = () => {
        const w = roundWords[idx];
        ref.count.textContent = `${idx + 1} / ${total}`;
        ref.prog.style.width = ((idx + 1) / total * 100) + '%';
        // 左栏(英文): 术语 + 🔊读音 + 英文定义 + 例句
        const defHtml = w.definition ? `<div class="fc-def"><span class="lbl">DEFINITION</span>${esc(w.definition)}</div>` : '';
        const exHtml = w.example ? `<div class="fc-ex"><span class="lbl">EXAMPLE 例句</span>${esc(w.example)}</div>` : '';
        // 右栏(中文): 中文术语/释义 cn + 中文解释 cn_def(兜底 cn)
        const cnDef = cnDefOf(w);
        const cnDefHtml = (cnDef && cnDef !== cnOf(w))
          ? `<div class="fc-cndef"><span class="lbl">中文解释</span>${esc(cnDef)}</div>`
          : `<div class="fc-cndef"><span class="lbl">中文解释</span>${esc(cnDef || cnOf(w))}</div>`;
        const card = el(`
          <div class="cg-flash">
            <div class="cg-fc-col en">
              <div class="fc-colhd">EN · 英文</div>
              <div class="fc-termrow">
                <div class="fc-term">${esc(w.term)}</div>
                <button class="fc-speak" data-ref="speak" type="button" title="朗读">🔊</button>
              </div>
              <div class="fc-tag">${esc(w.topic || 'CS')} · ${esc(w.level)}</div>
              ${defHtml}
              ${exHtml}
            </div>
            <div class="cg-fc-col zh">
              <div class="fc-colhd">中文</div>
              <div class="fc-cn">${esc(cnOf(w))}</div>
              ${cnDefHtml}
            </div>
          </div>`);
        ref.wrap.innerHTML = ''; ref.wrap.appendChild(card);
        const sp = card.querySelector('[data-ref="speak"]');
        if (sp) sp.addEventListener('click', () => { SFX.click(); speak(w.term); });
        ref.prev.disabled = false;
        ref.prev.style.visibility = idx === 0 ? 'hidden' : 'visible';
        ref.next.textContent = idx === total - 1 ? '开始对战 ⚔' : '下一张 ›';
      };
      render();

      ref.back.addEventListener('click', () => { SFX.click(); this.showMenu(); });
      ref.prev.addEventListener('click', () => { if (idx > 0) { idx--; SFX.flip(); render(); } });
      ref.next.addEventListener('click', () => {
        if (idx < total - 1) { idx++; SFX.flip(); render(); }
        else { SFX.click(); this.showBattle(roundWords, pool, boss); }
      });

      // 键盘: 左右切卡, 回车/空格 = 下一张
      this._learnKey = (e) => {
        if (e.key === 'ArrowLeft') { ref.prev.click(); }
        else if (e.key === 'ArrowRight') { if (idx < total - 1) { idx++; SFX.flip(); render(); } }
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ref.next.click(); }
      };
      window.addEventListener('keydown', this._learnKey);
      // 离开学习页时解绑(showBattle/_clear 会替换 DOM, 这里在 showMenu/showBattle 前统一解绑)
      this._detachLearn = () => { window.removeEventListener('keydown', this._learnKey); this._detachLearn = null; };
    },

    showBattle(roundWords, pool, boss) {
      this._clear();
      this._cur = new Battle({
        mount: this.root, words: roundWords, pool, boss,
        onExit: () => this.showMenu(),
        onFinish: (data) => this.showResult(data, roundWords, pool, boss),
      });
    },

    /* ---------------- 结算 / 错题复盘 (按词去重, 重点显示例句) ---------------- */
    showResult(data, roundWords, pool, boss) {
      this._clear();
      const { answered, correct, maxCombo, total } = data;
      const win = data.win !== false;              // 缺省视为胜利(兼容)
      const mastered = data.mastered != null ? data.mastered : total;
      const acc = pct(correct, answered);

      // 按词聚合错题: 同一个词在多种考法下的错都归到一条
      const byTerm = new Map();
      for (const rec of data.wrongs) {
        const k = rec.word.term;
        if (!byTerm.has(k)) byTerm.set(k, { word: rec.word, attempts: [] });
        byTerm.get(k).attempts.push(rec);
      }
      const groups = Array.from(byTerm.values());
      const perfect = win && groups.length === 0;   // 只有胜利且零错才叫完美
      const formName = { term2cn: '英→中', cn2term: '中→英', cloze: '例句填空' };

      let body;
      if (perfect) {
        body = `
          <div class="cg-perfect-box">
            <div class="em">🏆</div>
            <div class="msg">完美掌握！<br>每个词都在多种考法下答对</div>
            <div class="sub">${esc(boss.name)} 被彻底击碎 · 这 ${total} 个词你是真懂了, 不只是记住翻译</div>
          </div>`;
      } else if (groups.length === 0) {
        // 胜利但无错题聚合(理论上等于 perfect); 兜底
        body = `
          <div class="cg-perfect-box">
            <div class="em">${win ? '🏆' : '💥'}</div>
            <div class="msg">${win ? '通关！' : '血量耗尽'}</div>
          </div>`;
      } else {
        const items = groups.map(g => {
          const w = g.word;
          // 例句(重点): 先展示原句帮助理解用法
          const exHtml = w.example ? `<div class="cg-rv-ex"><span class="lbl">EXAMPLE 例句(体会用法)</span>${esc(w.example)}</div>` : '';
          const defHtml = w.definition ? `<div class="cg-rv-def">${esc(w.definition)}</div>` : '';
          const attemptsHtml = g.attempts.map(rec => {
            const tag = `<span class="fm">[${formName[rec.form] || '考法'}]</span>`;
            if (rec.picked == null) return `<div class="cg-rv-line">${tag} <span class="miss">⏱ 超时未答</span> · 正确 <span class="v">${esc(rec.correctLabel)}</span></div>`;
            return `<div class="cg-rv-line">${tag} 选了 <span class="x">${esc(rec.picked)}</span> · 正确 <span class="v">${esc(rec.correctLabel)}</span></div>`;
          }).join('');
          return `
            <div class="cg-review-item">
              <div class="cg-rv-head"><span class="cg-rv-term">${esc(w.term)}</span><span class="cg-rv-cn">${esc(cnOf(w))}</span></div>
              ${exHtml}
              ${defHtml}
              <div class="cg-rv-picked">${attemptsHtml}</div>
            </div>`;
        }).join('');
        const label = win
          ? `错题复盘 · ${groups.length} 个词 (读例句, 体会怎么用)`
          : `血量耗尽 · 先复盘这 ${groups.length} 个错词 (读例句), 再来`;
        body = `
          <div class="cg-review-label">${label}</div>
          <div class="cg-review-list">${items}</div>`;
      }

      const enClass = !win ? 'lose' : perfect ? 'perfect' : 'win';
      const enText = !win ? 'DEFEAT' : perfect ? 'MASTERED' : 'CLEAR';
      const zhText = !win
        ? `血量归零 · 已掌握 ${mastered}/${total} 词`
        : perfect ? '全部真掌握 · 满分' : '通关 · 有词曾答错, 复盘一遍';

      const hasWrongs = groups.length > 0;
      const view = el(`
        <div class="cg-screen cg-result">
          <div class="cg-result-hero">
            <div class="cg-result-en ${enClass}">${enText}</div>
            <div class="cg-result-zh">${zhText}</div>
            <div class="cg-result-stat">掌握 <b>${mastered}/${total}</b> 词 · 答题 <b>${answered}</b> · 答对 <b>${correct}</b> · 正确率 <b>${acc}%</b> · 连击 <b>x${maxCombo}</b></div>
          </div>
          ${body}
          <div class="cg-result-actions">
            ${hasWrongs ? '<button class="cg-btn" data-ref="redo">重练错词 🔁</button>' : ''}
            <div class="cg-mini-row">
              <button class="cg-btn ${hasWrongs ? 'ghost' : ''}" data-ref="again">${win ? '再来一轮 ⚔' : '整关重来 ⚔'}</button>
              <button class="cg-btn ghost" data-ref="menu">返回选关</button>
            </div>
          </div>
        </div>`);
      this.root.appendChild(view);

      const redo = view.querySelector('[data-ref="redo"]');
      if (redo) redo.addEventListener('click', () => {
        SFX.click();
        const wrongWords = groups.map(g => g.word);
        this.showBattle(wrongWords, pool, boss);   // 重练错词(直接对战, 仍走掌握制)
      });
      view.querySelector('[data-ref="again"]').addEventListener('click', () => { SFX.click(); this.startRound(); });
      view.querySelector('[data-ref="menu"]').addEventListener('click', () => { SFX.click(); this.showMenu(); });
    },
  };

  /* ============================================================
     Battle 引擎 (掌握制: 每个词须在 ≥2 种考法下答对才算"真懂",
     全部词都掌握才算过关; 没掌握的词换考法反复出现。答错不结束。)
     ============================================================ */
  const MASTER_FORMS_NEEDED = 2;   // 一个词要在几种不同考法下答对才算掌握

  class Battle {
    constructor(opts) {
      this.mount = opts.mount;
      this.words = opts.words;               // 本关出题词
      this.pool = opts.pool || opts.words;   // 干扰项来源(更大范围, 干扰更强)
      this.boss = opts.boss || BOSS_ROSTER[0];
      this.onExit = opts.onExit || function () {};
      this.onFinish = opts.onFinish || function () {};

      this.total = this.words.length;
      // 每词进度: passed=本词已答对的考法集合; forms=该词可用考法
      this.wordState = this.words.map(w => ({
        word: w, forms: formsFor(w), passed: new Set(), seen: 0,
      }));
      this.needPerWord = Math.min(MASTER_FORMS_NEEDED, /* 保证可达: 最少考法数 */
        Math.min.apply(null, this.wordState.map(s => s.forms.length)));

      // Boss 血量按"总需答对次数"标定, 掌握全部≈击碎 Boss
      this.targetHits = this.wordState.reduce((a, s) => a + this.needPerWord, 0);
      this.bossMax = Math.max(60, this.targetHits * 20);
      this.bossHP = this.bossMax;
      // 玩家血条(调平数值): 满血 100, 答错扣 ~13, 需 6~8 次才见底, 一次绝不致死
      this.heroMax = 100; this.heroHP = this.heroMax;
      this.wrongDmg = 13;                    // 每次答错扣血(适中): 100/13≈7.7 次见底
      this.energy = 0; this.combo = 0; this.maxCombo = 0;

      this.timerOn = true;
      this.timerSeconds = 25;                 // 给足时间, 且可关

      this.answered = false; this.selectedSlot = null; this.correctIdx = 0;
      this.locked = false; this.ultActive = false; this.enraged = false; this.settled = false;
      this.answeredCount = 0; this.correctCount = 0;
      this.roundNo = 0;
      this.curState = null;
      this.wrongs = [];                        // 错题记录: {word, picked, correctLabel, kind}

      this._timer = null; this._timeouts = new Set(); this._destroyed = false;
      this._buildDOM();
      this._onKey = (e) => this._handleKey(e);
      window.addEventListener('keydown', this._onKey);
      this._renderBars();
      this._next();
    }

    _masteredCount() { return this.wordState.filter(s => s.passed.size >= this.needPerWord).length; }
    _allMastered() { return this._masteredCount() >= this.total; }

    _after(fn, ms) { const id = setTimeout(() => { this._timeouts.delete(id); if (!this._destroyed) fn(); }, ms); this._timeouts.add(id); return id; }

    _buildDOM() {
      const b = this.boss;
      this.stage = el(`
        <div class="cg-screen cg-battle">
            <div class="cg-spritelayer" aria-hidden="true">
              ${b.img ? `<img class="cg-sprite cg-sprite-boss" data-ref="bossSprite" src="${esc(b.img)}" alt="" onerror="this.style.display='none'">` : ''}
              <img class="cg-sprite cg-sprite-hero" data-ref="heroSprite" src="${esc(HERO_IMG)}" alt="" onerror="this.style.display='none'">
            </div>
            <div class="cg-topbar">
              <button class="cg-back" data-ref="exit" title="退出">✕</button>
              <div class="cg-topbar-title">${esc(b.name)}<small>${esc(b.sub || '')}</small></div>
              <div class="cg-count" data-ref="count"></div>
            </div>

            <div class="cg-battle-body">
              <!-- 左栏(桌面) / 上半(手机): HUD + 当前词 -->
              <div class="cg-pane-left">
                <div class="cg-master">
                  <div class="cg-master-bar"><div class="cg-master-fill" data-ref="masterFill"></div></div>
                  <div class="cg-master-text" data-ref="masterText"></div>
                </div>

                <div class="cg-hud">
                  <div class="cg-hprow">
                    <div class="cg-face foe">${b.img ? `<img src="${esc(b.img)}" alt="" onerror="this.parentNode.textContent='${esc(b.face || '◈')}'">` : esc(b.face || '◈')}</div>
                    <div class="cg-hpmeta">
                      <div class="cg-hpname"><span>${esc(b.name)}<span class="foe-tag">ENRAGED</span></span><small data-ref="bossHpText"></small></div>
                      <div class="cg-bar foe"><div class="cg-ghost" data-ref="bossGhost"></div><div class="cg-fill foe" data-ref="bossFill"></div></div>
                    </div>
                  </div>
                  <div class="cg-hprow">
                    <div class="cg-face hero">&gt;_</div>
                    <div class="cg-hpmeta">
                      <div class="cg-hpname"><span>YOU 你</span><small data-ref="heroHpText"></small></div>
                      <div class="cg-bar hero"><div class="cg-ghost" data-ref="heroGhost"></div><div class="cg-fill hero" data-ref="heroFill"></div></div>
                    </div>
                  </div>
                </div>

                <div class="cg-statusbar">
                  <div class="cg-round" data-ref="round"></div>
                  <div class="cg-combo-pill" data-ref="combo">🔥 <span data-ref="comboNum">x0</span> COMBO</div>
                  <div class="cg-timer">
                    <span class="cg-timer-num" data-ref="timerNum">${this.timerSeconds}</span>
                    <button class="cg-timer-toggle" data-ref="timerToggle" title="开关计时">⏱</button>
                  </div>
                </div>

                <div class="cg-energy">
                  <div class="cg-energy-track" data-ref="energyTrack"><div class="cg-energy-fill" data-ref="energyFill"></div><div class="cg-energy-text" data-ref="energyText">0%</div></div>
                  <span class="cg-ult-badge" data-ref="ultBadge">⚡ 满即自动词爆</span>
                </div>

                <div class="cg-q">
                  <div class="cg-q-dir" data-ref="qdir"></div>
                  <div class="cg-q-big" data-ref="qbig"></div>
                </div>
              </div>

              <!-- 右栏(桌面) / 下半(手机): 2×2 选项 -->
              <div class="cg-pane-right">
                <div class="cg-opts" data-ref="opts"></div>
                <div class="cg-keyhint">桌面按 <b>Q W</b> / <b>A S</b> 对应四个选项</div>
              </div>
            </div>

            <div class="cg-fxlayer" data-ref="fx"></div>
            <div class="cg-flashwhite" data-ref="flash"></div>

            <div class="cg-cutin" data-ref="cutin">
              <div class="cg-cutin-body"><div class="cg-cutin-en">WORD BURST</div><div class="cg-cutin-zh"><span>词</span><span>爆</span></div></div>
            </div>
        </div>`);

      this.ref = {};
      this.stage.querySelectorAll('[data-ref]').forEach(n => { this.ref[n.getAttribute('data-ref')] = n; });
      this.mount.appendChild(this.stage);

      this.ref.exit.addEventListener('click', () => { SFX.click(); this.onExit(); });
      this.ref.timerToggle.addEventListener('click', () => this._toggleTimer());
    }

    _toggleTimer() {
      this.timerOn = !this.timerOn;
      this.ref.timerToggle.classList.toggle('off', !this.timerOn);
      if (this.timerOn) { this.timeLeft = this.timerSeconds; this._renderTimer(); if (!this.locked) this._startTimer(); }
      else { this._stopTimer(); this.ref.timerNum.textContent = '∞'; this.ref.timerNum.className = 'cg-timer-num'; }
    }

    // 选下一个"未掌握"的词, 并挑一种它还没答对过的考法(优先没考过的形式, 逼学生多角度理解)
    _pickNext() {
      const unmastered = this.wordState.filter(s => s.passed.size < this.needPerWord);
      if (!unmastered.length) return null;
      // 优先出"被看过次数最少"的词, 保证雨露均沾; 平局随机
      let min = Infinity;
      for (const s of unmastered) min = Math.min(min, s.seen);
      const cands = shuffle(unmastered.filter(s => s.seen === min));
      const state = cands[0];
      // 挑考法: 该词还没答对过的形式优先; 都答对过(不足门槛时)则随机换一个
      const notPassed = shuffle(state.forms.filter(f => !state.passed.has(f)));
      const form = notPassed.length ? notPassed[0]
        : shuffle(state.forms.slice())[0];
      return { state, form };
    }

    _next() {
      if (this._destroyed) return;
      const pick = this._pickNext();
      if (!pick) { this._finish(true); return; }   // 全部掌握 = 胜利
      this._loadQuestion(pick.state, pick.form);
    }

    _loadQuestion(state, form) {
      this.curState = state; state.seen++;
      this.curQ = buildQuestion(state.word, this.pool, form);
      this.correctIdx = this.curQ.correctIdx;
      this.answered = false; this.selectedSlot = null; this.timeLeft = this.timerSeconds; this.locked = false;

      this.roundNo++;
      const mastered = this._masteredCount();
      // 该词掌握进度: 已答对考法数 / 需要的门槛
      const wp = state.passed.size;
      const formTag = { term2cn: '英→中', cn2term: '中→英', cloze: '例句填空' }[this.curQ.form] || '';
      this.ref.round.innerHTML = `第 <b>${this.roundNo}</b> 题 · <span class="cg-formtag">${formTag}</span>`;
      this.ref.count.textContent = `掌握 ${mastered}/${this.total}`;
      this.ref.qdir.textContent = this.curQ.dirLabel + `　(本词 ${wp}/${this.needPerWord} 种考法已过)`;
      this.ref.qbig.textContent = this.curQ.big;
      const bigLen = this.curQ.big.length;
      this.ref.qbig.className = 'cg-q-big ' + this.curQ.bigClass +
        (this.curQ.kind === 'cloze' ? ' cloze' : (bigLen > 22 ? ' sm' : ''));
      this._renderProgress();
      this._renderOptions();
      this._renderTimer();
      if (this.timerOn) this._startTimer();
    }

    _renderProgress() {
      // 顶部掌握进度条
      if (!this.ref.masterFill) return;
      const p = this._masteredCount() / this.total * 100;
      this.ref.masterFill.style.width = p + '%';
      this.ref.masterText.textContent = `掌握 ${this._masteredCount()} / ${this.total}`;
    }

    _renderOptions() {
      const keys = ['Q', 'W', 'A', 'S']; const box = this.ref.opts; box.innerHTML = '';
      this.curQ.options.forEach((label, slot) => {
        const long = String(label).length > 10;
        const btn = el(`<button class="cg-opt ${long ? 'long' : ''}" type="button"><span class="cg-chip">${keys[slot]}</span><span class="cg-opt-label">${esc(label)}</span></button>`);
        if (this.answered) {
          if (slot === this.correctIdx) btn.classList.add('correct');
          else if (slot === this.selectedSlot) btn.classList.add('wrong');
          else btn.classList.add('dim');
          btn.disabled = true;
        } else btn.addEventListener('click', () => this.choose(slot));
        box.appendChild(btn);
      });
    }

    _handleKey(e) {
      if (this._destroyed) return;
      const k = e.key.toUpperCase();
      // 词爆能量满自动释放, 无需按键。只处理 Q W / A S 作答。
      if (['Q', 'W', 'A', 'S'].includes(k)) { const slot = ['Q', 'W', 'A', 'S'].indexOf(k); if (this.curQ && slot < this.curQ.options.length) this.choose(slot); }
    }

    _startTimer() {
      this._stopTimer();
      if (!this.timerOn) return;
      this._timer = setInterval(() => {
        if (this._destroyed) { this._stopTimer(); return; }
        this.timeLeft = Math.max(0, +(this.timeLeft - 0.1).toFixed(1));
        this._renderTimer();
        if (this.timeLeft <= 0) { this._stopTimer(); this._after(() => this._onTimeout(), 0); }
      }, 100);
    }
    _stopTimer() { if (this._timer) { clearInterval(this._timer); this._timer = null; } }

    _recordWrong(picked) {
      this.wrongs.push({
        word: this.curQ.word, picked,
        correctLabel: this.curQ.options[this.correctIdx],
        form: this.curQ.form,
      });
    }

    _onTimeout() {
      if (this.locked) return;
      this.locked = true; this.answered = true; this.selectedSlot = null; this.answeredCount++;
      Progress.record(this.curQ.word.term, false);
      this._recordWrong(null);
      this._renderOptions(); this._resolveWrong();
    }

    choose(slot) {
      if (this.locked || this.ultActive) return;
      this._stopTimer(); this.locked = true; this.answered = true; this.selectedSlot = slot; this.answeredCount++;
      const correct = (slot === this.correctIdx);
      if (correct) {
        this.correctCount++;
        // 记录本词在该考法下已答对(掌握判定按不同考法计)
        if (this.curState) this.curState.passed.add(this.curQ.form);
      } else {
        this._recordWrong(this.curQ.options[slot]);
      }
      Progress.record(this.curQ.word.term, correct);
      this._renderOptions();
      correct ? this._resolveCorrect() : this._resolveWrong();
    }

    _resolveCorrect() {
      const crit = Math.random() < 0.22;
      const dmg = (crit ? 30 : 15) + Math.floor(this.combo * 0.9);
      SFX[crit ? 'crit' : 'hit']();
      this._after(() => {
        // Boss 血量由"掌握进度"决定(在 _afterTurn 收口), 这里只做打击特效
        this.combo += 1; this.maxCombo = Math.max(this.maxCombo, this.combo);
        this.energy = Math.min(100, this.energy + (crit ? 34 : 26));
        this._renderBars(); this._renderCombo();
        this._anim(this.ref.energyTrack, 'cg-pop .3s ease', 300);
        this.shake(crit ? 2 : 1); if (crit) this.flash('#ffffff', .5);
        this._spriteHit('boss');
        this.dmgNum(0.72, 0.30, dmg, crit ? 'crit' : 'normal');
        this.shards(0.72, 0.30, crit ? 9 : 5);
      }, 150);
      // 能量满则自动放词爆(不需玩家按), 否则正常进入下一题
      if (this.energy + (crit ? 34 : 26) >= 100) {
        this._after(() => this.ultimate(true), crit ? 820 : 640);
      } else {
        this._after(() => this._afterTurn(), crit ? 820 : 640);
      }
    }

    _resolveWrong() {
      // 答错: 清连击 + 扣适中的血(调平, 一次绝不致死, 6~8 次才见底)
      this.combo = 0; this._renderCombo();
      const dmg = this.enraged ? this.wrongDmg + 2 : this.wrongDmg;   // 狂暴略高但仍非致死
      SFX.hurt();
      this._after(() => {
        this.heroHP = Math.max(0, this.heroHP - dmg);
        this._renderBars();
        this.shake(2); this.flash('#ef4444', .3);
        this._spriteHit('hero');
        this.dmgNum(0.28, 0.62, dmg, 'player');   // 在玩家血条一侧飘伤害
      }, 120);
      this._after(() => {
        if (this.heroHP <= 0) { this._finish(false); return; }   // 血见底 = 失败
        this._afterTurn();                                        // 否则继续下一题
      }, 700);
    }

    // auto=true: 由"答对且能量满"自动触发, 放完直接进下一题
    ultimate(auto) {
      if (this.energy < 100 || this.ultActive) return;
      if (!auto && this.locked) return;   // 手动触发时若正在结算则忽略
      this._stopTimer(); this.locked = true; this.ultActive = true;
      this.ref.cutin.classList.add('show'); SFX.special();
      this._after(() => {
        this.energy = 0;
        // 词爆造成真实 Boss 大伤害: 直接把一个"最接近掌握"的未掌握词一击补满掌握,
        // 掌握进度大幅推进 = Boss 血条明显下掉, 加速取胜。
        const burst = this._burstMaster();
        this._renderBars(); this._renderProgress();
        this.flash('#ffffff', .72); this.shake(2);      // 全屏闪光 + Boss 受击抖动
        this._spriteHit('boss');
        this.dmgNum(0.72, 0.30, burst.dmg, 'ult'); this.shards(0.72, 0.30, 14);
      }, 1000);
      this._after(() => {
        this.ref.cutin.classList.remove('show'); this.ultActive = false;
        if (auto) {
          // 自动词爆是在答对之后触发的, 放完继续推进题目
          this._afterTurn();
        } else {
          // 手动触发(能量满但玩家在答题中点了): 回到当前题继续作答
          this.locked = false;
          if (this.timerOn) this._startTimer();
        }
      }, 1520);
    }

    // 词爆结算: 选一个"离掌握最近"的未掌握词, 把它剩余考法一次补满(真实推进掌握 = 真实 Boss 伤害)
    _burstMaster() {
      const before = this.bossHP;
      const un = this.wordState.filter(s => s.passed.size < this.needPerWord);
      if (un.length) {
        // 优先补那些已过 1 种考法的(离掌握最近), 让词爆更"值"
        un.sort((a, b) => b.passed.size - a.passed.size);
        const s = un[0];
        for (const f of s.forms) { if (s.passed.size >= this.needPerWord) break; s.passed.add(f); }
      }
      const remain = this.total - this._masteredCount();
      this.bossHP = this.bossMax * (remain / this.total);
      return { dmg: Math.max(1, Math.round(before - this.bossHP)) };
    }

    _afterTurn() {
      if (this._destroyed) return;
      if (!this.enraged && this.bossHP / this.bossMax < 0.3) {
        this.enraged = true;
        this.stage.classList.add('enraged');
        this.flash('#ef4444', .3); this._showTaunt();
      }
      // Boss 血量 = 未掌握比例: 掌握全部时恰好被击碎, 不会提前秒杀也不会打不死
      const remain = this.total - this._masteredCount();
      this.bossHP = this.bossMax * (remain / this.total);
      this._renderBars();
      this._next();
    }

    _finish(win) {
      if (this.settled) return; this.settled = true;
      this._stopTimer();
      if (win) this.bossHP = 0;   // 胜利: Boss 击碎
      if (this.stage) this.stage.classList.add(win ? 'won' : 'lost');
      this._renderBars();
      SFX[win ? 'win' : 'lose']();
      try {
        this.onFinish({
          win: !!win,
          mastered: this._masteredCount(),
          answered: this.answeredCount, correct: this.correctCount,
          maxCombo: this.maxCombo, wrongs: this.wrongs.slice(),
          total: this.total,
        });
      } catch (e) {}
    }

    /* ---------- 渲染 ---------- */
    _renderBars() {
      const bp = Math.max(0, this.bossHP / this.bossMax * 100);
      const hp = Math.max(0, this.heroHP / this.heroMax * 100);
      const ep = Math.max(0, Math.min(100, this.energy)), ready = ep >= 100;
      this.ref.bossFill.style.width = bp + '%'; this.ref.bossGhost.style.width = bp + '%';
      this.ref.bossHpText.textContent = `${Math.ceil(this.bossHP)}/${this.bossMax}`;
      this.ref.heroFill.style.width = hp + '%'; this.ref.heroGhost.style.width = hp + '%';
      this.ref.heroHpText.textContent = `${Math.ceil(this.heroHP)}/${this.heroMax}`;
      // 血量偏低警示
      this.ref.heroFill.classList.toggle('low', this.heroHP / this.heroMax <= 0.3);
      this.ref.energyFill.style.width = ep + '%';
      this.ref.energyText.textContent = ready ? '词爆!' : Math.round(ep) + '%';
      this.ref.energyTrack.classList.toggle('ready', ready);
      this.ref.ultBadge.classList.toggle('ready', ready);
    }
    _renderTimer() {
      if (!this.timerOn) { this.ref.timerNum.textContent = '∞'; this.ref.timerNum.className = 'cg-timer-num'; return; }
      const n = Math.ceil(this.timeLeft);
      this.ref.timerNum.textContent = n;
      this.ref.timerNum.className = 'cg-timer-num' + (this.timeLeft <= 5 ? ' danger' : this.timeLeft <= 10 ? ' warn' : '');
    }
    _renderCombo() {
      const show = this.combo >= 2;
      this.ref.combo.classList.toggle('on', show);
      this.ref.comboNum.textContent = 'x' + this.combo;
    }
    _showTaunt() {
      const arr = this.boss.taunts || ['你的知识还不够！'];
      const txt = arr[Math.floor(Math.random() * arr.length)];
      const t = el(`<div class="cg-dmg" style="left:50%;top:32%;font-size:18px;color:#fca5a5;text-shadow:0 0 14px #ef4444;max-width:80%;white-space:normal;text-align:center;animation:cg-dmgFloat 2s ease-out forwards;">${esc(txt)}</div>`);
      this.ref.fx.appendChild(t); this._after(() => t.remove(), 2000);
    }

    /* ---------- 特效 (相对整屏, 用比例定位以适配手机) ---------- */
    _anim(elm, a, ms) { if (!elm) return; elm.style.animation = 'none'; void elm.offsetWidth; elm.style.animation = a; this._after(() => { if (elm) elm.style.animation = ''; }, ms); }
    _rect() { return this.stage.getBoundingClientRect(); }
    shake(level) {
      const frame = this.stage; if (!frame) return;
      const a = level >= 2 ? 'cg-shakeB .4s ease' : 'cg-shakeA .3s ease';
      frame.style.animation = 'none'; void frame.offsetWidth; frame.style.animation = a;
      this._after(() => { if (frame) frame.style.animation = ''; }, level >= 2 ? 420 : 320);
    }
    // 立绘受击反应: Boss 挨打(答对) / 本体挨打(答错). 短暂加 .hit 触发抖动+闪白
    _spriteHit(who) {
      const s = who === 'hero' ? this.ref.heroSprite : this.ref.bossSprite;
      if (!s) return;
      s.classList.remove('hit'); void s.offsetWidth; s.classList.add('hit');
      this._after(() => { if (s) s.classList.remove('hit'); }, 420);
    }
    flash(color, a) {
      const f = this.ref.flash; if (!f) return;
      f.style.background = color; f.style.transition = 'none'; f.style.opacity = a; void f.offsetWidth;
      f.style.transition = 'opacity .32s ease'; f.style.opacity = '0';
    }
    // 答错提示: 红色 "MISS" 飘字(不掉血)
    dmgNum(fx, fy, amount, type) {
      const layer = this.ref.fx; if (!layer) return;
      const r = layer.getBoundingClientRect();
      const x = r.width * fx, y = r.height * fy;
      const colors = { normal: '#c7d2fe', crit: '#f59e0b', ult: '#a855f7', player: '#f87171' };
      const size = ({ normal: 40, crit: 58, ult: 72, player: 44 })[type] || 40;
      const d = document.createElement('div'); d.className = 'cg-dmg'; d.textContent = '-' + amount;
      const dur = (type === 'crit' || type === 'ult') ? '1.1s' : '.9s';
      d.style.cssText = `left:${x}px;top:${y}px;font-size:${size}px;color:${colors[type]};text-shadow:0 0 16px ${colors[type]},0 2px 4px rgba(0,0,0,.6);animation:cg-dmgFloat ${dur} ease-out forwards;`;
      if (type === 'crit') { const t = document.createElement('span'); t.className = 'cg-tag'; t.textContent = ' CRIT'; d.appendChild(t); }
      if (type === 'ult') { const t = document.createElement('span'); t.className = 'cg-tag'; t.textContent = ' 词爆'; d.appendChild(t); }
      layer.appendChild(d); this._after(() => d.remove(), 1200);
    }
    shards(fx, fy, n) {
      const layer = this.ref.fx; if (!layer) return;
      const r = layer.getBoundingClientRect();
      const x = r.width * fx, y = r.height * fy;
      const word = (this.curQ && this.curQ.word && this.curQ.word.term) || 'ABCD';
      const chars = String(word).replace(/[^A-Za-z]/g, '').split('');
      const pool = chars.length ? chars : ['0', '1', '{', '}'];
      const cols = ['#f59e0b', '#a855f7', '#818cf8', '#ffffff'];
      for (let i = 0; i < n; i++) {
        const ch = pool[Math.floor(Math.random() * pool.length)];
        const ang = Math.random() * Math.PI * 2, dist = 40 + Math.random() * 90;
        const dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist - 20;
        const sd = document.createElement('div'); sd.className = 'cg-shard'; sd.textContent = ch;
        sd.style.cssText = `left:${x}px;top:${y}px;font-size:${14 + Math.random() * 14}px;color:${cols[i % cols.length]};--dx:${dx}px;--dy:${dy}px;--dr:${Math.random() * 720 - 360}deg;animation:cg-shardFly .75s cubic-bezier(.2,.7,.3,1) forwards;`;
        layer.appendChild(sd); this._after(() => sd.remove(), 800);
      }
    }

    stop() {
      if (this._destroyed) return; this._destroyed = true; this._stopTimer();
      this._timeouts.forEach(id => clearTimeout(id)); this._timeouts.clear();
      window.removeEventListener('keydown', this._onKey);
      if (this.stage && this.stage.parentNode) this.stage.parentNode.removeChild(this.stage);
    }
  }

  window.CSVocabGame = { init: (root) => App.init(root), Progress };
})();
