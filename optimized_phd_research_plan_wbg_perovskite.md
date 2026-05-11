# PhD 三年研究计划 · 优化版

## Multi-scale Mechanistic Characterization of Photoinduced Phase Segregation in Wide-Bandgap Mixed-Halide Perovskites

### 宽带隙混卤钙钛矿光致相分离的多尺度机制表征研究

---

## 0. 本版定位

本研究计划不再以“首次使用某个高端表征技术”为核心卖点，而是以**可证伪假设、误差边界和多尺度证据链**为核心。

宽带隙混卤钙钛矿中的光致相分离（Light-induced Halide Segregation, LHS）并不是单一因素导致的现象，而是由以下因素耦合产生：

1. 表面/晶界缺陷与非辐射复合中心；
2. 光生载流子、陷阱电荷与局域电势重排；
3. 卤素离子迁移与化学势梯度；
4. 晶格应变、局域软化与极化子效应；
5. 气氛、温度和光照强度决定的可逆/不可逆边界。

因此，本计划的基本立场是：

> 本研究不试图用单一高空间分辨技术直接“拍到”相分离机制，而是建立一套具有物理误差边界的多尺度证据链，用于判断不同条件下各机制的相对贡献与适用边界。

---

## 1. 研究背景与科学问题

### 1.1 背景

宽带隙混卤钙钛矿，如 FA/Cs-Pb(I,Br)₃，是钙钛矿/硅叠层太阳能电池中的关键顶电池材料。为了获得约 1.65–1.75 eV 的合适带隙，需要提高 Br 含量。然而，高 Br 含量通常伴随更严重的光致相分离：在持续光照下，原本均匀的 mixed-halide phase 会形成富碘低带隙区域，表现为 PL 红移、吸收边变化、开路电压损失和长期稳定性下降。

现有研究已经提出多种可能机制，包括：

- 卤素离子迁移；
- 极化子诱导的局域晶格畸变；
- 陷阱电荷诱导的局域电场；
- 晶界/表面缺陷诱导的成核；
- 应变不均匀性；
- 表面 Br-rich 组成对稳定性的促进或抑制作用；
- 不可逆 I₂ 挥发、Pb⁰ 形成等化学降解过程。

然而，这些机制往往在同一材料中同时存在，导致单一表征手段很难给出明确结论。

### 1.2 核心科学问题

本研究聚焦三个可证伪问题：

#### Q1：Br-rich surface 是稳定化条件，还是相分离/老化后的结果？

已有理论和实验对 Br-rich surface 的作用存在分歧。一方面，某些 DFT 结果暗示表面 Br 富集可能改变局部卤素化学势并促进相分离；另一方面，实验中也有 Br-rich surface 抑制 LHS 的报道。

本研究不直接问“Br-rich surface 一定促进还是抑制相分离”，而是进一步追问：

> Br-rich surface 是否只有在同时降低缺陷态、平滑局域电势、释放表面应变时，才表现为稳定化作用？

#### Q2：局域电势异常是否是相分离 hotspot 的优先成核条件之一？

宽带隙混卤钙钛矿是典型的 mixed ionic-electronic conductor。光照下的局域电势变化可能来自：

- 光生载流子的快速分离与表面光电压；
- 陷阱电荷填充；
- 离子迁移导致的慢速电势重排；
- 相分离造成的局域带隙和能带弯曲变化。

因此，本研究的重点不是简单证明“CPD 变化 = 相分离”，而是建立一个 baseline-subtraction protocol，用于区分普通光照诱导的 SPV/ion migration 背景与真正和 LHS 耦合的电势异常。

#### Q3：可逆相分离与不可逆降解的边界由什么决定？

光致相分离可以是可逆的 halide redistribution，也可以跨入不可逆化学降解，如 I₂ 挥发、I⁰/Pb⁰ 形成、PbI₂ 析出等。本研究希望回答：

> 在什么光强、温度、气氛、组成和缺陷条件下，LHS 仍是可逆过程？在什么条件下，它转化为不可逆化学降解？

---

## 2. 中心假设

本研究的中心假设为：

> 宽带隙混卤钙钛矿的光致相分离由表面/晶界缺陷、局域电势、应变不均匀性和卤素化学势共同耦合决定。Br-rich surface 本身既不必然促进也不必然抑制相分离，其作用取决于是否同时降低缺陷态、释放局域应变并改变表面电势边界条件。

由此提出三个可检验子假设：

### H1：Br-rich surface 的稳定化作用依赖于缺陷降低

如果 Br-rich surface 同时伴随 PLQY 提升、TRPL 寿命延长、CPD fluctuation 降低和 LHS 减弱，则支持“Br-rich surface 通过缺陷钝化和电势平滑化稳定材料”的机制。

如果存在 Br-rich surface，但 PLQY/TRPL/KPFM 未显示缺陷降低或电势平滑，同时 LHS 仍然严重，则说明单纯 Br 富集不是稳定化的充分条件。

### H2：局域电势异常是 LHS hotspot 的优先成核条件之一，但不是唯一原因

只有当 CPD anomaly 满足以下条件时，才可被解释为与 LHS 耦合：

1. 超过低光强 baseline 的 ordinary SPV/ionic relaxation；
2. 在时间上先于或同步于 PL red-shift 出现；
3. 在空间上与 PL red-shift hotspot 相关；
4. 在暗恢复过程中与 PL 恢复具有一致性或可解释的滞后关系；
5. 与 TRPL、XPS/SIMS、GIWAXS/Raman 等结果相互支持。

### H3：不可逆 LHS 与卤素化学态变化和挥发损失相关

如果老化后出现不可恢复的 PL/UV-vis 变化，并且伴随 I⁰、I₂、Pb⁰、PbI₂ 或卤素总量损失，则支持不可逆 redox/volatile loss 机制，而非单纯可逆 ion redistribution。

---

## 3. 总体研究策略

本研究采用三层证据体系：

| 层级 | 定位 | 方法 | 作用 |
|---|---|---|---|
| Tier 1 | 主线，必须完成 | Operando PL、KPFM、AR-XPS、TOF-SIMS、GIWAXS/XRD、Raman、UV-vis、TRPL、PLQY、气氛切换老化 | 建立博士工作的核心证据链 |
| Tier 2 | 验证型补充 | Cryo-CL、Cryo-STEM-EDS、HIM-SIMS 或改良 SIMS | 在明确物理限制下验证纳米尺度趋势 |
| Tier 3 | 高风险增强 | NV-AFM、Brillouin microscopy、同位素 SIMS | 作为合作条件允许时的增强证据，不作为博士完成的必要条件 |

核心原则：

> Tier 2/3 不作为单独判决证据，只能在其物理分辨率、剂量损伤、统计误差和有效介质限制被明确评估后，作为多模态证据链的一部分使用。

---

## 4. 样品体系与变量设计

### 4.1 样品体系

为保证三年内可执行，本研究只选择 2–3 个代表性体系：

1. **Baseline WBG perovskite**  
   FA₀.₈₃Cs₀.₁₇Pb(I₀.₈₃Br₀.₁₇)₃，目标带隙约 1.66 eV。

2. **Surface-treated sample**  
   通过表面处理构建 Br-rich 或 halide-modified surface，用于比较表面组成与 LHS 稳定性的关系。

3. **Defect-passivated sample**  
   采用有机铵盐、Lewis base 或其他缺陷钝化策略，构建缺陷密度降低但表面 Br/I 变化可能较小的对照样品。

### 4.2 控制变量

| 变量 | 范围 | 目的 |
|---|---|---|
| 光强 | 0.01 / 0.1 / 1 / 5 sun | 区分普通 SPV/ion migration 与 LHS threshold |
| 温度 | 25 / 50 / 85 °C | 提取离子迁移与不可逆降解的激活趋势 |
| 气氛 | N₂ / air / vacuum | 区分可逆迁移、氧水参与降解、I₂ escape |
| Br/I 比 | 低 / 中 / 高 | 判断带隙与相分离倾向 |
| 暗恢复时间 | min–h–day | 判断 reversible / irreversible 边界 |
| 表面处理 | pristine / Br-rich / passivated | 分离表面组成与缺陷钝化作用 |

---

## 5. Aim 1：建立 operando LHS 动力学评价体系

### 5.1 目标

建立一个可重复、可比较、可量化的 LHS 动力学 protocol，为后续机制分析提供基准。

### 5.2 方法

#### 5.2.1 Operando PL hyperspectral imaging

在不同光强、温度和气氛下，对同一区域进行时间分辨 PL hyperspectral mapping，提取以下参数：

- PL peak position；
- red-shift onset time；
- red-shift rate；
- PL intensity；
- FWHM；
- low-energy shoulder intensity；
- dark recovery ratio；
- residual red-shift after recovery。

#### 5.2.2 UV-vis / EQE / PLQY / TRPL

用于判断：

- 吸收边是否永久变化；
- PLQY 是否提升或下降；
- 非辐射复合是否变化；
- red-shift 是否对应真实低带隙相形成，而非单纯 PL reabsorption 或陷阱发光。

#### 5.2.3 XRD / GIWAXS / Raman

用于判断：

- 是否出现相分裂；
- lattice parameter 是否发生可逆/不可逆变化；
- peak broadening 是否反映 microstrain；
- 低频 Raman 是否显示 lattice softness 或局域结构无序变化。

### 5.3 输出：LHS 表型分类

| 类型 | 表现 | 可能机制 |
|---|---|---|
| Type A | 快速红移 + 完全暗恢复 | 可逆 halide redistribution |
| Type B | 缓慢红移 + 部分恢复 | trap-assisted ion migration |
| Type C | 持续红移 + 不可恢复吸收/化学态变化 | redox / I₂ escape / Pb⁰ formation |
| Type D | 局部热点固定在晶界或缺陷处 | defect / strain / grain boundary pinning |

Aim 1 不直接宣称机制，而是建立后续 Aim 2/3 的动力学和空间图谱基线。

---

## 6. Aim 2：表面组成、缺陷与 Br-rich 稳定化机制

### 6.1 目标

判断 Br-rich surface 是否通过缺陷钝化、电势平滑化和应变释放来影响 LHS 稳定性。

### 6.2 Tier 1 主线方法

#### 6.2.1 AR-XPS

AR-XPS 用于分析不同取样深度下的 Br/I/Pb 比例与化学态变化，包括：

- I 3d；
- Br 3d；
- Pb 4f；
- N/C 相关有机组分信号；
- I⁰、Pb⁰、PbI₂ 等可能降解产物。

需要明确的是：AR-XPS 给出的是数 nm 范围内的深度加权平均，不能单独证明亚 nm 尖锐界面组成。

#### 6.2.2 TOF-SIMS depth profile

TOF-SIMS 用于获得 Br/I 深度趋势和老化前后的相对变化。由于 sputtering 可能引入 preferential sputtering、ion mixing 或有机组分损伤，因此 SIMS 结果只作为相对趋势，而不单独作为绝对深度定量。

#### 6.2.3 PLQY / TRPL

用于判断表面处理是否真正降低非辐射复合：

- 若 Br-rich surface + PLQY 提升 + TRPL 寿命延长，则支持缺陷钝化；
- 若 Br-rich surface 存在但 PLQY/TRPL 不变，则说明 Br 富集本身不是稳定化充分条件。

#### 6.2.4 KPFM / SPV mapping

比较 pristine、Br-rich treated、defect-passivated 样品的 CPD fluctuation 和 SPV response。

需要明确：KPFM 测量的是 CPD，不是局域电场本身；其结果必须与 PL、TRPL、XPS/SIMS 等共同解释。

### 6.3 Tier 2 验证：Cryo-STEM-EDS / HIM-SIMS

#### 6.3.1 物理边界

Cryo-STEM-EDS 可作为表面 Br/I 分布趋势的高分辨验证手段，但不能被表述为“无条件亚 nm 精确定量”。其限制包括：

1. 卤化物钙钛矿在电子束下存在 radiolysis、knock-on、halide desorption 和 Pb reduction 风险；
2. 冷冻可以减缓热扩散和部分化学反应，但不能消除辐射分解；
3. EDS X-ray yield 低，低剂量下单 pixel counts 可能不足以支持精确定量；
4. Br/I ratio 的误差受泊松统计限制。

EDS 比值误差估算：

\[
\delta\left(\frac{I_{\mathrm{Br}}}{I_{\mathrm{I}}}\right)
\approx
\frac{I_{\mathrm{Br}}}{I_{\mathrm{I}}}
\sqrt{
\frac{1}{N_{\mathrm{Br}}}+
\frac{1}{N_{\mathrm{I}}}
}
\]

若 Br 和 I 特征峰 counts 过低，则不对单一 pixel 作精确定量。

#### 6.3.2 修正后的实验策略

- 做 dose-series，监测 Br/I ratio 是否随剂量系统漂移；
- 采用 cryo-stage，但同时承认 cryo 不能完全避免 radiolysis；
- 沿平行表面方向积分几十纳米，以提高 EDS counts；
- 使用多个晶粒、多个区域、多个 batch 统计；
- 只有当 surface/bulk 差异显著大于泊松误差，并与 AR-XPS/TOF-SIMS 趋势一致时，才解释为真实表面组成差异。

#### 6.3.3 备选方案

如果 Cryo-STEM-EDS 无法提供可靠 SNR，则使用：

- HIM-SIMS；
- 优化 TOF-SIMS；
- AR-XPS angle dependence；
- 表面选择性化学处理 + PL/TRPL/KPFM 间接验证。

### 6.4 判读规则

| 证据组合 | 结论 |
|---|---|
| Br-rich + PLQY 提升 + TRPL 延长 + CPD fluctuation 降低 + LHS 减弱 | 支持 H1：Br-rich 通过缺陷降低和电势平滑化稳定材料 |
| Br-rich 存在，但 PLQY/TRPL/KPFM 不改善，LHS 仍强 | 单纯 Br 富集不是稳定化充分条件 |
| 无明显 Br-rich，但 LHS 减弱 | 稳定化可能来自缺陷钝化、应变释放或晶界调控 |
| 老化后 Br/I profile 显著变化 | 表面组成是动态结果，静态 DFT 解释不足 |

---

## 7. Aim 3：局域电势、应变与 LHS hotspot 的耦合

### 7.1 目标

建立 PL-KPFM-GIWAXS/Raman 的同区关联方法，判断局域电势异常和应变/结构无序是否参与 LHS hotspot 成核。

### 7.2 KPFM 的物理边界

KPFM 测量的是 tip-sample contact potential difference：

\[
\mathrm{CPD}=\frac{\Phi_{\mathrm{tip}}-\Phi_{\mathrm{sample}}}{e}
\]

在混卤钙钛矿中，CPD 变化可能来自：

- surface photovoltage；
- carrier trapping / detrapping；
- ion migration；
- surface dipole change；
- local band bending；
- phase segregation induced bandgap/composition change。

因此，本研究不会把 KPFM 结果直接解释为局域电场，也不会仅凭空间共定位证明因果关系。

### 7.3 Baseline-subtraction protocol

为了区分普通光照响应和 LHS-coupled CPD anomaly，本研究采用光强阈值对照。

#### Step 1：低于 LHS 阈值的 baseline CPD

在不诱发明显 PL red-shift 的低光强下测量：

\[
\Delta \mathrm{CPD}_{\mathrm{baseline}}(x,y,t)
\]

该项代表普通 SPV、trap filling 和 background ion relaxation。

#### Step 2：诱发 LHS 的 CPD

在诱发明显 PL red-shift 的光强下测量：

\[
\Delta \mathrm{CPD}_{\mathrm{LHS}}(x,y,t)
\]

#### Step 3：提取 excess CPD

定义：

\[
\Delta \mathrm{CPD}_{\mathrm{excess}}(x,y,t)
=
\Delta \mathrm{CPD}_{\mathrm{LHS}}(x,y,t)
-
\Delta \mathrm{CPD}_{\mathrm{baseline}}(x,y,t)
\]

只有 excess CPD 与 PL red-shift 在时间、空间和恢复行为上相互对应时，才解释为 LHS-coupled electrostatic anomaly。

### 7.4 同区 PL-KPFM 实验设计

使用 fiducial markers 标记样品区域，进行 sequential mapping：

1. 初始 AFM/KPFM；
2. 初始 PL hyperspectral map；
3. 低光强 baseline CPD 测量；
4. 高光强 LHS induction；
5. 光照中/后 PL map；
6. 光照后 KPFM；
7. 暗恢复 PL/KPFM；
8. 最终 XPS/SIMS/GIWAXS/Raman 分析。

### 7.5 应变与结构无序分析

#### 7.5.1 GIWAXS / XRD

提取：

- peak position；
- peak splitting；
- FWHM；
- microstrain；
- lattice parameter evolution。

#### 7.5.2 Raman / low-frequency Raman

分析 Pb-I / Pb-Br framework vibration、lattice softness 和局域结构无序。

### 7.6 判读规则

| 现象 | 解释 |
|---|---|
| excess CPD 先于 PL red-shift 出现，并定位于后续 hotspot | 支持局域电势异常参与 LHS 成核 |
| CPD 在低光强已明显变化，但无 PL red-shift | 普通 SPV/ion migration，不可直接归因于 LHS |
| PL hotspot 与 CPD 不相关，但与 GIWAXS/Raman strain/disorder 相关 | 应变或结构无序可能主导 |
| PL/KPFM 均恢复，无化学态变化 | 可逆 halide redistribution |
| PL/KPFM 不恢复，且 XPS/SIMS 出现 I⁰/Pb⁰/PbI₂ | 不可逆化学降解 |

---

## 8. Aim 4：可逆相分离与不可逆降解边界

### 8.1 目标

通过气氛、温度和光强控制，判断 LHS 从可逆 ion redistribution 转化为不可逆 chemical degradation 的边界。

### 8.2 实验设计

#### 8.2.1 气氛切换老化

比较以下条件：

- N₂；
- dry air；
- humid air；
- vacuum。

重点判断：

- vacuum 下是否更容易发生不可逆 I loss；
- air/humidity 是否促进 I⁰、Pb⁰ 或 PbI₂ 形成；
- N₂ 中是否主要表现为可逆 redistribution。

#### 8.2.2 光强与温度矩阵

建立 light intensity–temperature stability map：

| 温度 | 低光强 | 1 sun | 高光强 |
|---|---|---|---|
| 25 °C | baseline | standard LHS | accelerated LHS |
| 50 °C | ion migration enhanced | mixed regime | degradation onset |
| 85 °C | thermal stress | accelerated degradation | irreversible failure |

#### 8.2.3 化学态追踪

使用 XPS/SIMS/UV-vis/PL recovery 判断：

- I⁰；
- Pb⁰；
- PbI₂；
- Br/I profile shift；
- absorption edge permanent shift；
- PL red-shift residual。

### 8.3 高风险增强：同位素 SIMS

同位素 SIMS 只作为高风险增强，不作为博士完成必要条件。

若合作条件和安全许可允许，可考虑使用 ¹²⁹I 或其他可区分 isotope tracer 追踪 iodine inventory。若存在采购、安全、废液或设备限制，则采用非放射性替代方案：

- natural abundance SIMS；
- gas trapping + chemical detection；
- XPS chemical-state tracking；
- sealed vs open aging comparison。

---

## 9. Tier 2/3 高风险技术的修正定位

### 9.1 Cryo-CL：条件性纳米发光探针

#### 原始风险

不能把 CL 空间分辨率简单等同于 SEM beam spot size。实际 CL 分辨率至少受以下因素控制：

\[
\Delta x_{\mathrm{CL}}
\sim
\sqrt{
 d_{\mathrm{beam}}^2
 + R_{\mathrm{gen}}^2
 + L_{\mathrm{diff}}^2
}
\]

其中：

- \(d_{\mathrm{beam}}\)：电子束光斑；
- \(R_{\mathrm{gen}}\)：电子束作用体积；
- \(L_{\mathrm{diff}}\)：载流子/激子/极化子在复合前的有效迁移长度。

#### 修正策略

Cryo-CL 不用于无条件宣称 “20 nm I-rich domain imaging”。本研究将：

1. 使用不同加速电压估算/模拟 generation volume；
2. 通过剂量依赖测试排除束诱导相分离；
3. 若可行，使用 TR-CL 或寿命估算获得 effective diffusion length；
4. 将 Cryo-CL 结果解释为“局域发光异质性”，只有在有效分辨率被证明足够小的情况下，才讨论 sub-50 nm domain。

#### 安全表述

> Cryo-CL will be used as a conditional nanoscale luminescence probe. Its effective spatial resolution will be experimentally bounded rather than assumed from the SEM beam diameter.

### 9.2 Cryo-STEM-EDS：空间平均后的半定量组成验证

#### 原始风险

低剂量下 EDS counts 可能不足，单 pixel Br/I ratio 误差极大。提高剂量又可能诱导 radiolysis、halide loss 或 beam-induced segregation。

#### 修正策略

1. 不做单 pixel 精确定量；
2. 沿表面方向积分几十纳米；
3. 做 dose-series 校正；
4. 用泊松误差判断 Br/I ratio 是否有统计意义；
5. 只将其作为 AR-XPS/TOF-SIMS 的交叉验证。

#### 安全表述

> Cryo-STEM-EDS will be interpreted as a low-dose, spatially averaged, semi-quantitative validation of Br/I trends, not as an atomically precise concentration measurement.

### 9.3 Brillouin microscopy：微米尺度 effective acoustic response

#### 原始风险

Brillouin shift：

\[
\Delta \nu = \frac{2nV}{\lambda}
\]

同时依赖 refractive index \(n\) 和 acoustic velocity \(V\)。在相分离样品中，Brillouin 光斑内包含多个 nanoscale domains，因此测得的是 effective medium response。

不能使用 PL peak 简单反推探测波长处的 \(n\)，再进一步反推局域 \(V\)。

#### 修正策略

1. 不声称对 nanoscale domains 做局域声速反演；
2. Brillouin shift 只解释为微米尺度 effective \(nV\)；
3. 只有在均匀 reference films 中，结合 ellipsometry 测得的 \(n\)，才尝试反推 \(V\)；
4. 相分离样品中重点分析 linewidth broadening，作为 acoustic damping/disorder 的指标。

#### 安全表述

> Brillouin microscopy will be used to probe micron-scale effective acoustic heterogeneity. In phase-segregated films, linewidth broadening rather than local velocity extraction will be the primary observable.

### 9.4 NV-AFM：高风险电场辅证

NV-AFM 可作为局域电场存在性的增强证据，但不作为主线。主要风险包括：

- 表面 band bending 背景；
- Debye screening；
- NV 激发光诱导额外相分离；
- 测量环境与钙钛矿稳定性不匹配。

若使用，必须采用：

1. 弱光差分；
2. 与 KPFM 同区交叉验证；
3. excitation power control；
4. light-on/light-off subtraction；
5. 不将 NV 数据单独作为机制判决。

---

## 10. 三年计划

### Year 1：建立 Tier 1 主线与 LHS 动力学表型

| 月份 | 任务 | 产出 |
|---|---|---|
| M1–3 | 样品制备与 baseline 重现 | 稳定制膜 SOP、初步 PL/UV-vis/XRD |
| M4–6 | Operando PL hyperspectral setup | 光强/时间 PL red-shift 数据 |
| M7–9 | 光强、温度、气氛矩阵扫描 | LHS kinetic map |
| M10–12 | PLQY/TRPL/XRD/Raman 交叉验证 | Aim 1 数据集、会议摘要 |

### Year 2：表面组成、缺陷与局域电势主线

| 月份 | 任务 | 产出 |
|---|---|---|
| M13–15 | Br-rich / passivated / pristine 对照样品 | 样品库与稳定性对比 |
| M16–18 | AR-XPS + TOF-SIMS depth trend | 表面组成与化学态数据 |
| M19–21 | PL-KPFM baseline-subtraction protocol | CPD baseline 与 excess CPD map |
| M22–24 | GIWAXS/Raman + Aim 2 整合 | Manuscript 1 draft |

### Year 3：可逆/不可逆边界与高风险验证

| 月份 | 任务 | 产出 |
|---|---|---|
| M25–27 | 气氛/温度/光强老化矩阵 | Reversible/irreversible boundary map |
| M28–30 | XPS/SIMS 化学态追踪 | I⁰/Pb⁰/PbI₂ 与 LHS 关联 |
| M31–33 | Cryo-CL / Cryo-STEM-EDS / Brillouin / NV-AFM 可行性合作 | optional validation dataset |
| M34–36 | 论文整合与博士论文写作 | Manuscript 2 + PhD thesis |

需要强调：Year 3 的高风险技术是 optional validation，不是博士完成的必要条件。

---

## 11. 预期成果

### 11.1 论文 1

**Surface composition, defect passivation and electrostatic smoothing in wide-bandgap mixed-halide perovskites**

核心内容：

- Br-rich surface 是否伴随缺陷降低；
- PLQY/TRPL/KPFM/XPS/SIMS 的多模态证据；
- H1 的支持或否证。

### 11.2 论文 2

**A baseline-corrected multi-scale framework for photoinduced phase segregation in wide-bandgap perovskites**

核心内容：

- Operando PL 定义 LHS 表型；
- KPFM baseline subtraction 区分普通 SPV/ion migration 与 LHS-coupled CPD；
- GIWAXS/Raman/XPS/SIMS 判断应变和不可逆化学变化；
- 建立 reversible–irreversible boundary map。

### 11.3 可选短文或补充论文

如果 Cryo-CL、Cryo-STEM-EDS、Brillouin 或 NV-AFM 成功，可形成方法学短文：

- low-dose cryo-EDS limits in mixed-halide perovskites；
- effective CL resolution in WBG perovskites；
- Brillouin linewidth as a disorder marker in LHS films。

---

## 12. 风险与备选方案

| 风险 | 影响 | 修正/备选 |
|---|---|---|
| Cryo-CL 实际分辨率受 diffusion length 限制 | 无法证明 sub-50 nm domain | 改为局域发光异质性证据；使用 PL/KPFM/GIWAXS 主线 |
| Cryo-STEM-EDS 低剂量 SNR 不足 | 无法精确定量 Br/I | 空间积分 + 泊松误差；改用 AR-XPS/TOF-SIMS/HIM-SIMS 趋势验证 |
| KPFM 信号混合 SPV、trap、ion migration | CPD 难以直接归因 | 低光强 baseline subtraction + PL threshold 对比 |
| Brillouin 无法解耦 n 和 V | 无法局域声速定量 | 只分析 linewidth 和 effective acoustic response |
| 同位素 SIMS 不可达 | 无法直接追踪 I loss | 使用 XPS/SIMS/gas trapping/sealed-vs-open aging |
| Tier 2/3 合作失败 | 高端验证不足 | Tier 1 仍可完成博士主线 |
| 样品重复性差 | 数据噪声大 | 缩小组分范围、增加 batch、建立 internal standard |

---

## 13. 答辩用核心表述

> 本研究关注宽带隙混卤钙钛矿光致相分离的多因素耦合机制。不同于单纯依赖高端表征技术，本研究以 operando PL hyperspectral imaging 为动力学主线，以 KPFM baseline subtraction、AR-XPS/TOF-SIMS、GIWAXS/Raman 和气氛切换老化构建四维证据链。
>
> 本研究明确承认各表征手段的物理边界：Cryo-CL 的有效分辨率不等于 SEM 光斑，而受 generation volume 和 diffusion length 限制；Cryo-STEM-EDS 在低剂量下受 SNR 和泊松误差限制，不能做单 pixel 精确定量；Brillouin microscopy 在相分离样品中测得的是微米尺度 effective medium response，不能直接反演纳米畴局域声速；KPFM 测量 CPD，不是局域电场本身。
>
> 因此，本研究的 novelty 不在于声称某个技术可以单独判决机制，而在于建立一个带有误差边界、baseline control 和 cross-validation 的多尺度诊断框架，用于给出 WBG perovskite 光致相分离的机制边界和相对贡献。

---

## 14. 本版相对于原 v3 的关键修正

1. 删除 “Cryo-CL 分辨率由 SEM 光斑决定” 的错误表述；
2. 引入 CL 有效分辨率公式：beam spot、generation volume、diffusion length 三者共同决定；
3. 将 Cryo-CL 从 “sub-50 nm I-rich domain imaging” 降级为 “conditional nanoscale luminescence probe”；
4. 删除 Cryo-STEM-EDS 单 pixel 精确定量的暗示；
5. 增加 EDS 泊松误差公式和空间积分策略；
6. 将 Brillouin 从 “n/V deconvolution” 改为 “effective acoustic response + linewidth disorder marker”；
7. 将 KPFM 从 correlation analysis 升级为 baseline-subtraction protocol；
8. 将同位素 SIMS 降级为高风险增强，而不是必要主线；
9. 把三年计划中的 Tier 2/3 deliverable 改成 optional validation；
10. 强化 “Tier 1 足以支撑博士工作” 的逻辑。

---

## 15. 一句话总结

> 本计划的核心不是证明某一个机制绝对正确，而是在明确各表征方法物理边界的前提下，建立一套可重复、可证伪、可交叉验证的多尺度证据链，用于判断宽带隙混卤钙钛矿光致相分离在不同条件下的机制边界。
