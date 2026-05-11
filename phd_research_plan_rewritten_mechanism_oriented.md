# PhD 三年研究计划（重写版）
## Mechanism-Oriented Characterization of Photoinduced Phase Segregation in Wide-Bandgap Mixed-Halide Perovskites  
### 宽带隙混卤钙钛矿光致相分离的机制导向表征研究

---

## 0. 重写原则

本版本不再把研究计划写成“高端表征技术清单”，而是收敛为一个可执行的博士课题：

> **核心问题：宽带隙混卤钙钛矿中的光致相分离，究竟由表面卤素组成、局域缺陷电场、应变/弹性不均匀性以及不可逆卤素损失中的哪些因素主导？这些因素之间如何耦合，并如何被稳定化策略有效抑制？**

原 v2 计划的优点是：抓住了 field 内真实存在的争议，并提出了 APT、NV-AFM、STED、同位素 SIMS、Brillouin 等跨领域技术作为潜在突破口。  
但原计划最大的问题是：技术数量过多，风险过高，且部分表述把“理论上可测”写成了“必然能判决机制”。本重写版保留其 novelty 思路，但做三点调整：

1. **研究问题收敛**：从五个争议压缩为三个相互关联的科学目标。
2. **表征逻辑收敛**：以成熟可获得的 operando / quasi-operando 表征为主线，高风险技术只作为验证型或合作型补充。
3. **物理推断收敛**：不再声称单一表征可以“直接判决机制”，而是通过多观测量交叉约束建立机制边界。

---

## 1. 研究背景与科学意义

宽带隙混卤钙钛矿（通常为 Br/I mixed-halide perovskites）是全钙钛矿叠层太阳能电池和钙钛矿/硅叠层太阳能电池中的关键顶电池材料。其带隙可通过 Br/I 比例调节至约 1.65–1.80 eV，理论上适合与窄带隙底电池匹配。

然而，混卤钙钛矿在光照下容易发生 photoinduced phase segregation：材料由均匀混卤相逐渐演化出 I-rich 低带隙区域和 Br-rich 高带隙区域。该过程会导致：

- PL 红移；
- 开路电压损失；
- 光谱响应不稳定；
- 器件效率衰减；
- 长期运行可靠性下降。

尽管该现象已经被广泛报道，但其主导机制仍未完全统一。现有模型包括：

1. **卤素离子迁移与组成涨落模型**；
2. **polaron-induced strain 模型**；
3. **trap-charge local electric field 模型**；
4. **iodide oxidation / I₂ escape redox 模型**；
5. **grain boundary / surface / strain pinning 模型**。

这些机制并不一定互斥。真实体系中，相分离很可能是局域缺陷、电场、应变、表面组成与环境共同耦合的结果。因此，本研究不以“证明某一个机制绝对正确”为目标，而是建立一套可以定量分辨各因素贡献边界的实验框架。

---

## 2. 核心科学问题

本研究聚焦三个可以实验回答的问题。

### Q1. Br-rich surface 到底是相分离的驱动力，还是稳定化结果？

部分理论计算指出 Br 可能偏好表面位点，并认为表面 Br 富集会增强相分离倾向；但部分实验工作显示，通过表面处理形成 Br-rich surface 反而可以抑制相分离。两者看似矛盾。

本研究认为，该矛盾的关键不在于简单判断“Br-rich surface 好或坏”，而在于：

- Br-rich 是否存在于真正的亚纳米表面层？
- Br-rich 是否伴随缺陷密度下降、表面应力释放或界面电场屏蔽？
- 表面 Br 富集是热力学稳定态，还是加工/老化过程中的人工结果？
- 表面组成与体相相分离之间是否存在因果关系？

### Q2. 局域电场、陷阱电荷和相分离区域之间是否存在可验证的空间相关性？

trap-charge field 模型认为，缺陷俘获电荷后会产生局域电场，进而驱动卤素离子迁移和相分离。但传统 KPFM 测量的是 contact potential difference，TRPL 测量的是载流子复合行为，二者都不是局域电场的直接观测。

本研究不预设 NV-AFM 一定能直接解决问题，而是先用更成熟的 KPFM / surface photovoltage / PL hyperspectral imaging 建立空间相关性，再在条件允许时引入 NV-center scanning probe 作为验证型工具。

核心要回答：

- PL red-shift 区域是否与 CPD / SPV 异常区域共定位？
- 光照开启和关闭后，电势响应与 PL 红移的时间尺度是否一致？
- 如果存在局域电场热点，它更像 trap filling 的可逆响应，还是 redox / ion migration 的不可逆残留？
- 表面电势变化是否足以解释相分离动力学，还是仅为伴随结果？

### Q3. 相分离的可逆/不可逆边界由什么决定？

许多相分离实验显示暗态恢复，但在强光、长时间、空气/真空等不同环境下也会出现不可逆损伤。可逆相分离和不可逆降解之间的边界尚不清晰。

本研究将重点区分：

- reversible halide redistribution；
- irreversible iodide oxidation / I₂ escape；
- defect-assisted halide migration；
- strain relaxation 或 grain boundary pinning。

最终希望建立一个判断标准：在什么光强、温度、气氛、Br/I 比例、缺陷水平下，相分离仍是可逆的；在什么条件下会跨入不可逆降解。

---

## 3. 中心假设

本研究提出以下工作假设：

> **宽带隙混卤钙钛矿的光致相分离不是由单一因素决定，而是由表面/晶界缺陷、局域电场、应变不均匀性和卤素化学势共同耦合导致。Br-rich surface 本身并不必然促进或抑制相分离，其作用取决于它是否同时降低缺陷态、释放应变并改变局域电场边界条件。**

由此可推导出三个可检验假设：

### H1. 表面 Br 富集只有在缺陷密度同步降低时才表现为稳定化

如果 Br-rich surface 只是组成富集，而没有降低表面/晶界缺陷，则它不一定抑制相分离。  
如果 Br-rich surface 同时伴随 non-radiative trap 减少、CPD fluctuation 降低、PL lifetime 增加，则更可能表现为稳定化。

### H2. 局域电势/电场异常区域是相分离的优先成核区域之一

若 trap-charge field 参与相分离，则光照下 CPD/SPV 异常区域应与 PL red-shift 区域具有空间相关性，并且两者在时间上应存在可解析的先后关系。

### H3. 不可逆相分离与卤素损失/氧化过程相关，而不是单纯的可逆离子迁移

若相分离在暗态无法完全恢复，且伴随 I/Pb/Br 化学态变化或 I inventory loss，则说明 redox / volatile halide loss 已经参与过程。

---

## 4. 研究目标与技术路线

本研究分为三个 Aim。每个 Aim 都设置“主方法”和“高风险补充方法”，避免整个课题依赖单一高端设备。

---

# Aim 1：建立可重复的相分离动力学评价体系

## 4.1 目标

建立一套能够定量比较不同样品相分离行为的标准 protocol，为后续机制分析提供可靠基线。

## 4.2 样品体系

建议选择 2–3 个代表性体系，而不是铺太宽：

1. **Baseline mixed-halide perovskite**  
   例如 FA/Cs Pb(I,Br)₃，带隙 1.68–1.75 eV。

2. **Surface-treated / Br-rich surface sample**  
   用温和表面处理或文献中可复现的 polishing / post-treatment 方式构建表面 Br-rich 对照。

3. **Defect-passivated control sample**  
   使用常见 passivation strategy，例如 alkylammonium halide、Lewis base、pseudo-halide 或 2D capping layer。

不建议一开始就引入太多组分变量，否则无法判断相分离差异来自 Br/I 比例、晶粒尺寸、应变、缺陷还是工艺波动。

## 4.3 主表征方法

### 4.3.1 Operando PL hyperspectral imaging

测量内容：

- PL peak position map；
- PL intensity map；
- PL linewidth map；
- 光照下 PL red-shift evolution；
- 暗态恢复动力学。

关键输出：

- 相分离 onset time；
- red-shift amplitude；
- recovery ratio；
- residual red-shift after dark recovery；
- spatial heterogeneity index。

### 4.3.2 UV-vis / EQE / steady-state PL

用于判断相分离是否反映在吸收边、器件光谱响应与辐射复合行为中。

### 4.3.3 XRD / GIWAXS

用于追踪晶格常数变化、相分裂、残余应变及 preferred orientation。

### 4.3.4 AFM / SEM

用于记录表面形貌、晶粒尺寸和粗糙度，避免把形貌差异误判为机制差异。

## 4.4 实验变量

建议固定以下变量进行系统扫描：

| 变量 | 建议范围 | 目的 |
|---|---|---|
| 光强 | 0.1 sun / 1 sun / 5 sun | 区分线性响应、trap filling、不可逆损伤 |
| 气氛 | N₂ / dry air / vacuum | 区分可逆迁移与 redox / volatile loss |
| 温度 | 25°C / 50°C / 85°C | 加速离子迁移并判断 activation behavior |
| Br ratio | 低、中、高 Br | 判断带隙与相分离倾向关系 |
| 暗恢复时间 | min–hour scale | 区分 reversible / irreversible behavior |

## 4.5 预期结果

Aim 1 不追求立即解释全部机制，而是建立“相分离表型分类”：

1. **Type A：快速红移 + 完全恢复**  
   可能对应可逆 halide redistribution。

2. **Type B：缓慢红移 + 部分恢复**  
   可能对应 trap-assisted ion migration 或 strain relaxation。

3. **Type C：持续红移 + 不恢复 + 化学态变化**  
   可能对应 redox / irreversible halide loss。

4. **Type D：局部红移热点固定出现**  
   可能存在 defect / grain boundary / strain pinning。

---

# Aim 2：解析表面组成、缺陷与 Br-rich surface 稳定化之间的关系

## 5.1 目标

回答 C1 的核心问题：Br-rich surface 究竟是促进相分离，还是抑制相分离？其本质是否与缺陷减少、应变释放或电势平滑化相关？

## 5.2 主方法：多尺度表面化学与缺陷表征

### 5.2.1 Angle-resolved XPS / depth-dependent XPS

目的：

- 比较 pristine、Br-rich treated、aged 样品的表面 Br/I/Pb 比；
- 判断 Br-rich 是否主要存在于最表层，还是 5–20 nm 范围内的平均效应；
- 分析 I 3d、Br 3d、Pb 4f 化学态变化。

注意事项：

- XPS 信息深度有限且为平均信号；
- 不能单独作为亚纳米 Br-rich 的最终证据；
- 需要与 SIMS / STEM / PL / KPFM 共同解释。

### 5.2.2 TOF-SIMS depth profiling

目的：

- 获得 Br/I 深度分布趋势；
- 判断处理前后是否存在表面 Br enrichment；
- 追踪老化后 I/Br 重新分布。

注意事项：

- SIMS 受 matrix effect 影响，绝对定量困难；
- 更适合作为“相对深度趋势”而非绝对浓度；
- 需要标准样或内部归一化策略。

### 5.2.3 TRPL / absolute PLQY

目的：

- 判断 Br-rich surface 是否降低 non-radiative recombination；
- 关联表面组成与缺陷钝化效果。

如果 Br-rich surface 抑制相分离但 PL lifetime / PLQY 并未改善，则说明其稳定化不一定来自缺陷钝化，可能与应力、电场或离子迁移势垒相关。

### 5.2.4 KPFM / Surface photovoltage

目的：

- 比较不同样品表面电势波动；
- 判断 Br-rich surface 是否降低局域 CPD fluctuation；
- 追踪光照下表面电势响应和恢复行为。

## 5.3 高风险补充方法：APT 作为验证，而非主线

APT 可以作为高价值验证手段，但不应作为本课题能否成立的唯一支柱。

### 5.3.1 APT 可以回答的问题

- Br/I 是否在纳米尺度存在明显非均匀分布；
- 表面/近表面区域是否存在 Br-rich trend；
- 不同处理样品之间的元素分布是否存在显著差异。

### 5.3.2 APT 不能直接回答的问题

- 不能简单把 missing atom 解释为 vacancy；
- 不能天然代表 operando 室温光照状态；
- 不能忽略 cryo-FIB、针尖曲率、高电场蒸发和重建模型带来的伪影；
- 不能单独证明 Br-rich surface 是相分离的原因。

### 5.3.3 APT 在本计划中的正确定位

APT 应被定位为：

> “用于验证表面/近表面 Br/I 非均匀分布的高空间分辨补充证据。”

而不是：

> “直接判决 C1 的唯一证据。”

如果 APT 合作失败，Aim 2 仍可通过 AR-XPS + TOF-SIMS + KPFM + PL/TRPL + GIWAXS 形成完整结论。

## 5.4 判据

| 实验结果 | 可能解释 |
|---|---|
| Br-rich surface + PLQY 提升 + CPD fluctuation 降低 + 相分离减弱 | Br-rich 可能与缺陷钝化/电势平滑化耦合，是稳定化因素 |
| Br-rich surface 存在但 PLQY 不变，相分离仍强 | 单纯 Br 富集不足以稳定材料 |
| 无明显表面 Br-rich，但相分离减弱 | 稳定化可能来自缺陷钝化、应变释放或晶界调控 |
| 老化后 Br/I 深度分布显著变化 | 表面组成是动态过程，不应只用静态 DFT 解释 |

---

# Aim 3：建立局域电势、应变与不可逆化学变化的耦合机制图像

## 6.1 目标

将 Aim 1 的相分离动力学与 Aim 2 的表面组成/缺陷信息连接起来，判断相分离的主导因素。

## 6.2 主方法 1：同区域 PL-KPFM 关联测量

### 实验设计

在同一区域制作 fiducial marks，进行 sequential 或 quasi-operando 测量：

1. 初始 AFM/KPFM；
2. 初始 PL hyperspectral map；
3. 光照老化；
4. 光照中/光照后 KPFM；
5. 光照后 PL map；
6. 暗态恢复后再次测量。

### 关键分析

- PL red-shift hotspot 与 CPD anomaly 是否共定位；
- CPD 变化是否先于 PL red-shift 出现；
- 暗态恢复时 CPD 与 PL 是否同步恢复；
- 不可逆区域是否对应更强表面电势残留。

### 物理解释边界

KPFM 测的是 CPD，不是局域电场本身。因此本研究不会简单声称“CPD = trap field”。更合理的表述是：

> “KPFM/SPV 提供局域电荷积累、电势重排和表面态变化的间接证据；只有在与 PL、TRPL、XPS/SIMS 和气氛依赖实验共同吻合时，才能支持 trap-assisted ion migration 机制。”

## 6.3 主方法 2：应变/弹性不均匀性分析

### 6.3.1 GIWAXS / XRD peak analysis

分析内容：

- peak shift；
- peak broadening；
- microstrain；
- preferred orientation；
- 光照/热处理前后的晶格变化。

### 6.3.2 Raman / low-frequency Raman

分析内容：

- Pb–I/Pb–Br framework vibration；
- lattice softness；
- local structural disorder；
- phase transition tendency。

### 6.3.3 Brillouin microscopy 作为可选补充

Brillouin microscopy 可以提供局部弹性模量相关信息，但空间分辨和设备可得性需要现实评估。建议将其作为合作型补充，而非课题主线。

若可获得 Brillouin 平台，可测试：

- 弹性模量 map 是否与 PL red-shift hotspot 相关；
- Br-rich surface 是否改变局部 stiffness；
- 应变/弹性不均匀性是否影响相分离 onset time。

## 6.4 主方法 3：可逆/不可逆边界判定

### 化学态追踪

使用 XPS / SIMS / UV-vis / PL recovery 判断不可逆过程：

- I⁰ / I₂ 相关化学态变化；
- Pb⁰ 或 PbI₂ formation；
- I/Pb/Br 元素比例变化；
- PL 红移是否无法恢复；
- 吸收边是否永久变化。

### 气氛依赖实验

比较 N₂、dry air、vacuum 条件：

- 若 vacuum 下不可逆增强，可能与 volatile iodine species escape 有关；
- 若 air 下不可逆增强，可能与氧/水参与 redox 有关；
- 若各气氛中均可逆，则 redox 不是主导因素。

### 同位素 SIMS 作为高风险补充

同位素标记 SIMS 可以直接追踪 I/Br 去向，但实验复杂度高，适合作为第三年高风险合作项目。

其定位应是：

> “用于验证不可逆卤素损失的强证据。”

而不是主线必需条件。

---

## 7. 高风险技术的重新定位

原 v2 中五个跨领域技术都有 novelty，但不适合全部作为博士主线。本计划将它们重新定位如下：

| 技术 | 原定位 | 重写后定位 |
|---|---|---|
| APT | C1 主攻技术 | 高风险验证：验证 Br/I 纳米尺度非均匀分布 |
| NV-AFM | C3 主攻技术 | 高风险验证：验证局域电场热点，但不直接输出机制权重 |
| STED | C2 主攻技术 | 可选补充：若 PL domain 低于衍射极限，再引入 |
| 同位素 SIMS | C4 主攻技术 | 高风险验证：用于不可逆卤素损失的最终证据 |
| Brillouin microscopy | C5 主攻技术 | 可选补充：用于局部弹性/应变耦合分析 |

这样处理后，即使高风险技术没有全部成功，博士课题仍可依靠成熟表征完成主体逻辑。

---

## 8. 三年计划

## Year 1：建立样品体系与相分离动力学基线

### M1–M3：文献复核与样品体系确定

任务：

- 确定 2–3 个 mixed-halide perovskite 组成；
- 建立标准薄膜制备流程；
- 建立 baseline device 或 film-level characterization；
- 完成初始 XRD、UV-vis、PL、SEM、AFM 表征。

Deliverable：

- reproducible baseline films；
- 初步相分离 protocol；
- 一份内部文献 review。

### M4–M6：Operando PL hyperspectral protocol

任务：

- 建立光照强度、温度、气氛控制；
- 测量 PL peak shift、intensity、linewidth 和 recovery；
- 建立相分离动力学参数。

Deliverable：

- phase segregation kinetic map；
- reversible / irreversible classification。

### M7–M9：表面处理与缺陷钝化样品制备

任务：

- 制备 Br-rich surface / passivated samples；
- 比较其相分离动力学；
- 初步判断稳定化效果。

Deliverable：

- treated vs pristine 对比数据；
- 初步判断 Br-rich surface 是否稳定。

### M10–M12：Year 1 整合

任务：

- 整合 PL、UV-vis、XRD、TRPL；
- 写作第一篇方法/机制短文或学会发表。

Deliverable：

- Conference abstract；
- Manuscript draft 1。

---

## Year 2：表面组成、缺陷与电势耦合分析

### M13–M15：AR-XPS / TOF-SIMS depth profile

任务：

- 比较 pristine、Br-rich、passivated、aged 样品；
- 建立 Br/I depth trend；
- 追踪表面化学态变化。

Deliverable：

- surface composition dataset；
- Br-rich surface 是否真实存在的初步结论。

### M16–M18：同区域 PL-KPFM/SPV 关联

任务：

- 设计 fiducial-marked sample；
- 测量同一区域 PL red-shift 与 CPD/SPV；
- 判断空间相关性。

Deliverable：

- PL-KPFM correlation map；
- trap/electric-potential involvement 的证据边界。

### M19–M21：应变与结构不均匀性分析

任务：

- GIWAXS/XRD peak analysis；
- Raman / low-frequency Raman；
- 可选 Brillouin 合作测试。

Deliverable：

- strain / lattice softness 与相分离倾向的关联图。

### M22–M24：Year 2 论文整合

任务：

- 建立 surface-composition / trap-potential / strain 三因素机制模型；
- 写作主论文 1。

Deliverable：

- Manuscript 1：Br-rich surface stability mechanism；
- 若数据足够，准备 Manuscript 2 初稿。

---

## Year 3：高风险验证与机制边界收敛

### M25–M27：APT 或高分辨替代方案

优先级：

1. 若能获得合作：cryo-FIB + APT；
2. 若 APT 不可行：cryo-STEM-EDS/EELS 或 HIM-SIMS；
3. 若高分辨方法均不可行：加强 XPS/SIMS/KPFM cross-validation。

任务：

- 验证 Br/I 纳米尺度非均匀性；
- 检查表面处理是否导致真实近表面组成变化。

Deliverable：

- high-resolution composition validation dataset。

### M28–M30：不可逆相分离与卤素损失验证

任务：

- 长时间光照老化；
- N₂ / air / vacuum 对比；
- XPS/SIMS 化学态与元素比例追踪；
- 可选同位素 SIMS 合作。

Deliverable：

- reversible vs irreversible boundary map；
- redox / halide loss 参与程度判断。

### M31–M33：可选 NV-AFM / STED 合作验证

若有条件：

- NV-AFM 验证局域电场热点；
- STED 或 TEPL 验证低于衍射极限的 I-rich domain；
- 与 PL-KPFM 结果交叉对照。

若无条件：

- 不影响主体论文；
- 将其作为 future work。

Deliverable：

- high-risk validation result 或 future proposal。

### M34–M36：论文与答辩

任务：

- 完成博士论文；
- 整合机制模型；
- 投稿主论文 2；
- 准备答辩。

Deliverable：

- PhD thesis；
- 2 篇左右主论文；
- 1 篇方法/综述/short communication 或学会发表。

---

## 9. 预期成果

### 9.1 科学成果

1. 建立 mixed-halide perovskite 光致相分离的 operando kinetic classification。
2. 明确 Br-rich surface 是否稳定材料，以及稳定化是否来自缺陷钝化、电势平滑化或应变释放。
3. 建立 PL red-shift、CPD/SPV 变化、表面组成和应变之间的关联。
4. 区分可逆 halide redistribution 与不可逆 redox / halide loss 的条件边界。
5. 给出一套比单一机制更现实的 multi-factor mechanism map。

### 9.2 方法学贡献

本研究的 novelty 不再依赖“首次使用某个高端设备”，而是体现在：

> **以机制问题为中心，把 operando optical mapping、surface chemistry、local potential mapping 和 structural/strain analysis 组合成一套可复现、可验证、可扩展的相分离诊断框架。**

高风险技术如 APT、NV-AFM、STED、同位素 SIMS 和 Brillouin 将作为增强证据，而不是唯一支柱。

---

## 10. 风险与备选方案

| 风险 | 影响 | 备选方案 |
|---|---|---|
| APT 样品制备失败 | 无法获得原子级 Br/I 分布 | 使用 AR-XPS + TOF-SIMS + cryo-STEM/HIM-SIMS 交叉验证 |
| NV-AFM 合作不可得 | 无法直接验证局域电场 | 使用 KPFM/SPV/TRPL/impedance 建立间接证据 |
| STED 光损伤严重 | 无法做超分辨 PL | 使用低功率 PL mapping、TEPL 或 CL 作为补充 |
| 同位素 SIMS 成本/合成困难 | 无法直接追踪 I escape | 使用 XPS/SIMS chemical state + atmosphere-dependent aging |
| 样品稳定性差 | 数据重复性不足 | 缩小组成范围，提高制膜 repeatability |
| 机制耦合过强 | 无法单一归因 | 输出机制边界和相对贡献，而不是强行证明单一机制 |

---

## 11. 答辩时建议使用的表述

### 不建议说

> “APT 可以直接看到 vacancy。”  
> “NV-AFM 可以直接区分 polaron、trap 和 redox。”  
> “这些技术不可替代，可以一锤定音。”  
> “五个争议三年内全部解决。”

### 建议说

> “APT 可以作为近表面 Br/I 非均匀分布的高空间分辨验证，但需要谨慎处理制样和重建伪影。”  
> “NV-AFM 若可行，可为局域电场提供强补充证据，但机制归因仍需 PL、KPFM、TRPL 和化学表征交叉验证。”  
> “本研究的核心不是堆叠高端技术，而是建立从组成、电势、应变到相分离动力学之间的可检验物理关联。”  
> “本课题的主线依赖成熟表征，高风险跨领域技术作为增强验证，因此具备三年内完成的现实性。”

---

## 12. 一句话总结

> 本研究旨在从“单一机制争论”转向“多因素耦合边界判定”：通过 operando PL 动力学、表面组成分析、局域电势映射和结构/应变表征，系统解析宽带隙混卤钙钛矿光致相分离的触发因素、稳定化条件与不可逆降解边界，并为高稳定性叠层太阳能电池顶电池材料设计提供机制依据。

