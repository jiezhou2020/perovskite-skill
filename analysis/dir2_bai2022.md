---
paper: Bai 2022 Science — selenophene additive for film homogeneity
direction: dir2 解决方案 → dir4 反向投影
read_date: 2026-05-09
batch: 3
---

# Bai 2022 · 硒吩添加剂 + 初始均匀性 · 反向投影

## 1. 元数据

- **一作 / 通讯**：Yang Bai / Qi Chen（北京理工 + 北大）
- **期刊**：Science 378, 747–754 (2022) · DOI 10.1126/science.abn3148
- **方向归属**：dir2 解决方案（mixed cation 主，mixed halide 次）
- **核心策略**：硒吩 (selenophene) 添加剂 → CsI·PbI2 colloid 减小 → 初始 Cs/FA 均匀分布 → 抑制后续 cation aggregation 和 halide segregation

## 2. 解决方案要点

- 体系：FA1-xCsxPbI3（双阳离子）+ FACsPb(Br0.13I0.87)3（混卤 1.66 eV 宽带隙）
- 添加剂：硒吩 + 弱 Lewis 碱配位 Pb → 减小 colloid 622→552 nm（DLS）
- 初始均匀性指标：TOF-SIMS Cs⁺ FWHM 强度 0.08→0.04
- Schelling 模型：ISP（initial segregation %）↓ → device lifetime ↑
- 设备结果：23.7% 认证 PCE；3190 h MPP @ 45 °C 保持 91%；混卤 T80 = 340 h（vs 168 h 控制）

## 3. 作者声称的机制

- **抑制 cation aggregation**（Cs+ 在 PbI2 colloid 周围聚集）→ 减少 d-FAPbI3 / d-CsPbI3 形成（DFT：均匀→分离 ΔE = -0.133 kJ/mol；分离→δ-phase ΔE = -9.427 kJ/mol，后者是 sink）
- **混卤情形**：声称同样的初始均匀性思路适用于 Br/I segregation；TOF-SIMS 表明 ISP=28% film 在光照 24 h 形成 ~5 μm I⁻-deficient 区，而 ISP=3% film 保持均匀

## 4. 表征证据清单（论文中实际用到的）

| 工具 | 用途 | 与 Batch 1 调色盘对应 |
|---|---|---|
| 2D PL mapping | 看 wavelength/intensity/FWHM 演化 | M1 间接 + M3 |
| TOF-SIMS（Cs⁺ / I⁻ 2D + 深度） | 元素空间分布 | M1 直接（化学组分） |
| XRD | δ-相形成与否 | M1 相结构 |
| DFT | 自由能阶段 | M1 热力学 |
| DLS | colloid 尺寸 | （化工指标，非 Batch 1 之内） |
| EXAFS | Pb-I 配位数变化 | M1 化学 |
| XPS | Pb 4f 维持 Pb²⁺ | M3/M4 间接 |
| MPP tracking + ISOS protocol | 长稳定性验证 | 整体性能 |

## 5. 协议反向投影 — (M1, M2, M3, M4) 机制向量

应用 Batch 2 决策树 5 步流程：

| 步骤 | 论文是否做 | 结论 |
|---|---|---|
| **Step 1（撤光后短曝光读 PL）** | ❌ 没做 | M2/M3 区分缺失 |
| **Step 2（vacuum vs ambient）** | ❌ 没做 | M4 redox 状态未知 |
| **Step 3（化学计量 R_H 调控）** | ❌ 没做（只调阳离子分布） | M3 缺陷类型未直接测 |
| **Step 4（终端 x 值）** | 部分（看 PL 峰位 redshift） | 与 fixed endpoint 模式一致 → M1 兼容 |
| **Step 5（TOF-SIMS Br/I 表面比）** | ✅ 做了（对 I⁻），但**未对比表面 vs bulk** | 对 Navid 2026 描述符 partial calibration |

**协议机制向量**：(M1 [兼容/未独立验证], M2 [未测], **M3 [ON→OFF, 间接证据]**, M4 [未测])

> **关键解读**：Bai 2022 通过"初始均匀性"路径间接抑制 M3 — 减少 GB/缺陷异质性 → 减少 trap site → 减少 trap-induced 局域电场。但**没做 Ma 2024 暗态实验**，因此无法分辨：
> - 是否真正消除 trap charge 储库？还是只让 trap 分布更均匀（但密度未变）？
> - vacuum 下方案是否仍有效？（M4 是否 latent？）

## 6. 缺读 / 评估系统反向打分

> 用户的 dir4 评估协议会指出该方案"机制定位有间接证据但缺关键直接测试"。具体补哪些读数能让证据更硬：

1. **暗态短曝光 PL（Ma 2024 范式）** — 可验证 trap-induced field 是否真被压制；预期：均匀样品 dark seg 显著减少 / 消失。
2. **fast-KPFM CPD 演化（Garrett / Qu 2026 范式）** — 看 selenophene-treated film 撤光后 CPD 弛豫时间是否从分钟缩短到秒；这是 M3 抑制的直接证据。
3. **R_H 调控扫（Tiede 2020 范式）** — 看 selenophene 后 k_growth(R_H) 曲线；如平直则 vacancy-driven 已抑制；如仍依赖 R_H 则 vacancy 仍主导。
4. **TOF-SIMS 深度剖面 surface vs bulk Br/I 比（Navid 2026 校准）** — 验证 ΔDFE 描述符是否被修改；用以分辨 M1 是否参与。
5. **Vacuum vs ambient 老化 ISOS-D-3 vs ISOS-L-3** — 区分 M4 redox 是否仍在背景。

## 7. 评估系统打分卡

| 维度 | 分数 / 评级 | 注 |
|---|---|---|
| 机制定位独立性 | **C+** | M3 间接证据，其他机制未独立验证 |
| 实验范式严谨度 | **B** | 老化 + ISOS protocol 标准；但缺暗态实验 |
| 量化指标可重现性 | **A−** | TOF-SIMS FWHM、DLS、PCE 均化定量 |
| 反向验证可达性 | **B+** | 用户用 fast-KPFM + 暗态 PL 即可补关键读数 |
| **总评** | **协议下"机制定位证据强度 = 间接，需补 5 项关键读数才能升级到强证据"** | |

## 8. 对用户研究计划 v3 的 case-study 价值

Bai 2022 是 dir4 评估协议**第一份 case-study 候选**：
- ✅ 是 Science 顶刊高 visibility 工作 → field 重视
- ✅ 数据公开充分（TOF-SIMS / PL / XRD 等）→ 协议反向打分有原始素材
- ⚠️ 关键缺读（暗态 PL、fast-KPFM）→ 用户可直接立"协议补完实验"作为博士前期工作
- ⚠️ Mixed cation 主，mixed halide 次 → 用户做"协议反向打分 + 补充实验"时建议优先针对 FACsPb(Br0.13I0.87)3 部分
