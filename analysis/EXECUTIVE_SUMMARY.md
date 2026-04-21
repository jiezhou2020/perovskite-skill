---
name: 12 篇深读执行摘要
description: 6 + 6 篇 11 字段深读的跨文件整合。含方向内矛盾点、跨方向耦合机会、博士课题切入点更新。
type: project
date: 2026-04-21
scope: 12 papers from analysis/ directory
---

# 12 篇深读执行摘要

> 12 篇 11 字段完整深读已落盘到 `analysis/`：方向 1 四篇（Francisco-López, Yang, Park & Seok, Singh），方向 2 四篇（Hoke, Tang, Lu, Amat），方向 3 四篇（Yuan & Huang, Chen, Schwenzer, Tayagaki）。结合昨日 `phd_phase4` 的 11 篇精读，博士库现已覆盖 **23 篇** 核心文献。本摘要抽取跨文件的矛盾点、量化一致性、以及对你 PhD 研究计划的三处关键更新。

## 方向 1 · 蓝移解耦 · 四篇的收敛与矛盾

> **核心矛盾**：TE : EPI 的定量配比在实验端（Francisco-López 2019）与第一性原理端（Yang 2017）给出 60:40 vs 41:59 的反号结论——这不是哪一派错了，而是方法论差异暴露的系统偏差，是你博士课题最肥的切入点。

### 四篇定位

| 论文 | 方向 1 内的角色 | 一句话贡献 |
|---|---|---|
| Francisco-López 2019 | 实验基准 | TE 与 EPI 等位（60:40），dE₀/dT = 0.26 meV/K |
| Yang 2017 | 理论基准 | 第一性 AHC 给 EPI 主导（59:41），300→400 K EPI +86 meV |
| Singh 2016 | 无序先驱 | 首次定量无序参量 P，发现 Urbach focus E₀ 在带隙"下方"（反常） |
| Park & Seok 2019 | 三方向桥梁综述 | Goldschmidt t、H⁺ 迁移 0.17–0.29 eV、MA 电偶极矩 10× FA |

### 三处关键锚点收敛

Singh 2016 给出 MAPbI3 **四方相 dEg/dT = +2.50×10⁻⁴ eV/K**（反号），但作者"忽略 EPI 负贡献"——这正是 Francisco-López 2019 后续反驳的起点。两篇之间的 3 年间隔里，方向 1 的主流认识从"TE 独占"转向"TE + EPI 等位"，Singh 是这条路的原点。

Park & Seok 2019 量化了 **H⁺ 迁移势垒 0.17–0.29 eV**，接近 kT(300 K) = 25 meV 的 7–12 倍——这意味着任何 PL/吸收温变实验在 > 250 K 时"光平衡假设"会破坏。这是方向 1 所有温度依赖实验都要警惕的系统误差来源。

Yang 2017 给出 **CBM 贡献 −30 meV、VBM 贡献 −116 meV**（300→400 K）的电-声拆分，CBM/VBM 不对称贡献是后续轨道分辨 ARPES 实验的直接判据。

## 方向 2 · 相分离 · 四篇构成"奠基→观测→组分→稳定化"链条

> **核心发现**：Hoke 2015 只给唯象现象，Tang 2018 给空间直接观测，Amat 2014 给组分-结构-带隙的四步链条（氢键→倾转→共价性→SOC→Eg），Lu 2025 给出新的"晶格膨胀 ±1%"稳定化阈值——四篇串起来就是一条完整的"现象→机理→工程"推进路径。

### 新发现的关键阈值

Lu 2025 **体积膨胀 ±1% 阈值**：+1% 时亚稳 60° 相比 0° 高 >6 meV；−1.01% 时 60° 反超更稳定——意味着水吸附诱导 ~1% 膨胀即可关闭 Br3⁻/I3⁻ 通道。这是方向 2 里第一次把"膨胀量化"钉到 1% 精度的论文，solvent engineering 如果能把残余膨胀稳定在 +0.5%–1%，就有机会复制该效果而不引入水。

Amat 2014 的 **c 轴倾转角 7° (FA) vs 22° (MA)** 差异与 SOC-GW 带隙 1.48 vs 1.67 eV 差异形成一一对应——R² = 0.999 的 parabolic 拟合暗示 pseudo-JT（赝杨-特勒）机制在起作用。这把 Muscarella 2020 的"化学压力 = Cs 替代"推广到"A 位阳离子氢键数"作为更细的调节参数。

### 跨篇量化一致性

Hoke 2015 给出 Br:I > 1:4 为相分离阈值；Tang 2018 局域成像给出阈值下限到 Br:I = 1:10；Aydin 2020（其他方向但涉及 tandem）也报 Br:I > 1:4 作为 tandem 失稳边界——三篇独立报道的 1:4 比例是 field 共识锚点。

## 方向 3 · 离子迁移 · 四篇分别代表四种测量范式

> **核心发现**：方向 3 四篇测 E_a 的方法完全正交——Schwenzer 走温度循环退化、Tayagaki 走瞬态光电流 Arrhenius、Yuan & Huang 综述 DFT、Chen 2020 走 TAS + DFT 双源。四种方法在 0.27–0.30 eV 给出惊人一致的 I⁻ 空位 E_a，这是 field 最硬的量化锚点。

### E_a 数值的交叉验证

| 论文 | 方法 | E_a(I⁻) |
|---|---|---|
| Futscher 2018（昨日） | Transient capacitance | 0.29 ± 0.06 eV |
| Muscarella 2020（昨日）| TID 直测 | 0.14–0.15 eV（暗态）、0.09 光下 |
| Tayagaki 2023 | 瞬态光电流 Arrhenius | 0.27 ± 0.01 eV |
| Chen 2020 | TAS + DFT | 0.68 → 0.905/0.96 eV（钝化后）|
| Yuan & Huang 2016 综述 | DFT 多源 | 0.08–0.58 eV（跨文献分歧） |

Futscher / Tayagaki / Muscarella 三篇独立技术收敛到 **~0.28 eV** 的 I⁻ 迁移基准，这是你后续任何 solvent scan 必须对标的数值。Chen 2020 的 **0.68 → 0.96 eV 抬升** 是芳铵钝化的能垒增量，用 TAS + DFT 双源互证是方向 3 最严谨的实验方式。

### 退化模式的两种时间尺度

Schwenzer 2018 发现 **温度循环（10–60 °C，140 min）** 下 J_SC 降至初值 <20%，而恒温同窗口只降 10–22%——**循环 vs 恒温差 4 倍**。这揭示 PSC 的 intrinsic 温度敏感点不是静态温度而是 dT/dt，与 Feng 2023（周期加热反而抑制相分离）构成一对镜像：快速温度变化对相分离是抑制性的、对器件级离子迁移却是放大性的。这个矛盾是博士课题里一个尚未被统一的现象。

Tayagaki 2023 给出 **15→45 °C 可动离子浓度上升 3 倍**（N_fast 10¹⁸→3×10¹⁸ cm⁻³），且"光-暗循环每圈累降 9–11%"——这是方向 3 里第一次把"循环效应"量化到单周期单位，solvent engineering 可直接拿这条作为"solvent 能不能压低累降速率"的可证伪判据。

## 三方向的跨向耦合 · 新发现

> **三方向其实通过 "H⁺ 行为 + 空位 + 晶格膨胀" 三个共享物理量紧耦合**，Park & Seok 2019 综述第一次把这条线索讲清楚。你博士课题的长期主线可以围绕"三个共享物理量的统一诊断平台"来设计。

方向 1 的 Singh 2016 发现 Urbach focus 位置与结构无序参量 P 线性相关；方向 2 的 Lu 2025 发现体积膨胀 ±1% 阈值；方向 3 的 Tayagaki 2023 发现可动离子浓度随温度上升 3 倍——这三条锚点**都能被同一个"晶格温度依赖变温 XRD + 变温 PL + 变温阻抗谱"平台同批测到**，如果你能搭起这个平台，就在一个样品上同时产出三方向的数据。

Amat 2014 的"氢键→倾转→共价性→SOC→Eg"四步链条第一次把方向 2 的组分工程和方向 1 的带隙机制连起来；Park & Seok 2019 又把 MA 的 H⁺ 碎裂和方向 3 的离子迁移连起来——**所以 A 位阳离子是三方向的公共变量**。博士课题若以"A 位阳离子比例（MA/FA/Cs 三元）为主变量、solvent 为次变量"做系统扫描，可在同一个扫描矩阵里同时产出方向 1 Eg(T) 重整化、方向 2 I_threshold、方向 3 E_a 三组数据。

## 博士研究计划更新（基于 12 篇深读）

### 相比 phd_phase4 计划的三处增补

第一，**A 位阳离子扫描矩阵**成为首年实验的核心。原计划仅把 solvent 作为主扫描变量，现在升级为 2D 扫描：A 位（5 点：pure MA、75:25 MA:FA、50:50、25:75、pure FA + 10% Cs）× Solvent（3 点：DMF、DMF:DMSO 4:1、DMF:DMSO 4:1 + 硫脲）= 15 格。每格同批出方向 1/2/3 三组数据。

第二，**引入 Chen 2020 的 TAS + DFT 双源 E_a 工作流**作为方向 3 主要 readout，比 Futscher 单一 transient capacitance 强度更高、争议更小。具体测法：钝化前后对照，对每个 A 位组合测 TAS 得实验 E_a，再做 DFT NEB 对照 DFT E_a，当两者 ±0.05 eV 内一致时接受该 solvent 的 E_a 值。

第三，**把 Urbach focus 分析（Mukhuti 2022 方法 + Singh 2016 无序参量）作为方向 1 的 main readout**，而不是原计划的 Hall/THz 迁移率。Urbach focus 门槛低（只要变温 PL），能同时给 ZPR 和 σ₀ 两个量，这两者都与 solvent 变量独立。

### 关键"可证伪实验"升级

Solvent 变量在 Muscarella 主曲线上的位置：若 solvent 确实通过化学压力起作用，-ln(k_seg) 与 ΔV/V₀（XRD）应落在 Muscarella 2020 的主曲线上；偏离即 solvent 触及了 Ruth 模型外的独立轴（**预期最可能是 Amat 2014 揭示的氢键-倾转轴**）。

Solvent 变量对 E_a 的影响：若 solvent 改 bulk，Futscher transient capacitance 与 Dey TD-IS 的 E_a 应同向变化；若 solvent 只改 GB，两者差距拉大（TD-IS 随 solvent 变、transient capacitance 不变）。

## Next steps

1. 要不要把这份 EXECUTIVE_SUMMARY.md 的精华要点拉进 MEMORY.md，作为未来会话的快速上下文入口
2. 12 篇的整合已完成，按你先前说的"拓展 6 篇"节奏，剩下 17 篇（方向 1 · 7、方向 3 · 3、其他 · 7）要不要继续分 3 批深读——或者停在这里，先做"A 位 × Solvent 扫描矩阵"的实验设计文档
3. 要不要把"12 篇深读 + EXECUTIVE_SUMMARY"打包成一份 PPTX 用 pptx skill 生成，方便你给导师汇报
