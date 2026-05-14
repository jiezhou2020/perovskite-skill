---
folder: dir2_phase_segregation
topic: 混卤钙钛矿光致相分离 / solvent 工程 / 控制策略
count: 19
last_updated: 2026-05-15
---

# dir2 · 相分离 · 19 篇一览

> 历史脉络：2026-05-06 之前 10 篇为奠基现象 / 热力学 / 压力工程 / 动态调制；2026-05-12 至 14 补齐 4 个文献矛盾的源头论文（**Brivio 2016 / Chen 2021 / Peng 2023 / Fan 2025 / Draguta 2017 / Zhao 2017 / Hu 2026**）。19 篇覆盖 PIPS 完整理论 + 实验 + 综述生态。

## 快速检索表

| # | 论文（作者_年份） | 核心一句话 | 最关键锚点 | 深读 |
|---|---|---|---|---|
| 1 | **Brivio_2016** ⭐ | **C1 矛盾源头**：DFT + QCA 算 MAPb(I,Br)₃ miscibility gap 0.19 < x_Br < 0.68；critical T_c = 343 K | 热力学合金理论的 PVK 引入；funneling 理论的基础 | — |
| 2 | Hoke_2015 | **PVK 光致相分离奠基论文**（C4 矛盾的"完全可逆"一侧）| Br:I > 1:4 阈值；PL 暗态完全重混；Chem Sci 6, 613 | ✓ [深读](../../analysis/dir2_hoke2015.md) |
| 3 | **Draguta_2017** | **funneling 概念奠基**：低 Eg I-rich 域吸引载流子降低 F_light，驱动相分离 | DFT + 实验阈值；论 V_D 调控可抑制；Nat Commun 8:200 | — |
| 4 | Tang_2018 | **C2 矛盾的"晶界一侧"**：confocal PL + KPFM，I → grain boundary（MAPb, x_Br=0.3）| Br:I 1:10 阈值；GB 处正空间电荷；Nano Lett 18:2172 | ✓ [深读](../../analysis/dir2_tang2018.md) · [批评](../../analysis/dir2_tang2018_critique.md) |
| 5 | Tiede_2020 | **C4 矛盾的"缺陷 memory"一侧**：CW+脉冲双光源 + R_H 化学计量调控 | R_H↑ → k_growth↓ + k_recovery↑；I-rich 范围 ≫ 光照区；JPCL 11:4911 | — |
| 6 | Muscarella_2020 | **0.3 GPa 静水压 ≈ 3% 化学压力 ≈ Cs 替代**，相分离速率 ↓30× | k_seg 27–33×；I 迁移势垒 +64 meV；E_a 前向 0.27–0.30 eV | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 7 | Zhao_2017 ⭐ | **应变即不稳定性**：薄膜 0.3% 应变 vs 单晶 0.0004%，应变加速光致离子迁移 | 热膨胀失配生成各向应变；面内拉应力 / 面外压应力；Sci Adv aao5616 | — |
| 8 | Zhao_2020 | **LHS 在 Br<50% 是应变激活、Br>50% 才是本征** | Fig.4: 35%Br GB only / 65%Br whole film；W-H 应变 0.3 vs 0.0004%；Nat Commun 11:6328 | ✓ [节段引用](../../note_2026-05-06_PL_mapping_phase_segregation.md) |
| 9 | **Chen_2021** ⭐ | **C1 矛盾的一侧**：unified theory，funneling 自由能 F_light = nE_g；预测阈值 1750 W/cm² 偏 50× | 5 化合物相图 + 三相点；x_terminal = 0；Nat Commun 12:2687 | ✓ [批评](../../analysis/dir2_chen2021_critique.md) |
| 10 | Bai_2022 | **硒吩添加剂均质化 FA/Cs 阳离子分布，抑制相分离；3190 h MPP > 91%** | FAxCs1-xPbI3；Schelling 模型；Science abn3148 | — |
| 11 | Feng_2023 | **周期加热（ΔT=10 °C 秒级摆动 + 10% 占空比）可在 50 W/cm² 下完全抑制相分离** | ΔT=10 °C；最优脉冲 t/T=0.5/5 s；180 s 零相分离 | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 12 | Ruth_2023 | **C1 矛盾另一侧 + 完整 thermo 模型**：U_I,Br = 39 meV，I_th 20–200 μW/cm²；与 Chen 差 10⁷× | x_terminal, I_th, KMC kinetics 一揽子解析；Brennan/Kuno 框架 | ✓ [批评](../../analysis/dir2_ruth2023_critique.md) |
| 13 | **Peng_2023** ⭐ | **C3 矛盾源头**：PFM 数值显示 funneling 弱 1000×，必须加 G_sep 唯象项 | cryo-STEM-CL 看到 spinodal 颗粒 ~250 nm；G_sep 物理起源未明；Matter 6:2052 | ✓ [批评](../../analysis/dir2_peng2023_critique.md) |
| 14 | Fang_2024 | **WBG 相分离综述：热力学 / 极化子诱导应变 / 电场驱动 三模型并列** | 极化子带隙漏斗 + 高密度反转；GB 重灾区；DOI 10.1002/adfm.202404402 | ✓ [中文](../../full_translation_fang_2024.md) · [报告](../../reading_report_fang_2024.md) |
| 15 | **Fan_2025** ⭐ | **C2 矛盾的"晶心一侧" + C4 应变 memory**：plunge-freeze cryo-EM + EELS + 4D-STEM | I → grain center（CsPb, x_Br=0.7）；4% 各向异性应变残留；Cell Rep Phys Sci 6:102653 | ✓ [批评](../../analysis/dir2_fan2025_critique.md) |
| 16 | Kim_2025 | WBG 综述 — 创新与近期进展 | Small Methods 综述 | — |
| 17 | Yu_2026 | **From Part to Whole**：subcell 视角下相分离推进综述 | ACS AMI；与 Zhang 2026 互补 | — |
| 18 | **Hu_2026** ⭐ | **2026 最新 PIPS 综述**：机制 + 抑制策略 + 器件性能优化 | ACS AMI 18:10725-10742；现代 PIPS 抑制方法全总览 | — |
| 19 | Zhang_2026 | **PSTSCs 视角下的相分离 — 组分/界面/添加剂工程综述** | 1.65–1.75 eV WBG；2T/3T/4T 架构敏感度；Sust Chem Energy Mater | — |

> Tian 2022（卤素分离可视化技术综述）→ 见 `../dir4_characterization_decoupling/`

## 三条正交控制轴对比

| 轴 | 代表 | 抑制效果 |
|---|---|---|
| 组分/维度/载流子数 | Ruth 2023 | I_threshold 覆盖 3–4 数量级 |
| 压力/晶胞体积 | Muscarella 2020 | k_seg ~30× 下降 |
| 温度动态调制 | Feng 2023 | 完全抑制（ΔT=10 °C） |

## Solvent engineering 的位置

> **天然属于化学压力轴**（Muscarella 的 Cs⁺ 替代路径推广），可能通过前驱体配位引入残余压应力；**有可能跨进 Ruth 的载流子数轴**（改 V_D/τ）；**原则上不能做 Feng 的动态扰动路线**。

可证伪实验（博士课题切入点）：挑 3-4 种 solvent 配方，测 ΔV/V₀ (XRD)、V_D (PL 线宽)、τ (TRPL)，代入 Ruth Eq. 20 预测 I_threshold，再 I_exc 扫描验证。若落在 Muscarella 主曲线上 → solvent 是化学压力的推广；若偏离 → solvent 触发了 Ruth 模型外的独立轴（最可能是界面能或 Amat 2014 揭示的氢键-倾转轴）。

## 相关分析文件

- `../../analysis/dir2_hoke2015.md` — Hoke 2015 深读
- `../../analysis/dir2_tang2018.md` — Tang 2018 深读
- `../../analysis/dir2_tang2018_critique.md` — Tang 2018 正式批评（证伪式审视 + SL-PCI 实验清单）
- `../../analysis/dir2_chen2021_critique.md` — Chen 2021 正式批评（理论 funneling 0D 框架的 50× 阈值偏差 + Strain 后置补丁问题）
- `../../analysis/dir2_peng2023_critique.md` — Peng 2023 正式批评（cryo-STEM-CL 单晶岛 spinodal；funneling 弱 1000× 是 Chen 的实验内嵌证伪；$G_{sep}$ 唯象项的物理起源未解）
- `../../analysis/dir2_fan2025_critique.md` — Fan 2025 正式批评（plunge-freeze cryo-EM + 同区 EELS/4D-STEM；I→晶心 vs Tang 矛盾的组分依赖反转假设；SL-PCI 在 dir2 方法学最近先行者）
- `../../analysis/dir2_lu2025.md` — Lu 2025 深读（跨方向 1/2）
- `../../analysis/dir2_amat2014.md` — Amat 2014 深读（跨方向 1/2）
- `../../phd_phase4_literature_deep_read.md` — Feng / Muscarella / Ruth 深读
