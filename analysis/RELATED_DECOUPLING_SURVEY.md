---
name: TE/畸变/EPC 解耦相关调研 · 10 篇
description: 钙钛矿场内新近解耦研究 + 跨材料（PbTe/SnSe/SnS 热电）类似解耦 + 物理观测装置改良类的精选文献
type: project
date: 2026-04-21
scope: 10 papers, 3 themes
---

# 钙钛矿 TE/畸变/EPC 解耦 · 跨材料 · 设备改良 · 10 篇精选

> 三组各覆盖一个目的：**A 组**是钙钛矿场内最新的三通道解耦证据；**B 组**是 IV-VI 族热电材料的同类问题（PbTe/SnSe/SnS 软模相变下的 EPC 与 TE 解耦）；**C 组**是物理观测装置改良类论文，重点看它们怎么把"同一样品同时测多个物理量"做出来。

## 组 A · 钙钛矿场内新近解耦研究（4 篇）

### A1 · Zhang 2023 AFM 【你本地已有 · 3.3217358436...pdf】

- **标题**：Revealing Unusual Bandgap Shifts with Temperature and Bandgap Renormalization Effect in Phase-Stabilized Metal Halide Perovskite Thin Films
- **作者 / 期刊**：Haochen Zhang et al. / Adv. Funct. Mater. 2023
- **DOI / arXiv**：10.1002/adfm.202302214 / arXiv 2308.11104
- **一句话价值**：用 XRD + in-situ 高压 PL + 第一性原理三路证据直接给出"**热膨胀仅扮演次要角色**，带隙反常蓝移主因是静态与动态畸变的竞争"结论
- **和你博士课题的对接**：你 phase_3 里的 B1/B2 拆分，这篇是"静态 vs 动态"另一种拆法——和 Weadock 2025 的对称性解耦互补

### A2 · FAPbI3 八面体动力学 2025（新发现）

- **标题**：Octahedral Dynamics and Local Symmetry in Hybrid Perovskite FAPbI3 under Thermal Excitation
- **作者 / 期刊**：arXiv preprint 2025-09
- **arXiv**：2509.18617
- **一句话价值**：直接处理**热激发下的局部对称性破缺**，是继 Weadock 2025 的 CsBBr3 后第一篇把同类方法推到 FAPbI3 的论文
- **建议下载精读**：你方向 1 的 A vs B 区分在 FAPbI3 上还没闭环，这篇是填补

### A3 · CsPbI3 INS + MD 2025【物理观测装置改良】

- **标题**：Unraveling the Nature of Vibrational Dynamics in CsPbI3 by Inelastic Neutron Scattering and Molecular Dynamics Simulations
- **作者 / 期刊**：JPCL 2025
- **DOI**：10.1021/acs.jpclett.5c00778
- **一句话价值**：**中子 INS 直测 CsPbI3 低频声子态密度 + AIMD 对照**——这恰好是 Houtput 2026 理论预言的实验验证平台；你 phase_3 Gap #1 里"INS 闭环"的实操版
- **设备改良点**：ISIS/ILL 级冷中子 TOF 站 + AIMD 投影后处理

### A4 · Cs3Bi2Br9 声子相干性 2024

- **标题**：Phonon Coherence in Bismuth-Halide Perovskite Cs3Bi2Br9 with Ultralow Thermal Conductivity
- **作者 / 期刊**：Adv. Funct. Mater. 2024
- **DOI**：10.1002/adfm.202411152
- **一句话价值**：用 anharmonic phonon + 相干性分析把 **EPC 与 TE/无序** 拆成独立通道对热导率的贡献，无铅体系做得比 Pb 体系更干净
- **和你博士课题的对接**：无铅/低维钙钛矿作为"对照样品"验证 B2 (Pb 孤对) 假说的重要参考

## 组 B · 跨材料 · IV-VI 热电材料的同类解耦（3 篇）

### B1 · Cao & Savic 2021 PRB · PbTe 软模相变 + 晶格膨胀调 EPC

- **标题**：Electron-Phonon Coupling and Electronic Thermoelectric Properties of n-Type PbTe Driven Near the Soft-Mode Phase Transition via Lattice Expansion
- **作者 / 期刊**：Cao, Dangić, Querales-Flores, Fahy, Savić / Phys. Rev. B 104, 045202 (2021)
- **DOI / arXiv**：10.1103/PhysRevB.104.045202 / arXiv 2101.08124
- **一句话价值**：在 PbTe 上**通过晶格膨胀（外压）把体系推向软模相变点**，解耦出 EPC 随接近相变时几乎不变而 phonon 散射相空间上升——这是"TE 推动 EPC 渐变"的干净跨材料案例
- **迁移到钙钛矿**：卤化物钙钛矿也有类似低频软模（立方相虚频），PbTe 的解耦思路几乎可以平移

### B2 · Sihi & Pandey 2022 · SnS/SnSe EPI 诱导拓扑相变

- **标题**：Evidence of Phase Stability, Topological Phonon and Temperature-Induced Topological Phase Transition in Rocksalt SnS and SnSe
- **作者 / 期刊**：J. Phys.: Condens. Matter 2022
- **DOI / arXiv**：10.1088/1361-648X/ac742e / arXiv 2204.12276
- **一句话价值**：用**温度依赖电子-声子自能的线宽+线移**独立拆分出 CBM 与 VBM 对 EPI 的贡献，预测 700 K 拓扑相变
- **方法论借鉴**：把"linewidth + lineshift"联合拆解作为 EPC 强度表征，比单一带隙温度拟合信息量高一个量级

### B3 · Xue & Lu 2025 · SnSe/SnS 超晶格 anharmonic phonon

- **标题**：Phonon Vibrational and Transport Properties of SnSe/SnS Superlattice at Finite Temperatures
- **作者 / arXiv**：arXiv 2502.08074 (2025)
- **一句话价值**：用 **机器学习力场 MD + anharmonic phonon** 框架处理有限温下的软模稳定化——对照卤化物钙钛矿立方相虚频的处理方式，是一个可迁移的计算工作流
- **工具层面**：ML force field（MACE/Allegro）+ anharmonic self-consistent phonon，目前卤化物钙钛矿上少有人做到这一步

## 组 C · 物理观测装置改良（3 篇）

### C1 · Fu & Zou 2020 · CsPbBr3@SiO2 DAC + 同步辐射 XRD + PL 联合

- **标题**：Stability and Band Gap Engineering of Silica-Confined Lead Halide Perovskite Nanocrystals under High Pressure
- **作者 / 期刊**：Geosci. Front. 2020
- **DOI**：10.1016/j.gsf.2020.07.004
- **一句话价值**：**高压 DAC + 同步辐射 XRD + 原位 PL** 三者在同一样品上闭环——这是你 phase_4 Next steps 里"DAC + 变温 PL" 的准现成实现，只差变温维度
- **设备借鉴**：读这篇的"实验装置"章节看他们如何对齐 DAC 光路、压介质、压标（红宝石）、温控

### C2 · Dave 2022 · Cs2AgInBiCl6 双钙钛矿 DAC 压-温双变量 PL

- **标题**：Photoluminescence Enhancement Study in a Bi-Doped Cs2AgInCl6 Double Perovskite by Pressure- and Temperature-Dependent Self-Trapped Exciton Emission
- **作者 / 期刊**：Dalton Trans. 2022
- **DOI**：10.1039/d1dt04047b
- **一句话价值**：**压力 × 温度双变量 PL 测量** 解耦自陷激子（STE）与自由激子（FE）两种发射的活化能——这套"DAC + 变温 cryostat"本就是你方向 1 + 方向 2 同时需要的平台
- **直接可复制的实验矩阵**：压力 0→4 GPa × 温度 80→300 K × 组分 Bi% = 0–64%

### C3 · Cui & Chen 2024 JPCL · 稀土镍酸盐 DAC 原位电输运 + 同步辐射

- **标题**：In Situ High-Pressure Correlated Transportation of Heavy Rare-Earth Perovskite Nickelates as Batch Synthesized within Eutectic Molten Salts at MPa-pO2
- **作者 / 期刊**：J. Phys. Chem. Lett. 2024
- **DOI**：10.1021/acs.jpclett.4c01496
- **一句话价值**：**DAC 里直接做 10 GPa 原位电输运** + 温度依赖几乎被压力"冻结"——这是观测装置改良的极端案例：在 DAC 里集成电学接触（这套微电极集成技术可迁移到钙钛矿离子电导率/MPP 测量）
- **跨方向映射**：你方向 3 的 solvent-E_a 扫描若能在 DAC 中做，就能一次性扫 P × T × solvent 三维

## 三组之间的逻辑

> 组 A 告诉你 field 今天已知的最新边界；组 B 告诉你别的材料领域用什么方法做过同类解耦（不要重造轮子）；组 C 告诉你要实现三通道同时测，哪些装置已经有人搭好。你的博士贡献最佳切入点是：**组 B 的方法学 × 组 C 的装置平台 × 组 A 的钙钛矿样品** 三者的正交组合。

## 优先下载建议

如果只下 3 篇，优先：
1. **A3 · CsPbI3 INS + MD 2025**（直接对接 Houtput 2026 的实验验证）
2. **B1 · Cao/Savic 2021 PbTe**（跨材料方法论借鉴）
3. **C2 · Dave 2022 双钙钛矿 DAC P-T PL**（最接近你想要的双变量平台）

## Next steps

1. 要不要我现在下载这 10 篇里开放 arXiv 的（A2/A3/B1/B2/B3 共 5 篇）到 downloads/
2. 要不要把这份 RELATED_DECOUPLING_SURVEY.md 也推到 GitHub（push 到 perovskite-skill 仓库同一分支）
3. 下完后要不要派 subagent 对优先 3 篇做 11 字段深读
