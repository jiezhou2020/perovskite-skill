---
folder: dir2_phase_segregation
topic: 混卤钙钛矿光致相分离 / solvent 工程 / 控制策略
count: 6
last_updated: 2026-04-23
---

# dir2 · 相分离 · 6 篇一览

> 方向 2 的 5 篇论文串起一条**"奠基现象 → 空间观测 → 热力学 → 压力工程 → 动态调制"** 的完整推进链条，全部已深读完毕。

## 快速检索表

| # | 论文（作者_年份） | 核心一句话 | 最关键锚点 | 深读 |
|---|---|---|---|---|
| 1 | Feng_2023 | **周期加热（ΔT=10 °C 秒级摆动 + 10% 占空比）可在 50 W/cm² 下完全抑制相分离** | ΔT=10 °C；最优脉冲 t/T=0.5/5 s；180 s 内零相分离 | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 2 | Hoke_2015 | **混卤钙钛矿光致相分离奠基论文**（可逆性 + Br:I 阈值 + trap 图像） | Br:I > 1:4 为相分离阈值；可逆暗态重混 | ✓ [报告](../../analysis/dir2_hoke2015.md) |
| 3 | Muscarella_2020 | **0.3 GPa 静水压 = 3% 化学压力，相分离速率 k_seg 下降 ~30×**（物理压力 = 化学压力 = Cs 替代） | 0.3 GPa · k_seg 27–33×；迁移势垒 +64 meV (I)；E_a 前向 0.27–0.30 eV | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 4 | Ruth_2023 | **热力学带隙模型统一预测 x_terminal / I_exc,threshold / 尺寸效应**（field 最完整公式） | U_I,Br ≈ 39 meV/halide (MAPb)；I_exc,threshold ≈ 20–200 μW/cm² | ✓ [报告](../../phd_phase4_literature_deep_read.md) |
| 5 | Tang_2018 | **局域微区光谱直接空间可视化相分离**（sub-μm 级分辨率） | 阈值下限 Br:I = 1:10；domain 尺寸（未精确量化） | ✓ [报告](../../analysis/dir2_tang2018.md) |
| 6 | Bai_2022 | **硒吩添加剂均质化 FA/Cs 阳离子分布，抑制相分离；3190 h MPP 保持 >91%** | FAxCs1-xPbI3；Schelling 模型模拟阳离子迁移；也适用 FACsPb(Br0.13I0.87)3 | — |

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
- `../../analysis/dir2_lu2025.md` — Lu 2025 深读（跨方向 1/2）
- `../../analysis/dir2_amat2014.md` — Amat 2014 深读（跨方向 1/2）
- `../../phd_phase4_literature_deep_read.md` — Feng / Muscarella / Ruth 深读
