# PhD 三年研究计划 v3
## Multi-modal Characterization of Photoinduced Phase Segregation in Wide-Bandgap Mixed-Halide Perovskites
### 宽带隙混卤钙钛矿光致相分离的多模态表征研究

---

## 0. 版本演化与本版定位

### 0.1 文档族谱

| 版本 | 主张 | 评估 | 角色 |
|---|---|---|---|
| **v1**（research_plan_dir4_characterization_v3.md）| 7 个钙钛矿成熟方法集成 → 5 步评估协议 | 无 novelty，答辩站不住 | 历史参考 |
| **v2**（_v2.md）| 5 个跨领域技术（APT/NV/STED/SIMS/Brillouin）作主攻判决 5 个争议 | 物理上 3/4 抨击成立，过度承诺 | 激进 framing 参考 |
| **重写版**（_rewritten_mechanism_oriented.md）| 成熟方法主线 + 高风险技术作高风险补充 | 科学严谨，可执行 | **本 v3 骨架来源** |
| **v3**（本版）| 重写版骨架 + v2 控制变量量化锚点 + 物理 mitigation | （本版） | **答辩主用** |

### 0.2 v3 写作哲学

> v3 不再是"我用什么新技术"，而是"**我用一套经过物理推敲的方法学组合 + 多维证据链 + 可证伪假设，给出量化的机制边界**"。

具体表现为三条：

**第一**：**不要求"决判"，要求"建立边界"**。3 年内不可能决定性回答"polaron 还是 trap-charge 主导 LHS"——field 内 10 年都没解决。但**可以**给出"在 X 条件下，Y 机制贡献 ≥ Z 的实验证据"。

**第二**：**主线用成熟方法、跨领域工具分级使用**。跨领域工具（APT/NV/STED/Brillouin）有明确物理局限（已被物理同行严格抨击），不能作为主攻；它们作为 Tier 2/3 验证型补充，需配合控制实验和多维交叉。

**第三**：**4 维证据链替代单一"决判"**：表面组成 × 局域电势 × 应变结构 × 化学态-气氛，相互一致才视为机制证实。

---

## 1. 研究目标与可证伪科学问题

### 1.1 总目标

建立**宽带隙混卤钙钛矿光致相分离的多模态表征框架**，能在不同样品、不同 stress 条件下系统比较：(a) 表面组成与缺陷分布；(b) 局域电势演化与时间响应；(c) 应变与结构动力学；(d) 化学态可逆性。最终目标是**给出多因素耦合的机制边界**，而不是证明某一机制为唯一驱动力。

### 1.2 三个可证伪的核心问题

#### Q1 · Br-rich surface 是稳定化条件还是结果？

**对立面**：Navid 2026 DFT 预测 Br 表面富集**驱动**相分离；Fang Z. 2024 实验做出 Br-rich surface 反而**抑制**相分离。

**v2 错位**：声称用 APT 直接判决 c_surf/c_bulk Br 比，**忽略了 40 V/nm 场致迁移**问题（详见 `2026-05-11_critique_response.md` § 1）。

**v3 重定位**：
- 不直接问"Navid 或 Fang Z. 谁对"
- 改问"**Br 表面富集是否与缺陷密度下降、电势平滑化、应变释放耦合**"
- 通过 AR-XPS + TOF-SIMS + PL/TRPL + KPFM **四维证据链**判断

#### Q2 · 局域电势异常与相分离 hotspot 是否空间共定位？

**对立面**：trap-charge field 模型预测局域电场驱动卤素迁移；但 KPFM 测的是 CPD（非纯电场），TR-PL 是载流子复合（非电场）。

**v2 错位**：声称用 NV-AFM 直接成像 trap field，**忽略了 1 sun 下 Debye 屏蔽 + 表面带弯背景**（详见 `2026-05-11_critique_response.md` § 2）。

**v3 重定位**：
- 不要求 NV-AFM 给"绝对电场"
- 改用**KPFM 同区 PL hyperspectral 时间相关**作主线
- NV-AFM 在弱光（≤ 0.1 sun）+ 差分（light on - light off）模式作 Tier 3 补充

#### Q3 · 可逆相分离与不可逆降解的边界由什么决定？

**核心问题**：在什么光强、温度、气氛、组成、缺陷水平下，相分离仍可逆；什么条件下跨入不可逆。

**主线**：气氛切换（N2 / air / vacuum）ISOS 老化 + XPS 化学态追踪 + UV-vis 吸收边演化 + 同位素 SIMS（Tier 2 验证型）。

### 1.3 中心 hypothesis

> 宽带隙混卤钙钛矿的光致相分离**不是由单一因素决定**，而是由**表面/晶界缺陷、局域电场、应变不均匀性和卤素化学势**共同耦合。Br-rich surface 本身**既不必然促进也不必然抑制**相分离 — 其作用取决于是否同时降低缺陷态、释放应变并改变局域电场边界条件。

由此推导出三个**可检验子假设**：

**H1**：表面 Br 富集**只在缺陷密度同步降低时**才表现为稳定化。

**H2**：局域电势/电场异常区域是相分离的**优先成核区域之一**（不一定是唯一原因）。

**H3**：不可逆相分离与卤素化学态变化（I⁰、I2 vapor、Pb⁰）相关，而非单纯可逆离子迁移。

---

## 2. 方法学：三层证据体系

> v3 把所有候选表征工具分为三个 Tier。**Tier 1 是博士工作的承重墙**，Tier 2/3 是"加分项"——失败也不会让计划崩溃。

### 2.1 Tier 1 · 主线（成熟、可达、必须做）

> 这 6 个方法在钙钛矿上已有大量先例（v1 列表里大部分），技术风险低；不是 novelty 来源，但是博士工作能否完成的保底。

| 方法 | 物理原理（简）| 在 v3 中的角色 | 主要 Aim |
|---|---|---|---|
| **Operando PL hyperspectral imaging** | 每像素全光谱采集；PL 红移 ∝ I-rich 域形成 | 相分离动力学指标：peak position、intensity、FWHM、recovery ratio | Aim 1 + 2 + 3 |
| **KPFM / fast-KPFM** | tip-sample 电势差测量；fast-KPFM 给 ms-s 时间序列 | 局域电势-相分离空间相关 | Aim 3（Q2） |
| **AR-XPS + TOF-SIMS depth profile** | XPS 光电效应 5 nm 平均；SIMS sputter + 二次离子 ~1 nm | 表面化学组成 + Br/I 深度分布 | Aim 2（Q1）|
| **GIWAXS / XRD lattice parameter mapping** | Bragg 衍射；lattice constants 反映应变与相分裂 | 应变分布 + 相变追踪 | Aim 3（Q3）|
| **UV-vis / EQE / PLQY** | 吸收 + 量子效率；判断 bandgap + 复合行为 | 整体相分离 + 缺陷钝化 | Aim 1 + 2 |
| **大气切换 ISOS（N2 / air / vacuum）** | Khenkin 2020 标准协议 | 可逆/不可逆边界判定 | Aim 3（Q3）|

**所有 Tier 1 方法在 Waseda 校内可达**（PL/XPS/SIMS/XRD/AFM-KPFM 都是标准设备）。

### 2.2 Tier 2 · 验证型补充（跨领域成熟、钙钛矿少见、合作可达即做）

> 这 3 个方法是 v3 的"差异化加分项"。物理上没有 v2 那种致命漏洞，但需要外部合作。如果做出来 → 高 impact 论文；如果做不出来 → 主线仍能完成博士工作。

#### Tier 2.1 · Cryo-CL imaging（替代 v2 的 STED）

**物理原理**：电子束在低温样品上激发 cathodoluminescence；空间分辨率 ~20 nm（SEM 光斑尺寸限）；冷冻条件下样品稳定性强。

**为什么替换 STED**：[`2026-05-11_critique_response.md` § 3] 量化分析显示 STED 所需 I_STED ≈ 420 MW/cm² = 2×10¹² × LHS 阈值，会自己烧出相分离。Cryo-CL 已被 Bischak 2017 (Nano Lett. 17:1028) 验证可在钙钛矿薄膜上做 ~20 nm 分辨 I-rich 域成像。

**v3 角色**：Q2 中验证 PL hotspot 是否对应 < 50 nm 尺度的 I-rich 域 pinning。

**Mitigations / 控制**：
- 控制电子束剂量（< 1 e⁻/Å²·s 累积）以避免束损伤
- Bischak 2017 已 publish 流程作 baseline
- 备选：tip-enhanced PL（TEPL）via SNOM tip

#### Tier 2.2 · Cryo-STEM-EDS / EELS（替代 v2 的 APT）

**物理原理**：scanning TEM + 能量色散 X 射线 / 电子能量损失 spectroscopy；亚 nm 空间分辨；冷冻 + 低剂量缓解束损伤。

**为什么替换 APT**：[`2026-05-11_critique_response.md` § 1] 量化：APT 40 V/nm 场在 80 K、1 小时测量中可驱动卤素漂移 ~18 nm，与 Navid 预测的 1 nm vs 5-20 nm 量级重叠 — **APT 无法区分热力学本征 vs 场致人工产物**。Cryo-STEM-EDS 是 **field-free**（无外加 DC 高电场），物理上更干净。

**v3 角色**：Q1 中验证 Br/I 在 < 5 nm 表面层的空间分布。

**Mitigations / 控制**：
- 低剂量 STEM（< 100 e⁻/Å²）避免束损伤（Doherty 2020 Nature 580:360 已 demo）
- Cryo-stage @ 100 K
- 多个晶区平均 + 不同样品 batch 复现
- 备选：HIM-SIMS（helium ion microscope + SIMS，~5 nm 横向分辨）

#### Tier 2.3 · ¹²⁹I 同位素 dynamic SIMS（保留 v2）

**物理原理**：用 ¹²⁹I（半衰期 1.57×10⁷ y 长寿命示踪）替代部分 ¹²⁷I 合成钙钛矿；光老化后 ToF-SIMS 跟踪 ¹²⁹I 在样品中的 inventory 与空间分布；配合 CRDS gas analysis 在线检测气相 I2。

**为什么保留**：同位素示踪在大气化学 / 地球化学是 50 年成熟技术；钙钛矿 halide isotope labeling 几乎未见（仅极少 ¹H/¹⁴N/¹³C cation 标记工作），物理上无 v2 那种致命漏洞。

**v3 角色**：Q3 中直接判决 redox-driven I loss vs reversible halide redistribution。

**Mitigations / 控制**：
- ¹²⁹I 标记前驱体合成的化学纯度需 NMR 验证（确保不破坏 perovskite phase purity）
- 备选：自然丰度 ⁷⁹Br/⁸¹Br 比测量（49:51 自然比例的细微偏差也可定性，灵敏度低 1-2 个数量级）

### 2.3 Tier 3 · 高风险增强（保留 v2 部分技术 + 严格控制实验）

> 这 2 个方法是 v3 的"如果都行得通就特别加分"。物理上有 known limitations（已被同行抨击），但通过控制实验 + cross-validation 仍能给出有意义的 incremental 证据。**如果做不到，也不影响主线**。

#### Tier 3.1 · NV-AFM scanning probe（v2 保留 + 弱光差分模式）

**物理原理**：金刚石 NV 色心 Stark 效应；ODMR 读出；nm 尺度局域电场绝对量化（Bian 2022 npj Quantum Inf. 8:74 给 26 mV/μm/√Hz 灵敏度）。

**Known limitations**：
- 1 sun 下 n_carrier ~ 10¹⁵-10¹⁶ cm⁻³ → L_D ~ 60-200 nm（NV @ 10 nm 处屏蔽 < 20%）— 可接受
- 表面带弯 ~ V/μm 量级是严重背景，需差分模式才能扣除
- NV 自身 532 nm 激发可能诱发钙钛矿相分离 → 需要 < 1 μW 激发功率 + 工作波长分离

**v3 控制实验设计**：
- **Mode 1**：弱光（0.1 sun，n ~ 10¹⁴-10¹⁵）操作 + 差分（light-on – light-off subtraction）
- **Mode 2**：同区 KPFM 测量 → 验证 NV E-field 与 CPD 的一致性
- **Mode 3**：晶面方向控制 → 选 NV 轴平行表面以减弱 band-bending 信号
- **Mode 4**：lock-in 时间分辨（ms-s 调制）→ 区分 DC 背景与动态成分

**v3 角色**：Q2 的**辅证**——主证据来自 Tier 1 KPFM + PL 同区。NV 提供"局域电场存在性"的强补充。

#### Tier 3.2 · Brillouin microscopy + 同区 PL deconvolve

**物理原理**：单色激光 + 热致声学声子非弹性散射；Brillouin shift Δν = 2nV/λ；空间分辨 ~ 1 μm。

**Known limitations**：n 和 V 都在相分离区域变化 → 单独 Δν 无法解耦（Δn/n ~ 13% 与 ΔV/V ~ 25% 同数量级）。

**v3 控制实验设计**：
- **同区 PL** → 局部 bandgap → 估算局部 n（Tauc-Lorentz model）→ 从 Δν 反推 V
- **同区 XRD lattice mapping** → 给独立 strain 验证
- **重点用 Brillouin linewidth（不是中心位移）**：linewidth ∝ phonon decay rate ∝ local disorder，不直接依赖于 n

**v3 角色**：Q1/Q3 中验证局部 disorder / lattice softness 与 LHS 的关联。**仅作 phonon dynamics 辅证**，应变主证由 GIWAXS 给出。

### 2.4 v2 中已删除的方法

| v2 方法 | 删除理由 | 替代 |
|---|---|---|
| **STED 主攻 C2** | I_STED = 2×10¹² × LHS 阈值，自烧 LHS | Cryo-CL（Tier 2.1）|
| **APT 主攻 C1** | 40 V/nm 场致迁移 ~18 nm/h，与 Navid 预测尺度重叠 | Cryo-STEM-EDS（Tier 2.2）|

---

## 3. Aim 1: Operando 相分离动力学评价体系

### 3.1 目标

建立**可重复、可比较、可量化**的相分离动力学 protocol，作为后续 Aim 2/3 机制分析的基线。

### 3.2 样品体系（继承重写版）

精选 2–3 个体系，避免过早扩展：

1. **Baseline**：FA0.83Cs0.17Pb(I0.83Br0.17)3（1.66 eV，参照 Frohna 2024 同款）
2. **Surface-treated**：Fang Z. 2024 抛光复现（Br-rich surface 对照）
3. **Defect-passivated**：dir3 已建立的 APTMS / 长链烷基铵卤化物钝化样品

### 3.3 主表征（Tier 1）

- Operando PL hyperspectral imaging：peak position、intensity、FWHM、recovery ratio、residual red-shift
- UV-vis + EQE + 稳态 PL：吸收边变化、辐射复合行为
- XRD / GIWAXS：相分裂、应变
- AFM / SEM：形貌（排除形貌假象）

### 3.4 系统扫描变量

| 变量 | 范围 | 区分目的 |
|---|---|---|
| 光强 | 0.1 / 1 / 5 sun | 线性响应 vs trap saturation vs 不可逆损伤 |
| 气氛 | N2 / air / vacuum | 可逆迁移 vs redox / volatile loss |
| 温度 | 25 / 50 / 85 °C | 离子迁移激活能 |
| Br/I 比 | 低 / 中 / 高 | 带隙 vs 相分离倾向 |
| 暗恢复时间 | min – h | reversible vs irreversible 边界 |

### 3.5 输出：相分离表型分类

按动力学行为分 4 类（与重写版一致）：

- **Type A**：快速红移 + 完全恢复 → 可逆 halide redistribution
- **Type B**：缓慢红移 + 部分恢复 → trap-assisted ion migration
- **Type C**：持续红移 + 化学态变化 → redox / irreversible halide loss
- **Type D**：局部红移热点固定 → defect / GB / strain pinning

**Aim 1 不追求机制结论，只追求表型分类**——后续 Aim 2/3 把每个 Type 与具体机制关联。

---

## 4. Aim 2: 表面组成、缺陷与 Br-rich 稳定化机制

### 4.1 目标（Q1 子问题）

判断 Br-rich surface 是否伴随缺陷密度下降、电势平滑化或应变释放——即 H1 假设。

### 4.2 主线（Tier 1）

#### 4.2.1 AR-XPS depth profile

比较 pristine / Br-rich treated / aged 样品的 Br/I/Pb 比 + I 3d、Br 3d、Pb 4f 化学态。**不能单独证明亚 nm Br-rich**，需与 SIMS / Cryo-STEM-EDS 共同解释。

#### 4.2.2 TOF-SIMS depth profiling

获得 Br/I 深度趋势（相对，绝对量化困难）；老化前后比对。

#### 4.2.3 TRPL / 绝对 PLQY

判断 Br-rich 是否伴随 non-radiative recombination 下降。

#### 4.2.4 KPFM / SPV mapping

比较表面电势 fluctuation 在 pristine vs treated 样品上的差异。

### 4.3 验证型补充（Tier 2）

#### 4.3.1 Cryo-STEM-EDS 验证亚 nm Br/I 分布

替代 v2 的 APT（已废）。在 Doherty 2020 Nature 580:360 流程基础上：
- 低剂量 STEM @ 100 K
- EDS line scan 跨表面-bulk 界面
- 量化 c_surf/c_bulk Br ratio
- 多 spot + 多 sample batch 平均

**与 AR-XPS / SIMS cross-validation**：若三种方法都显示 Br-rich 表面但 PLQY 不变，则 Br-rich **不是**通过缺陷钝化稳定 LHS（H1 反证）。

### 4.4 高风险增强（Tier 3）

无（Aim 2 不依赖 Tier 3）。

### 4.5 判读规则

| 多维证据 | 推断 |
|---|---|
| Br-rich + PLQY 提升 + CPD 平滑 + 相分离弱 | **H1 支持** — Br-rich 通过缺陷钝化 + 电势平滑稳定 |
| Br-rich 存在但 PLQY 不变，相分离仍强 | 单纯 Br 富集不稳定（H1 部分否证）|
| 无明显 Br-rich，但相分离弱 | 稳定化来自其他因素（缺陷 / 应变 / 晶界） |
| 老化后 Br/I 深度分布显著变化 | 表面组成是动态过程，Navid 静态 DFT 描述不充分 |

---

## 5. Aim 3: 局域电势、应变与不可逆化学变化耦合

### 5.1 目标（Q2 + Q3）

(a) 验证 H2：局域电势异常区域与相分离 hotspot 空间共定位；(b) 验证 H3：不可逆相分离与化学态变化的关联。

### 5.2 主线（Tier 1）

#### 5.2.1 同区 PL-KPFM 关联

Fiducial-marked 样品，sequential 测量：初始 AFM/KPFM → 初始 PL map → 光照老化 → 光照中/后 KPFM → 老化后 PL → 暗态恢复后再测。

**关键分析**：
- PL red-shift hotspot 与 CPD anomaly 是否空间共定位
- CPD 变化是否先于 PL red-shift
- 暗态恢复时 CPD 与 PL 是否同步恢复
- 不可逆区域是否对应更强表面电势残留

**物理解释边界**（重要！）：KPFM 测的是 CPD，**不是局域电场**。v3 不声称"CPD = trap field"，而是：

> KPFM/SPV 提供**局域电荷积累、电势重排和表面态变化的间接证据**；只有与 PL、TRPL、XPS/SIMS、气氛实验**共同吻合**时，才能支持 trap-assisted ion migration 机制（H2）。

#### 5.2.2 应变/弹性不均匀性分析

- GIWAXS / XRD peak analysis：peak shift / broadening / microstrain
- Raman / low-frequency Raman：Pb-I / Pb-Br framework vibration、lattice softness

#### 5.2.3 可逆/不可逆边界

- XPS / SIMS 化学态追踪：I⁰、I2、Pb⁰、PbI2 形成
- UV-vis 吸收边永久变化
- N2 / air / vacuum 对比：vacuum 下不可逆 → I2 escape；air 下不可逆 → O2/H2O 参与

### 5.3 验证型补充（Tier 2）

#### 5.3.1 同位素 SIMS 验证不可逆 I loss

¹²⁹I 标记 baseline 样品 → 1 sun 长老化 → dynamic SIMS depth profile 看 ¹²⁹I 总量是否守恒 → 配合 CRDS gas analysis 检测气相 ¹²⁹I2 → 直接判决 redox-driven loss vs reversible redistribution（H3）。

### 5.4 高风险增强（Tier 3）

#### 5.4.1 NV-AFM 验证局域电场峰值

弱光（0.1 sun）差分模式 + 同区 KPFM cross-validation。NV 给"绝对场"，KPFM 给"电势波动"——两者在同区一致，则**H2 强证**。

#### 5.4.2 Brillouin + 同区 PL/XRD 验证局部 stiffness

linewidth analysis（不依赖于 n）+ 同区 PL 给 bandgap → n 反推 → V 估算。

---

## 6. 三年时间表

### Year 1 · Aim 1 + Tier 1 基础建设

| 月份 | 任务 | Deliverable |
|---|---|---|
| M1–3 | 样品体系 + Tier 1 仪器调试 | baseline films, SOP v0.1 |
| M4–6 | Operando PL hyperspectral + 光强/温度/气氛扫描 | phase segregation kinetic map |
| M7–9 | 表面处理样品 + 钝化对照 | treated vs pristine 对比 |
| M10–12 | Year 1 整合 + 学会发表 | conference abstract + manuscript 1 draft |

### Year 2 · Aim 2 + Tier 1 deep + Tier 2 首次接触

| 月份 | 任务 | Deliverable |
|---|---|---|
| M13–15 | AR-XPS / TOF-SIMS depth profile（Tier 1）| surface composition dataset |
| M16–18 | 同区 PL-KPFM 关联（Tier 1） | spatial correlation map |
| M19–21 | Cryo-CL 合作（Tier 2.1）→ Q2 域 pinning | sub-50 nm I-rich domain imaging |
| M22–24 | GIWAXS / XRD strain + 论文 1 整合 | manuscript 1: surface stabilization mechanism |

### Year 3 · Aim 3 + Tier 2 验证 + 论文 + 答辩

| 月份 | 任务 | Deliverable |
|---|---|---|
| M25–27 | Cryo-STEM-EDS 合作（Tier 2.2）→ Q1 验证 | high-resolution composition dataset |
| M28–30 | 不可逆 + 同位素 SIMS（Tier 2.3）→ Q3 | reversible vs irreversible boundary |
| M31–33 | NV-AFM + Brillouin 合作（Tier 3，可选） | high-risk validation 数据 OR future work |
| M34–36 | 论文 2 + 博士论文写作 + 答辩 | PhD thesis + 2 主论文 + 1 短文 |

---

## 7. 预期产出

### 7.1 论文

**Manuscript 1（Year 2 末）**：Br-rich surface stabilization mechanism — 综合 Aim 2 的 AR-XPS / TOF-SIMS / TRPL / KPFM + Cryo-CL 数据，给出 H1 验证或否证。

**Manuscript 2（Year 3 末）**：Multi-modal characterization framework — 综合三个 Aim 的方法学框架；展示从 Tier 1 主线到 Tier 2/3 验证的证据链结构；4 维耦合机制图像。

**Short communication / Conference**：每年 1 篇短文（方法学 update 或单一 hypothesis 结果）。

### 7.2 数据集

GitHub repo：SOPs + Jupyter notebooks for analysis + raw data 链接 → "PV-MechBench" 概念雏形。

### 7.3 方法学贡献

不再依赖"首次使用某个高端设备"，而是**以机制问题为中心，把 operando optical mapping、surface chemistry、local potential mapping、structural/strain analysis 组合成一套可复现、可验证、可扩展的相分离诊断框架**。Tier 2/3 跨领域工具作为增强证据，而非唯一支柱。

---

## 8. 风险与备选

| 风险 | 影响 | 备选 |
|---|---|---|
| Cryo-STEM-EDS 合作不可达 | 无法获得近原子级 Br/I 分布 | AR-XPS + TOF-SIMS + HIM-SIMS（5 nm 横向） |
| Cryo-CL 合作不可达 | 无 sub-50 nm 域成像 | TEPL via SNOM；或仅依赖共聚焦 PL（200 nm）+ 形态相关 |
| NV-AFM 合作不可得 | 无绝对局域电场量化 | KPFM/SPV/TRPL 间接证据（已在 Tier 1） |
| 同位素 SIMS 不可达 | 无直接 I escape 证据 | 自然丰度 SIMS + XPS 化学态 + 气氛依赖 |
| Brillouin 合作不可得 | 无局部 stiffness | GIWAXS strain + Raman softness（已在 Tier 1） |
| Tier 2/3 全失败 | 主体仍依靠 Tier 1 | 4 维证据链（表面组成 × 电势 × 应变 × 化学态）仍可建立 |
| 样品 reproducibility 差 | 数据噪声大 | 缩小组成范围 + 加大批次 + 内部 standard 校准 |
| 机制耦合过强 | 无法单一归因 | 给出**机制边界 + 相对贡献**，不强行证明单一机制 |

**最重要的备选**：**即使所有 Tier 2/3 高风险技术全部失败**，Tier 1 主线（PL + KPFM + XPS + GIWAXS + 气氛实验）也能完成 Aim 1/2/3 的核心目标——博士工作不会崩溃。

---

## 9. 答辩 framing 段（口述模板）

> "本研究关注宽带隙混卤钙钛矿光致相分离的多因素耦合机制。**主线**用成熟的 operando PL hyperspectral + KPFM + XPS + GIWAXS 等已建立的方法学，建立可重复的**四维证据链**——相分离动力学 × 表面组成 × 局域电势 × 应变结构。
>
> 在**三个高风险位置**——亚纳米 Br/I 分布、局域电场直接成像、不可逆卤素损失——引入跨领域成熟但钙钛矿尚未充分应用的 Tier 2 工具作为强补充：**cryo-STEM-EDS 替代 APT**（避开场致离子迁移人工产物）、**cryo-CL 替代 STED**（避开高功率 depletion beam 自烧）、**¹²⁹I 同位素 SIMS** 跟踪 I escape。
>
> 同时**保留 NV-AFM 和 Brillouin 作为 Tier 3 高风险增强**，但通过弱光差分模式、同区 KPFM cross-validation、与 PL/XRD 联合 deconvolve 等控制实验严格管理它们的物理局限（NV 的 band bending 背景、Brillouin 的 n/V 耦合）。
>
> 本研究的 novelty 不在于**首次使用某个高端设备**，而在于**以可证伪假设为骨架，建立 4 维多模态证据链，给出 WBG 钙钛矿相分离的耦合机制边界**——比单一机制论文更现实，比单一技术论文更有 community 价值。
>
> **即使全部 Tier 2/3 高风险技术失败**，Tier 1 主线证据链仍能完成博士工作的核心目标。这是 3 年内可达性的保障。"

---

## 10. 引用映射

### 10.1 库内分析文件（10 篇 11-field 深读 + 3 个 batch 综合）

详见 `analysis/` 目录。所有结论指向 v3 各 Aim 的具体环节。

### 10.2 关键库外文献

| 主题 | 关键引用 |
|---|---|
| ISOS 协议标准 | Khenkin 2020 Nat. Energy 5:35 |
| Fast-KPFM CPD relaxation | Garrett 2017 ACS Appl. Mater. Interfaces 9:21955 |
| Cryo-CL 钙钛矿 LHS | Bischak 2017 Nano Lett. 17:1028 |
| Cryo-STEM-EDS perovskite | Doherty 2020 Nature 580:360 |
| ΔDFE 描述符 | Navid 2026 arxiv:2603.07829 |
| Br-rich 表面抑制 LHS | Fang Z. 2024 Nat. Commun. 15:10554 |
| 暗态相分离 | Ma 2024 arxiv:2407.04984 |
| I expulsion | Mathew 2020 ACS Energy Lett. 5:1872 |
| 钙钛矿 APT 早期 | Whiteside 2023 ACS Energy Lett. 8:2399 |
| NV electrometry SOTA | Bian 2022 npj Quantum Inf. 8:74 |
| 钙钛矿大极化子 | Miyata 2017 Sci. Adv. 3:e1701217 |

### 10.3 物理同行 review 文档（与本计划配套）

- `2026-05-11_c1_c3_method_justification.md` — C1/C3 物理论证（**保留作 v2 reference，但 v3 主线不依赖**）
- `2026-05-11_critique_response.md` — **4 个物理抨击点的回应分析**（v3 的物理修正依据）
- `phd_research_plan_rewritten_mechanism_oriented.md` — **重写版**（v3 骨架来源）

---

## 11. 三个版本一句话总结

> **v1**："7 个钙钛矿成熟方法集成" → 评委说无 novelty。
>
> **v2**："5 个跨领域技术作主攻判决 5 个争议" → 物理同行严格抨击 3/4 站不住。
>
> **v3**："Tier 1 成熟方法做主线 + Tier 2 跨领域工具（cryo-STEM-EDS / cryo-CL / 同位素 SIMS）作验证补充 + Tier 3 高风险（NV-AFM / Brillouin）作 cross-check + 4 维证据链 + 可证伪 hypothesis" → **科学严谨 + novelty 充分 + 3 年内可执行**。

---

## 12. Next steps

1. **本周内**：通读 v3 + 之前的 critique_response，确认接受这个 framing。
2. **导师讨论**：把 v3 给导师，重点确认 Tier 1 主线在 Waseda 校内的可达性，以及 Tier 2 合作的可能联系人（cryo-STEM 中心、cryo-CL 中心、同位素源）。
3. **物理同行 review 2.0**：把 v3 拿给抨击 v2 的同学再过一遍。重点看：Tier 2 的物理 mitigation 是否解释清楚；Tier 3 的控制实验是否严密。
4. **答辩 PPT 准备**：基于 § 9 的口述模板，开始构造 slide 5+（"研究方法 + Aim 1/2/3"那几张）。
