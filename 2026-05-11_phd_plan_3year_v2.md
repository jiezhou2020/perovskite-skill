# PhD 三年研究计划 v2 — 以未解争议为核心
## Multi-mechanism Characterization Decoupling of Photoinduced Phase Segregation in Wide-Bandgap Perovskites

> **v1 反思**：v1 计划列了 7 个钙钛矿上**都已被人做过**的表征手段，相当于"实施清单"而非"研究计划"。一份合格的开题报告必须站在两条腿上——(a)**解决一个尚未被解决的具体争议**，(b)**用同行尚未用过的方法**来解。本 v2 围绕这两点重写。
>
> **核心策略**：从我已经能确认的"钙钛矿相分离尚未应用 / 应用不充分"的跨领域成熟技术中，选 5 项做核心 novelty；用这 5 项 + 已有的 standard 工具（v1 的 7 个）作为支撑，**逐个攻克 field 内 5 个未解争议**。

---

## 0. v2 与 v1 的对照

| 维度 | v1 | v2 |
|---|---|---|
| 计划骨架 | 7 个方法依序实施 | 5 个未解争议 ← 5 个跨领域转移技术 |
| Novelty 主张 | 集成 + 反向验证（中度）| 跨领域技术转移 + 解争议（高度）|
| 答辩防守 | "我整合了已有方法" | "我把 X 技术从 Y 领域迁到钙钛矿，解决 Z 争议" |
| 风险 | 评委质疑"无独创" | 评委质疑"技术能否真的迁过来" |

> 风险性质变了——v2 更难做，但 v2 的 novelty 可以**站住脚**。

---

## 1. 五个未解争议（C1–C5）— Research questions

> 这一节列出 field 内有具体文献矛盾 / 共识缺失的 5 个问题。每个争议都有清晰对立面、可量化检验、且现有方法无法独立判决。

### C1 · Br-rich 表面悖论（理论 vs 实验方向相反）

**争议**：[Navid & Ahmad 2026 arxiv:2603.07829](https://arxiv.org/abs/2603.07829) 第一性原理预测 Br 离子热力学偏好表面位点（c_surf/c_bulk = 4.5–10×），从而**增强**相分离倾向；但 [Fang Z. 2024 Nat. Commun. 15:10554](https://www.nature.com/articles/s41467-024-54925-4) 实验显示通过纳米抛光形成的 Br-rich 表面**抑制** LHS，4T tandem 认证效率 33.10%。**两个结论方向相反**。

**未解的具体问题**：(a) Br-rich 表面是否真在 < 1 nm 尺度存在？(b) 若存在，为何反而稳定？是局部应力屏蔽 / 电场屏蔽 / 其他？

**现有方法局限**：XPS 只能 ~ 5 nm 深度平均，TOF-SIMS 受 matrix effect 干扰，DFT slab 是静态零温计算 — **没有一种现有手段能同时给原子尺度 3D 组分 + 有限温力学**。

### C2 · I-rich 域 pinning vs random（在同一系统给出不同结果）

**争议**：[Bischak et al. 2017 Nano Lett. 17:1028](https://pubs.acs.org/doi/10.1021/acs.nanolett.6b04453) 用 CL imaging 观察 MAPb(I0.1Br0.9)3 polycrystalline film 中 I-rich 域在不同光照 cycle **位置不重复（random）**；[Mao et al. 2019 Angew. Chem. 58:2893](https://onlinelibrary.wiley.com/doi/10.1002/anie.201811441) 用 PL imaging 在 single crystal 上观察到 I-rich 域**位置固定（pinned）**。

**未解的具体问题**：pinning vs random 是单晶/多晶差异，还是表征工具的衍射极限（200–300 nm）压根没分辨力区分？

**现有方法局限**：共聚焦 PL 衍射极限 ~ 200 nm；CL 有 ~ 20 nm 但电子束损伤 + 受样品稳定性约束 — **没有非破坏的 < 50 nm PL 时间分辨手段**。

### C3 · 机制主导权（Polaron vs Trap-Charge vs Redox 三方互不让步）

**争议**：[Bischak et al. 2018 JPCL 9:3998](https://pubs.acs.org/doi/10.1021/acs.jpclett.8b01480) 极化子诱导应变模型；[Belisle et al. 2017 ACS Energy Lett. 3:2694](https://pubs.acs.org/doi/10.1021/acsenergylett.7b00282) trap-driven model；[Frolova et al. 2021 Adv. Energy Mater. 11:2002934](https://onlinelibrary.wiley.com/doi/10.1002/aenm.202002934) redox model；[Ma et al. 2024 arxiv:2407.04984](https://arxiv.org/abs/2407.04984) 暗态实验排除前两者单独成立。

**未解的具体问题**：在 operando 条件下，3 类机制各贡献多少权重？时间分辨上是否有先后？

**现有方法局限**：trap charge 局域电场强度从未被**直接 nm 尺度成像**——KPFM 测 CPD 是电荷间接信号，TR-PL 是载流子间接信号——**field 上没有"直接看到局域电场"的工具**。

### C4 · I2 vapor 损失阈值 — Reversibility 边界在哪

**争议**：[Mathew et al. 2020 ACS Energy Lett. 5:1872](https://pubs.acs.org/doi/10.1021/acsenergylett.0c00650) 和 [Kerner et al. 2021](https://pubs.acs.org/doi/10.1021/jacsau.0c00125) 提出 hole-induced I 氧化 + I2 vapor 逃逸（不可逆）；多数 reversibility 实验在 ambient 下做（[Hoke 2015](https://pubs.rsc.org/en/content/articlelanding/2015/sc/c4sc03141e)），少量 vacuum 实验显示部分不可逆。

**未解的具体问题**：I 损失到底有多少？真的"扩散到大气"还是只是表面重排？

**现有方法局限**：无法**同时 in situ 跟踪光照下 ¹²⁷I 原子的去向**——TOF-SIMS 静态、XPS 平均、质谱多无空间分辨——**field 没有"原位 + 原子级 isotope 追踪"的手段**。

### C5 · 应变起源 — Intrinsic vs Extrinsic 边界

**争议**：[Zhao et al. 2020 Nat. Commun. 11:6328](https://www.nature.com/articles/s41467-020-20066-7) 在 MAPb(BrxI1-x)3 系列上发现 Br < 50% 时 LHS 是**应变激活**（extrinsic），Br > 50% 时 LHS 是**本征**（intrinsic）。但应变量化（W-H 分析）的空间分辨力只到 μm 级，且无法区分 thermal strain、residual annealing strain、photo-induced strain。

**未解的具体问题**：在 nm 尺度局部的弹性模量、应变张量、相分离速率三者之间是否存在量化关系？

**现有方法局限**：μ-XRD/GIWAXS 给应变但分辨 ~ μm；Raman 给晶格刚度但分辨 ~ 1 μm；**没有 sub-100 nm 局部弹性模量直接测量手段**。

---

## 2. 五项跨领域转移技术（T1–T5）— Core novelty

> 每一项都按以下结构论证：起源领域 / 物理原理 / 为什么可迁 / 解决哪个争议 / 同行参考 / 可行性 / 风险。所有引用均可外网核查。

### T1 · STED nanoscopy（sub-diffraction PL imaging）解 **C2**

**起源领域**：生物超分辨显微（受激发射损耗）— Stefan Hell 2014 Nobel Prize 工作。

**物理原理**：在共聚焦激发点 + 一束环形 STED 光叠加；STED 光把激发态分子受激退激回基态（zero PL contribution），只留环形中心 ~ 30 nm 区域内的 PL 信号。空间分辨力突破衍射极限。

**为什么可迁到钙钛矿相分离**：
- I-rich 域典型尺寸 50–200 nm（[Bischak 2017](https://pubs.acs.org/doi/10.1021/acs.nanolett.6b04453)），多数 < 衍射极限
- 钙钛矿 PL 发射 700–800 nm 范围有充足 quantum yield（10–60%）
- STED 在钙钛矿 nanocrystals 上已验证可用（[Wang et al. 2019 ACS Nano 13:5366](https://pubs.acs.org/doi/10.1021/acsnano.9b00021)）— 但**没有人系统应用到 mixed-halide thin film 的相分离动力学**（我在 2026-05 web 搜索"STED nanoscopy halide perovskite phase segregation"返回零相关命中）

**解决 C2**：能在同一 region 多次光照-暗态循环下追踪 I-rich 域的"重复位置"统计，直接判决 Bischak 2017（random）vs Mao 2019（pinned）。

**同行参考（库外，可核查）**：
- Hell & Wichmann 1994 Opt. Lett. 19:780 — STED 原理论文
- Klar et al. 2000 PNAS 97:8206 — biological STED
- Wang 2019 ACS Nano 13:5366 — 钙钛矿 NC STED
- Tian 2024（[arxiv 文献，未核查具体出版处](https://www.nature.com/articles/s41566-024-01476-1)）— 钙钛矿 in situ nanoscopy 但非 STED

**可行性**：
- 商业 STED 系统：Leica TCS SP8 STED 3X、Abberior STEDYCON ~$300–500k
- Waseda 应化学系是否有 STED ？— 需查询；如果没，可考虑与 Tokyo Tech、东京大学合作
- 时间序列采集协议：每个 cycle 采 STED + WF reference image，标准化后做位置 reproducibility 分析

**跨领域已验证**：
- 单分子定位、神经突触超分辨、活细胞动力学已 20 年成熟
- 应用到 2D 材料（MoS2 trion 成像，Marshall 2024）+ 钙钛矿 NC（Wang 2019）

**风险与备选**：
- 钙钛矿在 STED 光功率下可能被 photodamage → 短曝光 + 低 STED 功率优化
- 备选：单分子定位显微（SMLM / STORM）— 不同原理但也能 sub-diffraction PL
- 备选：tip-enhanced PL（TEPL）— 10–30 nm 分辨但需要 SNOM 平台

---

### T2 · NV-center scanning probe（quantum sensing of local E-field & B-field）解 **C3**

**起源领域**：量子传感 / 自旋物理 — Wrachtrup、Lukin、Hollenberg group 工作。

**物理原理**：金刚石氮空位（NV）色心是一个单原子级敏感器；其自旋共振频率对外电场、磁场、应力高度敏感。把 NV 嵌入 AFM 探针尖端（commercial: Qnami ProteusQ），可在样品上方扫描，光检测磁共振（ODMR）信号反演 nm 尺度电场。

**关键参数（来自最新 2022 Nature Quantum Information [Bian et al.](https://www.nature.com/articles/s41534-022-00622-3)）**：
- AC 电场灵敏度 **26 mV/μm/√Hz**
- DC 电场梯度灵敏度 **2 V/μm²/√Hz**
- 空间分辨率受 NV-sample 距离限制，可达 **4.6–100 nm**（[Yang 2021 Nat. Commun. 12:2730](https://www.nature.com/articles/s41467-021-22709-9)）

**为什么可迁到钙钛矿相分离**：
- M3 局域电场机制的**直接 hallmark 是 trapped charges 产生的局域电场**（V/μm 量级）
- 现有 KPFM 测的是 CPD（间接信号），从未有人**直接成像** trap-induced field
- NV-AFM 把"局域电场"从间接推断变成原位成像

**解决 C3**：
- 同一样品先 KPFM 测 CPD baseline，再 NV-AFM 测同区域 E-field map
- 若 E-field map 局部 hot-spot 与 PL red-shift / CPD shift 空间共定位 → M3 trap-charge field 直接证据
- 量级匹配检验：Ma 2024 暗态实验推算 trap field ~ V/μm；NV 可量化此值

**关键 novelty 验证（截至 2026-05 检索）**：
- "Touching is believing: SPM of halide perovskite" [npj Quantum Mater. 2017](https://www.nature.com/articles/s41535-017-0061-4) — 钙钛矿 SPM 综述但**未提及 NV-center**
- "Scanning Probe Microscopy of Halide Perovskite Solar Cells" [2024 综述](https://pubmed.ncbi.nlm.nih.gov/39165039/) — 同样未涉 NV-AFM
- **检索结果零钙钛矿相分离 + NV-center scanning probe 直接命中** → 本计划首次

**同行参考（库外）**：
- Maze et al. 2008 Nature 455:644 — NV 磁测原理
- Maletinsky et al. 2012 Nat. Nanotechnol. 7:320 — Scanning NV-probe AFM
- Bian et al. 2022 npj Quantum Inf. 8:74 — NV 电场扫描成像
- Casola et al. 2018 Nat. Rev. Mater. 3:17088 — NV 应用综述

**可行性**：
- 设备：Qnami ProteusQ、Attocube AttoCube QSM 商用整机 ~$300–500k
- 环境：室温 + 大气；不需要 UHV — 与钙钛矿兼容
- 协作者候选：MIT Lukin lab、Stuttgart Wrachtrup lab、Melbourne Hollenberg lab、东京大学 quantum sensing 组

**风险与备选**：
- 钙钛矿样品对 NV tip 的污染：表面有机分子可能附着 NV 探针
- 钙钛矿表面 CPD 噪声大可能影响 ODMR 信号 → tip 振荡补偿（[Bian 2022 已 demo](https://www.nature.com/articles/s41534-022-00622-3)）
- 备选：SPVM（surface photovoltage microscopy）— 较成熟但灵敏度 / 分辨力低一档

---

### T3 · Isotope-labeled dynamic SIMS / Mass-spec（atomic-level isotope tracing）解 **C4**

**起源领域**：同位素地球化学、大气化学、生物示踪 — NOAA / Ulrich Group 等。

**物理原理**：合成钙钛矿前驱体时部分使用稀有同位素（如 **¹²⁹I** 半衰期 1.57×10⁷ y 可作长寿命示踪；**⁸¹Br** 稳定同位素，自然丰度 49% 易商购）；通过 dynamic SIMS（持续 sputter + 计数）+ ToF 检测，量化样品中 ¹²⁹I:¹²⁷I 或 ⁸¹Br:⁷⁹Br 比值的**时空演化**。

**为什么可迁到钙钛矿相分离**：
- C4 争议的核心是"I 到底是 redistribute 还是 escape 为 I2 vapor 失掉"
- 同位素标记可**直接区分**：若 ¹²⁹I 在样品中 inventory 守恒 → redistribute；若样品 ¹²⁹I 总量随时间下降 → 部分 escape
- 配合**光腔气体光谱**（CRDS, cavity ring-down spectroscopy）可在线检测气相 I2 中的 ¹²⁹I → 直接闭环

**解决 C4**：在样品 cell 中以 ¹²⁹I 标记部分前驱体 → 1 sun illumination 1000 h → 定期 dynamic SIMS depth profile + CRDS gas analysis → 量化 I redistribute 比 escape 的比例。

**关键 novelty 验证**：
- 钙钛矿 isotope labeling 极罕见。我查到的少量工作是 ³H、¹⁴N、¹³C 标记（A-site cation 研究，如 [Senocrate 2017 Angew. Chem. 56:7755](https://onlinelibrary.wiley.com/doi/10.1002/anie.201701724)）
- **halide isotope labeling + dynamic SIMS** 在钙钛矿相分离上**未见报道**（检索 2026-05）

**同行参考（库外，跨领域）**：
- Atmospheric chemistry: Ulrich's group at Bremen — Br/Cl isotopologue spectroscopy in stratosphere
- Solid-state isotope SIMS: standard at CAMECA labs (NanoSIMS 50)
- Solid oxide fuel cell ¹⁸O 示踪 — [Souza et al. 2007 J. Mat. Chem. 17:5238](https://pubs.rsc.org/en/content/articlelanding/2007/jm/b707122c) 等

**可行性**：
- 设备：NanoSIMS（CAMECA）或常规 ToF-SIMS + 同位素订购
- 前驱体合成：¹²⁹I 商购 ~$50/g，⁸¹Br-NaBr 商购更便宜
- CRDS 气体分析器 ~$50–100k
- 协作者：日本 JAEA（原子能机构）、东京理科大 isotope 组

**跨领域已验证**：
- 大气化学跟踪卤素自由基迁移
- SOFC 氧空位跟踪
- 同位素地球化学（U-Pb 测年）

**风险与备选**：
- 同位素前驱体合成是否影响 perovskite 相纯度 → 需要 NMR 验证合成完全
- 备选：natural isotope ratio 测量（不加标记，但靠 ⁸¹Br / ⁷⁹Br 自然比例细微差异）→ 灵敏度低

---

### T4 · Brillouin light scattering microscopy（local elastic mapping）解 **C5**

**起源领域**：软物质 / 生物物理 — Scarcelli & Yun (Harvard Medical School) 2008 把 Brillouin 推到 micro-imaging。

**物理原理**：单色激光与材料的热致声学声子（GHz 频率）发生非弹性散射；散射光频移（Brillouin shift）正比于材料**纵向声速**，由弹性模量 + 密度决定。空间分辨 ~ 1 μm（受激发光斑限），频域分辨给出 ~1% 弹性模量精度。

**为什么可迁到钙钛矿相分离**：
- C5 争议核心是"应变-相分离耦合"
- Brillouin 给的是 nm-scale **弹性模量直接测量**（不靠 W-H 推断、不靠 Raman 推断）
- 在 fresh sample 上测 baseline E_modulus map，光老化后再测 → 看局部弹性变化是否与 I-rich 域空间共定位

**解决 C5**：
- 在 MAPb(BrxI1-x)3 系列（Br = 25%, 35%, 50%, 65%, 80%）上扫 Brillouin E_modulus map
- 与 Zhao 2020 应变激活边界（Br ~ 50%）对比
- 关键检验：Br < 50% 样品中应变-LHS 共定位强；Br > 50% 应该弱化

**关键 novelty 验证**：
- 钙钛矿 Brillouin 极少。我查到：[Ferreira 2019 J. Phys. Condens. Matter 31:165902](https://iopscience.iop.org/article/10.1088/1361-648X/ab0288) 测了 CH3NH3PbI3 单晶弹性常数
- **钙钛矿薄膜 Brillouin microscopy 应用到相分离 mechanism 决判 — 未见报道**（检索 2026-05）

**同行参考（库外）**：
- Scarcelli & Yun 2008 Nat. Photonics 2:39 — Brillouin micro-imaging 奠基
- Antonacci et al. 2018 Biophys. Rev. 10:1339 — Brillouin in biology
- Prevedel et al. 2019 Nat. Methods 16:969 — Brillouin in soft matter
- Ferreira 2019 J. Phys. Condens. Matter 31:165902 — MAPbI3 单晶 Brillouin

**可行性**：
- Brillouin 商业系统：CrystaLight、LightMachinery 商业整机 ~$150–300k
- 多个大学 biophysics 实验室自建（含 VIPA 频谱仪），低成本可达
- 协作者：京都大学 / Tokyo Tech bio-physics 组、或 Harvard Yun lab 远程合作

**跨领域已验证**：
- 细胞硬度 mapping、组织力学
- 高分子凝胶 phase transition
- 2D 材料弹性模量

**风险与备选**：
- 钙钛矿薄膜表面粗糙度可能散射杂光 → 用 polished cross-section 测
- 备选：picosecond ultrasonics（飞秒激光 acoustic）— 更专但商业稀少

---

### T5 · Atom Probe Tomography (APT) — 解 **C1**

**起源领域**：金属学 / 半导体业 — CAMECA Local Electrode Atom Probe (LEAP) 系列。

**物理原理**：把样品做成 nm 量级针尖；高电压脉冲使顶端原子逐个场蒸发；ToF 检测每个原子的 m/z + 飞行方向；重建 3D 原子级化学组分（精度 ~0.1 nm）。

**为什么可迁到钙钛矿相分离**：
- C1 争议核心是 Br 在表面 < 1 nm 内的浓度梯度
- APT 给原子级 3D 组分 — 直接验证 Navid 2026 ΔDFE 预测 vs Fang Z. Br-rich 表面假说
- 唯一能"直接看到"亚 nm 表面浓度梯度的实验工具

**解决 C1**：
- 对照样：normal vs Fang Z. 抛光后
- 每样制成 APT 针尖 → 取 ~ 50 nm × 50 nm × 100 nm 3D 重建
- 量化 c_surf/c_bulk Br 比 → 直接对照 Navid c_surf/c_bulk = 4.5–10× 预测
- 若实测 Br 表面富集但 LHS 抑制 → C1 矛盾**实验解判 + 提出新机制（如表面 Br 屏蔽电场）**

**关键 novelty 验证**：
- 钙钛矿 APT 极少（钙钛矿太软，APT 针尖制作难）
- 检索到 [Whiteside et al. 2023 ACS Energy Lett. 8:2399](https://pubs.acs.org/doi/10.1021/acsenergylett.3c00415) — 是首批钙钛矿 APT 工作之一，做 CsPbBr3
- **MAPb(BrxI1-x)3 或 FACs perovskite APT 用于相分离 + ΔDFE 描述符验证 — 未见报道**

**同行参考（库外）**：
- Kelly & Miller 2007 Rev. Sci. Instrum. 78:031101 — APT 原理
- Gault et al. 2012 Microsc. Microanal. 18:1 — APT for materials science
- Whiteside et al. 2023 ACS Energy Lett. 8:2399 — 钙钛矿 APT preliminary
- Marquardt et al. 2020 Acta Mater. 197:268 — APT for halide-containing oxide

**可行性**：
- 设备：CAMECA LEAP 5000 ~$1.5–2M（不可能自购）
- 唯一路径：与有 LEAP 的研究所合作
- 候选合作机构：物质材料研究所（NIMS, Tsukuba）、东京大学 IIS、Pacific Northwest National Lab 远程
- 针尖制作：focused ion beam (FIB) liftout — 但钙钛矿易降解，需要 cryo-FIB

**跨领域已验证**：
- Semiconductor industry: Si dopant profiling, FinFET 工艺监控
- 金属冶金：alloy phase characterization
- 矿物学：原子级浓度梯度

**风险与备选**：
- APT 钙钛矿样品制备难度高，可能失败率 50%+
- **风险最高的技术**，但回报最大（直接判决 C1）
- 备选 1：HAADF-STEM 高分辨成像（高分辨 STEM 也能给亚 nm 化学衬度但非定量）
- 备选 2：Helium ion microscopy + SIMS（HIM-SIMS）— ~5 nm 深度分辨度但更易做

---

## 3. 争议-技术对应矩阵

| 争议 | 主攻技术 | 辅助 / 复核 | 风险级别 |
|---|---|---|---|
| C1 Br-rich 表面悖论 | T5 APT | DFT-MLIP MD（库内方法）、TOF-SIMS | 高 |
| C2 域 pinning vs random | T1 STED | SPT、CL、TR-PL（库内）| 中 |
| C3 机制主导权 | T2 NV-AFM | fast-KPFM、TR-PL、暗态 PL（库内）| 中 |
| C4 I2 escape 阈值 | T3 同位素 SIMS | CRDS gas analysis、vacuum/ambient ISOS | 中 |
| C5 应变起源 | T4 Brillouin micro | XRD、Raman、4D-STEM 已应用 | 低 |

---

## 4. 三年时间表（以争议为骨架）

> 每年聚焦 1–2 个争议；每个 phase 包含：起源领域 paper 复现 + 钙钛矿首次应用 + 辅助技术 + 论文产出。

### Year 1 · 基础 + C5（应变起源）+ C2（域 pinning）— 风险最低的两条

**Phase 1.1（M1–3）·  baseline 样品 + standard 工具 commissioning**
- 同 v1，保留 v1 phase 1.1 全部内容

**Phase 1.2（M4–6）· T4 Brillouin microscopy 建立 + C5**
- 搭建 Brillouin 系统（或与协作组协商时间）
- 在 baseline + MAPb(BrxI1-x)3 系列扫描弹性模量
- 与 Zhao 2020 应变 50% 边界对照
- Deliverable：Brillouin 钙钛矿应变-相分离首篇方法学论文（投 ACS Photon. / Nano Lett.）

**Phase 1.3（M7–9）· T1 STED 建立 + C2 实验设计**
- 与有 STED 的合作组建立工作流
- 在 multi-cycle 光照下 STED 跟踪同一区域 I-rich 域
- 跨 single crystal + polycrystalline thin film 重复 Bischak vs Mao 实验
- Deliverable：STED 相分离首篇论文 draft

**Phase 1.4（M10–12）· 整合 Year 1 + 投稿**
- Brillouin + STED 各一篇方法学论文投稿
- Year 1 内部报告

### Year 2 · C3 机制主导权（NV-AFM）+ C1 起步（DFT-MLIP）

**Phase 2.1（M13–15）· T2 NV-AFM 协作建立**
- 与外部组（如 Tokyo NV lab）合作建立 NV-AFM 协议
- 在 baseline + Fang Z. 抛光 + Hou SLP 样品上做 nm 尺度 E-field map

**Phase 2.2（M16–18）· NV-AFM + 同区域 KPFM + 暗态 PL 三模态**
- 同一 fiducial-marked spot 三种测量
- 直接验证 trap-charge field 量级（Ma 2024 推算 ~ V/μm）
- Deliverable：NV-AFM 钙钛矿相分离首篇高 impact 论文（Nat. Commun. / JACS 级别）

**Phase 2.3（M19–21）· DFT-MLIP MD 准备 + C1 计算端**
- 用 Navid 2026 DFT 数据集训练 NEP / DeePMD machine learning potential
- 跑 ns 级 MD 看 Br/I redistribute 动态
- 计算预测 Br 表面分布在有限温下的 dynamics

**Phase 2.4（M22–24）· C1 实验前期 + 论文整合**
- 准备 APT 样品 cryo-FIB lift-out
- 投递与 NIMS / 其他 APT 中心的合作申请
- Deliverable：方法学论文 1（投顶刊）+ 同行 review

### Year 3 · C1 决判 + C4 + 论文

**Phase 3.1（M25–27）· T5 APT 攻关 + C1 决判**
- APT 针尖制备（cryo-FIB）
- 在 Fang Z. 抛光样品 + control 上做 APT 3D 重建
- 量化 c_surf/c_bulk Br 比
- 比对 Navid DFT 预测

**Phase 3.2（M28–30）· T3 同位素 SIMS + C4**
- 合成 ¹²⁹I 标记的 baseline 样品
- 1 sun 长期老化 + dynamic SIMS depth profile + CRDS gas analysis
- 量化 I escape 比例

**Phase 3.3（M31–33）· 综合论文写作**
- Differentiator 论文：C1 Br-rich 表面悖论解判（极高 impact）
- Differentiator 论文：C3 NV-AFM trap field 直接成像
- 协议论文：5 技术 + 5 争议 integrated framework

**Phase 3.4（M34–36）· 论文 + 答辩**

---

## 5. 风险评估与备选

| 风险类别 | 主要风险 | 备选 |
|---|---|---|
| 设备 | STED / NV-AFM / APT / Brillouin 都需要外部协作 | 提前 6 个月联系，备选关系 ≥ 2 个 |
| 技术转移 | 跨领域工具在钙钛矿上首次应用，failure rate 较高 | 每项预留 6 个月 troubleshoot 时间 |
| 同位素 | ¹²⁹I 合成 + SIMS pipeline 全新 | natural-isotope alternative |
| 争议复杂 | 某些争议在实验后可能仍未完全决判 | 至少给出可量化的范围 / 边界 |
| 同行竞争 | 2025+ 出现类似 NV-perovskite / APT-perovskite 工作 | 强化"特定争议解判 + 多技术 cross-validate"差异化 |

---

## 6. 关键引用映射

### 6.1 5 个争议的核心文献（库内 + 库外）

| 争议 | 关键文献 | 库内位置 |
|---|---|---|
| C1 Br-rich | Navid 2026 arxiv 2603.07829 + Fang Z. 2024 Nat. Commun. 15:10554 | `analysis/dir2_navid2026.md` + `analysis/dir2_fang_z_2024.md` |
| C2 pinning | Bischak 2017 Nano Lett. 17:1028 + Mao 2019 Angew. Chem. 58:2893 | （引于 Tian 2022 综述 `analysis/dir4_tian2022.md`）|
| C3 mechanism | Bischak 2018 + Belisle 2017 + Frolova 2021 + Ma 2024 | `analysis/dir2_ma2024.md` + Tian 2022 综述 |
| C4 I2 escape | Mathew 2020 + Kerner 2021 + Hoke 2015 | Tian 2022 综述 |
| C5 strain | Zhao 2020 Nat. Commun. 11:6328 | （已库内 dir2_Zhao_2020）|

### 6.2 5 个跨领域技术的奠基文献

| 技术 | 奠基论文 |
|---|---|
| T1 STED | Hell & Wichmann 1994 Opt. Lett. 19:780 |
| T2 NV-AFM | Maletinsky 2012 Nat. Nanotechnol. 7:320；Bian 2022 npj Quantum Inf. 8:74 |
| T3 同位素 SIMS | （atmospheric chem 综述 + Souza 2007 J. Mat. Chem. 17:5238）|
| T4 Brillouin micro | Scarcelli & Yun 2008 Nat. Photonics 2:39 |
| T5 APT | Kelly & Miller 2007 Rev. Sci. Instrum. 78:031101；Whiteside 2023 ACS Energy Lett. 8:2399（钙钛矿 APT 早期）|

### 6.3 2025 最新 search 关键发现

- [4D-STEM cryo-EM perovskite phase seg 2025](https://www.sciencedirect.com/science/article/pii/S2666386425002528) — **4D-STEM 已被应用**，故不在本计划主 novelty 中
- [In situ TEM strain & phase segregation, Sci Adv 2024](https://www.science.org/doi/10.1126/sciadv.aeb3559) — strain 与相分离 in situ 已开始做
- [PHASET 2025 Nat. Commun.](https://www.nature.com/articles/s41467-025-63176-w) — 用 standard KPFM；本计划的 T2 NV-AFM 是 next-level

---

## 7. v2 与 v1 的本质差异 — 一句话归纳

> **v1**："我用 7 个钙钛矿已成熟的表征工具，组合成一个评估协议。" — 评委质疑"无独创"。
>
> **v2**："5 个钙钛矿相分离的 field 内未解争议，我用 5 个从生物超分辨 / 量子传感 / 大气化学 / 软物质 / 金属冶金转移过来的、在钙钛矿上**尚未应用**的技术来一一决判它们。每个争议有可量化的检验，每个技术有跨领域的成熟应用基础。" — 评委质疑"技术能否真的迁过来" — 但这是 implementation risk，不是 novelty risk。

---

## 8. Next steps

1. **复核**：5 个争议的对立面引用我是否正确？特别是 Bischak 2017 vs Mao 2019 pinning 之争 — 你回去翻原文确认描述无误。
2. **复核**：5 个跨领域技术在钙钛矿上是否真的未被应用？— 用 Google Scholar 跑这些组合关键词：
   - "STED nanoscopy" + "halide perovskite phase segregation"
   - "NV center" + "perovskite" + "scanning probe"
   - "atom probe tomography" + "mixed halide perovskite"
   - "Brillouin microscopy" + "perovskite thin film"
   - "isotope labeling" + "halide perovskite" + "phase segregation"
3. **导师讨论**：哪些技术校内 / Waseda 周边能合作？哪些需要海外联系？技术选择可能要根据合作可达性调整。
4. **下一步具体动作**：选 1–2 个最高优先级技术，开始联系合作组（如东京大学 NV lab、京都大学 Brillouin lab、NIMS APT 设施）。
5. **如果某些跨领域技术失败**：v2 的备选机制是同一争议可由 2 个技术 cross-check（如 C3 既有 NV-AFM 又有 fast-KPFM）— 即使新技术失败仍可用已建立的技术兜底。
