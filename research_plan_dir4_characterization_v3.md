# 钙钛矿相分离 · 多机制表征解耦研究计划 v3

> 版本：v3 · 日期：2026-05-09 · 主线：dir4 表征解耦
> 与 v2（dir1 蓝移 EPC/distortion 解耦）并行存在；v3 不替换 v2，而是另起新方向。本计划 standalone，不依赖 v2 已有结论。

## 0. 命题修正与方向 reframe

### 0.1 上一阶段方向（v1 → v2）

v1 / v2 计划主线是把温度依赖 PL 蓝移 dEg/dT 拆成 EPC + thermal expansion + distortion 三项贡献，落地工具是 PL/absorption + pressure spectroscopy + Raman/THz + GIWAXS 多物理联合反演。

### 0.2 v3 主线变更（2026-05-06 起）

**新主线**：用表征手段解耦混卤钙钛矿相分离的多机制驱动，并把这套表征系统升级为可对其他抑制方案进行**机制定位 + 证据强度评分**的评估协议。

> **关键 reframe**（2026-05-09 paperflow 调研后明确）：目标不只是"建一个看到相分离的表征系统"，而是建立一套类似 ISOS（稳定性测试协议）在 stability 领域所扮演角色的**评估协议（evaluation protocol）**——拿到任何一个声称抑制相分离的方案（添加剂 / 表面钝化 / 退火工艺等），用这套协议读数后能定位它在多机制中的哪个层面起作用、给出"证据强度"评分，**为 field 提供有依据的方案评估系统**。这是博士工作的方法学增量主线。

### 0.3 与 v2 的关系

v2 的"多物理量联合反演"方法论可移植——把 dEg/dT 解耦中"控制单一变量、其余固定"的思想推广到相分离驱动力的解耦。v3 的工具调色盘也部分承继 v2（pressure spectroscopy、GIWAXS、TR-PL）。但 v3 的研究对象是**相分离速率与终端组分**而非**bandgap shift**，物理 observable 与拟合模型完全不同，因此另起 v3 而非修订 v2。

## 1. 研究命题

### 1.1 不应主张的版本

不建议写：

> 目前没有人成功用表征手段解耦相分离的多机制驱动。

容易被驳：Bischak 2017 + Tian 2022 + Frohna 2024 + Qu 2026 已分别用 CL imaging + 多技术综述 + multimodal operando + SPM 全谱做了不同程度的机制解耦。

### 1.2 建议主张的版本

建议写：

> 现有工作分别在不同样品 / 不同时间窗 / 不同空间尺度上用单技术或局部多技术组合验证了相分离的某一类机制（热力学 / 极化子-应变 / 缺陷-trap 局域电场 / redox），但缺少一个**面向方案评估的标准化协议**：能在同一样品上用统一的 5 步实验流程输出 (M1, M2, M3, M4) 4 元机制向量，并基于此为新方案做"打的是哪个机制 + 证据强度评分"。本研究将建立该协议、用 4 个真实方案（Bai 2022 / Hu 2026 / Fang Z. 2024 / Hou 2020）做反向验证，并以此为方法学锚点贡献 dir4 表征解耦在 field 内的标准化进程。

## 2. 机制坐标系

### 2.1 4 类机制划分（基于 Tian 2022 + Ma 2024 暗态实验细化）

| 机制 | 必需载体 | Ma 2024 暗态测试结果 |
|---|---|---|
| **M1 · 热力学** | 不需光生载流子 | 兼容暗态缓慢漂移 |
| **M2 · 极化子-应变** | 必需光生载流子持续 | **失败**：撤光应立即停 |
| **M3 · 缺陷-trap / 局域电场** | 不需光生载流子 | **完美兼容** |
| **M4 · Redox** | 必需光生 hole | 单独不能解释 dark seg |

### 2.2 关键判据

每个机制对应"该机制成立时该工具应读到什么数值"的量化阈值卡，详见 `analysis/batch2_mechanism_anchors.md`。本计划核心使用以下硬阈值：

> **M3 局域电场的硬阈值**：暗态 PL 持续相分离 2–5 min（Ma 2024 NCs）+ fast-KPFM CPD 弛豫数分钟（Garrett 2017）+ k_growth 与 R_H 反相关（Tiede 2020）。

> **M1 热力学的硬阈值**：终端 I-rich 组分 ≈ x = 0.2 + 表面/bulk Br 比 ≥ 4×（Navid 2026 ΔDFE 描述符）。

> **M2 应变的硬阈值**：W-H 应变 ≥ 0.3% + 撤光后 ns–μs 立即 remix（Zhao 2020 + Ma 2024）。

> **M4 redox 的硬阈值**：vacuum 下不可逆 + XPS Pb⁰ 显著增强 + I2 vapor 释放（Frolova 2021 + Hu 2026）。

## 3. 工具调色盘

### 3.1 核心工具组合

校内可达的旗舰组合：

```
共聚焦 hyperspectral PL（电压依赖）  → 局部 J–V + 准费米能级劈裂 μ
+ KPFM / fast-KPFM                   → 表面势 + 时间分辨 CPD
+ SEM-EDS                            → 元素分布
+ 原位 XRD                           → 相结构 + 应变
+ AFM-IR / PTIR（如可用）             → 局部化学键
+ TOF-SIMS（depth ≤ 1 nm）            → 表面/bulk 元素比
```

### 3.2 工具 × 4 机制方阵

完整 17 工具 × 4 机制方阵详见 `analysis/batch1_characterization_toolkit.md`。本计划核心使用以下 5 项 game-changer 配对：

> **时间窗鉴别**：fast-KPFM（ms–s）+ pp-KPFM 光泵浦（ps）合并使用，可以**直接区分"光载流子主导（ps–ns）"与"离子迁移主导（s–min）"**。这是 Tian 2022 综述未突出但 Qu 2026 强调的差异化判据。

## 4. 评估协议（5 步决策树）

### 4.1 协议输入

样品 X 的多份同批次器件 / 薄膜 + 老化前 / 老化后同区标记。

### 4.2 5 步流程

**Step 1 · 暗态短曝光 PL（Ma 2024 范式）**：先用 50 W/cm² CW 激光部分相分离样品 30 s；然后撤光，dark 中每 10 s 用 ≤ 3 W/cm²（低于阈值）短曝光 1 s 读 PL 谱；连续 10–30 min。**预期**：M3 主导样品 dark 持续 2–5 min；M2 主导样品撤光 ns–μs 内 remix。

**Step 2 · vacuum vs ambient 老化**：相同样品在 vacuum（< 10⁻⁵ mbar）和 ambient（30% RH）下做 ISOS-L-3 老化 100 h；老化前后做 PL mapping 比较 LHS 强度。**预期**：M4 主导样品 vacuum 下不可逆；其他机制可逆性相同。

**Step 3 · 化学计量 R_H 调控（Tiede 2020 范式）**：制备 R_H = 2.95 / 3.00 / 3.05 三组样品，每组 LSCM 测局部 k_growth(x)；拟合 k_growth = a + b·R_H。**预期**：M3 V_I 主导时 b 显著负值；其他机制 b ≈ 0。

**Step 4 · TOF-SIMS 深度剖面**：< 1 nm 深度分辨度量化 surface 0–2 nm 内 Br/I 平均比，与 bulk 5–10 nm 处比，得到 c_surf/c_bulk。**预期**：M1 表面偏好成立时 c_surf/c_bulk ≥ 4×（Navid 2026 阈值）；同时与 ΔDFE 描述符的预测做相关分析。

**Step 5 · fast-KPFM 老化前/后弛豫时间**：先 1-sun 老化 1 h，每 30 s 测一张 CPD 图；然后撤光，每 30 s 测一张 CPD，看回到稳态的时间。**预期**：M3 抑制成功的方案弛豫时间从分钟降到秒。

### 4.3 协议输出

每个方案输出一份**协议卡**：

> 4 元机制向量（M1, M2, M3, M4）+ 缺读 priority 表（哪些 step 信号不够清晰）+ 综合评级（A/B/C 加修饰）+ 改进建议。

详细输出格式参考 `analysis/batch3_mitigation_matrix.md`。

## 5. 协议反向验证（必备章节）

> 这一章是研究计划的方法学增量核心 — 评估协议建好后必须用真实方案试跑验证。

### 5.1 4 案 case-study 实验设计

针对 4 个已深读的方案，本计划逐个跑 5 步协议反向验证：

#### 5.1.1 Bai 2022 硒吩添加剂 case

**为何选**：Science 顶刊 + 数据公开充分 + 高 visibility。

**协议预期**：(M1 ?, M2 ?, **M3 ✓i**, M4 ?)。补完 Step 1 暗态 PL + Step 5 fast-KPFM 后预期向量升级到 (M1 ?, M2 ?, **M3 ✓D**, M4 ?)。

**实验**：复制硒吩添加剂工艺 + 跑 5 步协议；输出真实 4 元向量 + 与原文宣称的差异分析；预期周期 4 个月（合成 1 月 + 老化 + 表征 3 月）。

#### 5.1.2 Fang Z. 2024 表面纳米抛光 case（**优先级最高**）

**为何选**：multi-mechanism 案 + 解开 Br-rich 表面 vs ΔDFE 描述符理论矛盾的最佳样本。

**协议预期**：(**M1 ↑?**, **M2 ✓D**, **M3 ✓i**, M4 ◐)。补完 Step 4 TOF-SIMS 深度剖面后可直接验证：Br-rich 表面是否真的让 c_surf/c_bulk ≥ 4×；如是，则与 Navid 2026 ΔDFE 描述符方向一致；如不是，则 Fang Z. 的 "Br-rich 表面"是 surface region scale 的统计概念而非 < 1 nm 化学梯度，从而保留与 Navid 描述符的一致性。

**实验**：复制湿法纳米抛光工艺 + 跑全 5 步；输出 + 解析 Br-rich 表面机制；预期周期 6 个月。**这是 v3 计划差异化主题的核心 case**。

#### 5.1.3 Hou 2020 1-butanethiol SLP case

**为何选**：M3 直接抑制金标准 + 可与 dir3 已有的 Pothoof / Akrami APTMS 钝化做横向比较。

**协议预期**：(M1 ?, M2 ?, **M3 ✓D**, M4 ?)。补完 Step 1 暗态 PL 后的预期：撤光后 PL 立即 remix（与 Hou 2020 cite Belisle 2017 的"surface trap 是 LHS driver"一致）。

**实验**：1-butanethiol 蒸气钝化（蒸气工艺需自购或合作设备）+ 5 步协议；与 dir3 库内 Akrami / Pothoof 横比；预期周期 5 个月。

#### 5.1.4 Hu 2026 MPA 混卤推广 case

**为何选**：单卤系统已是协议金标准 case；推广到混卤是关键验证。

**协议预期**：原文向量（FAPbI3）= (N/A, ?, ✓D, ✓D)；推广到 FACsPb(Br0.2I0.8)3 后预期 (M1?, M2?, ✓D, ✓D + 新增 M1 测试)。

**实验**：在导师有 MPA 工艺的合作组织协议下做（如不可达可降低优先级）；预期周期 6–8 个月。

### 5.2 反向验证的方法学价值

> 反向验证不只是"应用协议"，而是用 4 个真实方案的 protocol output 与原文宣称比对，**找出协议本身的失效点**。每个失效点就是协议 v0.2 / v0.3 的修订依据 — 这是博士工作"做出协议而非只用协议"的关键差异。

具体失效点候选：(a) Step 1 暗态实验在 thin film 上是否仍像 NC 一样有 prolonged dark seg；(b) Step 4 TOF-SIMS 在含 Cl 体系下信号干扰如何处理；(c) Step 5 fast-KPFM 在 wrinkled morphology 下 CPD 解读复杂度。

### 5.3 协议争议方案试跑（差异化锚点）

挑一个 field 内**机制有争议**的方案 — 候选：Macpherson 2022 的"PL trap"vs Frohna 2022"trap state 与 PL 强度反相关"在不同合成路径上结论矛盾 — 用 5 步协议跑一次，看能否给出唯一 4 元向量。**如能**，协议价值得到 demonstration；**如不能**，identify 协议盲区即未来工作。这是博士工作"独创性 + 方法学贡献"的双重锚点。

## 6. 工作 backlog（24 个月）

### 6.1 Year 1（前 12 个月）：协议骨架建设

> 目标：把 5 步协议在 1 个 baseline 样品上跑通。

**Q1**：搭建共聚焦 hyperspectral PL（电压依赖）+ KPFM（含 fast-KPFM）+ 老化箱 + 控气氛舱组合，做 baseline 样品 FACsPb(Br0.2I0.8)3 的 fresh 数据（PL mapping、k_growth 局部、CPD 基线）。

**Q2**：跑 Step 1 + Step 5 在 baseline 样品上；建立"暗态 PL 持续时间"和"fast-KPFM CPD 弛豫时间"的标准协议参数（曝光功率 / 间隔 / 总时长 / 数据处理 SOP）。

**Q3**：补 Step 2（vacuum vs ambient）+ Step 3（R_H 调控）；处理 step 间数据相互校准问题（如 R_H 对 fast-KPFM 弛豫是否有影响）。

**Q4**：完成 baseline 全 5 步协议 + 第一份 4 元向量输出；同时复制 Fang Z. 2024 抛光样品作为第一个 case-study 候选。

### 6.2 Year 2（13–24 月）：协议 case-study + 修订

**Q5–6**：Fang Z. 2024 抛光 case 跑全 5 步；补 Step 4 TOF-SIMS 深度剖面（与同步辐射 / 仪器中心合作）；解析 Br-rich 表面与 ΔDFE 描述符的关系。

**Q7**：Hou 2020 SLP case + dir3 库内 APTMS 横比；输出 dir4 评估协议 v0.1 公开稿。

**Q8**：协议争议方案试跑（Macpherson 2022 vs Frohna 2022 trap 论 / 类似争议）；写第一篇 demonstration 论文（评估协议 + 1–2 个 case-study + 给 field 提供使用规范）。

### 6.3 关键 milestone

| Milestone | 时间 | 产出 |
|---|---|---|
| Baseline 协议跑通 | Q4 | 单样 4 元向量 + SOP v0.1 |
| 第一个 case-study | Q6 | Fang Z. 协议输出 + 矛盾解析 |
| 协议公开稿 | Q7 | 评估协议 v0.1 全文 |
| Demonstration 论文 | Q8–9 | 评估协议 + 1–2 case-study + 协议价值证明 |

## 7. 风险与备选

> 单点失败不致全盘失败；下表给出主要风险与备选路径。

| 风险 | 备选 |
|---|---|
| fast-KPFM 时间分辨不达预期 | 改用 PL 时间序列 + 反卷积；或与外部 SPM 中心合作 |
| TOF-SIMS < 1 nm 分辨不可达 | 用 XPS angle-resolved 替代；牺牲深度分辨保留化学组分对比 |
| 4 案合成复制失败 | 优先 Bai + Fang Z.（最易复制），降级 Hou 蒸气工艺 + 跳过 Hu MPA |
| 老化箱可控气氛达不到 vacuum | Step 2 改为 N2 vs 空气切换；M4 redox 验证仍可定性 |

## 8. 与 v2 关系说明

> v3 不替换 v2；两者共存。v2 的 dir1 蓝移 EPC/distortion 解耦工作可作为方法学训练（已有的 Francisco-López / Rubino / Prasanna / Wright 文献基础在 dir1 已扎实）；v3 的 dir4 表征评估协议是当前博士工作主线。

如未来 v3 跑通后协议被 field 接受作为标准，v2 的部分实验思路（multiphysics 联合反演）可以作为协议中"M2 应变机制定量"的工具补充。

## 9. Next steps

1. **本周内**：以本计划为基础，与导师讨论 Q1 实验启动顺序（共聚焦 PL 优先 vs KPFM 优先），并确认老化箱 + 控气氛舱设备清单。

2. **下个月**：完成共聚焦 PL（电压依赖）的 SOP 编写；启动 baseline 样品（FACsPb(Br0.2I0.8)3 或类似 1.66–1.68 eV WBG）合成。

3. **3 个月内**：在 baseline 样品上跑通 Step 1 + Step 5；输出"暗态 PL + fast-KPFM CPD 弛豫"双指标的 baseline 数值范围。

4. **6 个月内**：复制 Fang Z. 2024 抛光样品 + 第一个完整 5 步协议；准备 dir4 评估协议 v0.1 草稿。
