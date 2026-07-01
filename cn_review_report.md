# words_cs.js 中文释义(cn)校对报告 · 9618 CS 语境

## 概况
- 词库共 260 词。本轮做两件事：(1) **校对 `cn` 字段**；(2) **为每词新增 `cn_def` 字段**（中文一句话解释，说清"是什么/干嘛用"，CS/9618 语境，≤30 字，用于学习卡右侧中文解释栏）。仅动 `cn`(校对) 和 `cn_def`(新增) 两个字段，未动 term / definition / example / level / topic 及全局变量、文件结构。
- `node --check` 通过。
- **cn_def：260/260 全部新增完成**，每条均 ≤30 字。例：Procedure 的 cn="过程/子程序（无返回值）"，cn_def="完成任务但不返回值的具名代码块，调用后不给出结果值"。
- cn 校对：该词库本身即按 9618 口径编写，绝大多数 `cn` 已是准确专业译名（如 寄存器/总线/中断/协议/数据包/编译器/解释器/字段/记录/主键/字符串/数组/嵌套循环/递归 等），无需改动。
- **cn 实际修正 4 条**（含 1 条配套调整），全部集中在"字面直译 / 易与相邻术语混淆"的地方。

## 修正明细（修正前 → 修正后）

| # | term | 修正前 cn | 修正后 cn | 理由 |
|---|------|-----------|-----------|------|
| 1 | Procedure | 过程 | 过程/子程序（无返回值） | 光写"过程"易被当日常义；补明"无返回值的子程序"这一 9618 核心区分点 |
| 2 | Function | 函数 | 函数（有返回值的子程序） | 与 Procedure 成对，点明"有返回值"，突出二者差异 |
| 3 | Parameter | 参数（形参） | 形参（形式参数） | 9618 严格区分 parameter(形参) / argument(实参)；直接以"形参"为主译更准确 |
| 4 | Serial file | 顺序（追加）文件 | 串行文件（按写入先后存放） | 原译"顺序"与相邻的 Sequential file 撞名，学生易混；改"串行"并说明存放方式 |
| — | Sequential file | 按键有序文件 | 顺序文件（按键排序） | 配合上条区分：serial=串行(按写入)、sequential=顺序(按键)，符合 9618 文件组织术语惯例 |

## 已确认正确、保留不改的关键术语（抽样）
- Field 字段（列）、Record 记录（行）、Primary key 主键、Foreign key 外键 — 数据库义正确，无"田地"类直译问题。
- Register 寄存器、Bus 总线、Interrupt 中断、Protocol 协议、Packet 数据包、Compiler 编译器、Interpreter 解释器 — 均为标准专业译名。
- String 字符串、Array 数组、Iteration 迭代/循环、Nested loop 嵌套循环、Recursion 递归 — 正确。
- Resolution 分辨率(图像) 与 Sample resolution 采样分辨率/位深 — 两处已按上下文分别译，正确。
- Statement/Expression/Operator/Operand/Argument/Key/Loop 等示例术语**未作为独立词条出现在本词库**，故无对应 cn 可改。

## 待老师定夺 / 可选优化（非错误，仅风格取舍）
1. **Parameter/Argument 配套**：本库有 Parameter(已改为"形参")但**无 Argument 词条**。若日后想让学生系统区分形参/实参，建议补一条 Argument = 实参（实际参数）。
2. **Attribute** 当前 cn="属性"（OOP 语境，正确）；数据库章节的"attribute"义(字段/属性)未单列词条，若需要可另补。
3. **Serial/Sequential 译名**：本报告采用"串行 vs 顺序"来区分。国内部分教材把 serial 也译作"顺序"，两者术语并不完全统一——如贵校教材有指定译法，可按教材统一。
4. **Secondary key** cn="辅助键/次键"：9618 上下文一般指"非主键的检索键"，译名可接受；若教材用"次要键"可据此微调。
