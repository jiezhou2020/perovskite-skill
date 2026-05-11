# C1 & C3 方法的物理原理与逻辑论证

> **文档目的**：v2 计划中针对 C1（Br-rich 表面悖论）提出用 APT、针对 C3（机制主导权）提出用 NV-AFM。本文档详细论证：(a) 这些方法的物理原理是什么；(b) 基础理论从哪里来；(c) 测量到结论的逻辑链如何走；(d) 局限与潜在伪影。这是开题答辩"你的方法为什么能解决这个问题"的标准防守材料。

---

## C1 · APT 解 Br-rich 表面悖论

### 1.1 问题再述

> Navid 2026 DFT 预测 Br 在 < 1 nm 表面层富集（c_surf/c_bulk ≈ 4.5–10×），且这种富集"驱动相分离"；Fang Z. 2024 实验做出 Br-rich 表面后**抑制**相分离。**两者真正矛盾还是看不同 region**，需要在原子级 3D 空间里看清 Br 实际分布 + 缺陷分布。

### 1.2 APT 物理原理

#### 1.2.1 基础设备物理

Atom Probe Tomography 建立在两个老物理实验上：**field ion microscopy**（Müller 1956 J. Appl. Phys. 27:474）和 **time-of-flight mass spectrometry**。现代 APT 把两者整合：

**样品几何**：把样品做成尖端曲率半径 R = 50–100 nm 的针状（cryo-FIB lift-out 完成）。这是关键——尖端曲率小到 100 nm，电场放大效应才够强。

**冷冻 + 超高真空环境**：样品冷却到 20–80 K，腔体 ~10⁻¹¹ mbar。低温抑制原子热运动；超高真空避免气体污染原子飞行。

**直流电压偏置**：在样品针尖和接地的反向极板之间施加 V_DC = 5–10 kV。尖端处局域电场为

```
F_local = V / (k · R)
```

其中 k ≈ 5 是几何因子。代入数值：F ≈ 10⁴ V / (5 × 50 nm) = 4 × 10⁷ V/cm = **40 V/nm**（接近 evaporation 阈值）。

**触发脉冲（电压或激光）**：在 DC 偏置之上叠加纳秒级电压脉冲（或皮秒激光脉冲），把局域电场短暂推到 evaporation 阈值之上 → 表面原子被场致离子化并以离子形式飞离。

**飞行 + 探测**：离子被加速到 ~ keV 能量，在长约 ~ m 的飞行管中走完后击中位置敏感探测器；同时记录飞行时间 t_flight。由 t_flight 反推 m/z（动量-能量分离），由探测器位置反推离子初始位置。

#### 1.2.2 关键物理：场致蒸发（field evaporation）

> 这是 APT 能"原子级 3D 重建"的关键。

场致蒸发理论（Müller 1956；Forbes 2003 Mater. Sci. Eng. R: Reports 32:1）：表面原子在外加电场下势能曲线被扭曲：

```
U(z) = U_0(z) − qFz
```

当电场 F 足够强（材料相关，10–60 V/nm），势垒消失，原子立即被场致离子化并按 F 方向加速离开表面。蒸发速率符合 Arrhenius 形式：

```
k_evap(F, T) = ν · exp[−(Q_0 − αF) / kT]
```

其中 Q_0 是零场结合能，α 是场敏感系数。

**关键 implication**：通过控制 V_DC（缓慢扫描）+ 脉冲幅度，可以让原子**一个一个**蒸发，蒸发顺序就是从最尖端到内部。重建时反推每个原子位置，得到 3D atom-by-atom map。

#### 1.2.3 空间分辨力来源

**深度分辨力（沿针轴方向）≈ 0.1 nm**：每蒸发一层原子，针尖凹陷一个原子距离。检测器记录每个事件 → 通过事件计数反推深度位置。

**横向分辨力（垂直针轴）≈ 0.3–0.5 nm**：由探测器位置 (x_det, y_det) 和飞行投影模型反推 (x_tip, y_tip)。投影模型涉及离子飞行轨迹的曲率（受电场分布影响），是 APT 重建的主要误差来源。

**化学特异性**：m/z 分辨率 ~1000 → 79Br⁺ (78.92) vs 81Br⁺ (80.92) vs 127I⁺ (126.90) 完全分离。Pb 的多电荷态 (Pb²⁺ at m/z = 103.6) 也能识别。

#### 1.2.4 钙钛矿 APT 的物理可行性

钙钛矿的 evaporation field 估算（基于 binding energy ~ 1–3 eV/atom + α 系数）：F_evap ≈ 30–50 V/nm，**完全在 APT 工作窗口内**。Whiteside 2023 ACS Energy Lett. 8:2399 已在 CsPbBr3 上 demo 成功。

主要挑战是**样品制备**：钙钛矿软（剪切模量低）、对电子束敏感、对 Ga⁺ FIB 敏感。解决方案：**cryo-FIB lift-out**（在 ~100 K 制 lamella，避免常温降解）+ 低 Ga⁺ 加速电压（5 keV polish step）。

### 1.3 为什么 APT 物理原理能解 C1

C1 需要回答的物理问题：

> **在 Fang Z. 抛光样品的 < 1 nm 表面层内，Br/I 实际原子级分布是什么？同时是否伴随缺陷（V_I, V_Br, V_Pb）的分布变化？**

APT 提供的物理观测量：
1. 每个被检测原子的 3D 坐标（x, y, z）+ 化学种类
2. 总检测原子数（缺失原子 = vacancy candidate）
3. 重建体积 ~ 50 × 50 × 100 nm³（典型）

**匹配度分析**：

| C1 需要的信息 | APT 给出的物理量 | 物理原理 |
|---|---|---|
| < 1 nm 深度分辨 | 0.1 nm depth resolution | 原子层逐层蒸发 |
| 区分 Br vs I vs Pb | m/z 分辨 > 1000 | ToF + 多电荷态 |
| 表面区域 vs bulk 对比 | 3D 重建，可任意切片 | 投影反推 |
| 缺陷可视化 | 原子缺失位置 | 计数偏差 + 邻近原子位移 |
| 定量 c_surf/c_bulk | 直接 counting | 原子数 / 体积 |

**关键点**：c_surf/c_bulk Br 比是 APT **直接观测量**——不需要 calibration（不像 SIMS 受 matrix effect 影响），不需要模型（不像 XPS 需 attenuation length 假设）。这是 APT 在这个问题上**不可替代**的物理优势。

### 1.4 测量到结论的逻辑链（C1）

```
APT 3D 重建 (atom-by-atom 3D map)
        ↓ (数据后处理)
按 depth 切片 → c_Br(z)、c_I(z) profiles  (z = 距表面距离)
        ↓
计算 c_surf/c_bulk = ⟨c_Br⟩(0–2 nm) / ⟨c_Br⟩(5–20 nm)
        ↓
对比 Navid 2026 预测 (4.5–10×)
        ↓
结合 vacancy density 分析（同样数据 reconstruct）
        ↓
分情景判读 (五个 hypotheses H1–H5)
```

### 1.5 量化判据（重申，关键 deliverable）

| APT 实测 | Navid 预测匹配 | Fang Z. 实验一致 | 物理解读 |
|---|---|---|---|
| c_surf/c_bulk < 1.5× | ✗ | "Br-rich" 实际是 5–20 nm scale | Navid 预测在 dynamic 条件下未实现 |
| c_surf/c_bulk ≈ 4.5× + vacancy 同步少 | ✓ | "Br-rich" + "defect-poor" 耦合 | M3 缺陷机制是 LHS 抑制根源 |
| c_surf/c_bulk > 4.5× + vacancy 不变 | ✓ | Br-rich 但缺陷未变 | Br⁻ 离子电屏蔽 trap field（最高 impact） |
| Polished c_surf > Pristine c_surf | — | 表面富集是机械工艺人工产物 | 与 Navid 热力学无关 |

### 1.6 DFT-MLIP MD 补充的物理原理

> APT 给的是**冷冻态原子分布**（~80 K 测量），需要**有限温度 MD** 来验证是否代表 300 K 操作温度下的平衡态。

**机器学习势（MLIP）理论基础**：神经网络拟合 DFT 能量+力的高维曲面，达到 DFT 精度但速度快 10⁴–10⁵ 倍。常见框架：

- NEP（Fan 2022 J. Chem. Phys. 157:114801）— 神经网络势用 Chebyshev polynomial basis
- DeePMD（Wang 2018 Comput. Phys. Commun. 228:178）— 深度学习势
- MACE（Batatia 2022 Adv. Neural Inf. Proc. Syst.）— message-passing equivariant 网络

**训练 → 应用 pipeline**：
1. 用 Navid 2026 的 PBE+D3 DFT 数据集（slab + bulk + defects）作为训练集
2. 训练 MLIP 直到能量 RMSE < 5 meV/atom，力 RMSE < 0.1 eV/Å
3. 在 300 K NPT 系综下跑 10–100 ns MD
4. 时间平均 Br 在表面的浓度，与 APT 静态结果对照

**关键物理**：MLIP MD 含有限温效应——熵贡献、声子涨落、构型熵——这些是 Navid 静态 DFT 不含的。

### 1.7 与现有方法的物理对比

| 方法 | 测量原理 | 深度分辨 | 定量度 | 缺点 |
|---|---|---|---|---|
| XPS | 光电效应（Einstein 1905）；电子逃逸深度 ~ 5 nm | 5–10 nm 平均 | 中（attenuation model） | 无 < 1 nm 分辨 |
| TOF-SIMS | Cs⁺/O₂⁺ sputter + 二次离子 | < 1 nm（理论） | 低（matrix effect） | 绝对量化困难 |
| STEM-EELS | 高能电子能量损失 | 0.1 nm | 高 | 钙钛矿光束损伤 |
| Cryo-EM 4D-STEM | 衍射 + 散射 | nm 级 | 高 | 不能 operando，已 published |
| **APT** | **场致蒸发 + ToF** | **0.1 nm** | **直接原子计数（无 model）** | **样品制备难** |

**APT 物理上无可替代的特性**：它是**直接定量**的——每个被检测的原子就是一个数据点；不需要"扣除背景"、"假设 matrix"、"calibration standard"。这是它在 C1 上比所有竞争方法更硬的根据。

---

## C3 · NV-AFM 解机制主导权

### 2.1 问题再述

> **operando 条件下**，Polaron（M2）/ Trap-charge field（M3）/ Redox（M4）三类机制各贡献多少？Ma 2024 已经在**暗态**下排除 M2/M4 单独成立的可能，但**光照下**三者权重未量化。核心是：trap 真的产生 V/μm 局域电场吗？多大？空间分布如何？

### 2.2 NV 中心物理原理

#### 2.2.1 原子结构

金刚石氮空位（NV）中心：一个 N 原子替代 C 位 + 相邻一个 C 空位。带电态 NV⁻ 是 sensing 活性态。两个未配对电子形成自旋三重态（S=1）基态 ³A₂。

#### 2.2.2 能级结构

基态 ³A₂ 的三个 magnetic sublevels：m_s = 0、+1、−1。零场下 m_s = ±1 比 m_s = 0 高 D ≈ **2.87 GHz**（zero-field splitting）。这个 splitting 来自 NV 轴上的 spin-spin 偶极相互作用（轴对称的 C₃ᵥ 对称性破坏）。

激发态 ³E 在 1.945 eV（637 nm 零声子线）处。激发后系统经历声子驰豫至 ³E 振动基态，然后辐射回 ³A₂。

#### 2.2.3 光学读出（ODMR）

关键现象（Gruber 1997 Science 276:2012；Maze 2008 Nature 455:644）：

- 532 nm 激光激发 NV⁻：从 ³A₂ 跃迁到 ³E
- 激发态 m_s = ±1 有显著概率经由 intersystem crossing 通过 dark singlet ¹A₁、¹E 退激 → 不发 637 nm 光
- m_s = 0 几乎全走辐射路径
- → **PL 强度 ∝ ρ(m_s = 0)**（自旋投影）

加 microwave drive 在 ω = D = 2.87 GHz 时，把 m_s = 0 → m_s = ±1：PL 强度下降 → 形成 ODMR dip。

**这就是 NV 读出量子态的"光磁双重"机制**。

### 2.3 NV 电场感测原理（关键）

#### 2.3.1 Stark Hamiltonian

NV 基态在外电场下的有效自旋 Hamiltonian（Doherty 2013 Phys. Rep. 528:1；van Oort 1990 J. Phys. C 23:5125）：

```
H = D · S_z²  + γ_e · B · S  + H_E(F)
```

其中电场项 H_E 来自电偶极相互作用：

```
H_E = d_∥ · F_z · (S_z² − 2/3)  +  d_⊥ · [F_x · (S_x² − S_y²)  +  F_y · (S_x · S_y  +  S_y · S_x)]
```

电偶极系数（实验测量值，Dolde 2011 Nat. Phys. 7:459；Block 2021 PRX 11:031043）：

- **d_∥ ≈ 0.35 Hz·cm/V**（沿 NV 轴）
- **d_⊥ ≈ 1.7 Hz·cm/V**（垂直 NV 轴）

#### 2.3.2 电场对 ODMR 的影响

E-field along NV axis (F_z):
- m_s = ±1 双重态被 shift（保持简并）→ ODMR 中心频率轻微偏移
- shift ∝ d_∥ · F_z

E-field perpendicular to NV axis (F_x, F_y):
- m_s = ±1 的简并被破坏 → ODMR dip 分裂为两条
- splitting ∝ d_⊥ · |F_⊥|

**关键的量级估算**：

设 trap charge field |F| = 1 V/μm = 10⁴ V/cm。垂直 NV 轴方向：

```
ΔE_zeeman_eq = d_⊥ · F = 1.7 Hz·cm/V × 10⁴ V/cm = 1.7 × 10⁴ Hz = 17 kHz
```

ODMR 线宽（isotopically purified ¹²C 金刚石）：~ 100 kHz–1 MHz。
17 kHz 的分裂在长积分时间（100 ms+）下**可检测**。

灵敏度（current state-of-art，Bian 2022 npj Quantum Inf. 8:74）：
- AC E-field：26 mV/μm/√Hz
- DC gradient：2 V/μm²/√Hz

在 1 s 积分时间下，1 V/μm 的 DC 场可以 high-SNR 读出。

### 2.4 扫描 NV-AFM 的实现

#### 2.4.1 几何构型

两种主流构型：
1. **Diamond nano-pillar tip**（Maletinsky 2012 Nat. Nanotechnol. 7:320）：单晶金刚石被刻蚀成纳米柱，柱尖含单个 NV，从样品上方 ~10 nm 处扫描
2. **Nanodiamond on AFM tip**：把含 NV 的纳米金刚石（~30 nm）粘附到标准 AFM 探针上

**关键参数**：NV 到样品距离 d ≈ 5–20 nm（受 tip-sample 接触模式控制）。

#### 2.4.2 空间分辨力的物理来源

对于一个点电荷 q 在样品中距 NV 距离 r 处：

```
F(r) = q / (4π ε ε₀ r²)
```

NV 测量到的是其位置处的 E-field 矢量。当 NV 距样品表面 d，电荷距表面深度 z 时，r = √((Δx)² + (d+z)²)。

**分辨率限制**：当扫描时，要分辨两个相邻电荷源，需要它们各自的场分布在 NV 位置可区分。Rayleigh-like 准则给出：

```
Δx_min ≈ d (大约相当于 NV-sample 距离)
```

典型值 d = 10 nm → **lateral 分辨率 ~ 10 nm**。

#### 2.4.3 量化校准

NV 是**绝对**测量——电偶极系数 d_∥、d_⊥ 是金刚石原子属性，普适不变。这意味着：

> **NV 给的 E-field 值是绝对的物理量，不依赖于校准样品**。

这是它优于 KPFM 的核心物理——KPFM 给出的是相对 CPD，需要标样校准，而且 CPD 是 work function + dipole + band-bending 的混合。

### 2.5 为什么 NV 信号能区分 M2/M3/M4

> 这是 v2 计划中最关键的物理论证。

#### 2.5.1 M2 极化子的电场签名

大极化子在 lead halide perovskite 的物理图像（Miyata 2017 Sci. Adv. 3:e1701217；Bischak 2017 Nano Lett. 17:1028）：

电子 + 局部晶格畸变 → 电子等效 mass increase + dipole moment of distorted lattice。

电极化的源是**位移偶极**（不是净电荷）。大极化子典型电偶极强度 ~ 1 Debye/molecule × 集体相干 N 个单元 → 净偶极 < 10² eÅ。

在 NV 位置（10 nm 距离）产生的电场：

```
F_polaron ~ p / (4π ε₀ ε r³) ~ 10² × 1.6×10⁻¹⁹ × 10⁻¹⁰ / (4π × 25 × 8.85×10⁻¹² × (10⁻⁸)³)
       ~ 10⁵ V/m = 0.1 V/μm
```

但**关键**：极化子寿命 ns–μs。撤光后场迅速消失。

**M2 NV 签名**：|F| 约 0.01–0.1 V/μm，分布弥散，撤光后 ns–μs 内消失。

#### 2.5.2 M3 trap-charge 的电场签名

被陷于 V_X 缺陷的电子（或空穴）是**真实净电荷**。一个 trapped electron 在距离 r 处的电场：

```
F_trap(r) = e / (4π ε ε₀ r²)
```

钙钛矿 ε ≈ 25。代入 r = 10 nm（NV 距样品 ≈ 距离 trap）：

```
F_trap = 1.6×10⁻¹⁹ / (4π × 25 × 8.85×10⁻¹² × (10⁻⁸)²)
       = 5.75 × 10⁵ V/m = 0.58 V/μm
```

更近距离（r = 5 nm）：F ~ 2.3 V/μm。

**关键**：trap 寿命 min 级（Garrett 2017、Ma 2024 一致）。撤光后场缓慢衰减。

**M3 NV 签名**：|F| 约 0.5–2 V/μm，**点状局域**在缺陷处，撤光后 min 级衰减。

#### 2.5.3 M4 redox 的电场签名

Redox 过程产物：
- I⁰（中性）：无净电荷，但局部组成改变 → 弱偶极
- I₂(g)（vapor）：离开系统，**留下 V_I⁺（带正电的碘空位）**

V_I⁺ 是**带净电的缺陷**，与 M3 trap 物理上等价。所以 M4 的 NV 签名通过它留下的 V_I⁺ 间接显现：

```
F_VI(r) = e / (4π ε ε₀ r²)
```

数值上与 M3 同量级。但**关键差异**：
- M4 留下的 V_I⁺ 在 vacuum 下无法形成（I₂ 不能逃）
- M4 不可逆——撤光后 V_I⁺ 不会消失
- 空间分布偏向表面（I₂ vapor 从表面逃逸）

**M4 NV 签名**：|F| ~ V/μm（与 M3 同），但持续不可逆，集中于表面区域，大气依赖。

#### 2.5.4 三机制 NV 签名对照

| 维度 | M2 polaron | M3 trap-charge | M4 redox |
|---|---|---|---|
| 稳态 \|E\| 量级 | ~ 0.01–0.1 V/μm | **~ 0.5–2 V/μm** | ~ V/μm |
| 撤光后衰减 | ns–μs（极化子寿命） | min（trap 寿命） | 持续不可逆 |
| 空间分布 | 弥散 / 局部小范围 | 点状（在 V_X 处） | 表面集中 |
| 大气依赖 | 无 | 弱（缺陷 baseline 不变） | 强（vacuum 阻 I₂ 逃逸） |
| 光强 scaling | 线性饱和（极化子密度饱和） | 线性未饱和 → trap-fill 后饱和 | 累积（不可逆，积分） |

> **这就是 NV-AFM 物理上能区分三机制的根据**——它们在 5 个独立维度（量级 / 时间 / 空间 / 大气 / 光强）上有**不同的签名**。

### 2.6 测量到结论的逻辑链（C3）

```
NV-AFM 扫描 (绝对 E-field 在 nm 尺度)
        ↓ 同区 KPFM (CPD 对照)
        ↓ 同区 PL hyperspectral (光物理对照)
        ↓ 同区暗态 PL 实验 (时间窗对照)
4 个独立实验：
  Exp 1: 时间分辨 E(t)（光开关）
  Exp 2: 光强依赖 E(I) (0.1–10 sun)
  Exp 3: 大气切换 (N₂ / air / vacuum)
  Exp 4: 空间相关性 (E 与 PL red-shift map)
        ↓ 多维度签名比对
        ↓ 与 5-D 签名表（2.5.4）对照
        ↓
输出机制权重四元向量 (M1, M2, M3, M4)
```

### 2.7 局限和潜在伪影

> 这是答辩要主动指出的——评委如果没问，你主动说，比被问倒更显严谨。

#### 2.7.1 NV 测量本身对样品的干扰

NV 读出需要 532 nm 激光（绿色）。在 1.66 eV 钙钛矿上，532 nm（2.33 eV）**超过 bandgap**，会激发光载流子，**自身可能诱发相分离**。

缓解措施：
1. NV 激发功率压到 < 1 μW（远低于 perovskite phase segregation 阈值 20–200 μW/cm²，Ruth 2023）
2. 短曝光时间（每 ODMR cycle ~ μs）
3. 与样品工作 illumination（如 1 sun = ~ 100 mW/cm²）分离 — 用不同波长（如样品用 405 nm 染料激光，NV 用 532 nm）

#### 2.7.2 钙钛矿表面对 NV 的化学影响

钙钛矿表面有机 cation 可能 sublimate / diffuse 到金刚石 tip 上 → 影响 NV 自身电荷态（NV⁻ vs NV⁰）。

缓解：
- 短扫描时间 + 定期 tip 检测（在标样上 calibrate）
- N₂ 环境减少 surface chemistry

#### 2.7.3 NV-sample 距离的不确定性

E-field 强烈依赖距离（∝ 1/r²）。1 nm 的距离误差 → ~20% 的 |E| 误差。

缓解：
- 用 sharper diamond pillar tip（控制 d 在 ±2 nm）
- 用 AFM 同步监控 tip-sample 距离
- 数据归一化到相对 E（同区不同时间的 ratio）

#### 2.7.4 PL 串扰

钙钛矿 PL 在 700–800 nm，NV PL 在 637 nm 附近 + sidebands extend to 800 nm。光谱重叠。

缓解：
- 用带通滤波器（如 660–730 nm）只采集 NV PL
- 时间门控（pulsed excitation + gated detection）

### 2.8 与现有方法的物理对比

| 方法 | 物理观测量 | 是否绝对 | 空间分辨 | 钙钛矿应用现状 |
|---|---|---|---|---|
| 标准 KPFM | CPD（接触电势差）= φ_tip − φ_sample | 否（标样校准） | ~ 50 nm | 大量 |
| Fast-KPFM | CPD 时间序列 | 否 | ~ 50 nm | 增长中（Garrett 2017 等） |
| Pp-KPFM | ps 级 CPD 瞬态 | 否 | ~ 50 nm | 少量 |
| SPVM | 光致 CPD 变化 | 否 | ~ 50 nm | 中等 |
| **NV-AFM** | **绝对 \|E\| via Stark effect** | **是（d_∥, d_⊥ 是原子属性）** | **5–20 nm** | **零（perovskite phase seg）** |

**NV-AFM 物理上的不可替代性**：它是 field 上**唯一**能直接给出 V/μm 量级局域电场绝对量化 + nm 尺度空间分辨 + 时间序列的工具。其他所有方法都是间接的（CPD、电流、PL 强度等）。

---

## 共同 takeaway

> **C1 + C3 选择 APT + NV-AFM 不是因为它们"花哨"，而是因为它们在物理上有不可替代的特性**——APT 的"逐原子直接计数"和 NV-AFM 的"绝对场量化"。两者都是从其他领域（金属冶金、量子传感）已经验证 20+ 年的成熟技术，只是钙钛矿相分离上**没人用过**。这就是 v2 计划合理且站得住的根据。

| 共同特征 | C1: APT | C3: NV-AFM |
|---|---|---|
| 起源领域 | 金属冶金 / 半导体业 | 量子传感 / 自旋物理 |
| 起源时间 | 1956（Müller 场离子显微）/ 现代 ~2010s | 1997（Gruber 单 NV）/ 商业 2010s |
| 测量原理 | 场致蒸发 + ToF-MS | NV Stark 效应 + ODMR |
| 钙钛矿应用现状 | 极少（仅 CsPbBr3 single crystal） | 零（相分离应用） |
| 不可替代性 | 直接原子计数（无 calibration） | 绝对 E-field（普适物理常数 d_∥/d_⊥） |
| 主要风险 | 样品制备（cryo-FIB） | NV 自身激发可能诱发相分离 |
| 风险缓解 | 已有 perovskite APT precedent | 光剂量协议 + 波长分离 |

---

## 关键引用（可外网核查）

### APT 物理与方法学

- Müller 1956 J. Appl. Phys. 27:474 — 场离子显微原理
- Forbes 2003 Mater. Sci. Eng. R: Reports 32:1 — 场致蒸发综述
- Kelly & Miller 2007 Rev. Sci. Instrum. 78:031101 — modern APT
- Gault et al. 2012 Microsc. Microanal. 18:1 — APT for materials science
- Whiteside et al. 2023 ACS Energy Lett. 8:2399 — 钙钛矿 APT 首批工作（CsPbBr3）

### NV 中心物理

- Doherty et al. 2013 Phys. Rep. 528:1 — NV 中心综述
- van Oort & Glasbeek 1990 J. Phys. C 23:5125 — Stark 效应 NV ground state
- Gruber et al. 1997 Science 276:2012 — single NV 光学检测
- Maze et al. 2008 Nature 455:644 — NV 磁测量原理
- Dolde et al. 2011 Nat. Phys. 7:459 — **NV electrometry 首次 demonstration**
- Maletinsky et al. 2012 Nat. Nanotechnol. 7:320 — scanning NV-AFM
- Bian et al. 2022 npj Quantum Inf. 8:74 — **NV electrometry state-of-art 灵敏度**
- Block et al. 2021 PRX 11:031043 — NV 电场系数实验测量

### MLIP 方法

- Behler & Parrinello 2007 PRL 98:146401 — neural network potential 原理
- Wang et al. 2018 Comput. Phys. Commun. 228:178 — DeePMD-kit
- Fan et al. 2022 J. Chem. Phys. 157:114801 — NEP 算法
- Batatia et al. 2022 NeurIPS — MACE 算法

### 钙钛矿物理（极化子、缺陷、redox）

- Miyata et al. 2017 Sci. Adv. 3:e1701217 — large polarons in lead halide perovskite
- Bischak et al. 2017 Nano Lett. 17:1028 — polaron 模型 LHS
- Belisle et al. 2017 ACS Energy Lett. 3:2694 — surface defect-driven LHS
- Garrett et al. 2017 ACS Appl. Mater. Interfaces 9:21955 — MAPbI3 minute-scale CPD relaxation
- Mathew et al. 2020 ACS Energy Lett. 5:1872 — I expulsion
- Frolova et al. 2021 Adv. Energy Mater. 11:2002934 — redox model
- Ma et al. 2024 arxiv:2407.04984 — dark-state phase segregation

---

## Next steps

1. **本周内**：通读本文档，标记你对哪个物理推导**最不确定**（如 Stark Hamiltonian、polaron 偶极估算、APT 场致蒸发等）；这些是答辩最可能被问倒的点，需要进一步深挖。

2. **找物理学导师 / 同行 review**：把 § 1.2 APT 物理原理 和 § 2.3 NV Stark Hamiltonian 单独抽出来，找有量子光学 / 表面物理背景的人帮你 sanity-check 一遍——确认没有概念错误。

3. **数量级估算的复核**：本文中我做了几个关键的量级估算（trap 电荷在 10 nm 距离的 ~ 0.58 V/μm、极化子偶极的 ~ 0.1 V/μm、Stark shift 17 kHz 在 1 V/μm）—— 这些都是简化模型，**实际数值需要更严肃的计算 / 实验验证**。建议作为 PhD Year 1 第一个 task（"标准化场估算 + 简化模型论文"）。

4. **要不要把 C2 / C4 / C5 也做同等深度展开**？现在 C1 + C3 是 v2 的两个高 impact differentiator，但答辩时评委可能拿 C2 / C4 / C5 中任一个来问。建议至少 C2（STED）和 C5（Brillouin）也做物理原理 + 逻辑链文档。
