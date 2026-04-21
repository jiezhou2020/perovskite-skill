---
name: Tayagaki2023-TempDepIonMigration
direction: 方向3-离子迁移
date: 2023
doi: 10.1016/j.solmat.2023.112387
source_pdf: 5.32173581151-s2.0-S0927024823002088-main(1).pdf
---

# Temperature-dependent ion migration and mobile-ion-induced degradation of perovskite solar cells under illumination

**作者 / 年份 / 期刊**：Takeshi Tayagaki, Kohei Yamamoto, Takurou N. Murakami, Masahiro Yoshita / 2023 / Solar Energy Materials and Solar Cells

## 1. 研究动机 (Why)

户外 PSC 温度会随光强漂移，但"温度依赖的离子迁移"如何在光照 + MPPT 运行下放大为不可逆能量损失，缺少分解——前人（含 Tammireddy 2022、Schwenzer 2018、Domanski 2017）只给了温度系数或单一环境证据。

作者要的是：把"可动离子浓度（快/慢两类）"作为可观测量，定位它随温度、随光照、随光-暗循环的变化，并把这些变化量直接链回 P_max 的下降与 MPPT 的失稳。

## 2. 核心主张 (What, 1 句)

对封装的 Cs/FA/MA 三阳离子 PSC，在 15–45 °C 间快离子和慢离子浓度均按 Arrhenius 上升（E_a ≈ 0.27–0.28 eV），升温放大"快离子 → 慢离子（深能级）"的转换，导致光照下功率下降加速、MPPT 透视响应变慢，并在 45 °C 光-暗循环下每圈能量产额累降 ~10 rel%。

## 3. 方法 (How)

器件：FTO/SnO2（O2 plasma 处理，100 Pa / 30 s）/ Cs0.05(FA0.83MA0.17)0.95Pb(I0.83Br0.17)3（400 nm）/ Spiro-OMeTAD（Li + tBP 掺杂）/ Au 5×5 mm²；玻璃封装 + UV 胶密封。

瞬态离子迁移电流协议：暗态 +1.5 V / 30 s 极化扰动 → 切到 0 V，记录回扩电流 30–80 s。30–33 s 积分定义"快离子"N_fast；33–80 s 定义"慢离子"N_slow。

MPPT：P&O 算法，电压步 10 mV，dt = 4 s，采样 100 ms；白 LED ~1 sun。温度 15/25/35/45 °C。

光-暗循环测试：~8 h 光照（45 °C）+ ~16 h 暗态（25 °C），3 圈，前后各补一轮 25 °C 对照。

## 4. 量化锚点 + 突破（4-8 条带单位）

- 快/慢可动离子浓度均遵循 N(T)=N0·exp(−E_a/T)，拟合得 E_a,fast = 0.27 ± 0.01 eV、E_a,slow = 0.28 ± 0.03 eV（两者近乎相同），与三阳离子文献值 ≈0.30 eV 吻合（MAPbI3 为 0.1/0.41 eV 的快/慢分裂）。
- 可动离子绝对值（本器件、图 2c）：N_fast ~10¹⁸ cm⁻³（15 °C）→ ~3×10¹⁸ cm⁻³（45 °C）；N_slow ~2×10¹⁷ cm⁻³（15 °C）→ ~6×10¹⁷ cm⁻³（45 °C）。
- P_max 的温度系数 ≈ −0.1 rel%/°C（15–45 °C 近似线性），15 °C 有明显光浸升（~15 mW/cm²，稳态），45 °C 同样 4 h 下 P_max 掉到 ~9 mW/cm²。
- MPPT 瞬态：15 °C 和 45 °C（后半段）出现 P(t) 阶跃-弛豫波纹，表示电流响应时间 > 电压步 4 s，MPPT 失锁；25 °C/35 °C 下稳定 → 提示 P&O 间隔需随温度/光照自适应。
- 光-暗循环（8 h 光 @45 °C × 3）：日能量产额从 ~83 到 ~65 → 54 mWh/cm² 依次下降（−9% 然后 −11% per cycle），且 25 °C 对照也从 A 到 E 掉下，指向不可逆成分。
- 循环后 N_slow 相对 N_fast 的比例显著抬升，表明"快 → 慢"单向积累是降解指纹。

## 5. 解决的问题

把 PSC 的"可动离子浓度"变成一个可重复、非破坏的器件级可观测量（瞬态极化-回扩电流），并把它与温度、光照、MPPT 行为、光-暗循环能量产额四张曲线直接绑定。

提出"慢离子 ≡ 由卤素空位（快离子）转化而来的深能级间隙缺陷"的解释，而非 A 位阳离子——证据是两类 E_a 近乎相同以及光下慢离子上升、暗态回降。

给出"MPPT 瞬态 P(t) 纹波"作为可动离子状态的现场诊断信号，从而把实验室指标直接延伸到现场运维。

## 6. 局限

只有单一三阳离子成分，未做成分扫描，难区分"E_a 是否被卤素组合主导"。

成功通过全部测序的仅剩 1 个器件（作者自陈同批有 >10 倍器件功率分散），统计基础弱。

N_slow 定义为 33–80 s 积分，>80 s 部分被忽略，作者承认慢离子密度被低估；另快离子暴涨时亦会污染慢离子积分——绝对值的系统误差不小。

所有"慢离子 = 卤素间隙深能级"的结论来自间接的 E_a 对比 + 光照演化，没有配合 DLTS/C-V 能级谱或 PL 寿命直接验证深能级属性。

光浸 + 升温在同一器件上连续施加，"温度效应"和"累积劣化"混杂——作者用 25 °C 对照做了弱控制但未完全解耦。

## 7. 可证伪判据

若在同成分不同制备（如无 Li 的 SAM HTL、或换 PTAA）的器件上，N_fast 与 N_slow 的 E_a 不再近乎相等而分裂为 0.1/0.4 eV 量级，则"快→慢同源 → 深能级间隙"解释的普适性不成立。

若 45 °C 光照 8 h 后立即做 80–300 s 长窗口瞬态回扩电流，观测到 N_slow 没有上升或反而下降，则"慢离子积累 = 降解"机制伪。

若 MPPT 间隔 dt 从 4 s 减到 50 ms，15 °C/45 °C 下波纹仍然出现，则 P&O 失锁不是慢离子时标所致，而是另有其他起因（接触/电极极化）。

若光-暗循环测试改为 25 °C 光照（去掉高温项），能量产额仍线性累降 ~10%/cycle，则温度不是主因；反之若恒 25 °C 下恢复、仅 45 °C 不恢复，则支持温度激活深能级形成的主张。

## 8. 设备改进钩子

瞬态极化-回扩电流协议（+1.5 V/30 s → 0 V/50 s）可作为博士生常规器件测试的标准化件。任何 solvent engineering / interface engineering 得到的新器件均产出 (N_fast, N_slow, E_a,fast, E_a,slow) 四元数字。

MPPT 波纹作为"离子时标探针"：在 dt 从 4 s 扫到 10 ms 的过程中，波纹临界消失对应的 dt_c 即慢离子响应时标的上界；此 dt_c 可作为单一数字的"器件就绪度"指标。

光-暗 24 h 协议（8 h 光 / 16 h 暗 × 3）+ 日能量产额累降速率（%/cycle），作为器件"离子诱发持久降解"筛选标尺；短于 ISOS 长测但敏感于离子机制。

明确"快离子→慢离子"转化的抑制目标：界面钝化/成分调优应同时降 N_fast(RT) 和慢化 dN_slow/d(cycle)。

## 9. 对博士研究的启示（特别: solvent engineering 如何改造方法/参数）

该文提供了博士生所需的最关键一把测量工具——瞬态离子迁移电流协议，可直接萃取 E_a 这一核心因变量。任何 solvent engineering 对 E_a 的调制都能被它直接读出。

溶剂工程改造路径一：在保持 Cs/FA/MA 成分不变的前提下，扫描溶剂（DMF-only / DMF:DMSO 4:1 / GBL:DMSO / 纯 DMSO / 绿色溶剂体系如 DMPU / 2-methoxyethanol），在 15–45 °C 重复测 (N_fast, N_slow, E_a)。预期 DMSO 比例越高、反溶剂时序越优，晶粒增大、晶界密度降低，对应 N_fast(RT) 下降、E_a 上升——这可直接成为溶剂工程→E_a 的因果链图。

溶剂工程改造路径二：添加剂扫描（MACl、MAAc、PbAc2、thiourea、MASCN），以该文的 Arrhenius 拟合 + 瞬态积分作为评价标尺，建立"添加剂 → E_a 增量"的定量表。

界面工程改造：PEAI/2D 盖层、SAM-2PACz 族替换 Spiro/Li，作者的 MPPT 波纹/无波纹对比（15 vs 25 °C）可作为是否成功抑制慢离子形成的单帧读图。

方法论移植：该文 E_a ≈ 0.27 eV（快）与 Schwenzer 的 β_Voc = −1077 ppm/°C 都属"低热敏、强离子"器件特征。博士生在新器件上应两者合报——低 β_Voc 若出现而 E_a 无显著抬升，说明体缺陷未动、仅界面改善；反之 β_Voc 与 E_a 同时抬升才是"本体 + 界面"双改。

建议把 Schwenzer 的 J_SC 循环协议 + Tayagaki 的瞬态 E_a 协议融合成一套 SOP：温度循环产生的 R_S 增量应与 E_a 上升呈 Arrhenius 关系；若偏离，说明存在非离子路径（化学反应、HTM 氧化等）。

## 10. 未来方向

把瞬态窗口从 80 s 延到 1000 s，正确捕捉 A 位阳离子的极慢迁移分量；用 DLTS/C-V 联测证明"慢离子 = 深能级"的能级位置。

成分图谱化：在 Cs/FA/MA、Br/I 配比、Sn/Pb 合金化三维空间里系统扫 E_a，构建"成分 → E_a → 长期能量产额"热力图。

把"每 cycle 能量产额累降 %"作为新的 figure of merit 写入 ISOS 协议扩展；对 PSC 模组做现场 MPPT 波纹监测实现在线诊断。

和 Pothoof 2023 的光依赖 μ_ion 联合建模：光 + 温 双因素下的 N_fast/N_slow(I_light, T) 完整图谱。

## 11. 与其他方向3论文的对照（Futscher 2018 / Pothoof 2023 / Akrami 2023 / Dey 2023 / Kim 2022 / Yuan&Huang 2016 / Chen 2020）

与 Futscher 2018：Futscher 提出用瞬态电容定量化混合阳离子 PSC 中快/慢两类离子；Tayagaki 改用瞬态极化-回扩"电流"积分法，原理同源、读数更直接。两者皆产出 (N, τ, E_a) 三联；Tayagaki 的 E_a,fast ≈ E_a,slow 与 Futscher 的"两类离子差别明显"形成张力，可能反映三阳离子化 vs MAPI 的本质差别。

与 Yuan & Huang 2016：Yuan&Huang 总结 I⁻ E_a ~0.1–0.6 eV、MA⁺ E_a ~0.8 eV；Tayagaki 的 0.27/0.28 eV 落在 I⁻ 窗口，且作者明确主张快慢离子均为卤素相关——与 Yuan&Huang 的阳离子主导图像不同，但与 Chen 2020 的 I⁻ 视角一致。

与 Chen 2020：Chen 在 MAPbBr3 单晶上 E_a(Br⁻)≈0.20–0.35 eV；Tayagaki 在混卤器件上 E_a ≈ 0.27 eV——两者跨样品/跨尺度一致地把主导物种定位到卤素。

与 Schwenzer 2018：Schwenzer 给出器件级温度循环损耗但无 E_a；Tayagaki 给出 E_a 但无显式温度循环。两篇互补：可用 Tayagaki 的瞬态协议读出 Schwenzer 曲线的机制参数，用 Schwenzer 的循环协议检验 Tayagaki E_a 对户外能量产额的可预测性。

与 Pothoof 2023：Pothoof 给出光照下 μ_ion 上升；Tayagaki 的"光下 N_slow 上升、暗态回落"直接是其器件级对应——二者共同支持"光 + 温协同扰动离子分布 → 能量降"。

与 Kim 2022（界面 / SAM HTL）：Kim 的 SAM 方案被 Tayagaki 协议读出将表现为 N_fast、N_slow 低 + E_a 高 + MPPT 波纹消失 + 光-暗循环能量累降 <1%/cycle——Tayagaki 为这类界面工程提供了定量打分板。

与 Akrami 2023 / Dey 2023（成分 / 溶剂）：两文的成分/添加剂调节策略可用 Tayagaki 的 (E_a, N_fast, N_slow, dE/d(cycle)) 四元数直接打分，形成横跨"材料 → 器件 → 运维"的连贯对照表。

统一读图：Futscher 与 Tayagaki 提供"离子定量化"入口；Chen 与 Yuan&Huang 提供"物种归属"；Schwenzer 提供"器件循环指纹"；Pothoof 提供"光激活耦合"；Kim/Akrami/Dey 提供"改进手段"。Tayagaki 的贡献是把"E_a 测量"下沉成 40 s 级的常规数字，使上述环路可被日常循环跑通。
