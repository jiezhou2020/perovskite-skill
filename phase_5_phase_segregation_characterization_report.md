---
title: 钙钛矿太阳能电池相分离的表征评估系统 · 综合报告
date: 2026-05-09
direction: dir4 表征解耦相分离
based_on: 13 篇深读 + 3 份 batch 综合
related_plan: research_plan_dir4_characterization_v3.md
---

# 钙钛矿相分离的表征评估系统 · Stage 5 综合报告

## 0. 结论先行

> **核心判断**：相分离表征系统的方法学骨架可以在校内实验室搭建，但当前文献中**没有一篇方案论文做过 Ma 2024 暗态短曝光 PL 实验**；只要把这一项 + fast-KPFM CPD 弛豫时间立为协议必读，几乎所有现有方案的机制描述都会从模糊变锐利；这正是博士工作的方法学增量空间。
>
> **三段式判断**：(1) 机制 — 4 类驱动力（热力学 / 极化子-应变 / 缺陷-trap 局域电场 / redox）中 Ma 2024 + Tiede 2020 + Navid 2026 三角证明 **M3 局域电场是最强暗态兼容机制**；(2) 表征 — 工具调色盘 17 种工具 × 4 机制方阵已立，**时间窗（ps→min+）是最强鉴别维度**；(3) 解决方案 — 4 案试跑下 M3 是默认靶点，M2 应变（Fang Z. 2024 唯一）和 M4 redox（仅 Hu 2026 部分）是 field 严重 underutilized 的方向。

## 1. 文献矩阵

> 13 篇核心文献按"机制 / 表征 / 解决方案"三轴归位；每篇给出量化锚点。

| Paper | Claim | Quantitative anchor |
|---|---|---|
| Tian 2022 | 5 类可视化技术综述 + 4 类机制 | CL 20 nm vs PL 300 nm 分辨力 |
| Qu 2026 | SPM 全谱含 pp-KPFM 1 ps 时间分辨 | fast-KPFM 数分钟 CPD 弛豫 |
| Frohna 2024 | 多模态 operando toolkit + PCE disorder | DCDH ±2% PCE 空间均匀 |
| Tiede 2020 | 碘缺陷重组主导 LHS 速率 | k_growth 0.017 s⁻¹，R_H↑ 减速 |
| Navid 2026 | DFT ΔDFE 描述符 + Br 表面偏好 | 0.04 eV(FA-Cs) vs 0.06 eV(MA) |
| Ma 2024 | 暗态相分离持续数分钟由局域电场驱动 | 2-5 min dark seg + 撤场即 remix |
| Bai 2022 | 硒吩添加剂初始均匀性 | T80 = 3190 h MPP @ 45 °C |
| Hu 2026 | 分子压印退火愈合 V_I' | 26.6% PCE，I/Pb 6%→2% 损失 |
| Fang Z. 2024 | 表面纳米抛光 4 大效应 | 23.67% cert + 4T 33.10% |
| Hou 2020 | 1-butanethiol SLP 抑制 trap-induced LHS | τ 570→900 ns，25.7% tandem cert |

## 2. 机制对立轴

> 4 类机制各有支持与反驳证据；Ma 2024 暗态实验是当前最强的机制鉴别工具。

### M1 热力学（混溶间隙 + 表面 Br 偏好）

> **支持**：终端 x 值 fixed ≈ 0.2/0.8（Tiede / Bischak）+ Br 表面偏好 ΔDFE 描述符（Navid 2026）。**反驳**：单 nm 尺度 Br 表面富集**未被任何实验直接 calibration**（TOF-SIMS 深度剖面缺失）；Fang Z. 2024 的 Br-rich 表面**反而**抑制 LHS — 与 Navid 描述符方向相反，提示 dynamic 情境下 ΔDFE 描述符需修正。

### M2 极化子 / 应变

> **支持**：Zhao 2020 的 35%Br 应变激活 LHS + Fang Z. 2024 显式 strain release 抑制 LHS。**反驳**：Ma 2024 撤光后相分离持续 min — 与极化子寿命 ns–μs 严重不符；M2 单独成立**需要光生载流子持续存在**，暗态实验直接证伪。

### M3 缺陷-trap / 局域电场

> **支持**：Tiede 2020 k_growth(R_H) + Ma 2024 dark seg 2–5 min + Garrett 2017 fast-KPFM 数分钟 CPD 弛豫 — **三方独立工具 / 不同尺度的 mechanism convergence**。**反驳**：尚无 — 是当前实证最强机制。

### M4 Redox（hole 触发 I 氧化 + I2 vapor）

> **支持**：Hu 2026 in situ XPS 显示 I/Pb 损失 + Navid 2026 DFT V_I 比 V_Br 形成能低 0.56–0.89 eV。**反驳**：Ma 2024 暗态条件下 hole 已消失，redox 应熄火 — M4 单独不能解释 dark seg；可能与 M3 协同。

## 3. Gap 识别

> 4 个 universal gap 是研究计划 v3 的直接落地点。

**Gap 1 · 暗态短曝光 PL 实验缺位**。所有 4 案方案论文（Bai / Hu / Fang Z. / Hou）都没做 Ma 2024 范式的撤光后短曝光读 PL — 这是**最低成本**就能给所有现有方案 M3 vs M2 区分锐化的实验。

**Gap 2 · fast-KPFM CPD 弛豫时间未与方案 paired**。Garrett 2017 范式下 MAPbI3 数分钟 CPD 弛豫已经是 field 公认现象，但**没有方案论文**把"我的方案后 CPD 弛豫从分钟降到秒"作为机制证据 — 这是评估协议的差异化金钥匙。

**Gap 3 · TOF-SIMS 深度剖面 c_surf/c_bulk 未量化**。Navid 2026 ΔDFE 描述符是 first-principles 预测，但没人做 < 1 nm 深度分辨的 Br/I 比量化来 calibration — 用户做这件事即可建立"理论描述符 ↔ 实验观察"桥梁。

**Gap 4 · M2/M4 在 field 严重 underutilized**。当前 M3 占 60%+ 抑制方案焦点；只有 Fang Z. 2024 显式打 M2 应变；M4 redox 几乎没人独立测。**vacuum vs ambient 切换 + I2 mass-spec + 同步辐射 strain mapping** 三件套是高边际价值方向。

## 4. 评估协议骨架

> 给定一个待评估方案 X，5 步决策树输出 (M1, M2, M3, M4) 4 元向量 + 缺读 priority 表 + 证据强度评分。

**输入**：方案 X 的样品 + 老化前 / 后样品（同区 marked）。

**Step 1 · 暗态短曝光 PL**：撤光后 dark 中每隔 1 s 用低功率 PL 读取；预期高质量方案 dark seg 显著抑制。

**Step 2 · vacuum vs ambient 老化**：ISOS-D-3 vacuum vs ISOS-L-3 air 同方案对比；分辨 M4 redox 状态。

**Step 3 · 化学计量 R_H 调控（如 Tiede 2020）**：扫 R_H 梯度，看 k_growth(R_H) 曲线是否平直；分辨 M3 V_I 缺陷。

**Step 4 · TOF-SIMS 深度剖面 < 1 nm 分辨**：量化 c_surf/c_bulk Br 比；calibration M1 描述符。

**Step 5 · fast-KPFM 老化前/后弛豫时间**：预期高质量方案 CPD 弛豫从分钟降到秒。

**输出格式**：4 元机制向量 ✓D / ✓i / ◐ / ? / − ；外加缺读 priority 表 + 综合评级（A/B/C 加修饰）。

## 5. Next steps

1. **建立校内三模态 baseline**：共聚焦 hyperspectral PL + KPFM（含 fast-KPFM）+ SEM-EDS，落实老化前/后同区扫描的标准 SOP（参 Frohna 2024 范式）。

2. **跑 4 案协议反向验证**：在校内合成 Bai 硒吩 + Fang Z. 抛光 + Hou SLP（Hu MPA 因压印工艺特殊优先级低）的复制样，每篇按 5 步协议过一遍，输出真实 4 元向量 + 与原文宣称的差异分析。

3. **解决 Br-rich 表面 vs ΔDFE 矛盾**：以 Fang Z. 2024 + Navid 2026 为基线，做 TOF-SIMS 深度剖面 + 同位置 PL/KPFM；这是博士工作差异化主题"理论描述符在 dynamic 情境下的修正"的实验证据基础。

4. **撰写 dir4 评估协议 v0.1 公开稿**：以本报告为基础，把 5 步决策树 + 17 项工具调色盘 + 16 项量化阈值打包成单文档，逐步在 field 里用一篇 case-study 论文 demonstrate 协议价值。
