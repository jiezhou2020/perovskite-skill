---
date: 2026-05-06
topic: PL mapping 用于相分离表征 — 能与不能
related_papers: Tian 2022 (dir4) · Fang 2024 (dir2) · Hoke 2015 (dir2) · Tang 2018 (dir2) · Qu 2026 (dir4) · Zhao 2020 (dir2)
---

# Note · 2026-05-06 · PL Mapping 解决了相分离表征吗？

## 原文（Tian 2022 / Electronics 11:700）

> Spatially resolved PL mapping enabled by PL microscopy technique can give significant information of spatial variations in the photogenerated carrier recombination dynamics, which can be used to determine the film quality, heterogeneity, trap state distribution, ion migration, local phase transformation and so forth.

## 一、释义

PL 显微镜实现的**空间分辨 PL mapping**，可以提供"光生载流子复合动力学"在空间上的变化信息，由此可判定：

1. **薄膜质量** — PL 强度的整体均匀度
2. **不均匀性** — 不同位置的 PL 谱差异
3. **陷阱态分布** — 红移峰 / 低能 tail 的位置
4. **离子迁移** — 暗态 vs 光照下的 PL 演变
5. **局域相变** — PL 峰位置随时空变化

技术本质：在二维成像基础上，每个像素采一段 PL 谱，得到一个四维数据集 PL(x, y, λ, t)。

---

## 二、"那它不就解决了相分离表征吗？"——半对

### 它确实能做的（你直觉对的部分）

| 能做 | 证据 / 文献 |
|---|---|
| 看到相分离的"PL 指纹"（红移新峰 ~1.68 eV for MAPb(Br_xI_{1-x})_3） | Hoke 2015 奠基论文 |
| 把 I-rich 畴空间定位在晶界附近 | Tang 2018（sub-μm PL）+ CL-SEM 推到 ~10 nm |
| 时间分辨追踪畴生长—饱和—暗态恢复全过程 | Hoke 2015 反复实验 |

所以**"哪里 / 什么时候"** 有相分离，PL mapping 能回答。

---

### 但它没解决——5 个关键不能

#### 不能 #1 ｜ 看到"现象"，看不到"驱动机制"

Fang 2024 提出的相分离三机制：

- **热力学**（混溶间隙 / DFT 自由能预测）
- **极化子诱导应变**（载流子聚集 → 局域畸变 → 带隙漏斗）
- **电场驱动**（电荷俘获 → 局域电场 → 卤素空位漂移）

**三者最终都表现为同样的 PL 红移和峰分裂**。

PL mapping 不能区分：看到 I-rich 域 ≠ 知道它是组分自发脱混、载流子聚集驱动、还是电场把 I⁻ 推过来的。

> 这正是方向 4 要"解耦"的核心难点。PL mapping 给的是 OUTCOME，不给 CAUSE。

#### 不能 #2 ｜ 衍射极限 + 载流子漏斗效应

- 标准 PL 显微镜空间分辨 ~500 nm；共聚焦 ~250 nm
- 钙钛矿晶粒尺寸 200–1000 nm；I-rich 畴可以小到 5–50 nm
- 比晶粒还小的畴你能"看到"红移，**但分不清是 1 个 50 nm 大畴还是 100 个 5 nm 小畴**

**更要命的是 bandgap funneling**：I-rich 区带隙小，光生载流子被漏斗到那里复合 → PL 信号被极少量 I-rich 畴**主导**：

- 优点：极敏感（~1% 体积的相分离就能看到）
- 缺点：**无法定量** I-rich 体积分数

Fang 2024 表征章节直接点过这个坑："PL provides excellent qualitative evidence but is misleading for quantitative volume fraction."

#### 不能 #3 ｜ 没有化学组成信息

PL 反映的是**电子态**（带边、缺陷态），不直接给**化学组成**。

红移信号可能来源：

- I 富集（你以为的）
- 应变释放（Lu 2025、Oksenberg 2020 直接证据）
- 量子限域（Zhao 2019 CsPbI3 NC 尺寸效应）
- 极化子局域化（无组成变化也能红移）

所以 "PL 红移 → I-rich" 是**推论**，不是**测量**。要确认必须配合 EDS（化学）/ XRD 峰分裂（晶格）/ TOF-SIMS（深度组成剖面）。

#### 不能 #4 ｜ 没有深度分辨

- 卤化钙钛矿吸收深度 ~100–300 nm，PL 是这一段的**积分信号**
- 平面 mapping 看不出深度差异
- Fang 2024 电场驱动模型预测：**I-rich 优先在表面累积**
- 想分清表面 vs 体相 vs 埋藏界面的相分离，平面 PL mapping **完全无能为力**
- 部分破解：confocal z-stack（轴向分辨 ~700 nm）或破坏性 TOF-SIMS / 深度剖面 XPS

#### 不能 #5 ｜ 测量本身扰动系统

PL 用激光激发 → 注入光生载流子 → **这本身就会触发 / 加速相分离**（Hoke 效应的因，也是 Hoke 效应的探针）：

- 你测的从来不是"原状态"，是"被你测量改变后"的状态
- 测低光强阈值附近的早期动力学时，"测"和"被测"已经分不开
- KPFM / SPVM / 暗态结构表征在这一点上反而有优势——它们可以在**不激发载流子**的条件下读出局域电势 / 形貌

---

## 三、案例：Zhao 2020 / Nat. Commun. 11:6328 — Fig. 4 的"既能也不能"

**论文**：Strain-activated light-induced halide segregation in mixed-halide perovskite solids（Zhao, Miao, Brabec et al.）
**核心论点**：LHS 在 Br < 50% 体系中是 **应变激活** 的（不是本征），在 Br > 50% 体系中才是本征。

### 实验设置

- shear-force SPM 配 532 nm 激光 + 共聚焦 PL，**~200 nm 空间分辨**
- 直接 correlate 形貌图与 PL 谱（同位置）
- 样品：35%Br 与 65%Br 多晶薄膜，平均晶粒 ~500 nm
- 形貌图能清晰看到晶界 → 可分别在**晶粒中心** vs **晶界**追踪 PL

### 关键发现（Fig. 4）

| 样品 | 晶粒中心 | 晶界 | 解释 |
|---|---|---|---|
| **35%Br** | PL 峰位稳定，仅强度缓升（光致缺陷愈合） | **明显 LHS（PL 红移峰生长）** | LHS **不是本征**，由 GB 局域应变激活 |
| **65%Br** | 整个区域都出现 PL 峰分裂 | 同上 | LHS 是本征行为，遍布全膜 |

并且：**激光功率 ↑ → LHS 动力学 ↑**（0.01 μW → 0.1 μW 时 65%Br 初始峰已快到追不到）。这种线性关系作者归因为**极化子触发 I-rich 畴的成核**——光强越大、载流子越多、成核/生长越快。

### 应变量化（PL mapping 之外的"补全"）

PL mapping 看到 GB vs 晶粒中心的差异，但**不告诉你"为什么"是 GB**。Zhao 2020 用以下手段把"应变"作为 cause 钉死：

- **Williamson-Hall 图**：薄膜平均应变 ~0.3% vs 单晶 ~0.0004%（**差 700 倍**）
- **共聚焦 Raman**：薄膜的局域应变不均匀性（GB 应变集中）
- **自由单晶对照**：无外加压力时 35%Br 单晶**不发生** LHS；施加单轴压力后才出现
- **晶格失配衬底（CaF₂）**：35%Br 单晶在失配衬底上出现非均质 LHS（外加应变→驱动）
- **应变释放**：KI 添加剂或 SiO₂ 衬底释放应变，35%/45%Br 膜的 LHS 被压制；65%Br 不受影响（本征）

### 这篇论文怎么印证今天 note 的主旨

> **PL mapping 解决了"看见"，没解决"理解"。**

Zhao 2020 是这条结论的最干净案例：

- **PL mapping 的力量**：在 200 nm 分辨下定位出"GB 才有 LHS"——这是单点 PL 不可能给出的
- **PL mapping 的极限**：单凭 GB vs 晶粒中心的 PL 差异，**无法区分**这是"应变集中"还是"缺陷集中"还是"组分起伏"——三种成因都会让 GB 处 PL 不均匀
- **解耦所需的多模态**：W-H 应变 + Raman 局域应变 + 单晶对照 + 衬底变化 + 添加剂消除——五重证据链才把"应变"从其他可能性里隔离出来

把 Zhao 2020 的方法学映射到 Fang 2024 三机制框架：

| Fang 三机制 | Zhao 2020 是否独立验证？ |
|---|---|
| 热力学（混溶间隙） | 部分相关（65%Br 的本征行为暗示混溶间隙；35%Br 不在间隙内） |
| 极化子诱导应变 | **直接验证**：激光功率 → LHS 速率线性关系作为 polaron 成核的间接证据 |
| 电场驱动 | 本文不涉及（无外加电场实验） |

> **方向 4 的实验设计要从 Zhao 2020 学的**：每一条机制都需要"PL 看现象 + 至少 2-3 种正交模态把 cause 隔离出来"。光做 PL mapping 会给假阳性（你以为看到了机制，其实只看到了 outcome）。

---

## 四、对方向 4 的意义

如果只用 PL mapping，最多回答 **"哪里 / 什么时候"** 有相分离。
方向 4 真正要回答 **"为什么"** + **"哪个机制主导"** + **"如何独立验证每条机制"**。

这就要求把 PL 和其他模态绑在一起做关联实验：

| 要解耦的机制 | 能直接验证的工具 | PL mapping 缺什么 |
|---|---|---|
| 热力学（混溶间隙） | 原位 XRD 峰分裂（晶格常数）+ EDS（化学定量） | PL 不给晶格 / 化学 |
| 极化子诱导应变 | tr-PL + tr-KPFM 载流子动力学 + DIC TEM 应变成像 | PL 给载流子但不给应变 |
| 电场驱动 | KPFM 局域电势 + SPVM 光致电势 + TOF-SIMS 深度剖面 | PL 完全没有电场信息 |

Qu 2026 综述的 SPM 工具箱（KPFM / SPVM / SNOM / PL-AFM / tr-KPFM / pp-KPFM）不是冗余，而是 **PL mapping 在信息维度上的补全**：

- PL → 电子结构
- KPFM / SPVM → 局域电势 / 表面光电压
- EDS / TOF-SIMS → 化学组成
- XRD / TEM → 晶格 / 应变

**单独都不够，组合才能做机制解耦。**

---

## 五、一句话结论

> PL mapping 解决了"**看见**" 相分离，没解决"**理解**" 相分离。
> 方向 4 的关键工作 = 把 PL 指纹与其他模态在**同一空间**、**同一时间**绑定，让三机制各自的痕迹分别浮出。

---

## 附录 A · 带隙与 PL 波长

**问题**：I-rich 与 Br-rich 区谁的带隙大？PL 中谁的波长长？

| | I-rich 区 | Br-rich 区 |
|---|---|---|
| 带隙 Eg | **小**（~1.55–1.68 eV） | **大**（~2.0–2.3 eV） |
| PL 波长 λ = hc/Eg | **长**（红移，~720–740 nm） | 短（~540–600 nm） |

**物理原因**：Pb-X 价带主要由卤素 p 轨道组成。I 5p 比 Br 4p 能量高 → I-rich 区 VBM 抬高 → Eg 减小。

**MAPb(I₁₋ₓBrₓ)₃ 典型数字**：

| x（Br fraction） | Eg (eV) | λ (nm) | 备注 |
|---|---|---|---|
| 0（纯 I） | ~1.55 | ~800 | 单结 PSC 主流配方 |
| 0.35 | ~1.78 | ~696 | Zhao 2020 的 35%Br 母相 |
| 0.65 | ~2.05 | ~605 | Zhao 2020 的 65%Br 母相 |
| 1（纯 Br） | ~2.30 | ~540 | LED / 大宽带隙 |
| **I-rich 新峰**（来自相分离） | **~1.68** | **~738** | **Hoke 2015 发现的红移峰；任何混卤体系发生 LHS 的指纹** |

所以实验中观察到的 PL splitting：
- **长波长 / 红移那个峰 = I-rich 畴**（带隙小）
- 短波长那个峰 = 母相 / Br-rich 区（带隙大）

> 注意 Hoke peak ≈ 1.68 eV 几乎不随母相 Br% 变化——因为漏斗效应让载流子总是被吸到 Eg 最低（~MAPbI₃ 极限附近）的 I 富集团。这也是为什么 PL 不能定量 I-rich 体积分数（见不能 #2）。

---

## 引用源

- **Tian 2022 / Electronics 11:700** — 引文原文，dir4
- **Zhao 2020 / Nat. Commun. 11:6328** — Fig. 4 SPM+PL + 应变激活机制，dir2
- **Fang 2024 / Adv. Funct. Mater.** — 三机制框架 + PL 局限点评，dir2
- **Hoke 2015 / Chem. Sci.** — PL 红移作为相分离指纹的奠基用法 + 1.68 eV peak，dir2
- **Tang 2018 / Nano Lett.** — sub-μm PL mapping 验证晶界优先聚集，dir2
- **Qu 2026 / EES Solar** — SPM 工具箱信息补全，dir4
- **Lu 2025 / Nat. Commun.** — 应变释放也能引起 PL 红移，dir1（跨 dir1/2）
- **Oksenberg 2020 / Nat. Commun.** — 应变畸变 NW 蓝移直接证据，dir1
- **Zhao 2019 / ACS Energy Lett.** — 量子限域引起的尺寸-带隙关系，dir1
