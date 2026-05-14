# PPT v7 → v8 改版任务：基于用户审稿批注的精确执行 prompt

> 数据源：用户在 `oral exam_260513_v7_SLPCI_figfirst_rigorous_updatedreviewed.pptx` 中**直接画在 slide 上的中文批注**（不是 PowerPoint comments，是文本框形式）。
> 本 prompt 已把批注 + 结构调整 + 视觉规则全部解析为可执行指令。
> 生成日期：2026-05-13

---

## 0. 把用户原话先列出来（作为执行依据）

### 用户在每张 slide 上的中文批注原文（已用 XML 解析校正）

| Slide（reviewed 顺序）| 用户批注（原文）|
|---|---|
| **S1** | 整篇 PPT 的风格、配色要保持一致性。文字字体大小控制在 **12-16** 之间。|
| **S2** | 三栏各加一条：**"预留 Fig1/2/3 这些文本描述和格式，图片可以去除掉，我后续手动添加"** + "文本框字体要能够自动换行，描述内容参照原来的 PPT 内容进行修改优化完善，注意排版不要文字重叠或者形成遮挡"|
| **S3** | 两个 Fig 处："预留 Fig. 的文本格式，这个 Fig 的编号是 **4** 了，Fig 描述的文本格式参照论文中的格式，但是字体格式统一为 **12-16** 之间；然后图可以删了我自己手动传" + "**保留原来 PPT 里面介绍的内容，包括隔层的作用，以及钙钛矿太阳能的工作原理，你可以做精简，但不要删这么多**，这一页主要要重新思考内容怎么填"|
| **S4** | "图片预留位置可以适当放大，每个插图都应该预留 Fig 描述文本的位置，跟之前同理，Fig 描述的格式应该参考论文里面的格式：**这一页的核心是调整图片大小，适当放大**"|
| **S5（实际是 reviewed 顺序第 5 张，原 S7 拖过来的）**| "**论文调研这页应该放在这个位置，不要局限一篇论文，按照将相分离是什么东西说明白的方向去写内容**，内容可以用我们论文库里面的论文完善。核心在于如何将相分离跟观众介绍清楚，并引出核心矛盾点，顺利往下一页的提出假设过渡"|
| **S6（reviewed 第 6 张，原 S5）**| "**跟上面的一页合并在一块就可以了吧？我没了解为什么要两页的文献调研和介绍？**"|
| **S7（reviewed 第 7 张，原 S6 = 5 coupled mechanisms）**| "这一页挺好，但是字体有点小，字体和插图的大小调整一下就好了"|
| **S8/9/10** | **无批注**（视为 OK，仅在新位置下需 footer 重新编号）|
| **S11** | "调整字体大小，启动自动换行，注意字体不要重叠或遮挡其他区域"|
| **S12** | "调整字体大小，启动自动换行，注意字体不要重叠或遮挡其他区域，**预留插图位置，这里我会通过 AI 制作图片来展示预期结果**"|

---

## 1. 核心结构决策（必须执行）

### 决策 A：deck 缩为 **11 张**

合并 reviewed-S5 + reviewed-S6 为一张综合性 PIPS 引入页。新结构：

| 新编号 | 内容 | 来源 |
|---|---|---|
| **1** | Title cover | 不动 |
| **2** | Past research background | 不动主体，加 Fig 描述框 |
| **3** | PSC structure + working principle | **恢复 v4 早期被删的内容**，加 Fig 描述框 |
| **4** | Three coupled challenges | 放大图位 + Fig 描述框 |
| **5** | **新合并：PIPS Phenomenon & Multi-Paper Literature Position**（reviewed-S5 + reviewed-S6 合并）| 重写 |
| **6** | 5 coupled mechanisms (research question) | 仅字号 / 图大小调整 |
| **7** | SL-PCI 4-step framework | 不动（无批注）|
| **8** | Hidden state Z + physical model | 不动（无批注）|
| **9** | H1–H4 falsifiable hypotheses | 不动（无批注）|
| **10** | Three-year plan + Gantt | 字号 + 自动换行 |
| **11** | Expected outputs + fit + regime diagram 图位 | 字号 + 自动换行 + 加 regime diagram 图框 |

### 决策 B：所有 footer 页码必须更新为 N/11（不再是 N/12）

当前 reviewed 文件因拖动留下的页码错位：
- S5 显示 "7/12" → 应改 "5/11"
- S6 显示 "5/12" → 合并掉，删除
- S7 显示 "6/12" → 应改 "6/11"
- 其他每张都要 X/11

### 决策 C：保留 SL-PCI 方法学的现有视觉（S7-S10 用户没动 = 认可）

不要对 reviewed-S8/S9/S10 的版式做大改。只在新编号下做 footer 更新 + 文字字号统一到 12-16pt。

---

## 2. 全局视觉规则（每张 slide 都要遵守）

### 字体字号

```
标题（slide title）       22pt Bold Source Serif 4 或 Inter Bold
副标题（slide subtitle）  14-16pt Inter Medium #5A5A5A
正文（body text）         12-14pt Inter Regular #1A1A1A
Fig caption（标号 + 标题）12pt Inter Medium #1A1A1A
Fig caption（描述正文）   10-12pt Inter Regular #1A1A1A
Fig citation（引用源）    8-9pt Inter Italic #5A5A5A
Footer 页码              8pt Courier New #666666
```

**硬约束**：所有正文 ≥ 12pt 且 ≤ 16pt（用户原话）。**禁止用 10pt 或更小做正文**（投影看不清）。

### 自动换行（用户多次强调）

所有文本框必须：
- **启用自动换行**（autofit / wrap = true）
- **不能溢出**框边界
- **不能与其他文本/图叠压**
- 文本框宽度 ≥ 文字最长行宽 + 0.2 inch padding

### 配色（不动，沿用 v7）

```
强调红：#C00000
深稳红：#8A1538 / #B50D1F
主文字：#1A1A1A
次文字：#3A3A3A / #5A5A5A / #666666
边线：  #BBBBBB / #C8C8CC / #D4D4D4
背景：  #FFFFFF / #F2F2F2 / #F6F6F8
```

---

## 3. Fig 描述框统一规范（必读）

用户原话："**Fig 描述的文本格式参照论文中的格式**"。

这意味着每个图位下方必须有一个**两层 caption 文本框**：

```
┌───────────────────────────────┐
│ Fig. N  Short bold caption      │  ← 12pt Bold，色 #1A1A1A
│ Detailed description following  │  ← 10-12pt Regular，色 #1A1A1A
│ standard academic figure        │
│ caption convention (1-2 sentences).│
│                                 │
│ Source: AuthorYear, Fig. N      │  ← 8-9pt Italic，色 #5A5A5A
└───────────────────────────────┘
```

**关键**：
- Fig. N 编号必须**全 deck 连续递增**（Fig. 1, Fig. 2, ... Fig. 18+），而不是每张 slide 都从 Fig. 1 开始
- 描述要"参照论文格式"：一句话主题 + 一句话说明
- 引用必须含作者 + 年 + 论文中的图号

### Fig 编号续序（基于用户在 S3 提到 Fig 编号已经到 4）

```
S2 (3 figs):  Fig. 1, Fig. 2, Fig. 3
S3 (2 figs):  Fig. 4, Fig. 5
S4 (3 figs):  Fig. 6, Fig. 7, Fig. 8
S5 merged (≥3 figs): Fig. 9, Fig. 10, Fig. 11
S6 (5 figs at pentagon vertices): Fig. 12-16
S7 (1 fig method composite): Fig. 17
S8 (1 fig free-energy anchor): Fig. 18
S9 (4 figs for H1-H4): Fig. 19, 20, 21, 22
S10 (Gantt, no fig): —
S11 (regime diagram placeholder): Fig. 23
```

总图数：约 **23 张图框**（用户后续手动贴图）。

---

## 4. 逐 Slide 详细执行规范

### Slide 1 — Title Cover

**现状**：v7 基本 OK，有用户批注："整篇 PPT 的风格、配色要保持一致性。文字字体大小控制在 12-16 之间。"

**改动**：
- 主标题不动（已是 22pt）
- 删掉 reviewed 文件里残留的中文批注框（"整篇 PPT 的风格..."这条 floating 文本）
- 副标题保持现状（用户之前明确说不加）
- footer "1/12" → "1/11"

**输出**：清爽的封面，无 floating 注释，**字号严格 12-16pt 范围内**（除主标题 22pt）。

---

### Slide 2 — Past Research Background

**现状**：3 栏（Waseda EIP / Huawei XPS / LONGi），每栏有图。

**改动**（用户原话）：
- **删除现有图片**（用户后续手动加）
- **保留**：3 个时间段标签、文字描述（M1/M2 分级、研究内容列表、Output 行）
- **每栏加 1 个"Fig 描述文本框"占位**：内含 Fig 编号 + 主标题 + 副标题（参照论文格式）

**3 个 Fig 描述框预制内容**：

```
Fig. 1  Electrostatic inkjet printing apparatus
Original setup and optimized process-control modules including
Taylor-cone control, Coulomb fission, and nozzle geometry.
Source: Lin Master Thesis 2023, Fig. 1

Fig. 2  Solvent engineering of perovskite films
XRD on FTO substrate and cross-section SEM showing 1 μm film
thickness with uniform crystalline structure.
Source: Lin Master Thesis 2023, Fig. 2

Fig. 3  Industry deployment context
XPS analyzer hardware integration (Huawei 2012 Lab) and
utility-scale PV plant layout (LONGi Solar).
Source: own work, Huawei + LONGi 2024
```

**版面要求**：
- 每个 Fig 描述框上方留出 **3.2" × 2.2"** 的空白图位（用 0.5pt #D4D4D4 描边矩形 + 中心标 "DROP FIG HERE"）
- Fig 描述框紧贴图位下方
- 整体字号 ≤ 14pt 正文，12pt caption

**footer**: 2/11

---

### Slide 3 — PSC Structure（重大调整）

**现状**：当前 reviewed 版本被精简过，用户原话："**保留原来 PPT 里面介绍的内容，包括隔层的作用，以及钙钛矿太阳能的工作原理，你可以做精简，但不要删这么多**"。

**改动**：**回到 v4 版本的内容，但版式现代化**。

需要重新加入的关键内容（从 v4 的对应 slide 抓回）：
- **n-i-p / p-i-n 两种器件结构**（含 Metal Electrode / ETL / Perovskite / HTL / TCO 五层标注）
- **能带对齐 & band bending** 示意
- **工作原理 4 步**（Absorption / Separation / Selective Extraction / Power Generation）—— 现在的版本只有 3 步，加回 Selective Extraction
- **Tandem relevance bridge**（顶池需 1.65-1.80 eV）

**Fig 描述框**（2 个，编号从 4 开始）：

```
Fig. 4  Device architectures
(a) n-i-p and (b) p-i-n perovskite solar cell stacks showing
selective transport layers (ETL/HTL) sandwiching the perovskite
absorber between TCO and metal electrodes.
Source: standard PSC architecture review

Fig. 5  Energy alignment and operation
Equilibrium band diagram of a p-i-n device showing built-in
field, band offsets, and selective carrier extraction pathways
under illumination.
Source: standard PSC physics reference
```

**版面要求**：
- 左 1/2：Fig. 4 占位 3.4" × 2.6" + 描述框
- 右 1/2：Fig. 5 占位 3.4" × 2.6" + 描述框
- 底部 1/4：工作原理 4 步水平流（Absorption → Separation → Selective Extraction → Power Generation），每步 1 行 ≤ 25 词
- Tandem relevance 一行红字底部

**footer**: 3/11

---

### Slide 4 — Three Coupled Challenges

**现状**：3 栏（Stability / Upscaling / Efficiency），每栏含 PROBLEM + RESEARCH DIRECTION + 底部金属指标牌。

**改动**（用户原话）：
- **图片预留位置可以适当放大**——当前没图位，要加
- **每个插图都应该预留 Fig 描述文本的位置**
- **核心是调整图片大小，适当放大**

**版面要求**：
- 每栏顶部加一个 **2.5" × 1.8"** 图位（之前没有的，新加）
- 图位下方加 Fig 描述框

**3 个 Fig 描述框**（编号 6-8）：

```
Fig. 6  Operational stability under field stress
Ion migration, phase segregation and interfacial degradation
illustrated by ISOS-L1 aging curve / T80 trajectory.
Source: ISOS protocols 2020 / Fang 2024 review

Fig. 7  Lab-cell to module area gap
Blade / slot-die / inkjet coating schematics showing how wet-
film uniformity and defect density change with substrate area.
Source: large-area coating review

Fig. 8  Single-junction efficiency ceiling and tandem route
NREL certified-efficiency chart and Shockley–Queisser limit
versus bandgap, identifying the WBG (1.65–1.80 eV) sweet spot.
Source: NREL 2025 / standard SQ analysis
```

**底部金属指标牌**保留：>1000 h / ~800 cm² / 1.65–1.80 eV

**footer**: 4/11

---

### Slide 5 — **NEW MERGED**: PIPS Phenomenon & Literature Conflicts

**这是整份 deck 最大的改动。** 用户合并原 reviewed-S5（PIPS overview）+ reviewed-S6（Fan 2025 literature position）→ 一张综合页。

**用户原话定位**：
1. "**论文调研这页应该放在这个位置**"
2. "**不要局限一篇论文**"（不只 Fan 2025）
3. "**按照将相分离是什么东西说明白的方向去写内容**"
4. "**内容可以用我们论文库里面的论文完善**"
5. "**核心在于如何将相分离跟观众介绍清楚，并引出核心矛盾点**"
6. "**顺利往下一页的提出假设过渡**"（下一页是 5 coupled mechanisms = 6/11）

**版面建议**（13.33" × 7.5"）：

```
┌──────────────────────────────────────────────────────────────────┐
│ 标题: Photoinduced phase segregation in mixed-halide WBG —      │
│       what each generation of work reveals                       │
│ 副标题: PIPS is real, reversible, and mechanistically debated.  │
│ Six progressive studies expose five competing explanations.      │
│                                                            占 13% │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  PIPS 现象本身（用 2 张图 + 3 句话讲清楚）              │   │
│  │  ┌────────────┐  ┌────────────┐                          │   │
│  │  │  Fig. 9    │  │  Fig. 10   │                          │   │
│  │  │  2.8×2.0in │  │  2.8×2.0in │  Phenomenon description │   │
│  │  │  Hoke 2015 │  │  Fan 2025  │  3 lines × ≤30 words    │   │
│  │  │  Fig. 1    │  │  Fig. 3    │                          │   │
│  │  └────────────┘  └────────────┘                          │   │
│  │                                                            │ │
│  │  Fig. 9 caption    Fig. 10 caption                        │   │
│  │                                                       占 42% │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  文献矛盾点：每一代研究捕获到一部分但解释不一致              │   │
│  │  ┌─────────────┬─────────────┬─────────────┐              │   │
│  │  │ Hoke 2015   │ Brivio 2016 │ Bischak'17  │              │   │
│  │  │ trap-form   │ thermo gap  │ polaron     │              │   │
│  │  │ + recovery  │ + miscib.   │ strain      │              │   │
│  │  ├─────────────┼─────────────┼─────────────┤              │   │
│  │  │ Chen 2021   │ Peng 2023   │ Fan 2025    │              │   │
│  │  │ funneling   │ spinodal    │ cryo plunge │              │   │
│  │  │ unified G   │ thresholds  │ + EELS+4D   │              │   │
│  │  └─────────────┴─────────────┴─────────────┘              │   │
│  │                                                       占 30% │   │
│  └──────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│  Core contradiction（红字一行）：                                │
│  All six studies see different facets — none alone identifies   │
│  WHICH hidden mechanism dominates a given observation.       占 8% │
├─────────────────────────────────────────────────────────────────┤
│  Transition: → Next slide proposes five coupled latent       占 4% │
│  mechanisms as the unifying framework.                          │
└──────────────────────────────────────────────────────────────────┘
```

**关键设计意图**：
- **上半部**（PIPS 现象）：用 Hoke + Fan 两张图 **直接展示 PIPS 是什么**（红移 + 离子重排）
- **中半部**（文献矛盾）：6 个 paper 卡片 → 每个 1 行说"贡献"，集体显示**没有任何一个独占解释权**
- **底部 core contradiction**：用红字明确说 "六篇都对、但都不完整"
- **过渡**：明确指向下一页（5 coupled mechanisms）

**Fig 描述框**（编号 9-10）：

```
Fig. 9  Photoinduced PL red-shift and dark recovery
Time-resolved PL of MAPb(BrxI1-x)3 under continuous illumination
showing reversible red-shift attributed to I-rich domain formation.
Source: Hoke et al. 2015, Fig. 1

Fig. 10  Plunge-freeze cryo-EM endpoint maps
ADF morphology + EELS I/Cs ratio + 4D-STEM lattice parameter of
the same grain before / after illumination / after relaxation.
Source: Fan et al. 2025, Fig. 3 (panels a–c, cropped)
```

**6 paper 文献卡片细节**：每张卡片格式：
```
┌───────────────┐
│ Hoke 2015     │  ← 12pt Bold
│ ────────────  │
│ trap formation│  ← 10pt Regular，1 行
│ + dark recov. │  ← 10pt Regular，1 行
└───────────────┘
卡片尺寸 ~2.5" × 1.0"，6 张排成 2×3 网格
```

**footer**: 5/11

---

### Slide 6 — Five Coupled Latent Mechanisms（保留原结构，只调字号/图大小）

**现状**：用户原话"**这一页挺好，但是字体有点小，字体和插图的大小调整一下就好了**"。

**保留**：
- 五边形拓扑（5 顶点 + 10 条耦合细线）
- 中心 Z = {x_Br/I, N_defect, ϕ_local, ε, C_deg}
- 右侧观察投影矩阵
- 5 个顶点的 Fig 占位（编号 12-16）

**改动**：
- **每个顶点的子图框**从原来的 1.6"×1.2" **放大到 1.8"×1.4"**
- **顶点变量名字号**从原来的 ~10pt **放大到 12pt Bold**
- **耦合细线**保持 0.5pt（不改）
- **右侧投影矩阵字号**从原来 9pt 提到 **11pt**（用户要求 12-16，但表格内部允许 11pt 例外，否则放不下）
- **Fig citation 字号**保持 8-9pt（这个是细节标注，例外允许小字）

**5 个顶点的 Fig 描述框**（编号 12-16）：

```
Fig. 12  Halide composition imaging
Hyperspectral PL mapping of MAPb(Br0.9I2.1)3 showing 32×32 spatial
distribution of I-rich and Br-rich emission components.
Source: Tang et al. 2018, Fig. 1

Fig. 13  Defect-mediated halide rearrangement
Local iodide-defect-driven kinetics; growth rate vs recovery rate
dependence on stoichiometry R_H.
Source: Tiede et al. 2020, Fig. 2

Fig. 14  Grain-boundary potential map
KPFM surface potential contrast at grain boundary vs grain center,
with associated band-bending schematic.
Source: Tang et al. 2018, Fig. 5

Fig. 15  Strain-activated halide segregation
Comparison of moderate-Br (35%) vs high-Br (65%) films showing
grain-boundary vs whole-film segregation under strain.
Source: Zhao et al. 2020, Fig. 4

Fig. 16  Degradation marker overview
Cross-mechanism review of irreversible chemistry markers
(I0, Pb0, PbI2) distinguishing reversible PIPS from chemical loss.
Source: Fang et al. 2024, Fig. 4
```

**footer**: 6/11

---

### Slide 7 — SL-PCI 4-Step Framework

**现状**：用户**无批注** → 视为认可。

**改动**：
- footer 从 8/12 → **7/11**
- 正文字号统一到 12pt（如有 10pt 段落，升到 12pt 并启动 wrap）
- **保留**当前 Fig-S8 method evidence composite 占位（Fig. 17）

**Fig 描述框**（编号 17）：

```
Fig. 17  Method evidence composite
(top) Same-ROI operando PL/KPFM time-series demonstrating
state-writing feasibility; (bottom) plunge-freeze workflow
demonstrating state-locking feasibility.
Source: Tang et al. 2018, Fig. 2 + Fan et al. 2025, Fig. 1
```

---

### Slide 8 — Hidden State Z + Physical Model

**现状**：用户**无批注**。

**改动**：
- footer → **8/11**
- 字号统一 12pt
- **删除** Picture30, Picture34 两个公式截图（如果还在），改用 Cambria Math 真排版：

```
G_total = G_mix + G_carrier + G_elastic + G_defect + G_interface

∂x/∂t = ∇·[M ∇μ]
μ = δF/δx
```

- **保留** Fig-S9 free-energy anchor 占位（Fig. 18）

**Fig 描述框**（编号 18）：

```
Fig. 18  Photocarrier funneling free-energy anchor
Dark vs illuminated mixing free-energy curves showing how
photocarrier funneling shifts the miscibility gap and drives
I-rich nucleation under illumination.
Source: Ruth et al. 2023, Fig. 2
```

---

### Slide 9 — H1–H4 Falsifiable Hypotheses

**现状**：用户**无批注**。

**改动**：
- footer → **9/11**
- 字号统一 12pt
- **保留** 2×2 网格 + 4 个 Fig 占位（Fig. 19-22）

**4 个 Fig 描述框**（编号 19-22）：

```
Fig. 19  Threshold intensity vs composition (H1 anchor)
Photoexcitation threshold for halide segregation as function of
Br fraction and temperature, supporting tail-dominated kinetics.
Source: Ruth et al. 2023, Fig. 3

Fig. 20  CPD anomaly at grain boundary (H2 anchor)
KPFM surface-potential map showing local CPD anomaly preceding
PL hotspot in the same ROI.
Source: Tang et al. 2018, Fig. 5

Fig. 21  Reversible PL recovery in the dark (H3 anchor)
Dark-state PL recovery curve over multiple write–recover cycles
indicating possible optical-vs-physical recovery mismatch.
Source: Hoke et al. 2015, Fig. 2c

Fig. 22  Boundary-condition dependence (H4 anchor)
Strain-activated segregation showing GB-localized vs whole-film
behavior depending on Br concentration and strain class.
Source: Zhao et al. 2020, Fig. 4
```

---

### Slide 10 — Three-Year Plan + Gantt

**现状**：当前 Gantt 图 + 4 个 Aim + Gate 1/2/Final + κ 进展。

**改动**（用户原话："调整字体大小，启动自动换行，注意字体不要重叠或遮挡其他区域"）：
- footer → **10/11**
- 所有正文字号 ≥ 12pt
- **Gate 文本框启动 autofit**，确保字不溢出
- 任务条标签字号 ≤ 12pt 但 ≥ 11pt（同 slide 6 投影矩阵特例）
- κ 进展数字保持 #C00000 强调色

---

### Slide 11 — Expected Outputs + Feasibility + Fit

**现状**：3 列输出 + 3 列风险 + 3 列 fit。

**改动**（用户原话："调整字体大小，启动自动换行，注意字体不要重叠或遮挡其他区域，**预留插图位置，这里我会通过 AI 制作图片来展示预期结果**"）：

- footer → **11/11**
- 字号 ≥ 12pt
- **加入 1 个 regime diagram 图框**（Fig. 23）
- 位置建议：右上角 4.0" × 3.0"，描述框紧贴下方
- 其他文字内容收缩到左侧 + 底部

**Fig. 23 描述框**：

```
Fig. 23  Mechanism regime diagram (expected outcome)
Composition × intensity × interface phase map showing which
mechanism (composition / electrostatic / strain / defect /
degradation) dominates each regime, with posterior uncertainty
contours.
Source: AI-generated mock-up, this work (placeholder)
```

底部 take-home + thank you + key references 保留不动。

---

## 5. 执行步骤（设计师必读）

```
Step 1 — 打开 reviewed 文件并清理
  打开 oral exam_260513_v7_SLPCI_figfirst_rigorous_updatedreviewed.pptx
  → 删除所有中文批注文本框（这些是用户审稿用的，不进 final deck）
  → 用户的中文批注集中在每张 slide 的右上/右下角，识别这些 floating
    text frame（颜色通常不在正常字色域内）

Step 2 — 结构调整：合并 + 重排
  当前 reviewed 顺序是 12 张：
  1, 2, 3, 4, [原S7=lit position], [原S5=PIPS], [原S6=5mech],
  8, 9, 10, 11, 12
  
  → 合并第 5 和第 6 张为新的"PIPS Phenomenon & Literature
    Conflicts"slide，使用 §4-S5 的版面规范
  → 删除合并后多余的旧 slide
  → 重新排列为 11 张：
    1, 2, 3, 4, [merged], [5-coupled], 8, 9, 10, 11, 12 (原编号)

Step 3 — Footer 重新编号
  所有 footer 文本框（右下角 #666666 8pt）改为 N/11：
  1/11, 2/11, 3/11, 4/11, 5/11, 6/11, 7/11, 8/11, 9/11, 10/11, 11/11
  
  注意：原 reviewed-S5 的 footer 显示 "7/12"（拖动残留），
       原 reviewed-S6 显示 "5/12"，
       原 reviewed-S7 显示 "6/12"
       这些都要重写

Step 4 — 字号统一
  全 deck 扫描每一个文本框：
  → 标题：22pt
  → 正文：12-14pt（中间值 13pt 推荐）
  → caption：12pt
  → 引用：8-9pt（允许例外）
  → footer：8pt（允许例外）
  → 表格内：11pt（允许例外，仅当 12pt 放不下时）
  
  禁止：10pt 及以下做正文。

Step 5 — 自动换行启动
  每一个文本框 → 右键 → "格式形状" → "文本选项" → "调整文本":
  - 调整选项设为"根据文字调整形状大小"或"将文本剪裁到形状大小"
  - 关键：autofit = true，wrap = true
  - 文本框宽度必须 ≥ 单行最长字符宽度 + 0.2" padding

Step 6 — 图位 + Fig 描述框创建
  按 §4 各 slide 规范画矩形图框（白底 + 1pt #D4D4D4 描边 + 中心
  "DROP FIG HERE / Fig. N / Source"），在图框下方紧贴一个 Fig
  描述文本框（含 Fig. N + 主标题 + 描述 + 引用 3 层）。
  
  Fig 编号从 1 → 23 全 deck 连续递增（不要每张 slide 重置）。

Step 7 — 内容回填（S3 关键）
  Slide 3 必须**回填 v4 早期被删的内容**：
  - n-i-p / p-i-n 完整器件结构图（含 5 层标注）
  - 工作原理 4 步（而不是 3 步），明确 Selective Extraction 这一步
  - tandem bridge 一行
  
  其他 slide 内容不大幅改动，只调字号 + 加图框。

Step 8 — Slide 5 新内容生成（最重要）
  按 §4-S5 的版面规范，重新构造合并后的页面。
  上半：2 张图（Hoke + Fan）+ 现象描述
  中半：6 个 paper 文献卡片 2×3 网格
  底部：core contradiction 一行红字 + transition 一行

Step 9 — QA
  运行 markitdown 重新提取文本：
  - 总 slide 数 = 11
  - 无中文残留批注
  - 无 "PLACE FIG" 残留文字
  - 所有 footer 显示 N/11
  - Fig 编号 1-23 连续
  - 公式用 Cambria Math 真排版（不是图片截图）
  
  渲染 PDF：
  - 每张 slide 文字不超出边界
  - 没有文字与图叠压
  - 没有文字与文字叠压
  - 字号在 12-16 范围内（除特例）
  - 配色全 deck 一致

Step 10 — 保存
  输出文件名：oral exam_260513_v8_SLPCI_11slides.pptx
  与原文件同目录
```

---

## 6. QA Checklist（提交前自查）

```
[ ] 总 slide 数 = 11
[ ] 所有 footer 已更新为 N/11
[ ] 无任何中文批注残留（用户原审稿文字已删除）
[ ] 无 "PLACE FIG" / "DROP FIGURE HERE" 之外的占位文字
[ ] Fig 编号 1 → 23 全 deck 连续递增，无重号
[ ] 每个图位下方有完整 Fig 描述框（3 层：Fig.N 主标题 + 描述 + 引用）
[ ] 所有正文字号 12-16pt 范围内（除表格内 11pt 特例和 footer 8pt 特例）
[ ] 所有文本框已启动 autofit + wrap，无溢出
[ ] 任何两个文本框之间无叠压
[ ] 任何文本框与图位无叠压
[ ] S3 已回填 v4 的 PSC 完整内容（n-i-p / p-i-n 含 5 层 + 工作原理 4 步）
[ ] S5（merged）已含 PIPS 现象 2 图 + 6 paper 卡片 + core contradiction 红字
[ ] S6 五边形顶点子图框已放大到 1.8"×1.4"，变量名 12pt Bold
[ ] S8 公式用 Cambria Math（不是图片）
[ ] S11 已加 Fig. 23 regime diagram 占位
[ ] 视觉 DNA（红色 #C00000 + Inter + Source Serif）未引入新色或新字体
```

---

## 7. 不在本次范围

- 副标题（用户已弃用）
- Speaker notes（另议）
- 真实图像贴入（用户晚上自己手动加）
- v6 计划本身的内容修改

---

## 8. 输出

最终文件：`oral exam_260513_v8_SLPCI_11slides.pptx`

push 到 github main branch 同目录，覆盖前一版 reviewed 文件并保留 v7 原始版本作为对照。
