---
name: Chen 2020 PEAI 芳铵钝化 WBG
direction: 方向3-离子迁移
date: 2020
doi: 10.1021/acsenergylett.0c01350
source_pdf: chen2020.pdf
---

# Arylammonium-Assisted Reduction of Open Circuit Voltage Deficit in Wide-Bandgap Perovskite Solar Cells: The Role of Suppressed Ion Migration

**作者 / 年份 / 期刊**：Cong Chen, Zhaoning Song, Yanfa Yan 等（Toledo + NREL + 武汉大学）；2020；ACS Energy Letters（DOI: 10.1021/acsenergylett.0c01350）。

## 1. 研究动机 (Why)

WBG（>1.72 eV）钙钛矿是全钙钛矿叠层、钙钛矿/硅叠层的顶电池必选项，但其 V_OC 亏损长期 >0.5 V。过去把"大胺盐钝化"带来的改善笼统归因于"缺陷钝化 + 载流子寿命延长"，没有机制上的定量证据，尤其对"为什么 WBG 比 MBG 对芳铵更敏感"完全没有答案。作者认定问题出在 WBG 膜中晶界导电性反常高于晶内（与 MAPbI3 相反），这种"活的"晶界是 ionic defect 堆积的直接后果，因此要把 V_OC 亏损的主因从"体相缺陷"挪到"界面/晶界离子迁移"上。

## 2. 核心主张 (What, 1 句)

在 FA0.8Cs0.2Pb(I0.7Br0.3)3 (E_g = 1.73 eV) 表面旋涂 2 mg/mL PEAI 后，表面离子迁移 E_a 从 0.680 eV 升至 0.905 eV（TAS 测）和 0.68→0.96 eV（DFT 算），抑制了 GB/表面离子堆积，把 J0 降 3 个数量级，V_OC 从 1.16 提到 1.25 V，PCE 做到 19.07%（4-T 叠层 24.1%）。

## 3. 方法 (How)

器件架构 glass/ITO/PTAA/FA0.8Cs0.2Pb(I0.7Br0.3)3+Pb(SCN)2/C60/BCP/Ag，倒置平面结构。核心表征链条三段：
一是**c-AFM 微观电流成像**，在 +0.6 V 样品偏压下对比控制膜与 PEAI 膜的 GB/GI 电流分布与直方图。
二是**温度依赖 TAS（热导纳谱）**，250–300 K 每 10 K 一步，从 dC/df 的峰值频率 ω_peak 做 Arrhenius 拟合 ω_peak = ξT² exp(-E_a/kT) 抽 E_a。
三是**NEB 类第一原理计算**，分别在 pristine 表面和 PEA 修饰表面上算 I 间隙缺陷扩散路径的能垒，并做 PDOS 看缺陷能级位置。
辅以 steady-state PL/TRPL（寿命）、光强依赖 J-V（抽 ideality factor n）、J0 暗饱和电流提取、SEM/XRD/UV-vis/EQE。

## 4. 量化锚点 + 突破

| 参数 | 控制 | PEAI |
|---|---|---|
| 钙钛矿 E_g | 1.73 eV | 1.73 eV |
| TAS 测离子迁移 E_a | 0.680 eV | 0.905 eV |
| DFT I 间隙表面扩散 E_a | 0.68 eV | 0.96 eV |
| c-AFM 平均电流 | 135 pA | 26 pA |
| 暗饱和电流 J0 | ~10^-10 mA/cm² | ~10^-13 mA/cm² |
| 理想因子 n | 1.69 | 1.45 |
| V_OC | 1.16 V | 1.25 V |
| V_OC 亏损 (E_g/q − V_OC) | 0.57 V | 0.48 V |
| PCE（含 MgF2 ARC） | 17.5% | 19.07%（稳态 18.78%） |
| 4-T 叠层 (1.73 eV WBG + 1.25 eV LBG) | — | 24.1% |
| PEAI 最优浓度 | — | 2 mg/mL in IPA |
| J_SC 增益（MgF2 ARC） | — | +0.5 mA/cm² |

关键突破：把"大胺盐→V_OC 改善"从"缺陷钝化"这一笼统语言，落到一个可比较的物理量 E_a 上，且用 TAS 实验与 DFT 计算两种独立方法给出一致数值（ΔE_a ≈ 0.22–0.28 eV），同时匹配到 J0 3 个数量级的降幅，建立了"芳铵层抑制表面离子迁移 → 抑制界面电荷缺陷堆积 → 降低 J0 → 提升 V_OC"这条机制链。

## 5. 解决的问题

一、回答了 WBG 为何比 MBG 对芳铵更敏感：WBG 因 Cs/Br 导致晶界更活跃（c-AFM 显示 J_GB > J_GI），而 MAPbI3 在 Pb(SCN)2 工艺下 GB 已被 PbI2 自钝化。因此 PEAI 在 WBG 上的增益主要来自晶界/表面离子稳定，而不是寻常的表面缺陷钝化。
二、把"界面钝化"和"离子迁移抑制"统一：PEAI 让 I 间隙在表面被迫挤进 Pb-I-Pb-I 环，几何畸变更大，扩散能垒从 0.68 抬到 0.96 eV，同时保持浅缺陷态（PDOS 证明 I 间隙仍在 VBM 之上、无害）。
三、给出 WBG V_OC 亏损 <0.5 V 的定量路径，并演示到 4-T 叠层 24.1%。

## 6. 局限

一、只测了一种芳铵（PEAI），没回答苯环对离子迁移的结构必要性（甲氨 MAI、丁铵 BAI、苯甲铵 BnAI 对比缺失）；二、TAS 只到 300 K、光强依赖性未报告，MPP 工作态下的光诱导离子迁移（Gottesman 软化机制）未触及；三、DFT 仅计 I 间隙，对 Br 间隙、卤素空位、MA+/FA+ 的表面能垒变化未做，而 WBG 体系最棘手的 Br/I 相分离本质上就与 Br 迁移有关；四、老化/MPP tracking 只有 "negligible hysteresis"，没有百小时以上 T80 数据，"抑制迁移就更稳定"只到了 J0/V_OC 层面；五、PEAI 层是否形成 2D 相还是分子层没有用 GIWAXS/XRD 明确回答（SI 里 XRD 一图，正文未定量层厚）；六、c-AFM 的 J_GB vs J_GI 诠释依赖 tip–sample 接触均匀性假设，作者自己也承认该点是文献争论焦点。

## 7. 可证伪判据

该文的机制图（PEA → 表面 I 间隙受位阻 → E_a 升高 → J0 下降）若成立，应满足：(a) 在同一 FA/Cs/Br/I 成分上换成非芳环长链铵（如 OAI 辛铵），E_a 提升应显著小于 PEAI，因为位阻机制要求的是苯环的平面堆积而非链长；(b) 在 c-AFM 里 PEAI 处理后的 J_GB 应不高于 J_GI（论文图 1f 的直方图已支持，但需在 >3 批次、>5 个视场统计）；(c) 不同 E_g 的 WBG（1.68 / 1.75 / 1.85 eV）上，ΔE_a(PEAI-control) 应与 Br 含量正相关，因为控制膜晶界活度与 Br/Cs 含量成正比；(d) 对等价 MBG (MAPbI3) 膜做同样 PEAI，ΔE_a 应显著小（论文隐含但未显式测），否则"WBG 特异性"论断被证伪；(e) TAS 测到的 E_a 应等于 DFT 表面计算值而不是体相值（论文正好观察到这点），如果 TAS 结果接近体相 I- 的 ~0.3 eV，则说明 TAS 实际测的不是表面通道。

## 8. 设备改进钩子

一、**把 PEAI 改为溶剂变量**：2 mg/mL in IPA 只是一个工作点，可系统扫描溶剂（IPA / 乙醇 / 甲醇 / 氯苯混 IPA / 丙酮），观测 ΔE_a 对残留溶剂的敏感度。
二、**与 solvent engineering 上游工艺联动**：先用 DMSO:DMF 不同比例做 anti-solvent 得到不同晶界密度的 WBG 膜，再统一用 PEAI 处理，看 ΔE_a 是否随晶界面积下降而减小，以此判定 PEAI 的靶点是否真是晶界。
三、**加原位温度加速老化**：65 °C + 1 sun MPP 下测 E_a 漂移，把 E_a 作为稳定性的预测指标。
四、**2D/3D 界面识别**：配 GIWAXS 原位测 n=1 PEA2PbI4 形成与否，区分"纯分子钝化"与"2D/3D 异质结"两种子机制。
五、**叠层端校验**：4-T 24.1% 可继续推 2-T 单片叠层，验证在 ICL 退火（常 >100 °C）后 PEA 层是否仍保留高 E_a。

## 9. 对博士研究的启示

Solvent engineering 想要复刻 Chen 2020 的机制量化级别，博士可把"芳铵钝化"替换为"溶剂/抗溶剂"作为自变量，方法完全迁移：

第一，**同一 TAS 平台做溶剂矩阵**。固定 FA0.8Cs0.2Pb(I0.7Br0.3)3 成分和器件架构，只改变前驱体溶剂体系（DMF:DMSO 4:1 / 9:1 / 纯 DMSO / DMF:NMP / GBL:DMSO）、anti-solvent（氯苯 / 甲苯 / 乙醚 / 乙酸乙酯 / DEE）和旋涂参数。对每一溶剂组合跑 250–300 K TAS，抽 E_a。目标是找到 solvent-specific ΔE_a ≥ 100 meV 的"溶剂窗口"，作为可发表的量化锚点。Chen 2020 的 TAS 协议（每 10 K 一步、dC/df 峰频率、ω_peak = ξT²exp(-E_a/kT)）可直接照搬，无需设备改动。

第二，**把 c-AFM 作为溶剂效果的空间解剖工具**。Chen 2020 用 c-AFM 分辨 J_GB vs J_GI，博士做 solvent engineering 时可用同一技术证明某溶剂是"把晶界做干净"还是"把晶粒做大"还是"两者都发生"，这是区分"改变 GB 化学"与"改变 GB 密度"两类机制的关键。

第三，**溶剂 × PEAI 正交矩阵**。把溶剂 engineering 和 PEAI/芳铵钝化当作两个正交维度做析因实验，看 ΔE_a 是否线性叠加（说明两机制独立）还是饱和（说明同靶点）。若饱和，则溶剂已经解决了 PEAI 所解决的那部分晶界 I 间隙问题，博士可据此发表"溶剂本身就是一种离子迁移抑制剂"的角度。

第四，**借用 DFT 协议**。Chen 2020 的 I 间隙 NEB 表面模型在 VASP 里复现不困难；博士可加变量"残留溶剂分子（DMSO/DMF）锚在 Pb 顶"的 NEB，算溶剂配位如何改变 I 间隙扩散路径 E_a。这是一条"为什么 DMSO 工艺 E_a 更高"的机制级解释路线。

## 10. 未来方向

顺着本文可延伸：(1) 在 2-T 单片叠层里原位追踪 PEAI 层老化，看 E_a 的时间稳定性；(2) 把 TAS 与光致位移电流（optical pump-ionic-response）联用，区分光诱导与电诱导离子通道；(3) 扩展到 Br 间隙、Br 空位、Cs 间隙的能垒计算，回答 WBG 相分离的离子学根源；(4) 与机器学习筛选高 E_a 芳铵/铵盐组合；(5) 与 solvent engineering 联动建立"溶剂 + 芳铵"的双钝化工艺包。

## 11. 与其他方向3论文的对照

Yuan & Huang 2016 综述里把"晶界是主通道、界面钝化是主策略"写成方向性断言，Chen 2020 正是在 WBG 上用 TAS+DFT+c-AFM 三重证据把这一断言从 MAPbI3 推广到 (FA,Cs)(I,Br) 体系，其给出的控制态 E_a = 0.68 eV 落在综述整理的 I- 迁移 0.27–0.68 eV 区间高端，处理后 E_a = 0.905 eV 比综述任何单一文献都高，是"界面钝化可以把 E_a 推高近 1 eV"的代表性工作。

Futscher 2018 瞬态电容把离子密度和扩散系数定量化，与 Chen 2020 的 TAS 互补——Futscher 更擅长分离不同离子种类，Chen 擅长表面 vs 体相；博士做 solvent engineering 时可两者并用，把 E_a、D、N_ion 三参数同时当作"溶剂 fingerprint"。

Dey 2023 Sn 部分取代走的是"修饰体相结构"路径，与 Chen 2020 的"只钝化表面"形成正交对比：Dey 把体相 E_a 压下去而不碰界面，Chen 把界面 E_a 顶上去而不动体相。博士可借此设计对照实验：同一溶剂工艺下分别 Sn 取代和 PEAI 钝化，看 V_OC 亏损和 MPP 稳定性哪一路更稳。

Pothoof/Akrami 2023 APTMS 与 Chen 2020 同属"分子层钝化界面抬 E_a"路线，但 APTMS 是硅烷偶联剂走共价键策略，PEAI 是氨基离子自组装走 2D 钙钛矿前驱策略；两者在 E_a 数值上都落到 0.9–1.0 eV 区间，说明不管化学不同路径到达的能垒"天花板"惊人接近——这个数值本身可能反映 WBG 表面层 I 间隙挤入 Pb-I-Pb-I 环的几何能垒上限。

Kim 2022 原位 SEM 在更直接的空间域验证了 Chen 2020 的 c-AFM 推断：离子堆积确实发生在晶界，且 PEAI/芳铵层处理后晶界离子聚集被显著抑制。Kim 2022 的方法限制（真空、室温）使其更适合做"验证"而非"工艺筛选"，所以在博士溶剂工程矩阵里 Kim 的工具可用作终端确认，Chen 的 TAS+c-AFM 组合则是高通量前端。
