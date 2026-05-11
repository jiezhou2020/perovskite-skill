# PhD 三年研究计划 v4

## Multi-Scale Causal Diagnostics of Photoinduced Phase Segregation in Wide-Bandgap Mixed-Halide Perovskites

### 宽带隙混卤钙钛矿光致相分离的多尺度因果诊断框架

---

## 0. 本版定位

本计划的创新点不定义为“首次使用某一种表征方法”，而定义为：

> 建立一个可证伪、带有 baseline control 和误差边界的诊断框架，用于区分 Br-rich surface、表面/晶界缺陷、局域电势、应变不均匀性和卤素化学势在宽带隙混卤钙钛矿光致相分离中的相对贡献。

这个定位刻意避开两个容易被审稿人攻击的表述：

1. “某个技术可以直接拍到机制”；
2. “Br-rich surface 必然促进或必然抑制相分离”。

相反，本研究把 Br-rich surface 看作一个条件性变量：它可能是稳定化因素，也可能只是处理或老化后的结果；其作用取决于它是否同时降低缺陷态、平滑局域电势、释放局域应变，并改变表面卤素化学势边界条件。

---

## 1. 基础物理约束

本计划的物理解释遵循半导体与太阳能电池基础逻辑：

- 光吸收产生电子-空穴对；准费米能级分裂、非辐射复合和表面复合共同决定电压与发光响应。
- 缺陷态，尤其是带隙中的陷阱态，会增强 Shockley-Read-Hall 型非辐射复合，并改变 PLQY、TRPL 和局域电势响应。
- 半导体表面势不是单一物理量。KPFM 测得的是 tip-sample contact potential difference，包含 work function、surface dipole、band bending、trap charging、surface photovoltage 和离子迁移等混合贡献。
- CL 的有效空间分辨率不等于电子束光斑，而受 beam spot、generation volume 和载流子/激子扩散长度共同限制。
- Brillouin shift 同时依赖折射率和声速。在相分离样品中，Brillouin 数据更适合解释为微米尺度 effective acoustic response，而不是纳米畴局域声速。

因此，本计划中的每个表征方法都只作为证据链的一环，不作为单独机制判决。

---

## 2. 文献位置与可辩护空白

已有文献已经覆盖了许多局部机制：

- 表面钝化可以减慢 wide-bandgap perovskite 中 photoinduced halide migration，APTMS + SKPM + PL 已有报道。
- 局域 PL / SPM 研究已经显示 phase segregation 可以与 grain boundary、topography 和局域异质性相关。
- 热力学模型、polaron/strain 模型、bandgap-driven carrier funneling 模型已经解释了 I-rich / Br-rich phase 形成的驱动力。
- additive engineering、interface engineering、2D/3D transition layers 等已经广泛用于抑制 phase segregation。

本研究的空白不在单点方法，而在以下组合判断：

> 在同一批 WBG mixed-halide films 中，用同一套样品和同区/近同区诊断，把 surface composition、defect passivation、CPD response、strain/disorder 和 irreversible chemistry 分开判读，并给出 Br-rich surface 何时稳定、何时无效、何时只是老化结果的边界。

这使中心假设具备可证伪性，而不是停留在“多因素耦合”的泛泛表述。

---

## 3. 中心假设

宽带隙混卤钙钛矿的光致相分离由表面/晶界缺陷、局域电势、应变不均匀性和卤素化学势共同耦合决定。Br-rich surface 本身既不必然促进也不必然抑制相分离，其作用取决于是否同时降低缺陷态、释放局域应变并改变表面电势边界条件。

### H1: Br-rich surface 的作用是条件性的

如果 Br-rich surface 同时伴随 PLQY 提升、TRPL 寿命延长、CPD fluctuation 降低、microstrain 降低和 LHS 减弱，则支持“Br-rich surface 通过缺陷钝化、电势平滑和应变释放稳定材料”。

如果 Br-rich surface 存在但 PLQY/TRPL/KPFM/GIWAXS 不改善，且 LHS 仍强，则说明单纯 Br 富集不是稳定化充分条件。

如果没有明显 Br-rich surface 但 LHS 减弱，则说明稳定化可能来自缺陷钝化、晶界调控、应变释放或界面层作用，而非 Br 富集本身。

### H2: 局域电势异常是 LHS hotspot 的候选前驱条件，但不是唯一原因

只有当 CPD anomaly 满足以下条件时，才解释为 LHS-coupled electrostatic anomaly：

1. 超过 fluence-matched 低光强 baseline；
2. 时间上先于或同步于 PL red-shift；
3. 空间上与后续 PL hotspot 对应；
4. 暗恢复中与 PL recovery 有一致或可解释的滞后关系；
5. 与 TRPL、XPS/SIMS、GIWAXS/Raman 至少两类独立证据相互支持。

### H3: 可逆 LHS 与不可逆降解可通过化学态和物质守恒边界区分

可逆 LHS 应主要表现为 PL red-shift / recovery 和 Br/I redistribution；不可逆降解则应伴随 residual PL/absorption shift、I0/I2/Pb0/PbI2、卤素总量损失或 sealed-vs-open aging 差异。

---

## 4. 样品与变量设计

为保证三年内可执行，样品体系压缩为两个主组分和三个处理态。

### 4.1 主组分

1. **Moderate-WBG baseline:** FA/Cs Pb(I,Br)3，目标 Eg = 1.66-1.70 eV。用于建立稳定、可重复的 baseline。
2. **High-Br stress case:** FA/Cs Pb(I,Br)3，目标 Eg = 1.73-1.78 eV。用于放大 LHS 和不可逆降解信号。

### 4.2 处理态

1. pristine；
2. Br-rich 或 halide-modified surface；
3. defect-passivated but not intentionally Br-rich surface。

这个 2 x 3 设计比全因子矩阵更可控，同时能分离 composition、surface chemistry 和 defect passivation。

### 4.3 条件矩阵

第一阶段只做核心矩阵：

- 光强：0.1 sun、1 sun、5 sun；
- 温度：25 °C、50 °C、85 °C；
- 气氛：N2、dry air、vacuum；
- 恢复：dark recovery at min / h / day。

湿度、高 Br 梯度、多种添加剂和 isotope tracer 作为后续扩展，不进入博士主线必需条件。

---

## 5. Aim 1: 建立 LHS 动力学和可逆性基线

### 目标

建立可重复的 operando PL / UV-vis / XRD-Raman protocol，定义不同样品在不同 stress 条件下的 LHS 表型。

### 方法

- Operando PL hyperspectral imaging：提取 peak shift、onset time、red-shift rate、low-energy shoulder、FWHM、dark recovery ratio、residual red-shift。
- UV-vis / EQE：确认吸收边是否真实变化，避免把 trap emission 或 reabsorption 误判为低带隙相。
- PLQY / TRPL：判断非辐射复合和缺陷钝化程度。
- XRD / GIWAXS / Raman：检查 phase splitting、lattice parameter、microstrain、framework vibration 和低频 lattice softness。

### 判据

| 表型 | 观测 | 判读 |
|---|---|---|
| Type A | 快速红移 + 完全恢复 | 可逆 halide redistribution |
| Type B | 缓慢红移 + 部分恢复 | trap-assisted ion migration |
| Type C | 持续红移 + 吸收/化学态不可恢复 | irreversible redox / volatilization |
| Type D | hotspot 固定在缺陷/晶界/应变区域 | heterogeneous nucleation |

Aim 1 只建立表型和阈值，不单独宣称机制。

---

## 6. Aim 2: Br-rich surface、缺陷钝化和电势边界条件的解耦

### 目标

回答 Br-rich surface 是稳定化条件、无效伴随物，还是老化/处理后的结果。

### 主线实验

- AR-XPS：Br/I/Pb depth-weighted composition，I0/Pb0/PbI2 chemical states。
- TOF-SIMS：Br/I depth trend 和 aging-induced redistribution，作为相对趋势而非绝对定量。
- PLQY/TRPL：判断 surface treatment 是否降低非辐射复合。
- KPFM/SPV：比较 CPD fluctuation、light-on CPD shift 和 dark relaxation。
- GIWAXS/Raman：判断处理是否降低 microstrain 或结构无序。

### 判读规则

| 证据组合 | 结论 |
|---|---|
| Br-rich + PLQY/TRPL 改善 + CPD fluctuation 降低 + strain 降低 + LHS 减弱 | Br-rich 与稳定化同向，但稳定化来自复合机制 |
| Br-rich + 缺陷/CPD/strain 不改善 + LHS 仍强 | Br-rich 不是充分条件 |
| non-Br-rich passivation + LHS 减弱 | 缺陷/电势/应变比 Br-rich 更关键 |
| aging 后 Br-rich 增强 + degradation markers 出现 | Br-rich 可能是重排/降解结果 |

---

## 7. Aim 3: LHS hotspot 的局域电势与应变前驱诊断

### 目标

判断 CPD anomaly 和 strain/disorder 哪一个更接近 LHS hotspot 的前驱条件。

### Baseline-corrected PL-KPFM protocol

1. 初始 AFM/KPFM；
2. 初始 PL hyperspectral map；
3. fluence-matched low-intensity baseline CPD；
4. high-intensity LHS induction；
5. light-on / post-light PL map；
6. post-light KPFM；
7. dark recovery PL/KPFM；
8. 同区或近同区 XPS/SIMS/GIWAXS/Raman。

定义：

\[
\Delta \mathrm{CPD}_{\mathrm{excess}}
=
\Delta \mathrm{CPD}_{\mathrm{LHS}}
-
\Delta \mathrm{CPD}_{\mathrm{baseline}}
\]

但必须明确：这个量是 operational diagnostic，不是唯一物理解卷积。

### 判读

- excess CPD 先于 PL red-shift，且与 hotspot 共定位：支持局域电势参与成核。
- CPD 变化明显但无 PL red-shift：普通 SPV/trap/ion relaxation，不能归因于 LHS。
- PL hotspot 与 CPD 不相关但与 strain/disorder 相关：应变/结构无序更可能主导。
- PL/KPFM 均恢复且无化学态变化：可逆 redistribution。
- PL/KPFM 不恢复且有 I0/Pb0/PbI2：不可逆 degradation。

---

## 8. Aim 4: 可逆相分离与不可逆降解边界

### 目标

建立 light intensity-temperature-atmosphere map，确定 LHS 何时仍是可逆离子重排，何时跨入不可逆化学降解。

### 实验

- N2 / dry air / vacuum aging；
- 25 / 50 / 85 °C；
- 0.1 / 1 / 5 sun；
- sealed-vs-open aging；
- XPS/SIMS/UV-vis/PL recovery/gas trapping。

### 必要交叉验证

不能只用 XPS 说明不可逆降解，因为真空、X-ray 和束照可能改变卤化物钙钛矿。不可逆判据必须至少包含：

1. residual PL or absorption shift；
2. chemical-state marker；
3. Br/I or iodine inventory change；
4. sealed-vs-open 或 gas trapping 对照中的一项。

---

## 9. 高风险技术定位

### Cryo-CL

用途：局域发光异质性辅证。  
边界：有效分辨率需用 generation volume、beam energy 和 diffusion length 约束，不能默认 sub-50 nm domain imaging。

### Cryo-STEM-EDS

用途：空间平均后的 Br/I trend 验证。  
边界：不做单 pixel 精确定量；必须 dose-series、空间积分、泊松误差和 AR-XPS/TOF-SIMS 交叉验证。

### Brillouin microscopy

用途：微米尺度 effective acoustic heterogeneity 和 linewidth broadening。  
边界：相分离样品中不直接反演纳米畴局域声速。

### NV-AFM

用途：局域电场存在性的高风险增强证据。  
边界：不作为主线；必须 light-on/off subtraction、KPFM 交叉验证和 excitation power control。

---

## 10. 三年计划

### Year 1: 可重复样品与 LHS 表型

| 月份 | 任务 | 产出 |
|---|---|---|
| M1-M3 | 两个 WBG 组分制膜、SOP、baseline PL/UV-vis/XRD | reproducible films |
| M4-M6 | Operando PL hyperspectral protocol | LHS onset / rate / recovery metrics |
| M7-M9 | 光强-温度-气氛核心矩阵 | kinetic and threshold map |
| M10-M12 | PLQY/TRPL/XRD/Raman 交叉验证 | Aim 1 dataset |

### Year 2: 表面组成、缺陷和 CPD 解耦

| 月份 | 任务 | 产出 |
|---|---|---|
| M13-M15 | pristine / Br-rich / passivated 样品库 | controlled sample matrix |
| M16-M18 | AR-XPS + TOF-SIMS + PLQY/TRPL | surface-defect-composition dataset |
| M19-M21 | Baseline-corrected PL-KPFM | CPD diagnostic dataset |
| M22-M24 | GIWAXS/Raman + 证据链整合 | Manuscript 1 |

### Year 3: 边界图与方法学辅证

| 月份 | 任务 | 产出 |
|---|---|---|
| M25-M27 | 可逆/不可逆 aging map | boundary map |
| M28-M30 | XPS/SIMS/gas trapping/sealed-vs-open | degradation evidence |
| M31-M33 | Cryo-CL / Cryo-STEM-EDS / Brillouin / NV-AFM 可行性合作 | optional validation |
| M34-M36 | 论文整合与博士论文 | Manuscript 2 + thesis |

---

## 11. 预期论文

### Paper 1

**Conditional role of Br-rich surfaces in stabilizing wide-bandgap mixed-halide perovskites**

核心：证明或否证 Br-rich surface 是否只有在缺陷、电势和应变同时改善时才表现为稳定化因素。

### Paper 2

**A baseline-corrected diagnostic framework for reversible and irreversible phase segregation in wide-bandgap perovskites**

核心：建立 operando PL + KPFM + GIWAXS/Raman + XPS/SIMS 的边界判据，区分 reversible redistribution 和 irreversible degradation。

### Optional methods paper

低剂量 cryo-EDS、effective CL resolution 或 Brillouin linewidth 作为方法学短文，不作为博士完成必要条件。

---

## 12. 答辩用核心表述

本研究的中心不是证明某个单一机制绝对正确，而是检验一个条件性耦合假设：Br-rich surface 只有在同时改变缺陷态、局域电势、应变和卤素化学势边界时，才可能表现为稳定化因素。已有文献分别报道了表面钝化、局域相分离、KPFM 响应和应变效应；本研究的贡献是把这些变量放在同一受控样品矩阵和同一套 baseline-corrected 证据链中，给出各机制的适用边界和相对贡献。

---

## 13. 主要风险与防守策略

| 攻击点 | 防守策略 |
|---|---|
| “这些方法都有人做过” | 承认方法已有，强调创新在条件性耦合假设和变量解耦 |
| “KPFM 不能证明局域电场导致 LHS” | 明确 CPD 是混合量，只作为 baseline-corrected diagnostic |
| “Br-rich surface 可能只是结果” | 将 aging-induced Br/I profile change 作为核心判据，而不是漏洞 |
| “矩阵太大” | 主线压缩为 2 组分 x 3 处理态 x 核心 stress 条件 |
| “XPS/SIMS 会损伤样品” | 加入 sealed/open、gas trapping、dose/beam control 和多模态交叉验证 |
| “高端技术不可靠” | Tier 2/3 全部 optional，博士主线由 Tier 1 支撑 |

