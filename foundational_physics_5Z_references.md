# 5 Z 因子的物理基础理论参考（跨领域）

> **目的**：每个 Z 状态变量的物理依据从哪本经典书 / 哪篇奠基论文来。
> **范围**：包含 PVK 领域之外的跨学科证据（合金、氧化物、半导体器件、电池）。
> **使用方式**：被委员问"$Z_v$ 这个变量你凭什么放进 5 维状态空间"时，能指出**经过 50+ 年验证的物理基础**，不是凭感觉挑的。
> **生成日期**：2026-05-15

---

## 总览

```
统一记法（与 slide 7 一致）：
Z_k(r,z) = [c, v, φ, ε, q]

每个 Z 都有半个世纪以上的独立学科基础。
SL-PCI 不是"发明"了这 5 个，是把已确立的 5 类物理状态汇总到 PVK 体系。
```

| Z | 物理意义 | 经典学科领域 | 第 1 优先参考 |
|---|---|---|---|
| **c** | 局部组分场 | 统计力学 / 合金热力学 | Cahn-Hilliard 1958 |
| **v** | 点缺陷密度 | 缺陷化学 / 离子晶体 | Kröger-Vink 1956 + Tilley 2008 |
| **φ** | 局部电势 | 半导体器件物理 | Sze 第 3 章（库内已有）|
| **ε** | 微应变张量 | 弹性力学 / 共格沉淀 | Eshelby 1957 |
| **q** | 不可逆化学进度 | 非平衡热力学 | Prigogine 1968 / Onsager 1931 |
| 元 | 多模态反演 | 数学统计 | Tarantola 2005 |

---

## 1. Z_c — 局部组成场（c = I 比例）

### 1.1 物理基础
两组分（I, Br）混合系统的自由能 $\Delta G = \Delta H - T\Delta S$ 决定均匀混合 vs 相分离。
混合熵 $-k_B[c\ln c + (1-c)\ln(1-c)]$ 是配置熵；混合焓 $\chi c(1-c)$ 可正可负。
$\partial^2 G / \partial c^2 < 0$ → spinodal 失稳。

### 1.2 奠基论文（必读 1 篇）
**Cahn, J.W. & Hilliard, J.E. 1958**
*"Free Energy of a Nonuniform System I: Interfacial Free Energy"*
**J. Chem. Phys. 28, 258-267** | DOI: 10.1063/1.1744102

引入梯度能项 $\frac{\kappa}{2}|\nabla c|^2$；现代相场理论开山论文。
**slide 7 的 G[Z] 泛函直接来自这篇** — 你能讲"我用 Cahn-Hilliard 1958 框架"。

### 1.3 教科书（任选 1）
| 书 | 章节 | 难度 |
|---|---|---|
| Porter, Easterling, Sherif *Phase Transformations in Metals and Alloys* 3rd ed (2009) | **Ch. 5** spinodal decomposition | 中（推荐入门）|
| Hillert *Phase Equilibria, Phase Diagrams and Phase Transformations* (2008) | Ch. 4 + Ch. 14 | 高（最严密）|
| DeHoff *Thermodynamics in Materials Science* (2006) | Ch. 9-10 | 中低 |

### 1.4 跨领域证据
**Khachaturyan, A.G. 1983** *Theory of Structural Transformations in Solids* Wiley
→ 金属合金里**组分-应变耦合**的标准处理（同时把 Z_c 和 Z_ε 联系起来）

氧化物陶瓷里的 spinodal 也是同框架：ZrO2-HfO2 / ZrO2-Y2O3 CALPHAD 计算（Sundman 系列）。

### 1.5 库内 PVK 应用
Brivio 2016（DFT 算 MAPb(I,Br)₃ miscibility gap） + Chen 2021（QCA 不对称合金）+ Ruth 2023（band-gap thermodynamic model）

---

## 2. Z_v — 点缺陷 / 卤素空位

### 2.1 物理基础
晶格缺陷（空位、间隙、错位）以低活化能介导原子扩散：
$$D = D_0 \exp(-E_a / k_BT)$$
$E_a$（空位）≪ $E_a$（直接交换）→ 离子运动由空位浓度 $v$ 控制。

### 2.2 奠基论文 + 教科书（两者并列）
**Kröger, F.A. & Vink, H.J. 1956**
*"Relations between the concentrations of imperfections in crystalline solids"*
**Solid State Phys. 3, 307-435**

→ 缺陷化学的**Kröger-Vink 符号系统**起源；$V_I^\bullet, I_i', V_{Pb}''$ 等的源头。

**Mott, N.F. & Gurney, R.W. 1940** *Electronic Processes in Ionic Crystals*
→ 离子晶体导电性的奠基；vacancy-mediated transport 的理论基础。

### 2.3 教科书（任选 1）
| 书 | 难度 | 推荐 |
|---|---|---|
| Tilley *Defects in Solids* (2008) Wiley | 中（最易入门）| ⭐ 推荐 |
| Maier *Physical Chemistry of Ionic Materials* (2004) Wiley | 高 | 比 Tilley 深，比 Mott-Gurney 现代 |
| Kofstad *Nonstoichiometry, Diffusion and Electrical Conductivity in Binary Metal Oxides* (1972) | 中 | 氧化物侧的标准 |

### 2.4 跨领域证据
**Smyth, D.M. 2000** *The Defect Chemistry of Metal Oxides* Oxford
→ SrTiO3 / BaTiO3 / 氧化物 ABO3 钙钛矿里 V_O / V_M / 间隙的完整缺陷化学—**与卤化物 ABX3 同结构同框架**，氧化物文献已经发展了 60 年。

电池系统：Li-ion 电极里 V_Li 介导的 intercalation 动力学（Newman 模型）。

### 2.5 库内 PVK 应用
Yuan & Huang 2016 dir3（halide migration 综述）+ Tiede 2020（R_H × k_growth）

---

## 3. Z_φ — 局部电势 / 空间电荷 / SPV

### 3.1 物理基础
不同区域费米能级对齐时电荷重分布 → 局部电势 $\phi(r)$ 变化（band bending）。
Mott-Schottky 关系：耗尽层宽度 $W = \sqrt{2\epsilon \phi / qN}$。
表面光电压 $V_{SPV}$ = 光照下额外的电势变化（捕获弛豫时间 ms-s）。

### 3.2 奠基论文
**Schottky, W. 1940** *Z. Phys. 41, 570* — Schottky 势垒原始
**Mott, N.F. 1939** *Proc. Camb. Phil. Soc. 34, 568* — Mott rectifier 模型

**Kronik, L. & Shapira, Y. 1999**
*"Surface photovoltage phenomena: theory, experiment, and applications"*
**Surf. Sci. Rep. 37, 1-206** — KPFM/SPV 物理 + 测量综述

### 3.3 教科书（你库内已有！）
**Sze, S.M.** *Physics of Semiconductor Devices*
→ **Ch. 3 (Metal-Semiconductor Contacts)** + **Ch. 14 (Solar Cells)**
**库内文件**：`papers/S.M.SzePhysicsofSemiconductorDevicesWiley.pdf`
**Tang 2018 论证晶界处正空间电荷时直接用 Sze Ch. 3 框架**——你能讲"我用 Sze 的标准 MS 接触模型解释 KPFM CPD"。

### 3.4 跨领域证据
**Tung, R.T. 2001** *"Recent advances in Schottky barrier concepts"* **Mater. Sci. Eng. R 35, 1-138**
→ 这篇 100+ 页综述把 Schottky 势垒从经典 Mott-Schottky 推广到现代 polycrystalline / heterojunction 全场景；KPFM 在多晶硅、CIGS、CdTe 上的应用全有。

**Nonnenmacher, M. et al. 1991** *Appl. Phys. Lett. 58, 2921* — KPFM 原始论文（开题答辩级硬引用）

### 3.5 库内 PVK 应用
Tang 2018（GB vs GC CPD）+ Qu 2026（SPM/KPFM 钙钛矿综述）

---

## 4. Z_ε — 应变 / 晶格畸变 / 微应变

### 4.1 物理基础
组分变化 → 晶格常数变化（Vegard 定律 $a(c) = c \cdot a_I + (1-c) \cdot a_{Br}$）
若组分不均匀 → 内应力 → 弹性能 $\frac{1}{2}C\varepsilon^2$
若应变能 > 混合熵 → 相分离被**应变激活/抑制**。

### 4.2 奠基论文（这是材料科学的"圣经" 1 篇）
**Eshelby, J.D. 1957**
*"The determination of the elastic field of an ellipsoidal inclusion, and related problems"*
**Proc. R. Soc. Lond. A 241, 376-396**

→ **20 世纪被引用最多的固体力学论文之一**。给出任意椭球夹杂周围应变场的解析解；现代沉淀强化、共格相变全部基于这个。

**Vegard, L. 1921** *Z. Phys. 5, 17* — Vegard 定律原始；混合晶格常数线性叠加规则。

### 4.3 教科书
| 书 | 章节 | 用途 |
|---|---|---|
| **Landau & Lifshitz Vol. 7** *Theory of Elasticity* (1959, 多次重印)| Ch. 1-3 弹性张量；Ch. 4 共格沉淀 | 数学严密，必备 |
| **Hull & Bacon** *Introduction to Dislocations* 5th ed (2011)| Ch. 2 弹性场 | 工程视角 |
| **Khachaturyan** *Theory of Structural Transformations* (1983)| Ch. 7-8 | **专精组分-应变耦合**——和 SL-PCI 的 f_elastic(c, ε) 完全对应 |

### 4.4 跨领域证据
**Williamson, G.K. & Hall, W.H. 1953** *Acta Metall. 1, 22*
→ XRD 峰宽分离应变 vs 晶粒尺寸 (W-H 分析的奠基)；**你 PPT slide 7 里的 GIWAXS 用的就是这个**。

**People, R. & Bean, J.C. 1985** *Appl. Phys. Lett. 47, 322* — SiGe 应变工程奠基；半导体异质结里"应变驱动的能带工程"。

**张力诱导相变**在合金/氧化物里的经典案例：
- Cu-Ni 合金 spinodal（Cahn 1965）
- SrTiO3 在张力下的铁电诱导

### 4.5 库内 PVK 应用
Zhao 2020（strain-activated LHS）+ Muscarella 2020（pressure 等效 strain）+ Fan 2025（4% 各向异性应变）+ Zhao 2017（strained films instability）

---

## 5. Z_q — 不可逆化学进度

### 5.1 物理基础
某些化学过程**单向**进行，不能像 c/v/φ/ε 那样在暗里完全恢复：
- 卤素挥发损失（I₂↑）
- 氧化反应（O₂ + I⁻ → IO₃⁻ 等）
- 二次相形成（PbI₂、Pb⁰）

Onsager 不可逆热力学：流 = 力 × 系数，但**熵产生**单向。

### 5.2 奠基论文
**Onsager, L. 1931** *Phys. Rev. 37, 405* + *Phys. Rev. 38, 2265*
→ "Reciprocal relations in irreversible processes"；1968 诺贝尔化学奖；非平衡热力学奠基。

**Prigogine, I. 1968** *Introduction to Thermodynamics of Irreversible Processes* 3rd ed Wiley
→ 1977 诺贝尔奖工作的教学版；定义"内变量"（internal variable）作为不可逆过程的状态描述。
**SL-PCI 的 $q(r,z)$ 就是 Prigogine 意义上的"内变量"**——你能讲"q 是 Prigogine 1968 内变量框架在 PVK 化学进度上的具体实现"。

### 5.3 教科书
| 书 | 章节 | 难度 |
|---|---|---|
| **de Groot & Mazur** *Non-Equilibrium Thermodynamics* (1962, Dover reprint 1984)| Ch. 3-4 | 高，经典 |
| **Kondepudi & Prigogine** *Modern Thermodynamics* (2014)| Ch. 16-19 | 中，更现代 |
| **Atkins & de Paula** *Physical Chemistry* 11th ed | Ch. 19-20 | 低（本科级）|

### 5.4 跨领域证据（这是 PIPS 学界很少用但很重要的视角）

**Staebler & Wronski 1977** *Appl. Phys. Lett. 31, 292*
→ **Staebler-Wronski 效应**：a-Si:H 在光照下产生缺陷，**关灯后部分恢复但有 memory** — **与你 H3 假设的"PL 恢复 ≠ 物理恢复"几乎完全平行**！这是半导体里的经典 "light-induced metastability"，可作为 Z_q 的最强跨领域类比。

**Struik, L.C.E. 1978** *Physical Aging in Amorphous Polymers* — 玻璃态聚合物的物理老化；不可逆 memory 的另一经典系统。

**Newman, J. & Tiedemann, W. 1975** — Li-ion 电池 SEI 形成 memory；循环老化里的不可逆容量损失。

### 5.5 库内 PVK 应用
Aristidou 2015（O₂/超氧化学，需另下载）+ Boyd 2018 dir6（降解综述）+ Hu 2026（PIPS 综述新加入）

---

## 6. 元—多模态反演的数学基础

把 5 个 Z 用多个有偏投影同时反演**不是物理问题，是数学统计问题**。需要单独有数学基础。

### 6.1 教科书（必备 1 本）
**Tarantola, A. 2005**
*Inverse Problem Theory and Methods for Model Parameter Estimation*
SIAM
→ **整套 SL-PCI 反演理论的数学源头**。Tarantola 在官网免费提供 PDF：
http://www.ipgp.fr/~tarantola/Files/Professional/Books/InverseProblemTheory.pdf

特别相关的章节：
- Ch. 1-2 概率框架
- Ch. 6 多源数据融合
- Ch. 7 SVD 与不适定问题

### 6.2 备选教科书
| 书 | 难度 | 备注 |
|---|---|---|
| Aster, Borchers, Thurber *Parameter Estimation and Inverse Problems* 3rd ed (2018)| 中 | 比 Tarantola 易读 |
| Bishop *Pattern Recognition and Machine Learning* (2006)| 中 | Ch. 8-10 Bayes 框架；Springer 现已开放 PDF |
| Hansen *Discrete Inverse Problems: Insight and Algorithms* (2010)| 中 | SIAM；专精 SVD |

### 6.3 奠基论文
**Tikhonov, A.N. 1963** *Sov. Math. Dokl. 4, 1035* — 反演的正则化奠基
**Hadamard, J. 1902** — well-posed problem 定义

---

## 7. 委员被问时的标准引用话术

> **"5 个 Z 不是我自己挑的——是合金热力学（Cahn-Hilliard 1958）、缺陷化学（Kröger-Vink 1956）、半导体器件物理（Sze）、弹性力学（Eshelby 1957）和不可逆热力学（Prigogine 1968 / Onsager 1931）这 5 个独立学科**各自把"PVK 里的关键内部状态"识别出来。**
> 
> **SL-PCI 的工作是把这 5 个学科已经发展了半个多世纪的状态变量集中到一个反演框架里，借助 Tarantola 2005 的反问题理论联立求解。**
> 
> **每个 Z 都有 50 年以上的物理基础——任何一条单独都是教科书章节，但把这 5 个组合到 PVK 的 PIPS 问题上是 SL-PCI 的方法学贡献。"**

---

## 8. 这一周（周一前）能消化的最少阅读

如果你今晚到周日只能读 5 本书的 5 个章节：

```
1. Sze Ch. 3 (MS contact + band bending)         → Z_φ 物理
   你库里就有，1 小时

2. Porter-Easterling Ch. 5 (spinodal)            → Z_c 物理
   网上 PDF 容易找，1 小时

3. Tilley Defects in Solids Ch. 4-5              → Z_v 物理
   1.5 小时

4. Khachaturyan Ch. 7-8 (composition-strain)     → Z_ε 物理 + Z_c-Z_ε 耦合
   1.5 小时

5. Prigogine 1968 Ch. 1-2                        → Z_q 物理
   30 分钟（不可逆热力学引入）
```

总计 5 小时 → 5 个 Z 的物理"经典学科出处"全有。委员问"你为什么这么定义 Z"——能立刻指文献。

---

## 9. 还要补的（可选）

- Cahn-Hilliard 1958 原文 PDF（J Chem Phys 28, 258）—— AIP 老期刊通常开放，搜 DOI 应该能下
- Eshelby 1957 原文 PDF（Proc. R. Soc. A 241, 376）—— Royal Society 老论文可能开放
- Tarantola 2005 教科书 PDF —— 作者自己开放在官网（链接见 §6.1）
- Kronik & Shapira 1999 Surf Sci Rep —— 学校 VPN 应该能拿
- Sze 已经在库 ✓

要哪几本帮你下载/找 URL 直接说。

---

**版本**：v1.0 / 2026-05-15
