---
paper: Tian 2022 Electronics — halide segregation visualization review
direction: dir4 表征解耦
read_date: 2026-05-09
batch: 1
---

# Tian 2022 · 卤素分离可视化技术综述 · 11-field 深读

## 1. 元数据

- **一作 / 通讯**：Liuwen Tian / Rui Wang（西湖大学）· Jingjing Xue（浙大）
- **机构**：Zhejiang University / Westlake University
- **期刊**：Electronics 11, 700 (2022)（MDPI，OA）
- **DOI**：10.3390/electronics11050700
- **方向归属**：dir4（表征解耦） — **机制 × 表征**双索引核心综述
- **类型**：Review，重点在"如何用空间分辨技术看见相分离"

## 2. 研究动机 (Why)

之前关于光致相分离的综述（[36–45]）大多关注"机理 / 影响 / 抑制"三件套，**没有一篇系统综述"如何可视化看见它"**。但作者认为：要构建终极机理框架，必须靠 image-based 直接证据 — 这是 mechanism debate 的实证基石。

## 3. 核心主张 (1 句)

> 用 PL mapping / CL / TEM / EDS / AFM 五类空间分辨技术，可以看见 I-rich domain 的"在哪里、什么时候、长多大"，但**没有一种技术能独立给出唯一机制结论** — 必须多技术 cross-validate，且仍有 fundamental 开放问题（如重复光照下 I-rich 域是否原位再现？）。

## 4. 方法 (How)

综述本身不做实验。但精读其总结的"工具 × 适用范围"映射：

| 工具 | 空间分辨 | 主要适用 | 局限 |
|---|---|---|---|
| 共聚焦 PL mapping | ~300 nm（衍射极限） | I-rich 域形成与演化、晶界 vs 晶内对比 | 无法看 nm 尺度细节 |
| Wide-field PL mapping | μm 量级 | 大区域趋势 | 分辨力低，不适合 nano 研究 |
| **CL imaging（SEM 内）** | **~20 nm** | I-rich 域纳米尺度定位、与 SEM 形貌叠加 | 电子束损伤风险高，需低电压低束流 |
| TEM in situ | sub-Å | 原子/格子级，电子束驱动相分离 | 样品需 5–100 nm 厚，有制样难度，电子束本身就引起相分离 |
| **EDS-TEM** | nm | 元素分布定量（Br/I 比） | 只能 TEM-mode，SEM-EDS 限于 100 nm+ |
| AFM/c-AFM/KPFM | nm | 形貌 + 表面势 + 局部光电流；可视化离子迁移路径 | 仪器多、需校准、CPD 解释复杂 |

**关键案例摘录**（用于工具调色盘）：
- **Tang 2018 / Zhao 2020**：Shear-force SPM + 共聚焦 PL → 35%Br 仅在晶界相分离；65%Br 全膜相分离 — 给"应变激活"判据。
- **Bischak 2017**：CL imaging + 多尺度模型 → 提出极化子模型，I-rich 主要在晶界。
- **Mao 2019**：PL imaging + 单晶 → I-rich 在固定位置反复出现（与 Bischak 不同），仍有争议。
- **Funk 2016**：in situ TEM CsPb(Br0.8I0.2)3 → 5 min 电子束后中心 → CsPbBr3，边缘 → CsPb(Br0.6I0.4)3。
- **Doherty 2020 STEM-EDX + SED**：直接定位 Br/I 比异质区。
- **Frolova 2021 in situ AFM**：CsPbI2Br vs Cs1.2PbI2Br1.2 — 通过相对比、表面势变化定位 I-rich 在晶界 → 与 Br 化学计量相关。

## 5. 量化锚点 + 突破

| 锚点 | 数值 |
|---|---|
| PL mapping vs CL imaging 分辨力 | 300 nm vs **20 nm**（15× 提升） |
| 文献增长率（halide segregation 出版量） | 2015→2021 几近指数级（综述作者图 1） |
| Cs1.2PbI2Br1.2 稳定时长（in situ AFM） | 远高于 CsPbI2Br 化学计量样品（具体倍数未量化） |
| Hoke 2015 阈值（PL 红移） | 60 s 光照内显示，几分钟暗态恢复 |
| Bischak 2017 thermodynamic + polaron 模型 | I-rich 终端组分 ≈ MAPb(I0.8Br0.2)3 |

**该综述的突破**：把"为什么各家结果矛盾"摆上桌 — 例如 I-rich 是否在固定位置反复出现 = open question；GBs 是必要还是非必要 = 在多晶/单晶之间有矛盾。

## 6. 解决的问题

- 把"机制争议"和"表征工具"挂起来：每个机制（热力学 / 极化子 / 载流子梯度 / redox）都有偏好的表征工具与对应实验证据轮廓。
- 给后入门者一份"看哪本论文学哪个工具"的指南。

## 7. 局限

1. 综述只到 2022 年初，**未涵盖 SPVM / fast-KPFM / pp-KPFM / hyperspectral PL** 等近 3 年大量新工具（→ 这正是 Qu 2026 综述的补位空间）。
2. 没有把"工具 × 机制"做成正式方阵；用户的 dir4 就需要补这一步。
3. 对 mechanism 章节虽全面但偏中立，未给出"哪种机制最被现有证据支持"的判断。
4. 几乎不讨论"如何用这些工具反向评估抑制方案"— 这正是用户研究计划的空白。

## 8. 可证伪判据

- **若**一个钙钛矿样品在 PL mapping 下显示晶界 vs 晶内有 r-shift 差异 **且** 在 CL 下确认 I-rich 域空间位置 **且** 在 KPFM 下显示晶界 CPD 较晶内显著偏移 **→** 三角验证支持"晶界主导的局部相分离"；任一条不一致即反驳。
- **若**单晶样品（无 GB）也表现出可逆 r-shift PL → 反驳"GB 必要性"假说，支持"intrinsic property" 假说。
- **若**重复光照-暗态循环下 I-rich 域出现在**固定位置** → 支持"defect-pinned"机制；若每次都新位置 → 支持"random nucleation under driving force"。

## 9. 设备改进钩子

- CL 在 SEM 内增加冷台 + 低 kV 探针 → 减电子束损伤，可对软的 hybrid 钙钛矿做更长时间观测（Tian 2022 已强调）。
- TEM-EDS 替换为 cryo-TEM-EDS → 进一步抑制电子束诱发相分离，分清"光致 vs 电子束致"。
- AFM tip 升级为导电 + 光纤耦合 → 实现 PL-AFM 同步，把 KPFM 的电势与 PL 的局部光致响应耦合（Qu 2026 已展示）。
- **多模态升级**：把 PL mapping + CL + KPFM 三件套同区扫描自动化（参照 Frohna 2024）→ 直接对应用户 dir4 工具调色盘。

## 10. 对博士研究的启示

这是 **dir4 的入门必读**，给用户提供：

1. **工具 × 机制的初步映射** — 用户的"工具调色盘"可以在 Tian 2022 表格基础上再补上 KPFM 时间分辨变体（pp-KPFM, fast-KPFM）和 SPVM 这些 Tian 漏掉的方法（参考 Qu 2026 补全）。
2. **机制 4 分类（thermodynamic / polaron / carrier-trapping / redox）作为 dir4 v3 计划的"机制坐标系"基础** — 用户的"反向验证"协议要给方案打分，必须先有这个坐标系。
3. **明确 open questions 作为博士选题** — 例如"重复光照下 I-rich 域是否原位再现"是个标准化、容易做的实验，可作为博士前期可行性 check 实验。

## 11. 未来方向

- Tian 列出：什么是真正的驱动机制？Cs / Cl 抑制机理？vacuum 下 reversibility 下降原因？哪种迁移物种主导（I⁻ / Br⁻ / I3⁻ / I0）？
- 用户可延伸：把上述 open questions 转化为"协议设计中的鉴别实验" — 比如"如果 redox 模型对，则 vacuum 下相分离不可逆且 I2 vapor 损失伴随" → 这就是一个**用我们表征系统能跑且能给唯一答案**的实验，正好填补研究计划的"反向验证"章节。
