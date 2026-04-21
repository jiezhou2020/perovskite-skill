---
folder: dir3_ion_migration
topic: 卤化物钙钛矿离子迁移 / E_a 测定 / 抑制策略
count: 10
last_updated: 2026-04-21
---

# dir3 · 离子迁移 · 10 篇一览

> 方向 3 的 10 篇覆盖四种 E_a 测定范式（瞬态电容 / 阻抗谱 / SKPM / 原位 SEM）+ 四类抑制策略（表面钝化 / 本体组分 / 添加剂 / 温度循环）。9/10 篇已深读。

## 快速检索表

| # | 论文（作者_年份） | 核心一句话 | 最关键锚点 | 深读 |
|---|---|---|---|---|
| 1 | Akrami_2023 | APTMS 气相钝化在 wide-bandgap FACs 钙钛矿上 kinetic 抑制光致迁移 | PL 红移速率慢 > 5×；τ_relax 1000→2550 s | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 2 | Chen_2020 | **芳铵钝化宽带隙钙钛矿，TAS + DFT 双源互证 E_a 从 0.68 抬到 0.96 eV** | TAS 0.905 eV / DFT 0.96 eV；PCE 19.07%；4T tandem 24.1% | ✓ [报告](../../analysis/dir3_chen2020.md) |
| 3 | Dey_2023 | **Sn 取代 Pb 造成局部畸变，DFT 预测 E_a 从 0.47 抬到 1.45 eV**（Schottky cluster） | 阻抗 E_a > 0.52 eV；DFT Schottky 1.45 eV；V_oc 1.02→0.77 V | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 4 | Futscher_2018 | **瞬态电容单器件同时分辨 I⁻ 与 MA⁺ 三种迁移通道**（field E_a 基准） | E_a(I⁻) = 0.29 ± 0.06 eV；D(I⁻)/D(MA⁺) ≈ 1000× | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 5 | Kim_2022 | **原位 SEM + EDS + CL 三维映射光致 I⁻ 水平 + Pb²⁺ 垂直迁移路径** | D(I⁻) = 3.5×10⁻¹⁰ cm²/s；I⁻ 横向尺度 ~10² μm；CL ring 20× 增强 | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 6 | Pothoof_2023 | APTMS 气相钝化使 SKPM CPD shift 从 ~100 mV 降到 ~20 mV（5×） | ΔCPD 100→20 mV；PL τ 120→1016 ns | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 7 | Schwenzer_2018 | **温度循环 vs 恒温下器件退化差 4 倍**（dT/dt 是主控） | β_Voc = −1077 ppm/°C；10–60 °C 循环 140 min J_SC 降至 <20% | ✓ [报告](../../analysis/dir3_schwenzer2018.md) |
| 8 | Shi_2024 | 抑制离子迁移提升 PSC 热稳定性综述 | 未深读（综述性） | — |
| 9 | Tayagaki_2023 | **温度升 30 °C 可动离子浓度 3×，光-暗循环每圈累降 9-11%** | E_a,fast = 0.27±0.01 eV；N_mobile 3× (15→45 °C) | ✓ [报告](../../analysis/dir3_tayagaki2023.md) |
| 10 | YuanHuang_2016 | **离子迁移对 PSC 效率与稳定性影响的奠基综述** | DFT E_a 覆盖 0.08–0.58 eV；D ≈ 10⁻¹² cm²/s；起迁电场 0.1–0.3 V/μm | ✓ [报告](../../analysis/dir3_yuanhuang2016.md) |

## E_a 测定方法的三条路径

| 路径 | 时间窗 | 空间解耦 | I⁻ 典型值 |
|---|---|---|---|
| A 瞬态电容（Futscher） | ms-s | 整器件平均 | **0.29 eV** |
| B 温度依赖阻抗谱（Dey） | mHz-MHz | bulk + GB 综合 | **0.52 eV** |
| C SKPM / 原位 SEM（Pothoof / Kim） | 分钟 | nm-μm 分辨 | 代理量 τ_relax / D |

> 三种独立技术（Futscher / Tayagaki / Muscarella）在 **I⁻ E_a ≈ 0.28 eV** 上收敛，是 field 最硬的量化锚点。Chen 2020 的 **TAS + DFT 双源互证**（0.905 vs 0.96 eV）是当前最严谨的实验方式。

## Solvent engineering 的位置 · 空白区

- 论文 Pothoof/Akrami 做表面钝化
- 论文 Dey 做本体组分
- 论文 Kim 做路径成像
- **没有一篇系统地把 solvent 配方作为连续变量去扫 E_a**

Futscher 自陈 MA⁺ 的 E_a 跨度 0.39–0.90 eV "depends strongly on fabrication"——"fabrication-dependent" 恰好是 solvent engineering 的空白牌。

## 相关分析文件

- `../../analysis/dir3_chen2020.md` — Chen 2020 深读
- `../../analysis/dir3_yuanhuang2016.md` — 综述深读
- `../../analysis/dir3_schwenzer2018.md` — Schwenzer 深读
- `../../analysis/dir3_tayagaki2023.md` — Tayagaki 深读
- `../../phd_phase4_literature_deep_read.md` — Futscher/Pothoof/Akrami/Dey/Kim 深读
