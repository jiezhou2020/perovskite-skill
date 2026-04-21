---
name: Tang2018-局域相分离观测
direction: 方向2-相分离
date: 2018
doi: 10.1021/acs.nanolett.8b00505
source_pdf: acs.nanolett.8b00505.pdf
---

# Local observation of phase-segregation in mixed-halide perovskite

**作者 / 年份 / 期刊**：Xiaofeng Tang, Marius van den Berg, Ening Gu, Anke Horneber, Gebhard J. Matt, Andres Osvet, Alfred J. Meixner, Dai Zhang, Christoph J. Brabec；2018；Nano Lett. (Just Accepted)。

## 1. 研究动机 (Why)

Hoke 2015 以来所有相分离证据都是 ensemble 水平（PL、吸收、XRD 全膜平均），bulk XRD 体积分数与光电流谱估计可差 20 倍，提示"哪里偏析"未定。SEM-CL 有真空/电子束胁迫，共聚焦荧光缺光谱维度。需要一种无胁迫、带光谱、亚微米空间分辨的探针去定位偏析空间起源，以便把工程化目标从"改成分"具体化到"改界面/晶界"。

## 2. 核心主张 (What, 1 句)

光致相分离在 CH_3NH_3PbBr_{0.9}I_{2.1} 薄膜中选择性发生在晶界而非晶粒中心，晶界正空间电荷是驱动力、混合熵是反向恢复力，FTPS bulk 测得碘富相占总吸收的 ≈10%。

## 3. 方法 (How)

样品：一步旋涂 CH_3NH_3PbBr_{0.9}I_{2.1}（x=2.1），带隙 ≈ 1.77 eV，中位晶粒 450-500 nm，最大 > 800 nm。参考样 CH_3NH_3PbI_3、CH_3NH_3PbBr_3、CH_3NH_3PbBr_{0.3}I_{2.7}（x=0.1，位于 Brivio 2016 miscibility gap 外）、毫米级单晶。

探针一：shear-force 扫描探针（金属尖）+ 共聚焦 PL，尖尖对准激光焦点，636 nm 激发 500 W/cm^2，32×32 超光谱扫描，衍射极限几百纳米光斑。单点 PL 时间序列 600 s。

探针二：FTPS 光电流谱（带外部白光 bias，cryostat 控环境），AC 锁相探 sub-bandgap 吸收；in-situ 光照过程内 FTPS 动力学。

探针三：KPFM 得表面电位图，与 topography 同点对照。

参考实验：真空 vs 空气 FTPS 动力学比对；x=0.1 稳定成分光照对照；单晶光照对照。XRD + 外置光源验证 bulk Hoke 行为复现。

## 4. 量化锚点 + 突破

| 量 | 值 | 条件 |
|---|---|---|
| 带隙（grain center PL） | 1.77 eV (700 nm) | 原始成分，局域稳定 |
| 碘富相 PL | 1.65 eV (750 nm) | 光照后晶界 |
| 激发强度 | 500 W/cm^2 @ 636 nm | 局域 PL |
| 晶界 PL 演化时间 | 600 s 内可辨 | 对比晶粒中心稳定 |
| FTPS 新肩形成时间 | ≈10 min 饱和 | 白光 soaking |
| 暗恢复时间 | ≈1 h | FTPS 全恢复 |
| 碘富相 FTPS 贡献 | ≈10% | deconvolution of 吸收曲线 |
| 纯 MAPbI_3 PL 局域涨落 | FWHM 0.7 nm, 峰位 0.6 nm | 对照基线，晶界无时变 |
| 纯 MAPbBr_{0.9}I_{2.1} PL 强度涨落 | 因子 4（vs MAPbI_3 因子 1.5） | 同测量条件 |
| 环境影响 | 真空 vs 空气动力学无差 | 30 min 白光 |
| x=0.1 成分 | PL/FTPS 光照不变 | 在 Brivio miscibility gap 外 |

突破：首次用 tip-enhanced 共聚焦 PL 把相分离空间定位到晶界；用 Brivio miscibility gap 外成分（x=0.1）的稳定性证伪"所有混卤都会偏析"的宽口假设；用 KPFM 找到晶界正空间电荷作为可测的驱动力代理；用单晶无晶界样品做零偏析对照，闭合晶界-偏析因果链。

## 5. 解决的问题

把 Hoke 23% (XRD) vs 1% (EQE) 体积分数之争用空间定位解释为"偏析集中在晶界的 ≈10% 体积占比"。把"相分离"从材料本征问题转为"晶界工程可控问题"，为钝化/大晶粒策略提供机制依据。

量化了 600 s 级晶界光致动态，把 Hoke 的 bulk 分钟时间常数定位到晶界局部过程。

环境无关性（真空=空气）排除了氧/水对 10 min 尺度偏析的主导作用，与长期稳定性的"环境降解"路径脱耦。

## 6. 局限

500 nm 光斑分辨率仍大于单个晶界宽度；"晶界上"实际是晶界及其附近 sub-μm 区的混合信号，晶界结构对比（开放 vs 融合 vs 双晶界）未做。

FTPS deconvolution 得到的 10% 占比依赖成分-EQE 假设（CH_3NH_3PbI_xBr_{3-x} 在 2.1 < x < 3 区 QE 近似不变），未独立校准。

KPFM 仅给稳态表面电位差的定性符号，未给出晶界空间电荷层厚度、势垒高度的定量值；"正空间电荷驱动碘负离子累积"仍是唯象图景。

没有温度依赖与激活能测量，不能直接与 Hoke 的 E_a=0.27 eV 比对。

单一成分 x=2.1，未扫 x 空间；Brivio miscibility gap 中间（x=0.3-0.5）未覆盖。

## 7. 可证伪判据

若能找到无晶界但仍偏析的样品（更高质量单晶光照下出现 PL 红移），则"晶界必要"假说被证伪。Tang 已做单晶对照观测到稳定 PL，这是正面证据。

若 KPFM 显示某材料晶界电位反而是下弯（负空间电荷），但相分离仍在晶界，则"正空间电荷驱动"图景被证伪。

若钝化晶界（SAM、PMMA、2D capping）完全消除 PL 红移与 FTPS 肩峰，则晶界因果被强化；若钝化后 PL 红移只减弱不消失，则体内通道亦存在。

若环境（真空 vs 空气）在长时间（> 10 h）下对动力学出现显著差异，则本文"环境无关"结论只限于快过程。

若 x=0.1 在更高光强或更长曝光下也出现 PL 红移，则 Brivio miscibility gap 的判据被修正。

## 8. 设备改进钩子

扩张 1：上 TERS（tip-enhanced Raman + PL）把分辨率从 500 nm 压到 20-50 nm，直接测晶界单条线上的 I/Br 局域比与 PL 同点同时。

扩张 2：温度变量 + 共聚焦 PL：做 150-350 K 温扫拿晶界/晶心各自 E_a，看是否确实是同一"离子迁移激活能"分成两个通道。

扩张 3：in-situ 电偏压 + 共聚焦 PL，直接测偏析是否被反向电场清除，量化驱动力。

扩张 4：把 FTPS cryostat 换成受控水汽/氧分压气室，扫环境参数对 10 min 与 >10 h 两个时间尺度的分离效应。

扩张 5：大单晶 + 纳米压痕/聚焦离子束引入单一人工晶界，在同一样品内做"有晶界 vs 无晶界"严格控制。

## 9. 对博士研究的启示

Tang 把问题重定位到晶界后，"solvent / interface engineering 控制相分离"就从"改体相成分"缩小为"用溶剂调控晶粒与晶界化学/空间电荷"。这对博士研究目标是最直接的机制依据。

Solvent engineering 具体路径一：用 DMSO/GBL 不同配位强度或用 Lewis base 添加剂（PbI_2·DMSO 加合物路线）直接放大晶粒至 > 1 μm，Tang 明示晶粒变大 → 晶界体积分数降 → FTPS 10% 肩峰应同比降。博士可以把"晶粒尺寸 d 与 FTPS 碘富相肩峰相对强度 η"扫成一条解析曲线 η ∝ 1/d，作为 solvent 效应的硬指标。

Solvent engineering 具体路径二：反溶剂（CB/Tol/DEE）滴加时机决定晶界致密度与 grain boundary space charge。可直接用 Tang 的 KPFM 协议测不同反溶剂晶界电位差 ΔV_GB，预期 ΔV_GB 与偏析阈光剂量负相关。这是可证伪预测。

Solvent engineering 具体路径三：引入大阳离子（FA、Cs、MA 混合）或 A 位功能化溶剂络合可能锚定卤素。Tang 的协议（共聚焦超光谱 PL 32×32 + in-situ FTPS + KPFM）直接可复用为"成分/溶剂变量 × 三探针"矩阵。

Interface engineering 具体路径：晶界钝化剂（SAM、PEA、胺类、TOPO）在 solvent 工艺末端旋涂，用 Tang 的晶心 vs 晶界 PL 时间演化判定钝化是否把晶界从"演化区"转为"稳定区"。这是方法级硬证据要求（不是只看 bulk PL 不红移）。

实验经济：Tang 的一台 shear-force AFM+confocal + 一台带 cryostat 的 FTPS 就能覆盖机制层与体相层；博士若组内无 FTPS，可退而用带 bias 的 EQE/lock-in IPCE 替代（Hoke 正是这么做的）。

## 10. 未来方向

构建成分 × 温度 × 光强三维相图：Tang 只落在一个点，下一步需把 E_a（晶界）、E_a（体内）、阈光剂量 J_th、碘富相体积分数 η 四个量扫到 x 全域，并与 Brivio miscibility gap 重合。

晶界分类：Shao 2016（引用 47）已区分 open vs fused GB 对载流子的差异，但 Tang 未按此分型。下一步需对同一膜做 EBSD + 共聚焦 PL，按 GB 错向角分类看偏析概率。

电子/离子耦合：把正空间电荷的根源（Pb 空位？MA 丢失？）溯源到缺陷化学。KPFM 定性 → 定量需上 DLTS / admittance 谱。

闭环验证钝化：Tang 只定性提钝化方向，未给任一钝化分子的定量指标。应设"η 下降 ≥ 2× 为有效钝化"类判据。

## 11. 与其他方向2论文的对照

与 Hoke 2015：Tang 直接延展 Hoke 的 bulk 观测到空间分辨。Hoke 的 1.68 eV 钉扎峰，Tang 测到 1.65 eV（x=2.1 体系稍碘富，钉扎位置因成分稍移），形态上一致。Hoke 的 E_a=0.27 eV 被 Tang 的"晶界选择性"重新诠释为晶界通道激活能，非本征体相数。

与 Ruth/Kuno 2023 热力学模型：Tang 用 Draguta 2017 的"激发态下碘富相自由能最低"解释驱动力，但未做自由能定量；Ruth/Kuno 2023 给出系统热力学曲面，Tang 提供的晶界维度是热力学外的空间修正项——二者正交互补。Tang 的 x=0.1 无偏析对照是对 miscibility gap 边界的实验验证。

与 Muscarella 2020 压力：Muscarella 用压力抑制偏析，本质上等效增大"混合能壁垒"；Tang 则用晶界消除（增大晶粒、做单晶）达到类似"抑制偏析"效果。压力是外场、晶粒是内参数，两者都支持"驱动力 < 壁垒"时偏析被冻结。

与 Feng 2023 周期加热：Feng 用周期热激发将偏析系统放到非平衡稳态。Tang 的 600 s 晶界演化时间尺度与 10 min FTPS 饱和时间可直接作为 Feng 实验选周期的上下限输入。Tang 的晶界定位提示 Feng 的周期加热效果应强依赖晶粒尺寸，可做出"周期加热抑制效率 vs d"曲线。

与 Bischak 2017（Tang 引文 14）：Bischak 用 SEM-CL 得到纳米级碘团簇，但在真空/电子束下；Tang 的优势是无胁迫 + 光谱分辨，可证伪 Bischak 的"纳米团簇"是否环境引入的伪象——Tang 结果显示晶界 sub-μm 尺度聚集，不排除内部含更细的 Bischak 式团簇。
