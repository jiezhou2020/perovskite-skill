---
batch: 1
title: 表征系统骨架 — 工具调色盘
direction: dir4 表征解耦
date: 2026-05-09
based_on: Frohna 2024 + Tian 2022 + Qu 2026
---

# Batch 1 综合 · 工具调色盘（机制 × 表征工具方阵）

> 把 Tian 2022 的 4 类机制（热力学 / 极化子-应变 / 载流子梯度-trap / redox）作为 X 轴，Qu 2026 + Tian 2022 + Frohna 2024 综述里的所有表征工具作为 Y 轴，标注每个组合是「直接证据 ✓✓」「间接证据 ✓」「不适用 −」。这是用户后续 Batch 2/3/4 的支撑骨架。

## 一、机制坐标系（X 轴）

| 机制 | 关键观测特征 | 主要倡导文献 |
|---|---|---|
| **M1 · 热力学（混溶间隙）** | 终端 x 值固定（~0.2 / ~0.8），可逆性中等，温度依赖弱 | Brivio 2016, Bischak 2017, Chen 2021 |
| **M2 · 极化子 / 应变** | 软晶格大极化子局域应变，需持续光生载流子维持，应变 0.3% 阈值 | Bischak 2017, Wang 2020, Zhao 2020 |
| **M3 · 载流子梯度 / Trap** | 缺陷密度依赖，表面 / GB 主导，电场积累驱动 | Barker 2017, Knight 2020, McGehee group |
| **M4 · Redox（氧化还原）** | I⁻ → I⁰ → I2 vapor，真空下不可逆，VBM 深度阈值，hole 触发 | Kim 2018, Frolova 2021, Kerner 2021 |

## 二、工具调色盘（Y 轴）— 关键参数

| 工具 | 空间分辨 | 时间分辨 | 直接读出量 |
|---|---|---|---|
| 共聚焦 PL mapping | 200–300 nm | ~s | 局部 PL 谱（峰位/强度/FWHM） |
| Hyperspectral PL（Frohna） | μm | s（电压扫描时） | 全光谱 + 准费米能级劈裂 μ + 局部 J–V |
| **PL-AFM / SNOM** | **20–50 nm** | s | 同区 PL + 形貌 |
| **CL imaging（SEM）** | **~20 nm** | s | I-rich 域纳米定位 + 形貌 |
| TEM in situ | sub-Å | ms | 格子重排，电子束驱动 |
| EDS-TEM | ~nm | s | Br/I 元素比 |
| nXRF（同步辐射，Frohna） | ~30 nm | min | Br/Pb/Cs/I 元素分布 |
| AFM-IR / PTIR | **10–20 nm** | s | 局部 IR 振动谱 + 化学组分 |
| s-SNOM | **27 nm** | s | 局部 IR near-field（介电函数） |
| c-AFM（导电 AFM） | nm | s | 局部光电流 / 暗电流 |
| **KPFM（标准）** | nm–10 nm | s | CPD（接触电势差） |
| **fast-KPFM** | nm | **ms–s** | CPD 时间序列 |
| **pp-KPFM（电脉冲）** | nm | **4 ns** | 瞬态 CPD |
| **pp-KPFM（光泵浦）** | nm | **1 ps** | 光生载流子 CPD 弛豫 |
| SPVM | nm | ms（受 KPFM feedback 限） | 光致 CPD 变化（surface PV） |
| 原位 XRD（Bragg） | μm | s | 晶格畸变、相结构演化 |
| TOF-SIMS | μm | min | 元素深度剖面 |

## 三、机制 × 工具方阵（核心输出）

```
工具                   | M1 热力学 | M2 极化子-应变 | M3 载流子-trap | M4 redox
-----------------------|-----------|----------------|----------------|----------
共聚焦 PL mapping       | ✓ 终端 x   | ✓ 应变下 r-shift| ✓ GB 偏好     | ✓ 暗态恢复
Hyperspectral PL（F）   | ✓✓ 整 J–V  | ✓             | ✓✓ μ vs 复合 | ✓
PL-AFM / SNOM          | ✓        | ✓             | ✓✓ 缺陷-PL 关联| ✓
CL imaging             | ✓✓ I-rich 定位 | ✓        | ✓✓ GB 优先位置 | ✓
TEM in situ            | ✓✓ 相结构演化| ✓ 格子畸变   | −             | −
EDS-TEM                | ✓✓ 终端组分| −            | ✓ GB 处 Br/I 比 | ✓
nXRF                   | ✓✓ Br:Pb 分布| −          | ✓             | ✓ 元素丢失
AFM-IR / PTIR          | ✓ Cl/I 重排| −            | −             | ✓✓ 化学键变化
s-SNOM                 | ✓        | −             | ✓ 介电函数变化  | −
c-AFM                  | −        | −             | ✓✓ GB vs 晶内电流| ✓
KPFM（静态）           | ✓ 表面势  | −             | ✓✓ GB 带弯     | ✓
**fast-KPFM**          | −        | −             | ✓✓ 离子迁移时间 | ✓✓ I2 释放慢动力
**pp-KPFM 电脉冲**     | −        | ✓             | ✓✓ trap 充放电  | −
**pp-KPFM 光泵浦**     | −        | ✓✓ 极化子动力学| ✓✓ 光载流子分离  | −
SPVM                   | −        | ✓             | ✓✓ 局部电场     | −
原位 XRD               | ✓✓ 相分裂峰| ✓✓ 应变张量  | −             | −
TOF-SIMS               | ✓        | −             | ✓ 深度梯度     | ✓ 元素丢失
```

**符号约定：** ✓✓ = 直接证据（该机制的 hallmark 信号该工具能直读）；✓ = 间接证据（需结合其他证据推断）；− = 不适用（信号被其他贡献掩盖或工具维度不匹配）。

## 四、关键去重观察

> 同一机制的鉴别**最强组合**（多技术 cross-validate 后给出唯一答案）：

| 机制 | 推荐组合（按用户实验室可达性） | 备用组合（高门槛） |
|---|---|---|
| **M1 热力学** | 共聚焦 PL（终端 x） + 原位 XRD（相分裂） + EDS-TEM（终端组分） | nXRF + 同步辐射 GIWAXS |
| **M2 极化子-应变** | 原位 XRD + Raman（声子刚度） + pp-KPFM 光泵浦（极化子弛豫） | TR-PL 电子-声子耦合 + 单晶 PL 在外应力下 |
| **M3 载流子-trap** | KPFM（GB 带弯） + c-AFM（GB 电流） + PL-AFM（缺陷-PL 关联） | s-SNOM + KPFM 同区 + pp-KPFM 充放电 |
| **M4 redox** | PTIR / AFM-IR（Cl/I 化学键演化） + fast-KPFM（数分钟弛豫 = 离子迁移） + 真空 vs 大气控制实验 | TOF-SIMS 深度剖面 + Mass-spec I2 vapor 探测 |

## 五、关键鉴别判据（来自 Qu 2026 时间窗思维）

> **时间窗鉴别**是 dir4 评估协议中最具差异化的判据 — Tian 2022 没有突出。

| 时间尺度 | 主导贡献 | 最佳工具 |
|---|---|---|
| ps | 光生载流子初始分离 | **pp-KPFM 光泵浦** |
| ns–μs | 极化子形成 / trap 填充 | TR-PL + pp-KPFM 电脉冲 |
| ms–s | trap 充放电 | fast-KPFM |
| s–min | **离子迁移**（与光载流子区分的关键判据） | fast-KPFM + 原位 PL mapping |
| min+ | **redox / 元素损失** | PTIR 时间序列 + 大气-真空切换 |

**核心鉴别判据**：MAPbI3 表面光照后 CPD 弛豫时间数分钟（Qu 2026 引 Garrett 2017）→ **如果一个新方案声称压制了"光载流子驱动"机制，但 fast-KPFM 显示弛豫时间仍在分钟量级，那它实际压制的是离子迁移而非光载流子**。这就是评估协议能给方案"机制定位"的核心机制。

## 六、Frohna 2024 toolkit 落地到用户实验室的可行版本

| Frohna 原版（旗舰） | 用户校内可达版本（精简） | 信息层 |
|---|---|---|
| Hyperspectral PL（lab）+ 同步辐射 nXRF（Diamond I14） | 共聚焦 hyperspectral PL + SEM-EDS（实验室） | 化学组分 + 局部 J–V |
| Voltage-dependent PL → 局部 J–V | Voltage-dependent PL（同样可在校内） | 局部光学 J–V |
| ISOS-L-2I 老化 + 同区 fresh/operated | 老化箱 + KPFM/PL 同区扫描 | 老化前后比对 |

**可立即开展**的精简版：共聚焦 PL（FWHM/intensity/peak position 三参数 mapping） + KPFM（CPD） + SEM-EDS → 同区扫描 fresh vs operated → 输出"PCE-like disorder index" + "phase segregation disorder index" 两个量化指标。

## 七、Batch 1 结论（一句话）

> **dir4 评估协议的工具调色盘骨架已立**：4 类机制 × 17 种工具的方阵清晰可用；时间窗（ps → min+）是最强鉴别维度；pp-KPFM + fast-KPFM 把"光载流子 vs 离子迁移 vs redox"三层贡献用时间分辨拆解开 — 这是用户研究计划 v3 中"反向验证"章节的核心方法学锚点。

## 下一步（接 Batch 2）

读 Tiede 2020（碘缺陷重组） + Navid 2026（DFT 描述符） + Ma 2024（暗态电场）→ 把上述方阵每个 ✓✓ 单元格里"该机制对应什么具体 falsifiable 阈值"补出来，构成 Batch 2 输出"读数靶心"。
