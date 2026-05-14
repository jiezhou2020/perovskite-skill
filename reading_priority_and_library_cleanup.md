# 读论文优先级 + 论文库整理（截至 2026-05-15）

> **目标**：周一前把 4 矛盾 + 5 Z 框架 + 测试手法的文献全部吃透；同时把 root 散落的 21 个 PDF 归档干净。
> **提交日期**：2026-05-18（周一）。剩余 3 天工作日 + 周末。

---

## A. 论文库现状审计

### A.1 root/ 散落的 21 个 PDF 状态

| # | 文件名（简写）| 是什么 | 操作 |
|---|---|---|---|
| 1 | `s41467-021-23008-z.pdf` | **Chen 2021** Nat Commun unified theory | 🔁 移到 dir2 |
| 2 | `PIIS2590238523002163.pdf` | **Peng 2023** Matter cryo-STEM-CL | 🔁 移到 dir2 |
| 3 | `PIIS2666386425002528.pdf` | **Fan 2025** Cell Rep Phys Sci plunge-freeze | 🔁 移到 dir2 |
| 4 | `thermodynamic-origin-of-photoinstability...` | **Brivio 2016** JPCL ← **C1 矛盾源头！** | ⭐🔁 移到 dir2 |
| 5 | `sciadv.aao5616.pdf` | **Zhao Jingjing 2017** Sci Adv strained films | 🔁 移到 dir2 |
| 6 | `photoinduced-phase-segregation...mechanisms-suppression...` | **Hu 2026** ACS AMI 综述 | 🔁 移到 dir2 |
| 7 | `S4_acs.jpclett.6b00094.pdf` | **Young & Rondinelli 2016** JPCL 八面体倾转 DFT | 🔁 移到 related |
| 8 | `S4-Adv Elect Materials - 2023 - Le...` | **Le 2023** Adv Elect Mater 组件 perspective | 🔁 移到 other |
| 9 | `li2020.pdf` | **Li 2020** AFM scale-up 综述 | 🔁 移到 other |
| 10 | `C6EE01555G.pdf` | **Spyropoulos/Brabec 2016** EES（接收稿首页）| 🔁 移到 related（先看内容确认）|
| 11 | `local-rearrangement-of-the-iodide-defect...` | Tiede 2020 重复 | 🗑 删除 |
| 12 | `from-part-to-whole...subcells-tandem...` | Yu 2026 重复 | 🗑 删除 |
| 13 | `Small - 2025 - Kim - Wide Bandgap Perovskites...` | Kim 2025 重复 | 🗑 删除 |
| 14 | `s41467-020-20066-7.pdf` | Zhao 2020 strain-activated 重复 | 🗑 删除 |
| 15 | `3305892271science.abn3148(1).pdf` | Bai 2022 重复 | 🗑 删除 |
| 16 | `S.M.SzePhysicsofSemiconductorDevicesWiley.pdf` | Sze 半导体器件教科书 | 📚 保留 root 或移 textbooks/ |
| 17 | `Semiconductor.Devices_Physics.Technology_Sze.2ndEd...` | Sze 同一本教科书第2版 | 📚 同上 |
| 18 | `The Physics of Solar Cells_ Photons In, Electrons Out by Jenny Nelson.pdf` | Jenny Nelson 太阳能电池物理 | 📚 同上 |
| 19 | `9783527618545 (1).pdf` | 书章（Wiley ISBN）| 📚 同上 |
| 20 | `CBO9780511812781.024.pdf` | Cambridge 书章 | 📚 同上 |
| 21 | `Full.pdf` | Raja & Barron 物理方法书 | 📚 同上 |

**清理总结**：🗑 删 5 个重复 / 🔁 移 10 个 / 📚 6 个教科书可建 textbooks/ 子目录

---

## B. ⭐ 周一前读论文的优先顺序

### Tier 1 — 4 矛盾论文（必读，约 12 小时总时长）

按"信息密度 ÷ 阅读时间"排序：

| 优先级 | 论文 | 库内位置 | 投入时间 | 核心收获 |
|---|---|---|---|---|
| **🥇 1** | **Fan 2025** Cell Rep Phys Sci | `papers/PIIS2666386425002528.pdf` | 2 h | C2（位置反转）+ C4（4% 应变残留）双矛盾的最新实验源 |
| **🥈 2** | **Peng 2023** Matter | `papers/PIIS2590238523002163.pdf` | 2 h | C3（funneling 1000× 弱）的实验内嵌证伪 |
| **🥉 3** | **Chen 2021** Nat Commun | `papers/s41467-021-23008-z.pdf` | 2 h | C1（10⁷× 差）的一侧——unified theory 完整公式 |
| **4** | **Brivio 2016** JPCL ⭐ | `papers/thermodynamic-origin...pdf` | 1 h | C1 的真正源头——所有 thermo 理论的开山数据 |
| **5** | **Tang 2018** Nano Lett | `papers/dir2_phase_segregation/dir2_Tang_2018_...pdf` | 1.5 h | C2 历史一侧——KPFM/共聚焦 PL 原始数据 |
| **6** | **Hoke 2015** Chem Sci | `papers/dir2_phase_segregation/dir2_Hoke_2015_...pdf` | 1 h | C4 的"完全可逆"原始证据 + 整个领域奠基论文 |
| **7** | **Tiede 2020** JPCL | `papers/dir2_phase_segregation/dir2_Tiede_2020_...pdf` | 1.5 h | C4 的"缺陷记忆"反驳 + R_H 调控直接证据 |
| **8** | **Ruth 2023** | `papers/dir2_phase_segregation/dir2_Ruth_2023_...pdf` | 2 h | C1 的另一侧（vs Chen 2021）；funneling 数学最完整版 |

**配套**（已写好，先读分析再读论文事半功倍）：

- `analysis/dir2_chen2021_critique.md`
- `analysis/dir2_peng2023_critique.md`
- `analysis/dir2_fan2025_critique.md`
- `analysis/dir2_tang2018_critique.md`
- `analysis/dir2_ruth2023_critique.md`
- `analysis/dir2_hoke2015.md`（深读笔记）
- `analysis/dir2_tiede2020.md`（深读笔记）

**阅读策略**：每篇先扫批评文档 / 深读笔记（20 分钟） → 再读论文找具体图（40-60 分钟） → 在批评文档边缘标记验证或修正点。

---

### Tier 2 — 5 个 Z 因子的对应文献（每个 Z 选 1-2 篇深读，6-8 小时）

#### Z_c 成分（composition）

| 优先 | 论文 | 库内位置 | 核心点 |
|---|---|---|---|
| 必 | **Brivio 2016**（Tier 1 已读）| dir2/ | miscibility gap, $T_c$ |
| 必 | **Chen 2021**（Tier 1 已读）| dir2/ | unified $F_{light} + F_{mix}$ |
| 备选 | **Draguta 2017** funneling 奠基 | `dir2_phase_segregation/dir2_Draguta_2017_funneling-foundational.pdf` | funneling 概念原版 |

#### Z_v 缺陷（defects / vacancies）

| 优先 | 论文 | 库内位置 | 核心点 |
|---|---|---|---|
| 必 | **Tiede 2020**（Tier 1 已读）| dir2/ | R_H × k_growth 缺陷-动力学耦合 |
| 必 | **Yuan & Huang 2016** Acc Chem Res | `papers/dir3_ion_migration/dir3_YuanHuang_2016_ion-migration-review.pdf` | V_I 介导 halide migration 综述 |

#### Z_φ 局部电势（local potential / SPV）

| 优先 | 论文 | 库内位置 | 核心点 |
|---|---|---|---|
| 必 | **Tang 2018**（Tier 1 已读）| dir2/ | KPFM CPD 在 GB vs GC |
| 必 | **Qu 2026** SPM 综述 | `papers/dir4_characterization_decoupling/dir4_Qu_2026_SPM-perovskite-surface-interface.pdf` | SPM/KPFM 5 分量卷积 |

#### Z_ε 应变（strain）

| 优先 | 论文 | 库内位置 | 核心点 |
|---|---|---|---|
| ⭐ 必 | **Zhao 2020** Nat Commun | `dir2_Zhao_2020_strain-activated-LHS-spm-PL.pdf` | strain-activated LHS 直接证据 |
| 必 | **Muscarella 2020** Nat Commun | `dir2_Muscarella_2020_pressure-suppression.pdf` | 0.3 GPa 压力 ≈ 3% 化学压力，速率 ↓30× |
| ⭐ 新 | **Zhao Jingjing 2017** Sci Adv（新发现）| 移到 `dir2_Zhao_2017_strained-films-instability.pdf` | 薄膜 vs 单晶应变 0.3% vs 0.0004% |

#### Z_q 不可逆降解（irreversible chemistry）

| 优先 | 论文 | 库内位置 | 核心点 |
|---|---|---|---|
| 必 | **Boyd 2018** | `papers/other_reviews_tandem/other_Boyd_2018_degradation-review.pdf` | 降解综述（O₂/H₂O 化学路径）|
| 必 | **Hu 2026 ACS AMI** 综述（新发现）| 移到 `dir2_Hu_2026_PIPS-review.pdf` | PIPS 抑制策略 + 降解机制最新综述 |

---

### Tier 3 — 测试手法（每个测试手段 1 篇代表论文，3-4 小时）

#### 共聚焦 PL hyperspectral

- **Tang 2018**（Tier 1 已读）— 共聚焦 PL + topo + KPFM 同区
- **Fan 2025**（Tier 1 已读）— PL 与 EELS 直接对照
- **Peng 2023**（Tier 1 已读）— cryo-STEM-CL

#### KPFM / fast-KPFM

- **Tang 2018**（Tier 1 已读）— KPFM 操作示例
- **Qu 2026**（Tier 2 已读）— SPM/KPFM 综述

#### TOF-SIMS / EELS

- **Fan 2025**（Tier 1 已读）— EELS I/Cs 比作 halide 代理
- **Tian 2022** | `papers/dir4_characterization_decoupling/dir4_Tian_2022_halide-segregation-visualization-review.pdf` — **核心方法综述**，多模态可视化全总览

#### GIWAXS / XRD

- **Hoke 2015**（Tier 1 已读）— XRD 峰分裂
- **Muscarella 2020**（Z_ε 已读）— GIWAXS 应变 + 压力
- **Zhao 2020**（Z_ε 已读）— GIWAXS 应变激活

#### 4D-STEM / cryo-EM

- **Fan 2025**（Tier 1 已读）— 4D-STEM 各向异性应变
- **Peng 2023**（Tier 1 已读）— cryo-STEM-CL spinodal

#### Raman

- 库内暂无 Raman 专精论文。Tier 3 期间可单独搜下，但**优先级低**——
  Raman 与 GIWAXS 在 PPT 里是辅助验证轴，不是主轴。

---

## C. 优先级压缩到 3 天的可执行节奏

```
Day 1（周五）：
  上午  Fan 2025 + 批评文档（2h）
       Peng 2023 + 批评文档（2h）
  下午  Chen 2021 + 批评文档（2h）
       Brivio 2016（1h）
  晚上  整理库（执行 §D 的 cleanup）

Day 2（周六）：
  上午  Tang 2018 + 批评文档（1.5h）
       Hoke 2015 + 深读笔记（1h）
       Tiede 2020 + 深读笔记（1.5h）
  下午  Ruth 2023 + 批评文档（2h）
       Zhao 2020 + Muscarella 2020（2h）
  晚上  Qu 2026 SPM 综述（1.5h）

Day 3（周日）：
  上午  Tian 2022 表征综述（1.5h）
       Hu 2026 综述（1.5h）
  下午  Zhao 2017 sci adv + Yuan Huang 2016（2h）
       综合整理：把每篇笔记的"对 SL-PCI 的具体贡献"汇总
  晚上  最后过一遍 PPT 全 deck，每张 slide 对照笔记
```

**总投入**：约 22 小时阅读 + 4 小时整理 = 周五到周日合理执行。

---

## D. 库整理执行清单（建议今晚批量做）

### D.1 删除 5 个重复

```powershell
cd "E:\Hermes_artifact\perovksite_research\papers"
Remove-Item "local-rearrangement-of-the-iodide-defect-structure-determines-the-phase-segregation-effect-in-mixed-halide-perovskites.pdf"
Remove-Item "from-part-to-whole-advances-against-perovskite-phase-segregation-in-subcells-for-stable-tandem-photovoltaics.pdf"
Remove-Item "Small - 2025 - Kim - Wide Bandgap Perovskites  A Comprehensive Review of Recent Developments and Innovations.pdf"
Remove-Item "s41467-020-20066-7.pdf"
Remove-Item "3305892271science.abn3148(1).pdf"
```

### D.2 移动 + 重命名 6 个到 dir2

```powershell
cd "E:\Hermes_artifact\perovksite_research\papers"
Move-Item "s41467-021-23008-z.pdf" "dir2_phase_segregation\dir2_Chen_2021_unified-thermodynamic-theory.pdf"
Move-Item "PIIS2590238523002163.pdf" "dir2_phase_segregation\dir2_Peng_2023_cryo-STEM-CL-spinodal.pdf"
Move-Item "PIIS2666386425002528.pdf" "dir2_phase_segregation\dir2_Fan_2025_plunge-freeze-cryoEM.pdf"
Move-Item "thermodynamic-origin-of-photoinstability-in-the-ch3nh3pb(i1-xbrx)3-hybrid-halide-perovskite-alloy.pdf" "dir2_phase_segregation\dir2_Brivio_2016_thermodynamic-origin.pdf"
Move-Item "sciadv.aao5616.pdf" "dir2_phase_segregation\dir2_Zhao_2017_strained-films-instability.pdf"
Move-Item "photoinduced-phase-segregation-in-mixed-halide-perovskites-mechanisms-suppression-strategies-and-device-performance.pdf" "dir2_phase_segregation\dir2_Hu_2026_PIPS-review.pdf"
```

### D.3 移动 + 重命名 3 个到 related / other

```powershell
cd "E:\Hermes_artifact\perovksite_research\papers"
Move-Item "S4_acs.jpclett.6b00094.pdf" "related_crossmaterial_instruments\related_Young_2016_octahedral-rotation-DFT.pdf"
Move-Item "S4-Adv Elect Materials - 2023 - Le - Perovskite Solar Module  Promise and Challenges in Efficiency  Meta‐Stability  and.pdf" "other_reviews_tandem\other_Le_2023_module-perspective.pdf"
Move-Item "li2020.pdf" "other_reviews_tandem\other_Li_2020_scaleup-review.pdf"
Move-Item "C6EE01555G.pdf" "related_crossmaterial_instruments\related_Spyropoulos_2016_EES-encapsulation.pdf"
```

### D.4 教科书归类（可选）

```powershell
cd "E:\Hermes_artifact\perovksite_research\papers"
New-Item -ItemType Directory -Path "textbooks" -ErrorAction SilentlyContinue
Move-Item "S.M.SzePhysicsofSemiconductorDevicesWiley.pdf" "textbooks\"
Move-Item "Semiconductor.Devices_Physics.Technology_Sze.2ndEd_Wiley_2002 (1).pdf" "textbooks\"
Move-Item "The Physics of Solar Cells_ Photons In, Electrons Out by  Jenny Nelson.pdf" "textbooks\"
Move-Item "9783527618545 (1).pdf" "textbooks\"
Move-Item "CBO9780511812781.024.pdf" "textbooks\"
Move-Item "Full.pdf" "textbooks\"
```

---

## E. dir2 INDEX 更新清单（移动完后我帮你更新）

新增 6 篇 dir2 论文需要进 `papers/dir2_phase_segregation/INDEX.md`：

| # | 新增论文 | 一句话 | 类型 |
|---|---|---|---|
| 14 | Chen 2021 | C1 矛盾源头之一，10⁷× 阈值预测；unified funneling 理论完整公式 | 理论 |
| 15 | Peng 2023 | C3 矛盾源头，PFM 数值显示 funneling 弱 1000× | 实验+模型 |
| 16 | Fan 2025 | C2+C4 矛盾源头，plunge-freeze cryo-EM 直接化学+应变映射 | 实验 |
| 17 | **Brivio 2016** ⭐ | C1 矛盾真正源头，DFT + QCA miscibility gap | 理论 |
| 18 | Zhao Jingjing 2017 ⭐ | 薄膜 vs 单晶应变 0.3% vs 0.0004%，应变即不稳定性源 | 实验 |
| 19 | Hu 2026 | PIPS 抑制策略最新综述 | 综述 |

让我先做 D.1-D.3 的清理，做完之后告诉我，我把 INDEX 也补全。

---

## F. 还需要下载的论文（缺失重要文献）

| 论文 | 为什么必要 | 下载来源 |
|---|---|---|
| **Bischak 2017** Nano Lett SEM-CL | C3 替代假设（polaron strain）的原始文献，目前库里只有 Bischak 2018 引文不便深读 | DOI 10.1021/acs.nanolett.6b04453 |
| **Bischak 2018** JPCL polaron-Cs | Cs 稳定化的极化子机制，与 Chen 2021 解释竞争 | DOI 10.1021/acs.jpclett.8b01512 |
| **Elmelund 2020** ACS Energy Lett | C1 的实验阈值 35 W/cm² 来源，多次被 Chen 2021 引用 | DOI 10.1021/acsenergylett.9b02055 |

如果今晚执行库清理时顺手把这 3 篇也下载了最好。

---

## G. 给你的执行优先排序（如果你今晚只有 1 小时）

```
1. 删 5 个重复 + 移 6 个 dir2 + 移 4 个 related/other  → 30 分钟
2. 让我把 dir2 INDEX 更新好                            → 我做 15 分钟
3. 把上面的 Tier 1 论文目录贴到自己的 reading log     → 15 分钟
```

不要今晚就开始读——先把库整理干净，明天开始按 §C 的 3 天节奏走。

**最重要的发现**：库里**居然没有 Brivio 2016 单独归档**——它是 C1 矛盾的源头但被埋在 root 散文件里。识别出来后明天读 Chen 2021 前先扫 Brivio 30 分钟，理解为什么"miscibility gap"是 C1 的争议焦点。

---

**版本**：v1.0 / 2026-05-15
