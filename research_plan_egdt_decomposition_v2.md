# 钙钛矿 Eg(T) 多物理贡献解耦研究计划 v2

## 0. 修正后的核心判断

上一版把问题写成了简单的经验加和：

```text
dEg/dT = EPC + thermal expansion + distortion + ...
```

这个写法过粗，因为实验中直接测到的通常不是纯粹的 quasiparticle bandgap，而是 PL peak、absorption edge 或 excitonic transition。它们包含不同物理量：

```text
E_PL(T, P, I, t)
= E_QP(T, P)
- E_b(T, P)
- Delta_Stokes(T)
+ Delta_carrier(I, T, t)
+ Delta_trap(I, T, t)
+ Delta_phase(T, I, t)
```

因此，本课题不能简单说“把蓝移分成三项”。更专业和可辩护的目标应是：

> 在同一样品上，通过温度、压力、光强、时间和结构表征的联合约束，把光谱峰位漂移拆分为本征 quasiparticle bandgap renormalization、excitonic/optical correction、薄膜应变项和非本征光照/离子/缺陷项；其中本征 bandgap renormalization 进一步分解为 electron-phonon coupling、thermal expansion 和 internal structural distortion。

## 1. 研究命题

### 1.1 不应主张的版本

不建议写：

> 目前没有人成功通过解耦声子/电子耦合、热膨胀和畸变解释钙钛矿蓝移。

这个说法容易被已有文献反驳：

- Francisco-Lopez et al. 已用高压和温变数据证明 MAPbI3 中 EPC 只能解释约 40% 的温度诱导 gap shift，thermal expansion 至少同等重要。
- Rubino et al. 已明确以 “disentangling electron-phonon coupling and thermal expansion effects” 为题，研究 MAPbI3 nanocrystals 的 bandgap renormalization。
- Prasanna et al. 已证明 lattice contraction 和 octahedral tilting 对 bandgap 的作用方向相反。
- Wright et al. 已系统展示多种 hybrid lead halide perovskites 的 anomalous bandgap blueshift 与相变行为。

### 1.2 建议主张的版本

建议写：

> 现有工作已经分别证明 EPC、thermal expansion、octahedral tilting/distortion、strain 和 phase transition 会影响 halide perovskite 的温度依赖光学带隙，但多数研究停留在单机制验证、双项分离或非器件相关样品。尚缺少在同一薄膜样品上，联合 PL/absorption、pressure spectroscopy、temperature-dependent GIWAXS/XRD、Raman/THz 和 power/time-dependent optical spectroscopy，构建可输出贡献比例与置信区间的多物理全局反演模型。本研究将建立该模型，并用其预测低 |dEg/dT| 组分及其器件温度系数。

## 2. 专业模型框架

### 2.1 先区分三种能量

实验中必须区分：

```text
E_QP = quasiparticle bandgap
E_opt = optical absorption transition energy
E_PL = photoluminescence peak energy
```

近似关系：

```text
E_opt(T) = E_QP(T) - E_b(T)
E_PL(T)  = E_opt(T) - Delta_Stokes(T) + Delta_nonideal(T, I, t)
```

其中：

- `E_b(T)` 是 exciton binding energy。
- `Delta_Stokes(T)` 可能来自 exciton-phonon relaxation、self-trapping 或局域无序。
- `Delta_nonideal` 包括 trap filling、Burstein-Moss filling、photoheating、ion migration、phase segregation 和 degradation。

因此，主模型应以 absorption/reflectance 得到的 `E_opt(T)` 或拟合得到的 `E_QP(T)` 为主，PL 只作为高灵敏度辅助，而不能单独作为 bandgap 证据。

### 2.2 本征 bandgap 的总微分

对固定化学组成、无相分离、低载流子密度极限下的本征 bandgap，可写为：

```text
E_QP(T) =
E_BO[V(T), eta(T), epsilon(T)]
+ Delta_EPC[T; V(T), eta(T)]
+ Delta_SOC
+ Delta_MB
```

其中：

- `E_BO` 是 Born-Oppenheimer 静态晶格电子结构。
- `V` 是晶胞体积或各向异性晶格参数。
- `eta` 是 internal distortion order parameters，例如 Pb-X-Pb angle、octahedral tilt、bond-length disproportionation、polar displacement。
- `epsilon` 是薄膜应变张量。
- `Delta_EPC` 是电子-声子重整化。
- `Delta_SOC` 对 Pb/Sn halide perovskites 很重要，但同一组成下随温度变化通常不是一阶主变量。
- `Delta_MB` 包括 GW/self-energy 层面的 many-body correction；实验反演中通常并入基线或由计算校准。

对温度求导：

```text
dE_QP/dT =
  (partial E_QP/partial T)_{V,eta,epsilon}
+ (partial E_BO/partial lnV)_{eta,epsilon} * dlnV/dT
+ Sum_j (partial E_BO/partial eta_j) * deta_j/dT
+ Sum_ij (partial E_BO/partial epsilon_ij) * depsilon_ij/dT
+ cross terms
```

物理对应：

- 第一项是固定晶格下的 EPC contribution。
- 第二项是 thermal expansion contribution。
- 第三项是 internal distortion contribution。
- 第四项是 substrate/film strain contribution。
- cross terms 表示 EPC 本身会被体积和畸变调制，不能默认忽略。

这比简单加和更严谨，因为它明确了“贡献”是相对于一组状态变量的偏导数定义。

### 2.3 EPC 的理论表达

标准理论基础是 Allen-Heine-Cardona theory。对第 `n,k` 个电子态，声子导致的能级重整化可写成：

```text
Delta epsilon_{n,k}^{EPC}(T)
= Re Sigma_{n,k}^{Fan}(T)
+ Re Sigma_{n,k}^{DW}(T)
```

bandgap 的 EPC contribution 是 CBM 与 VBM 修正之差：

```text
Delta E_g^{EPC}(T)
= Delta epsilon_CBM^{EPC}(T)
- Delta epsilon_VBM^{EPC}(T)
```

在实验拟合中，可用多振子近似：

```text
Delta E_g^{EPC}(T)
= Sum_lambda A_lambda [2 n_B(omega_lambda, T) + 1]
```

其中：

```text
n_B(omega, T) = 1 / [exp(hbar omega / k_B T) - 1]
```

要求：

- `omega_lambda` 不应完全自由拟合，应由 Raman/THz/INS 或计算 phonon DOS 约束。
- `A_lambda` 的符号和大小要允许 CBM/VBM 贡献相反。
- 对 soft, anharmonic perovskites，harmonic AHC 可能不足，需要 frozen phonon、special displacement method 或 anharmonic self-consistent phonon 修正。

文献支撑：

- AHC 将 EPC bandgap renormalization 分为 Fan 和 Debye-Waller 项，这是半导体温度依赖带隙的标准理论基础。
- VASP 6.5+ 已实现 nonadiabatic AHC bandgap renormalization workflow，说明这不是经验公式，而是可计算的第一性原理量。
- Zacharias et al. 对 ultrasoft/local-disorder perovskites 指出，局域无序和非谐性会显著改变 EPC renormalization，因此 halide perovskites 中不能只套传统 harmonic AHC。

### 2.4 Thermal expansion contribution

严格定义：

```text
Delta E_g^{TE}(T)
= Integral_{T0}^{T}
  (partial E_BO / partial lnV)_{eta,epsilon}
  * dlnV/dT' dT'
```

如果近似为各向同性体积响应：

```text
(partial E_g / partial lnV)
= -B * (partial E_g / partial P)
```

因此：

```text
(dE_g/dT)_{TE}
= -B(T) * alpha_V(T) * (partial E_g / partial P)
```

其中：

- `B` 是 bulk modulus。
- `alpha_V = dlnV/dT` 是体膨胀系数。
- `partial E_g / partial P` 来自 pressure-dependent absorption/PL。

重要限制：

- 压力不仅改变 `V`，也会改变 `eta`、phonon frequency 和 phase stability。
- 所以 `partial E_g/partial P` 不是纯体积导数，必须用 pressure XRD 或 DFT constrained-volume calculation 校正。
- 对薄膜，不能直接使用 bulk `alpha_V`，因为 substrate constraint 会引入 biaxial strain。

文献支撑：

- Francisco-Lopez et al. 使用高压实验指出 MAPbI3 的 gap pressure coefficient 反对“thermal expansion 可忽略”的假设，并估计 EPC 只占总 shift 的约 40%。
- Rubino et al. 用温度和压力依赖 spectroscopy 对 MAPbI3 nanocrystals 分离 EPC 与 TE。

### 2.5 Distortion contribution

对 halide perovskites，`V` 不能代表全部结构变化，因为 band edge 主要由 Pb/Sn s,p 与 halide p 轨道反键耦合决定，Pb-X-Pb angle 和 octahedral tilting 会直接改变 orbital overlap。

定义 distortion order parameters：

```text
eta_1 = 180 deg - angle(Pb-X-Pb)
eta_2 = Delta d_Pb-X / d_Pb-X
eta_3 = octahedral tilt amplitude
eta_4 = polar off-centering amplitude
```

一阶或二阶结构模型：

```text
Delta E_g^{dist}(T)
= Sum_j K_j Delta eta_j(T)
+ 1/2 Sum_{j,k} K_{jk} Delta eta_j(T) Delta eta_k(T)
```

参数来源：

- `Delta eta_j(T)`：temperature-dependent GIWAXS/XRD refinement、PDF、EXAFS。
- `K_j`：DFT static structure scans 或 pressure/temperature constrained refinements。

关键点：

- distortion 不是 thermal expansion 的剩余项，而是具有独立结构坐标的贡献。
- Prasanna et al. 已证明 lattice contraction 与 octahedral tilting 对 bandgap 可产生相反趋势，这正是独立建模的依据。

### 2.6 Film strain contribution

薄膜样品必须加入 strain：

```text
Delta E_g^{strain}
= Xi_hyd * Tr(epsilon)
+ Xi_biax * epsilon_biax
+ Xi_shear * epsilon_shear
```

对 substrate-constrained film：

```text
epsilon_parallel(T)
approx Integral_{T0}^{T} [alpha_sub(T') - alpha_film(T')] dT'
```

这意味着同一 perovskite 在 glass、ITO、Si、polymer substrate 上可能给出不同 `dE_g/dT`。如果不处理 strain，就会把 substrate-induced effect 错误归因于 EPC 或 distortion。

测量建议：

- GIWAXS peak position 分离 in-plane/out-of-plane lattice constants。
- 同组分做 powder/single crystal/free-standing film/substrate film 对照。
- 使用 wafer curvature 或 Raman peak shift 辅助应力估计。

### 2.7 非本征光谱项

PL peak shift 中的非本征项：

```text
Delta_nonideal =
Delta_BM(n)
+ Delta_trap(I,t)
+ Delta_ion(T,I,t)
+ Delta_phase(T,I,t)
+ Delta_heat(I)
+ Delta_degradation(t)
```

判别方法：

- `Delta_BM`：power-dependent absorption/PL；高载流子密度下 absorption edge 与 PL 同步蓝移。
- `Delta_trap`：低功率到高功率 PL peak 和 linewidth 是否系统变化；TRPL 是否出现 trap saturation。
- `Delta_ion/phase`：light-soaking 后是否出现新低能 PL peak、PL mapping 是否变得不均匀、GIWAXS/XRD 是否出现 peak splitting。
- `Delta_heat`：改变 chopping frequency 和 duty cycle，检查 peak shift 是否跟平均功率而不是 photon flux 相关。
- `Delta_degradation`：heating-cooling cycle 是否不可逆。

这些项不是主模型的“噪声”，而是需要被实验 protocol 排除或单独建模的 competing mechanisms。

## 3. 同一样品复合解耦的实验反演方案

### 3.1 数据集设计

对每个样品，建议收集同一批次、同一基底、同一封装条件下的数据：

| 数据 | 自变量 | 主要锁定参数 | 作用 |
|---|---|---|---|
| absorption/reflectance | T | `E_opt(T)` | 主 bandgap observable |
| low-power PL | T | `E_PL(T)`, FWHM | 高灵敏 optical response |
| power-dependent PL | I, T | carrier/trap shift | 排除非本征 PL shift |
| pressure absorption/PL | P | `partial E/partial P` | 约束 volume deformation potential |
| temperature GIWAXS/XRD | T | `a,b,c,V,phase` | 约束 thermal expansion 和 phase transition |
| GIWAXS/PDF/EXAFS | T | `eta_j(T)` | 约束 distortion |
| Raman/THz | T | `omega_lambda(T)`, linewidth | 约束 EPC oscillator modes |
| heating-cooling cycle | T, t | hysteresis | 判断 ion migration/irreversibility |
| PL mapping | x,y,t | heterogeneity | 判断 phase segregation |

### 3.2 反演顺序

1. 用 absorption/reflectance 确定主 `E_opt(T)`，PL 只作为辅助。
2. 剔除相变区或分段拟合相变前后区间。
3. 用 GIWAXS/XRD 得到 `V(T)` 和 anisotropic strain。
4. 用 pressure data 与 bulk modulus 得到初始 `TE` contribution。
5. 用 structural refinement 得到 `eta_j(T)`，结合 DFT/文献 deformation potential 得到 distortion contribution。
6. 用 Raman/THz 约束 phonon modes，对剩余本征项做 EPC fit。
7. 用 power/time-dependent PL 和 heating-cooling hysteresis 估计非本征项。
8. 全局 Bayesian 或 constrained least-squares fitting，输出贡献比例和置信区间。

### 3.3 推荐全局拟合形式

```text
E_obs^m(T,P,I,t)
= E_0^m
+ C_m^QP * [
     Delta E_TE(V)
   + Delta E_dist(eta)
   + Delta E_EPC(T, omega)
   + Delta E_strain(epsilon)
  ]
+ Delta E_optical^m(E_b, Stokes)
+ Delta E_nonideal^m(I,t)
+ error_m
```

其中 `m` 表示不同观测通道：

- absorption
- reflectance
- PL
- EL

这样做的优点是不同观测通道共享同一个 `E_QP`，但允许各自有不同 optical/nonideal correction。

## 4. 设备与实验实现

### 4.1 PL/absorption 平台改造

最低版本：

- cryostat 或 Linkam stage：80-360 K。
- N2/vacuum chamber：避免水氧。
- 同轴 PL + reflectance/absorption：不要只测 PL。
- calibrated sample-surface temperature：热台温度不等于样品表面温度。
- variable excitation density + chopper：区分 photon flux 与 average heating。
- automated heating/cooling cycles：判断 hysteresis 和 irreversible drift。

增强版本：

- pressure cell compatible optical path：同一光谱系统做 pressure-dependent spectra。
- microscope PL mapping：检查空间均匀性和相分离。
- low-frequency Raman/THz：锁定 soft phonon 和 Pb-X-Pb bending/stretching modes。
- environmental control：humidity/oxygen/light soaking protocol 标准化。

### 4.2 结构表征要求

至少需要：

- temperature-dependent XRD/GIWAXS：得到 lattice constants、phase transition、texture。
- in-plane/out-of-plane peak separation：薄膜应变必须区分。
- PDF 或 EXAFS：如果要主张 local distortion，平均 XRD 不够。

如果没有 PDF/EXAFS，则 distortion 只能谨慎表述为 average octahedral tilt/structural order parameter，不能声称完整 local distortion。

## 5. 材料与器件路线

### 5.1 第一阶段材料

建议体系：

- MAPbI3：文献对照强，但相变和 MA disorder 明显。
- FAPbI3：器件相关性强，但相稳定性需控制。
- CsxFA1-xPbI3：Cs 调控 lattice/tilt/phase stability。
- FA/Cs Pb(I1-yBry)3：后续连接 mixed-halide phase segregation。

第一阶段不建议直接做：

- 2D perovskites：exciton binding、self-trapping 和 dielectric confinement 会使 `E_PL` 与 `E_QP` 差距更大。
- Sn perovskites：氧化和缺陷变量太多。
- 大量 additives：变量过多，不利于建立 baseline。

### 5.2 低 |dEg/dT| 设计原则

模型预测应寻找：

- `TE` 与 `distortion` 贡献符号相反且量级接近的组成。
- EPC contribution 较小或被多 phonon mode 部分抵消的组成。
- substrate-induced strain contribution 小且 heating-cooling hysteresis 低的薄膜。
- residual drift 小的组分，避免低 `|dEg/dT|` 只是 ion migration 假象。

### 5.3 器件验证

推荐 p-i-n：

```text
ITO / NiOx or SAM / perovskite / C60 / BCP / Ag
```

验证指标：

```text
TPCE = (1/PCE) dPCE/dT
dVoc/dT
dJsc/dT
dFF/dT
EQE(T)
EL(T)
MPP(T,t)
```

注意：低 `|dEg/dT|` 不一定带来低 `TPCE`。器件温度系数可能被 interface recombination、transport layer mobility、contact barriers 和 ion migration 主导。因此器件验证要把 `dVoc/dT`、`dJsc/dT`、`dFF/dT` 分开看。

## 6. 与相分离和 solvent/additive screening 的连接

不能把 blueshift/redshift 直接等同于 phase stability。更专业的连接方式是：

```text
Residual(T,I,t)
= E_obs - E_model,intrinsic
```

如果 residual 具有以下特征，则更可能与 ion migration/phase segregation 有关：

- 随 light-soaking time 单调增长。
- heating-cooling cycle 有 hysteresis。
- PL mapping 出现低能 domain。
- mixed-halide sample 出现 red-shifted shoulder 或 dual emission。
- GIWAXS/XRD 出现 peak splitting 或 composition-dependent phase signatures。

additive screening 可以使用以下 descriptors：

- intrinsic `|dE_QP/dT|`
- residual drift rate under illumination
- phase segregation onset time
- PL spatial heterogeneity index
- heating-cooling hysteresis area
- ion-migration activation energy from temperature-dependent drift
- strain relaxation coefficient from GIWAXS

这样 additive 的评价不只是“PL 不漂移”，而是判断它降低的是本征温度敏感性、应力、缺陷填充，还是离子迁移。

## 7. Mermaid 流程图

```mermaid
flowchart TD
    A[Define observable: PL is not equal to QP bandgap] --> B[Same-batch perovskite thin films]

    B --> C1[Absorption/reflectance vs T]
    B --> C2[Low-power PL vs T]
    B --> C3[Power/time-dependent PL]
    B --> C4[Pressure spectroscopy]
    B --> C5[Temperature GIWAXS/XRD]
    B --> C6[PDF/EXAFS or refined GIWAXS]
    B --> C7[Raman/THz phonon spectroscopy]

    C1 --> D1[Primary Eopt(T)]
    C2 --> D2[PL peak and linewidth]
    C3 --> D3[Carrier/trap/photoheating controls]
    C4 --> D4[Volume deformation potential]
    C5 --> D5[V(T), anisotropic strain, phase]
    C6 --> D6[Distortion order parameters eta(T)]
    C7 --> D7[Phonon modes and EPC constraints]

    D1 --> E[Global inverse model]
    D2 --> E
    D3 --> E
    D4 --> E
    D5 --> E
    D6 --> E
    D7 --> E

    E --> F1[Thermal expansion term]
    E --> F2[Internal distortion term]
    E --> F3[EPC Fan/Debye-Waller or oscillator term]
    E --> F4[Film strain term]
    E --> F5[Optical correction: Eb and Stokes]
    E --> F6[Nonintrinsic residual: trap, ion, phase]

    F1 --> G[Contribution ratios with uncertainty]
    F2 --> G
    F3 --> G
    F4 --> G
    F5 --> G
    F6 --> G

    G --> H[Predict low |dEQP/dT| compositions]
    H --> I[Fabricate films and validate Eg(T)]
    I --> J[Fabricate p-i-n devices]
    J --> K[Measure TPCE, Voc(T), Jsc(T), FF(T), EQE(T)]
    K --> L[Check whether bandgap descriptor predicts device temperature coefficient]
    L --> M[Extend residual descriptors to mixed-halide additive screening]
```

## 8. 关键文献证据

1. Wright, A. D. et al. Electron-phonon coupling in hybrid lead halide perovskites. *Nature Communications* 2016.  
   证据：多种 hybrid lead halide perovskites 具有 anomalous temperature-dependent PL/bandgap shift，并且相变会导致 abrupt spectral shifts。  
   https://pmc.ncbi.nlm.nih.gov/articles/PMC4894981/

2. Francisco-Lopez, A. et al. Equal Footing of Thermal Expansion and Electron-Phonon Interaction in the Temperature Dependence of Lead Halide Perovskite Band Gaps. *Journal of Physical Chemistry Letters* 2019.  
   证据：MAPbI3 中 EPC 只能解释约 40% 的总 temperature-induced gap shift，thermal expansion 不能忽略。  
   https://doi.org/10.1021/acs.jpclett.9b00876

3. Rubino, A. et al. Disentangling Electron-Phonon Coupling and Thermal Expansion Effects in the Band Gap Renormalization of Perovskite Nanocrystals. *Journal of Physical Chemistry Letters* 2021.  
   证据：通过温变和压变 spectroscopy 分离 MAPbI3 nanocrystals 中 EPC 与 TE contribution。  
   https://pubmed.ncbi.nlm.nih.gov/33382272/

4. Wang, S. et al. Temperature-Dependent Band Gap in Two-Dimensional Perovskites: Thermal Expansion Interaction and Electron-Phonon Interaction. *Journal of Physical Chemistry Letters* 2019.  
   证据：2D perovskites 中 temperature-dependent bandgap 由 thermal expansion interaction 与 EPC 竞争决定。  
   https://pubmed.ncbi.nlm.nih.gov/31050442/

5. Prasanna, R. et al. Band Gap Tuning via Lattice Contraction and Octahedral Tilting in Perovskite Materials for Photovoltaics. *Journal of the American Chemical Society* 2017.  
   证据：lattice contraction 与 octahedral tilting 对 bandgap 的影响方向不同，因此 distortion 不能并入单一 thermal expansion 项。  
   https://doi.org/10.1021/jacs.7b04981

6. Yamada, Y. and Kanemitsu, Y. Electron-phonon interactions in halide perovskites. *NPG Asia Materials* 2022.  
   证据：综述 halide perovskites 中 polaron formation、EPC 机制及其仍处于争议中的问题。  
   https://www.nature.com/articles/s41427-022-00394-4

7. Zacharias, M. et al. Anharmonic electron-phonon coupling in ultrasoft and locally disordered perovskites. *npj Computational Materials* 2023.  
   证据：ultrasoft/local-disorder perovskites 中 harmonic EPC 模型不足，local disorder 和 anharmonicity 会改变 bandgap renormalization。  
   https://www.nature.com/articles/s41524-023-01089-2

8. Hoke, E. T. et al. Reversible photo-induced trap formation in mixed-halide hybrid perovskites. *Chemical Science* 2015.  
   证据：mixed-halide perovskites 光照下出现可逆 photoinduced spectral changes，与 halide segregation/trap formation 相关。  
   https://pubs.rsc.org/en/content/articlehtml/2015/sc/c4sc03141e

9. VASP Wiki. Bandgap renormalization due to electron-phonon coupling.  
   证据：nonadiabatic AHC bandgap renormalization 已是可计算 workflow，可选择 gap states 计算 Fan/DW self-energy。  
   https://www.vasp.at/wiki/index.php/Bandgap_renormalization_due_to_electron-phonon_coupling

10. Ponce, S., Lihm, J.-M., Park, C.-H. Verification and validation of zero-point electron-phonon renormalization of the bandgap, mass enhancement, and spectral functions. *npj Computational Materials* 2025.  
    证据：比较 AHC、DFPT/WFPT 和 frozen-phonon methods，说明 EPC bandgap renormalization 的方法学仍需验证和误差控制。  
    https://www.nature.com/articles/s41524-025-01587-5

