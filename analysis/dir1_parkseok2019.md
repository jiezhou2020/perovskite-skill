---
name: Park & Seok 2019 HMHP 内在不稳定性综述
direction: 方向1-蓝移解耦
date: 2019
doi: 10.1002/adma.201805337
source_pdf: adma.201805337.pdf
---

# Intrinsic Instability of Inorganic–Organic Hybrid Halide Perovskite Materials

**作者 / 年份 / 期刊**：Byung-wook Park, Sang Il Seok / 2019 / Adv. Mater. (Progress Report, DOI: 10.1002/adma.201805337)

## 1. 研究动机 (Why)

PSC 效率已 >23%，商业化门槛上不是效率而是稳定性。但"稳定性"在文献中被拆成照度、湿度、热、偏压多条线并行，缺一个从晶体结构到分子级化学键、再到离子/缺陷迁移的统一内因叙事。上游问题：HMHP 的"不稳定性"究竟是材料内秉的还是器件表面/界面的？Park 和 Seok（UNIST，首代 HMHP 太阳能电池、2D/3D 混合结构的关键推动者）把内因拆成 3 层：A 位相稳定性 → 缺陷与 halide 反应焓 → MA 分子碎裂与 H 迁移。

读者背景：方向1（蓝移解耦）关心的不是"器件衰减曲线"，而是"带隙/相/动态无序/离子迁移"如何互相耦合、影响温变蓝移的再现性与 XRD/PL 的联合判据。本综述正好把"A 位 dipole→ 相稳定性→缺陷形成焓→MA 碎裂"这条链条串起来，给蓝移解耦提供"结构稳态漂移"的边界条件。

## 2. 核心主张 (What, 1 句)

HMHP（MAPbI3/FAPbI3/CsPbI3）的内在不稳定性不是单一因素，而是三条串联链：A 位尺寸/dipole 决定的相稳定性（α/δ/β/γ 相竞争）→ halide 反应焓与点缺陷形成能决定的离子迁移 → MA⁺ 氢键解离 + H 迁移（H⁺/H⁰/H⁻）决定的分子碎裂；其中 MA 必须从 FAPbI3 中剔除才可能根治 δ↔α 可逆相变的驱动力。

## 3. 方法 (How)

综述型：汇总 Amat 2014 (SR-DFT 有效离子半径)、Whitfield 2016 + Dar 2016 (中子/同步辐射 XRD + MD) 的 MAPbI3 三相热行为、Yi-Grätzel 2016 (Cs/FA 混合相图)、Binek 2015 / Zheng 2016 (MAI/MABr 稳定化 α-FAPbI3 的 dipole 机制)、Tsai 2016 (2D Ruddlesden-Popper)、Yin 2014 + Buin 2015 (点缺陷与晶界 DFT)、Delugas 2015 (MA 碎裂 5 路径 DFT)、Egger 2015 (H 迁移 NEB)、Brunetti 2016 (DSC/TGA 分解动力学)。

作者组织骨架：Section 2（相稳定性）→ Section 3（离子迁移与 MA 碎裂 + H 迁移）→ 总结（提出 MA-free 且 FA 稳定的化学路径）。

## 4. 量化锚点 + 突破

| 参量 | 数值 | 备注 |
|---|---|---|
| 有效离子半径 (Cs+/MA+/FA+) | 1.81 / 2.70 / 2.79 Å | Amat 2014 SR-DFT |
| Goldschmidt t (Cs/MA/FA) | 0.81 / 0.99 / 1.01 | 临界 t>1 暗示 FA 倾向非立方 |
| APbI3 单胞体积 (Cs/MA/FA) | 222 / 248 / 256 Å³ | 室温 XRD |
| 带隙 (MA/Cs/FA) PbI3 | 1.55 / 1.50 / 1.45 eV | 吸收 onset |
| MAPbI3 相区 (Pnma / I4/mcm / Pm-3m) | 20–150 K / 180–280 K / 320–350 K | 中子衍射 |
| 线性热膨胀系数 (立方/四方 MAPbI3) | 1.95×10⁻⁴ / 2.66×10⁻⁴ K⁻¹ | Whitfield 2016 同步辐射 |
| Cs/FA 混相 β-phase 稳定窗口 | 40–60% Cs+ 分数 | Yi 2016 Gibbs 自由能极小 |
| α→δ FAPbI3 相变温度 | 185 °C (无质量损失) | TGA-DSC |
| α-FAPbI3 → 黄相自发弛豫 | 10 天在室温下 | Han 2016 |
| 反应焓 ΔH (MAPbI3/Br3/Cl3) | −0.1 / −0.25 / −0.7 eV | Buin 2015，I 最不稳定 |
| MAPbX3 分解活化能 (Cl/Br/I) | 68 / 60 / 80 kJ·mol⁻¹ | Brunetti 2016 DTA |
| MA 碎裂能 (CH4+NH2−I 路径) | 1.90 eV（E）/ 3.17 eV（H）| Delugas 2015 |
| H+ I→I 迁移能垒 | 0.17–0.29 eV | Egger 2015 NEB |
| H+ / H0 / H− I–H / Pb–H 键长 | 1.7 / 2.0 / 2.1 / 1.9 Å | Egger 2015 |

突破：把"FAPbI3 需 MA 稳定化"这一工艺经验给出了分子级解释——MA 的电偶极矩比 FA 大约 10×，MA 贡献的局部电场锁住 PbI6 octahedra 的 corner-sharing 拓扑；但正是这 MA 又是 H+ 的来源和整个链条的不稳定根因，构成一个"稳相所需—又是毒源"的内在矛盾。

## 5. 解决的问题

把此前零散的"湿度 / 热 / 光 / 偏压 / 离子迁移"单因素综述聚合成"A 位 dipole → 相 → 缺陷 → H 迁移"的单一结构-化学链条。同时指出 2D/quasi-2D（BA、FA、Cs 混合）的稳定性提升不只是疏水阻挡，而是大有机阳离子的定向堆垛改变了晶体取向（从半无序变强 out-of-plane），阻止离子沿晶界迁移。

## 6. 局限

作为综述本身的局限：(a) 没提"光致离子迁移 (light-induced ion migration)"与"热致 H 迁移"的定量分离判据，虽然 Section 3.3 把 H+ 作为主要载体但对 I− 迁移的权重对比未量化；(b) Brunetti 2016 的 DTA 活化能是"宏观分解"，不能直接与 Egger 2015 的"单个 H+ NEB 能垒 0.17 eV"对比，作者未做量纲桥接；(c) MA 碎裂的 5 路径都是 0 K DFT 静态，未含熵修正（ΔS、ΔG(T)），因此 MA 碎裂的温度阈值（比如 85 °C 寿命测试是否就位）仍然是定性；(d) α-FAPbI3 稳定化只讨论 MAX 添加剂的 dipole 机制，未回答"无 MA 的稳定化路线"能否同时保住 corner-sharing 拓扑（尽管作者在结论呼吁这个方向）；(e) 缺陷形成能部分（Yin / Buin）基于小超胞 DFT，GB 能级位置对 U 参数和超胞大小敏感，综述未讨论这个不确定性。

## 7. 可证伪判据

若 FA 体系在"零 MA、零 MAX 添加剂"条件下能保持 α 相 >10⁴ h 而不弛豫到 δ（例如通过单独的 Cs+ 比例 + Br− 共掺 + 2D spacer），则本综述核心主张"MA 必须被替代以根治"被弱化——虽然作者方向正确，但"MA 不可缺"一说可能被反驳。

若 MA 碎裂的实验 H/D 同位素替换实验（把 CH3ND3+ 代入 MAPbI3）给出相同的热分解动力学（同样的 80 kJ/mol），则 "H 迁移是 MA 碎裂的速率限制步" 被证伪，应回到 C-N 键裂解主导图像。

若在相同样品上原位 XRD 观察到 α→δ 相变不伴随 H+ 外逸（例如 SIMS / APT 测量 H 分布不变），则"H 迁移是相变主驱"的论点被证伪。

## 8. 设备改进钩子

SIMS / iTOF-SIMS 或 NRA（核反应分析）原位测 H 分布随温度/偏压的迁移，量化 H+ 通量，替代"只能从 NEB 推断"的 H 迁移。

同位素标记（⁵N-MA, CD3NH3, CH3ND3 四种同位素排列）+ 温变 XRD + Raman 联用，把 MA 碎裂的速率限制步分离出来（C-N 裂 vs N-H 裂）。

共聚焦 PL-Raman 原位高温台（>150 °C）做 α-FAPbI3 的 κ 相变动力学：直接给"温度-时间-相分数"三维相图，而不是只给临界温度 185 °C。

DAC 高压 + 温变组合：Francisco-López 2019 已经证明 TE 与 EPI 等位，Park & Seok 暗示 A 位 dipole 决定相稳定→决定 αV→决定 TE 贡献，因此 DAC 能在不改变组成的条件下抑制 α→δ 转变，是验证"dipole-相稳定-带隙温变"因果链的关键设备。

## 9. 对博士研究的启示

方向1（蓝移解耦）不能只在"相稳定区"内分析 dEg/dT；Park & Seok 给的相图说明 MAPbI3 在 320 K 附近已开始进入立方相、FAPbI3 的 δ 相在任何"名义 α"样品里都可能以 10%–50% 分数共存（Section 2.1 "形成单相纯晶体不发生"），因此温变 PL/吸收数据必须附带同步 XRD 量化的相分数 φα(T)，否则 dEg/dT 是"三相混合的平均"。

H+ 迁移的 0.17–0.29 eV 活化能（300 K 下 kT≈25 meV）意味着 PL 测试的"光照下热平衡假设"很可能在 >250 K 被破坏；方向1 做"蓝移解耦"时应引入"光照前 + 光照 15 min"双扫以 capture 离子迁移造成的基线漂移。

MA 电偶极矩 10× 于 FA 这个数字解释了为什么 MA→FA 替换后 Francisco-López 框架里的 EPI 项（尤其是含 C-N 扭动的软模）会变小，而 TE 项会变大——这就是"FA 体系 TE 比例应 > MA"的预测来源，是方向1 的首个直接延伸实验。

## 10. 未来方向

作者明示：(1) 寻找 non-MA 的 α-FAPbI3 稳定化添加剂（例如 2D spacer、小无机 Cs+、多价离子）；(2) 二/三价无机阳离子（如 Zn²⁺、Bi³⁺）掺入 Pb 位提高化学稳定性；(3) 控制晶粒取向替代"阻止晶界离子迁移"。

基于此可延伸：(a) 把 2D/quasi-2D 的"高 out-of-plane 取向"作为方向1 蓝移解耦的样品—— 2D 体系里 A 位 dipole 被 BA+ 规范化，若 Francisco-López 的 TE/EPI 比例在 2D 体系与 3D MAPbI3 差异 >30%，证明 A 位 dipole 驱动 TE 而非 EPI；(b) 用 GU+（胍）替换 MA+，dipole 居中（0 vs 2.29 D for MA），测 dEg/dT 的比例变化；(c) 同位素 CD3 取代 CH3 做"D 迁移"实验，若迁移能垒显著升高（动力学同位素效应 kH/kD > 3），则相变主驱确认为 H 迁移。

## 11. 与其他方向1论文的对照（Francisco-López 2019 / Yang 2017 / Houtput 2026 / Mukhuti 2022 / Weadock 2508.15607）

Francisco-López 2019：本综述提供"相稳定性 + 热膨胀"物理基础——FAPbI3 αV 预期比 MAPbI3 高（Cs→MA→FA 体积 222→248→256 Å³），因此 Francisco-López 的 60% TE 预期在 FA 体系应更高。同时本综述的 MAPbI3 四方相 αlin=2.66×10⁻⁴ K⁻¹（Whitfield 2016）≈ Francisco-López 引用的 Jacobsson αV=1.57×10⁻⁴ K⁻¹ × 3（3D→体积系数）≈ 4.7×10⁻⁴ K⁻¹，两者数量级自洽（Whitfield 是立方/四方单晶，Jacobsson 是多晶粉末，差异在正常范围）。

Yang 2017：Yang 第一性原理给 300→400 K 立方相 ΔEg ≈ 146 meV（EPI 86 + TE 60 meV），Park & Seok 暗示 MA→FA 时 C-N 扭动软模贡献 EPI 的下降；因此方向1 的延伸预测：FA 体系的 ΔEg 应 < MA 体系（软模弱化），但 TE 比例应 >。Yang 对 CsPbI3 做的对照（有机阳离子是低价带大线宽主因）与 Park & Seok 的 MA-dipole 叙事一致。

Houtput 2026（非谐声子 + 动态对称破缺）：Park & Seok Section 3.3 的 H+/H0/H- 三种电荷态都伴随"显著的 iodide、Pb、MA 重排"，这是动态对称破缺的直接结构证据；Houtput 的非谐框架若能把 H 迁移作为 quasi-Goldstone 模处理，是对本综述"H 迁移 = 软模混淆源"的量化延伸。

Mukhuti 2022（超快相干声子）：Park & Seok 给的 MA 碎裂路径释放 CH3·、NH2·、H 三种产物，这些新键合状态必然改变超快 Raman / 相干声子谱；Mukhuti 的时间分辨声子谱若在 MA vs FA 样品上显示 C-N 模软化消失，即直接验证 Park & Seok 的 MA-dipole-软模耦合叙事。

Weadock 2508.15607（动态 halide 无序）：Park & Seok 的缺陷表（VI, Ii, IMA, IPb）与 halide 反应焓数据（MAPbI3 −0.1 eV 最低）给出"为什么 I 最动态无序"的能量学起点；Weadock 若报出 I-displacement RMSD 随 T 的依赖，应与本综述的 VI 形成能 + H-I 相互作用直接对应——预测：同温下 FA 体系 I-RMSD 应 < MA 体系，因为 MA 的 H→I 吸引是额外无序源。

对照全景：Park & Seok 是方向1的"结构-化学"地基，Francisco-López / Yang 是"热力学 + EPI"上层建筑，Houtput / Mukhuti / Weadock 是"动态非谐 + 对称破缺"前沿；任何把 dEg/dT 彻底解耦的实验设计都必须先用 Park & Seok 的相稳定性 + H 迁移判据清洗样品，再用 Francisco-López 的 TE/EPI 分离，最后用 Mukhuti/Weadock 级别的瞬态谱验证软模图像。
