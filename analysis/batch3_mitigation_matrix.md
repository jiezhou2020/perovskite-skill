---
batch: 3
title: 解决方案对比矩阵 + 协议反向投影
direction: dir4 表征解耦
date: 2026-05-09
based_on: Bai 2022 + Hu 2026 + Fang Z. 2024 + Hou 2020
---

# Batch 3 综合 · 解决方案对比矩阵（4 案 × 4 机制）

> Batch 1 给"工具调色盘"（X 轴：表征工具）；Batch 2 给"读数靶心"（Y 轴：机制判据 + 阈值）；Batch 3 把 4 个真实方案过协议决策树，给出 (M1, M2, M3, M4) 机制向量 + 缺读评估。这是 Batch 4 研究计划 v3 中"反向验证"章节的实证基础。

## 一、4 案 × 4 机制总览矩阵

| 方案 | M1 热力学 | M2 极化子-应变 | M3 缺陷-trap/局域电场 | M4 redox |
|---|---|---|---|---|
| **Bai 2022** 硒吩添加剂 | 兼容/未独立 | 未测 | **ON→OFF 间接** | 未测 |
| **Hu 2026** 分子压印退火 | N/A 单卤 | 未测 | **ON→OFF 直接** | **ON→OFF 直接** |
| **Fang Z. 2024** 表面纳米抛光 | 加强（Br-rich 表面，反 Navid 描述符）| **ON→OFF 直接** | **ON→OFF 间接** | 部分（N2/air 对比）|
| **Hou 2020** 1-butanethiol SLP | 兼容/未独立 | 未测 | **ON→OFF 直接** | 未测 |

**符号约定：**
- ON→OFF 直接 = 论文用直接表征（如 KPFM、in situ XPS）证明该机制被压制
- ON→OFF 间接 = 论文通过相关性 / 整体性能推断该机制被压制
- N/A = 不适用该体系
- 未测 = 论文未做相关实验
- 加强 = 论文显示该机制特征反而增强

## 二、关键观察（5 条）

### 观察 1：所有 4 案都打 M3，但只有 2 案直接验证

> M3（缺陷-trap / 局域电场）是当前抑制方案的**默认靶点**，与 Batch 2 的"Ma 2024 暗态实验唯一兼容机制"结论一致。但 Bai / Fang Z. 是间接证据，Hu / Hou 是直接证据。**用户的评估协议应给"直接 vs 间接"打不同分**。

### 观察 2：M2 应变机制只在 Fang Z. 2024 显式针对

> Zhao 2020 的"应变激活 LHS"工作之后，主流方案少有显式打应变的；Fang Z. 2024 是少数显式 release residual strain 的论文。这意味着**M2 是 field 当前未充分利用的机制工具**。用户的研究计划 v3 可立"系统应变-LHS 解耦"作为差异化方向。

### 观察 3：M4 redox 几乎没人独立测

> 4 案里只有 Hu 2026（in situ XPS I/Pb 比）和 Fang Z. 2024（N2 vs air 对比）部分涉及 redox。**M4 是评估协议的盲区**，用户做"vacuum vs ambient 切换 + I2 vapor mass-spec"会是高边际价值的实验。

### 观察 4：M1 热力学描述符未被任何方案直接 calibration

> Navid 2026 的 ΔDFE / c_surf/c_bulk 描述符是 first-principles 预测，但**没有任何一篇方案做 TOF-SIMS 深度剖面把表面 vs bulk Br/I 比量化**。Fang Z. 2024 显式声称 Br-rich 表面但只用 XPS（~5 nm 深度），未量化 c_surf/c_bulk。**用户的协议应把"TOF-SIMS 深度剖面"列为 M1 calibration 必读**。

### 观察 5：所有 4 案都没做 Ma 2024 暗态短曝光实验

> 这是协议反向投影最大的**universal gap** — 即使最严谨的论文（Hou / Hu）也没把"撤光后是否持续相分离"作为机制鉴别实验。**用户在 dir4 评估协议中把这条立为"协议必读"**，将立刻把所有现有方案的 M3 vs M2 区分从模糊变明确。

## 三、协议读数补完 priority 表

> 把 4 案 × 5 项缺读做笛卡尔积，按"补完后能改变机制向量分量"的 leverage 排序：

| 优先级 | 缺读项 | 补完后改变 | 适用案 | 用户实验室可达性 |
|---|---|---|---|---|
| ★★★ | 暗态短曝光 PL（Ma 2024） | M3 vs M2 区分；M4 vacuum 间接验证 | **全 4 案** | 高（普通 PL + 控制系统）|
| ★★★ | fast-KPFM CPD 弛豫时间 | M3 直接验证 + 时间窗鉴别 | **全 4 案** | 中（需 KPFM）|
| ★★ | TOF-SIMS 深度剖面 c_surf/c_bulk | M1 描述符 calibration | 全 4 案，特别 Fang Z. | 中（需 TOF-SIMS）|
| ★★ | R_H 调控 + k_growth | M3 缺陷类型 | Bai / Fang Z. / Hou | 高 |
| ★ | Vacuum 老化（ISOS-D-3 vacuum） | M4 redox 验证 | 全 4 案 | 中 |
| ★ | 同步辐射 GIWAXS strain mapping | M2 strain release 量化 | Fang Z. | 低（需同步辐射） |
| ★ | I2 vapor mass-spec | M4 直接 | 全 4 案 | 低 |

## 四、4 案打分卡综合（评估协议的"试跑测试集"）

| 案 | 机制定位独立性 | 实验范式严谨度 | 量化指标可重现性 | 反向验证可达性 | 协议总评 |
|---|---|---|---|---|---|
| **Bai 2022** | C+ | B | A− | B+ | 间接证据，需补 5 项关键读数 |
| **Hu 2026** | A− | A | A | B | **强证据（FAPbI3）/ 待验证（混卤推广）** |
| **Fang Z. 2024** | B+ | A− | A | A | **多机制部分抑制，high-value multi-mechanism case** |
| **Hou 2020** | A | A | A | B+ | **M3 抑制金标准 case** |

## 五、机制向量"指纹"（评估协议的输出格式）

> 把每个方案的 (M1, M2, M3, M4) 状态作为一个**4 元向量指纹**：

```
方案                | M1 | M2 | M3 | M4 | 总评
Bai 2022 硒吩       | ?  | ?  | ✓i | ?  | 间接 M3
Hu 2026 MPA         | -  | ?  | ✓D | ✓D | 强双机制（单卤）
Fang Z. 2024 抛光   | ↑? | ✓D | ✓i | ◐  | 多机制 pluri-target
Hou 2020 SLP        | ?  | ?  | ✓D | ?  | 直接 M3 金标准
```

**符号**：✓D = 直接抑制；✓i = 间接抑制；◐ = 部分；? = 未测；- = N/A；↑ = 该机制特征反而增强

> **协议输出范式**：未来用户给一个新方案 X 打分时，输出格式即此 4 元指纹 + 缺读 priority 表 + 是否需补完哪些实验。

## 六、Field-Level 模式洞察

1. **M3 占据当前抑制方案的 60%+ 焦点** — Belisle 2017 + Ma 2024 两文之后，"surface trap → 局域电场"是 mechanism community 的 consensus；评估协议要给"M3 已被多重 demo"打基线分。
2. **混卤系统下 M2 + M4 联合抑制是最高价值方向** — Fang Z. 2024 是孤例，主流方案对应变和 redox 都未独立验证。
3. **暗态实验 + fast-KPFM 是评估协议的两个 game-changer** — 一旦协议把这两项立为 mandatory，几乎所有现有方案的 mechanism 描述都会被强迫升级。
4. **Navid 2026 的 ΔDFE 描述符 vs Fang Z. 2024 的 Br-rich 表面 = 一个待解的矛盾** — 实验观察"Br-rich 表面 + 抑制 LHS"与 DFT 预测"Br-rich 表面 + 增强分离趋势"看似矛盾，**这是博士工作的金矿**。

## 七、Batch 3 结论（一句话）

> **dir4 评估协议在 4 案试跑下表现良好**：(M1, M2, M3, M4) 4 元向量能区分"M3 抑制金标准（Hou）vs 双机制（Hu）vs 多机制（Fang Z.）vs 间接证据（Bai）"；**统一缺读 = 暗态短曝光 PL + fast-KPFM 弛豫时间**，补完即可把全部 4 案的机制描述从模糊升级到锐利；**Br-rich 表面理论 vs 实验的矛盾**和**M2/M4 在 field 内的 underutilization** 是博士研究计划 v3 的两个差异化切入点。

## 下一步（接 Batch 4）

整合 Batch 1-3 输出 → 编写：
- **phase_5 综合报告**（feedback_report_format 格式，主线"机制 → 表征 → 解决方案"朴素三段式）
- **研究计划 v3**（含必备的"协议反向验证 / case-study"章节 — 直接用本批的"4 案 × 缺读 priority"作为前期实验 backlog）
