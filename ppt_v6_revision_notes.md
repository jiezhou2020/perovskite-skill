# PPT v6 内容修订清单

> 基于 `oral exam_260513_v6_SLPCI_12min.pptx` 的内容审稿结论。
> **范围**：仅内容层修订，不动版式、不动配色、不动字体。
> **不在本次范围内**：副标题（用户已弃用）、speaker notes（另议）。
> **生成日期**：2026-05-13

---

## 修订总览

| # | Slide | 类型 | 改动 | 预估工作量 |
|---|---|---|---|---|
| **C1** | S12 | 文字错误 | "Chen/Knight 2021" → "Chen 2021" | 1 分钟 |
| **C2** | S10 | 内容补全 | H1-H4 加统计判据 | 5 分钟 |
| **C3** | S6 | 内容补全 | 加 3 条文献矛盾横条 | 3 分钟 |
| **C4** | S7 | 内容补全 | Fan 2025 unresolved 加第 4 条 | 2 分钟 |
| **C5** | S12 | 措辞重写 | take-home 改诚实定位 | 2 分钟 |
| **C6** | S8 | 内容补全 | 4 步流程加时间窗标注 | 3 分钟 |
| **C7** | S11 | 内容补全 | Aim 序列加 SVD κ 数值标尺 | 7 分钟 |

**总工作量**：~25 分钟

---

## C1 — S12 引用错误

### 当前
```
Key references: Hoke 2015; Brivio 2016; Bischak 2017; Chen/Knight 2021; Peng 2023; Fan 2025.
```

### 改为
```
Key references: Hoke 2015; Brivio 2016; Bischak 2017; Chen 2021; Peng 2023; Fan 2025.
```

### 理由
Chen 2021 (Nat. Commun. 12:2687) 的作者是 Chen, Brocks, Tao, Bobbert——不含 Knight。Knight 是另一篇 2018 ACS Energy Lett. 的作者。两者混合是 codex 起草时的合并错误。

---

## C2 — S10 H1-H4 加统计判据

### 当前
四个 hypothesis 各有 "Validation:" 行，描述了**方法**但没有**决策阈值**。

例：
```
H1: PL red-shift is tail-dominated
   I-rich distribution tail + funneling explain PL better than average composition.
   Validation: S1/S2/S3 locking + TOF-SIMS tail vs PL peak
```

### 改为
每条 Validation 行末尾加一行红色判据（字号同 Validation 文本，色 #C00000）：

```
H1: PL red-shift is tail-dominated
   I-rich distribution tail + funneling explain PL better than average composition.
   Validation: S1/S2/S3 locking + TOF-SIMS tail vs PL peak
   Decision rule:  β₁ < 0  with 95% CI excluding 0
```

```
H2: CPD anomaly can be a precursor
   Local electrostatic anomalies may appear before PL hotspots in the same ROI.
   Validation: same-ROI PL/KPFM timing + locked chemistry
   Decision rule:  P[ t_CPD < t_PL | ROI ] > 0.5 + δ
```

```
H3: Optical recovery ≠ physical recovery
   PL can recover while strain, defects or surface chemistry retain memory.
   Validation: write–recover cycles + GIWAXS/XPS/Raman
   Decision rule:  | log₁₀ K | > 1   (Bayes factor, M_reversible vs M_irreversible)
```

```
H4: I-rich location is boundary-dependent
   Grain-center vs grain-boundary enrichment depends on geometry and interfaces.
   Validation: grain / surface / interface × thickness comparison
   Decision rule:  regime map ≠ universal rule (geometry-dependent boundary)
```

### 理由
v6 计划 §8 对每条假设都定义了具体决策阈值。把这些判据搬到 PPT 上**回应一个委员必问的问题**："你怎么定义假设被证实/证伪？" 没有量化判据，假设会被认为是"愿望式描述"而非可证伪科学陈述。

---

## C3 — S6 加 3 条文献矛盾横条

### 当前
S6 底部最后一行是：
```
The task is not to collect more independent evidence, but to invert multiple biased projections into one physical state model.
Core thesis
```

### 改为
在 "Core thesis" 之**前**（即在表格和 Core thesis 之间）插入一个紧凑的 3-列横条：

```
Three current contradictions in the field motivate this framework
─────────────────────────────────────────────────────────────────
①  PL signal is funneling-weighted,    │  Hoke 2015 → Ruth 2023
   not phase-fraction-weighted          │  ΔF_light, V_D scaling

②  KPFM CPD is a 5-component           │  Qu 2026
   convolution (W₀, V_bb, V_SPV,        │  fast-KPFM dark relax
   V_ion, V_trap)

③  Ex-situ probes can drive the         │  Fang 2024 vs Navid 2026
   very state they measure              │  directional disagreement
```

样式建议：横条用浅灰底（#F6F6F8），左侧编号红色（#C00000），文字 10pt #1A1A1A，引用 9pt #5A5A5A。占用约 1/5 slide 高度。

### 理由
v4 S21 用这 3 条矛盾撑起 "single characterization 不够"——是**领域内现成的内部矛盾**，比泛泛说"五种表征敏感度不同"有说服力 10 倍。委员一看就知道你**真读过文献且发现了里面打架的地方**。

---

## C4 — S7 Fan 2025 unresolved 加第 4 条

### 当前
"What remains unresolved" 列只有 3 条：
```
? No same-ROI operando PL/KPFM trajectory before freezing.
? Br is not directly measured; I/Cs is a proxy.
? Strain causality and device-relevant stacks remain open.
```

### 改为
4 条（新增第 2 条，原 2/3 顺延为 3/4）：
```
? No same-ROI operando PL/KPFM trajectory before freezing.
? Time evolution is sampled across different specimens,
  not a continuous trajectory of one ROI.
? Br is not directly measured; I/Cs is a proxy.
? Strain causality and device-relevant stacks remain open.
```

### 理由
v6 §4.3 列了 5 条 Fan 未解决问题，新增的这条（不同样品离散采样 vs 同 ROI 连续轨迹）**正是 SL-PCI "state-writing" 步骤的存在理由**——committing each measurement to a full history H。少了这条，committee 可能问："你跟 Fan 区别就 3 点？"你能多答一条就显得更有针对性。

---

## C5 — S12 take-home 改诚实定位

### 当前
```
SL-PCI connects dynamic optical/electrostatic histories to locked chemical/structural endpoints to decouple PIPS mechanisms.
Take-home message
```

### 改为
```
This work does NOT claim to first observe PIPS or first freeze
transient ion distributions.

It establishes a state-locked, physics-informed correlative
inference framework that decouples 5 mechanisms by joint posterior
across 6 instrument projections.

Take-home message
```

排版建议：两段之间留 0.2 inch 空白；第一段"NOT claim"色 #5A5A5A（次色，淡化），第二段"establishes"色 #1A1A1A（主色，强调）。

### 理由
v6 §17 的原始措辞用"我们不声称 X / 我们建立 Y"对照结构——这是**日本博士面试高分话术**：先排除常见误解，再立明确靶。直接 sales pitch（当前版）容易被反问"那 Fan 已经做了，你做什么"。

---

## C6 — S8 SL-PCI 4 步加时间窗

### 当前
4 个步骤下方只有方法描述：
```
Write state              Lock state              Read endpoint              Infer Z
    1                       2                        3                         4
Operando PL + KPFM       Rapid low-T            TOF-SIMS / XPS /         Bayesian model returns
define S0–S5 from        termination,           GIWAXS / Raman read       p(Z, θ | y), uncertainty
peak shift, linewidth... dark/inert transfer... chemical, surface...      and mechanism weights.
```

### 改为
每个步骤的方法描述**下方**加一行灰字时间窗标注（10pt Courier New，色 #5A5A5A）：

```
Write state              Lock state              Read endpoint              Infer Z
    1                       2                        3                         4
Operando PL + KPFM       Rapid low-T            TOF-SIMS / XPS /         Bayesian model returns
define S0–S5 from        termination,           GIWAXS / Raman read       p(Z, θ | y), uncertainty
peak shift, linewidth... dark/inert transfer... chemical, surface...      and mechanism weights.
─────                    ─────                  ─────                      ─────
time window:             time window:           time window:               time window:
ms — min                 seconds (quench)       static endpoint            offline
```

### 理由
v4 S23 mature 版有这个标注。**关键作用**：瞬间告诉委员为什么"先写后冻后读"在物理上**可行**——动力学有 3 个分离的时间尺度（毫秒级写、秒级锁、静态读），不会互相干扰。没这行的话，"state-locked" 听起来像 buzzword，加了之后变成可验证的工程约束。

---

## C7 — S11 Aim 序列加 SVD κ 数值标尺

### 当前
S11 三个 Aim 排列在 Year 1/2/3 时间轴上，每行写了任务但**没有量化的"识别能力进展"指标**：
```
Aim 1   State writing & locking      S0–S5 protocol; drift bound
Aim 2   same-ROI PL/KPFM → SIMS/XPS  Registered dynamic-to-endpoint maps
Aim 3   strain / disorder / degr.    GIWAXS + Raman + XPS chemical states
Aim 4   composition / passivation    Transfer tests → regime diagram
```

### 改为
每个 Aim 末尾加一个小框（建议色 #C00000 描边，宽 0.6 inch 高 0.3 inch），显示 SVD κ 数值进展：

```
Aim 1   State writing & locking      S0–S5 protocol; drift bound        ┌──────────┐
                                                                          │ κ ~ 10⁵  │
                                                                          │ baseline │
                                                                          └──────────┘

Aim 2   same-ROI PL/KPFM → SIMS/XPS  Registered dynamic-to-endpoint     ┌──────────┐
                                     maps                                 │ κ ~ 10²  │
                                                                          │ H₁/H₂    │
                                                                          │ testable │
                                                                          └──────────┘

Aim 3   strain / disorder / degr.    GIWAXS + Raman + XPS chemical      ┌──────────┐
                                     states                              │ κ ~ 10   │
                                                                          │ all Z    │
                                                                          │ resolved │
                                                                          └──────────┘

Aim 4   composition / passivation    Transfer tests → regime diagram    ┌──────────┐
                                                                          │ regime   │
                                                                          │ map      │
                                                                          └──────────┘
```

或者作为替代方案：在 Gantt 图下方加一行水平进度条，标 κ 在三个 Gate 处的目标值。

### 理由
v6 §11.2 的 SVD 条件数 κ 判据是**整份计划最硬的方法学差异化武器**之一。原始 v6 §11.2 写：

> All κ values are computed by SVD before any sample is fabricated —
> experimental power is a number you plan around, not a hope after data collection.

现在 PPT 完全没体现这点。加上数字标尺后，"识别能力的进展"从抽象承诺变成可追踪的量化目标，每个 Aim 的成功标准也直接绑到 κ 数值上。委员问"你怎么知道 Aim 2 算成功"——答案就是"κ 降到 10²"。

---

## 修订执行顺序（建议）

```
第 1 轮（5 分钟，纯文字替换，零样式）：
  C1   S12 引用修正
  C5   S12 take-home 措辞

第 2 轮（10 分钟，文字 + 简单格式）：
  C2   S10 H1-H4 加判据行
  C4   S7 加 Fan 第 4 条
  C6   S8 加时间窗

第 3 轮（10 分钟，需要新增视觉元素）：
  C3   S6 加 3 条矛盾横条
  C7   S11 加 κ 数值标尺框
```

**保守做法**：先做第 1 + 2 轮（C1 C2 C4 C5 C6），看效果；第 3 轮（C3 C7）需要新增视觉块，如果时间紧可以延后或舍弃。

C1/C2/C5 是**必改**（影响学术严谨与诚实定位）。C3/C4/C6/C7 是**应改**（提升说服力，但不致命）。

---

## 复查清单（执行完后逐项核对）

```
[ ] S6 — 3 条矛盾横条已加，不破坏原表格布局
[ ] S7 — Fan unresolved 4 条对齐良好，左右两列高度匹配
[ ] S8 — 4 个时间窗标注字号一致，未挤压主文本
[ ] S10 — 4 个 Decision rule 行字号色彩统一
[ ] S11 — κ 标尺框对齐 Aim 行，不破坏 Gantt 排版
[ ] S12 — 引用列已修正；take-home 两段间距合理
[ ] 全 deck 字号无回退、无新增颜色、无字体污染
[ ] markitdown 重新过一遍：无乱码、无 placeholder、无 "Chen/Knight"
```

---

## 不在本次范围

- 副标题（用户决定不加）
- 12 张 speaker notes 日文草案（另议）
- 版式调整（用户已满意）
- 配色字体修改（不动 visual DNA）
