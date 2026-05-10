---
batch: 2
title: 机制驱动力 + 量化读数靶心
direction: dir4 表征解耦
date: 2026-05-09
based_on: Tiede 2020 + Navid 2026 + Ma 2024 + Batch 1 toolkit
---

# Batch 2 综合 · 读数靶心（机制 → 可证伪判据 + 量化阈值）

> Batch 1 给出了"哪个工具读哪个机制"的方阵（X 轴）；Batch 2 给"该机制成立时该工具应读到什么数值"（Y 轴）— 即每个机制的 falsifiable hallmark 与量化阈值。这是评估协议的"打分卡"基础。

## 一、机制坐标系（重申 + 细化）

继承 Tian 2022 的 4 类划分，结合 Ma 2024 的"暗态实验"细化：

| 机制 | 必需载体 | Ma 2024 暗态测试结果 |
|---|---|---|
| **M1 · 热力学（混溶间隙 / 表面偏好）** | 不需光生载流子；温度 + 缺陷 | 暗态可缓慢继续（热力学驱动，与 Ma 2024 现象兼容） |
| **M2 · 极化子-应变** | 必需光生载流子持续存在 | **撤光立即 remix 应变弛豫** ✗ 与 Ma 2024 不符（Ma 显示电场撤掉立即 remix，但激光撤掉持续 min） |
| **M3 · 缺陷-Trap / 局域电场** | 不需光生载流子；只需 trapped charges | **完全兼容**（Ma 2024 主要支持机制） |
| **M4 · Redox（hole 触发 I 氧化）** | 必需光生 hole | 暗态原则上不应继续；Ma 显示数分钟暗态 → 与 redox 不一致；但若 vacuum 不可逆 → 仍是参与机制 |

**关键洞见**：Ma 2024 的"暗态数分钟 + 撤场立即 remix"组合 → 数据空间唯一兼容机制是 **M3（局域电场来自 trapped charges）**。M2 应变与 M4 redox 在暗态下应已熄火。

## 二、读数靶心 · 4 张机制判据卡

### 卡片 1 · M1 热力学（混溶间隙 + 表面 Br 偏好）

| 项 | 内容 |
|---|---|
| **核心观察** | 终端 x 值固定 ≈ 0.2 / 0.8（与初始 Br 比例无关）；表面 Br 富集 |
| **量化阈值（可证伪）** | (1) 终端 I-rich 组分 = MAPb(I0.8Br0.2)3（Tiede / Bischak 公认）；(2) 表面 c_surf/c_bulk Br 浓度比 = **4.5–10×** for FA0.8Cs0.2 vs MA（Navid 2026 DFT）；(3) ΔDFE = 0.04 eV(FA0.8Cs0.2) vs 0.06 eV(MA) at 50% Br |
| **首选工具** | TOF-SIMS 深度剖面（≤1 nm 分辨）+ 共聚焦 PL（终端 PL 位置）+ 原位 XRD（相分裂峰）|
| **工具读数预期** | TOF-SIMS：表面 1 nm 内 Br 含量明显高于 bulk；PL：稳态后 I-rich peak 在 ~1.62 eV（Br0.2I0.8）|
| **反例（反驳）** | 若终端 x 值随初始组分线性变化 → 反驳 fixed endpoint（与该卡片不符）|
| **Ma 2024 暗态测试** | 兼容（暗态可继续慢漂） |
| **A 位调控验证** | MA → FA0.8Cs0.2 应使 ΔDFE 减半；c_surf/c_bulk 减半（Navid 2026 预测） |

### 卡片 2 · M2 极化子 / 应变

| 项 | 内容 |
|---|---|
| **核心观察** | 局部应变 ≥ 0.3% 阈值；I-rich 域形成需要持续光照；撤光快速消失 |
| **量化阈值** | (1) 应变阈值 0.3%（Zhao 2020 W-H 分析）；(2) 极化子稳定性温度 < ~340 K（Brivio 2016 phase diagram）；(3) **撤光后 remix 时间应在 ~ns–μs**（与极化子寿命同序） |
| **首选工具** | 原位 XRD（应变张量） + Raman（声子刚度，电子-声子耦合强度） + pp-KPFM 光泵浦（极化子形成与弛豫的 ps 动力学） |
| **工具读数预期** | XRD：peak 分裂 + Williamson-Hall 应变 ≥ 0.3% in I-rich 区；pp-KPFM：CPD 在 ps–ns 量级响应光泵；Raman：低频 phonon mode 软化 |
| **反例（反驳）** | (1) 撤光后**仍**继续相分离 ≥ min（Ma 2024）→ 反驳 M2；(2) 单晶（无 GB、低应变）仍出现 LHS（Mao 2019 报告）→ 反驳 strain-only；(3) Cs 取代后 LHS 不减弱 → 反驳极化子（Cs 减电子-声子耦合应抑制） |
| **Ma 2024 暗态测试** | **失败**：极化子应变模型在 dark 中应立即解除；prolonged dark seg 反驳此机制独立成立 |

### 卡片 3 · M3 缺陷-Trap / 局域电场（**Ma 2024 + Tiede 2020 强支持**）

| 项 | 内容 |
|---|---|
| **核心观察** | 缺陷密度 ↔ k_growth 正相关；表面 trap charges 寿命数分钟；电场撤除后立即 remix |
| **量化阈值** | (1) **k_growth 与 R_H 反相关**（Tiede 2020 Fig. 5c）；(2) 暗态持续相分离时间 = **2–5 min**（Ma 2024 NC）；(3) electric field bias 阈值 ~2 V/m（Ma 2024）；(4) **fast-KPFM CPD 弛豫时间 ~ min**（Garrett 2017，Qu 2026 引述） |
| **首选工具** | LSCM（共聚焦 PL）+ KPFM（CPD 演化）+ fast-KPFM（CPD 时间序列）+ EDS（化学计量调控） |
| **工具读数预期** | LSCM：暗区（高缺陷）k_growth >> 亮区；fast-KPFM：光照后 CPD 数分钟才稳定；KPFM：晶界 CPD 升高（trap charge 积累） |
| **反例（反驳）** | (1) 暗态相分离不持续 → 反驳；(2) hBN 钝化未抑制 → 反驳"表面 trap"；(3) 不同 R_H 样品 k_growth 无差异 → 反驳"缺陷主导" |
| **Ma 2024 暗态测试** | **完美兼容** — 暗态 min 级持续 + 撤场立即 remix 是该机制的精确指纹 |
| **协议级实验（推荐入研究计划 v3）** | "**激光 off + 3 W/cm² 短曝光读 PL**" 实验跑一遍，观察 PL 红/蓝移在 dark 中是否继续 |

### 卡片 4 · M4 Redox（hole 触发 I 氧化 + I2 vapor 损失）

| 项 | 内容 |
|---|---|
| **核心观察** | I⁻ → I⁰ → I2 vapor 损失；hole 优先定位 I 周围；vacuum 下不可逆（I2 loss） |
| **量化阈值** | (1) **V_I 比 V_Br 形成能低 ≥ 0.56 eV (FA0.8Cs0.2) ~ 0.89 eV (MA)**（Navid 2026）；(2) hole VBM 等值面在 I-rich 区域定位（Navid Fig. 4）；(3) Vacuum vs ambient remix 比 ≥ 5× 不同（Knight 2019） |
| **首选工具** | XPS（Pb⁰ / I⁰ 化学态变化） + Mass-spec（I2 vapor 释放） + AFM-IR / PTIR（I-Pb 化学键变化）+ 控气氛 PL |
| **工具读数预期** | XPS：光照后 Pb⁰ 信号增强；Mass-spec：I2 释放增量；PTIR：Pb-I 振动模式变化；vacuum 下 LHS 不可逆 |
| **反例（反驳）** | (1) **暗态相分离持续数分钟**（Ma 2024）→ M4 单独不成立（因 hole 已消失）；(2) vacuum 下 LHS 完全可逆 → 反驳；(3) Br-rich 端样品中 Br 损失为主 → 反驳 V_I 主导 |
| **Ma 2024 暗态测试** | **失败 if 单独** — 暗态 hole 已消失；但可能与 M3 协同 |

## 三、机制鉴别决策树（评估协议第二块）

> 给定一个待评估方案 X，按以下步骤的实验流，可以**唯一定位**它压制的是哪个机制（理想情况）：

```
START: 测样 X 的稳态光致 LHS（PL/CL/XRD baseline）
│
├─ Step 1: 撤光后短曝光读 PL 协议（Ma 2024 范式）
│  ├─ 暗态 PL 立即 remix → 提示 M2 应变 已被压制 OR 不存在
│  └─ 暗态 PL 数分钟内继续 LHS → M3 局域电场 主导
│
├─ Step 2: vacuum vs ambient 老化对比
│  ├─ vacuum 下不可逆 → M4 redox 参与
│  └─ 两环境可逆性相同 → M4 不主导
│
├─ Step 3: 化学计量 R_H 调控（参 Tiede 2020）
│  ├─ k_growth 强响应 R_H → M3 缺陷-trap 强参与
│  └─ k_growth 不响应 R_H → M3 不主导，M1/M2 主导
│
├─ Step 4: 终端 x 值是否 ~0.2 / 0.8 fixed
│  ├─ 是 → M1 热力学 / 米饭格底色
│  └─ 否（依组分变化） → M1 不主导
│
└─ Step 5: TOF-SIMS / Navid 描述符表面 Br 富集
   ├─ c_surf/c_bulk ≥ 4× → M1 表面偏好 ON
   └─ 表面/bulk Br 比 ≈ 1 → M1 表面偏好 OFF（机制可能是 bulk-driven）
```

> **协议输出 = (M1, M2, M3, M4) 四元向量**，每个分量是 [ON / OFF / 不确定]。一个理想抑制方案应该使其中至少一个 ON 转为 OFF。

## 四、Batch 2 关键阈值速查表

| 标准 | 数值 | 来源 |
|---|---|---|
| 终端 I-rich 组分 | x ≈ 0.2（**≈ MAPb(I0.8Br0.2)3**） | Tiede 2020, Bischak 2017 |
| LHS 应变阈值 | **0.3%** | Zhao 2020 |
| 极化子稳定上限温度 | **~340 K** | Brivio 2016 |
| 暗态持续 LHS 时间 | **2–5 min** | Ma 2024 |
| fast-KPFM CPD 弛豫时间 | **数分钟** | Garrett 2017 |
| 光致 LHS 阈值激发功率 | **20–200 μW/cm²**（视组分） | Ruth 2023, Tian 2022 |
| ΔDFE @ FA0.8Cs0.2 50% Br | **0.04 eV**（最稳） | Navid 2026 |
| ΔDFE @ MA 50% Br | **0.06 eV** | Navid 2026 |
| V_I vs V_Br 形成能差（MA） | **0.89 eV** | Navid 2026 |
| V_I vs V_Br 形成能差（FA0.8Cs0.2） | **0.56 eV** | Navid 2026 |
| Br 表面/bulk 浓度比（MA） | **10.03×** at 300 K | Navid 2026 |
| Br 表面/bulk 浓度比（FA0.8Cs0.2 50% Br） | **4.5×**（更稳） | Navid 2026 |
| 衰减长度 l（surface effect into bulk） | **4.2 / 8.9 / 6.6 Å**（MA / FA / FA0.8Cs0.2） | Navid 2026 |
| Tiede k_growth 典型值 | **0.017 s⁻¹**（高缺陷区更快） | Tiede 2020 |
| Tiede k_recovery 典型值 | **0.011 s⁻¹** | Tiede 2020 |
| 激发强度阈值 I_threshold | **20–200 μW/cm²** | Ruth 2023 |
| Cs 阳离子电子-声子耦合减弱 | 30% 减少（Bischak 2018 推导） | Tian 2022 引 |

## 五、Batch 2 结论（一句话）

> **dir4 评估协议的"读数靶心"建立**：4 类机制各有量化判据 + 反例 + Ma 2024 暗态测试结果；机制鉴别决策树用 5 步流程能给一个抑制方案打出 (M1, M2, M3, M4) 四元向量；Tiede + Navid + Ma 三篇共同证明**M3 局域电场 / 缺陷 trap** 是当前实证最强的暗态机制（M2 应变在 dark 失败，M4 redox 在 dark 单独失败）。

## 下一步（接 Batch 3）

读 Bai 2022（库内）+ Hu 2026（库内）+ Fang Z. 2024（OA 新下载）+ Hou 2020（OA 新下载）→ 把上述决策树**应用到 4 篇方案论文**：(1) 该方案在协议下打出什么 (M1, M2, M3, M4) 向量；(2) 论文证据是否支持这个向量；(3) 缺哪些读数。
