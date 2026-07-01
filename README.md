# CS 术语对战 · CIE 9618 背单词游戏

一个零依赖、断网可跑的浏览器小游戏：用「答对术语题」去击碎抽象的「概念 Boss」，边打边背 CIE 9618 计算机科学（AS + A2）核心术语。纯原生 HTML/CSS/JS，无任何角色立绘或第三方素材，全部术语定义为原创、贴合 9618 教学口径。

**260 个术语**（AS 140 · A2 120），按 Topic 分关，内置简易间隔重复（错词更常出现）。

## 怎么玩

1. **选级别**：顶部切换 **AS 级 / A2 级**。
2. **选关卡**：点一个 **Topic**（如 Data Representation、Networking、OOP……）或「全部 ALL」，然后按「开始对战 ▶」。
3. **作答**：每题四个选项分布在 **2×2** 位置，用键盘
   - **Q** = 左上 · **W** = 右上
   - **A** = 左下 · **S** = 右下

   （也可以直接鼠标点。）题型会在「看术语选定义」「看定义选术语」「例句填空」之间随机切换。
4. **连击与能量**：连续答对会攒「词爆」能量，还可能触发暴击。
5. **必杀**：能量满 100% 后按 **空格**（或 Enter）释放「词爆」必杀，对 Boss 造成大量伤害。
6. **通关规则 —— 答错即止**：本关必须**全部答对**才能通关；一旦答错（或超时），本关立即结束，需从头再来。
7. **错词加权**：你答错过的词会更频繁地出现，直到掌握；掌握度进度自动保存在浏览器本地。

顶部还有「重置进度」（清空掌握度）和「静音 / 音效」开关。

## 怎么运行

**双击 `index.html` 即可开玩** —— 无需安装、无需联网、无需服务器、零依赖。

四个文件放在同一目录下即可：

```
index.html
game.js
game.css
words_cs.js
```

## 怎么发布到 GitHub Pages

1. 在 GitHub 新建一个仓库（repo）。
2. 把这 4 个文件（`index.html`、`game.js`、`game.css`、`words_cs.js`，可连同 `README.md` / `LICENSE`）推到 `main` 分支：
   ```bash
   git init
   git add index.html game.js game.css words_cs.js README.md LICENSE
   git commit -m "CS vocab battle game"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选 **Deploy from a branch**，Branch 选 **main**、目录选 **/ (root)**，保存。
5. 稍等一两分钟，页面顶部会给出访问链接：`https://<你的用户名>.github.io/<仓库名>/`。打开即可直接游玩并分享。

## 词库说明

`words_cs.js` 中的所有术语定义均为面向 CIE 9618 教学的**原创改写**，非考试局版权材料，可自由公开使用（见 LICENSE）。定义力求准确、简洁、贴合考纲口径；个别措辞可按所用教材微调。
