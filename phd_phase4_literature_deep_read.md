---
name: PhD Phase 4 — three-direction literature deep read
description: 11 papers, structured deep reading + cross-cutting PhD research plan scaffold covering blueshift decoupling, phase segregation, ion migration.
type: project
date: 2026-04-20
sources: 11 arxiv PDFs at E:/Hermes_artifact/perovksite_research/downloads/
---

# PhD Phase 4 · 三方向文献深读与研究计划

> 11 篇 arXiv 开放论文的全文精读 + 三方向耦合研究计划骨架。方向1（3 篇）聚焦蓝移解耦到 A/B1/B2/C_linear/C_nonlinear 五通道；方向2（3 篇）把相分离统一到 Ruth 热力学模型并给出压力/温度/组分三条控制轴；方向3（5 篇）把离子迁移 E_a 测定分成 transient capacitance / 阻抗谱 / SKPM-SEM 三条正交路径，solvent engineering 是当前方向3 的空白区。

## 方向 1 · 内在不稳定性解耦（5 通道重新分类）

### 论文 1.1 · Houtput 2026 · CsPbI3 中非线性长程电-声耦合对载流子迁移率的贡献

**核心主张（1 句）**：在典型卤化物钙钛矿 CsPbI3 中，由于声子频率极低、室温下离子热位移大，传统线性 e-ph 近似遗漏了"一电子-两声子"非线性长程项，该项在室温对电子迁移率贡献约 10%，并把迁移率温度标度指数从 γ=0.85 推高到 γ=0.95。

**量化锚点**：
- 室温下一电子-两声子 (1e2ph) 项对迁移率的相对降低：约 10% at 300 K
- 迁移率温度指数 μ∝T^−γ：γ=0.85（仅线性）→ γ=0.95（含 1e2ph），拟合区间 200–500 K
- 电子有效质量 m*_c = 0.17 m_e，空穴 m*_v = 0.16 m_e（引用 Poncé 2019）
- 高频介电常数 ε∞ = 5.96（CsPbI3 立方相，PBE+D3）
- 非线性谱函数 T(ω) 在室温达 ~0.1 量级，零温下可忽略；虚频截断 0.1 THz
- 主要贡献来自频率 < 1 THz 的低频声子，室温下几乎全部被热激发 (k_B T ≫ ℏω_qν)

**方法 / 技术**：首原理 DFT + DFPT（外加电场计算动力学矩阵对 E 的导数 ∂D/∂E，Wannier/EPW 类框架）；长程近似下按 Houtput et al. PRB 111 (2025) 的一电子-两声子矩阵元 Y_{ν1ν2i}(q) 表达；SERTA + 谐波 + 准粒子框架内解线性化 BTE；立方相在零温是力学不稳定的，作者用频率截断规避。

**对方向1 解耦的启示**：直接支持 C_nonlinear，间接说明 C_linear 不足以闭合高温迁移率与带隙重整化图像；暗示 A 和 B 之外存在一条"纯电-声"渠道，且该渠道在室温之上才显形。可证伪判据是温度指数 γ：若用 T^(−γ) 拟合室温以上迁移率能得到 γ≈0.95 而非经典极化子理论给出的 γ≈1.5（或仅线性 Fröhlich 的 γ≈0.85），就支持 1e2ph 项主导。设备改进钩子：能分辨 100–500 K 区间、μ±5% 精度、同步测 T^(−γ) 斜率与载流子温度的霍尔-光电-Terahertz 三合一平台；需用 INS 或 Raman 独立约束低频软模 ω<1 THz 的线宽/谱权。

**限制**：立方相零温相声子谱存在虚频，用硬截断规避，"10% 是低估"；停留在准粒子 + 谐波 + SERTA 框架内；只考虑长程偶极项，短程项未纳入，未算 1e-n-ph（n≥3）的更高阶。

**对博士研究计划的直接启发**：操作入口是在 CsPbI3（对比 CsPbBr3）的单晶/厚膜上做 100–500 K 温度扫描的 Hall/THz-TDS 迁移率测量，提取 γ 与论文预测 γ=0.95 对标；同一批样品做温度依赖的 INS 或 IXS，直接测 T(ω) 隐式使用的低频声子态密度与其线宽的温度标度，把"1e2ph 预言"从纯理论变成可证伪的实验闭环。关键是找到能在同批样品上并行做"迁移率温度指数 + 低频声子谱"的站——ISIS、ILL、SNS 的冷中子 TOF 站配自建的变温 THz 探头是一个清晰目标。

---

### 论文 1.2 · Mukhuti 2022 · CsPbBr3 纳米片的零点带隙重整化与 Urbach 聚焦

**核心主张**：用 PL 发射谱（而非吸收谱）反推 Urbach 尾并把"反常蓝移带隙"做解析平移后，在 CsPbBr3 纳米片中观察到 Urbach focus，其位置对应零点带隙重整化仅 33 meV，说明电-声耦合属弱/中等区间，Mott-Wannier 激子图像成立。

**量化锚点**：
- 零点带隙重整化 ZPR = 33 meV
- Urbach 零温斜率 E_U^0 = 8.13 meV；特征声子 ℏΩ_p = 14.3 meV
- 激子-LO 声子耦合强度 γ_LO = 48 meV；ℏΩ̃_p = 15.5 meV；σ_A = 2.7×10^−4 meV·K^−1
- Γ_0 = 17 meV（非均匀展宽）；E_0 = 2.292 eV、E_g = 2.395 eV、E_b ≈ 103 meV（35 T 磁-PL 定下限 98 meV）
- 反常蓝移拟合 E_g^∞ = 2.349 eV，Ξ_0 = 57 meV，T_0 = 62 K（emphanisis 半经验式）
- 局域化-热化交叉温度 55–75 K；Stokes shift ≈ 25 meV at 300 K

**方法 / 技术**：闭循环氦低温 PL（4–290 K），403 nm CW，激发密度跨四个量级；Andor 光栅+EMCCD；CsPbBr3 二维纳米片（~200 nm）旋涂蓝宝石；方法创新是把 Urbach-focus 分析从吸收谱嫁接到发射谱，用 emphanisis 半经验式扣除反常温度依赖后再找 focus；磁-PL 35 T 独立约束 E_b。

**对方向1 解耦的启示**：强烈反对 C_strong / 强极化子假说，支持 C_linear + B2（emphanisis 作为反常蓝移的结构起源），并把 A 直接排除在主因之外——作者明写"主因不是热膨胀，而是 Pb 孤对电子的高温局域对称性破缺 emphanisis"。可证伪判据：(1) Urbach focus 的存在与否——若对 emphanisis 平移后不同 T 的 Urbach 尾相交于一点，则线形行为 Γ∝coth 成立，Toyozawa 预测 Γ∝√coth 被反驳；(2) ZPR <~50 meV 落在弱耦合区间，>~200 meV 才能支持小极化子。设备改进钩子：4–300 K PL + ≥35 T 磁场平台独立标定 E_b；低温低激发密度 PL（四个量级功率扫描）区分局域化尾 vs 本征物理；把 Urbach-focus 方法推广到吸收端（宽动态范围、>4 量级的变温吸收）。

**限制**：样品是二维纳米片含 ~100 meV 大激子束缚能与显著量子限域，外推三维体相存疑；室温发射线形非对称"无法解释"，可能污染 γ_LO 拟合；σ_0=0.88 在 2D 正方晶格下对应 g≈1.4 高于 Toyozawa 临界值 0.088，与"无声子伴线"观察相抵触。

**对博士研究计划的直接启发**：方法论直接可移植——若研究对象是 CsPbI3 或 FAPbI3 厚膜/单晶，可完全复制"Urbach-focus + emphanisis 平移 + FWHM-coth 拟合"三件套；把它作为"C_linear 上限标定工具"，若同批样品测出 ZPR~30–50 meV 且 γ=0.85–0.95（论文1.1 预测），就能把 C_linear 与 C_nonlinear 数值预算分离——线性提供 ZPR，非线性提供迁移率指数。在同批 CsPbI3 样品上同时做 Urbach-focus（ZPR）与 THz 迁移率（γ），画出 (ZPR, γ) 二维判据图。

---

### 论文 1.3 · Hylton-Farrington & Remsing 2025 (Weadock arXiv 2508.15607) · 八面体倾转与 B 位偏心是对称性解耦的

**核心主张**：在立方 CsBBr3 (B=Pb, Sn, Ge) 中，B 位孤对导致的 [111] 方向偏心（emphanisis）与 BX6 八面体倾转属于不可公度的不可约表示（T1u vs T1g），因此对称性上完全解耦；两者的"竞争"表现出自 B-Br 部分共价键的刚度，而不是孤对本身直接耦合到倾转模。

**量化锚点**：
- AIMD 超胞 4×4×4；Pb L=23.80 Å、Sn L=23.18 Å、Ge L=22.12 Å；T = 450 K (Pb)、300 K (Sn)、550 K (Ge)；对照组 L=Pb 尺寸、T=550 K
- 偏心距离 ⟨r_oct⟩：Pb ≈ Sn（Sn 略大）< Ge（显著更大）
- 倾转序参量 M_K^{4,4} 分布宽度：Pb > Sn > Ge
- 偶极旋转关联 C_dip(t)：Ge 模型胞 10+ ps 衰减（实验胞 0.5–1 ps），Pb 短时即振荡衰减
- 声学分支频率：Ge > Pb ≈ Sn；M–R 间出现准平带归于倾转软模
- 电子结构层面：s–p 混合 Pb→Sn→Ge 逐渐增大

**方法 / 技术**：CP2K 下 BO-AIMD，PBE+D3，GTH 赝势 + DZVP-MOLOPT-SR-GTH + 平面波（350–400 Ry）；用 MLWFC 表征电子密度；rotor function 把结构序参量投影到不可约表示——倾转 M_K^{4,4} 属 T1g，偶极 M_K^{1,m} 属 T1u；NVT 热化 5 ps → NVE 60–260 ps；dump2phonon 从 AIMD 轨迹直接提取有限温声子谱。

**对方向1 解耦的启示**：对 B1（八面体倾转）和 B2（B 位 emphanisis 偏心）给出强得惊人的结论——两者不是"同因异果"的孪生畸变，而是对称性不可公度的独立序参量。因此把"结构畸变"当整体的 B 通道处理是错误的；应严格拆成 B1 和 B2。可证伪判据：若 XPDF 中 [111] 偏心与 R-point 倾转模的联合出现强度随温度变化同相，则模型被反驳；若温度演化（或 B 位取代 Pb→Sn→Ge）反相或无关联，则支持解耦。更精细地，条件分布 χ_{r_oct}(M_K^{4,4}) ≈ 0 是直接的量化判据。设备改进钩子：高通量 X 射线或中子 PDF 测量 + ab initio MD 的 rotor-function 分析流程，高亮度同步辐射 PDF 站（APS 11-ID-B、ESRF ID31）+ 变温 T 扫描；更直接的是单晶漫散射图像+3D-ΔPDF，能把 T1g 倾转与 T1u 偏心在倒空间分开。

**限制**：只做立方相 CsBBr3 (B=Pb/Sn/Ge)，未推广到 Cl/I 或混合 A 位；Pb/Sn 用统一格点尺寸隔离孤对效应，可能高估 Sn 的孤对活性；PBE+D3 对钙钛矿电子结构有已知偏差；群论解耦结论对"大倾转"情形留了口子。

**对博士研究计划的直接启发**：提供干净的"对称性判据接口"——在 CsPbBr3 / CsPbI3 / FAPbI3 单晶上做 T 从低温相到立方相的 PDF + 3D-ΔPDF 扫描，用论文给的 rotor-function 框架把倾转 (T1g) 和偏心 (T1u) 两个序参量的温度依赖分别拟合，投喂到四通道模型：E_g(T) = E_g^0 + α_A·ΔV/V(T) + β_{B1}·⟨M^{4,4}⟩²(T) + β_{B2}·⟨r_oct⟩²(T) + γ·n_phonon(T)。这就把方向1 从"机制罗列"变成可回归的四通道模型。具体可在 Diamond I11 或 ESRF ID31 申请一轮 beamtime。

---

### 方向1 三篇交叉对比

三篇合起来覆盖 {B1, B2, C_linear, C_nonlinear} 四个通道的定量锚点，但 **A 通道（热膨胀对 E_g 的贡献）没有任何一篇直接量化**，只有论文1.2 以"不是主因"定性排除；缺少 α_A·ΔV/V(T) 的独立实验值（需高压/负压 PL 或变温晶格常数+形变势）。三篇在材料上分散（CsPbBr3 / CsPbI3 / CsBBr3 系），没有一个材料被同时用三种方法测过。

**方向1 最小证据闭环建议**：选定 CsPbI3（同时是论文1.1 和论文1.3 处理过的），在其上同步做 (i) 变温 PDF + rotor-function 拆 B1/B2（论文1.3 风格）、(ii) Urbach-focus + 反常蓝移拟合拿 ZPR 与 E_g^∞-Ξ_0-T_0（论文1.2 风格）、(iii) 变温 THz/Hall 拿 γ 指数（论文1.1 判据）、(iv) 高压/低温晶格参数拿 α_A（三篇都缺的一环），才能把 A/B1/B2/C_linear/C_nonlinear 五通道同时钉到同一样品上。

---

## 方向 2 · 相分离（热力学 · 压力 · 温度三条控制轴）

### 论文 2.1 · Ruth/Kuno 2023 · 光致相分离的热力学带隙模型综述

**核心主张**：以"碘富集畴内光生载流子热化释放的能量"作为驱动自由能项 ΔF_light，把相分离写成一个受 Vegard 带隙梯度 dE_g/dx、碘富集畴体积 V_gap、载流子数 n(I_exc) 共同决定的热力学平衡问题，从而解析预测 x_terminal、I_exc,threshold、尺寸效应、正反向速率常数非对称性。

**量化锚点**：
- I-Br 混合焓相互作用 U_I,Br ≈ 39 meV/halide (MAPb) 与 45 meV/halide (CsPb)；FAPb 含三次项 U'_I,Br ≈ 87–103 meV/halide
- 预测 I_exc,threshold ≈ 20–200 μW/cm²（体膜 l_{e/h} ≈ 100–1000 nm），与实验 MAPb(Br_{0.5}I_{0.5})_3 30–500 μW/cm²、CsPb(Br_{0.5}I_{0.5})_3 ~200 μW/cm² 一致；FA_{0.83}Cs_{0.17}(Br_{0.2}I_{0.8})_3 可达 50 mW/cm²
- V_gap ≈ 4.1 nm³ (MAPb)、2.4 nm³ (CsPb)；r_gap ≈ 0.83–1.0 nm；激子玻尔半径 a_B = 3.5–6.4 nm
- 激活能不对称：E_a(前向，光下 MAPbI_{0.5}Br_{0.5}) = 0.27–0.30 eV；E_a(反向，暗态重混) = 0.55 eV (54 kJ/mol)
- ε_QFLS < E_g(MAPbI_3) 时 x ≤ 0.2 的相完全稳定

**方法 / 技术**：解析热力学 + 动力学 Monte Carlo 综述；宏观自由能（ΔH_mix 二阶 Taylor + ΔS_mix Shannon 熵 + ΔF_light Vegard 梯度加 n）；近似包括每个 V_D 内只有一个 I-rich 畴、Fermi-Dirac vs Maxwell-Boltzmann、载流子 100% 漏斗进低带隙区。实验参比 CsPb(I_{1-x}Br_x)_3 纳米晶 18–25 nm 系列与 MAPb/CsPb 薄膜 PL 光谱。

**对方向2 控制策略的启示**：驱动力定量化为"带隙梯度 × 局域载流子数"dE_g/dx · n(I_exc,τ,l_{e/h},V_D)，而非化学势或应变。作者控制手段走"组分 + 维度"路径——降 V_D（做小纳米晶）、降 τ（表面钝化/猝灭）、压低 dE_g/dx（降弓形因子 b、选 FA 体系）都能线性提高 I_exc,threshold。对 solvent / interface engineering 路线：solvent 工程若能通过晶粒尺寸/缺陷密度改变 τ 和 l_{e/h}，就能把 I_exc,threshold 抬升 1–2 个数量级；界面工程若能建立电子选择性接触把光生电子/空穴抽走，等效于截断 n。

**限制**：曲率方向实验"上凹"而理论"下凹"，低强度 x_terminal 敏感性被低估；V_gap 从 a_B 估计的 270 nm³ 与电子无序估计的 2–4 nm³ 差两个数量级；假设每个 V_D 内只有一个 I-rich 畴，实际体膜多畴共存。

**对博士研究计划的直接启发**：可把本文公式反用成 solvent 变量筛选指标：测 PL 线宽推 V_gap、测 TRPL 推 τ、测 PL-Stokes-shift 推 dE_g/dx，代入 Eq. 20 得到每种溶剂体系的预测 I_exc,threshold，再用单参数扫描 I_exc 验证——这是一个完全可证伪的实验闭环。Solvent engineering 可下手的杠杆有三个：(1) 晶粒细化减小 V_D；(2) Lewis 碱添加剂钝化碘空位；(3) 溶剂-前驱体配位改变 U_I,Br。

---

### 论文 2.2 · Muscarella/Ehrler 2020 · 压力抑制相分离

**核心主张**：把 MAPb(Br_xI_{1-x})_3 放进液压池加 0–0.3 GPa 静水压，晶胞体积压缩 ~2.5% 会把碘空位迁移激活能抬高数十 meV，让相分离速率 k_seg 下降约 2 个数量级；用 Cs⁺ 部分替代 MA⁺ 做"化学压力"达到同样体积收缩时 k_seg 下降曲线与物理压力曲线重合，晶胞体积是统一的控制参数。

**量化锚点**：
- 施压窗口 0 → 0.3 GPa；晶胞体积缩小 2.5% (x=0.5)、3% (x=0.25)、2.2% (x=0.7)
- k_seg (x=0.5, 碘富集相)：0.08 ± 0.01 s⁻¹ → 0.003 ± 0.001 s⁻¹，~27×
- k_seg (x=0.7)：0.1 ± 0.03 s⁻¹ → 0.003 ± 0.001 s⁻¹，~33×
- k_seg (x=0.25)：0.028 ± 0.002 s⁻¹ → 0.004 ± 0.001 s⁻¹，~7×
- DFT (PBEsol) 空位辅助迁移势垒随压力 0 → 0.8 GPa 升高 64 meV (I) 和 56 meV (Br)
- TID 直测（x=0.20 暗态）E_a = 0.15 ± 0.03 eV 与 0.14 ± 0.01 eV；光照后一种降至 0.09 ± 0.01 eV
- 激发密度：fs 泵浦 ~10¹⁸ photons/cm³，405 nm CW 2.37 W/cm²

**方法 / 技术**："CW 光诱导 + fs TA 探测"的压力依赖瞬态吸收谱，泵浦 400 nm fs、诱导 405 nm CW、延迟 15 ps 跳过热载流子冷却；液压池 ≤ 0.3 GPa；TID 在 x=0.20 单独测 E_a；DFT/PBEsol 在 CsPbI_3/CsPbBr_3 上算 NEB 空位-离子交换势垒。

**对方向2 控制策略的启示**：驱动力是光致热膨胀带来的张应变拉长 Pb–X 键、降低空位迁移势垒；压缩应变反向"夹紧"。作者走"压力 + 组分（同效应）"两条路径——物理压力和 Cs⁺ 化学压力在 -ln(k_seg) vs 晶胞体积图上落到同一曲线，这是方向2 里最强的"单参数塌缩"证据。对 solvent / interface engineering：任何手段能在薄膜层面引入残余压应力或抵消 TEC 失配的拉应力，都应等效降 k_seg。作者引用 Xue/Sargent 2020 Nat Commun（调 ETL/HTL 应变）作为 interface engineering 的"外力等效"实现。

**限制**：I_exc 固定 2.37 W/cm² 未扫描，不能检验是否穿过了 Ruth 的 I_exc,threshold；DFT 用 Cs 端元未算 MA 或混合组分；化学压力与物理压力"完全等效"论证偷懒——Cs 替代会改变缺陷密度和结晶度，但未拆解。

**对博士研究计划的直接启发**：挑 3–4 种溶剂体系（DMF/DMSO 基、GBL 基、2-ME 基、含硫脲/MACl 添加剂的），用 XRD 测晶格常数推 ΔV/V，再用同样的 CW 光诱导 + TA 或 PL 方法测 k_seg 与 V/V_0 的关系，看是否落在 Muscarella Fig 3c 那条 -ln(k_seg) vs V 的"主曲线"上。落上去证明 solvent 是另一种化学压力；偏离则说明 solvent 还引入了缺陷密度或界面能这类 Ruth 模型里的其他自由度，此时就找到了 solvent engineering 超越"纯压力"的独立杠杆。

---

### 论文 2.3 · Feng 2023 · 周期加热完全抑制相分离

**核心主张**：在 ITO 衬底上用电流脉冲把 CsPbBr_{1.2}I_{1.8} 纳米晶膜温度周期性地快速摆动 ±10 °C，可在 50 W/cm² 高激发下 180 s 内完全抑制相分离——机制是温度动态跳变分别从熵（加热）和应变弛豫（降温）两侧加速碘离子对空位的雪崩式回填，而离子迁移响应跟不上熵/应变的瞬时变化。

**量化锚点**：
- 激发 ~50 W/cm² @ 405 nm，5 MHz 皮秒激光；NC 尺寸 ~23 nm
- ΔT ≈ 10 °C 快速跳变（0→400 mA 在 10 s 内 24→32 °C）
- 静态下相分离完成时间：常温 ~10 min，35 °C 下 ~90 s（光下）
- 静态下暗态重混：常温 ~120 min，35 °C 下 ~25 min
- 动态触发重混：开 400 mA 后 4 s 回到混合相；关后 8 s 回到混合相
- 最优脉冲 t/T = 0.5/5 s（10% 占空比），180 s 内 PL 谱无相分离迹象
- 也在 CsPbBr_{2.1}I_{0.9} 上验证

**方法 / 技术**：合成 ~23 nm CsPbBr_{1.2}I_{1.8} NC 旋涂两电极 ITO 衬底；Keithley 2636B 源表 PWM 加热；405 nm 5 MHz 脉冲激光 50 W/cm² 共聚焦激发；CCD 光谱仪 0.5 s 积分做 PL 时间演化；非接触测温仪记录表面温度。机制为唯象示意图，未做 DFT 或 MC 定量支持。

**对方向2 控制策略的启示**：控制原理与前两篇都不同——静态温度只会加速相分离，真正起作用的是"dT/dt 够快 → 熵响应瞬时跟上、离子迁移跟不上"的时间尺度分离。作者走"温度动态调制"路径。对 solvent / interface engineering：solvent 是稳态环境，难做"dX/dt 快"扰动，但作者的"表面附近碘阴离子呈 Gaussian 分布"给了 solvent 一个稳态杠杆——若 solvent / ligand 能改变表面配位、把自由碘"锚定"在表面，就等效降低空间分布宽度，削弱相分离。

**限制**：机制完全是唯象示意图，无 DFT/MD/MC 支持；只测 NC 薄膜未做连续薄膜或单晶；50 W/cm² 叠加了持续热积累（180 s 后仍有轻微蓝移），未做 > 1 h 长时稳定性测试。

**对博士研究计划的直接启发**：任何控制手段要么改变"稳态自由能平衡"（Ruth/Muscarella），要么制造"时间尺度失配"（Feng）。Solvent engineering 原则上只能走前者；但本文给出一个侧面启发：NC 表面附近碘离子"Gaussian 分布"宽度由表面配体和自由碘活度决定，solvent 中的过量 oleate/oleylamine 或硫醇类配体会显著改变这一分布的截断长度。可把本文的"t/T 脉冲抑制图"改造成"溶剂-配体组合筛查图"：同一 CsPbBr_{1.2}I_{1.8} NC 体系，不同后合成配体交换（短链胺 vs oleate vs 硫醇），固定 I_exc = 50 W/cm²，测 180 s 后相分离幅度，映射到配体极性/链长。

---

### 方向 2 三篇交叉对比

三条正交的控制轴、不同的抑制数量级与作用机理：

| 控制轴 | 抑制效果 | 机制类别 |
|---|---|---|
| 组分/维度/载流子数（Ruth） | I_exc,threshold 从 0.1 到 500 mW/cm²（3–4 量级） | 稳态自由能平衡 |
| 压力/晶胞体积（Muscarella） | k_seg ~30× 下降（0.3 GPa 或 3% 收缩） | 稳态势垒抬升 |
| 温度动态调制（Feng） | 50 W/cm² 下完全抑制（ΔT=10 °C + 10% 占空比） | 时间尺度分离 |

**Solvent engineering 的定位**：天然属于化学压力轴（Muscarella Cs⁺ 路径推广），可能通过前驱体配位引入残余压应力、或通过添加剂改变晶粒尺寸进而改 V_D/τ 兼跨 Ruth 载流子数轴，但原则上不能做 Feng 的动态扰动路线。

**最强可证伪判据**：把 solvent 变量映射到这两条轴上——测 ΔV/V_0 (XRD) 和 V_D (PL 线宽 + TRPL 推 τ)，然后预测 I_exc,threshold 的变化，再做 I_exc 扫描验证，看实验点是否落在 Ruth 公式 + Muscarella 主曲线的两维预测面上。落上去说明 solvent 是已知轴的线性组合；偏离说明 solvent 触发了第四条独立轴（最可能是界面能或缺陷密度），这就是博士论文里最值得挖的"真正的 solvent-specific 机制"。

---

## 方向 3 · 离子迁移（三条 E_a 测定路径 · solvent 空白区）

### 论文 3.1 · Futscher 2018 · Transient ion-drift 定量 MAPbI3 三种迁移物种

**核心主张**：通过瞬态电容（transient ion-drift / DLTS 思路）可以在单一器件上同时分辨 I⁻ 与两种 MA⁺ 迁移通道的活化能、扩散系数、符号与浓度，MA⁺ 浓度高但 I⁻ 快三个量级，电流-电压滞后由 MA⁺ 主导而长期降解由 I⁻ 驱动。

**量化锚点**：
- E_a(I⁻) = 0.29 ± 0.06 eV；E_a(MA⁺, C1 tetragonal) = 0.90 ± 0.45 eV，E_a(MA⁺, C2 tetragonal) = 0.46 ± 0.25 eV，E_a(MA⁺, cubic) = 0.39 ± 0.24 eV
- D(I⁻, 300 K) = (3.1 ± 2.8) × 10⁻⁹ cm² s⁻¹；D(MA⁺, 300 K) ≈ 10⁻¹² cm² s⁻¹（差 ~3 量级）
- N_mobile(I⁻) = (1.1 ± 0.9) × 10¹⁵ cm⁻³；N_mobile(MA⁺, C1) = (1.3 ± 0.8) × 10¹⁶ cm⁻³
- 测量温度 180–350 K，步长 2 K；AC 10 kHz / 10 mV；电压脉冲 0.4 V × 1 s；< 3 V/μm 避免 PbI₂ 形成
- 器件：ITO / NiOₓ / MAPbI₃ / C60 / BCP / Ag / Au（p-i-n），PCE 1–12% 都测到相同 I⁻ 行为

**方法 / 技术**：瞬态离子漂移（transient capacitance transient），Semetrol DLTS，Janis VPF-100 液氮冷台，< 2×10⁻⁶ mbar，黑暗；rate-window analysis（t₁=2t₂）分开三条 τ-T 曲线，Arrhenius 得 E_a 与 D₀；C(∞)∝√N 估浓度。

**对方向3 抑制策略的启示**：针对 I⁻（空位介导）与 MA⁺（阳离子空位）两类迁移。不是抑制策略论文，是"诊断基线"——I⁻ 活化能钉在 0.29 eV ± 0.06 eV，后续任何策略都要用这个数做 reference。对 solvent / interface engineering：solvent 调节会改变晶粒尺寸、MA⁺ 局域环境与缺陷密度，MA⁺ 的 E_a 跨度 0.39–0.90 eV **强依赖制备**——这恰好说明 solvent 变量能调到 MA⁺ 通道上；而 I⁻ 的 0.29 eV 是 "intrinsic floor"，solvent 如果能把 I⁻ 移上去就有一级 novelty。

**限制**：假设背景掺杂 1×10¹⁷ cm⁻³ 定值，否则 N_mobile 绝对值会漂移；不能排除 H⁺（E_a = 0.29 eV 理论值）冒充 I⁻；选 10 kHz / 0.4 V / 1 s 是经验窗口，没系统扫频确认 τ 不受传输层 leakage 污染。

**对博士研究计划的直接启发**：用户想用 solvent engineering 扫 E_a，这篇提供最干净的单一器件分辨工具：温度扫 180–350 K、电压脉冲 0.4 V × 1 s、10 kHz AC 读电容，rate-window + Arrhenius 同时拿到 I⁻ 与 MA⁺ 两条支路。完全可复用到 solvent 变量扫描（DMF:DMSO 比、anti-solvent 种类、添加剂浓度），每个 solvent 条件做同一套器件（NiOₓ / perovskite / C60），直接得到 ΔE_a(solvent) 散点图。需注意：必须 inverted 结构避免 TiO₂ 界面电容污染，sub-3 V/μm 内做避免 PbI₂ 假信号。

---

### 论文 3.2 · Pothoof 2023 · APTMS 表面钝化抑制局部离子迁移（SKPM）

**核心主张**：在宽带隙 Cs₀.₂₂FA₀.₇₈Pb(I₀.₈₅Br₀.₁₅)₃ 上用 APTMS 做真空气相表面钝化，SKPM-poling 观察到 CPD shift 从 ~100 mV 降到 ~20 mV（5×），且 domain interface 附近的迁移异质性被显著抹平，机理归于表面卤素空位密度降低。

**量化锚点**：
- ΔCPD(control, ±3 V poling) ≈ 100 mV；ΔCPD(APTMS) ≈ 20 mV；5× 抑制
- CPD 分布 FWHM(APTMS) ≈ 10 mV 且与偏压无关；control 负偏压下 FWHM 持续展宽
- PL 寿命 control τ_avg = 120.78 ns → APTMS τ_avg = 1015.60 ns（8.4×）
- 相分离增幅：control 达初始 7×，APTMS 仅 2×
- 激光 light-soaking 532 nm、600 mW cm⁻²（6× AM1.5）；poling 范围 −3 V 至 +3 V，步长 1 V，lift height 10 nm
- 薄膜组成 Cs₀.₂₂FA₀.₇₈Pb(I₀.₈₅Br₀.₁₅)₃，E_g ≈ 1.7 eV；APTMS 低真空室温气相 5 min

**方法 / 技术**：SKPM 双通扫描——先测 topography，lift 10 nm 施加 ±3 V poling，0 V 读 CPD；暗室测量，每 bias 三次独立样品；辅助 hyperspectral PL microscopy。

**对方向3 抑制策略的启示**：针对 I⁻ 与 Br⁻ 空位介导迁移；抑制手段属表面钝化路径（硅烷氨基在表面聚合，胺基占据卤素空位）。定量抑制：CPD shift 5×，相分离增幅 3.5×，PL lifetime 8.4×。对 solvent / interface engineering：SKPM-poling + hyperspectral PL 组合既测"电场驱动"又测"光驱动"迁移，比单一 PL 红移更严密；每组 solvent 样品都做 ΔCPD vs bias + FWHM vs bias，可分开 bulk ionic mobility 与 grain-boundary heterogeneity 两个贡献。

**限制**：SKPM 只对表面 CPD 敏感，不直接给 E_a；"domain" vs "interface" 的 mask 手工选；600 mW cm⁻² 是 6× 1 Sun，非线性机制可能被放大，1 Sun 下抑制倍数未必仍是 5×。

**对博士研究计划的直接启发**：给出"同一 perovskite 组分 ± 钝化"的 SKPM 二元对照范式。可做标准化探针：每个 solvent 条件拿 ΔCPD(−3V)、FWHM(−3V)、domain-interface 差，输出一张 solvent 相图。APTMS 是气相不进溶液、不干扰 solvent 配方；若 solvent 后叠一层 APTMS 作为对照，可直接测 solvent 优化是否已让空位密度饱和降低。

---

### 论文 3.3 · Akrami 2023 · APTMS 扩展到 wide-bandgap FACs 光致迁移

**核心主张**：在 FA₀.₈Cs₀.₂Pb(I₀.₈Br₀.₂)₃（E_g = 1.69 eV）上 APTMS 钝化动力学地抑制光致卤素迁移，SKPM 暗态 CPD 弛豫时间从 ~1000 s 延长到 ~2550 s，PL 红移速率慢 5×，且 PL 红移随 light fluence 呈一阶动力学。

**量化锚点**：
- τ_relax(暗态 CPD, control) ≈ 1000 s；τ_relax(APTMS) ≈ 2550 s（2.5×）
- PL λ_max 红移速率 APTMS 比 control 慢 > 5×（APTMS 在 46 kW m⁻² 仍慢于 control 在 23 kW m⁻²）
- PL 强度 APTMS/control ≈ 36×；PL 寿命 APTMS/control ≈ 7×
- 激光：405 nm CW 18 kW m⁻²（SKPM）、532 nm CW 23 与 46 kW m⁻²（PL）
- E_g = 1.69 eV；拉伸指数 stretched-exp 拟合 CPD 弛豫
- 一阶动力学：相同 fluence（强度 × 时间）得到相同 PL 红移量

**方法 / 技术**：SKPM 光照/暗态 CPD 时序测量（405 nm 与 AFM tip 共轴），分钟级；稳态 PL + 时间分辨 PL；UV-Vis 不变做反证；架构 glass/ITO/SnO₂/perovskite。

**对方向3 抑制策略的启示**：针对 I⁻/Br⁻ 光致空位迁移；抑制手段仍属表面钝化，但新贡献是"kinetic 判据"而非幅度判据——测 τ_relax 与一阶速率常数，更接近动力学意义上的 E_a 代理量。对 solvent engineering：PL 红移作为 light fluence 的函数（不是单独 time/intensity 的函数），是严谨的 scalar 判据；每个 solvent 条件可算一个 k(fluence)，得到"k vs solvent formulation"曲线。

**限制**：没给 E_a，只给 τ，"kinetic suppression" 只是相对；无法完全排除深陷阱电子弛豫贡献；样品是 ITO/SnO₂/perovskite 非完整器件。

**对博士研究计划的直接启发**：给了一个非常适合 solvent engineering scan 的"动力学代理"工作流。若升级成真正 E_a，只需把 measurement 放到温控 stage（如 Peltier 10–60 °C），做 Arrhenius。Solvent scan 可同时跑两套（器件级 capacitance + 膜级 PL kinetics），若两者 E_a 一致说明 solvent 改的是 bulk 而非界面。

---

### 论文 3.4 · Dey 2023 · Sn 取代抑制离子迁移（本体组分）

**核心主张**：用 Sn 部分替代 Pb（FA₀.₈₅Cs₀.₁₅Pb₀.₅Sn₀.₅I₃）显著抑制 I⁻ 迁移，实验上表现为低扫描速率下 hysteresis index 平坦、阻抗谱低频离子弧消失，DFT 归因为 Sn 空位（V_Sn,2V_I Schottky cluster）造成局部畸变把 I⁻ 迁移壁垒从 ~0.47 eV 抬到 > 1.1 eV。

**量化锚点**：
- E_a(I⁻, Pb cell 阻抗谱) = 0.52 eV；Pb-Sn cell 21–40 °C、1 mHz 以内仍测不到离子弧，推断 E_a > 0.52 eV
- DFT：FAPbI₃ rate-limiting E_a = 0.45 eV；FASnI₃ 无 Sn vacancy = 0.36 eV；FAPb₀.₅Sn₀.₅I₃ 无 Sn vacancy = 0.47 eV；有 Sn vacancy Schottky cluster = **1.45 eV**；FASnI₃ 有 Sn vacancy = **1.12 eV**
- 扫描速率 5 mV/s–1 V/s；Pb 器件 < 50 mV/s 时 HI 急剧上升，Pb-Sn 保持平坦
- 器件 ITO/2PACz(or PEDOT)/perovskite/C60/BCP/Cu；Pb PCE = 15.6 ± 1.3%，Pb-Sn PCE = 14.3 ± 1.1%；Pb V_oc = 1.02 V，Pb-Sn V_oc = 0.77 V
- 阻抗谱 470 nm LED 开路光照，100 mHz–1 MHz；Pb hf 弧 τ=6.2 μs，lf 弧 τ=45 ms

**方法 / 技术**：扫速依赖 J-V + 温度控制阻抗谱 21–40 °C + Kramers-Kronig validity；DFT NEB 做 I vacancy 迁移路径 + SnI₂ Schottky cluster 构型能。

**对方向3 抑制策略的启示**：针对 I⁻ 空位介导迁移；抑制手段属本体组分路径（B-site metal substitution）。定量抑制：E_a 从 ~0.5 eV 抬到 > 1.1 eV，按 Arrhenius 换算速率可抑制 10⁻¹⁰ 量级；代价是 V_oc 明显下降（1.02 → 0.77 V）与 Sn²⁺ 易氧化。对 solvent engineering：Sn 路线的机制不是"堵死空位"而是"空位附近势场畸变抬高 barrier"——提示 solvent/additive 也可能通过引入"局部结构畸变源"（轻度 B-site 掺杂剂 SnF₂、Cd²⁺、Zn²⁺，或大 A-site 添加剂 DMA⁺、GA⁺）达到类似效果而不用 50% Sn。

**限制**：实验 E_a > 1.1 eV 没直接测到，仅由"21–40 °C、1 mHz 内看不到 lf 弧"推断；HTL 变量与 absorber 变量纠缠；Pb-Sn V_oc 损失 250 mV 已压缩可用窗口；DFT Schottky cluster 取"最稳定"构型，实际膜里分布未知。

**对博士研究计划的直接启发**：测 E_a 用的是温度依赖阻抗谱（TD-IS）的 lf 弧 τ(T)，Arrhenius 出 E_a = 0.52 eV（Pb cell），与论文 3.1 的 transient capacitance 0.29 eV 差 ~0.2 eV——TD-IS 对应 "bulk + GB" 综合，transient capacitance 对应 "bulk only"。对 solvent engineering：**TD-IS 是比 transient capacitance 门槛更低的技术**（商业 PGSTAT + 温控台即可），可作为 solvent 变量扫描的 primary E_a readout，再用少量 samples 做 transient capacitance 交叉验证。

---

### 论文 3.5 · Kim 2022 · 原位 SEM 映射光致三维迁移路径

**核心主张**：在 SEM 里原位加激光 + 变 PE 能量 EDS + CL，把 MAPbI₃/FAPbI₃/hybrid 的光致离子迁移分解成"I⁻ 水平长程扩散（百微米级）+ Pb²⁺ 垂直向表面迁移 + Si/Sn 从衬底反向进入 perovskite 的交叉污染"，并在光斑外围观察到 20× 带边 CL 增强。

**量化锚点**：
- D(I⁻) = 3.5 × 10⁻¹⁰ cm² s⁻¹（FAPbI₃，SEM-EDS 拟合）；文献区间 10⁻¹² 至 10⁻⁹
- I⁻ 横向迁移尺度 ~10² μm（远超 50 μm 激光光斑直径）
- 激光条件：SEI/EDS 用 2.4 eV、5 MHz、2.5–6.7 mW、fluence 39.8–106.6 μJ cm⁻²、暴露 5–180 min；CL 用 495 nm fs 1.25 mW、80 μJ cm⁻²
- PE 能量 30 keV 探 bulk，5 keV 探 200 nm 近表面
- CL 带边（~800 nm）光斑外围 bright ring 内增强 20×，ring 内部带边 CL 完全 quench
- 激光加热估计 < 30 K（EDS）或 ~90 K（CL）；SEM 真空 1×10⁻⁶ torr

**方法 / 技术**：in-situ laser 装入 ThermoFisher Quanta 650 FEG SEM，同时做 SEI、EDS（30 keV 与 5 keV 双能量）、CL（ORNL CNMS，fs 495 nm + 抛物面镜）；NMF 分解 hyperspectral CL；Monte Carlo 模拟 PE 轨迹；I 扩散曲线按 Gaussian 热源 + Fick 扩散拟合 D(I⁻)。

**对方向3 抑制策略的启示**：针对 I⁻（水平长程）与 Pb²⁺（垂直，此前被假定不动）；揭示第三种通道：衬底 Sn/Si 反向扩散。对 solvent engineering：solvent 除了调 I⁻ 的水平活化能，还能通过"结晶方向 / 残留 DMSO adduct 密度"影响 Pb²⁺ 是否易纵向迁移——这是方向3 综述里很少强调的自由度。衡量抑制效果不只看 D(I⁻)，还要看 5 keV 与 30 keV EDS 的 Pb 差异（纵向梯度）。

**限制**：激光 fluence 大（百 μJ/cm²/pulse、5 MHz 等效 ~500 mW cm⁻² CW），已进入部分分解区，"迁移"部分被分解驱动；SEM 真空里 I₂ 蒸气逸出速率比空气/封装下高得多，D(I⁻) 可能偏大；CL bright ring 化学本质未明；未量化 Pb²⁺ 的 D 或 E_a。

**对博士研究计划的直接启发**：测 D(I⁻) 用"EDS I 缺失半径 vs 时间 + Fick 拟合"——第三类空间分辨路径。每个 solvent 条件可在 SEM 做 5 min / 20 min / 60 min 激光暴露，直接拿 D(I⁻) 空间值；若 solvent 能同时压 D(I⁻) 与 Pb 纵向梯度，就是独一无二的 "solvent 双向抑制" 证据。实际做 solvent scan 时应压到 < 40 μJ cm⁻² 用长暴露替代短高强；考虑特意加/不加 FTO 衬底（或换 TiO₂、SnO₂），看 Pb 纵向梯度与衬底反向扩散如何被 solvent 改变。

---

### 方向 3 五篇交叉对比

E_a 测定三条正交路径：

| 路径 | 时间窗 | 空间解耦 | 代表论文 | 典型 E_a 数值 |
|---|---|---|---|---|
| A · 瞬态电容 | ms–s | 整块器件平均 | Futscher | I⁻ 0.29 eV（bulk only）|
| B · 温度依赖阻抗谱 TD-IS | mHz–MHz | bulk + GB 综合 | Dey | I⁻ 0.52 eV（同体系）|
| C · SKPM / 原位 SEM | 分钟级 | nm–μm 空间分辨 | Pothoof/Akrami/Kim | 代理量 τ_relax / D(I⁻) |

同一 Pb 体系路径 A 给 0.29 eV 而路径 B 给 0.52 eV，差 0.2 eV 本身就是 bulk vs GB 贡献的体温。

**Solvent engineering 在这个 landscape 中的位置 · 空白区**：论文 3.2/3.3 做了表面钝化、论文 3.4 做了本体组分、论文 3.5 做了路径成像，没有一篇系统地把 solvent 配方作为连续变量去扫 E_a。论文 3.1 甚至自陈 MA⁺ 的 E_a 跨度 0.39–0.90 eV "depends strongly on fabrication"——这个"fabrication-dependent"恰好就是 solvent engineering 的空白牌。

**推荐的三路交叉方案**：把路径 A（器件级 bulk E_a）作为主指标、路径 B（阻抗 lf 弧）作为筛选工具、路径 C（SKPM 或原位 SEM）作为机制解耦确认，三路交叉才能撑起"solvent 到底改了 bulk 还是 interface，改了 halide 还是 A-site"的可证伪判据。

---

## 三方向耦合的博士研究计划骨架

> 三方向共享同一批样品与同一套升级后的表征平台，核心主线是"**低温 + 高压 + 变温 + 变光强的四维表征**"，同时为方向 1 (PDF + PL)、方向 2 (I_exc × T × P)、方向 3 (TD-IS × solvent) 产出数据。

### 顶层论点

方向 1 的 C_linear/C_nonlinear 强度决定方向 3 离子迁移 E_a 里的"声子辅助"分量；方向 2 的 I_exc,threshold 由方向 3 的 I⁻ 迁移活化能上限决定；方向 3 的 solvent engineering 反过来改变方向 2 的 V_D 与 τ。**所以三方向不是三个孤岛，而是通过 "halide 空位动力学 + 电-声耦合强度" 两个共享物理量耦合的三面体。**

### 三年分期（更新版）

| 阶段 | 主任务 | 方向 | 代表产出 |
|---|---|---|---|
| Y1 前半 | 低温光学 DAC + 变温 PL 平台搭建 + Ruth 模型本地化 + TD-IS 温控台 | 方法学 | 方法学论文 1 篇 |
| Y1 后半 | CsPbI3 单晶低温 DAC PL 2D Eg(T,P) 扫描 | 方向 1 | A vs B1 vs B2 解耦数据 |
| Y2 前半 | Solvent (DMF/DMSO/GBL/2-ME) × I_exc × T 三维扫描 I_threshold | 方向 2 | Solvent-I_threshold 相图 |
| Y2 后半 | 同批 solvent 样品 TD-IS 扫 E_a(I⁻)、transient capacitance 交叉验证 | 方向 3 | Solvent-E_a 相图 |
| Y3 前半 | 同位素替换 Eg(T) + THz 迁移率 γ 指数 | 方向 1 | C_linear vs C_nonlinear 解耦 |
| Y3 后半 | 三方向同样品集成：Eg(T,P) × I_threshold × E_a 协同 | 总结 | 总结性大论文 |

### 最要紧的 3 个设备改进钩子

低温光学 DAC + PL / 吸收系统同时解决方向 1 A vs B1 vs B2 分离（Houtput γ 预测、Mukhuti Urbach focus）和方向 2 压力-相分离阈值（Muscarella 主曲线）。市售 DAC 模组 + cryostat 合并改装，中等成本。

温度依赖阻抗谱（TD-IS）+ 温控台是方向 3 最低门槛技术（商业 PGSTAT + Peltier 20–60 °C），应作为 solvent 变量扫描的主 E_a readout；配合少量 transient capacitance 做 bulk-only 交叉验证。

原位 ToF-SIMS 或 APT 是方向 3 "机制级证据"的天花板设备——目前只有 Chang 2026 一篇用上，若能上即直接进头部证据行列。学校平台若无，可考虑合作。

### 每个方向的"solvent engineering 可证伪实验"模板（用户主诉求）

**方向 2 · Solvent → I_threshold**：挑 4 种 solvent 配方（DMF/DMSO、GBL、2-ME、含添加剂），测 ΔV/V₀ (XRD)、V_D (PL 线宽)、τ (TRPL)，代入 Ruth Eq. 20 预测 I_threshold，再 I_exc 扫描验证。落在 Muscarella 主曲线上 → solvent 是化学压力的推广；偏离 → 触发了独立轴（界面能/缺陷密度），即用户 PhD 独立贡献点。

**方向 3 · Solvent → E_a(I⁻)**：同批 solvent 条件做 p-i-n 器件（NiOₓ / perovskite / C60），TD-IS 21–60 °C 扫 E_a 得"solvent → E_a 散点"，筛出最优 2–3 个 solvent 上 transient capacitance（论文 3.1 协议）做 bulk-only 验证；若 bulk E_a 与 TD-IS E_a 差异收敛，说明 solvent 改的是 bulk；若差距拉大，说明 solvent 改的主要是 GB。

**方向 1 · Solvent 间接关联**：同批 solvent 样品测 Urbach focus（ZPR）与 THz 迁移率（γ），若 ZPR 与 γ 随 solvent 相关变化，说明 solvent 已经触及了电-声耦合强度——这是理论上可能但文献中无人验证的假设，一旦成立就是一级突破。

---

## Next steps

1. 把这份 `phd_phase4_literature_deep_read.md` 存到 memory index 还是只保留项目目录（建议两处都放一份链接）
2. 要不要基于"方向 2/3 的 solvent scan 可证伪实验模板"直接写一份具体的 beamtime/测试预约 draft（DAC 一段、TD-IS 一段、MPP 一段）
3. 方向 3 我只拿到 arXiv preprint 5 篇，He 2025 / Wang 2026 / Chang 2026 这些 Adv Mater/Nat Commun 代表作仍需学校 IP 才能下——要不要我现在试 Unpaywall 兜底一下
4. 方向 2 只有 3 篇完整精读，按用户要求"每方向 5 篇"还差 2 篇——要不要再并行搜 "solvent engineering + phase segregation" 和 "additive engineering + phase segregation" 两条近 3 年 arXiv preprint 补齐
