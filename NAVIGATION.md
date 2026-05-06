# 项目总导航

**最后更新**：2026-05-06

## 当前博士方向

**dir4 · 表征解耦相分离驱动**（新主线，2026-05-06 起）

旧主线 dir1（蓝移/EPC 解耦）保留作方法学参考，不再作为执行目标。新方向沿用"解耦"思路，把对象从蓝移驱动换成相分离的三机制驱动（热力学 / 极化子诱导应变 / 电场驱动，见 Fang 2024），落地手段是表征。

旧方向计划：`research_plan_egdt_decomposition_v2.md` · 新方向计划：待起草

---

## 论文索引（55 篇，按方向）

✓ = 已深读并有报告 ｜ — = 仅入库未深读

### dir4 · 表征解耦（新主线，2 篇）→ `papers/dir4_characterization_decoupling/`

| 作者_年份 | 标题 | 期刊 | 一句话 | 深读 |
|---|---|---|---|---|
| Qu_2026 | Probing surfaces and interfaces of halide perovskites: from atomic mapping to optoelectronic properties | EES Solar | SPM/AFM/KPFM/SNOM/PL-AFM/AFM-IR/SPVM/tr-/pp-KPFM 综述 | — |
| Tian_2022 | Halide Segregation in Mixed Halide Perovskites: Visualization and Mechanisms | Electronics 11:700 | 卤素分离可视化技术综述（PL mapping/CL/TEM-EDS/AFM）+ 机制 | — |

### dir2 · 相分离机制（10 篇）→ `papers/dir2_phase_segregation/`

| 作者_年份 | 标题 | 期刊 | 一句话 | 深读 |
|---|---|---|---|---|
| Hoke_2015 | Reversible photo-induced trap formation in mixed-halide hybrid perovskites for photovoltaics | Chem. Sci. | 奠基论文：Br:I > 1:4 阈值，可逆暗态重混 | ✓ `analysis/dir2_hoke2015.md` |
| Tang_2018 | Local observation of phase-segregation in mixed-halide perovskite | Nano Lett. | 局域微区光谱直接空间可视化（sub-μm） | ✓ `analysis/dir2_tang2018.md` |
| Muscarella_2020 | Lattice compression increases the activation barrier for phase segregation in mixed-halide perovskites | arXiv | 0.3 GPa 静水压使 k_seg 下降 ~30× | ✓ `phd_phase4_literature_deep_read.md` |
| Zhao_2020 | Strain-activated light-induced halide segregation in mixed-halide perovskite solids | Nat. Commun. 11:6328 | shear-force SPM + 共聚焦 PL 200 nm；35%Br 应变激活 LHS、65%Br 本征；Fig. 4 关键 | ✓ `note_2026-05-06_PL_mapping_phase_segregation.md` |
| Tiede_2020 | Local Rearrangement of the Iodide Defect Structure Determines the Phase Segregation Effect in Mixed-Halide Perovskites | JPCL 11:4911 | CW+脉冲双光源 + LSCM 谱分辨；R_H 化学计量调控；碘缺陷重组主导 | — |
| Bai_2022 | Initializing film homogeneity to retard phase segregation for stable perovskite solar cells | Science 378:747 | 硒吩添加剂均质化 FA/Cs；3190 h MPP >91% | — |
| Feng_2023 | Complete Suppression of Phase Segregation in Mixed-Halide Perovskite Nanocrystals under Periodic Heating | arXiv | ΔT=10 °C 周期加热 50 W/cm² 完全抑制 | ✓ `phd_phase4_literature_deep_read.md` |
| Ruth_2023 | A thermodynamic band gap model for photoinduced phase segregation in mixed-halide perovskites | arXiv | 热力学带隙模型统一预测 x_terminal/I_threshold | ✓ `phd_phase4_literature_deep_read.md` |
| Fang_2024 | Overcoming Phase Segregation in Wide-Bandgap Perovskites: from Progress to Perspective | Adv. Funct. Mater. | WBG 相分离综述：极化子诱导应变 + 电场驱动模型 | ✓ `reading_report_fang_2024.md`、`full_translation_fang_2024.md` |
| Zhang_2026 | Phase segregation mechanism and suppression in wide-bandgap perovskites toward efficient and stable perovskite/silicon tandem solar cells | Sust. Chem. Energy Mater. | PSTSCs 视角综述：组分/界面/添加剂工程 | — |

### dir1 · 蓝移解耦（旧主线，16 篇）→ `papers/dir1_blueshift_decoupling/`

| 作者_年份 | 标题 | 期刊 | 一句话 | 深读 |
|---|---|---|---|---|
| Amat_2014 | Cation-Induced Band-Gap Tuning in Organohalide Perovskites: Interplay of Spin-Orbit Coupling and Octahedra Tilting | Nano Lett. | 阳离子-SOC-倾转共调带隙 | ✓ `analysis/dir2_amat2014.md`（跨 dir1/2） |
| Singh_2016 | Effect of Thermal and Structural Disorder on the Electronic Structure of Hybrid Perovskite Semiconductor CH3NH3PbI3 | JPCL | 热+结构无序先驱（区分静态/动态） | ✓ `analysis/dir1_singh2016.md` |
| Bertolotti_2017 | Coherent Nanotwins and Dynamic Disorder in Cesium Lead Halide Perovskite Nanocrystals | ACS Nano | CsPbX3 NC 八面体倾转动态无序 + nanotwin | — |
| Yang_2017 | Temperature Induced Large Broadening and Blueshift in the Electronic Band Structure and Optical Absorption of MAPbI3 | JPCL | EPI 主导（第一性 AHC） | ✓ `analysis/dir1_yang2017.md` |
| FranciscoLopez_2019 | The Equal Footing of Thermal Expansion and Electron-Phonon Interaction in the Temperature Dependence of Lead Halide Perovskite Band Gaps | JPCL | TE:EPI = 60:40 基准 | ✓ `analysis/dir1_franciscolopez2019.md` |
| ParkSeok_2019 | Intrinsic Instability of Inorganic-Organic Hybrid Halide Perovskite Materials | Adv. Mater. | 内在不稳定性综述（跨 dir1/3） | ✓ `analysis/dir1_parkseok2019.md` |
| Zhao_2019 | Size-Dependent Lattice Structure and Confinement Properties in CsPbI3 Perovskite Nanocrystals: Negative Surface Energy for Stabilization | ACS Energy Lett. | CsPbI3 NC 尺寸依赖晶格-带隙 | — |
| Mannino_2020 | Temperature-Dependent Optical Band Gap in CsPbBr3, MAPbBr3, and FAPbBr3 Single Crystals | JPCL | 三种 APbBr3 单晶带隙温度依赖对比 | — |
| Oksenberg_2020 | Large lattice distortions and size-dependent bandgap modulation in epitaxial halide perovskite nanowires | Nat. Commun. | 应变畸变 NW 蓝移 | — |
| Mukhuti_2022 | Carrier thermalization and zero-point bandgap renormalization in halide perovskites from the Urbach tails of the emission spectrum | arXiv | CsPbBr3 ZPR 33 meV · Urbach focus | — |
| Jin_2022 | Strain Relaxation for Perovskite Lattice Reconfiguration | Adv. Energy Sustain. Res. | 应变弛豫→八面体倾转→光电性能综述 | — |
| Zhang_2023 | Revealing Unusual Bandgap Shifts with Temperature and Bandgap Renormalization Effect in Phase-Stabilized Metal Halide Perovskite Thin Films | Adv. Funct. Mater. | 静态 vs 动态畸变带隙重整化 | — |
| Lu_2025 | Lattice expansion of hybrid perovskite inhibits halogen interstitial generation and enhances solar cell performance | Nat. Commun. | 膨胀 ±1% 抑制卤素间隙（跨 dir1/2） | ✓ `analysis/dir2_lu2025.md` |
| Simpson_2025 | Octahedral Tilting in Perovskite Polytypes | Chem. Mater. | 多型倾转对称性 | — |
| Weadock_2025 ⚠ | Octahedral tilting and B-site off-centering in halide perovskites are not coupled | arXiv 2508.15607 | tilt vs off-center 对称性解耦（CsBBr3, B=Pb/Sn/Ge） | — |
| Houtput_2026 | Importance of nonlinear long-range electron-phonon interaction on the carrier mobility of anharmonic halide perovskites | arXiv 2603.10954 | 1e2ph 非线性 EPC ~10% · CsPbI3 | — |

> ⚠ `dir1_Weadock_2025_*.pdf` 实际作者是 Hylton-Farrington & Remsing（Rutgers），文件名"Weadock"可能历史误写。建议后续重命名为 `dir1_HyltonFarrington_2025_tilt-offcenter-decoupling.pdf`。

### dir3 · 离子迁移（11 篇）→ `papers/dir3_ion_migration/`

| 作者_年份 | 标题 | 期刊 | 一句话 | 深读 |
|---|---|---|---|---|
| YuanHuang_2016 | Ion Migration in Organometal Trihalide Perovskite and Its Impact on Photovoltaic Efficiency and Stability | Acc. Chem. Res. | 离子迁移奠基综述 | ✓ `analysis/dir3_yuanhuang2016.md` |
| Futscher_2018 | Quantification of Ion Migration in CH3NH3PbI3 Perovskite Solar Cells by Transient Capacitance Measurements | arXiv | I⁻ E_a = 0.29 eV 基准（瞬态电容） | — |
| Schwenzer_2018 | Temperature Variation Induced Performance Decline of Perovskite Solar Cells | ACS AMI | 温度循环 vs 恒温降解 4× | ✓ `analysis/dir3_schwenzer2018.md` |
| Chen_2020 | Arylammonium-Assisted Reduction of Open Circuit Voltage Deficit in Wide-Bandgap Perovskite Solar Cells: The Role of Suppressed Ion Migration | ACS Energy Lett. | 芳铵钝化 TAS+DFT（跨 dir2/3） | ✓ `analysis/dir3_chen2020.md` |
| Kim_2022 | Mapping the Pathways of Photo-induced Ion Migration in Organic-inorganic Hybrid Halide Perovskites | arXiv 2210.04426 | 原位 SEM 3D 离子路径 | — |
| Akrami_2023 | Kinetic Suppression of Photoinduced Halide Migration in Wide Bandgap Perovskites via Surface Passivation | arXiv | APTMS wide-BG 钝化 | — |
| Dey_2023 | Substitution of Lead with Tin Suppresses Ionic Transport in Halide Perovskite Optoelectronics | arXiv | Sn 取代 E_a >1.1 eV | — |
| Pothoof_2023 | Surface Passivation Suppresses Local Ion Motion in Halide Perovskites | arXiv | APTMS SKPM 5× 降低 CPD shift | — |
| Tayagaki_2023 | Temperature-dependent ion migration and mobile-ion-induced degradation of perovskite solar cells under illumination | Sol. Energy Mater. | E_a 0.27 eV · N_mobile 3× | ✓ `analysis/dir3_tayagaki2023.md` |
| Shi_2024 | Improving Thermal Stability of Perovskite Solar Cells by Suppressing Ion Migration | Small Struct. | 抑制迁移→热稳定 | — |
| Hu_2026 | Molecular press annealing enables robust perovskite solar cells | Science (Jan 2026) | MPA 抑制 V'_I/离子迁移；PCE 26.6% 认证 | — |

### related · 跨材料/工艺（6 篇）→ `papers/related_crossmaterial_instruments/`

| 作者_年份 | 标题 | 期刊 | 一句话 | 深读 |
|---|---|---|---|---|
| Cao_2021 | Electron-phonon coupling and electronic thermoelectric properties of n-type PbTe driven near the soft-mode phase transition via lattice expansion | PRB | PbTe 软模 + 晶格膨胀 EPC 解耦（跨材料平移参考） | — |
| Sihi_2022 | Evidence of phase stability, topological phonon and temperature-induced topological phase transition in rocksalt SnS and SnSe | JPCM | SnS/SnSe EPI 非线性带隙 + 拓扑（linewidth+lineshift 双拆解） | — |
| Almosni_2024 | Perovskite Solar Cells Made by a Self-Quenching Method Using a Volatile Perovskite Ink with Safer Alternatives to 2-Methoxyethanol | ACS AEM 7:11678 | 乙二醇醚替代 2ME 的自淬火工艺 | — |
| Asami_2024 | Comprehensive voltage-loss analysis and reduction of radiative recombination voltage loss in quantum-structured solar cells | Sol. Energy Mater. Sol. Cells 273:112957 | III-V QW 电压损失 detailed-balance 分析（可移植 PSC） | — |
| FAPbI3_2025 | Octahedral dynamics and local symmetry in hybrid perovskite FAPbI3 under thermal excitation | arXiv 2509.18617 | FAPbI3 热激发八面体动力学 | — |
| Xue_2025 | Phonon vibrational and transport properties of SnSe/SnS superlattice at finite temperatures | arXiv 2502.08074 | SnSe/SnS 超晶格 ML 力场 + anharmonic phonon | — |

### other · 综述/tandem（10 篇）→ `papers/other_reviews_tandem/`

| 作者_年份 | 标题 | 期刊 | 类型 |
|---|---|---|---|
| Wurfel_2005 | Physics of Solar Cells: From Principles to New Concepts | Wiley-VCH（书） | 教材 |
| Boyd_2018 | Understanding Degradation Mechanisms and Improving Stability of Perovskite Photovoltaics | Chem. Rev. | 退化综述 |
| Park_2018 | Research Direction toward Theoretical Efficiency in Perovskite Solar Cell | ACS Photonics | 效率路线图 |
| Koo_2018 | Sr Segregation in Perovskite Oxides: Why It Happens and How It Exists | Joule | 氧化物 Sr 分离综述（跨材料） |
| Mesquita_2019 | Temperature Impact on Perovskite Solar Cells Under Operation | ChemSusChem | T-operation 综述 |
| Aydin_2020 | Interplay between temperature and bandgap energies on the outdoor performance of perovskite/silicon tandem solar cells | Nat. Energy | tandem outdoor T |
| Sun_2022 | Temperature effect of photovoltaic cells: a review | Adv. Compos. Hybrid Mater. | PV-T 综述 |
| Chen_2022 | Regulating surface potential maximizes voltage in all-perovskite tandems | Nature | tandem surface potential |
| Wang_2023 | High-efficiency n-TOPCon bifacial solar cells with selective poly-Si based passivating contacts | Sol. Energy Mater. Sol. Cells 259:112458 | 硅 TOPCon 工艺 |
| Nie_2023 | Recent Advances in Wide-Bandgap Organic-Inorganic Halide Perovskite Solar Cells and Tandem Application | Nano-Micro Lett. 15:70 | wide-BG tandem 综述 |

---

## 跨方向关键指针

- `dir1_ParkSeok_2019_intrinsic-instability.pdf` — 同覆盖 dir3 离子迁移章节
- `dir1_Lu_2025_lattice-expansion.pdf` — 同覆盖 dir2 卤素稳定性
- `dir3_Chen_2020_arylammonium-suppression.pdf` — 同涉 dir2 宽带隙相分离
- `other_Aydin_2020_tandem-outdoor-T.pdf` — 三方向 + tandem motivation 桥
- `other_Nie_2023_wideBG-tandem-review.pdf` — PIPS 章节支撑 dir2
- `dir2_Fang_2024_wideBG-phase-segregation-review.pdf` — 三机制框架是 dir4 的 motivation 主轴
- `dir4_Tian_2022` / `dir4_Qu_2026` — KPFM/SPVM 章节支撑 dir3 的局域电场/离子迁移成像

---

## 跨论文综合分析（`analysis/`）

| 文件 | 内容 |
|---|---|
| `analysis/EXECUTIVE_SUMMARY.md` | 12 篇跨文件整合 |
| `analysis/RELATED_DECOUPLING_SURVEY.md` | 跨材料解耦 10 篇调研 |
| `analysis/DOWNLOAD_LIST.md` | 带 DOI 的下载清单 |
| `analysis/CLASSIFICATION_PREVIEW.md` | 40 篇分类预览（早期版本） |
| `analysis/PhD_Research_Plan_v2.0.md` | 旧方向 v2.0 研究计划（与根目录 v2 互为镜像） |
| `analysis/Dir1_Methodology_v1.0.md` | 方向 1 方法论 v1.0 |

---

## 研究计划与报告

| 文件 | 内容 |
|---|---|
| `research_plan_egdt_decomposition_v2.md` | 旧方向（蓝移）博士计划 v2.0 |
| `research_plan_egdt_decomposition.md` | 旧方向 v1（已被 v2 取代） |
| `phd_phase4_literature_deep_read.md` | Phase 4 深读报告（11 篇 arXiv，含 Feng/Muscarella/Ruth） |
| `reading_report_fang_2024.md` | Fang 2024 阅读报告 |
| `full_translation_fang_2024.md` | Fang 2024 中文全文翻译 |
| `note_2026-05-06_PL_mapping_phase_segregation.md` | PL mapping 能/不能 + Zhao 2020 Fig. 4 案例 + 带隙波长附录 |

---

## 其它文件

| 文件 | 内容 |
|---|---|
| `oral exam_260423_v1.0.pptx` | 答辩 ppt v1.0 |
| `papers/README.md` | 论文目录命名规则 + 完整索引（与本文件互补） |
| `*.txt`（根目录 6 个） | 早期论文原始文本提取（chen2020/hoke2015/tang2018/yang2017/yuanhuang2016/acs.jpclett.9b00876） |

---

> 维护规则：新论文加入或方向调整时，更新本文件 + `papers/README.md` + 对应 `papers/<dir>/INDEX.md`。memory 系统中 `project_phd_direction.md` 也需同步。
