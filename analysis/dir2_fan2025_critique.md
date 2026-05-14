---
name: Fan2025-批评文档
direction: 方向2-相分离
date: 2026-05-13
source_paper: PIIS2666386425002528.pdf
doi: 10.1016/j.xcrp.2025.102653
journal: Cell Rep. Phys. Sci. 6:102653 (2025)
companion: 暂无深读笔记
status: 正式批评文档 v1.0
---

# Fan, Cui, Li, Vigil et al. 2025《Phase segregation dynamics in mixed-halide perovskites revealed by plunge-freeze cryo-electron microscopy》正式批评

> Stanford (Lindenberg + Karunadasa + Yi Cui) 团队 2025-06 出版。**dir2 中方法学上离 SL-PCI 最近的论文**——已经用了 plunge-freeze 快速终止 + 同区 EELS + 4D-STEM 多模态读取。但 5 维隐变量只覆盖 2 维（$x_{Br/I}$ + $\varepsilon$），且未做反向推断。**意外发现 I → 晶心，直接反对 Tang 2018**。

## 0. 一句话总评

**Fan 2025 是 SL-PCI 在 dir2 文献中方法学上最近的先行者**：plunge-freeze 实现快速终止状态锁定，同区 EELS（化学）+ 4D-STEM（应变）+ ADF（形貌）实现多模态空间相关读取。**但只完成观察，未做反向推断；机制问题被明确留作开放问题**。

**论文最大但被低估的发现**：4% 各向异性应变 + 单一句话提及，但量级正好与 Peng 2023 的 $G_{sep}$ 唯象项匹配 → **应变是 $G_{sep}$ 物理起源候选 (a) 的直接实验证据**。

**最重要的争议性主张**：**I → 晶心**（而非晶界），直接反对 Tang 2018 / Mao 2019 / Bischak 2017。**这个矛盾很可能是组分依赖性反转**（详见 §B1）。

**最强质疑点**：§B1（与 Tang 矛盾的方向性可能是 x_I 函数）与 §B4（EELS 看不到 Br，半个化学是推断）。

---

## 1. 核心主张锚定

**实验设计**：CsPb(Br₀.₇I₀.₃)₃（$x_I = 0.30$）多晶 ~100 nm 薄膜（碳-Cu TEM 网格上，**双层蒸镀**：48 nm CsI:CsBr (3:1) + 51.5 nm PbBr₂ → 170 °C 15 min 退火）。
RT 下 405 nm LED 0.4 W/cm² 照 0.5–8 min → **plunge-freeze**（高压气体推入 LN₂）→ 98 K cryo-EM holder。同一晶粒上 3 种 STEM 测量：
- **ADF**：形貌（识别晶界）；
- **EELS**：I-M₅ + Cs-M₄ 积分，给 **I/Cs 比** 作为成分代理（**Br 在 EELS 检测窗外**）；
- **4D-STEM**：每像素衍射，按 {110}/{111} 拟合给局域晶格 + **各向异性应变**，像素 10 nm。

| # | 主张 | 关键证据 | 唯一解释? |
|---|---|---|---|
| C1 | **I 向晶粒中心迁移**，晶界 I/Cs 降低 | 5 min 后 ⟨I/Cs⟩ = 1.19（晶心）> 0.88（初始），尾部到 1.8 | **直接矛盾 Tang/Bischak**（§B1）|
| C2 | 偏析后**4% 各向异性应变**，{110} > {111} | 4D-STEM 衍射点径向 elongation | 否（§B3，未做应变源分析）|
| C3 | 形貌相关性：ADF–EELS Pearson r 随时间增长 | 80+ 样本时序 box plot | 部分（§A4，ADF–成分耦合干扰）|
| C4 | 偏析可逆：暗放 2 h 完全恢复，冷藏 3 周不恢复 | PL 580→651→580 nm | 正确且重要 |
| C5 | 平均 I/Cs = 1.19 应给 605 nm，实测 651 nm → "长尾区域漏斗效应" | PL/EELS 不匹配解释 | 是（§B2）|
| C6 | ADF 强度 ∝ 厚度，正相关 = I 富集在厚区（晶心）| 经典 ADF 解析 | **存在 Z² 干扰**（§A4）|
| C7 | 反驳"I-rich 簇随机成核"假设 | 早期相关系数已 > 0 | 部分（§B2）|

---

## 2. A 级质疑：核心证据链的结构性问题

### B1. "I → 晶心"直接反 Tang 2018，但很可能是**组分依赖性反转**

**这是 Fan 论文最大、最有争议的主张**：

> "iodine concentration at the grain center and lower concentrations near the grain boundaries"

完全与：
- Tang 2018（MAPb(Br₀.₉**I₂.₁**)₃ 多晶）："iodine-rich at grain boundary"
- Mao 2019（MAPb(Br,I)₃ 单晶）："I-rich at boundaries"
- Bischak 2017 SEM-CL："near defects"

矛盾。但**与 Peng 2023 / Suchan 2020 一致**（晶心或单晶内偏析）。

**结构性问题**：Fan 与 Tang 的样品差**几乎所有变量**：

| 变量 | Fan 2025 | Tang 2018 |
|---|---|---|
| A 位 | **Cs**（无 polaron）| **MA**（强 polaron）|
| 成分 | $x_I$ = **0.3**（**Br-rich**）| $x_I$ = **0.7**（**I-rich**）|
| 厚度 | **100 nm** | 数百 nm |
| 基底 | 10 nm 碳膜（TEM 网格）| FTO/玻璃 |
| 制备 | 双层蒸镀 + 固相反应 | 一步旋涂 |
| 晶粒 | 100–400 nm | 中位 500 nm |

**最关键差异：$x_I = 0.3$（Br-rich）vs 0.7（I-rich）**。在 Brivio 不混溶间隙 $0.19 < x_{Br} < 0.68$ 内，两者位于**相反端**：

- Fan 在 $x_{Br} = 0.7$ → I 是少数相 → I-rich 域是小核 → 可能优先在缺陷少、空间大的**晶心**成核；
- Tang 在 $x_{Br} = 0.3$ → Br 是少数相 → I-rich 域是多数相 → 任何不均匀都把 Br 排出到晶界、I 留在中心，等价"I 富集"位置由 Br 排出方向决定。

**替代假设 B1**：偏析方向（I→晶心 vs I→晶界）**取决于起始 $x_I$ 相对于 Brivio 不混溶间隙中心位置**：
- $x_I$ 在间隙下半部（Br-rich）→ I 富集到核内 → "I → 晶心"；
- $x_I$ 在间隙上半部（I-rich）→ Br 排出到边缘 → "I 留在中心 + 边缘 Br 富集"；
- $x_I$ 中间（0.4–0.5）→ 可能不偏析或两种方向并存。

**与 Tang 批评 §B2（GB 几何 vs 近 GB 缺陷化学）假设并行不悖**：Fan 可能"碰巧"用了 Br-rich 体系绕过了 GB 选择性的几何效应。

**证伪测试（SL-PCI 必做）**：在 CsPb(Br_x I_{1-x})₃ 扫 $x_{Br} = 0.3, 0.5, 0.7$ 三个对称点，用 Fan 同样的 plunge-freeze EELS 协议：
- 若 $x_{Br} = 0.3$ 看到"I→晶界"、$x_{Br} = 0.7$ 看到"I→晶心" → 方向是组分函数，Fan 与 Tang 都对但都不通用；
- 若 $x_{Br} = 0.5$ 看到"无偏析或两向并存" → 上述假设全成立；
- 若所有组分都看到"I→晶心" → Tang 2018 的"GB 选择性"是 MA polaron 特异性现象。

**这一条单独够发一篇高水平期刊论文。**

---

### B2. 平均 I/Cs = 1.19 与 PL 红移到 651 nm 不自洽 → "长尾"解释是事后救场

**Fan 自承不一致**（line 287–296）：
- 平均 I/Cs = 1.19 应对应 PL ≈ 605 nm；
- 实测 PL 红移到 651 nm（对应 I/Cs ≈ 1.6–1.7）；
- 解释："长尾分布到 1.8 → carrier funneling 放大长尾贡献"。

**结构性问题**：
1. 与 Chen 2021 批评中的 **funneling 放大问题完全一致**；
2. **EELS 平均图 ≠ PL 看到的图**。Fan 的 I/Cs 直方图（Fig 4）是**载流子均匀贡献假设下的平均**；PL 是 **funneling 加权平均**。两个测量看到的是物理上不同的"$x_I$ 分布"；
3. **Fan 没量化 funneling 权重**：只定性说"长尾占主导"，没给"长尾占体积多少 / PL 信号多少"的拆分。

**替代假设 B2**：长尾区域（I/Cs > 1.6）实际**体积分数只有 1–3%**（与 Tang 2018 sub-μm GB 影响区类似），但 PL 上看像主导。

**证伪测试**：用 EELS-PL 联合反演 — PL 红移 + EELS 直方图 + Type-I 异质结漏斗模型，反解出**双峰分布**（体积分数 × 平均 $x_I$）。若长尾区域只占 < 5% 体积，则 Fan 的"I → 晶心"主结论需要重述为"**晶心内某些 sub-region 强 I 富集 + 晶心其它区微弱 I 富集**" — 形貌从"中心 vs 边界"二分变成"晶心内 sub-domains"，更接近 Peng 的 spinodal 颗粒图景。

---

### B3. 4% 各向异性应变是论文最重要的定量数字，但**完全没被解读**

Line 296–298：

> "the post-illumination strain distribution shows values of over 4%"

随后只用一句话说"各向异性可能来自晶粒形貌或预存应变/缺陷"，**就完了**。

**这是 Fan 2025 真正的金矿**：

1. **数量级**：4% 应变 → 应变能密度 $\sim 0.5 Y \varepsilon^2 = 0.5 \times 20 \text{ GPa} \times (0.04)^2 \approx 16 \text{ MJ/m}^3 \approx 100 \text{ meV/f.u.}$；
2. **对比 Peng 2023**：Peng 证伪 funneling 单一机制，引入 $G_{sep}$ 唯象项，**$G_{sep}$ 量级正好是 ~100 meV/f.u.**；
3. **结论（Fan 没说但应说）**：**$G_{sep}$ 的物理起源在 Fan 数据中就是局域弹性应变能**。Fan 数据偏向**应变**（不分极化子 vs 弹性，但都是机械型 $G_{sep}$ 来源）。

**Fan 没做的关键分析**：
- 应变空间分布 vs I/Cs 空间分布的**互相关**：strain 先于还是后于 I 迁移出现？
- 应变与晶粒尺寸的标度：应变是否在小晶粒/大晶粒间系统变化？
- 应变与照射时间的演化：单调上升还是有"应变饱和点"？

**"各向异性 {110} > {111}"** 也没分析。可能机制：
- (a) 薄膜面内双轴应力 — 应该是 {001} > {111}，与 Fan 不符；
- (b) 卤素迁移路径优先沿 ⟨110⟩（钙钛矿 [I-Pb-I-Pb-...] 链方向）— 支持各向异性源于迁移方向；
- (c) 八面体倾斜 — Cs 钙钛矿低温正交相有 8 面体倾转，与 Fan 自承 "no discernable distortion" 矛盾。

**这正是 SL-PCI 的标准用例**：把 Fan 的应变图 + 后续 KPFM（$\phi$）+ DLTS（$N_{\text{defect}}$）联合反演，反解出**应变源 = 离子迁移驱动 vs 弹性边界 vs 应力松弛**。

---

### B4. EELS 只能测 I/Cs，看不到 Br — 半个化学被丢掉

**Fan 自承**：

> "Since the EELS detector's range does not encompass the energy of Br peaks, a direct calculation of the ratio between I and Br is not feasible."

他们用 I/Cs 作代理，假设：
1. Cs 体密度恒定（用 4D-STEM 衍射不变作证据）；
2. Pb 占据完全（未说，隐含）。

**结构性问题**：
- 若 **Br 重新分布而 I 不动**，Fan 看不到；
- 若 **Cs 也轻微迁移**（已知现象，Yuan 2016 报告），假设破裂；
- 若 **Pb 空位浓度梯度**形成，Cs/Pb 体积关系也变。

**替代解释**：Fan 看到的"I/Cs 增加"可能是：
- 真 I 富集（主流解释）；
- Cs 局域亏损（次要可能，等效抬高 I/Cs）；
- Pb 局域富集（次要可能，改变 Cs 占据）。

**证伪测试**：用 STEM-EDS（接收角不同，覆盖 Br Kα 11.92 keV）做同区域，看 Br/Cs 是否反向变化。若 Br/Cs 不动，则不是 I-Br 交换而是其它过程。

**对 SL-PCI 的方法学含义**：补一层 **TOF-SIMS 直接测同位素分辨的全卤素分布**，能彻底消除这个代理盲点。

---

## 3. B 级质疑：方法学弱环节

### C1. 样品制备非常规：双层蒸镀 + 固相反应

48 nm CsI:CsBr (3:1 mass) + 51.5 nm PbBr₂ → 170 °C 15 min 退火。

**与器件级 CsPb(Br,I)₃ 制备的差异**：
- 主流：共蒸 / 旋涂 / 单源 PVD；
- Fan：**双层蒸镀分两步**，依赖固相扩散反应；
- 可能后果：(a) z 方向有 Br/I 比梯度；(b) 顶/底界面有未反应残余；(c) 晶粒生长沿厚度的成分历史不均。

**潜在严重影响**：若 pristine 样本已有 **z 方向 Br/I 梯度**，光照后"I→晶心"可能是 **z 方向梯度的 xy 平面投影**。EELS 是积分穿透型，不能分 z 层。

**假设 C1**：Fan 的"I→晶心"含 z 方向初始梯度的几何投影分量。

**证伪测试**：FIB cross-section + TEM-EELS 沿 z 扫描 pristine 样品；若不均匀，"I→晶心"主结论须改写为"光照前后 I/Cs 分布的**差分图**"。

---

### C2. ADF 强度 = 厚度的假设有 Z² 干扰

Fan 的"晶心 = ADF 高 = 厚区"逻辑链假设 ADF 由厚度主导。但 ADF ∝ $t \cdot \langle Z^2 \rangle$，I 的 Z²/Br 的 Z² = 53²/35² = 2.3。I 富集 50%（I/Cs 从 0.88 到 1.19）→ $\langle Z^2 \rangle$ 增加约 15%。

ADF 升高 15% 可能是：
- (i) 厚度增加；
- (ii) 同地 I 富集 + 厚度不变；
- (iii) 两者叠加。

**Fan 用 r(ADF, I/Cs) 时序图（Fig 5A）作为"形貌相关"证据**——但相关性可能是 ADF 中的 Z² 项与 EELS 中的 I/Cs 高度共变造成的**自相关**，不是物理相关。

**Fan 没做的对照**：
- 对比 pre-illumination ADF map 与 post-illumination ADF map；
- 计算 ΔADF/ADF₀ 与 Δ(I/Cs) 的相关性，扣除原始厚度对照。

---

### C3. Plunge-freeze 时间尺度 vs 暗弛豫时间尺度

Plunge-freeze 典型时间 ~10–100 ms。RT 暗弛豫 τ_dark ≈ 40 min（2 h 完全恢复指数拟合）。**冻结过程中再混合可忽略**，OK。

**但**：plunge 过程**激光已关**。冻结的是"激光关后 ~10–100 ms 状态"，不是"激光持续照射中的稳态"。若有快过程（载流子复合 μs–ms 内的反向调整），会被错过。

**对比 Peng 2023**：Peng 是 cryo 下持续光照 → 关激光 → CL 扫描。低温下 ion migration 已被冻结。**Fan 在 RT 下 plunge，更脆弱**。

**证伪测试**：变化"激光关 → 触发 plunge"延迟 0 / 100 ms / 1 s / 10 s / 1 min；看 I/Cs 分布是否漂移。

---

### C4. 80+ 样本统计硬，但单条件

Fig 5A 用 86 个 EELS-ADF map — 统计硬。但全在 CsPb(Br₀.₇I₀.₃)₃ / 碳-Cu / 100 nm / 0.4 W/cm² / 405 nm / RT **单条件**下重复。"I → 晶心"的**外推半径**很小。

---

## 4. C 级质疑：附加问题

### D1. 405 nm 远高于带隙 → 热载流子动力学

405 nm（3.06 eV）远高于 CsPb(Br₀.₇I₀.₃)₃ 带隙 ~2.1 eV → 热载流子。**多数文献用 532 nm 或 633 nm 近带隙激发**。Fan 选 405 nm 可能不与 Tang/Peng 直接可比。

### D2. 各向异性应变 {110} > {111} 未用计算支持

理论判据缺失。Fan 没做 DFT 应变能计算来对照 4D-STEM 测量。

---

## 5. 与 dir2 其他论文的对照

| 论文 | 方法学定位 | 关键结论 | 与 Fan 关系 |
|---|---|---|---|
| **Hoke 2015** | bulk PL + XRD + 时间 | 阈值 / 可逆 / I-rich 钉扎峰 | Fan 复现可逆性 + PL 红移 |
| **Tang 2018** | confocal PL + KPFM + FTPS | **I → 晶界**（MA, $x_I = 0.7$）| **直接对立**（§B1）|
| **Bischak 2017** | SEM-CL 多晶 | 纳米团簇与缺陷相关 | Fan 4% 应变 + 各向异性支持局域驱动 |
| **Mao 2019** | 单晶光学 | I → 边界 | 与 Tang 同方向、与 Fan 对立 |
| **Suchan 2020** | PL 时序 | 多组分演化 | 与 Fan 兼容 |
| **Peng 2023** | cryo-STEM-CL 单晶岛 | spinodal 颗粒 ~250 nm | 方法学**前驱**，Fan 是真多晶 + 真化学映射 |
| **Zhao 2020** | SPM + PL，应变激活 | 应变是 LHS 触发条件 | Fan 4% 各向异性应变定量支持 Zhao |
| **Chen 2021** | 0D 理论 funneling | 阈值预测偏 50× | Fan 应变图反过来约束 $G_{sep}$ 量级 |

---

## 6. 与 Peng 2023 的对比（最直接的方法学竞争者）

| 维度 | Peng 2023 | Fan 2025 |
|---|---|---|
| 体系 | CsPbBr₂.₁I₀.₉ 单晶岛 | CsPb(Br₀.₇I₀.₃)₃ **多晶薄膜** |
| 锁态方式 | **低 T (173 K)** 持续 | **plunge-freeze** 快速 |
| 锁态严格度 | 高（持续低 T）| 中（瞬态保留）|
| 化学映射 | CL（**间接**, optical proxy）| EELS（**直接**, I/Cs ratio）|
| 应变映射 | TEM SAD（定性 elongation）| **4D-STEM**（定量 4%, 各向异性）|
| 空间分辨 | 0.5 nm STEM 探针，~10 nm 信号 | 10 nm EELS / 4D-STEM 像素 |
| Modal 数量 | 5（CL + SAD + XRD + ellipsometry + PL）| **3 + 真同区相关**（ADF + EELS + 4D-STEM）|
| 模型 | PFM 前向 | **无模型**，只观察 |
| 偏析定位 | spinodal 颗粒，无 GB | **I → 晶心**（多晶有 GB）|
| 是否回答机制 | 部分（$G_{sep}$ 唯象项）| 否（明确留作开放问题）|

**结论**：Peng 与 Fan **互补**：
- Peng 走"模型 + 单晶 + 低 T 持续锁态"路线 → 适合机制候选筛选；
- Fan 走"无模型 + 多晶 + plunge 锁态 + 直接化学"路线 → 适合化学定量。

**Fan 比 Peng 更接近 SL-PCI 的核心方法学（plunge-freeze + 直接 EELS + 直接应变图）**。

---

## 7. 与 SL-PCI 框架的逐维对比

| SL-PCI 元素 | Peng 2023 覆盖 | Fan 2025 覆盖 | SL-PCI 增量 |
|---|---|---|---|
| state-writing | ✓ cryo CW 激光 | ✓ RT plunge 激光 | 同 |
| **state-locking** | ✓ 173 K 持续 | ✓✓ **plunge-freeze（更接近 SL-PCI 的"快速终止"理念）** | 同 |
| physics-informed model | ✓ PFM 前向 | ✗ 无模型 | **5 维 forward + 反演** |
| multi-modal correlative | △ 5 modal 但只 CL 空间 | ✓✓ **3 modal 同区** | 加 KPFM + DLTS = 5 modal 全空间 |
| $x_{Br/I}$ | △ CL 间接 | ✓ EELS 直接 | TOF-SIMS 全卤素 |
| $\varepsilon$ | △ SAD 定性 | ✓ 4D-STEM 定量 4% | 加 Raman / GIWAXS |
| $N_{\text{defect}}$ | ✗ | ✗ | **新增**（DLTS / admittance）|
| $\phi$ | ✗ | ✗ | **新增**（KPFM operando）|
| $C_{\text{deg}}$ | ✗ | ✗ | **新增**（AR-XPS 长时序）|
| latent inversion | ✗ | ✗ | **新增**（Bayes + SVD 可识别性）|
| 多机制解耦 H1/H2/H3 | ✗（打包 $G_{sep}$）| ✗（开放问题）| **新增**（Bayes 因子）|
| 组分扫描 | ✗（$x_I=0.30$ 单点）| ✗（$x_{Br}=0.7$ 单点）| **新增**（组分 × T × 光强 3D 网格）|

---

## 8. SL-PCI 相对 Fan 2025 的独立价值

1. **裁决 Tang vs Fan 的方向矛盾**：§B1 组分依赖性反转假设是可发表的 PhD Year 1 首项实验。
2. **量化 Peng 的 $G_{sep}$ 物理起源**：Fan 的 4% 应变给量级匹配证据，但没分极化子 vs 弹性。SL-PCI 用**应变图 × 化学图 × 时间序列**做互相关 + Granger 因果分析。若应变先 → Bischak 极化子路线；若化学先 → defect-trapped hole 路线。
3. **补全 Fan 缺的 3 维**：$N_{defect}$ / $\phi$ / $C_{deg}$。Fan 自己在 line 365–376 列了"defect chemistry / substrates / grain size / strain / fabrication" 作为开放变量。
4. **plunge-freeze + KPFM 同样品**：在 Fan 协议上加一步 operando KPFM。是 SL-PCI 真正的杀手锏。
5. **反向 Bayes 推断**：从"看图说话"升级到"测量 + 不确定度"。
6. **z 方向解析**：FIB cross-section + EELS 把 z 方向加进来，解决 §C1 厚度梯度伪象。

---

## 9. Fan 论文里**最值得拎出来的方法学借鉴**

- **plunge-freeze 协议**（line 423–434）— SL-PCI 第 2 件套的物理实现，应在 v5 方法学章节直接引用并搭一台同款；
- **4D-STEM 低剂量协议**：4 e/Å²/s（line 457）— 电子束诱导损伤的硬下限参数，可直接用作 SL-PCI 剂量预算；
- **I/Cs 比作 halide 代理**（line 215–221）— 有局限但可用，SL-PCI 可补 TOF-SIMS 校正；
- **86 样本 Pearson 相关 + 时序 box plot**（line 339–340 + Fig 5A）— v5 §11 H1/H2/H3 统计形式化的同款样式。

---

## 10. Fan 的真贡献 vs 真盲点

**真贡献**：
1. **首次同区域直接化学映射 + 应变映射 + 形貌**（10 nm 像素）；
2. **首次在多晶薄膜上做 plunge-freeze cryo-EM 偏析观测**（Peng 是单晶岛）；
3. **4% 各向异性应变定量值** — 与 Peng PFM 的 $G_{sep}$ 量级匹配（论文没显示这关系）；
4. **"I→晶心"与 Tang 矛盾明确放进 Discussion** — 论文承担争议而非回避；
5. **plunge-freeze 协议给 SL-PCI 提供了可直接复用的快速终止技术**。

**真盲点**：
1. **EELS 看不到 Br** → 半个化学是推断；
2. **应变图未与化学图做时空因果分析**（先后？）；
3. **未做组分扫描** → 外推性弱；
4. **未做缺陷量化** → "defect chemistry 影响"只是 Discussion 一句话；
5. **未做电势量化** → 无 KPFM；
6. **未做反向推断** → 三模态被并列展示，不是被联合反演成机制权重；
7. **z 方向积分** → xy 投影掩盖 z 梯度信息；
8. **样品制备非常规**（双层蒸镀），主结论可能含制备依赖性。

---

## 11. 引用与版本

- 原文：Fan, Cui (author 2), Li, Vigil, Jiang, Nandi, Colby, Zhang, Cui (author 9, senior), Karunadasa, Lindenberg. *Cell Rep. Phys. Sci.* 6, 102653 (2025). DOI: 10.1016/j.xcrp.2025.102653
- 配套深读笔记：暂无（建议另起 `analysis/dir2_fan2025.md`）
- 关联框架：v5 SL-PCI 方法学最近的先行者
- 前驱工作：Peng 2023（cryo-STEM-CL 单晶岛）
- 本批评 v1.0（2026-05-13, Jones）
