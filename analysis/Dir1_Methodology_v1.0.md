# 研究方向 1：WBG 钙钛矿带隙温度系数解耦与零温度系数工程
**版本**：v1.0 · 2026-04-25
**归属**：PhD 研究计划 → 方向 1 · 具体实验方法

---

## 研究定位

> 目前没有人在 WBG（≥1.65 eV）FA/Cs 体系上成功将带隙蓝移的三个驱动机制定量解耦，也没有人通过多通道同步测量验证热膨胀（TE）、电声耦合（EPI）、静态畸变弛豫（SD）各自的贡献占比，更没有人据此反向设计并实验实现低温度系数 WBG 钙钛矿太阳能电池。本方向填补这三个空白。

---

## 总体流程图

```mermaid
flowchart TD
    A([开始: 制备 WBG FA/Cs 组分矩阵\nS1–S6, EIP 制备]) --> B

    subgraph STEP1["Step 1 · 三分量解耦测量"]
        B[变温 XRD\n80–380 K] --> B1[提取 αV&#40;T&#41;\n体积热膨胀系数]
        C[变温 PL + Elliott 拟合\n激光功率 <1 mW/cm²] --> C1[提取 E₀&#40;T&#41; 总曲线\n扣除激子结合能]
        D[高压 PL\nDAC 0–0.6 GPa] --> D1[提取 dEg/dP\n压力系数]
        E[变温 Raman\nC-N 伸缩模线宽] --> E1[提取 Γ&#40;T&#41;\n阳离子无序度参量]
    end

    B1 & D1 --> F["计算 TE 贡献\n(∂Eg/∂T)_TE = αV·B₀·|dEg/dP|"]
    C1 & F --> G["残差 = EPI + SD 混合项\nE₀(T) − TE项"]
    G & E1 --> H["交叉关联 Γ(T) 与残差\n分离 EPI 和 SD"]

    subgraph STEP2["Step 2 · 建模"]
        H --> I[三分量唯象模型拟合\n提取 A_eff, ω_eff, β]
        I --> J[对 S1–S6 建立\n参数-组分映射]
        J --> K["绘制 dEg/dT = 0 等值线\n在 FA:MA:Cs 三元相图上"]
    end

    subgraph STEP3["Step 3 · 反向制备验证"]
        K --> L[选取 dEg/dT ≈ 0 候选组分 S_opt]
        L --> M[EIP 参数优化\n衬底温度 / 流量 / 退火窗口]
        M --> N[薄膜 VT-PL 验证\n确认 |dEg/dT| 最小]
        N --> O[完整 p-i-n 器件\nVoc/PCE 温度系数测试]
    end

    O --> P([交付: 零温度系数 WBG 器件\n+ 组分设计图谱])

    style STEP1 fill:#EBF5FB,stroke:#2E86C1
    style STEP2 fill:#E9F7EF,stroke:#1E8449
    style STEP3 fill:#FEF9E7,stroke:#B7950B
```

---

## Step 1：三分量解耦测量

### 核心公式

$$\frac{dE_g}{dT} = \underbrace{\alpha_V \cdot B_0 \cdot \left|\frac{dE_g}{dP}\right|}_{\text{热膨胀 (TE)}} + \underbrace{\sum_i \frac{A_i \cdot e^{\hbar\omega_i/kT}}{(e^{\hbar\omega_i/kT}-1)^2} \cdot \frac{\hbar\omega_i}{kT^2}}_{\text{电声耦合 (EPI)}} + \underbrace{\beta \cdot \frac{d\Gamma_{Raman}}{dT}}_{\text{静态畸变弛豫 (SD)}}$$

三项分别需要独立的实验通道来测量，互不依赖。

---

### 通道 A：热膨胀项（TE） — 变温 XRD

**测量目标**：αV(T)（体积热膨胀系数）、B₀（体弹模量）、dEg/dP（压力带隙系数）

| 实验 | 设备 | 参数范围 | 提取量 |
|---|---|---|---|
| 变温 XRD | 实验室 XRD + 低温台 + N₂/He 气氛保护 | 80–380 K，每 20 K 一步 | a(T) → V(T) → αV(T) |
| 高压 XRD（P-V 曲线） | DAC + 同步辐射 | 0–3 GPa，室温 | B₀（Birch-Murnaghan 拟合）|
| 高压 PL（DAC） | DAC + 532 nm 激光 + 光纤收集 | 0–0.6 GPa，室温 | dEg/dP |

**关键改造点**：
- XRD 样品台必须加 **He/N₂ 气氛密封罩**，防止变温过程中水汽导致钙钛矿分解
- DAC 使用 KBr 或 neon 作为传压介质（静水压范围更宽），红宝石荧光标定压力
- 建议测量速度：DAC 每个压力点 < 2 h（钙钛矿在高压下会缓慢相变）

**计算 TE 项**：
$$\left(\frac{\partial E_g}{\partial T}\right)_{\!TE} = \alpha_V(T) \cdot B_0 \cdot \left|\frac{dE_g}{dP}\right|_{300\text{K}}$$

---

### 通道 B：电声耦合项（EPI） — 变温高精度 PL

**测量目标**：E₀(T) 总曲线（扣除激子贡献后的真实带隙）

**设备配置**：
- He 闭循环冷台（Janis / Linkam / Cryomech），温度范围 **10–400 K**
- 激发激光：**532 nm 或 405 nm**，功率严格控制 **< 1 mW/cm²**
- 光栅谱仪：**1200 g/mm** 以上（分辨率 < 0.1 nm），配温控 CCD
- 每次测量前用 Ne/Ar 发射线校准峰位（消除探测器漂移）

**关键改造点 1：激光功率控制（最重要）**

WBG 样品在低温下光诱导相分离阈值极低（Hoke 2015：~0.1 J/cm²），高功率激光会在测量过程中诱发相分离，导致 PL 峰位持续红移——你测到的不是本征带隙。

改造方案：在光路中增加 **OD1–OD4 中性密度滤光片组 + 校准好的功率计**，确保样品面功率密度 < 1 mW/cm²。

**关键改造点 2：激子结合能修正**

PL 峰位 E_PL ≈ Eg − Eb（激子结合能），而 Eb 本身也随温度变化（低温 Eb 更大）。直接用 PL 峰位当带隙会引入 10–30 meV 的系统误差。

修正方案：同步测变温**透射吸收谱**，对每个温度做 **Elliott 公式拟合**：

$$\alpha(E) \propto \sum_n \frac{A/n^3}{(E - E_g + E_b/n^2)^2 + \Gamma^2} + \theta(E - E_g) \cdot \frac{B\sqrt{E-E_g}}{1 - e^{-2\pi\sqrt{E_b/(E-E_g)}}}$$

同时得到 Eg(T) 和 Eb(T)，这比单纯用 PL 峰位精确约 20 meV。

**EPI 拟合模型**（扣除 TE 后的残差）：

$$E_{EPI}(T) = E_{EPI}^0 - \sum_{i=1}^{2} \frac{A_i}{e^{\hbar\omega_i/kT} - 1}$$

- 单振子拟合收敛 → EPI 主要由一类声子驱动（低频软模，~5–10 meV）
- 需要双振子才能拟合 → 存在第二机制（很可能是 SD 项漏入）

---

### 通道 C：静态畸变弛豫项（SD） — 变温 Raman

**测量目标**：FA/MA 阳离子偶极子无序度随温度的变化

**物理原理**：FA⁺ 的 C=N 伸缩模（~1700 cm⁻¹）和 N-H 弯曲模（~3200 cm⁻¹）的**谱峰线宽 Γ(T)** 反映了阳离子取向无序程度。升温时 FA/MA 重取向加速 → Γ(T) 增大 → 静态预应变弛豫 → 带隙红移贡献增大。

| 实验 | 设备 | 关键参数 |
|---|---|---|
| 变温 Raman | 共焦拉曼 + 同一低温台 | 激发 785 nm（减少荧光背景），80–380 K |
| 可选：变温 ¹H NMR | 固态 NMR | 直接测 FA/MA 重取向速率，更定量 |

**数据处理**：
1. 提取 C=N 峰（~1700 cm⁻¹）的半高宽 Γ(T) 随温度变化曲线
2. 与 Step 1 通道 B 中扣除 EPI 后的残差做 **线性回归**：残差 ≈ β × Γ(T)
3. β 即为"阳离子无序度-带隙"耦合系数，单位 meV / cm⁻¹
4. 若 R² > 0.85，说明 SD 项用 Raman 线宽可以很好参数化

**补充说明**：全无机 CsPbI₂Br（S1）作为无 A 位偶极的参照——若 S1 的残差远小于含 FA/MA 样品，就直接证明 SD 项来源于有机阳离子。

---

## Step 2：三分量模型建立

### 层次 1：唯象三分量模型（Year 1–2）

将所有实验数据代入统一方程拟合：

$$E_g(T, \mathbf{x}) = E_g^0(\mathbf{x}) - \alpha_V(\mathbf{x}) B_0 \left|\frac{dE_g}{dP}\right| T - \sum_i \frac{A_i(\mathbf{x})}{e^{\hbar\omega_i/kT}-1} + \beta(\mathbf{x}) \cdot \Gamma_{Raman}(T, \mathbf{x})$$

其中 **x** = (x_FA, x_MA, x_Cs) 为 A 位组分向量。

对 6 个样品（S1–S6）分别拟合，得到参数集：
$$\{E_g^0,\ \alpha_V,\ A_1,\ \omega_1,\ \beta\}(\mathbf{x})$$

### 层次 2：组分-参数映射图（Year 2 核心输出）

| 步骤 | 操作 | 输出 |
|---|---|---|
| 1 | 将 6 组参数在 FA:MA:Cs 三元坐标系中标点 | 参数随组分的散点图 |
| 2 | 用 Gaussian Process Regression 或多项式插值 | 连续的参数等高线图 |
| 3 | 计算 dEg/dT = TE + EPI + SD 的代数和 | **dEg/dT 等高线图** |
| 4 | 标记 dEg/dT = 0 的等值线 | **零温度系数组分候选区** |

这张图是**方向 1 最核心的原创贡献**，目前文献中完全空白。

### 层次 3：DFT + Allen-Heine-Cardona（可选，理论合作）

- 工具链：Quantum ESPRESSO + **EPW code**（电声耦合矩阵元计算）
- 计算 Eliashberg 函数 g²F(ω)，验证实验拟合的 ω₁ 是否对应真实声子模式
- 需要 SOC + 非谐修正（SSCHA），建议寻找理论组合作而非自行计算
- 此层次为加分项，不是必须项

---

## Step 3：反向制备验证

### 选组分

从 Step 2 等值线图中选取满足以下三条的候选组分 S_opt：
1. **dEg/dT < 0.05 meV/K**（目标，对比 MAPbI₃ 的 0.26 meV/K）
2. **Eg ∈ 1.68–1.80 eV**（叠层顶电池窗口）
3. **Br/(Br+I) < 0.40**（控制相分离风险，Hoke 2015 阈值）

### EIP 制备参数优化

SD 贡献的大小由**结晶时冻结的静态预应变量**决定，EIP 的以下参数直接控制这件事：

| EIP 参数 | 对 SD 的影响 | 调节策略 |
|---|---|---|
| 衬底温度（60–120 °C） | 高温 → 快速结晶 → 更多预应变冻结 → SD 更大 | 扫描衬底温度，用 Raman 实时确认 Γ₀ |
| 退火温度（80–150 °C）| 低温退火 → 保留更多 FA/MA 无序 → SD 更大 | 找让 |dEg/dT| 最小的退火温度窗口 |
| 液滴大小（电压 4–8 kV）| 小液滴 → 均匀成核 → SD 空间均匀分布 | 目标：Raman mapping 均匀性 < 10% |

### 验证实验序列

```
Step 3a: 薄膜级验证
→ 对 S_opt 在 3 种退火温度下制备薄膜
→ 每种跑完整 VT-PL（25–100 °C，模拟器件工作温度范围）
→ 确认哪种工艺 |dEg/dT| 最小

Step 3b: 器件级验证
→ 制备完整 p-i-n 器件（NiOx/Me-4PACz/S_opt/C60/SnO₂/Ag）
→ 测 Voc(T)、Jsc(T)、PCE(T)（25–65 °C）
→ 目标：PCE 温度系数 < −0.1 rel%/°C（优于行业平均 −0.3 rel%/°C）

Step 3c: 叠层应用验证（Year 3）
→ S_opt 作为顶电池，配窄带隙钙钛矿或硅底电池
→ 测叠层在 1 sun / 25–65 °C 下的能量产额稳定性
```

---

## 实验资源汇总

| 步骤 | 必须设备 | 可借用/可选 | 主要瓶颈 |
|---|---|---|---|
| TE（变温 XRD）| XRD + 变温台 + 气氛保护 | 同步辐射（精度×5）| 低温相变干扰峰位拟合 |
| TE（DAC PL）| DAC + 激光 + 光纤 PL | — | 钙钛矿高压下降解速度 |
| EPI（变温 PL）| He 冷台 + 高分辨谱仪 + 功率控制 | 变温吸收台（Elliott 修正）| 激光功率必须 < 1 mW/cm² |
| SD（变温 Raman）| 共焦拉曼 + 低温台 | 固态 NMR（更直接）| EPI 与 SD 信号的数学分离 |
| 建模 | Python（scipy/GPR）| ABINIT/EPW（理论合作）| 三分量是否可唯一分离 |
| 制备验证 | EIP 系统 + 退火炉 + 器件制备线 | — | 退火窗口需 Raman 实时监控 |

---

## 预期论文输出

| 论文 | 目标期刊 | 核心内容 | 时间节点 |
|---|---|---|---|
| Paper 1 | *J. Phys. Chem. Lett.* 或 *Nat. Commun.* | WBG 体系 TE/EPI/SD 三分量解耦 + 组分-参数映射图 | Year 2（Month 18–20）|
| Paper 2 | *Advanced Materials* 或 *Joule* | 零温度系数 WBG 器件实验实现 + EIP 工艺贡献 | Year 3（Month 28–32）|

---

## 关键量化目标（教授面谈备用）

| 指标 | 当前 field 基准 | 本研究目标 |
|---|---|---|
| MAPbI₃ dEg/dT | +0.26 meV/K（Francisco-López 2019）| 作为复验锚点 |
| WBG FA/Cs 的 TE:EPI:SD 分配比 | **未知（本研究首次）** | 定量测量 |
| 目标 dEg/dT | 0.26 meV/K（MAPbI₃ 参考）| **< 0.05 meV/K** |
| WBG 器件 PCE 温度系数 | −0.3 rel%/°C（行业平均）| **< −0.1 rel%/°C** |

---

*文档版本：v1.0 · 生成时间：2026-04-25*
*关联文档：`PhD_Research_Plan_v2.0.md` · `analysis/dir1_franciscolopez2019.md`*
