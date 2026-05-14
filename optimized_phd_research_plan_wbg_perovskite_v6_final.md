# 博士三年研究计划终稿 v6

## 推荐题目

**State-Locked Multi-Mechanism Decoupling of Photoinduced Phase Segregation in Wide-Bandgap Perovskites**

中文表达：

**宽带隙钙钛矿光致相分离的状态锁定多机制解耦研究**

副标题建议：

**Decoupling chemical composition, electrostatic potential, defects, strain, and irreversible degradation by physics-informed correlative inference**

中文表达：

**通过物理约束的关联推断解耦成分、电势、缺陷、应变和不可逆降解的贡献**

---

## 0. 题目候选和选择理由

### 候选 1：推荐题目

**State-Locked Multi-Mechanism Decoupling of Photoinduced Phase Segregation in Wide-Bandgap Perovskites**

优点：

- “State-Locked” 突出你和普通 operando 表征的区别：你不是只看动态，而是把动态状态锁住再读终点信息。
- “Multi-Mechanism Decoupling” 突出核心科学问题：不是简单证明有没有相分离，而是分清多个机制各自贡献多少。
- “Wide-Bandgap Perovskites” 直接对准串联太阳能电池需要的宽带隙材料。

### 候选 2：用户原始题目微调版

**Multi-Mechanism Characterization Decoupling of Photoinduced Phase Segregation in Wide-Bandgap Perovskites**

优点是接近你的原始想法。缺点是 “characterization decoupling” 英语略不自然，容易被理解为“把表征方法拆开”，而不是“把物理机制拆开”。

### 候选 3：更保守的题目

**Physics-Informed Correlative Characterization of Photoinduced Phase Segregation in Wide-Bandgap Perovskites**

优点是稳健，评委容易接受。缺点是创新锋芒较弱，不如“state-locked”和“decoupling”明确。

### 候选 4：最物理直白的题目

**Decoupling Chemical, Electrostatic, and Strain Contributions to Photoinduced Phase Segregation in Wide-Bandgap Perovskites**

优点是非常清楚，适合答辩口头解释。缺点是没有体现你的方法学创新，即 state-locking 和 physics-informed inference。

### 最终建议

博士计划标题用候选 1；PPT 第一页可写：

> **State-Locked Multi-Mechanism Decoupling of Photoinduced Phase Segregation in Wide-Bandgap Perovskites**  
> *Decoupling chemical composition, electrostatic potential, defects, strain, and irreversible degradation by physics-informed correlative inference*

中文讲解时说：

> 我的研究不是简单地多做几种表征，而是把光致相分离过程中的动态光电信号、冻结后的化学分布和结构应变映射到同一组物理状态变量中，从而判断成分重排、电势异常、缺陷、应变和不可逆降解各自的贡献权重。

---

## 1. 一句话核心

宽带隙混卤钙钛矿在光照下会发生光致相分离，但 PL 红移、KPFM 电势变化、TOF-SIMS/XPS 看到的 I/Br 重排、GIWAXS/Raman 看到的应变和结构无序，并不是同一个物理量。本研究要建立一种 **状态锁定 + 多模态关联 + 物理约束反演** 的方法，把这些不同表征结果投影到同一组物理状态变量中，从而解耦光致相分离背后的多种机制。

---

## 2. 研究背景：为什么这个问题重要？

### 2.1 宽带隙混卤钙钛矿为什么重要？

串联太阳能电池需要一个宽带隙顶电池。混卤钙钛矿可以通过调节 I/Br 比例调节带隙，常见形式为：

```text
AB(I1-xBrx)3
```

其中：

- `A` 可以是 FA、MA、Cs 或混合阳离子；
- `B` 通常是 Pb；
- `x` 是 Br 的比例；
- Br 越多，带隙通常越大。

对于钙钛矿/硅串联或全钙钛矿串联，顶电池通常需要约 `1.65-1.80 eV` 的宽带隙吸收层。因此，混卤宽带隙钙钛矿是非常关键的材料体系。

### 2.2 问题是什么？

问题在于，很多宽带隙混卤钙钛矿在光照下并不稳定。原本比较均匀混合的 I/Br，会逐渐形成局部 I-rich 和 Br-rich 区域。

用最简单的话说：

```text
光照前：
I 和 Br 相对均匀混合。

光照后：
一部分区域变得更富 I，
另一部分区域变得更富 Br。
```

这个现象叫：

```text
Photoinduced Phase Segregation, PIPS
```

也可以称为：

```text
Light-induced Halide Segregation, LHS
```

### 2.3 为什么 PIPS 会降低器件性能？

I-rich 区域的带隙更低。光生载流子会更容易流向这些低带隙区域，导致：

- PL 红移；
- 低带隙局部发光中心形成；
- 电压损失增加；
- EQE 和 Voc 下降；
- 宽带隙顶电池稳定性变差；
- 串联太阳能电池长期工作性能受损。

核心问题不是“有没有相分离”，而是：

> 光照后看到的光谱、电势、成分、应变和降解，到底谁是原因，谁是结果，谁只是相关现象？

---

## 3. 为什么单一表征不够？

### 3.1 PL 红移不是成分的直接测量

PL 红移常被用来判断 I-rich 区域形成。但 PL 是光电表型，不是直接成分图。

PL 信号可以写成：

```text
I_PL(E,r,t) = sum_p w_p(r,t) eta_p(r,t) L[E - Eg,p(r,t), sigma_p]
```

含义是：

- `p` 表示不同局部相或局部区域；
- `w_p` 是载流子 funneling 权重；
- `eta_p` 是发光效率；
- `L` 是谱线形状；
- `Eg,p` 是局部带隙。

局部带隙又可能受多个变量影响：

```text
Eg(r,t) = Eg0[xBr(r,t)] + a_epsilon epsilon(r,t)
          + a_T Delta T(r,t) + a_defect Ndefect(r,t)
```

这里的 `Delta T(r,t)` 不是环境温度随意漂移，而是激光照射造成的局域温升项。即使样品台温度恒定，薄膜中的吸收、热扩散和基底导热仍可能造成几 K 到十几 K 量级的局域温差，从而引起 meV 量级 PL 位移。因此，PL 数据必须配套光强扫描和低功率外推，避免把 laser heating 误判为卤素相分离。

所以：

```text
PL 红移 != 平均 I 含量增加的直接证据
```

少量极端 I-rich 区域也可能通过 carrier funneling 主导整个 PL。

### 3.2 KPFM 看到的是 CPD，不是单一电场

KPFM 测量接触电势差：

```text
CPD = (Phi_tip - Phi_sample) / e
```

但是样品表面功函数会被很多因素影响：

```text
V_CPD = V0
        + V_SPV(light, traps)
        + V_ion(halide/vacancy redistribution)
        + V_band-bending(defects)
        + V_surface-dipole(chemistry)
        + V_tip-artifact
```

因此，KPFM 看到 CPD 变化，并不能直接说“这就是离子迁移”。它可能来自：

- 表面光电压；
- 离子重排；
- 陷阱充电；
- 表面偶极；
- band bending；
- 探针漂移或电容伪影。

### 3.3 TOF-SIMS/XPS 是强证据，但也不是完美真值

TOF-SIMS 可以读 I/Br 深度和横向分布，但有 sputtering artifact。XPS 可以读表面化学态，但有 X-ray dose 和真空暴露问题。

TOF-SIMS 可写成：

```text
Y_Br/Y_I = M_matrix * c_Br(z)/c_I(z) + A_sputter
```

XPS 的角分辨信号可写成：

```text
I_i(theta) proportional to integral_0^infinity c_i(z)
exp[-z/(lambda_i cos theta)] dz
```

这说明 TOF-SIMS 和 XPS 是非常重要的终点化学观测，但必须考虑 artifact。

### 3.4 GIWAXS/Raman 能看结构，但结构变化也有多重来源

GIWAXS peak shift 可能来自成分变化，也可能来自应变：

```text
Delta q/q ~= - Delta a/a
```

Peak broadening 同时包含晶粒尺寸和微应变：

```text
beta cos theta = K lambda / L + 4 epsilon sin theta
```

Raman peak shift 也可来自应变和成分：

```text
Delta omega ~= gamma_epsilon epsilon + gamma_x Delta x
```

所以，结构表征也需要和化学、光电表征联立。

---

## 4. 已有工作做到哪里了？

### 4.1 经典认识

已有文献已经证明：

1. PIPS 确实存在，并且很多体系中具有可逆性。  
   Hoke et al. 2015 观察到光照后 PL 红移，暗态可恢复。

2. 热力学混合自由能很重要。  
   Brivio et al. 2016 用合金热力学解释混卤钙钛矿的 miscibility gap 倾向。

3. 光生载流子改变自由能地形。  
   Chen/Knight et al. 2021 提出统一理论，把暗态混合自由能和 photocarrier free energy 联合起来解释光致相分离。

4. 缺陷、晶界、表面、电场和应变都可能影响相分离位置和速率。

5. Fan et al. 2025 已经证明，快速冷冻加 cryo-EM 可以捕获瞬态离子分布和应变状态。

### 4.2 Fan et al. 2025 做成了什么？

Fan et al. 研究的是：

```text
CsPb(Br0.7I0.3)3
```

他们用：

- 405 nm 光照；
- 0.4 W/cm²；
- 光照不同时间后 plunge-freeze；
- cryo-STEM / EELS / 4D-STEM；
- EELS 看 I/Cs；
- 4D-STEM 看晶格参数和应变。

他们的重要结论是：

- 光照后 I 更富集在晶粒中心；
- 晶界附近 I/Cs 较低；
- 出现各向异性应变；
- 暗态恢复后 I/Cs 分布趋于重新均匀；
- PL 红移不能只用平均 I/Cs 解释，而可能由少量高 I-rich 尾部分布通过 carrier funneling 放大。

### 4.3 Fan et al. 没有解决什么？

Fan 2025 是你的基础，但没有把你的课题做完。

#### 未解决点 1：没有同一区域 operando PL/KPFM 轨迹

Fan 的 PL/XRD 是整体平均信号，cryo-EM 是冷冻后的局部信号。他们没有在同一个 grain 或同一个 ROI 上先记录 PL/KPFM 动态，再冻结，再读 EELS/4D-STEM。

因此还不知道：

```text
某一个 PL hotspot 或 CPD anomaly，
在冻结后到底对应多少 I/Br 重排、多少应变、多少缺陷？
```

#### 未解决点 2：时间演化主要是不同样品统计，不是同一区域连续演化

Fan 比较了不同光照时间冻结后的状态，但每个时间点不是同一个 ROI 的连续轨迹。

你的方法要把每个终点状态绑定到完整 history：

```text
H = {light intensity, illumination time, temperature, atmosphere,
     PL trajectory, KPFM trajectory, quench delay, probe dose}
```

#### 未解决点 3：Br 没有被直接测到

Fan 的 EELS 方案不能直接读 Br，所以用 I/Cs 作为代理。这是合理的，但化学闭环不完整。

你的 TOF-SIMS/XPS 可以补上：

```text
I/Br ratio
surface vs depth halide distribution
I0 / Pb0 / PbI2 degradation markers
```

#### 未解决点 4：应变是原因还是结果仍不清楚

Fan 看到相分离后的 anisotropic strain，但不能完全判断：

```text
是预先存在的应变引导了相分离？
还是相分离之后产生了应变？
还是二者形成反馈？
```

这正好可以通过你的 state-writing + state-locking + recovery-cycle 实验去验证。

#### 未解决点 5：器件相关性有限

Fan 的样品是约 100 nm 薄膜，放在 TEM grid / carbon support 上，适合 cryo-EM，但与真实太阳能电池中的厚膜、HTL/ETL、电极、内建电场和界面应力还有距离。

你的计划可以进一步问：

```text
Fan 观察到的 grain-center iodine enrichment
在更厚、更接近器件的 WBG perovskite 里是否仍然成立？
```

---

## 5. 本研究的核心科学问题

### 总问题

宽带隙混卤钙钛矿光致相分离过程中，成分重排、电势异常、缺陷、应变和不可逆降解分别贡献多少？这些机制之间的因果顺序和耦合关系是什么？

### 具体问题

1. PL 红移主要由平均 I-rich 成分决定，还是由少量 I-rich 尾部分布和 carrier funneling 主导？

2. KPFM 观察到的 CPD anomaly 是相分离的前驱，还是相分离之后的结果？

3. 光学恢复是否等于物理恢复？PL 恢复后，I/Br 分布、应变和化学态是否也恢复？

4. I-rich 区域到底应该出现在晶界、晶粒中心、表面还是界面？这个位置是否由样品厚度、缺陷、电势和应变边界条件决定？

5. 宽带隙器件中真正需要抑制的是卤素重排、缺陷、电势异常、应变记忆，还是不可逆化学降解？

---

## 6. 物理基础

### 6.1 暗态混合自由能

最基本的热力学关系是：

```text
Delta Gmix = Delta Hmix - T Delta Smix
```

对 I/Br 二元混合，常用正则溶液近似：

```text
Delta Gmix = Omega x(1-x) + kBT[x ln x + (1-x) ln(1-x)]
```

其中：

- `x` 是 Br 比例；
- `Omega x(1-x)` 是混合焓，若 `Omega > 0`，混合不利；
- `kBT[x ln x + (1-x) ln(1-x)]` 是熵项，数值为负，支持混合。

如果写成 `APb(I1-xBrx)3` 每个 formula unit 的形式，因为一个 formula unit 有 3 个卤素位点，在 **independent-site regular-solution approximation** 下可写作：

```text
Delta Fmix/f.u. ~= 3 Omega x(1-x)
                + 3 kBT[x ln x + (1-x) ln(1-x)]
```

这个 3 倍因子不是严格定律，而是把 3 个卤素位点近似为独立随机混合位点。真实钙钛矿中 `PbX6` 八面体共顶点连接，I/Br 在相邻位点上的排布会受到短程相互作用影响；因此更严格的处理需要 Brivio et al. 2016 和 Knight/Chen et al. 2021 中使用的 quasi-chemical approximation 或等价的 cluster/DFT 热力学修正。本文使用该式作为最小物理基线，而不是完整相图计算。

相分离的 spinodal 条件是：

```text
d2G/dx2 < 0
```

对上面的正则溶液模型：

```text
d2G/dx2 = -2 Omega + kBT/[x(1-x)]
```

这说明温度、混合焓和组成都会影响均匀混合态是否稳定。

### 6.2 光照下必须加入 photocarrier free energy

暗态热力学不够解释光致相分离。光照下会产生载流子，I-rich 区域带隙更低，载流子会更倾向进入 I-rich 区域，降低自由能。

更完整的总自由能应写成：

```text
Gtotal = Gmix + Gcarrier + Gelastic + Gdefect + Ginterface
```

含义：

- `Gmix`：I/Br 混合自由能；
- `Gcarrier`：光生载流子向低带隙区域 funneling 带来的自由能变化；
- `Gelastic`：应变能；
- `Gdefect`：缺陷和陷阱相关能量；
- `Ginterface`：相区之间的界面能或梯度能。

空间分布形式可写为：

```text
F[x(r)] = integral { f(x,T,n,epsilon,Ndefect)
                    + kappa/2 |grad x|^2 } dV
```

化学势为：

```text
mu = delta F / delta x
   = df/dx - kappa grad2 x
```

卤素组成随时间演化：

```text
dx/dt = div[ M(x,T) grad mu ]
```

这说明 PIPS 同时是：

- 热力学问题：自由能是否支持分相；
- 动力学问题：离子是否来得及迁移；
- 光电问题：光生载流子是否改变自由能地形；
- 结构问题：应变是否放大或抑制分相。

### 6.3 离子迁移和状态锁定的物理条件

卤素迁移可用 Arrhenius 形式描述：

```text
D(T) = D0 exp(-Ea / kBT)
```

降温会指数级降低扩散系数。因此，快速低温终止可以抑制离子继续迁移。

状态锁定要满足：

```text
tau_lock << tau_relax
```

或者：

```text
L^2 / D(Tlock) >> transfer_time
```

这里：

- `L` 是要保持的空间尺度；
- `D(Tlock)` 是低温下的扩散系数；
- `transfer_time` 是转移/读取前的等待时间。

但本研究不会假设锁定完美，而是定义 lock fidelity：

```text
Flock = 1 - |Q_before_lock - Q_after_lock| / |Q_state - Q_pristine|
```

其中 `Q` 可以是 PL peak、CPD contrast、I/Br ratio 或 GIWAXS peak shift。

需要明确的是，状态锁定的有效对象主要是 **离子/化学/结构态**，例如 I/Br 分布、残余应变、缺陷或降解产物。载流子、激子、极化子和瞬态电子占据通常在 ps 到 microsecond 尺度内弛豫，而快速终止或低温转移通常在 ms 到 s 尺度内完成。因此，SL-PCI 不声称冻结“光照瞬间的电子-离子联合态”，而是测量光照写入后、电子态已弛豫但离子/结构态仍保留的 locked ionic-structural state。

---

## 7. 方法学框架：SL-PCI

本研究采用：

```text
State-Locked Physics-Informed Correlative Inference
```

简称：

```text
SL-PCI
```

### 7.1 Step 1：State Writing，用光写入状态

用可控光照把样品写入不同 LHS 状态：

```text
S0: pristine 初始态
S1: pre-onset 前驱态
S2: onset PL 红移开始态
S3: saturated PL 红移饱和态
S4: recovery 暗态恢复态
S5: irreversible 不可逆降解态
```

关键点：

```text
状态不是只由光照时间定义，而由 PL/KPFM 响应定义。
```

例如：

```text
S2 onset:
Delta E_PL 超过阈值，且 dE_PL/dt 明显增加。

S3 saturated:
PL peak 已接近平台，|dE_PL/dt| 很小。

S4 recovery:
PL peak 接近初始值，但终点化学/结构是否恢复未知。
```

### 7.2 Step 2：State Locking，把动态状态变成终点可读状态

在目标状态出现后，立即执行：

- 低温终止；
- 快速惰性转移；
- dark / inert / low-temperature storage；
- 延迟时间序列控制。

核心不是宣称“完全冻结”，而是证明：

```text
锁定过程造成的状态漂移 < 研究机制导致的主效应
```

即：

```text
Delta_drift < Delta_mechanism
```

### 7.3 Step 3：Endpoint Reading，读取终点化学和结构

锁定后读取：

- TOF-SIMS：I/Br 横向和深度分布；
- XPS/AR-XPS：表面 I/Br 和化学态；
- GIWAXS：相、晶格参数、微应变；
- Raman：局部应变、无序、低频晶格模式；
- 可选 cryo-CL / cryo-EDS / cryo-TEM：用于高风险交叉验证。

### 7.4 Step 4：Physics-Informed Inference，物理约束反演

定义隐状态：

```text
Z = {
  xBr(r,z),          卤素组成
  fI-rich(r),        I-rich 相分数
  epsilon(r),        应变/微应变
  phi(r),            电势/离子电荷状态
  Ndefect(r),        缺陷/陷阱密度
  Cdeg(r),           不可逆化学降解程度
  M(r)               形貌变量，如晶界/晶粒中心/表面/界面
}
```

每种表征是隐状态的一个投影：

```text
y_m = H_m(Z; theta_m) + A_m + eta_m
```

其中：

- `y_m` 是第 `m` 种表征信号；
- `H_m` 是对应的物理 forward model；
- `A_m` 是 artifact channel；
- `eta_m` 是噪声。

这一步的意义是：

```text
不把任何单一表征当成真相，
而是把所有表征放入同一个物理状态模型里联合解释。
```

---

## 8. 中心假设

### H1：PL 红移由 I-rich 分布尾部主导，而不是由平均组成主导

Fan et al. 发现平均 I/Cs 不能完全解释大 PL 红移，少量高 I-rich 区域可能通过 carrier funneling 放大 PL。

本研究假设：

```text
E_PL 与 max-tail[xI(r)] 和 fI-rich 的相关性
强于与 mean[xI(r)] 的相关性。
```

验证方法：

- operando PL 记录红移；
- 在 S1/S2/S3 锁定状态；
- TOF-SIMS/XPS 读取 I/Br 分布；
- 比较两个模型：

```text
Model A: E_PL = F(mean xBr)
Model B: E_PL = F(distribution tail, fI-rich, carrier funneling)
```

如果 Model B 更好，说明 PL 主要受 I-rich 尾部分布和 funneling 控制。

### H2：电势异常可能是局域相分离的前驱或放大器

KPFM 可能在 PL hotspot 明显出现前看到 CPD anomaly。

本研究假设：

```text
P(t_CPD_anomaly < t_PL_hotspot | same ROI) > 0.5 + delta
```

验证方法：

- 同一区域同步记录 PL/KPFM；
- 判断 CPD anomaly 是否早于 PL hotspot；
- 锁定该状态；
- 用 TOF-SIMS/XPS 判断该区域是否发生 I/Br 重排。

结果解释：

- CPD 先出现：电势异常可能是前驱或放大器；
- PL 先出现：CPD 更可能是相分离后的结果；
- 二者无关：KPFM CPD 可能主要来自表面/探针/陷阱伪影。

### H3：光学恢复不等于物理恢复

许多样品暗态 PL 可以恢复，但应变、缺陷和化学降解可能没有完全恢复。

本研究假设：

```text
PL(t) -> PL_pristine
并不必然意味着
Z(t) -> Z_pristine
```

其中：

```text
Z = {composition, strain, electrostatic state, defect density, degradation}
```

验证方法：

- 多轮写入-恢复循环；
- 在 PL 看似恢复后锁定；
- 用 TOF-SIMS/XPS/GIWAXS/Raman 检查是否还有残余变化。

可能结果：

```text
完全恢复：PL、I/Br、应变、化学态都恢复。
部分恢复：PL 恢复，但应变/缺陷/表面化学未恢复。
不可逆：PL 也不能恢复，并出现明显降解标志。
```

### H4：I-rich 出现在晶界还是晶粒中心不是普适规律，而由边界条件决定

Fan et al. 看到 I 向晶粒中心富集，但其他文献也有 I-rich 出现在晶界或样品边缘的报道。

本研究假设：

```text
location(I-rich) = F(grain geometry, defect density, electrostatic field,
                     strain, surface/interface condition, film thickness)
```

验证方法：

- 比较晶界、晶粒中心、表面、界面；
- 比较薄膜和更厚器件相关膜；
- 比较 passivated 和 unpassivated 样品；
- 比较 bare film 和 HTL/ETL half-stack。

---

## 9. 样品设计

### 9.1 主材料体系

计划选择两到三类 WBG 体系：

1. **中等宽带隙体系**

```text
Eg = 1.65-1.70 eV
```

目标：接近实际 tandem top cell，更具器件相关性。

2. **高 Br 应力体系**

```text
Eg = 1.73-1.80 eV
```

目标：更容易出现 PIPS，有利于放大机制差异。

3. **可选无机参考体系**

```text
CsPb(I1-xBrx)3
```

目标：和 Fan et al. 2025 的 `CsPb(Br0.7I0.3)3` 对照，区分有机阳离子效应和卤素效应。

### 9.2 样品复杂度逐级增加

```text
Level 1: bare WBG film on inert substrate
Level 2: film with fiducial markers
Level 3: passivated vs unpassivated film
Level 4: HTL/perovskite or perovskite/ETL half-stack
Level 5: device-like stack if time allows
```

先从 bare film 开始，因为机制必须先干净；然后再加入界面和器件复杂性。

### 9.3 多模态空间配准协议

本研究中的 `same-ROI` 不能被理解为所有仪器都能做到 sub-micron pixel-to-pixel 对位。更严谨的定义是 **scale-aware correlative registration**：

```text
true same-ROI:
PL/KPFM 在同一光学显微坐标和同一 AFM 扫描窗口内连续追踪。

locked endpoint ROI:
TOF-SIMS 在锁定后读取同一标记区域的 I/Br 分布，但读出过程是破坏性的。

ensemble/mesoscale constraint:
XPS/AR-XPS 和 GIWAXS 多数情况下提供区域平均或深度平均约束，
不强行解释为单个 PL hotspot 的同像素读数。
```

具体协议：

- 在惰性基底上预制 Au/Cr fiducial cross marks，间距约 50-100 micrometer，并让 active perovskite ROI 避开金属边缘，减少金属诱导的局域化学扰动；
- 大尺度配准使用光学显微图、fiducial mark 和仪器 stage 坐标；小尺度配准使用 PL intensity、AFM topography、KPFM CPD、TOF-SIMS total-ion/topography-like contrast 之间的 affine 或 non-rigid image registration；
- 对每个 ROI 报告 registration error，例如 `sigma_reg = 0.5, 2, 10 micrometer`，并把它作为 forward model 的卷积核，而不是默认完美配准；
- 承认 TOF-SIMS 是 destructive readout。若同一样品需要多个终点读数，优先采用相邻等价 ROI 或同片样品的分区实验，并用统计配准验证趋势；
- XPS/GIWAXS 主要作为 chemical/structural constraint，不作为 hotspot-level 直接证据。只有在 micro-XPS、nano-XPS、micro-GIWAXS 或同步辐射扫描条件可用时，才把它们提升为局域图谱证据。

因此，Aim 2 的关键不是证明“所有表征逐像素完全重合”，而是证明在可量化配准误差内，动态 PL/KPFM 特征能够预测 locked endpoint halide redistribution，且该预测优于随机形貌或平均组成模型。

---

## 10. 实验设计

### 10.1 Operando PL/KPFM

目的：

- 记录 LHS 动态；
- 定义 S0-S5 状态；
- 找到 PL hotspot 和 CPD anomaly；
- 判断 CPD 是否早于 PL 变化。

关键数据：

```text
E_PL(t), I_PL(t), linewidth(t), recovery rate
V_CPD(r,t), SPV(r,t), CPD relaxation time
```

必须加入光强和热效应控制：

```text
power series: below-threshold -> onset -> saturation
same total dose but different intensity/time
low-power PL readout after high-power writing
```

如果 PL peak shift 对光强呈现瞬时可逆变化，而没有对应的 locked I/Br redistribution，则优先解释为 heating 或 carrier-density artifact；如果 PL shift 在低功率读出后仍保留，并且 endpoint chemistry 支持 I/Br 重排，才归入 PIPS 机制。

### 10.2 State Locking 控制实验

必须做的对照：

```text
delay = 0, 10 s, 1 min, 5 min, 30 min
dark vs illuminated transfer
room-temperature transfer vs low-temperature transfer
sealed/inert vs air-exposed transfer
```

目标是量化：

```text
状态在转移/锁定过程中漂移了多少？
```

### 10.3 TOF-SIMS

读取：

- I/Br 横向分布；
- I/Br 深度分布；
- PL hotspot 是否对应 I-rich；
- CPD anomaly 是否对应 I/Br 重排；
- 表面/界面是否出现 Br-rich 或 I-rich。

伪影控制：

- sputter dose series；
- reference standards；
- matrix effect correction；
- same ROI registration；
- registration-error convolution；
- destructive-readout control。

### 10.4 XPS / AR-XPS

读取：

- 表面 I/Br；
- I0；
- Pb0；
- PbI2；
- 表面降解和卤素损失。

目的：

```text
区分可逆卤素重排和不可逆化学降解。
```

XPS/AR-XPS 还必须校准 UHV 和 X-ray dose 对卤素损失的影响。具体做法是对 reference standards 和 pristine films 做 dwell-time series、X-ray dose series 和 dark UHV exposure series，记录 I/Br/Pb 比例、I0、Pb0、PbI2 的变化。校准得到的真空逸出、束流损伤和表面还原贡献进入 `A_XPS` artifact channel，而不是直接当作样品本征降解。

### 10.5 GIWAXS

读取：

- phase；
- lattice parameter；
- peak broadening；
- microstrain；
- crystallite size；
- preferred orientation。

目的：

```text
判断 PL/chemical change 是否伴随结构和应变变化。
```

### 10.6 Raman

读取：

- local strain；
- lattice disorder；
- low-frequency phonon；
- laser-induced local change。

目的：

```text
补充 GIWAXS 的空间平均问题，检测局部 strain/disorder memory。
```

---

## 11. 数据融合和机制解耦

### 11.1 观测矩阵

| 表征 | 观测量 | 主要敏感变量 | 主要伪影 |
|---|---|---|---|
| PL | peak, linewidth, intensity, lifetime | bandgap, funneling, defects | heating, reabsorption |
| KPFM | CPD, SPV, relaxation | electrostatics, ions, traps | tip drift, surface sensitivity |
| TOF-SIMS | I/Br map, depth profile | composition | sputter artifact, matrix effect |
| XPS | surface ratio, chemical states | surface chemistry, degradation | X-ray dose, vacuum exposure |
| GIWAXS | q shift, FWHM | lattice, strain, phase | texture, averaging |
| Raman | peak shift, linewidth | strain, disorder | laser heating |

### 11.2 可识别性分析

不能只说“多模态数据很多，所以一定能解耦”。必须判断这些数据是否真的能区分隐变量。

对 forward model 线性化：

```text
J_mj = partial H_m / partial Z_j
```

做 SVD：

```text
J = U Sigma V^T
```

条件数：

```text
kappa = sigma_max / sigma_min
```

判断标准：

```text
kappa < 100:
机制排序基本可用。

kappa > 1000:
模型病态，变量不可分，需要加新表征或降低模型维度。
```

例子：

- 如果 GIWAXS 不能区分 composition 和 strain，就加入 Raman 或 TOF-SIMS；
- 如果 PL 不能区分 I-rich phase fraction 和 defect density，就加入 TRPL/PLQY/KPFM；
- 如果 XPS/TOF-SIMS 受到 dose artifact，就加入 artifact channel 和零剂量外推。

在 Year 1 结束前，必须用文献参数和 pilot data 给出 `J_mj` 的数量级估算，而不是只写形式主义公式。如果 `kappa > 1000`，说明某些隐变量在现有表征组合下不可识别，处理方式不是强行拟合，而是：

- 降低模型维度，例如合并高度相关的 `Ndefect` 和 `Cdeg`；
- 加入新观测，例如 TRPL/PLQY、UPS、micro-Raman 或 micro-GIWAXS；
- 把不可识别变量作为 nuisance parameter，只报告可识别的机制组合。

### 11.3 最终输出不是互斥概率，而是机制贡献权重

最终输出形式：

```text
w_comp +/- uncertainty
w_phi +/- uncertainty
w_strain +/- uncertainty
w_defect +/- uncertainty
w_deg +/- uncertainty
```

也就是说，本研究最终要回答：

```text
在这个样品和这个边界条件下，
composition、electrostatics、strain、defects、degradation
分别贡献多少？
```

这里不把机制强行设为互斥类别，因为真实 PIPS 往往是多机制耦合过程。例如 strain 可以先诱导 carrier funneling，carrier funneling 又促进 I-rich 域增长，同时 defect-assisted ion migration 加快动力学。因此更合理的输出是连续权重或因子分解：

```text
Delta y_m ~= sum_k w_k H_mk(Z_k) + A_m + eta_m
```

其中 `w_k` 表示第 `k` 类机制对观测变化的相对贡献。`w_k` 可以归一化为 `sum_k w_k = 1` 用于画机制图，也可以保留非归一化幅值用于比较不同样品的总不稳定程度。若某些机制在统计上不可区分，则报告合并权重，例如 `w_strain+defect`，而不是给出虚假的精细分解。

而不是只回答：

```text
有没有相分离？
```

---

## 12. Aims / Work Packages

### Aim 1：建立 state-writing 和 state-locking 方法

目标：

```text
用 PL/KPFM 定义 S0-S5 状态，并证明状态锁定后的漂移小于主效应。
```

关键问题：

- 同一样品能否稳定写入 S1-S5？
- 光撤掉后状态多久会恢复？
- 快速终止/低温锁定是否足够快？

主要实验：

- operando PL；
- 初步 KPFM；
- delay series；
- room-temperature transfer vs low-temperature transfer；
- registration pilot and fiducial protocol；
- literature-parameter SVD identifiability estimate。

交付物：

- LHS state diagram；
- lock fidelity metric；
- state-writing workflow figure；
- Aim 1 methods dataset；
- first `J_mj` / `kappa` identifiability report；
- registration-error budget。

成功标准：

```text
endpoint drift < 20% of main state-induced signal
```

### Aim 2：建立 PL/KPFM 与 TOF-SIMS/XPS 的同区关联

目标：

```text
判断 PL hotspot、CPD anomaly 和 endpoint I/Br redistribution 是否来自同一隐状态。
```

关键问题：

- PL hotspot 是否对应 I-rich？
- CPD anomaly 是否早于 I/Br 重排？
- I-rich 区域偏向晶界、晶粒中心、表面还是界面？

主要实验：

- same-ROI PL/KPFM；
- S1/S2/S3/S4 state locking；
- TOF-SIMS I/Br map；
- XPS/AR-XPS surface chemistry；
- registration-error annotated endpoint reading。

交付物：

- scale-aware registered PL/KPFM/SIMS/XPS dataset；
- H1 和 H2 的验证；
- 第一篇论文核心数据。

成功标准：

```text
PL/KPFM 特征预测 endpoint I/Br redistribution
优于随机形貌变量，并且该结论在配准误差范围内稳定。
```

### Aim 3：加入应变、无序和不可逆降解通道

目标：

```text
避免把所有 PL red-shift 都错误归因于卤素重排。
```

关键问题：

- PL recovery 是否等于 composition recovery？
- 应变是否在 PL 恢复后仍然保留？
- 不可逆化学降解何时出现？

主要实验：

- GIWAXS；
- Raman；
- XPS chemical states；
- repeated write-recover cycles。

交付物：

- reversible / irreversible boundary；
- strain-memory analysis；
- H3 验证；
- 第二篇论文核心数据。

成功标准：

```text
模型可以区分 composition、strain 和 degradation，
且 posterior uncertainty 可解释。
```

### Aim 4：推广到不同组分、形貌和界面条件

目标：

```text
证明 SL-PCI 不是针对单一样品的经验拼图，而是可迁移的机制诊断方法。
```

关键问题：

- Fan-like grain-center iodine enrichment 是否在厚膜/器件相关结构中仍成立？
- passivation 是通过减少缺陷、改变电势、释放应变还是改变表面组成来抑制 PIPS？
- 高 Br 体系的机制贡献权重是否不同？

主要实验：

- moderate-WBG vs high-Br WBG；
- passivated vs unpassivated；
- bare film vs HTL/ETL half-stack；
- repeated state-locking and inference。

交付物：

- mechanism regime diagram；
- stable WBG perovskite design rules；
- thesis core conclusion。

成功标准：

```text
给出至少两个材料/界面变量轴上的机制权重变化趋势，
并能说明 regime boundary 的物理来源，而不是只给经验排序。
```

---

## 13. 博士三年时间轴

### Year 1：平台建立与状态锁定验证

| 月份 | 任务 | 目标 | 产出 |
|---|---|---|---|
| M1-M2 | 文献和理论整理 | 将 Hoke/Brivio/Knight/Fan/Li 等文献转化为最终假设和变量 | proposal logic map |
| M1-M3 | 样品制备平台 | 制备可重复 WBG films，加入 fiducial markers | baseline PL/UV-vis/XRD/GIWAXS |
| M3-M4 | operando PL state-writing | 用 PL peak/intensity/linewidth/recovery 定义 S0-S5 | state-writing protocol |
| M4-M6 | KPFM 初步接入 | 测 dark/light CPD 和 SPV | PL-KPFM synchronized dataset |
| M5-M7 | state-locking protocol | 比较室温转移、快速终止、低温锁定 | lock fidelity metric |
| M7-M9 | TOF-SIMS/XPS pilot | 判断锁定态是否保留 I/Br 差异 | pilot chemical maps |
| M8-M10 | registration protocol | 建立 fiducial、stage 坐标和 image registration 误差预算 | registration-error report |
| M9-M10 | artifact calibration | sputter dose、XPS dose、UHV exposure、delay control | artifact channel model |
| M10-M12 | 初版物理反演模型 | forward model + SVD identifiability 数值估算 | Aim 1 report / conference figure |

Year 1 里程碑：

```text
证明 LHS 状态可以被写入、分类和锁定；
如果不能完美锁定，也必须量化 drift upper bound。
```

Year 1 Go/No-Go：

- 如果 locking fidelity 足够：进入同区 PL/KPFM/SIMS 关联；
- 如果不够：改为 delay-calibrated state matching，把漂移作为模型参数显式加入。

### Year 2：PL/KPFM/TOF-SIMS/XPS 核心关联

| 月份 | 任务 | 目标 | 产出 |
|---|---|---|---|
| M13-M15 | same-ROI PL/KPFM mapping | 找 PL hotspot 和 CPD anomaly | dynamic optoelectronic maps |
| M15-M17 | 锁定 S1/S2/S3/S4 | 捕获 onset/saturation/recovery 状态 | state-locked sample set |
| M16-M19 | TOF-SIMS I/Br mapping | 直接读取 endpoint halide redistribution | registered I/Br maps with error budget |
| M18-M20 | XPS/AR-XPS | 区分表面组成变化和降解 | surface chemistry maps |
| M20-M22 | H1/H2 验证 | 比较 PL/KPFM 与 endpoint chemistry | mechanism correlation result |
| M22-M24 | Paper 1 | 写 state-locked PL/KPFM/SIMS/XPS 方法和结果 | Manuscript 1 |

Year 2 里程碑：

```text
回答动态 PL/KPFM 状态能否预测终点 I/Br 重排。
```

Year 2 Go/No-Go：

- 如果 PL/KPFM 能预测 chemistry：继续加入 strain 和 device-relevant stack；
- 如果不能预测：仍然是重要结果，说明光电表型不足以单独判断化学状态，转向 endpoint physics + artifact-aware inference。

### Year 3：结构/降解解耦与器件相关推广

| 月份 | 任务 | 目标 | 产出 |
|---|---|---|---|
| M25-M27 | GIWAXS + Raman | 量化 locked states 中的 strain/disorder | composition-strain-disorder maps |
| M26-M28 | repeated write-recover cycles | 检验 optical recovery 是否等于 physical recovery | strain/degradation memory dataset |
| M28-M30 | composition/passivation matrix | 比较 moderate-WBG、高 Br、passivated/unpassivated | mechanism regime diagram |
| M29-M31 | interface / half-stack tests | 检验 HTL/ETL 边界条件影响 | interface comparison |
| M31-M33 | 完整 Bayesian/variational inference | 给出机制贡献权重和不确定度 | final SL-PCI model |
| M33-M34 | Paper 2 | 写多机制解耦和设计规则 | Manuscript 2 |
| M34-M36 | Thesis / defense | 整合论文、图、PPT 和答辩材料 | dissertation + defense slides |

Year 3 里程碑：

```text
形成 mechanism regime diagram：
说明什么时候 composition、electrostatics、defects、
strain 或 degradation 的权重升高，以及 regime boundary 来自哪里。
```

---

## 14. 预期论文

### Paper 1

**State-locked correlative PL/KPFM/TOF-SIMS/XPS mapping of photoinduced halide segregation in wide-bandgap perovskites**

核心贡献：

- state-writing / state-locking workflow；
- same-ROI PL/KPFM 到 endpoint I/Br chemistry 的关联；
- 验证 PL/KPFM 是否能预测化学重排。

### Paper 2

**Physics-informed decoupling of chemical, electrostatic, strain, and degradation contributions to photoinduced phase segregation**

核心贡献：

- 完整 SL-PCI 模型；
- GIWAXS/Raman/XPS/TOF-SIMS 联立；
- reversible vs irreversible boundary；
- mechanism regime diagram。

### Optional Methods Paper

**Artifact-aware multimodal inference for beam- and vacuum-sensitive halide perovskites**

核心贡献：

- TOF-SIMS/XPS/Raman 等表征中的 artifact channel；
- 可迁移到其他 soft ionic semiconductors。

---

## 15. PPT 建议图和页码结构

### Slide 1：题目和核心问题

一句话：

```text
How can we decouple chemistry, electrostatics, defects, strain,
and degradation during photoinduced phase segregation?
```

### Slide 2：为什么 WBG perovskite 重要

画：

```text
perovskite/silicon tandem
top cell needs WBG absorber
```

### Slide 3：PIPS 是什么

画：

```text
uniform I/Br -> I-rich + Br-rich
```

### Slide 4：为什么单一表征不够

画五个观察：

```text
PL red-shift
KPFM CPD change
TOF-SIMS I/Br map
GIWAXS/Raman strain
XPS degradation
```

### Slide 5：Fan 2025 的贡献和剩余问题

三栏：

| Fan 2025 已解决 | 还没解决 | 本研究怎么接上 |
|---|---|---|
 frozen ion/strain state | no same-ROI PL/KPFM trajectory | state-written + state-locked correlation |
 I/Cs + 4D-STEM | no direct Br map | TOF-SIMS/XPS |
 thin TEM-grid film | device relevance limited | thicker films / half-stacks |

### Slide 6：SL-PCI workflow

```text
Write state -> Track PL/KPFM -> Lock state -> Read endpoint maps -> Infer Z
```

### Slide 7：物理模型

放两个公式：

```text
Gtotal = Gmix + Gcarrier + Gelastic + Gdefect + Ginterface
```

```text
y_m = H_m(Z) + A_m + eta_m
```

### Slide 8：中心假设 H1-H4

用四个小框：

```text
H1: PL tail/funneling
H2: CPD precursor
H3: optical recovery != physical recovery
H4: I-rich location depends on boundary conditions
```

### Slide 9：三年甘特图

直接用第 13 节时间轴。

### Slide 10：预期产出

```text
Paper 1: state-locked PL/KPFM/SIMS/XPS
Paper 2: full multi-mechanism decoupling
Final output: mechanism regime diagram
```

---

## 16. 风险和备选方案

| 风险 | 后果 | 解决方案 |
|---|---|---|
| 状态转移中发生变化 | endpoint 不代表 operando state | delay series + low-temperature transfer + drift model |
| 状态锁定只锁住离子/结构态 | 不能解释瞬时电子态 | 明确把 SL-PCI 定位为 locked ionic-structural state，不声称冻结载流子瞬态 |
| 多模态空间配准误差过大 | hotspot-level 关联不可信 | fiducial + image registration + registration-error convolution；必要时降级为 ROI-level/statistical correlation |
| KPFM 信号解释不唯一 | CPD 不能直接归因于离子迁移 | 时间常数、光强依赖、XPS/UPS 锚定 |
| TOF-SIMS 造成重排或 sputter artifact | I/Br map 失真 | sputter dose series + reference standards + artifact channel |
| XPS/UHV 引起卤素损失或表面还原 | 把仪器损伤误认为本征降解 | dwell-time / X-ray dose / dark UHV reference calibration + `A_XPS` artifact channel |
| PL hotspot 不对应 I-rich | PL 不能直接代表成分 | 这是重要结论，说明 funneling/trap 主导 |
| GIWAXS 空间平均太强 | 局部应变看不清 | Raman / local ROI class / optional cryo methods |
| cryogenic locking 条件不足 | 无法完美冻结 | 使用 rapid inert stop + quantified drift upper bound |
| device stack 太复杂 | 变量过多不可识别 | 先 film，再 half-stack，最后 device-like stack |

---

## 17. 最终可防守结论

本博士课题不声称“首次观察光致相分离”，也不声称“首次冻结瞬态相分离状态”。Fan et al. 2025 已经证明 plunge-freeze cryo-EM 可以捕获瞬态离子/应变分布。

本课题真正的贡献是：

> 建立一个 state-locked、physics-informed、correlative inference 框架，把锁定前同一区域的动态光电轨迹和锁定后的化学/结构终点状态连接起来，从而定量解耦成分重排、电势异常、缺陷、应变和不可逆降解对宽带隙混卤钙钛矿光致相分离的相对贡献。

最终产出不是“多做几种表征”，而是一个机制图：

```text
在什么材料和界面条件下，
composition weight 升高？
electrostatic weight 升高？
defect-assisted kinetics 变强？
strain-memory contribution 变强？
irreversible degradation 已经不可忽略？
```

这个机制图可以反过来指导宽带隙钙钛矿的稳定化设计。

---

## 18. 关键参考文献

1. Hoke et al., *Chemical Science* 2015. Reversible photo-induced trap formation in mixed-halide hybrid perovskites.
2. Brivio et al., *Journal of Physical Chemistry Letters* 2016. Thermodynamic origin of photoinstability in mixed-halide perovskite alloy.
3. Bischak et al., *Nano Letters* 2017. Origin of reversible photoinduced phase separation in hybrid perovskites.
4. Chen/Knight et al., *Nature Communications* 2021. Unified theory for light-induced halide segregation in mixed-halide perovskites.
5. Fan et al., *Cell Reports Physical Science* 2025. Phase segregation dynamics in mixed-halide perovskites revealed by plunge-freeze cryo-electron microscopy.
6. Hu, G.; Zhang, J.; Xing, Y.; Jin, X.; Ni, G.; Yin, X. "Photoinduced Phase Segregation in Mixed Halide Perovskites: Mechanisms, Suppression Strategies, and Device Performance Optimization." *ACS Applied Materials & Interfaces* 2026. DOI: 10.1021/acsami.5c21121.
7. Li, Z.; Aihemaiti, N.; Xu, C.; Zhu, Y.; Peng, S. "In situ TEM unveils the role of residual local strain on light-induced phase segregation in halide perovskites." *Science Advances* 2026, 12(10), eaeb3559. DOI: 10.1126/sciadv.aeb3559.
