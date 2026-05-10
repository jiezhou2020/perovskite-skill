---
paper: Fang Z. 2024 Nat Comms — surface reconstruction WBG perovskite
direction: dir2 解决方案 → dir4 反向投影
read_date: 2026-05-09
batch: 3
---

# Fang Z. 2024 · 表面纳米抛光 + 钝化重构 · 反向投影

> ⚠️ **注意**：此 Fang Z. 2024（华侨大学 Zheng Fang）≠ 用户库内 dir2_Fang_2024（综述：WBG 相分离三机制综述）。两篇同年同名作者，**完全不同工作**。

## 1. 元数据

- **一作 / 通讯**：Zheng Fang & Bingru Deng & Yongbin Jin / Liqiang Xie & Zhanhua Wei & Xipeng Xu（华侨大学）
- **期刊**：Nature Communications 15: 10554 (2024)
- **DOI**：10.1038/s41467-024-54925-4
- **方向归属**：dir2 解决方案（WBG 1.67 eV）
- **核心策略**：湿法纳米抛光（anisole + Al2O3 nanoparticle）移除 ~50 nm 表面缺陷富集层 → 暴露高结晶度表面 → 钝化重构

## 2. 解决方案要点

- 体系：1.67 eV WBG perovskite（混卤 Br/I）
- 工艺：30 s 湿抛光 → 移除 50 nm 缺陷富集层 → 表面粗糙度 12.5 → 3.3 nm
- 论文声明 4 大效应：
  - **Effect I**：移除表面缺陷
  - **Effect II**：抑制相分离（声明，间接通过 Effect I）
  - **Effect III**：释放残余晶格应变
  - **Effect IV**：形成 Br-rich 表面（不同硬度差异）
- 设备结果：opaque PSCs 24.48% (cert 23.67%)；ST-PCSs 21.95% (cert 21.70%)；4T tandem 33.10% cert (1 cm²)；1505 h MPP 保持 80%

## 3. 作者声称的机制

- 表面 ~40 nm 是无定形层（HRTEM 显示）→ 缺陷源
- 抛光后 (001) 晶面外露，6.6 Å 晶格条纹清晰 → 高结晶度
- Br-I 硬度差 → 抛光优先去除 I-rich 区 → Br-rich 表面（**有趣！与 Navid 2026 DFT 描述符 Br 表面偏好一致**）
- 钝化重构后 PL 红移抑制：control 742→748 nm in 60 min；target stable

## 4. 表征证据清单

| 工具 | 用途 | 与 Batch 1 调色盘对应 |
|---|---|---|
| Cross-sectional SEM/HRTEM | 表面无定形 vs 结晶 | 形貌 / 化学（间接） |
| XPS | Pb⁰ 强度变化 | M3/M4 间接 |
| XRD + GIWAXS | 晶相 + (001) 强度增强 | M1 相结构 + M2 应变 |
| TRPL（air vs glass 侧） | τ 413→869 ns | M3 直接（缺陷复合） |
| **PL mapping + 时间序列** | 60 min N2 + air 双环境 | **M1 + M3 直接** |
| **KPFM + 30 V bias 后电流监测** | 离子迁移直接观察 | M3 直接（GB ion migration） |
| Williamson-Hall 应变分析（间接） | 残余应变 release | **M2 直接** |

## 5. 协议反向投影 — (M1, M2, M3, M4) 机制向量

| 步骤 | 论文是否做 | 结论 |
|---|---|---|
| **Step 1（暗态短曝光 PL）** | ❌ 没做 | M3 vs M2 区分缺失 |
| **Step 2（vacuum vs ambient）** | ✅ N2 vs ambient air 做了 | air 下 control PL 红移更强 → 含氧/水加速 LHS（提示 M4 redox 部分参与） |
| **Step 3（化学计量 R_H 调控）** | ❌ 没直接调 R_H | M3 缺陷类型未独立分辨 |
| **Step 4（终端 x 值）** | ✅ PL 红移到具体波长但未量化 x | M1 兼容（无反例） |
| **Step 5（表面 Br/I 比）** | ✅ Effect IV 显式声称 Br-rich 表面（XPS） | **M1 直接证据：Br 表面富集（与 Navid 2026 DFT 完美对接！）** |

**协议机制向量**：(**M1 [被增强而非削弱?]**, **M2 [ON→OFF, 直接：strain release]**, **M3 [ON→OFF, 间接但强：TRPL + KPFM 离子迁移]**, **M4 [ON→OFF, 部分：N2/air 对比]**)

> **关键解读**（最有趣的 case-study）：
> - Fang Z. 2024 是**唯一一篇直接打 M2 应变机制**的方案（与 Zhao 2020 应变-LHS 完美对接）
> - 同时 KPFM + 离子迁移直接观察 → **M3 直接证据**
> - **令人意外的 M1 解读**：Br-rich 表面**理论上**应该（按 Navid 2026 描述符）让相分离驱动力更强（c_surf/c_bulk 增大），但**实验观察**反相分离效果增强 → 提示 Navid 描述符的"Br 表面富集 = 相分离倾向高"在 dynamic 情境下需要修正：可能 Br-rich 表面通过减少 trap density 反而稳定。这是一个**协议给出的研究 hypothesis**，可作为博士工作的切入。

## 6. 缺读 / 评估系统反向打分

1. **暗态短曝光 PL（Ma 2024 范式）** — 验证抛光后 trap-charge 储库是否真消失。
2. **TOF-SIMS 深度剖面（< 1 nm 分辨）量化 c_surf/c_bulk Br 比** — 直接对接 Navid 2026 描述符；可验证 Br-rich 是 1 nm 表面层还是 10 nm 厚 surface region。
3. **fast-KPFM CPD 弛豫时间** — 抛光后弛豫时间是否从分钟缩短到秒（M3 严密验证）。
4. **R_H 调控（在抛光后样品上）** — 看 k_growth 是否仍依赖 R_H；如不依赖则 vacancy 缺陷已被消除；如仍依赖则只是 spatial averaging。
5. **同步辐射 GIWAXS 应变 mapping** — 量化 Effect III 的 strain release 是否均匀。

## 7. 评估系统打分卡

| 维度 | 分数 / 评级 | 注 |
|---|---|---|
| 机制定位独立性 | **B+** | 4 种机制各有间接 / 部分证据，无单一直接打中机制；但 KPFM + N2/air 对比强 |
| 实验范式严谨度 | **A−** | 60 min N2 + ambient 时间序列 + 30 V bias KPFM 范式好 |
| 量化指标可重现性 | **A** | 50 nm 抛光厚度、TRPL 869 ns、12.5→3.3 nm 粗糙度全部可量化 |
| 反向验证可达性 | **A** | 抛光工艺简单，用户实验室易复现 |
| **总评** | **协议下"多机制部分抑制"，是评估系统 case-study 的高价值 multi-mechanism 案例** | |

## 8. 对用户研究计划 v3 的 case-study 价值

**Fang Z. 2024 是 dir4 评估协议反向验证的最佳 case-study 候选**：
- ✅ 同时打 M1+M2+M3 三个机制（M4 部分）→ 协议读数应给出 **(?, OFF, OFF, partial)** 向量
- ✅ Br-rich 表面与 Navid 2026 描述符的预期反向（即 c_surf/c_bulk 大但稳定增强）→ **理论 vs 实验 tension 是博士工作的金矿**：用户可设计实验解开"Br-rich 表面是稳定剂还是不稳定源"
- ✅ 工艺简单，用户校内可重现 → 适合作为协议验证 hardware-pilot 实验
- ⚠️ 论文未做 ISOS-D vacuum 老化 → M4 redox 是否完全抑制不确定
