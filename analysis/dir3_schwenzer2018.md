---
name: Schwenzer2018-TempCyclingPSC
direction: 方向3-离子迁移
date: 2018
doi: 10.1021/acsami.8b01033
source_pdf: 2.schwenzer2018_Ion.pdf
---

# Temperature Variation Induced Performance Decline of Perovskite Solar Cells

**作者 / 年份 / 期刊**：Jonas A. Schwenzer, L. Rakocevic, R. Gehlhaar, T. Abzieher, S. Gharibzadeh, S. Moghadamzadeh, A. Quintilla, B. S. Richards, U. Lemmer, U. W. Paetzold / 2018 / ACS Applied Materials & Interfaces

## 1. 研究动机 (Why)

户外 PSC 承受的是温度"循环"而非恒温，前人工作要么在暗态做 −40 ~ 85 °C 循环（Cheacharoen），要么让器件长时间停在极端高温（Domanski），无法分离"温度变化本身"对离子分布的冲击。

作者想在光照 + 恒电压 + 稳态跟踪三条件齐备下，找出循环温度对 V_OC、J_SC、J@MPP 的真实影响，并确认此损失是否可逆、是否指向离子堆积。

## 2. 核心主张 (What, 1 句)

在光照 MPP 条件下对 MAPI PSC 施加 10–60 °C 温度循环时，J_SC 可在 ~140 min 内掉到初值的 20% 以下，这一损失对应 R_S 升高、可通过 V_OC 下光浸 600 min 完全恢复，归因于温度变化驱动的离子向选择性接触界面堆积。

## 3. 方法 (How)

器件：glass/ITO/e-beam TiO2 (20 nm) 或溶液 SnO2 / MAPI (Pb(OAc)2·3H2O + PbCl2 + MAI, DMF, 3000 rpm, 130 °C/10 min) / Spiro-OMeTAD (Li-TFSI + tBP doping) / Au 60 nm；面积 0.105 cm²；同时做 FA/MA 双阳离子和 Cs/FA/MA 三阳离子对照。

测试：Peltier 控温平台 + Keithley 2400 + AM1.5G 氙灯；每 7 min 升/降 5 °C，在 V_OC / J_SC / 固定偏压 0.8 / 0.4 / 0 / −0.4 V 下连续记录；另用实地 225 cm² 组件的户外温度曲线（35–55 °C，步进 ≤2.5 °C/min）回放 4 h；恢复测试为 V_OC 下光浸 ≤600 min 并扫 J-V。

## 4. 量化锚点 + 突破（4-8 条带单位）

- β_Voc = −1077 ppm/°C 平均（范围 −900 ~ −1200 ppm/°C，5 器件统计），显著小于 c-Si 的 −3000 ppm/°C 和 GaAs 的 −2160 ppm/°C；与 Dunbar 的 −2850 ppm/°C 差 2.5 倍。
- 10–60 °C 循环下 V_OC 绝对降 ≈ 57 mV（线性）。
- 恒温 15–55 °C 下 J_SC 稳定在初值 78–90%（80 min 达稳），但在 10–60 °C 循环下 J_SC 于 ~140 min 掉到 <20%（终值 <4 mA/cm²，初值 ~20 mA/cm²），两者温域一样，仅"循环 vs 恒定"区别即可致 4 倍跌幅差。
- 电压依赖：25–40 °C 循环下 −0.4 V 偏压降 43%、0 V 降 ~30%、0.4 V 降 ~20%、0.8 V 仅降 3%；MPP 附近（~0.8 V）损失最小。
- 户外温度回放（35–55 °C，4 h，2.5 °C/min）：V_OC 相对降 5%（~50 mV），MPP 下 PCE 相对降 >15%；同时段 25 °C 恒温对照仅降 <5%。
- 恢复：−0.4 V 最重应力器件，V_OC 光浸 600 min 可完全恢复初始 J-V；V_OC 几乎瞬时恢复，J_SC 1–70 min，FF 10–600 min；暗态存放不恢复。
- R_S：−0.4 V 应力后 R_S > 1000 Ω，光浸 600 min 降回 ~60 Ω；0.8 V 应力 R_S 无变化。

## 5. 解决的问题

澄清了文献中 J_SC 温度系数的"假象"——以往 J-V 扫描得到的温度依赖其实被离子重分布混淆，恒温稳态下 J_SC 的实际温度系数应与光吸收/带隙弱耦合。

给出"温度循环 ≠ 恒温平均"的经验证据：把恒定 25 °C 与同温域循环拆开测，证明损失驱动源不是热本身而是 ∂T/∂t。

建立"V_OC 下光浸恢复 + R_S 增—降轨迹"作为离子堆积而非真实化学降解的判据。

## 6. 局限

机制解释为"唯象 + 能带示意图"，无 TOF-SIMS、XPS、阻抗谱直接证据显示是哪种离子（I⁻、MA⁺、Li⁺）在哪个界面累积。

仅在 MAPI/TiO2/Spiro 一个主架构上做了统计（n=5），SnO2 与多阳离子只给定性比较，未给活化能、迁移率等可比量。

温度循环步宽/速率的参数空间未扫全，缺少 E_a 萃取，难与其他方向3工作直接量化对照。

Li-TFSI 作为额外可迁移物种的贡献仅通过"弱 hysteresis"间接排除，没有用无 Li 的 HTL 做反证。

## 7. 可证伪判据

若把 Spiro/Li-TFSI 换为 PTAA 或 SAM（无 Li⁺）后，循环诱导的 R_S 抬升和 J_SC 崩塌仍然出现且幅度相近，则 Li⁺ 不是主因；反之若显著改善则 Li⁺ 占主导——作者未做但可被证伪。

若把 TiO2 替换为 C60/SnO2 后 J_SC 循环衰减从 80% 变小到 <10%，则"ETL 界面是离子堆积主位"成立；作者已给定性 SnO2 改善的方向性证据，但缺量化。

若在 MPP (V_MPP ≈ 0.8 V) 下长期循环仍诱发 >10% PCE 损失，则"高 V_MPP 豁免"的命题伪；作者 4 h 户外曲线下已见 >15% 损失，这本身就是对"MPP 附近免疫"的弱证伪——表明 V_MPP 仅比 short-circuit 好，但并非豁免。

"光浸恢复"应当在 E_a ≈ E_a(离子) 的温度依赖特征时间下完成；若改为低温暗态也能恢复，则不是光驱动的电子-离子再平衡机制。

## 8. 设备改进钩子

界面钝化（PEAI、2D 盖层、SAM、富勒烯衍生物）可直接检验其对 ΔR_S(cycle) 的压制——把作者定义的"循环 140 min 后 J_SC/J_0"当作单一读数指标。

ETL 选择：从 e-beam TiO2 迁至低温溶液 SnO2 + 卤素处理、SnO2/C60 双层，观察 β_Voc 是否保持 ~−1000 ppm/°C 而 J_SC 循环崩塌系数明显下降。

HTM 去锂化（PTAA、SAM-MeO-2PACz）直接判断 Li⁺ 贡献。

作者端建议：高 FF → 高 V_MPP → 低 E_built-in → 小离子驱动力；这与"溶剂工程拉大晶粒、降缺陷密度 → FF 上升"的路径内在一致。

## 9. 对博士研究的启示（特别: solvent engineering 如何改造方法/参数）

本文把"温度循环 + 恒电压 + 光照"组合成可复现的离子迁移放大器——这是博士生做 solvent engineering 的天然 benchmark：任何新溶剂（如 DMSO/GBL、ACN/MA 气氛、绿色溶剂 DMPU、2-methoxyethanol）所得器件都应该进这套 10–60 °C × 7 min/step × 0 V/−0.4 V 的协议跑 140 min，报同一张 J_SC(t)/J_SC(0) 曲线，才能与此文直接对照。

作者诊断指标应改造成两个数字：(i) ΔR_S(cycle) ≡ R_S(140 min, −0.4 V, cycle) / R_S(0)；(ii) t_recover(50%) ≡ V_OC 光浸下 PCE 恢复 50% 所需时间。溶剂工程的目标应是最小化前者、最小化后者。

由于该文没给 E_a，博士生可在其协议基础上补两层：固定温度下的 J_SC(t) 取 τ_slow，随 T 作 Arrhenius → 得到本体/界面离子 E_a；再叠加溶剂工程得到的 ΔE_a，这是对"溶剂工程→离子迁移 E_a"最直接的因果证据。

溶剂选择应瞄准：(a) 压抑 DMF 残留（作者 precursor 仍为 DMF，高残留态被报道与卤素空位相关）；(b) 通过 DMSO/thiourea/MACl 等添加剂增大晶粒、降低晶界迁移通道；(c) 使用反溶剂调控（CB/TL/乙酸乙酯）拉宽结晶窗口——这些手段的效果可用本文的 β_Voc、ΔR_S(cycle)、光浸恢复时间三参数联合读出。

界面工程侧：如作者所言 V_MPP 要做高才能降 E_built-in，这与溶剂工程得到的高 FF 器件协同——博士生应建立"溶剂 → FF → V_MPP → 循环免疫性"的耦合链路。

## 10. 未来方向

用原位光电流-阻抗联合 + PL 成像，将"R_S 上升—离子堆积—非辐射复合上升"三者绑定到同一时间轴。

建立 ETL/HTM 材料图谱：报告每种选择下的 β_Voc、J_SC 循环衰减、恢复时间，作为标准"温度循环免疫表"。

建模方向：耦合 Ebuilt-in(T)、μ_ion(T)、Epol(t) 的漂移-扩散模型，预测任意温域循环下的 J_SC(t)，并校准于本文曲线。

两端串联叠层的温度循环实验——作者已预警 2T 叠层将受更严重影响，因为电流失配 + 离子诱导 J_SC 损失双重叠加。

## 11. 与其他方向3论文的对照（Futscher 2018 / Pothoof 2023 / Akrami 2023 / Dey 2023 / Kim 2022 / Yuan&Huang 2016 / Chen 2020）

与 Yuan & Huang 2016（综述）：Yuan&Huang 把离子迁移确立为 PSC 普适内禀过程并给出 I⁻/MA⁺ 的 E_a 量级（0.1–0.8 eV）；Schwenzer 在其基础上给出器件级、非破坏的温度循环指纹——前者提供原子级机制，后者提供运维级可观测量。

与 Chen 2020：Chen 用大尺寸 MAPbBr3 单晶在暗态高温（>330 K）通过 I-V/瞬态 C-V 提取 I⁻ E_a ≈ 0.20–0.35 eV；Schwenzer 未给 E_a 但报 β_Voc 仅 −1077 ppm/°C（弱复合温敏）与 Chen 的小 E_a 一致——都指向低活化能 I⁻ 空位为主导可动物种。

与 Futscher 2018（瞬态电容/脉冲方法）：Futscher 给出混合阳离子体系内快/慢两类离子的密度和扩散系数；Schwenzer 的"R_S 恢复双时间常数（J_SC ~1–70 min，FF ~10–600 min）"可直接映射 Futscher 的两类离子——Schwenzer 缺少 Futscher 那种瞬态建模拟合，是互补关系。

与 Kim 2022：Kim 通过 SAM/自组装分子层改造界面，显著压抑 I⁻ 界面堆积；Schwenzer 的 β_Voc 变化和 R_S 抬升恰好可作为 Kim 类界面工程改进的读数——是"问题-解"对。

与 Akrami 2023 / Dey 2023：这两篇聚焦 A 位/B 位替换（FA/Cs/Rb、Sn 合金）与溶剂/添加剂调制下 E_a 的变化；Schwenzer 的协议作为其器件级验证层是必要的——仅报稳态 PCE 或 J-V 会漏掉循环放大效应。

与 Pothoof 2023（光照强度依赖的 μ_ion）：Pothoof 展示光照让 μ_ion 上升；Schwenzer 的协议是"光 + 温度循环"联合——本文的严重损失部分来自光促 μ_ion 与温循放大的叠加，Pothoof 对其机制的光学组分是直接解释。

统一读图：本文提供的三参数（β_Voc、ΔJ_SC/ΔR_S on cycling、t_recover）可作为方向3 论文间横向比较的"器件端最小三联"，其他偏物理/原位工作可把自己的 E_a、μ_ion、N_ion 映射到这三个器件指标上。
