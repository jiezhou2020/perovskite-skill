# PhD 三年研究计划 v1
## Multi-mechanism Characterization Decoupling of Photoinduced Phase Segregation in Wide-Bandgap Perovskites

> **文档定位**：本计划基于已完成的 13 篇文献 11-field 深读、3 个 batch 综合分析（`analysis/batch1-3*.md`）和 `research_plan_dir4_characterization_v3.md` 的高层框架。本计划把"协议"从概念落到月度实验、并为每个表征手段提供**可复核的证据链**（库内引用 + 跨领域证据）。
>
> **可复核原则**：每个方法的提出都附带 (a) 物理/化学原理；(b) 同行已发表的应用例；(c) 跨领域验证；(d) 局限与备选；(e) 引用编号映射到本仓库或公开文献。

---

## 0. 研究目标重述

### 0.1 总目标

> 建立一套**多机制表征解耦方法论**，能在同一宽带隙混卤钙钛矿样品上把光致相分离的 4 类驱动力（M1 热力学 / M2 极化子-应变 / M3 缺陷-trap & 局域电场 / M4 redox）解耦读出，并以 4 个已发表抑制方案（Bai 2022 硒吩、Hu 2026 MPA、Fang Z. 2024 表面抛光、Hou 2020 SLP）作为方法学**反向验证集**。

### 0.2 三层论证逻辑

**现象层**：宽带隙（1.65–1.75 eV）混卤钙钛矿是 perovskite/Si tandem 顶电池的必选材料；光致相分离是当前 WBG-PSC 认证记录卡在 22.95% 的核心瓶颈（vs 单结 26.7%、tandem 34.9%）。库内 dir2_Fang_2024 综述、Yu 2026 ACS AMI 综述均确认这一框架。

**机制层**：4 类机制划分基于 Tian 2022 综述并经 Ma 2024 暗态实验进一步细化。**Ma 2024 撤光后相分离持续 2–5 min** 与 Garrett 2017 fast-KPFM 显示的 MAPbI3 表面 CPD 弛豫"数分钟"在时间窗口上完全吻合 — 共同指向 M3 局域电场机制是当前实证最强的暗态兼容机制；M2 应变与 M4 redox 单独成立性在暗态实验下被排除。

**方法层**：通过**时间窗 + 空间分辨 + 化学计量调控 + 大气切换**四维度的组合表征，把 4 类机制的"指纹信号"独立分离。

---

## 1. 提出的核心表征方法（共 7 项）

> 每个方法**有理有据**：原理 → 鉴别力 → 优化逻辑 → 同行证据 → 跨领域参考 → 局限。

### 方法 A · 暗态短曝光 PL 动力学（Dark-state Pulsed-PL Kinetics）

**原理**：先用高强度 CW 激光（50 W/cm²）部分诱发相分离 ~30 s；然后撤光；在暗中以低强度脉冲探针光（≤ 3 W/cm²，远低于阈值）每隔 10 s 扫一次 PL 谱，跟踪谱演化达 30 min。

**鉴别力（核心）**：
- 若撤光后 PL 在 ns–μs 内立即回到 mixed-phase → M2 极化子-应变机制（极化子寿命短）
- 若撤光后 PL 在数分钟内继续蓝移 / 红移 → M3 局域电场（trapped charges 寿命达 min）
- 若 vacuum 下不可逆而 ambient 下可逆 → M4 redox 参与（I2 vapor 损失）
- 若各时间窗都几乎不动 → M1 热力学慢驱动主导

**优化逻辑**：
- 探针强度选 3 W/cm²：低于 Ma 2024 实证的 5 W/cm² 相分离阈值（CsPbBr1.2I1.8 NCs 体系），保证读取不引入新相分离
- 探针时长 1 s：足够 CCD 收谱，但短到不会累积分相
- 探针重复 10 s 一次：覆盖 trap charge 弛豫 typical timescale（数分钟）

**同行证据（库内）**：
- Ma 2024 arxiv 2407.04984 在 CsPbBr1.2I1.8 NC 体系首次系统验证 dark phase segregation 持续 2–5 min（详见 `analysis/dir2_ma2024.md`）
- Tiede 2020 JPCL 用 CW + 100 fs 脉冲双光源 LSCM 协议，建立"脉冲光不引入分相"的方法学基础（详见 `analysis/dir2_tiede2020.md`）
- Bischak 2018 JPCL 在 thin film 上用类似 CW + 短读取展示动力学

**同行证据（库外 / 待用户复核）**：
- Empedocles & Bawendi 1997 Science 277:2114 — single CdSe NC 在撤光后表面陷阱电荷主导的 spectral diffusion 持续数十秒，是 NC 体系 trap charge → local field 的 founding 证据
- Whitham 2015 Nano Lett. 15:4045 — Cu-doped CdSe NC blinking 与 trap charge dynamics 的关联研究

**跨领域**：
- 单量子点 blinking spectroscopy 中"撤光 + 探针读取"是标准范式
- Pump-probe 超快光谱法（皮秒级）— 时间分辨光物理已成熟领域

**局限与备选**：
- thin film 上是否仍有 NC 那么长的 dark seg 时间是开放问题（Ma 2024 在 microplate 上看到立即 remix）→ Year 1 必须先验证此假设
- 若 thin film 上 dark seg < 30 s → 改用 ms 级单光子计数 PL 探针

---

### 方法 B · Fast-Kelvin Probe Force Microscopy（fast-KPFM）

**原理**：标准 KPFM 通过反馈环路使 tip-sample 静电力为零，记录 contact potential difference (CPD)。Fast-KPFM 用 heterodyne 检测 + lock-in 放大跳过反馈环路时间常数，可达到秒级采样、跨分钟尺度跟踪 CPD 弛豫。

**鉴别力（核心）**：
- M3 离子迁移：MAPbI3 表面 CPD 撤光后弛豫"数分钟"是 trap charge 经离子迁移消散的硬指纹（Garrett 2017）
- 若一个抑制方案使 CPD 弛豫从 min 缩短到 s → 直接证明 trap density 减少
- pp-KPFM（光泵浦版）扩展到 ps 级 → 解析 M2 极化子动力学（Qu 2026 引文）

**优化逻辑**：
- AM-KPFM lift mode 优于 FM-KPFM contact mode：避免 tip-sample 摩擦诱发离子迁移人工噪声
- N2 充气环境：消除湿度对 CPD 解读的复合贡献（Qu 2026 强调）
- Pt 镀层 tip + 低 Q 因子悬臂：低噪声 + 快响应

**同行证据（库内）**：
- Qu 2026 EES Solar 综述全面覆盖 KPFM/pp-KPFM 时间分辨变体（详见 `analysis/dir4_qu2026.md`）
- Pothoof 2023（dir3 库内）用 SKPM 测 APTMS 钝化前后 CPD 偏移从 100 mV 降至 20 mV — 5× 压制
- Akrami 2023（dir3 库内）同样思路在 wide-bandgap FACs 上应用

**同行证据（库外 / 待用户复核）**：
- Garrett et al. 2017 ACS Appl. Mater. Interfaces 9:21955 — MAPbI3 表面 CPD 数分钟弛豫的 founding 数据
- Yun et al. 2016 Adv. Energy Mater. 6:1600330 — FAPbI3/MAPbI3 阳离子调控对 KPFM 的影响
- 2025 Nat. Commun. PHASET 论文（[s41467-025-63176-w](https://www.nature.com/articles/s41467-025-63176-w)）使用 KPFM 量化 light-soaking + 2-ThEABr 钝化后 CPD 均匀化（control 不均匀 vs 处理后 −561 mV 均匀），是 2025 最新协议范式

**跨领域**：
- 半导体表面物理（Si、GaAs）中 KPFM 是工作函数测量的金标准（Nonnenmacher 1991 Appl. Phys. Lett.）
- 锂电池电解质界面研究（Pt、Cu2O 表面）使用相同技术（Cu2O 光催化粒子, Qu 2026 ref. 137-146）
- 二维材料光电响应（MoS2、WSe2）— SPVM 范式相同

**局限与备选**：
- Pp-KPFM 1 ps 时间分辨需要超快激光 + 极优 tip 几何，非校内实验室能直接复现
- 备选：SPVM（surface photovoltage microscopy）作为 pp-KPFM 的简化版，分辨力降到 ms 但操作简单

---

### 方法 C · 真空 vs 大气环境老化对比（Atmosphere-Switched ISOS）

**原理**：M4 redox 模型预测 I⁻ 被光生 hole 氧化成 I⁰，然后以 I2 vapor 形式从表面逃逸；这一过程**只在开放大气下不可逆**。在真空下 I2 不能逃逸 → 撤光后可在原位 reduce 回 I⁻ → 相分离仍可逆。

**鉴别力（核心）**：
- 若样品在 ISOS-D-3 vacuum 老化下相分离不可逆 → M4 redox 强参与
- 若 vacuum 与 ambient 下可逆性相同 → M4 不主导
- 强证据需要：质谱仪在线监测 I2 释放速率（如 Frolova 2021 范式）

**优化逻辑**：
- 用同一样品分批做 vacuum vs ambient → 排除批次差异
- 加入 N2 中间档作为对照（既无 O2/H2O 也非 vacuum）
- 老化时长 100 h 起步（参考 Hu 2026 ISOS-L-3 1617 h，Frohna 2024 100 h）

**同行证据（库内）**：
- Knight 2020 ACS Energy Lett.（被 Tian 2022 综述引用）— 大气环境对 LHS reversibility 的系统对比
- Frolova 2021 Adv. Energy Mater.（被 Tian 2022 引用）— vacuum 下 Pb²⁺/Pb⁰ 可逆 redox 仅在开放系下不可逆
- Kerner 2021（被 Tian 2022 引用）— redox model 框架

**同行证据（库外 / 待用户复核）**：
- Khenkin 2020 Nat. Energy 5:35 — ISOS 协议族（D-1 dark, L-2 light, T-3 thermal, D-3 vacuum 等）的标准定义
- Mathew 2020 ACS Energy Lett. 5:1872 — "Iodine expulsion at photo-irradiated mixed-halide perovskite interface" 直接证据

**跨领域**：
- 多相光催化研究（TiO2 上的 I2 释放）— 同一气氛切换 + 质谱 范式
- 有机光伏（OPV）使用 ISOS-D-3 真空老化排除大气贡献

**局限与备选**：
- 校内未必有原位质谱（需 differential pumping）→ 备选用真空腔 ex situ 收集 + GC-MS 离线分析
- vacuum 也会改变热传导，需对照温度

---

### 方法 D · 化学计量 R_H 调控的相分离动力学（Tiede 2020 范式）

**原理**：相分离速率 k_growth 取决于 V_I（碘空位）密度。增加 R_H = (n_Br + n_I)/n_Pb（即过量卤素）→ V_I 减少 → k_growth 减小 + k_recovery 增大。

**鉴别力（核心）**：
- 若 k_growth(R_H) 单调减、k_recovery(R_H) 单调增 → M3 vacancy-mediated 机制确认
- 若 k_growth 与 R_H 弱相关 → M3 不主导，M1/M2 主导

**优化逻辑**：
- 5–7 个 R_H 等距点（如 2.95、2.98、3.00、3.02、3.05、3.10、3.15）
- 同一前驱体批次以排除其他变量
- LSCM（laser scanning confocal microscope）测局部 k_growth：CW 450 nm 0.01 W/cm² 触发，pulsed 450 nm 0.01 W/cm² 1 kHz 探针
- 5–10 个空间点取平均

**同行证据（库内）**：
- Tiede 2020 JPCL 11:4911 是该方法的奠基文献（详见 `analysis/dir2_tiede2020.md`）— 在 MAPb(I0.17Br0.83)3 上展示 k_growth(R_H) 单调依赖
- Yoon 2017 ACS Energy Lett.（被 Tiede 引用）— 缺陷影响 LHS 动力学的早期工作
- Ruth 2018 ACS Energy Lett.（被 Tiede 引用）— vacancy-mediated kinetic Monte Carlo 模拟

**同行证据（库外）**：
- Bischak 2018 JPCL 9:3998 — polaron 模型与 vacancy 模型如何兼容
- Huang 2017 Nat. Commun. — defect engineering 对 ion migration 的影响

**跨领域**：
- 固态化学非化学计量研究（如 Li1-xFePO4）使用相同 stoichiometry 调控范式
- 离子导体（YSZ、Nafion）中空位浓度调控 ionic conductivity

**局限与备选**：
- R_H 微调难度大（前驱体反应敏感）→ 备选用 EDS 校准实际 R_H*（Tiede 2020 范式）
- 不同 R_H 可能改变形貌 → SEM 观测排除形貌干扰

---

### 方法 E · TOF-SIMS 深度剖面（Navid 2026 ΔDFE 描述符校准）

**原理**：飞行时间二次离子质谱（TOF-SIMS）以 < 1 nm 深度分辨率量化表面 vs bulk 的 Br/I 浓度比 c_surf/c_bulk，直接验证 Navid 2026 第一性原理预测的"Br 表面偏好"描述符。

**鉴别力（核心）**：
- M1 热力学：Navid 2026 DFT 预测 c_surf/c_bulk Br 比在 MAPb(Br0.5I0.5)3 ≈ 10×，FA0.8Cs0.2Pb(Br0.5I0.5)3 ≈ 4.5×。实测若与预测一致 → M1 描述符成立
- 重要伪命题检验：Fang Z. 2024 实验显示"Br-rich 表面"反而**抑制**相分离 — 与 Navid 描述符方向相反！这是博士工作差异化主题（详见 `analysis/dir2_fang_z_2024.md` § 5）

**优化逻辑**：
- 低能 Cs⁺ primary beam（1 keV）：减少 sputtering 引入的 mixing artifact
- 慢速 sputter（< 0.1 nm/s）：保证 1 nm 分辨
- 双极性检测：同时收 I⁻ 和 Br⁻ 信号 → 比值更可靠
- 对比 fresh vs photo-aged 样品的 c_surf/c_bulk 变化 → 看光致迁移

**同行证据（库内）**：
- Bai 2022 Science 在 FACs perovskite 用 2D + 3D TOF-SIMS mapping 量化阳离子分布（详见 `analysis/dir2_bai2022.md`）
- Doherty 2020 Nature 580:360 用 STEM-EDX 在亚 nm 分辨上展示 Br/I 比异质（被 Tian 2022 引用）

**同行证据（库外 / 待用户复核）**：
- Navid & Ahmad 2026 arxiv 2603.07829 是 ΔDFE 描述符的 first-principles 来源（详见 `analysis/dir2_navid2026.md`）
- Brivio 2016 J. Phys. Chem. Lett. — 第一性原理混溶间隙先驱
- 2025 Sci. Adv. (Yang group) 在 WBG 体系做 TOF-SIMS Br depth profile（待复核具体引用）

**跨领域**：
- 半导体 heterojunction 界面分析（Si/SiO2、III-V/Si）— TOF-SIMS 是金标准
- 锂电池 SEI 层成分剖面 — 同一仪器
- 涂层化学（Marie Curie ITN PROVISION 系列）— 表面浓度梯度量化

**局限与备选**：
- TOF-SIMS 是破坏性测量 → 同一区域不能重复扫
- 需要标定（matrix effect）→ 用纯 MAPbI3 + 纯 MAPbBr3 标样校准
- 备选：XPS angle-resolved（可以非破坏性测 ~5 nm 内的浓度梯度）

---

### 方法 F · 共聚焦 hyperspectral PL + 原位 GIWAXS / XRD（Frohna toolkit 简化版）

**原理**：在每个像素采集完整 PL 谱，提取峰位 / 强度 / FWHM 三参数；同时同区做 lab-source GIWAXS 看 (110) / (200) 峰位移与分裂；老化前 + 老化后同区比对。

**鉴别力（核心）**：
- 局部 PL 峰位中心 (COM) shift 直接反映 I-rich 域形成
- GIWAXS 峰分裂 → 直接证明结构相分离（与组分相分离区分）
- voltage-dependent PL：可提取局部 J–V 曲线（Frohna 2024 paradigm）

**优化逻辑**：
- LED 阵列光源（white light）匹配 ISOS-L 协议
- 共聚焦 PL 分辨率 200–300 nm（由衍射决定）
- GIWAXS 入射角 0.1°（grazing）→ 表面敏感
- 老化样品需要 fiducial mark（金 microlitho 标记）保证同区精度

**同行证据（库内）**：
- Frohna 2024 Nat. Energy multimodal toolkit 是该方法的 flagship（详见 `analysis/dir4_frohna2024.md`）
- Tang 2018（dir2 库内）共聚焦 PL + shear-force SPM 同区扫描
- Hu 2026 in-situ XRD 跟踪相变（详见 `analysis/dir3_hu2026.md`）

**同行证据（库外）**：
- Steele 2023 Adv. Energy Mater. "How to GIWAXS"（搜到的库外文献）— GIWAXS 在钙钛矿薄膜分析的标准协议
- 2025 Nat. Commun. "Uniform phase distribution of wide bandgap perovskite"（[s41467-025-66480-7](https://www.nature.com/articles/s41467-025-66480-7)）使用类似 multimodal 范式做相分布均匀性

**跨领域**：
- 二维材料（MoS2、WS2）光电异质性研究 — 共聚焦 PL mapping 是标准
- 电池正极颗粒 operando 研究使用 GIWAXS

**局限与备选**：
- 同步辐射 nXRF 资源紧张 → 用 lab μ-XRF 或 SEM-EDS 替代（牺牲分辨力）
- 备选：直接用 PL spectral COM 替代化学组分 mapping（间接但实验室可达）

---

### 方法 G · 第一性原理筛选 + 实验对照（DFT + Experiment Bridge）

**原理**：用 DFT (PBE + DFT-D3, slab models 17–19 layers) 计算候选组分的 ΔDFE；DFT 预测排序与实验 k_growth(组分) 排序做相关分析，建立"理论描述符 ↔ 实验动力学"映射。

**鉴别力（核心）**：
- 若 DFT ΔDFE 排序与实验 k_growth 排序一致 → 热力学描述符可用作筛选工具
- 若两者不一致 → 动力学因素主导 → DFT 描述符局限明显，需要补 ab initio MD

**优化逻辑**：
- VASP 或 Quantum ESPRESSO + PBE + DFT-D3（与 Navid 2026 一致以可比）
- (001) PbI2-terminated slab + 10 Å 真空层
- 候选组分：MAPb(Br0.5I0.5)3、FAPb(Br0.5I0.5)3、FA0.8Cs0.2Pb(Br0.5I0.5)3、Cs(Br0.5I0.5)3 等 6–8 个

**同行证据（库内）**：
- Navid & Ahmad 2026 (arxiv) 是 ΔDFE 描述符的 founding 论文
- Brivio 2016 J. Phys. Chem. Lett. 7:1083 — 混溶间隙第一性原理
- Bischak 2017 Nano Lett. 17:1028 — polaron 模型 first-principles + experimental cross-check
- Walsh group at ICL (Imperial College London) 长期产出 perovskite DFT 工作

**同行证据（库外 / 待用户复核）**：
- Even 2014 J. Phys. Chem. C — perovskite DFT 方法学奠基
- 大量 high-throughput screening 工作（Materials Project 平台）

**跨领域**：
- 高熵合金组分筛选用 DFT descriptor + experiment validation
- 电催化材料筛选（OER、HER 活性 descriptor）

**局限与备选**：
- DFT-PBE 对 Pb halide 带隙系统性低估 → 不影响 ΔDFE 相对排序但影响绝对值
- 静态 DFT 不含温度 / 动力学 → 需要 ab initio MD 补充（Year 3）
- 备选：用机器学习势 (MLP, NEP) 加速 MD（Bischak 2024+ 趋势）

---

## 2. 三年具体实验时间表

> 总结构：12 phases × 3 months。每 phase 给定 objective、key experiments、deliverable、risk。

### Year 1 · 基础建设（Months 1–12）

#### Phase 1.1 · 工具调试 + 基线样品（Months 1–3）

**Objective**：搭建表征平台 + 建立可重复的 baseline 样品。

**Key experiments**：
- 共聚焦 hyperspectral PL 显微镜与环境舱集成（N2 + 控温）
- KPFM 调试 fast-mode + glove-box atmosphere
- baseline 样品合成：FA0.83Cs0.17Pb(I0.83Br0.17)3（1.66 eV，参考 Frohna 2024 同款配方）
- R_H 调控 baseline：5 个梯度 (R_H = 2.95–3.10)

**Deliverables**：
- 仪器 SOP v0.1（PL + KPFM）
- baseline 样品 reproducibility test（3 batch × 3 spot）
- R_H 梯度样品库

**Risk**：仪器调试延误 → 备选用 LSCM + 标准 KPFM 起步

---

#### Phase 1.2 · 方法 A 实施（Months 4–6）

**Objective**：在 thin film 上验证 Ma 2024 dark-state PL 范式。

**Key experiments**：
- baseline 样品 30 s @ 50 W/cm² CW 405 nm 部分诱发相分离
- 撤光后 dark 中每 10 s @ 3 W/cm² 探针 1 s 收 PL 谱
- 跟踪 30 min dark 演化
- 重复 5 spots × 3 samples

**Deliverables**：
- Dark seg time-course 数据集
- 验证 / 否证"thin film 上 dark seg 是否如 NCs"
- SOP v0.2

**Risk**：thin film dark seg < 30 s → 改 ms 探针；若完全不可见 → film 内 trap charges 寿命短，可能为 M1/M4 主导，调整后续设计

---

#### Phase 1.3 · 方法 B 实施（Months 7–9）

**Objective**：在 baseline 上量化 fast-KPFM CPD 弛豫时间。

**Key experiments**：
- 1 sun illumination 1 h，每 30 s 一张 CPD map
- 撤光后每 30 s 一张 CPD，跟踪 30 min
- 同时记录形貌（避免 tip drift 误判）
- 与 Garrett 2017 MAPbI3 数据对比

**Deliverables**：
- CPD relaxation time 基线值（应在 min 级，复现 Garrett 2017）
- 同区扫描 fresh vs operated SOP
- 验证 fast-KPFM 平台对 ion migration 时间窗 sensitive

**Risk**：tip-induced ion migration noise → 缩短 lift height + 减小 bias amplitude

---

#### Phase 1.4 · A + B 双模态校准（Months 10–12）

**Objective**：把方法 A 的 dark PL 时间窗与方法 B 的 CPD 弛豫时间窗在同一样品上同区交叉验证。

**Key experiments**：
- 同一 fiducial-marked 样品先做 PL 实验（方法 A）
- 后做 KPFM 实验（方法 B），同 spot 扫描
- 两个时间窗应该同序（M3 主导预测：均为 min 级）

**Deliverables**：
- 双模态 baseline 数据集
- 4 元机制向量（M1, M2, M3, M4）— baseline 样品的第一份"指纹"
- Year 1 内部报告 + 投稿 1 篇会议论文（如 MRS Spring 或 IPV-CN）

**Risk**：两个时间窗不一致 → 重审协议，可能需要在 Year 2 加入额外步骤

---

### Year 2 · 协议反向验证（Months 13–24）

#### Phase 2.1 · Case 1 · 硒吩添加剂（Bai 2022）（Months 13–15）

**Objective**：用协议反向投影第一个真实方案，验证协议输出的合理性。

**Key experiments**：
- 复现 Bai 2022 硒吩添加剂工艺（DLS 验证 colloid 622→552 nm）
- 应用方法 A + B 双模态
- Step 3 加入 R_H 调控（看 selenophene 是否影响 V_I）
- Step 4 TOF-SIMS 表面 Br/I 比

**Deliverables**：
- Bai 2022 方案的 4 元机制向量
- 与原文宣称的对比分析（原文偏向 cation segregation，是否在我们协议下也确认 M1 主导？）
- 方法学论文 draft 起草

**Risk**：硒吩添加剂复现困难 → 备选用 thiophene（Bai 2022 副实验）

---

#### Phase 2.2 · Case 2 · 表面纳米抛光（Fang Z. 2024）★ 关键 case（Months 16–18）

**Objective**：解开"Br-rich 表面 vs Navid ΔDFE 描述符"的理论-实验矛盾。

**Key experiments**：
- 复现 Fang Z. 2024 湿法 Al2O3 抛光（30 s，移除 ~50 nm 表面层）
- TOF-SIMS depth profile：量化 c_surf/c_bulk Br 比，对照 Navid DFT 预测
- 同区做 PL + KPFM + GIWAXS（应变测量）
- 暗态 PL 看是否 trap density 减少

**Deliverables**：
- Fang Z. 方案的 4 元机制向量
- **博士工作的差异化论文 1**：Navid 2026 DFT 描述符与实验数据的关系修正（如果矛盾被解开 → 高 impact 论文，可投 Nat Commun / JACS）

**Risk**：抛光均匀性难控 → 备选用 dry tape stripping（Chen 2023 范式）

---

#### Phase 2.3 · Case 3 · 1-Butanethiol SLP（Hou 2020）+ 横比 dir3（Months 19–21）

**Objective**：把库内 dir3 的 APTMS（Pothoof 2023、Akrami 2023）+ Hou 2020 1-butanethiol 三种表面钝化策略横向比较，建立"钝化分子结构 → M3 抑制效率"映射。

**Key experiments**：
- 1-butanethiol 蒸气钝化（需要蒸气源设备 — 与外部组合作或购买）
- APTMS 蒸气钝化（dir3 已有协议）
- 长链硫醇（C8-thiol）作为对照
- 三组样品同协议测 M3 dynamics（fast-KPFM CPD relaxation）

**Deliverables**：
- 三种钝化方案的机制向量
- 钝化分子链长 vs CPD 弛豫时间的相关性分析
- **方法学论文 1（投稿）**：Cross-paper validation of M3 suppression via surface passivation

**Risk**：蒸气钝化设备 → 备选用 spin-coat 同种分子（牺牲均匀性）

---

#### Phase 2.4 · Case 4 · MPA 单卤推广 + Year 2 总结（Months 22–24）

**Objective**：测试 Hu 2026 MPA 在混卤体系下是否仍有效；写完整 methodology 论文。

**Key experiments**：
- 与 Hu 组（厦大）合作或自购 2-Pyy 设备
- 在 baseline FACs(I0.83Br0.17)3 上做 MPA
- 协议对比：MPA 处理前 vs 后

**Deliverables**：
- MPA 混卤推广 result（confirmation 或 falsification）
- Year 2 末：**方法学论文 1 投稿**（Adv. Mater. / Adv. Energy Mater. / Nat. Commun. 级别）

**Risk**：MPA 设备不可达 → 跳过此 case，集中精力优化前 3 case 的论文

---

### Year 3 · 协议演化 + 争议测试 + 论文写作（Months 25–36）

#### Phase 3.1 · 争议方案试跑（Months 25–27）

**Objective**：选 field 内一个机制争议方案，用协议测试能否给出唯一答案。

**候选争议**：
- "Trap PL" vs "Non-radiative recombination" 解读（Macpherson 2022 Nature 607:294 vs Frohna 2022 Nat. Nanotechnol. 17:190）
- "Polaron-driven LHS" vs "Trap-driven LHS" 在 single crystal 上的争议（Bischak 2017 vs Mao 2019 vs Mao 2021）

**Key experiments**：
- 在 single crystal MAPb(Br0.4I0.6)3 上跑 5 步协议
- 比较协议输出与现有论文的机制声明

**Deliverables**：
- 争议方案的协议输出
- 协议盲区识别（如果输出仍模糊）

---

#### Phase 3.2 · 协议 v0.2 + 开源发布（Months 28–30）

**Objective**：把协议 SOP + 数据分析脚本开源。

**Key activities**：
- 整理 SOP 为 GitHub repo（Markdown + Jupyter notebook）
- 上传 baseline 数据 + 4 个 case study 数据
- 撰写协议 demonstration 论文

**Deliverables**：
- **GitHub repo 公开发布**
- **方法学论文 2 投稿**：Protocol demonstration paper

---

#### Phase 3.3 · 模组级测试（Months 31–33）

**Objective**：把协议从 cm² 推广到 10.5 cm² mini-module（Yu 2026 数据点）。

**Key experiments**：
- 与外部组（如 LONGi、Toyota）合作或自制 mini-module
- 协议适配大面积（PL mapping 改成 large-area scan，KPFM 取多 spot 平均）

**Deliverables**：
- 协议 scalability 评估 chapter

**Risk**：模组样品资源紧张 → 退而求其次用 4 cm² 标准 cell

---

#### Phase 3.4 · 论文写作 + 答辩准备（Months 34–36）

**Objective**：博士论文成稿 + 答辩。

**Deliverables**：
- 博士论文 6 章：(1) 引言 (2) 4 类机制综述 (3) 方法学 (4) 4 case validation (5) 协议 v0.2 (6) 展望
- 累计已投 / 已发论文：1–2 篇方法学 + 1 篇 differentiator（Fang Z. 矛盾解决）+ 若干会议
- 答辩 PPT + Q&A 准备

---

## 3. 关键里程碑与产出

| 时间 | 里程碑 | 产出 |
|---|---|---|
| Y1 末 | Baseline 4 元向量 + 双模态 SOP | 内部报告 + 1 会议 |
| Y2 末 | 3 case study 完成 | 方法学论文 1 投稿 |
| Y3 中 | Fang Z. 矛盾解决 + 协议 v0.2 | Differentiator 论文 + GitHub release |
| Y3 末 | 论文成稿 + 答辩 | PhD degree |

---

## 4. 风险评估与备选

> 单点失败不致全盘失败；下表给出主要风险与备选。

| 风险类别 | 主要风险 | 备选 |
|---|---|---|
| 仪器 | fast-KPFM ps 时间分辨不达预期 | 用 ms 级 fast-KPFM + PL 时间序列 |
| 仪器 | TOF-SIMS < 1 nm 分辨不可达 | XPS angle-resolved（牺牲深度，保留化学组分对比） |
| 样品 | Bai/Hou/Hu 复现失败 | 优先 Bai + Fang Z.（最易复制），降低 Hou 蒸气工艺优先级 |
| 样品 | 抛光均匀性差 | 改 dry tape stripping（Chen 2023 范式） |
| 设备 | 老化箱不可控 vacuum | Step 2 改 N2 vs air 切换；M4 redox 验证仍可定性 |
| 协议 | 输出 4 元向量模糊 | 加 Step 6（如 PTIR / AFM-IR）作为补充 |
| 同行竞争 | 2025+ 出现类似协议（如 PHASET） | 强化"反向验证 4 case + DFT 桥接"差异化角度 |

---

## 5. 引用映射

### 5.1 库内分析文件（已完成深读）

| 论文 | 分析文件 |
|---|---|
| Frohna 2024 Nat Energy (multimodal toolkit) | `analysis/dir4_frohna2024.md` |
| Tian 2022 Electronics (visualization review) | `analysis/dir4_tian2022.md` |
| Qu 2026 EES Solar (SPM review) | `analysis/dir4_qu2026.md` |
| Tiede 2020 JPCL (V_I + R_H kinetics) | `analysis/dir2_tiede2020.md` |
| Navid 2026 arxiv (ΔDFE descriptor) | `analysis/dir2_navid2026.md` |
| Ma 2024 arxiv (dark-state seg) | `analysis/dir2_ma2024.md` |
| Bai 2022 Science (selenophene) | `analysis/dir2_bai2022.md` |
| Hu 2026 Science (MPA) | `analysis/dir3_hu2026.md` |
| Fang Z. 2024 Nat Commun (nano-polishing) | `analysis/dir2_fang_z_2024.md` |
| Hou 2020 Science (1-butanethiol SLP) | `analysis/dir2_hou2020.md` |

### 5.2 Batch 综合 → 本计划的对应位置

| Batch | 对应方法 |
|---|---|
| Batch 1 工具调色盘 | 方法 A–G 的整体框架 |
| Batch 2 机制读数靶心 | 方法 A、B 的鉴别力部分 + 量化阈值 |
| Batch 3 反向投影 | Year 2 的 4 case study |

### 5.3 关键开源 / 库外文献（用户可复核）

- Khenkin 2020 Nat. Energy 5:35 — ISOS 协议族
- Garrett 2017 ACS Appl. Mater. Interfaces 9:21955 — fast-KPFM MAPbI3 弛豫
- Empedocles & Bawendi 1997 Science 277:2114 — single CdSe NC trap charge dynamics
- Mathew 2020 ACS Energy Lett. 5:1872 — I2 expulsion
- Steele 2023 Adv. Energy Mater. — How to GIWAXS
- Brivio 2016 J. Phys. Chem. Lett. 7:1083 — perovskite miscibility gap

### 5.4 2025 最新文献（搜索得到，需用户复核）

- [Photo-homogenization Assisted Segregation Easing Technique (PHASET), Nat. Commun. 2025](https://www.nature.com/articles/s41467-025-63176-w) — 2-ThEABr 表面钝化 + light soaking 抑制 LHS
- [Uniform phase distribution of WBG perovskite, Nat. Commun. 2025](https://www.nature.com/articles/s41467-025-66480-7) — multimodal 范式做相分布均匀性
- [Photoinduced phase segregation in WBG mixed-halide PSCs, EMD 2024](https://www.sciopen.com/article/10.26599/EMD.2024.9370037) — 综述
- [Phase segregation mechanism and suppression in WBG perovskites toward efficient and stable PSC/Si tandems, ScienceDirect 2026](https://www.sciencedirect.com/science/article/pii/S2950477526000133)
- [Influence of Hole Transport Layers on Buried Interface in WBG Perovskite Phase Segregation, MDPI 2024](https://www.mdpi.com/2079-4991/14/11/963)
- [Stopping Phase Separation Enables Durable WBG Photovoltaic Perovskites, ResearchGate 2025](https://www.researchgate.net/publication/397721067_Stopping_Phase_Separation_Enables_Durable_Wide-Bandgap_Photovoltaic_Perovskites)
- [Surface reconstruction of WBG perovskites enables efficient PSC/Si tandem, Nat. Commun. 2024](https://www.nature.com/articles/s41467-024-54925-4) — Fang Z. 2024（已库内）
- [Overcoming Phase Segregation in WBG Perovskites: from Progress to Perspective, Adv. Funct. Mater. 2024](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adfm.202404402) — Fang 2024 综述（已库内）

### 5.5 PHASET 2025 与本计划的关系

> PHASET（Nat. Commun. 2025）独立提出"光-均质化辅助分相缓解"思路，与本计划的"用 fast-KPFM 量化 trap density 抑制"是**互补关系**而非竞争 — PHASET 是 mitigation 方案（属于本计划的 case study 候选），本计划是评估方法。**建议把 PHASET 加入 Year 2 的第 5 个 case study 候选**。

---

## 6. Next steps for the user

1. **本周内**：通读本计划，标记每个方法你**最感兴趣 / 最有疑虑**的部分；与导师讨论可达性（仪器、合作、经费）。
2. **下次跟我对接**：(a) 哪些方法保留 / 删除？(b) Year 1 起步是否需要先简化到只做方法 A + B？(c) Fang Z. 矛盾解决是否定为 Year 2 重点？
3. **同步推进**：完成 dir4 评估协议 v0.1 草稿（基于本计划第 1 节方法 A–G），公开发布到 GitHub 作为博士工作的方法学锚点。
4. **复核**：把 5.3 / 5.4 节列出的库外文献逐一核对（特别是 PHASET 2025、Garrett 2017、Mathew 2020），确认我引用的数据点准确无误后，再纳入正式开题报告。
