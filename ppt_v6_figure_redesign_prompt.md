# PPT v6 重排版任务：图优先布局 + 文献图谱集成

> 给设计师的完整 prompt。**目标**：把当前 `oral exam_260513_v6_SLPCI_12min_figslots.pptx` 改造成"图优先"的 12 张 deck，让用户晚上贴文献图时**每张 slide 都有明确的物理空位**。
> **不动**：版式风格、配色、字体（这些用户已满意）。
> **要动**：每张 slide 的内部布局逻辑——把图区域明确预留出来，文字让位给图。

---

## 0. 用户原话直译（设计师必读）

> 整体的排版不错，但是整体的 PPT 除了前面几页我已经摘了一点图，工作基本都没有图或者没有预留我放图的位置。我今晚会通过增加从文献里面摘抄出来的图去进行画布的完善。
> 
> 看看怎么调整结构预留出空位给我放图。**slide 6 那里我打算每一个要素都插一个图**，其他你帮我思考一下。
> 
> 然后图的来源会基于我们文件夹的 paper 库。**原来 v4 版本 slide 6 的五芒星结构还可以**，你看看可以帮我把意思好好理解然后写成一版可以传递给其他设计师的 prompt 吗？
> 
> 我认为现在这个版本还是缺少了我想要的预留插图的空间，**特别是 s7 这一页，写的都是文献内容，怎么不插文献图呢**。

---

## 1. 设计哲学：从"文字优先"到"图优先"

### 当前问题（现状诊断）
检查 `oral exam_260513_v6_SLPCI_12min_figslots.pptx` 发现：

| Slide | 当前图占面积 | 占位符状态 | 问题 |
|---|---|---|---|
| S1 | N/A（封面）| ✓ | OK |
| S2 | ~40%（已贴 3 张）| ✓ | OK |
| S3 | ~35%（已贴 2 张）| ✓ | OK |
| S4 | ~10%（仅文字 + 小图标）| ✓ | 文字过密但故事完整 |
| **S5** | ~15%（2 个含糊的 "Fig. A/B"）| ✗ | 占位符太小，没明确位置 |
| **S6** | **0%**（5 个 "PLACE FIG" 但无物理空间）| ✗ | **严重**：5 个图位互相挤压 |
| **S7** | **0%**（"PLACE FIG" 但实际全是文字）| ✗✗ | **致命**：文献定位页竟然没图 |
| **S8** | 0%（仅文字 + 1 个 "PLACE FIG"）| ✗ | 方法学页可少图，但应有 1 张工艺示意图 |
| **S9** | 0%（"PLACE FIG" 但被两个 Picture30/34 公式图覆盖）| ✗ | 公式图占了空间，没真正给文献图留位 |
| **S10** | 0%（4 个 "PLACE FIG" 在 H1-H4 中）| ✗ | 占位符太小（< 1 inch²）放不进真图 |
| S11 | 0%（Gantt 图）| ✓ | 不需要文献图 |
| S12 | 0%（致谢 + 风险）| ✓ | 可加 1 张小封底图 |

### 新设计原则（必须严格遵守）

```
原则 1 — 图区域先定，文字后填。
        每张 slide 先在画布上**圈出图框**（含位置 + 大小 + aspect ratio），
        再用剩余空间安排文字。**不允许文字框先占满后留小角给图**。

原则 2 — 图框最小尺寸 ≥ 1.8 inch × 1.4 inch。
        小于这个尺寸的"图位"在投影/A4 打印时**不可读**，等于没放图。

原则 3 — 每张图必须含 3 件套：
        (a) 图像本体；(b) 图号 + 标题（10pt, 主色 #1A1A1A）；
        (c) 来源引用（8pt 灰字 #5A5A5A，格式：作者 Year, Fig. N）。
        没引用 = 学术诚信问题。

原则 4 — 图与文字间距 ≥ 0.25 inch，禁止叠压。

原则 5 — Aspect ratio 服从原图：
        显微/光谱 ≈ 1:1 或 4:3；
        时序曲线 ≈ 3:2；
        相图 ≈ 1:1；
        示意图保持原 aspect。
        **禁止暴力拉伸**。
```

---

## 2. 视觉 DNA 继承（不动）

保留 v6 现有 PPT 的：
- **配色**：`#C00000`（强调红）/ `#1A1A1A`（主文字）/ `#5A5A5A`（次文字）/ `#FFFFFF`(主背景) / `#F6F6F8`(次级块底)
- **字体**：Inter（正文）+ Source Serif 4（标题）+ Cambria Math（公式）+ Courier New（变量/单位）+ +mn-ea（日文）
- **字号**：22pt 标题 / 14-16pt 副标题 / 10-12pt 体文 / 7-8pt 注释
- **页脚编号**：N/12，右下角 #666666 8pt

---

## 3. 文献图库（图源清单）

设计师/用户从以下 PDF 截图：

### 主图源（dir2_phase_segregation/）

| 编号 | 文件 | 推荐图 | 用途 |
|---|---|---|---|
| **P1** | `dir2_Hoke_2015_photoinduced-trap.pdf` | **Fig. 1** | PL 红移时序（多 Br 浓度 PL 演化曲线）→ **S5 主图** |
| | | Fig. 2c | PL 暗态恢复曲线 → **S10-H3 小图** |
| | | Fig. 5 schematic | trap 形成示意 + strain 标注 → S5 备选 |
| **P2** | `dir2_Brivio_2016`（注：库里是 Brivio 2016 JPCL 经 Chen 2021 引用，**未直接收录原文 PDF**，需另抓）| Fig. 1 / Fig. 4 | 热力学相图 / miscibility gap → **S9 主图** |
| **P3** | `dir2_Ruth_2023_thermodynamic-model.pdf` | Fig. 2 | 带 photocarrier funneling 的自由能曲线 → **S9 主图（推荐替代 P2）** |
| | | Fig. 3 | 阈值光强 vs 组成 → S10-H1 小图 |
| **P4** | `dir2_Tang_2018_local-segregation.pdf` | **Fig. 1** | hyperspectral PL 32×32 mapping → **S6-x_Br/I 小图** |
| | | **Fig. 2** | shear-force topo + 同 ROI PL 时序 i-vi | S8 方法证据 |
| | | **Fig. 5** | KPFM CPD map (GB vs GC) + 能带示意 → **S6-ϕ_local 小图 + S10-H2 小图** |
| **P5** | `dir2_Tiede_2020_iodide-defect-rearrangement.pdf` | Fig. 2 / Fig. 5 | 缺陷介导卤素重排动力学 → **S6-N_defect 小图** |
| **P6** | `dir2_Zhao_2020_strain-activated-LHS-spm-PL.pdf` | **Fig. 4** | 应变激活 LHS：35%Br vs 65%Br 对比 → **S6-ε 小图 + S10-H4 小图** |
| **P7** | `dir2_Fang_2024_wideBG-phase-segregation-review.pdf` | Fig. 3 / Fig. 4 | 三机制综述图 / 降解 marker 总览 → **S6-C_deg 小图** |
| **P8** | `dir2_Chen_2021_unified-thermodynamic-theory.pdf`（即 `papers/s41467-021-23008-z.pdf`）| Fig. 3 panel | 光强 phase diagram → S7 时间轴小缩略图 |

### 关键图源（papers/ 根目录）

| 编号 | 文件 | 推荐图 | 用途 |
|---|---|---|---|
| **P9** | `papers/PIIS2666386425002528.pdf` (**Fan 2025**, Cell Rep Phys Sci) | **Fig. 1** | plunge-freeze 工艺示意 + PL + XRD → **S7 主图** |
| | | **Fig. 3** | pre/post/relaxed ADF + EELS I/Cs + lattice map → **S7 大图 + S5 备选** |
| | | **Fig. 4** | I/Cs 直方图 + strain 直方图 → S10-H4 备选 |
| | | **Fig. 5** | Pearson 相关 + 各向异性应变 4D-STEM | S8 方法证据备选 |
| **P10** | `papers/PIIS2590238523002163.pdf` (**Peng 2023**, Matter) | Fig. 1 | cryo-STEM-CL 时序 mapping → S7 时间轴小缩略图 |
| | | Fig. 4 | PFM 模拟 + 自由能曲线 → S9 备选 |
| **P11** | `papers/dir4_characterization_decoupling/dir4_Qu_2026_SPM-perovskite-surface-interface.pdf` | Fig. 1 / Fig. 2 | KPFM/SPM 综述图 → S6-ϕ_local 备选 |

### 引用格式（每张图右下角必须标）
```
Hoke et al. 2015, Fig. 1            (小字 8pt #5A5A5A)
Fan et al. 2025, Fig. 3 (cropped)
Ruth et al. 2023, Fig. 2 (panel a)
```

---

## 4. 逐 Slide 重新布局规范

### S1 — 封面（不动）

✓ 保留现状。

---

### S2 — Past Research Background（不动）

✓ 保留现状。3 张图（EIP / film / industry）已就位。

---

### S3 — PSC Structure（不动）

✓ 保留现状。2 张图已贴。

---

### S4 — Three Challenges（不动）

✓ 文字密但故事完整，文字 + 三个金属指标牌（>1000h / ~800 cm² / 1.65-1.80 eV）已经构成 visual。不强行加图。

---

### S5 — Photoinduced Phase Segregation Phenomenology

**核心调整**：把"Fig. A / Fig. B"两个含糊占位符**升级成 2 个真正的图框**。

#### 新版面划分（按 13.33" × 7.5" widescreen 计算）

```
┌─────────────────────────────────────────────────────────────────┐
│ 标题 + subtitle 行                                            占 8% │
├──────────────────────────────┬──────────────────────────────────┤
│                              │                                  │
│  【FIG-A】3.6" × 2.5"        │  【FIG-B】3.6" × 2.5"            │
│  Hoke 2015 Fig. 1            │  Fan 2025 Fig. 3 (cropped)      │
│  PL 红移时序                  │  ADF + I/Cs + lattice 三合一    │
│  (PL spectrum red-shift      │  (frozen ion redistribution)    │
│   vs. illumination time)     │                                  │
│                              │                                  │
├──────────────────────────────┴──────────────────────────────────┤
│  Demixing — Funneling — Ambiguity  3 步水平叙事条          占 28% │
│  (每步 1 行文字 + 数字 1/2/3)                                    │
├─────────────────────────────────────────────────────────────────┤
│ Transition 一行（红色强调）                                   占 4% │
└─────────────────────────────────────────────────────────────────┘
```

#### 内容要点（不动）

- 标题 + 副标题不动
- "Demixing → Funneling → Ambiguity" 三步叙事不动
- 底部 Transition 行不动

#### 必须明确的图框

```
FIG-A: 3.6 inch × 2.5 inch, 左 1/2
  source: Hoke et al. 2015, Fig. 1
  caption (10pt): "Photoinduced PL red-shift in mixed I/Br perovskites"
  citation (8pt grey): "Hoke 2015, Fig. 1"

FIG-B: 3.6 inch × 2.5 inch, 右 1/2
  source: Fan et al. 2025, Fig. 3 (cropped to panels A/B/C only)
  caption (10pt): "Plunge-freeze cryo-EM reveals frozen ion + strain"
  citation (8pt grey): "Fan 2025, Fig. 3 (cropped)"
```

---

### S6 — Five Coupled Latent States：恢复 v4 五芒星 + 每元素加图

**这是用户最在意的一页**。

#### v4 五芒星结构回忆

v4 S6 的布局：
- 左 1/2：5 个顶点的五边形/五角星，顶点为 5 个 Z 变量，每两顶点之间用细线表示 bidirectional coupling
- 右 1/2：3 个 hypothesis 文字卡
- 中心：Z = { ... } 标签

**保留 v4 五边形拓扑**，**升级**为图嵌入式：

#### 新版面（13.33" × 7.5"）

```
┌─────────────────────────────────────────────────────────────────┐
│ 标题（同当前）                                               占 10% │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌────────────────────────┐         ┌──────────────────────┐   │
│   │                        │         │                      │   │
│   │   五边形节点图           │         │   Observable         │   │
│   │   (左侧 6.5" × 5.5")    │         │   Projection         │   │
│   │                        │         │   Matrix             │   │
│   │   5 个顶点：             │         │                      │   │
│   │   每顶点含：              │         │   (右侧 5" × 5.5"    │   │
│   │   ① 变量名               │         │   保留当前 5 行       │   │
│   │   ② 1.6" × 1.2" 小图    │         │   PL/KPFM/SIMS/      │   │
│   │   ③ 文献引用             │         │   GIWAXS/XPS         │   │
│   │                        │         │   含每行             │   │
│   │   每条边：               │         │   Primary +          │   │
│   │   #BBBBBB 0.5pt 实线    │         │   Confounder)        │   │
│   │   (10 条边总数)          │         │                      │   │
│   │                        │         │                      │   │
│   │   中心标签：             │         │                      │   │
│   │   Z = { ... }          │         │                      │   │
│   └────────────────────────┘         └──────────────────────┘   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│ Core thesis 一行                                              占 8% │
└──────────────────────────────────────────────────────────────────┘
```

#### 五个顶点的具体设计

**每个顶点是一个组合元素**：

```
┌────────────────────────────┐
│  variable name (12pt bold) │
│  ────────────────────────  │
│                            │
│  [图  1.6" × 1.2"]         │
│                            │
│  ────────────────────────  │
│  paper, Fig. N (8pt grey)  │
└────────────────────────────┘
```

**5 个顶点的图源映射**（按五边形从顶部顺时针）：

| 顶点位置 | 变量 | 图源 | 图说明 |
|---|---|---|---|
| 顶部 | **x_Br/I** halide composition | **Tang 2018, Fig. 1** | 32×32 hyperspectral PL 显示 I-rich 空间不均 |
| 右上 | **N_defect** trap / vacancy density | **Tiede 2020, Fig. 2 (or 5)** | 局域碘缺陷重排动力学 |
| 右下 | **C_deg** irreversible chemistry | **Fang 2024, Fig. 4 (or relevant degradation panel)** | 化学降解 marker |
| 左下 | **ε** strain / microstrain | **Zhao 2020, Fig. 4** | 应变激活 LHS 对比 |
| 左上 | **ϕ_local** surface potential / SPV | **Tang 2018, Fig. 5** (or Qu 2026 Fig. 1) | KPFM CPD GB vs GC |

#### 五边形几何细节

- 五边形外径约 5.5"，每顶点中心约 ±2.5" 半径位置
- 中心标签 "Z = { x_Br/I, N_defect, ϕ_local, ε, C_deg }" 用 #1A1A1A 14pt
- 10 条边（K5 全连接）用 0.5pt #BBBBBB 实线
- **不要标注每条边**——避免视觉混乱

#### 右侧观察投影矩阵（保留当前内容）

保留 6×3 表格：Observable / Primary sensitivity / Confounder。
**字号缩到 9pt**，行高紧凑，让出空间给左侧五边形。

---

### S7 — Literature Position：必须加文献图

**用户原话**：「**特别是 s7 这一页，写的都是文献内容，怎么不插文献图呢**」

#### 新版面（13.33" × 7.5"）

```
┌──────────────────────────────────────────────────────────────────┐
│ 标题（同当前）                                                占 10% │
├──────────────────────────────────────────────────────────────────┤
│ ── 文献时间轴（保留当前 6 个圆点）────                          占 12% │
│  Hoke ───── Brivio ───── Bischak ───── Chen ───── Peng ── Fan   │
│  2015      2016        2017          2021      2023      2025   │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────┐  ┌──────────────────────────────┐ │
│  │                          │  │  ✓ What Fan 2025 achieves    │ │
│  │   【FIG-S7-A】4.2"×3.0"  │  │  ─────────────────────────   │ │
│  │   Fan 2025, Fig. 1        │  │  • plunge-freeze captures... │ │
│  │   (plunge-freeze          │  │  • frozen endpoint shows...  │ │
│  │    workflow schematic)    │  │                              │ │
│  │                          │  │  ✗ What remains unresolved   │ │
│  │   caption + citation     │  │  ─────────────────────────   │ │
│  │                          │  │  • No same-ROI op trajectory │ │
│  │                          │  │  • Discrete sample sampling  │ │
│  │                          │  │  • Br is I/Cs proxy           │ │
│  │                          │  │  • Strain causality open     │ │
│  └──────────────────────────┘  └──────────────────────────────┘ │
│                                                                  │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │  【FIG-S7-B】8.5" × 2.0"（横向窄长）                     │  │
│   │  Fan 2025, Fig. 3 (panels A/B/C cropped, side by side)  │  │
│   │  pre-illum  /  post-illum (locked)  /  post-relaxation  │  │
│   │  caption: "Same-grain endpoint maps before / after /     │  │
│   │            recovery"                                      │  │
│   │  citation: "Fan 2025, Fig. 3"                            │  │
│   └──────────────────────────────────────────────────────────┘  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│ Opportunity 一行                                              占 6% │
└──────────────────────────────────────────────────────────────────┘
```

#### 关键说明

- **FIG-S7-A**：Fan 2025 Fig. 1 是 plunge-freeze 工艺示意图，**直观显示用户继承的方法学**
- **FIG-S7-B**：Fan 2025 Fig. 3 的三联图（pre / post / relaxed）是用户**最重要的对照证据**，必须放大
- 文献时间轴 6 个圆点上方可选地各加 0.5" 缩略图（如 Chen 2021 Fig. 3 相图 / Peng 2023 Fig. 1 CL map），但不强制——如果加，需要保持高度一致

#### 文字精简

右侧两个 ✓/✗ 列表合并：✓ 部分 2 条精简，✗ 部分**保留 4 条**（已加入 "Discrete sample sampling, not one continuous ROI"，对应 v6 修订 Y2）。

---

### S8 — SL-PCI 4-Step Framework

#### 当前问题

S8 标题层、4 步流程、底部公式都齐了，但 "PLACE FIG: method evidence strip" 在右上角，**没明确位置和尺寸**。

#### 新版面调整

```
┌──────────────────────────────────────────────────────────────────┐
│ 标题 + subtitle                                               占 10% │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │  Write → Lock → Read → Infer                             │  │
│   │  4 步水平流程（含时间窗）  占整行                          │  │
│   │  (保留当前)                                               │  │
│   └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│   ┌──────────────────────────────┐  ┌────────────────────────┐  │
│   │                              │  │                        │  │
│   │  【FIG-S8】4.5" × 2.8"        │  │  Generative model      │  │
│   │  Method evidence composite:   │  │                        │  │
│   │                              │  │  y_m = H_m(Z; θ_m)     │  │
│   │  上半：Tang 2018 Fig. 2      │  │       + A_m + η_m      │  │
│   │  (operando PL time series)   │  │                        │  │
│   │  下半：Fan 2025 Fig. 1       │  │  obs = forward         │  │
│   │  (plunge-freeze workflow)    │  │      + artifact        │  │
│   │                              │  │      + noise           │  │
│   │  Combined to show:           │  │                        │  │
│   │  "operando trajectory  ��     │  │  Key distinction:      │  │
│   │   frozen endpoint"           │  │  not characterization  │  │
│   │                              │  │  stacking — state-     │  │
│   │  citations: Tang 2018 Fig.2 │  │  locked inverse        │  │
│   │  + Fan 2025 Fig.1            │  │  inference with        │  │
│   │                              │  │  explicit artifacts.   │  │
│   └──────────────────────────────┘  └────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**核心**：左侧 FIG-S8 是组合图，**上下分块**：上半证明 "operando 可写态"（Tang 2018），下半证明 "锁态可读" (Fan 2025)。

#### 如果不想用组合图

可改为左侧单张 Fan 2025 Fig. 1 全图，右侧文字。但**强烈推荐组合**，因为 SL-PCI 真正的创新是"轨迹 + 锁态"两步**联立**。

---

### S9 — Hidden State Z & Physical Model

#### 当前问题

当前 S9 有两个公式截图（Picture30, Picture34）和一个 "PLACE FIG"。三张图互相挤压。

#### 新版面调整

```
┌──────────────────────────────────────────────────────────────────┐
│ 标题                                                          占 10% │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌────────────────────────────────┐  ┌───────────────────────┐  │
│   │  Latent state Z: 5 components  │  │                       │  │
│   │  (保留当前左列 5 个变量名 + 描述) │  │  【FIG-S9】          │  │
│   │                                │  │  4.5" × 3.5"         │  │
│   │  - x_Br/I    composition       │  │                       │  │
│   │  - N_defect  defects           │  │  Ruth 2023, Fig. 2   │  │
│   │  - ϕ_local   electrostatics    │  │  Free-energy curves  │  │
│   │  - ε         strain            │  │  with photocarrier   │  │
│   │  - C_deg     degradation       │  │  funneling           │  │
│   │                                │  │                       │  │
│   │  ────────────────────────────  │  │  shows dark vs light │  │
│   │                                │  │  miscibility shift   │  │
│   │  Free-energy decomposition     │  │                       │  │
│   │  (公式渲染 with Cambria Math)   │  │  caption + citation  │  │
│   │  G_total = G_mix + G_carrier   │  │                       │  │
│   │   + G_elastic + G_defect       │  │                       │  │
│   │   + G_interface                │  │                       │  │
│   │                                │  │                       │  │
│   │  Kinetics:                     │  │                       │  │
│   │  ∂x/∂t = ∇·[M ∇μ]              │  │                       │  │
│   │                                │  │                       │  │
│   │  μ = δF/δx                     │  │                       │  │
│   └────────────────────────────────┘  └───────────────────────┘  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│ S0–S5 + Inference target 底部说明                            占 12% │
└──────────────────────────────────────────────────────────────────┘
```

#### 关键说明

- **删除当前 Picture30 / Picture34 两个公式截图**（它们是图片格式的公式，应该用 Cambria Math **真正排版**）
- 替换为 1 张右侧大图：**Ruth 2023 Fig. 2**（带 photocarrier funneling 的自由能曲线，最直观展示"暗态混合 vs 光照时偏析"）
- 备选图源：**Brivio 2016 Fig. 1**（如果能拿到原 PDF）或 **Chen 2021 Fig. 3a**（相图）

---

### S10 — Four Falsifiable Hypotheses

#### 当前问题

4 个 "PLACE FIG" 嵌在 H1-H4 卡片里，**每个图框只有 < 1 inch²**，放进真图会模糊不清。

#### 新版面调整

```
┌──────────────────────────────────────────────────────────────────┐
│ 标题                                                          占 10% │
├─────────────────────────┬────────────────────────────────────────┤
│                         │                                        │
│   H1                    │   H2                                   │
│   ┌────────────┐        │   ┌────────────┐                       │
│   │FIG  1.8"×  │        │   │FIG  1.8"×  │                       │
│   │     1.5"   │        │   │     1.5"   │                       │
│   │Ruth Fig.3  │        │   │Tang Fig.5  │                       │
│   │I_th vs x   │        │   │KPFM map    │                       │
│   └────────────┘        │   └────────────┘                       │
│   PL red-shift          │   CPD anomaly                          │
│   tail-dominated        │   precursor                            │
│   Decision: β₁<0,       │   Decision: P[t_CPD<t_PL]              │
│   95% CI ⊅ 0            │   > 0.5 + δ                            │
│                         │                                        │
├─────────────────────────┼────────────────────────────────────────┤
│                         │                                        │
│   H3                    │   H4                                   │
│   ┌────────────┐        │   ┌────────────┐                       │
│   │FIG  1.8"×  │        │   │FIG  1.8"×  │                       │
│   │     1.5"   │        │   │     1.5"   │                       │
│   │Hoke Fig.2c │        │   │Zhao Fig.4  │                       │
│   │PL recovery │        │   │GB vs GC    │                       │
│   └────────────┘        │   └────────────┘                       │
│   Optical recovery ≠    │   I-rich location                      │
│   physical recovery     │   boundary-dependent                   │
│   Decision: |log₁₀K|>1  │   Decision: regime map                 │
│                         │                                        │
├─────────────────────────┴────────────────────────────────────────┤
│ Together H1–H4 separate ...   底部综述                       占 8% │
└──────────────────────────────────────────────────────────────────┘
```

#### 关键说明

- **2×2 网格而非 4 列**（4 列下每个图框太小）
- 每个 H 卡片：**图 1.8" × 1.5"** + 假设描述 + Decision rule
- 4 张图：
  - H1: **Ruth 2023 Fig. 3**（阈值 vs 组成）
  - H2: **Tang 2018 Fig. 5**（KPFM CPD GB vs GC）
  - H3: **Hoke 2015 Fig. 2c**（PL 恢复曲线，含残余红移）
  - H4: **Zhao 2020 Fig. 4**（应变激活 GB 偏析）

---

### S11 — Three-Year Plan（不动）

✓ Gantt 图 + 4 个 Aim bars + κ 进展（按 v6 修订 C7 加的）。**不需要文献图**，保持现状。

---

### S12 — Outputs + Feasibility + Fit

#### 可选小改

当前 S12 全文字，可在右下角加一个 **2.5" × 1.8"** 小封底图：

| 选项 | 图源 |
|---|---|
| A | **Fan 2025 Fig. 3**（pre/post/relaxed 三联缩略图），作为"我们要做但要更进一步"的视觉锚 |
| B | 自制 mechanism regime diagram 草图（5 种机制各占一个扇区的饼图）|
| C | 不加图，保持现状 |

**推荐 C**（保持现状）——S12 是收束页，文字密度已经合理，加图反而分散注意力。如果要加，选 A。

---

## 5. 整体一致性约束

```
约束 1：图框风格统一
        所有文献图周围 0.5pt #D4D4D4 细描边，距离图像本体 2pt padding。
        引用文字距图框底部 4pt。
        
约束 2：图引用格式严格
        格式：作者 Year, Fig. N
        如有 cropping/panel：作者 Year, Fig. N (panel a-c) or (cropped)
        
约束 3：禁止重复图
        - Tang 2018 Fig. 5 只在 S6-ϕ_local 用一次（S10-H2 可用其他面板）
        - Fan 2025 Fig. 3 只在 S7 用一次（不在 S5 和 S8 重复出现）
        - 如果同一张图必须出现两次，第二次必须用不同 crop 或不同 panel
        
约束 4：标尺与单位
        每张图保留原文标尺、轴标签、单位。不要因排版美感擦掉它们。
        
约束 5：图边距
        图边距距画布最近边 ≥ 0.4 inch。
```

---

## 6. 设计师必须按此流程执行

```
Step 1 (优先级最高):
  打开当前 oral exam_260513_v6_SLPCI_12min_figslots.pptx
  在新建的副本上，针对 S5/S6/S7/S8/S9/S10：
  - 删除所有现存的 "PLACE FIG" 文字占位符
  - 删除当前 Picture30, Picture34（S9 的两个公式截图）
  - 删除 S6 现有的不连贯五个文字盒

Step 2:
  按 §4 中每张 slide 的版面规范，先**在画布上画图框**
  （插入"矩形 placeholder" with 1.0pt #D4D4D4 描边 + 白底 + 
  中心写 "FIG-S5-A / 3.6"×2.5" / Hoke 2015 Fig.1"）
  
  这一步**不放真图**——只把图框作为占位符明确画出来。
  完成后，每张 slide 都能一眼看出"图框在哪、多大、来源是哪篇"。

Step 3:
  按 §4 内容要点，把文字填进剩余空间。
  字号、颜色、字体严格按 v6 现有 visual DNA。
  
Step 4:
  S6 五边形：用 PowerPoint 自带形状工具画 5 顶点 + 10 条边
  （或用 PptxGenJS 的 svg/shape 命令）。
  每顶点框里嵌一个 1.6" × 1.2" 的子图框，加变量名 + 引用。
  
Step 5:
  导出预览（PDF）。
  检查：
  - 12 张总数对
  - 每张 slide 的图框是否清晰可见、未与文字叠压
  - 引用格式统一
  - 字号未回退（仍是 22pt 标题 / 10-12pt 体文）
  
Step 6:
  保存为 oral exam_260513_v6_SLPCI_12min_figframes.pptx
  （用户随后会手动把图框替换为真实文献图）
```

---

## 7. QA 检查清单（设计师提交前自查）

```
[ ] S5 — 2 个图框（FIG-A 3.6×2.5 + FIG-B 3.6×2.5）已画出，未与文字叠压
[ ] S6 — 五边形 5 顶点 + 10 条边已画出；每顶点 1.6×1.2 子图框 + 变量名 + 引用
[ ] S6 — 右侧 Observable Projection Matrix 字号缩到 9pt 适应空间
[ ] S7 — 文献时间轴保留；FIG-A 4.2×3.0 + FIG-B 8.5×2.0 两个图框已画
[ ] S7 — Fan 2025 unresolved 列 4 条 bullet（不是 3 条）
[ ] S8 — 左侧 FIG-S8 4.5×2.8 图框已画；右侧文字保留含 Key distinction
[ ] S9 — Picture30/34 已删除；公式用 Cambria Math 真排版；右侧 FIG-S9 4.5×3.5 已画
[ ] S10 — 2×2 网格；4 个 H 卡片各含 1.8×1.5 图框；Decision rule 已加
[ ] 全 deck — 所有图框含图号 + 引用占位文字
[ ] 全 deck — 配色未引入新色；字体未污染
[ ] 全 deck — 总 slide 数仍为 12
[ ] markitdown 检查无乱码、无 "PLACE FIG" 残留文字
```

---

## 8. 不在本次范围

- 真实图像贴入（用户自己晚上做）
- 副标题（用户已弃用）
- Speaker notes（另议）
- 配色字体修改

---

## 附录：完整图源映射表（速查）

| Slide | 图框 | 尺寸 | 推荐图源 | 备选 |
|---|---|---|---|---|
| S5 | FIG-A | 3.6"×2.5" | Hoke 2015 Fig. 1 | Tang 2018 Fig. 1 |
| S5 | FIG-B | 3.6"×2.5" | Fan 2025 Fig. 3 (cropped) | Peng 2023 Fig. 1 |
| **S6** | **顶点 x_Br/I** | 1.6"×1.2" | Tang 2018 Fig. 1 | Fan 2025 Fig. 3 panel |
| **S6** | **顶点 N_defect** | 1.6"×1.2" | Tiede 2020 Fig. 2 | Hoke 2015 Fig. 5 |
| **S6** | **顶点 ϕ_local** | 1.6"×1.2" | Tang 2018 Fig. 5 | Qu 2026 Fig. 1 |
| **S6** | **顶点 ε** | 1.6"×1.2" | Zhao 2020 Fig. 4 | Fan 2025 Fig. 4 |
| **S6** | **顶点 C_deg** | 1.6"×1.2" | Fang 2024 Fig. 4 | Tiede 2020 Fig. 5 |
| **S7** | FIG-A workflow | 4.2"×3.0" | **Fan 2025 Fig. 1** | Peng 2023 Fig. 1 |
| **S7** | FIG-B same-grain | 8.5"×2.0" | **Fan 2025 Fig. 3** (panels A/B/C) | — |
| S8 | FIG composite | 4.5"×2.8" | Tang 2018 Fig. 2 + Fan 2025 Fig. 1 | Fan 2025 Fig. 5 |
| S9 | FIG free-energy | 4.5"×3.5" | **Ruth 2023 Fig. 2** | Brivio 2016 Fig. 1 / Chen 2021 Fig. 3a |
| S10 | H1 | 1.8"×1.5" | Ruth 2023 Fig. 3 | Tang 2018 Fig. 1 (panel d) |
| S10 | H2 | 1.8"×1.5" | Tang 2018 Fig. 5 | Qu 2026 Fig. 2 |
| S10 | H3 | 1.8"×1.5" | Hoke 2015 Fig. 2c | Tiede 2020 Fig. 5 |
| S10 | H4 | 1.8"×1.5" | Zhao 2020 Fig. 4 | Fan 2025 Fig. 3 (annotated) |

---

**总图数**：18 张文献图（含五边形 5 顶点）

**版本**：v1.0 / 2026-05-13 / Jones
