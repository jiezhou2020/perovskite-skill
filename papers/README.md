---
name: 论文文件夹 · 命名规则与索引
description: papers/ 目录下 44 篇 PDF 的组织方式、命名规则、完整索引
type: reference
date: 2026-04-21
---

# papers/ 目录 · 命名与索引

## 文件夹结构

```
papers/
├── dir1_blueshift_decoupling/       (16 篇)  方向1：蓝移/EPC/畸变解耦
├── dir2_phase_segregation/          ( 6 篇)  方向2：相分离
├── dir3_ion_migration/              (11 篇)  方向3：离子迁移
├── related_crossmaterial_instruments/ ( 4 篇)  跨材料 + 设备改良参考
├── other_reviews_tandem/            (10 篇)  综述/tandem/通用
└── README.md                        本文件
```

## 命名规则

统一格式：`[category]_[作者姓氏]_[年份]_[主题关键词].pdf`

| 字段 | 规则 |
|---|---|
| category | `dir1` / `dir2` / `dir3` / `related` / `other` |
| 作者 | 第一作者姓氏；双姓用驼峰（如 `FranciscoLopez`、`YuanHuang`、`ParkSeok`） |
| 年份 | 4 位年份（出版年或 arXiv 首发年） |
| 关键词 | 2–4 个 kebab-case 英文词，反映论文最核心一句话 |

示例：`dir1_Houtput_2026_nonlinear-EPC-CsPbI3.pdf`

### 为什么这样命名

- category 前缀保证按文件名排序时**同方向论文聚在一起**，即使跨文件夹复制也不乱
- 作者-年份是学术引用的标准键，跟你 Zotero/引用软件对齐
- 关键词用 kebab-case（连字符）而不是 snake_case（下划线），避免和分隔符 `_` 混淆
- 全英文无空格，跨 Windows/Linux/Mac、git、云盘都安全

### 新论文加入流程

下载新 PDF 后三步：
1. 判定方向 → 决定 category 前缀
2. 起关键词 → 反映核心主张
3. 放到对应子文件夹

若一篇论文跨方向，选**最主要**的那个方向放实体文件，其他方向在 INDEX 里加指针即可。

---

## 完整索引 · 47 篇

### dir1_blueshift_decoupling/ (16 篇)

| 文件名 | 期刊 / 年份 | 关键信息 |
|---|---|---|
| dir1_Amat_2014_cation-SOC-tilting.pdf | Nano Lett. 2014 | 阳离子-SOC-倾转共调带隙 |
| dir1_Bertolotti_2017_nanotwins-dynamic-disorder.pdf | ACS Nano 2017 | CsPbX3 NC 八面体倾转 |
| dir1_FranciscoLopez_2019_TE-EPI-equal-footing.pdf | JPCL 2019 | TE:EPI = 60:40 基准 |
| dir1_Houtput_2026_nonlinear-EPC-CsPbI3.pdf | arXiv 2026 | 1e2ph 非线性 EPC ~10% |
| dir1_Lu_2025_lattice-expansion.pdf | Nat. Commun. 2025 | 膨胀 ±1% 抑制卤素间隙 |
| dir1_Mannino_2020_bandgap-singlecrystal.pdf | JPCL 2020 | CsPbBr3/MAPbBr3/FAPbBr3 单晶 |
| dir1_Mukhuti_2022_Urbach-focus-CsPbBr3.pdf | arXiv 2022 | ZPR 33 meV · Urbach focus |
| dir1_Oksenberg_2020_CsPbBr3-nanowire.pdf | Nat. Commun. 2020 | 应变畸变 NW 蓝移 |
| dir1_ParkSeok_2019_intrinsic-instability.pdf | Adv. Mater. 2019 | 内在不稳定性综述 |
| dir1_Simpson_2025_tilting-polytypes.pdf | Chem. Mater. 2025 | 多型倾转对称性 |
| dir1_Singh_2016_disorder-MAPbI3.pdf | JPCL 2016 | 热+结构无序先驱 |
| dir1_Weadock_2025_tilt-offcenter-decoupling.pdf | arXiv 2025 | B1/B2 对称性解耦 |
| dir1_Yang_2017_MAPbI3-blueshift.pdf | JPCL 2017 | EPI 主导（第一性 AHC） |
| dir1_Zhang_2023_bandgap-renormalization.pdf | Adv. Funct. Mater. 2023 | 静态 vs 动态畸变 |
| dir1_Zhao_2019_CsPbI3-NC-size.pdf | ACS Energy Lett. 2019 | 尺寸依赖晶格-带隙 |
| dir1_Jin_2022_strain-relaxation-lattice-reconfiguration.pdf | Adv. Energy Sustain. Res. 2022 | 应变弛豫→八面体倾转→光电性能综述 |

### dir2_phase_segregation/ (6 篇)

| 文件名 | 期刊 / 年份 | 关键信息 |
|---|---|---|
| dir2_Feng_2023_periodic-heating.pdf | arXiv 2023 | ΔT=10 °C 周期抑制 |
| dir2_Hoke_2015_photoinduced-trap.pdf | Chem. Sci. 2015 | 相分离奠基 |
| dir2_Muscarella_2020_pressure-suppression.pdf | arXiv 2020 | 0.3 GPa · k_seg ~30× |
| dir2_Ruth_2023_thermodynamic-model.pdf | arXiv 2023 | 热力学带隙模型 |
| dir2_Tang_2018_local-segregation.pdf | Nano Lett. 2018 | 局域直接观测 |
| dir2_Bai_2022_film-homogeneity-phase-segregation.pdf | Science 378:747 (2022) | 均质化 FA/Cs 分布抑制相分离；3190 h >91% |

### dir3_ion_migration/ (11 篇)

| 文件名 | 期刊 / 年份 | 关键信息 |
|---|---|---|
| dir3_Akrami_2023_APTMS-wideBG.pdf | arXiv 2023 | APTMS wide-BG |
| dir3_Chen_2020_arylammonium-suppression.pdf | ACS Energy Lett. 2020 | 芳铵钝化 TAS+DFT |
| dir3_Dey_2023_Sn-substitution.pdf | arXiv 2023 | Sn 取代 E_a >1.1 eV |
| dir3_Futscher_2018_transient-drift.pdf | arXiv 2018 | I⁻ E_a = 0.29 eV 基准 |
| dir3_Kim_2022_SEM-mapping.pdf | arXiv 2022 | 原位 SEM 3D 路径 |
| dir3_Pothoof_2023_APTMS-passivation.pdf | arXiv 2023 | APTMS SKPM 5× |
| dir3_Schwenzer_2018_T-cycle-degradation.pdf | ACS AMI 2018 | 循环 vs 恒温 4× |
| dir3_Shi_2024_thermal-stability.pdf | Small Struct. 2024 | 抑制迁移→热稳定 |
| dir3_Tayagaki_2023_T-dependent-migration.pdf | Sol. Energy Mater. 2023 | E_a 0.27 eV · N_mobile 3× |
| dir3_YuanHuang_2016_ion-migration-review.pdf | Acc. Chem. Res. 2016 | 离子迁移奠基综述 |
| dir3_Hu_2026_molecular-press-annealing-PSC.pdf | Science (8 Jan 2026) | MPA 抑制 V'_I/离子迁移；PCE 26.6% 认证 |

### related_crossmaterial_instruments/ (4 篇)

| 文件名 | 期刊 / 年份 | 关键信息 |
|---|---|---|
| related_Cao_2021_PbTe-EPC-lattice-expansion.pdf | PRB 2021 | PbTe 软模 + 晶格膨胀 |
| related_FAPbI3_2025_octahedral-dynamics.pdf | arXiv 2025 | FAPbI3 热激发局部对称 |
| related_Sihi_2022_SnSe-SnS-EPI-topological.pdf | JPCM 2022 | EPI 非线性带隙 + 拓扑 |
| related_Xue_2025_SnSe-SnS-superlattice.pdf | arXiv 2025 | ML-FF anharmonic phonon |

### other_reviews_tandem/ (10 篇)

| 文件名 | 类型 |
|---|---|
| other_Aydin_2020_tandem-outdoor-T.pdf | tandem/Aydin 2020 Nat Energy |
| other_Boyd_2018_degradation-review.pdf | 综述/Chem Rev |
| other_Chen_2022_tandem-surface-potential.pdf | tandem/Nature 2022 |
| other_Koo_2018_Sr-segregation-oxide.pdf | 氧化物/Joule 综述 |
| other_Mesquita_2019_T-operation-PSC.pdf | 综述/ChemSusChem |
| other_Nie_2023_wideBG-tandem-review.pdf | 综述/Nano-Micro Lett |
| other_Park_2018_efficiency-roadmap.pdf | 综述/ACS Photonics |
| other_Sun_2022_PV-T-review.pdf | 综述/Adv Compos Hybrid |
| other_Wang_2023_Si-TOPCon.pdf | 硅工艺 |
| other_Wurfel_2005_solar-cell-physics-textbook.pdf | 教材 |

---

## 跨方向论文指针

以下论文放在主方向文件夹下，但在多个方向都有引用价值：

- `dir1_ParkSeok_2019_intrinsic-instability.pdf` — 同时覆盖方向 3（离子迁移综述章节）
- `dir1_Lu_2025_lattice-expansion.pdf` — 同时覆盖方向 2（晶格膨胀→卤素稳定性）
- `dir3_Chen_2020_arylammonium-suppression.pdf` — 同时涉及方向 2（宽带隙相分离）
- `other_Aydin_2020_tandem-outdoor-T.pdf` — 三方向 + tandem 的 motivation 桥梁
- `other_Nie_2023_wideBG-tandem-review.pdf` — PIPS 章节可作方向 2 综述支撑

## 对应的深读报告位置

所有 11 字段深读报告在 `../analysis/dirN_<作者>.md`，与 PDF 文件同步命名。

- `../analysis/EXECUTIVE_SUMMARY.md` — 12 篇跨文件整合
- `../analysis/RELATED_DECOUPLING_SURVEY.md` — 组 A/B/C 10 篇调研
- `../analysis/DOWNLOAD_LIST.md` — 带 DOI 的下载清单
- `../analysis/CLASSIFICATION_PREVIEW.md` — 40 篇分类预览
- `../phd_phase4_literature_deep_read.md` — 昨日 11 篇 arXiv 深读
