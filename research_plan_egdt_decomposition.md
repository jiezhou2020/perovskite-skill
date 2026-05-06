# 钙钛矿带隙温度响应解耦与低 Eg/dT 器件设计研究计划

## 1. 研究定位

本研究不应表述为“目前没有人解释过钙钛矿蓝移”，因为已有研究已经分别证明 electron-phonon coupling、thermal expansion、octahedral distortion、strain、phase transition 等因素会影响卤化物钙钛矿的温度依赖带隙。更稳妥且更有创新性的定位是：

> 现有研究多集中于单机制验证或两项解耦，例如 EPC 与 thermal expansion 的分离，或 octahedral tilting 与 lattice contraction 的竞争关系；但仍缺少在同一样品、器件相关薄膜条件下，通过温度、压力、光强和原位结构表征联合约束，输出各项贡献比例的多项全局反演框架。本研究拟建立可量化的 Eg(T) 分解模型，并进一步用于预测和制备低 |dEg/dT| 或低温度敏感性的钙钛矿太阳能电池。

核心创新点不是“首次发现蓝移机制”，而是：

- 在同一样品上复合解耦 thermal expansion、EPC、distortion、strain、carrier/trap effects 等贡献。
- 从单一 PL peak shift 解释，升级为多扰动、多表征、全局拟合的定量框架。
- 将 Eg(T) 分解参数转化为材料筛选指标，指导低温度敏感性钙钛矿组分和器件设计。

## 2. 已有证据与研究缺口

### 2.1 已有研究已经做到的部分

1. 温度依赖 PL 已经证明多种 lead halide perovskites 存在反常 bandgap blueshift，并与 electron-phonon coupling 和结构相变相关。
   - 代表文献：Wright et al., *Nature Communications* 2016.
   - 证据要点：FAPbI3、FAPbBr3、MAPbI3、MAPbBr3 等体系中，PL peak 随温度升高通常蓝移，并且在相变区出现突变。

2. EPC 与 thermal expansion 已被部分解耦，但主要是两项解耦。
   - 代表文献：Rubino et al., *Journal of Physical Chemistry Letters* 2021.
   - 证据要点：通过温变 PL 与压力 PL 分离 MAPbI3 nanocrystals 中 EPC 与 thermal expansion contribution。
   - 局限：体系为 silica matrix 中的 nanocrystals，不是器件相关 polycrystalline thin film；没有完整量化 distortion、strain、carrier density、phase effects。

3. thermal expansion 和 EPC 在某些体系中处于同等重要量级。
   - 代表研究：Francisco-Lopez et al. 关于 lead halide perovskite bandgap temperature dependence 的工作。
   - 证据要点：EPC 只能解释总 gap shift 的一部分，thermal expansion 至少同样重要。
   - 启示：只用 EPC 或只用 thermal expansion 解释 Eg(T) 都不充分。

4. Octahedral tilting 与 lattice contraction 对 bandgap 的作用方向可能相反。
   - 代表文献：Prasanna et al., *Journal of the American Chemical Society* 2017.
   - 证据要点：octahedral tilting 倾向于增大 bandgap，而 isotropic lattice contraction 倾向于减小 bandgap。
   - 启示：distortion 不能简单并入 thermal expansion，必须作为独立结构项处理。

5. 光致相分离、载流子填充、trap filling 等也可导致 PL shift。
   - 代表文献：Hoke et al., *Chemical Science* 2015；Sun et al., *Nanomaterials* 2024.
   - 证据要点：混卤体系光照下可能发生 halide segregation，表现为 red-shifted PL；高激发密度下也可能因 Burstein-Moss effect 或 trap filling 导致 blue shift。

### 2.2 尚未充分解决的问题

- 前人多为单项或双项解耦，缺少同一样品上的复合解耦。
- PL peak shift 往往被直接当作 bandgap shift，但 PL 还可能受 exciton binding energy、Stokes shift、trap filling、carrier density、ion migration 影响。
- 薄膜样品中的 residual strain、substrate constraint、grain boundary、residual solvent 与 additives 会改变 Eg(T)，但常被忽略。
- 现有模型很少能直接输出各项贡献比例，例如 EPC 占 30%、thermal expansion 占 40%、distortion/strain 占 20%、residual 占 10%。
- Eg(T) 分解参数尚未被系统用于预测器件温度系数或筛选低温度敏感性 perovskite solar cells。

## 3. 研究问题

### RQ1：能否在同一样品上复合解耦 Eg(T) 的主要贡献项？

目标是建立如下形式的分解：

```text
dEg/dT =
  (dEg/dT)_EPC
+ (dEg/dT)_thermal_expansion
+ (dEg/dT)_distortion
+ (dEg/dT)_strain
+ (dEg/dT)_carrier/trap
+ residual
```

其中前三项为本征主项，strain 与 carrier/trap 为薄膜和光谱测量中必须控制或建模的附加项。

### RQ2：能否建立可拟合、可解释、可预测的 Eg(T) 模型？

目标不是单纯拟合曲线，而是让每个参数对应可测物理量：

- `V(T)`：unit-cell volume，由温变 XRD/GIWAXS 获得。
- `theta(T)`：Pb-X-Pb bond angle 或 octahedral tilt angle，由结构 refinement/PDF/EXAFS 获得。
- `phonon(T)`：Raman/THz phonon mode frequency 和 linewidth。
- `strain(T)`：薄膜应变，由 GIWAXS peak shift、substrate comparison、wafer curvature 或 Raman shift 辅助获得。
- `carrier/trap(I,T)`：由 power-dependent PL、TRPL、absorption 判断。

### RQ3：Eg(T) 分解参数能否指导低 |dEg/dT| 器件制备？

目标是从模型中预测哪些组分或制备条件能降低 bandgap temperature sensitivity，并验证其是否对应更低的器件温度系数：

```text
TPCE = dPCE/dT
dVoc/dT
dJsc/dT
dFF/dT
```

## 4. 实验设计

### 4.1 样品体系

建议从变量较少、文献基础充分的 3D lead halide perovskites 开始：

- MAPbI3：经典参考体系，但存在相变和 MA 动态无序。
- FAPbI3：器件相关性更强，但黑相稳定性需要控制。
- CsxFA1-xPbI3：通过 Cs 调节结构畸变和相稳定性。
- FA/Cs Pb(I1-yBry)3：引入 mixed halide，用于后续连接相分离和 additive screening。

不建议第一阶段直接铺开 2D perovskites 或 Sn-based perovskites，因为 EPC、结构自由度和氧化问题会显著增加变量。

### 4.2 测量矩阵

| 测量 | 目的 | 输出参数 | 对应贡献项 |
|---|---|---|---|
| 温变 PL | 获得 PL peak、linewidth、phase transition signal | `E_PL(T)`, `FWHM(T)` | 总 shift、EPC、相变、trap |
| 温变 absorption/reflectance | 避免 PL peak 被 trap 或 Stokes shift 误导 | `Eg_abs(T)` | 更接近真实 bandgap |
| 压力 PL/absorption | 获得 bandgap 对体积变化的响应 | `dEg/dP` | thermal expansion |
| 温变 XRD/GIWAXS | 获得晶格常数、体积、相变、取向 | `V(T)`, lattice parameters | thermal expansion、phase |
| GIWAXS refinement/PDF/EXAFS | 获得局域结构和 octahedral distortion | `theta(T)`, `dPb-X(T)` | distortion |
| Raman/THz | 追踪低频 phonon mode | phonon frequency, linewidth | EPC、dynamic disorder |
| Power-dependent PL | 排除 band filling、trap filling、photoheating | `E_PL(I)`, intensity slope | carrier/trap |
| TRPL/TA | 区分 recombination、trap、hot carrier effects | lifetime, transient spectra | carrier/trap、phase |
| PL mapping | 判断 shift 是否空间均匀 | spatial PL map | phase segregation、inhomogeneity |

### 4.3 PL 设备改造建议

最低可行版本：

- 加闭循环 cryostat 或 Linkam temperature stage，覆盖 80-360 K。
- 样品腔体支持真空或 N2 环境，避免水氧和热降解。
- 样品表面温度独立校准，不只依赖 stage 读数。
- 加可调激发功率和 chopped illumination，避免 photoheating 和 ion migration 伪影。
- 同一光路增加 reflectance/absorption 模式，避免只用 PL peak 代表 bandgap。
- 加长时间 light-soaking protocol，确认测量过程中是否发生不可逆漂移。

增强版本：

- 集成显微 PL mapping，识别局域相分离或应变不均。
- 结合低频 Raman 或 THz time-domain spectroscopy，约束 phonon contribution。
- 若条件允许，可加入 pressure cell，实现同一光谱系统中的温变和压变测量。

## 5. 模型框架

### 5.1 基础分解

总带隙变化可写为：

```text
Delta Eg(T) =
  Delta Eg_TE[V(T)]
+ Delta Eg_distortion[theta(T), dPb-X(T)]
+ Delta Eg_EPC[T, phonon modes]
+ Delta Eg_strain[epsilon(T)]
+ Delta Eg_carrier/trap[I, n(T)]
+ residual
```

### 5.2 Thermal expansion contribution

利用压力实验和温变结构数据估计：

```text
(dEg/dT)_TE = (dEg/dV) * (dV/dT)
```

其中：

```text
dEg/dV = (dEg/dP) / (dV/dP)
```

需要注意：压力不仅改变体积，也可能改变 phonon 和 distortion，因此该项是近似分解，最好通过 pressure XRD 或 DFT 静态体积扫描辅助校正。

### 5.3 Distortion contribution

可用结构参数回归：

```text
Delta Eg_distortion =
  a * Delta theta
+ b * Delta dPb-X
+ c * Delta tilt
```

其中 `theta` 可表示 Pb-X-Pb bond angle，`tilt` 表示 octahedral tilt amplitude。该项必须和体积项分开，因为文献已证明 tilting 与 isotropic contraction 对 Eg 的影响方向可能相反。

### 5.4 EPC contribution

在扣除 thermal expansion、distortion 和 strain 后，对 residual intrinsic shift 进行 Bose-Einstein oscillator 或 O'Donnell-Chen 拟合：

```text
Delta Eg_EPC(T) = A / [exp(Theta/T) - 1]
```

或使用多 phonon mode：

```text
Delta Eg_EPC(T) = Sum_i A_i / [exp(hbar omega_i / kBT) - 1]
```

`omega_i` 应优先由 Raman/THz 实测约束，而不是完全自由拟合。

### 5.5 Carrier/trap 与非本征项控制

PL peak 不能直接等同于 bandgap。需要通过以下方式控制：

- 比较 PL peak 与 absorption onset/Tauc/derivative peak。
- 做低激发功率极限外推。
- 做 power-dependent PL，检查 peak shift 是否随激发功率变化。
- 做 TRPL/TA 判断是否存在 trap filling、hot carrier 或 photoinduced phase segregation。
- 混卤样品必须做 light-soaking 前后 PL mapping 和 XRD/GIWAXS，确认是否发生 halide segregation。

## 6. 器件验证

### 6.1 预测目标

模型输出以下材料指标：

- `dEg/dT_total`
- `(dEg/dT)_EPC`
- `(dEg/dT)_TE`
- `(dEg/dT)_distortion`
- `(dEg/dT)_strain`
- residual 或 instability indicator

筛选逻辑：

- 若 TE 与 distortion 符号相反且大小接近，可能获得低 `|dEg/dT|`。
- 若 EPC 过强，可能导致温度敏感性大，也可能暗示强 dynamic disorder。
- 若 residual 随光照或时间增长，可能不是稳定本征项，而是 ion migration、phase segregation 或 degradation。

### 6.2 器件结构

建议优先使用 p-i-n 结构：

```text
ITO / NiOx or SAM / perovskite / C60 / BCP / Ag
```

原因：

- 低温和中温测试下迟滞相对较小。
- 界面可控性较好。
- 适合与温变 J-V、EQE、PL、EL 联合分析。

### 6.3 器件测试

需要同时测：

- `PCE(T)`
- `Voc(T)`
- `Jsc(T)`
- `FF(T)`
- EQE(T)
- steady-state MPP tracking under temperature variation
- light soaking before/after PL and XRD/GIWAXS

最终要回答：

- 低 `|dEg/dT|` 是否对应更低 `dJsc/dT`？
- `dVoc/dT` 是否由 bandgap shift 主导，还是由 recombination/interface 主导？
- 模型预测的低温度敏感性是否能在真实器件中保持？

## 7. 与相分离和 solvent additive screening 的连接

本研究可以延伸到相分离，但不能简单把 blueshift 与相分离稳定性直接等同。混卤相分离常表现为 I-rich domain 形成后的 red-shifted PL，而高载流子密度、trap filling 或纳米晶离子迁移也可能导致 blue shift。

更合理的连接方式是：

- 用 Eg(T, light, time) 的 residual term 判断非本征漂移。
- 将 residual 的光照时间依赖、空间不均匀性和 hysteresis 作为 phase segregation/ion migration indicator。
- 用 additives 或 solvents 改变结晶、应力、缺陷和离子迁移，再观察分解参数如何变化。

候选 screening descriptors：

- `|dEg/dT|`
- residual drift under illumination
- PL peak hysteresis during heating-cooling cycle
- PL mapping heterogeneity
- phase segregation onset time
- activation energy from temperature-dependent drift kinetics
- `(dEg/dT)_strain` 和 residual strain release behavior

## 8. 风险与控制

| 风险 | 影响 | 控制方法 |
|---|---|---|
| PL peak 不等于 bandgap | 误判 Eg(T) | 联合 absorption/reflectance |
| 光照导致 ion migration | 把相分离误认为本征 shift | 低功率、chopped excitation、time-dependent PL |
| 相变区曲线不连续 | 拟合失真 | 相变区单独处理，不做连续模型硬拟合 |
| 压力实验改变 EPC 和 distortion | TE 项估计偏差 | 压力 XRD/DFT 静态体积扫描校正 |
| 薄膜应力强依赖基底 | 样品间不可比 | 同时做 free-standing 或不同 substrate 对照 |
| additive 改变多个变量 | 因果不清 | 先建立无 additive baseline，再逐一引入 additive |

## 9. 阶段计划

### Phase 1：建立基线体系

- 制备 MAPbI3、FAPbI3、Cs/FA mixed iodide 薄膜。
- 测温变 PL、absorption、XRD/GIWAXS。
- 识别相变区、稳定温区和可拟合温区。

### Phase 2：复合解耦

- 对同一样品做压力 PL/absorption。
- 加入 Raman/THz 数据约束 EPC。
- 建立全局拟合模型，输出各项贡献比例。

### Phase 3：模型预测

- 根据 TE、distortion、EPC 的符号和大小筛选低 `|dEg/dT|` 组分。
- 制备预测组分和对照组分。
- 验证模型预测与实验 `dEg/dT` 是否一致。

### Phase 4：器件验证

- 制备 p-i-n 太阳能电池。
- 测温变 J-V、EQE、PL/EL。
- 判断低 `|dEg/dT|` 是否转化为低器件温度系数。

### Phase 5：连接 additive screening

- 选择 mixed-halide composition。
- 引入 solvent/additive 变量。
- 用 residual drift、phase segregation onset time、PL mapping heterogeneity 作为快速筛选指标。

## 10. 流程图

```mermaid
flowchart TD
    A[Research Question: Why does Eg(T) blueshift and can we lower |dEg/dT|?] --> B[Same-sample multimodal measurements]

    B --> C1[Temperature-dependent PL and absorption]
    B --> C2[Pressure-dependent PL and absorption]
    B --> C3[Temperature-dependent XRD/GIWAXS]
    B --> C4[Raman/THz phonon spectroscopy]
    B --> C5[Power-dependent PL and TRPL/TA]
    B --> C6[PL mapping and light-soaking tests]

    C1 --> D[Total Eg(T) and linewidth]
    C2 --> E[dEg/dP and volume response]
    C3 --> F[V(T), phase, tilt, bond angle, strain]
    C4 --> G[Phonon modes and EPC constraints]
    C5 --> H[Carrier density, trap filling, photoheating control]
    C6 --> I[Phase segregation and spatial heterogeneity control]

    D --> J[Global decomposition model]
    E --> J
    F --> J
    G --> J
    H --> J
    I --> J

    J --> K1[Thermal expansion contribution]
    J --> K2[Distortion contribution]
    J --> K3[EPC contribution]
    J --> K4[Strain contribution]
    J --> K5[Carrier/trap and residual terms]

    K1 --> L[Contribution ratio table]
    K2 --> L
    K3 --> L
    K4 --> L
    K5 --> L

    L --> M[Predict low |dEg/dT| compositions]
    M --> N[Fabricate perovskite films]
    N --> O[Validate Eg(T) prediction]
    O --> P[Fabricate p-i-n solar cells]
    P --> Q[Measure PCE(T), Voc(T), Jsc(T), FF(T), EQE(T)]
    Q --> R[Assess whether low |dEg/dT| improves device temperature coefficient]

    R --> S[Extend descriptors to mixed-halide phase segregation]
    S --> T[Screen solvent/additive candidates]
```

## 11. 关键参考文献

1. Wright, A. D. et al. Electron-phonon coupling in hybrid lead halide perovskites. *Nature Communications* 2016.
2. Rubino, A. et al. Disentangling Electron-Phonon Coupling and Thermal Expansion Effects in the Band Gap Renormalization of Perovskite Nanocrystals. *Journal of Physical Chemistry Letters* 2021.
3. Wang, K. et al. Temperature Dependence of the Band Gap of 2D Lead Halide Perovskites. *Journal of Physical Chemistry Letters* 2019.
4. Prasanna, R. et al. Band Gap Tuning via Lattice Contraction and Octahedral Tilting in Perovskite Materials for Photovoltaics. *Journal of the American Chemical Society* 2017.
5. Hoke, E. T. et al. Reversible photo-induced trap formation in mixed-halide hybrid perovskites. *Chemical Science* 2015.
6. Yang, S. et al. Strain engineering in perovskite solar cells: from fundamentals to applications. *Chemical Society Reviews* 2022.
7. Wang, Y. et al. Accurate and efficient band-gap predictions for metal halide perovskites at finite temperatures. *npj Computational Materials* 2022.
8. Zacharias, M. et al. Anharmonic electron-phonon coupling in locally disordered perovskites. *npj Computational Materials* 2023.
