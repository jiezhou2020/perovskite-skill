---
paper: Hou 2020 Science — 1-butanethiol surface passivation tandem
direction: dir2 解决方案 → dir4 反向投影
read_date: 2026-05-09
batch: 3
---

# Hou 2020 · 1-butanethiol 自钝化 + tandem · 反向投影

## 1. 元数据

- **一作 / 通讯**：Yi Hou / Stefaan De Wolf & Edward H. Sargent（Toronto + KAUST）
- **期刊**：Science 367, 1135 (2020) · DOI 10.1126/science.aaz3691
- **方向归属**：dir2 解决方案 + dir3 表面钝化（WBG 1.68 eV）
- **核心策略**：1-butanethiol 蒸气钝化 perovskite/电子传输层界面 → thiol 锚定 Pb²⁺ → 限制载流子积累 → 抑制相分离

## 2. 解决方案要点

- 体系：1.68 eV Cs0.05MA0.15FA0.8PbI2.25Br0.75（混卤 WBG）on textured c-Si tandem
- 工艺：1-butanethiol 蒸气曝露（self-limiting）→ 厚膜 ~1 μm perovskite
- 设备结果：**25.7% 认证 tandem PCE**；400 h 85 °C 热稳定保持原性能；400 h MPP @ 40 °C 稳定

## 3. 作者声称的机制

- 1-butanethiol 通过 thiol 基团锚定 Pb²⁺（self-assembled monolayer 类似）
- Self-limiting：第一层钝化后无更多 anchoring site → 不会过度钝化
- **明确 cite Belisle 2017**：表面 trap charges + carrier accumulation 是光致 LHS 驱动力 → SLP 钝化抑制 trap → 抑制相分离
- TRPL τ 570→900 ns（SLP）；TOPO 较优 ~15%
- 20 min 光照 SLP-treated 膜 PL 稳定，control 红移 → LHS 抑制
- 纳米尺度 KPFM cross-section：硅金字塔 valley 处耗尽宽度 380 nm vs top 100 nm → 几何增强电场

## 4. 表征证据清单

| 工具 | 用途 | 与 Batch 1 调色盘对应 |
|---|---|---|
| **TRPL（air/perovskite vs glass/perovskite 双侧激发）** | 表面 vs bulk 缺陷比对 | M3 直接（深度分辨） |
| **PL 时间序列 20 min** | LHS 红移与否 | M1 + M3 |
| GIWAXS | 晶相不变化 | M1 |
| TA spectroscopy | 单 GSB 峰 = 单一相 | M1 |
| **纳米级 KPFM cross-section（forward bias 1 / 1.5 V）** | 内置电场剖面 | **M3 直接（介电场强度量化）** |
| **纳米级载流子扩散长度 mapping**（PL-AFM 类） | 100×100 nm 区域 GB vs grain | **M3 直接（缺陷密度空间分辨）** |
| EQE | 上 cell 92-93% plateau | 设备 |
| MPP / heat soak | 长稳定 | 整体 |

## 5. 协议反向投影 — (M1, M2, M3, M4) 机制向量

| 步骤 | 论文是否做 | 结论 |
|---|---|---|
| **Step 1（暗态短曝光 PL）** | ❌ 没做 | M3 vs M2 区分缺失 |
| **Step 2（vacuum vs ambient）** | ❌ 论文老化在 ambient encapsulated；未直接做 vacuum 切换 | M4 redox 状态未直接验证 |
| **Step 3（化学计量 R_H 调控）** | ❌ 没做 | M3 缺陷类型未独立分辨 |
| **Step 4（终端 x 值）** | 部分（看 PL 红移与否） | 控制样品红移与 LHS 一致；SLP 抑制 |
| **Step 5（表面 Br/I 比）** | ❌ 没做 TOF-SIMS 深度剖面 | M1 描述符未直接 calibration |

**协议机制向量**：(M1 [兼容/未独立], M2 [未测], **M3 [ON→OFF, 直接证据：KPFM + 扩散长度 mapping]**, M4 [未测])

> **关键解读**：Hou 2020 是**M3 局域电场机制**最直接的 demonstration：
> - 显式 cite Belisle 2017 把 LHS 归到 surface charge accumulation
> - KPFM 量化电场分布 + 扩散长度 mapping 量化 GB 缺陷分布
> - SLP 通过钝化 Pb²⁺ → 减少 surface 缺陷 → 减少 trap-induced field

> **与 Ma 2024 的强对应**：Ma 2024 用 hBN flake 钝化 NCs 表面同时抑制光致 + 暗态相分离；Hou 2020 用 1-butanethiol 蒸气钝化薄膜表面 → **机制完全一致**（surface trap charge → 局域电场 → LHS）。两文用不同钝化层在不同尺度（NC vs μm-thick film）做了同一机制的双 demonstration。

## 6. 缺读 / 评估系统反向打分

1. **暗态短曝光 PL（Ma 2024 范式）** — 用 SLP-treated 厚膜跑暗态实验；预期 dark seg 显著抑制（这就是 Hou 2020 与 Ma 2024 同机制的直接验证）。
2. **fast-KPFM CPD 弛豫时间** — SLP 后 CPD 弛豫从分钟降到秒？这是 M3 抑制的最锋利判据。
3. **TOF-SIMS / nXRF 表面 vs bulk Br/I 比** — 验证 SLP 是否影响 Navid 描述符 c_surf/c_bulk。
4. **vacuum 老化** — 验证 M4 redox 路径是否仍存活。
5. **R_H 调控** — 验证缺陷类型（V_I vs V_Br）是否选择性抑制。

## 7. 评估系统打分卡

| 维度 | 分数 / 评级 | 注 |
|---|---|---|
| 机制定位独立性 | **A** | M3 直接证据双重（KPFM + diffusion mapping）+ 引文逻辑链清晰（Belisle 2017）|
| 实验范式严谨度 | **A** | 双侧 TRPL + KPFM 横断面 + 厚膜 demonstration |
| 量化指标可重现性 | **A** | 570/900 ns、380/100 nm 耗尽宽度、92-93% EQE 全可量化 |
| 反向验证可达性 | **B+** | 蒸气工艺需特殊设备；但思路简单可移植 |
| **总评** | **协议下"M3 直接抑制 + 其他机制状态待补"，是 dir4 评估协议中 M3 抑制的金标准 case** | |

## 8. 对用户研究计划 v3 的 case-study 价值

**Hou 2020 是 dir4 评估协议中"M3 局域电场抑制"最经典的 case-study**：
- ✅ KPFM cross-section + 纳米级扩散长度 mapping 是 dir4 工具调色盘的标准范例
- ✅ 与 Ma 2024 形成"NC + 薄膜 + tandem"的多尺度 mechanism convergence
- ✅ 钝化思路简单，可与 dir3 已有的 Pothoof 2023 / Akrami 2023 APTMS 钝化做横向比较 → "不同钝化分子如何改变 trap density 与 LHS 速率"是评估系统的细分维度
- ⚠️ 缺暗态实验 + vacuum 测试 → 用户可立"Hou 2020 + Ma 2024 范式 → 协议补完"作为博士前期验证实验
