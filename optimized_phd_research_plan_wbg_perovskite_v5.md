# PhD 三年研究计划 v5

## State-Locked Physics-Informed Correlative Inference for Photoinduced Phase Segregation in Wide-Bandgap Mixed-Halide Perovskites

### 面向宽带隙混卤钙钛矿光致相分离的状态锁定-物理约束-多模态关联推断方法

---

## 0. 核心创新

本计划的核心创新不再是“把 PL、KPFM、TOF-SIMS、XPS、GIWAXS/Raman 都做一遍”，而是提出一种新的机制解耦方法：

> **State-Locked Physics-Informed Correlative Inference, SL-PCI**  
> 先用 operando PL/KPFM 在同一区域写入并追踪 LHS 动态状态，再用低温/快速终止策略锁定该状态，随后用 TOF-SIMS/XPS/GIWAXS/Raman 读取终点化学和结构信息，最后通过物理约束的多模态隐变量模型把不同表征结果映射到同一组状态变量中。

该方法要解决的问题是：不同表征方法测到的不是同一个物理量，也不是同一个时间点。SL-PCI 不假设它们天然可联立，而是用三个设计把它们变成可联立证据：

1. **state locking**：把动态 LHS 过程停在定义明确的状态；
2. **correlative coordinate system**：用同一区域或同类 ROI 进行空间关联；
3. **physics-informed latent model**：用半导体物理、离子迁移、复合和组成-带隙关系约束数据融合。

---

## 1. 物理基础

SL-PCI 的基础不是黑箱机器学习，而是几个明确的物理关系：

### 1.1 离子迁移可被温度锁定

卤素迁移满足近似 Arrhenius 行为：

\[
D_X(T)=D_0\exp\left(-\frac{E_a}{k_BT}\right)
\]

本地文献库中 MAPbI3 与 mixed-halide perovskite 的 halide migration activation energy 常在约 0.3 eV 量级或更高。降低温度会显著降低卤素扩散系数，因此可以用快速冷却或低温转移把光照诱导的亚稳态“冻结”为终点表征对象。

### 1.2 PL 是光电表型，不是组成的直接测量

\[
E_{\mathrm{PL}}(r,t)
\approx
E_g[x_{\mathrm{Br}}(r,t),\varepsilon(r,t),T]
-\Delta E_{\mathrm{funnel}}(r,t)
-\Delta E_{\mathrm{trap}}(r,t)
\]

PL red-shift 可能来自 I-rich phase、carrier funneling、trap emission、reabsorption 或局域应变。因此 PL 必须和化学/结构信息联立，不能单独等同为 Br/I 重排。

### 1.3 KPFM 是 CPD 观测，不是局域电场本身

\[
\mathrm{CPD}
=
\frac{\Phi_{\mathrm{tip}}-\Phi_{\mathrm{sample}}}{e}
\]

在钙钛矿中，CPD 混合 work function、surface dipole、band bending、trap charging、surface photovoltage 和 ionic redistribution。KPFM 的创新用途不是“直接证明电场”，而是在模型中作为 electrostatic latent state 的一个带噪声观测。

### 1.4 TOF-SIMS/XPS 是破坏性终点化学观测

TOF-SIMS 和 XPS 读取的是终点状态：

\[
y_{\mathrm{SIMS}}
=
H_{\mathrm{SIMS}}[x_{\mathrm{Br}},x_{\mathrm{I}},C_{\mathrm{deg}}]
+A_{\mathrm{sputter}}
+\eta
\]

其中 \(H_{\mathrm{SIMS}}\) 是深度/横向响应函数，\(A_{\mathrm{sputter}}\) 是 preferential sputtering、ion mixing、vacuum exposure 和束流损伤带来的 artifact。SL-PCI 的关键是把这些 artifact 显式建模，而不是假装不存在。

---

## 2. 中心假设

宽带隙混卤钙钛矿的光致相分离由五个隐状态共同决定：

1. \(x_{\mathrm{Br/I}}(r,z,t)\)：局域卤素组成；
2. \(N_{\mathrm{defect}}(r,t)\)：表面/晶界缺陷态密度；
3. \(\phi(r,t)\)：局域电势/离子电荷重排；
4. \(\varepsilon(r,t)\)：应变和结构无序；
5. \(C_{\mathrm{deg}}(r,t)\)：不可逆化学降解程度。

Br-rich surface 本身既不必然促进也不必然抑制相分离。它的作用取决于它如何同时改变 \(N_{\mathrm{defect}}\)、\(\phi\)、\(\varepsilon\) 和 \(x_{\mathrm{Br/I}}\) 的边界条件。

---

## 3. 方法学创新：SL-PCI 工作流

### 3.1 State-writing: 用光剂量写入 LHS 状态

在带 fiducial markers 的样品上选择固定 ROI，使用可控光强、温度和气氛写入不同状态：

- S0: pristine；
- S1: pre-onset，PL 尚未明显红移；
- S2: onset，PL red-shift 刚出现；
- S3: saturated，red-shift 达到平台；
- S4: recovery，暗恢复后；
- S5: irreversible，残余红移或吸收边永久变化。

每个状态记录完整 history：

\[
\mathcal{H}
=
\{I_{\mathrm{light}},t,T,\mathrm{atmosphere},\mathrm{delay},\mathrm{probe\ dose}\}
\]

### 3.2 State-locking: 把动态状态变成可终点读取的状态

优先路线：

- 在 N2 或真空兼容低温 stage 上进行光照；
- 到达目标 PL 状态后立即降温到低温；
- 保持 dark / inert / low-temperature transfer；
- 进入 TOF-SIMS 或 XPS 进行 endpoint chemical mapping。

备选路线：

- 如果没有 cryo-transfer，则采用 twin-sample dose array；
- 每个 twin sample 接受相同光剂量、温度和气氛；
- 在目标时间点直接进入终点表征；
- 用 delay control 建立状态漂移上限。

核心不是声称“完全冻结”，而是量化：

\[
\Delta_{\mathrm{drift}}
<
\Delta_{\mathrm{mechanism}}
\]

即转移/等待造成的状态漂移必须小于机制效应。

### 3.3 Correlative coordinate system: 建立同区或同类 ROI 坐标

采用微米尺度 fiducial grid：

- Au/Cr marker 或耐溶剂 marker；
- PL/KPFM/AFM 共用坐标；
- TOF-SIMS 后用 topography / marker 重配准；
- GIWAXS/Raman 使用 ROI-average 而非强行 pixel-to-pixel。

所有数据统一到 ROI 级别：

- grain center；
- grain boundary；
- PL hotspot；
- PL non-hotspot；
- high-CPD fluctuation region；
- low-CPD fluctuation region；
- Br-rich surface region；
- passivated region。

### 3.4 Physics-informed latent inference: 多模态隐变量解耦

建立一个轻量 Bayesian / variational inference 模型，而不是黑箱深度学习。

隐变量：

\[
Z
=
\{x_{\mathrm{Br/I}},N_{\mathrm{defect}},\phi,\varepsilon,C_{\mathrm{deg}}\}
\]

观测：

- PL peak / linewidth / recovery；
- TRPL lifetime；
- PLQY；
- KPFM CPD / SPV / dark relaxation；
- GIWAXS peak shift / broadening；
- Raman low-frequency mode / linewidth；
- TOF-SIMS Br/I map；
- XPS I0 / Pb0 / PbI2；
- UV-vis absorption edge。

模型形式：

\[
y_m
=
H_m(Z;\theta_m)
+A_m
+\eta_m
\]

其中 \(H_m\) 是每个表征方法的物理 forward model，\(A_m\) 是该方法的 artifact channel，\(\eta_m\) 是噪声。

模型输出不是一个“唯一真相”，而是每个机制贡献的 posterior probability：

\[
P(\mathrm{defect\ dominated}|\mathbf{y}),
P(\mathrm{electrostatic\ dominated}|\mathbf{y}),
P(\mathrm{strain\ dominated}|\mathbf{y}),
P(\mathrm{chemical\ degradation}|\mathbf{y})
\]

### 3.5 Forward model matrix \(H_m(Z;\theta_m)\) 的显式形式

为了让 § 3.4 的隐变量推断**可复现**而不停留在概念层，每个 \(H_m\) 必须有公开的物理表达式。本节给出 Tier 1 主线表征的 forward model 全集，作为 Bayesian inference 的似然函数构造依据。

| 表征 \(m\) | 观测 \(y_m\) | Forward model \(H_m(Z;\theta_m)\) | 直接敏感的 \(Z\) 分量 | Artifact channel \(A_m\) |
|---|---|---|---|---|
| Hyperspectral PL | \(I_{\mathrm{PL}}(E,r,t)\) | \(I_{\mathrm{PL}}(E)=\sum_p w_p(l_{\mathrm{diff}},\Delta E_g)\,\eta_p(N_{\mathrm{defect}})\,L_p(E_g^p,\sigma_p)\,R(\alpha,d)\)，其中 \(w_p\propto V_D^{-1}\exp(-\Delta E_g^p/k_BT)\) 是 Ruth 2023 funneling 权重 | \(\phi(\text{phase fraction}), x_{\mathrm{Br/I}}, N_{\mathrm{defect}}, \varepsilon\) | reabsorption 长度、激发面斑、laser-induced micro-heating |
| PLQY | \(\eta_{\mathrm{PLQY}}\) | \(\eta^{-1}-1=\dfrac{1}{k_{\mathrm{rad}}\tau_{\mathrm{SRH}}^{\mathrm{bulk}}(N_{\mathrm{defect}}^{\mathrm{bulk}})}+\dfrac{S_{\mathrm{surf}}(N_{\mathrm{defect}}^{\mathrm{surf}})}{k_{\mathrm{rad}}\,d}\) | \(N_{\mathrm{defect}}^{\mathrm{bulk}}, N_{\mathrm{defect}}^{\mathrm{surf}}\) | photon recycling、escape cone |
| TRPL | \(I(t)\) 多指数 | \(\tau_{\mathrm{eff}}^{-1}=\tau_{\mathrm{SRH}}^{-1}(N_{\mathrm{defect}})+\tau_{\mathrm{rad}}^{-1}(n)+\tau_{\mathrm{surf}}^{-1}(S,d)\) | \(N_{\mathrm{defect}}, S_{\mathrm{surf}}\) | injection-level 依赖、laser-induced detrapping |
| KPFM / fast-KPFM | \(V_{\mathrm{CPD}}(r,t;I,f)\) | \(V_{\mathrm{CPD}}=W_0(x_{\mathrm{Br}}^{\mathrm{surf}})-V_{\mathrm{bb}}(N_{\mathrm{defect}},N_d)-V_{\mathrm{SPV}}(I,N_{\mathrm{defect}})-V_{\mathrm{ion}}(t,\mu_X)-V_{\mathrm{trap}}(r,t)\)，分量按时间常数分解（SPV ms、trap s、ion min） | \(x_{\mathrm{Br}}^{\mathrm{surf}}, N_{\mathrm{defect}}, \phi\) | tip work function 漂移、tip-sample capacitance |
| AR-XPS | \(I_{\mathrm{Br/I}}(\theta)\) | \(\dfrac{I_{\mathrm{Br}}(\theta)}{I_{\mathrm{I}}(\theta)}=\dfrac{\int_0^\infty c_{\mathrm{Br}}(z)\,e^{-z/\lambda\cos\theta}\,dz}{\int_0^\infty c_{\mathrm{I}}(z)\,e^{-z/\lambda\cos\theta}\,dz}\) | \(x_{\mathrm{Br/I}}(z), C_{\mathrm{deg}}\)（I0/Pb0/PbI2） | X-ray dose induced halide migration、UHV exposure |
| TOF-SIMS | \(Y_{\mathrm{Br/I}}(z)\) | \(Y_{\mathrm{Br}}/Y_{\mathrm{I}}=M_{\mathrm{matrix}}\,c_{\mathrm{Br}}(z)/c_{\mathrm{I}}(z)\)，matrix factor 由 reference standard 校准 | \(x_{\mathrm{Br/I}}(z)\) | preferential sputtering、ion mixing、knock-on |
| GIWAXS | \(I(q)\) peak position + FWHM | Vegard: \(q_{hkl}(x_{\mathrm{Br}})=q_0[1-x_{\mathrm{Br}}\Delta a/a]\); 宽化 \(\Delta q\approx\varepsilon\tan\theta+K\lambda/L\) | \(x_{\mathrm{Br}}^{\mathrm{bulk}}, \phi, \varepsilon, L_{\mathrm{crystallite}}\) | strain vs crystallite size 简并、preferred orientation |
| Raman | peak shift + linewidth | \(\omega(\varepsilon)=\omega_0+2\gamma\varepsilon\)，\(\mathrm{FWHM}\sim\tau_{\mathrm{ph}}^{-1}(\text{disorder})\) | \(\varepsilon, x_{\mathrm{Br}}\), disorder | T anharmonicity、laser heating |
| UV-vis | \(\alpha(E)\) | \(\alpha=\sum_p \phi_p\alpha_p(E_g^p,\sigma_p)+\alpha_{\mathrm{Urbach}}(E_U)\) | \(\phi, x_{\mathrm{Br/I}}, \sigma\) | scattering、interference |
| Gas trapping / RGA | \(P_{\mathrm{I_2}}(t)\) | \(\dot{N}_{\mathrm{I_2}}=R_{\mathrm{loss}}(c_{\mathrm{I}},T,h\nu)\,V_{\mathrm{film}}\) | \(C_{\mathrm{deg}}\) | 漏气率、wall adsorption |

> **关键观察**：第三列暴露的是每个仪器**同时**敏感于多个隐分量；第四列是 v5 § 3.4 提到的 \(A_m\) 通道的具体来源。任何单一仪器在 \(Z\) 上的反演都是 ill-posed 的——必须依赖联合似然。

### 3.6 可识别性分析：实验设计矩阵的 SVD

在执行任何实验前，把全部 \(H_m\) 在先验中心 \(Z_0\) 处线性化：

\[
J_{mj}=\left.\frac{\partial H_m}{\partial Z_j}\right|_{Z_0}
\]

得到设计矩阵 \(J\in\mathbb{R}^{(\sum_m\dim y_m)\times \dim Z}\)。对 \(J=U\Sigma V^T\) 做 SVD，按以下四项做实验组合的可识别性预算：

1. **奇异值谱 \(\sigma_k\)**：大 = well-constrained，小 = ill-conditioned，0 = 不可识别；
2. **条件数 \(\kappa=\sigma_1/\sigma_{\dim Z}\)**：\(\kappa>10^3\) 表示存在严重共线，组合不够解；
3. **右奇异向量 \(V\) 对应的小 \(\sigma\) 列**：直接给出**当前实验组合解不出的 \(Z\) 方向**（例如可能解出 \(\phi+0.7N_{\mathrm{defect}}\)，但不能分开 \(\phi\) 和 \(N_{\mathrm{defect}}\)）；
4. **追加实验的边际价值**：把候选新实验对应的行 \(J_{\mathrm{new}}\) 加入 \(J\)，看 \(\sigma_{\min}\) 提升多少——这是"加做哪个实验最值"的定量评估，也是 § 9 高风险技术 (cryo-CL/NV-AFM) 上不上的硬判据。

可识别性分析在 Aim 1 的 M0 阶段（见 § 7 Year 1）用合成数据预跑，输出每个 Aim 的可识别性预算（在 § 6 各 Aim 末尾给出）。

---

## 4. 可证伪判据

### H1: Br-rich surface 条件性稳定化

支持 H1 的证据：

- Br-rich region 中 \(N_{\mathrm{defect}}\) 下降：PLQY 升高、TRPL 延长；
- \(\phi\) 波动降低：CPD fluctuation 和 dark relaxation 减弱；
- \(\varepsilon\) 降低：GIWAXS/Raman linewidth 或 microstrain 降低；
- LHS 减弱：PL red-shift onset 延迟、recovery 更完全；
- TOF-SIMS/XPS 不显示不可逆 degradation marker。

反证 H1 的证据：

- Br-rich 但 PLQY/TRPL/KPFM/GIWAXS 不改善；
- Br-rich 只在 aging 后出现；
- Br-rich 和 LHS hotspot 正相关；
- non-Br-rich passivation 同样抑制 LHS。

### H2: 电势异常是 LHS 前驱之一

支持 H2 的证据：

- CPD anomaly 在 S1/S2 阶段先于 PL hotspot；
- state-locked TOF-SIMS 在同 ROI 显示后续 Br/I redistribution；
- low-fluence baseline 与 high-fluence LHS state 之间存在 excess CPD；
- 模型中 \(\phi\) 通道对 PL/TOF-SIMS 的 cross-modal prediction 有显著贡献。

反证 H2 的证据：

- CPD 变化存在但没有 PL red-shift；
- PL hotspot 与 strain/disorder 更相关；
- TOF-SIMS endpoint composition 与 CPD 不相关；
- 去除缺陷后 CPD anomaly 消失但 Br/I redistribution 仍发生。

### H3: 可逆 LHS 与不可逆降解边界

可逆：

- PL red-shift 可恢复；
- TOF-SIMS 显示 Br/I redistribution 但无 iodine inventory loss；
- XPS 无 I0/Pb0/PbI2 增强；
- sealed/open 差异不显著。

不可逆：

- residual PL/UV-vis shift；
- iodine loss 或 Br/I profile 永久改变；
- XPS 出现 I0/Pb0/PbI2；
- sealed/open 或 gas trapping 显示挥发损失参与。

### 4.4 文献矛盾点与 SL-PCI 消解对照

下表是基于 75 篇本地文献 RAG 调研提炼的 8 个核心矛盾，以及 SL-PCI 对应的消解机制。该表是 v5 与 v4 之间"为什么需要联合反演而不是真值表判读"的最直接论证。

| 编号 | 矛盾点 | 关键文献 | SL-PCI 消解 |
|---|---|---|---|
| C1 | PL 红移 ≠ I-rich 相分数（funneling 主导）：minority I-rich domain 在小体积分数下即可主导 PL | Hoke 2015；Ruth 2023 (\(\Delta F_{\mathrm{light}}\)) | \(H_{\mathrm{PL}}\) 显式包含 funneling 权重 \(w_p(l_{\mathrm{diff}},\Delta E_g)\)，并由 TRPL/PLQY 同时约束 \(N_{\mathrm{defect}}\) 与 \(l_{\mathrm{diff}}\) |
| C2 | KPFM CPD 是 \(W_0+V_{\mathrm{bb}}+V_{\mathrm{SPV}}+V_{\mathrm{ion}}+V_{\mathrm{trap}}\) 多分量卷积 | Qu 2026；Garrett fast-KPFM | \(H_{\mathrm{KPFM}}\) 写成时间-频率-光强三维谱分解；用 UPS 静态 \(W_0\) 锚定，剩余 4 分量通过特征时间常数分离 |
| C3 | "可逆性"在 PL / XRD / UV-vis 上定义不一致，恢复时间常数可差 10× | Hoke 2015；Feng 2023；Ma 2024 | state-locking 用 PL 状态 S0-S5 + 同区 XRD/UV-vis 联合判定；H3 判据要求所有通道在同一 ROI 一致恢复 |
| C4 | XPS / TOF-SIMS 本身可能驱动 halide 重排（\(A_m\)） | Tian 2022；Fang 2024 vs Navid 2026 矛盾的源头 | artifact channel \(A_m\) 显式建模，外加 X-ray/sputter 剂量序列外推到零剂量 |
| C5 | GIWAXS / Raman 同时被 strain / disorder / crystallite size 拓宽 | Hoke 2015 Williamson-Hall；Bertolotti 2017 | \(H_{\mathrm{GIWAXS}}\) 在似然中分开 \(\varepsilon\) 与 \(L_{\mathrm{crystallite}}\)；用 Raman linewidth 独立约束 disorder |
| C6 | 表征工具时间窗跨 12 个数量级，无统一时间戳即无可联立 | Qu 2026 pp-KPFM (ps)；Ma 2024 dark seg (min)；XPS (静态) | state-locked endpoint + history record \(\mathcal{H}\) 把所有观测打到同一状态指针 S\(k\) |
| C7 | "Same area, same time" 在跨平台几乎从未真正实现 | Pothoof 2023 mask alignment（最接近） | fiducial grid + ROI 级聚合，不强求 pixel-to-pixel；不可避免的失配进入 \(\eta_m\) |
| C8 | 化学势 \(\mu_X\) 与 \(R_{\mathrm{loss}}\) 几乎无直接测量 | Hu 2026 in situ XPS（少数）；多数工作只用 PL 残差 | gas trapping/RGA 直接提供 \(P_{\mathrm{I_2}}(t)\) 观测，与 XPS I0/Pb0/PbI2 联合反演 \(C_{\mathrm{deg}}\) |

---

## 5. 样品设计

### 5.1 主样品

两个 WBG 组分：

- moderate-WBG: Eg = 1.66-1.70 eV；
- high-Br stress case: Eg = 1.73-1.78 eV。

三个处理态：

- pristine；
- Br-rich / halide-modified surface；
- defect-passivated but not intentionally Br-rich。

### 5.2 关键对照

- PL-probe-only control；
- dark transfer control；
- low-temperature locked vs room-temperature transfer；
- delay series；
- SIMS dose/sputter series；
- sealed vs open aging；
- twin-sample dose array。

---

## 6. Aims

### Aim 1: 建立 state-writing / state-locking protocol

目标：用 PL 动态定义 S0-S5 状态，并证明 state locking 后的 drift 小于主效应。

输出：

- LHS state diagram；
- lock fidelity metric；
- transfer/drift upper bound；
- Manuscript figure: state-writing and state-locking workflow。

**可识别性预算**：仅 PL + UV-vis + 静态 KPFM 的实验组合。预计在 \(Z\) 中 well-constrained 的是 \(\{x_{\mathrm{Br}}^{\mathrm{bulk}}, \phi(\text{coarse})\}\)；ill-conditioned 的是 \(\{N_{\mathrm{defect}}^{\mathrm{bulk}}\ \text{vs}\ N_{\mathrm{defect}}^{\mathrm{surf}}\}\)（PLQY 只给加和，必须靠 Aim 2 的 TRPL 厚度梯度补齐）；不可识别的是 \(C_{\mathrm{deg}}\)（留 Aim 3 用 XPS + gas trapping 补齐）。

### Aim 2: 建立 PL-KPFM-TOF-SIMS 的同区关联推断

目标：验证 PL hotspot、CPD anomaly 和 endpoint Br/I redistribution 是否来自同一隐状态。

输出：

- ROI-registered multimodal maps；
- excess CPD vs PL onset vs Br/I endpoint relation；
- leave-one-modality-out prediction：只用 PL/KPFM 预测 SIMS hotspot，再用 SIMS 验证。

**可识别性预算**：加入 fast-KPFM (时间-频率-光强 3D 谱) + TOF-SIMS 后，KPFM 5 分量解耦完成 \(\Rightarrow\) \(\phi\) 和 \(N_{\mathrm{defect}}^{\mathrm{surf}}\) 同时 well-constrained；\(x_{\mathrm{Br/I}}(z)\) 由 AR-XPS + TOF-SIMS 双路覆盖。剩余 ill-conditioned 方向仅 \(\{\varepsilon, L_{\mathrm{crystallite}}\}\)（留 Aim 3 用 GIWAXS+Raman 分开）。预期 \(\kappa<10^2\)。

### Aim 3: 加入结构与降解通道，完成机制解耦

目标：把 strain/disorder 和 irreversible chemistry 纳入模型，避免把所有 PL red-shift 都归因于卤素重排。

输出：

- GIWAXS/Raman strain/disorder map；
- XPS/SIMS degradation marker；
- posterior mechanism map；
- reversible/irreversible boundary。

**可识别性预算**：补齐 GIWAXS (区分 \(\varepsilon\) vs \(L\)) + Raman linewidth (区分 \(\varepsilon\) vs disorder) + gas trapping/RGA (直接观测 \(P_{\mathrm{I_2}}\))。预期所有 5 维 \(Z\) 均 well-constrained，\(\kappa\) 进一步降低到 \(\sim10\)。此时 § 4 的 H1/H2/H3 三个假设的统计形式化（见 § 11）才有意义。

### Aim 4: 方法推广与防守性验证

目标：证明 SL-PCI 不是针对单一样品的经验拼图，而是可用于不同 WBG 组分和处理态的机制诊断方法。

输出：

- mechanism regime diagram；
- validated uncertainty model；
- optional cryo-CL / cryo-EDS / Brillouin validation。

**可识别性预算**：高风险技术 (cryo-CL, NV-AFM) 仅在 § 3.6 SVD 边际价值 \(\Delta\sigma_{\min}\) 显著时启动；若 Aim 3 的 \(Z\) 已经全部 well-constrained，则高风险技术仅用作交叉验证而非必需。

---

## 7. 三年计划

### Year 1: 方法平台与锁态验证

| 月份 | 任务 | 产出 |
|---|---|---|
| M0 (并行 M1-M2) | **合成数据反演 pipeline 预跑**：在已知"地面真值" \(Z^*\) 上前向到 \(\{y_m\}\)，加 realistic 噪声，跑 Bayesian inference 看能否回到 \(Z^*\)；同时跑 SVD 检查 Aim 1-4 各组合的 \(\kappa\) 与 ill-conditioned 方向。**全部纯计算工作**，是博士最便宜的方法学硬资产，无任何样品风险 | end-to-end reproducible pipeline + 可识别性预算确认 |
| M1-M3 | 制备 fiducial-grid WBG films，建立 baseline PL/UV-vis/XRD | reproducible sample platform |
| M4-M6 | 建立 PL state-writing protocol | S0-S5 state definition |
| M7-M9 | 低温/快速终止与 delay controls | lock fidelity metric |
| M10-M12 | 初版 Bayesian latent model 接入真实数据 | Aim 1 dataset + methods draft |

### Year 2: PL-KPFM-TOF-SIMS 核心联立

| 月份 | 任务 | 产出 |
|---|---|---|
| M13-M15 | 同区 PL-KPFM 动态测量 | CPD/PL state maps |
| M16-M18 | state-locked TOF-SIMS | endpoint Br/I maps |
| M19-M21 | artifact-channel calibration | sputter/transfer/delay uncertainty |
| M22-M24 | cross-modal inference and validation | Manuscript 1 |

### Year 3: 结构/化学降解解耦与推广

| 月份 | 任务 | 产出 |
|---|---|---|
| M25-M27 | GIWAXS/Raman + XPS 加入模型 | strain/degradation channels |
| M28-M30 | high-Br stress case + passivation matrix | mechanism regime diagram |
| M31-M33 | optional cryo-CL/EDS/Brillouin validation | supplementary validation |
| M34-M36 | 论文整合与答辩 | Manuscript 2 + thesis |

---

## 8. 预期论文

### Paper 1

**State-locked correlative PL-KPFM-TOF-SIMS inference of photoinduced halide segregation in wide-bandgap perovskites**

核心贡献：提出并验证 state-locked multimodal correlative protocol。

### Paper 2

**Physics-informed disentanglement of surface composition, electrostatics, strain and chemical degradation in mixed-halide perovskite phase segregation**

核心贡献：用物理约束隐变量模型给出机制贡献和不确定度。

### Optional methods paper

**Artifact-aware multimodal inference for beam- and vacuum-sensitive halide perovskites**

核心贡献：TOF-SIMS/XPS/CL/EDS 等终点或束流表征的 artifact channel 建模。

---

## 9. 为什么这个计划更能经受抨击

| 质疑 | 回答 |
|---|---|
| PL 和 SIMS 不是同一时间测的 | 用 state locking 和 drift upper bound 证明状态在转移中变化小于主效应 |
| TOF-SIMS 是破坏性测量 | 将 TOF-SIMS 只定义为 endpoint chemical observer，并建模 sputter artifact |
| KPFM 不能证明电场 | KPFM 只作为 CPD observer，电势是 latent variable |
| 多模态只是拼图 | 用 forward model 和 posterior inference 统一解释，而不是人工并列 |
| 机器学习是黑箱 | 使用物理约束的轻量 Bayesian / variational model，输出 uncertainty |
| 每个技术都有人做过 | 创新在 state-locked + artifact-aware + physics-informed cross-modal inference |

---

## 10. 一句话总结

本研究提出的不是一套更多表征的组合，而是一种面向离子迁移型软半导体的机制诊断方法：通过状态写入、状态锁定、同区关联和物理约束多模态推断，把动态光学表型和破坏性终点化学图谱联立到同一组可证伪的物理隐状态中，从而解耦 Br-rich surface、缺陷、电势、应变和不可逆降解对 WBG mixed-halide perovskite 光致相分离的相对贡献。

---

## 11. 假设的统计形式化

§ 4 的 H1/H2/H3 用列举条件的方式描述支持/反证证据，这是离散判读规则。为了让博士论文给出**连续量化的机制贡献**而非"如果 X 且 Y 则结论"的真值表，本节给出统计形式化。

### 11.1 H1 形式化：Br-rich 表面的条件性偏导数

\[
H_1:\quad
\left.\dfrac{\partial \phi}{\partial x_{\mathrm{Br}}^{\mathrm{surf}}}\right|_{N_{\mathrm{defect}},\,\varepsilon,\,\phi_{\mathrm{loc}}\ \mathrm{fixed}}<0
\]

\(\partial/\partial x_{\mathrm{Br}}^{\mathrm{surf}}\) 的偏导是数学定义，对应"其他变量已被 SL-PCI 反演锁定"的多元回归系数 \(\hat\beta_1\)。Aim 2-3 完成后，对整批样品-cell 做：

\[
\hat\phi=\beta_0+\beta_1\,\hat x_{\mathrm{Br}}^{\mathrm{surf}}+\beta_2\,\hat N_{\mathrm{defect}}+\beta_3\,\hat\varepsilon+\beta_4\,\hat\phi_{\mathrm{loc}}+\epsilon
\]

H1 判据：\(\hat\beta_1<0\) 且 95% 置信区间不跨零。

### 11.2 H2 形式化：电势异常的因果先行性

\[
H_2:\quad
\Pr\!\left[t_{\mathrm{CPD\,anomaly}}<t_{\mathrm{PL\,hotspot}}\ \big|\ \mathrm{same\ ROI}\right]>0.5+\delta
\]

\(\delta\) 由 transfer/drift 误差预算确定（来自 § 3.2）。

### 11.3 H3 形式化：可逆/不可逆边界的 Bayes 因子

定义 \(M_{\mathrm{rev}}\)：所有通道在恢复后回到 baseline；\(M_{\mathrm{irr}}\)：至少一个通道残留。Bayes 因子：

\[
K=\dfrac{P(\{y_m\}|M_{\mathrm{rev}})}{P(\{y_m\}|M_{\mathrm{irr}})}
\]

H3 判据：\(\log_{10}K>1\) 强证据 reversible；\(<-1\) 强证据 irreversible；\(|\log_{10}K|<1\) 边界区域，需追加 sealed-vs-open 或 gas trapping 实验。

### 11.4 与 v4 真值表的对偶

v4 § 6 的判读规则 ("Br-rich + PLQY 改善 + CPD 降低 + strain 降低 → 稳定化") 在 v5 SL-PCI 下对应：所有判读条件被 \(Z\) 的联合后验隐式表达，最终结论是 \(\hat\beta_1\)、Bayes 因子等**连续量化**的统计量，而不是 16 个真值表分支。这是 v5 相对 v4 的方法学增量在统计层面的体现。

