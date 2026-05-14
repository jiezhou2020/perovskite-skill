# Slide 6 Prompt — 4-Corner Contradictions + Central Hypothesis

> **任务**：把 slide 6 重排成 4 个矛盾在 4 个角落 + 1 个中心假设位于画布正中的"钻石"布局。
> **关键约束**：所有符号必须与 `slide7_decoupling_framework_revision.md` 中的统一记法**完全一致**，避免 slide 6 和 slide 7 之间符号撞车。
> **前置阅读**：`slide7_decoupling_framework_revision.md`（先读，统一符号）。
> **生成日期**：2026-05-15

---

## 0. 统一符号系统（与 slide 7 完全一致）

**状态场（state fields）**：

$$Z_k(\mathbf{r},z) = \left[ c(\mathbf{r},z),\ v(\mathbf{r},z),\ \phi(\mathbf{r},z),\ \varepsilon(\mathbf{r},z),\ q(\mathbf{r},z) \right]$$

| 符号 | 含义 |
|---|---|
| $c$ | 局部 I 比例（$x_{Br}=1-c$）|
| $v$ | 缺陷 / 卤素空位密度 |
| $\phi$ | 局部电势 |
| $\varepsilon$ | 应变场 |
| $q$ | 不可逆化学 memory |

**自由能泛函**：

$$G[Z] = \int_\Omega \left[ f_{mix} + f_{grad} + f_{carrier} + f_{elastic} + f_{defect} + f_{deg} \right] dV + \int_\Gamma \gamma\, dS$$

**化学势**：$\mu_c = \delta G/\delta c$

**slide 6 不需要展开公式**——只需要用这套符号点出"4 个矛盾各自打击哪些项 / 哪些状态场"。

---

## 1. 总体版面：4 角 + 中心钻石布局

```
┌─────────────────────────────────────────────────────────────────────┐
│ TITLE (6% 高)                                                       │
├──────────────────────────────────┬──────────────────────────────────┤
│                                  │                                  │
│       ┌──────────────┐           │           ┌──────────────┐       │
│       │ C1 top-left  │           │           │ C2 top-right │       │
│       │ ~5.5"× 2.4"  │           │           │ ~5.5"× 2.4"  │       │
│       └──────────────┘           │           └──────────────┘       │
│                                                                     │
│                       ┌─── CENTRAL HYPOTHESIS ───┐                  │
│                       │                          │                  │
│                       │  ~4.5" × 2.0"            │                  │
│                       │  覆盖中心区域，叠在 4 角  │                  │
│                       │  之上（红框 + 浅红填充）  │                  │
│                       │                          │                  │
│                       └──────────────────────────┘                  │
│                                                                     │
│       ┌──────────────┐           │           ┌──────────────┐       │
│       │ C3 bot-left  │           │           │ C4 bot-right │       │
│       │ ~5.5"× 2.4"  │           │           │ ~5.5"× 2.4"  │       │
│       └──────────────┘           │           └──────────────┘       │
├──────────────────────────────────┴──────────────────────────────────┤
│ TRANSITION 一行 → slide 7  (4% 高)                                   │
└─────────────────────────────────────────────────────────────────────┘
```

**视觉技巧**：4 个矛盾盒**箭头指向中心**（细线箭头，色 #C00000），形成"4 论据 → 1 结论"的视觉收束。

---

## 2. 每个矛盾框的统一结构

每个角落框包含 4 个元素：

```
┌───────────────────────────────────────┐
│  [TAG] Tests Z-component(s)            │  ← 顶栏色块（与 slide 7 配色对应）
│ ─────────────────────────────────────  │
│  Title (短句，1 行)                    │
│                                        │
│  ┌──────────────┐                      │
│  │  Figure       │  Brief text          │
│  │  ~2.2"× 1.6"  │  (2-3 行)            │
│  │               │  关键数字            │
│  └──────────────┘                      │
│                                        │
│  → Reveals deficit in:                 │
│    f_X term / state field Z_Y          │
└───────────────────────────────────────┘
```

---

## 3. C1（左上）— Thermodynamic predictions disagree by 10⁷×

**顶栏色块**：蓝色 `#1A4D7E`（对应 $c$ 成分轴）

**Title**：
```
Pure thermodynamic models disagree by 10⁷×
```

**内容**：
```
Chen 2021:     I_th ≈ 1750 W/cm²   (full unified theory)
Ruth 2023:     I_th ≈ 0.1 W/cm²    (band-gap + funneling)
Experiment:    I_th ≈ 35 W/cm²    (Elmelund 2020)

Both models use only  f_mix + f_carrier .
Neither predicts threshold AND T-dependence consistently.
```

**Reveals deficit in**：
```
→ f_elastic(c, ε)  +  f_defect(c, v, φ, ε)
  必须加入，纯 f_mix + f_carrier 不够
```

**推荐配图**：

| 优先 | 论文 | 图号 | 文件路径 | 配图选择理由 |
|---|---|---|---|---|
| 1 | **Chen 2021** | **Fig. 4a** | `papers/s41467-021-23008-z.pdf` | 直观显示 5 个化合物的阈值 $n_t$ 从 $10^{-12}$ 到 $10^{-5}$ /f.u.（横跨 7 个数量级）；committee 一眼看到"理论预测发散" |
| 2 备选 | Ruth 2023 | Fig. 5 | `papers/dir2_phase_segregation/dir2_Ruth_2023_thermodynamic-model.pdf` | 阈值 $I_{exc}$ vs 实验值；展示理论拟合不上数据 |

---

## 4. C2（右上）— I-rich location reverses across studies

**顶栏色块**：紫色 `#7B4D8C` + 橙色 `#D67D2C` 双色（对应 $\phi$ + $\varepsilon$，C2 同时打击两轴）

**Title**：
```
I-rich location flips between studies
```

**内容**：
```
Tang 2018 (MAPb, c₀ = 0.70, x_Br = 0.30):
   I → grain boundary    (KPFM evidence)

Fan 2025 (CsPb, c₀ = 0.30, x_Br = 0.70):
   I → grain center      (EELS evidence)

Same plunge-freeze workflow.
Opposite outcome.
```

**Reveals deficit in**：
```
→ γ(c, v, ε, q) at boundary   +  f_elastic(c, ε)  in grain interior
  location 由边界条件 + 局部应变共同决定，不是 c₀ 单变量
```

**推荐配图**：

| 优先 | 论文 | 图号 | 文件路径 | 配图选择理由 |
|---|---|---|---|---|
| 1 | **Fan 2025** | **Fig. 3 (panel b, middle row)** | `papers/PIIS2666386425002528.pdf` | EELS I/Cs 比映射图最直观——晶心明显比晶界深色（I-rich）|
| 2 同框对照 | **Tang 2018** | **Fig. 5a/b** | `papers/dir2_phase_segregation/dir2_Tang_2018_local-segregation.pdf` | KPFM CPD 图——晶界处暗（电位低）显示 Tang 的"GB 选择性"声明 |

**强烈建议**：这一格**同时贴两张图**（Fan 在左、Tang 在右各占 1.5"×1.4"），让矛盾视觉化。

---

## 5. C3（左下）— Funneling alone is 10³× too weak

**顶栏色块**：橙色 `#D67D2C` + 绿色 `#2D6A4F` 双色（对应 $\varepsilon$ + $v$，C3 同时打击两轴）

**Title**：
```
Funneling alone is 10³× insufficient
```

**内容**：
```
Chen 2021 / Ruth 2023:  f_carrier dominates
                        F_light ~ 100 eV/f.u.

Peng 2023 PFM:          f_carrier alone is 1000× too weak
                        to overcome f_mix + f_grad

Ad hoc G_sep term needed.
Physical origin (polaron strain vs defect-trapped holes) unresolved.
```

**Reveals deficit in**：
```
→ f_elastic (polaron strain)  OR  f_defect (trapped holes)
  Peng 自承 G_sep 是 (a) ε 路线 vs (b) v 路线，不能区分
```

**推荐配图**：

| 优先 | 论文 | 图号 | 文件路径 | 配图选择理由 |
|---|---|---|---|---|
| 1 | **Peng 2023** | **Fig. 4 (panel a-b)** | `papers/PIIS2590238523002163.pdf` | 相场模拟显示加 $G_{sep}$ 项后的 I-rich 域生长；标注"funneling alone insufficient" |
| 2 备选 | Peng 2023 | Fig. 4c | 同上 | Gibbs 自由能曲线分解，显示 $G_{sep}$ 添加项 |

---

## 6. C4（右下）— Optical recovery ≠ physical recovery

**顶栏色块**：灰色 `#666666` + 绿色 `#2D6A4F` + 橙色 `#D67D2C` 三色（对应 $q$ + $v$ + $\varepsilon$，C4 触碰三轴）

**Title**：
```
Optical recovery hides physical memory
```

**内容**：
```
Hoke 2015:    PL ( c proxy ) fully reversible in dark
Tiede 2020:   defect ( v ) memory: k_growth depends on R_H
Fan 2025:     4% anisotropic strain ( ε ) appears post-segregation

PL recovery → c 回 c₀
But:  v, ε, q  not necessarily reset
```

**Reveals deficit in**：
```
→ f_defect(c, v, ...)  +  f_elastic(c, ε)  +  f_deg(c, q)
  PL 是 c 的代理但看不见 v / ε / q 的 memory
```

**推荐配图**：

| 优先 | 论文 | 图号 | 文件路径 | 配图选择理由 |
|---|---|---|---|---|
| 1 | **Tiede 2020** | **Fig. 5 (R_H scan)** | `papers/dir2_phase_segregation/dir2_Tiede_2020_iodide-defect-rearrangement.pdf` | $k_{growth}$ vs $R_H$ 化学计量比扫描；直接显示**defect-mediated memory** |
| 2 同框对照 | **Hoke 2015** | **Fig. 2c** | `papers/dir2_phase_segregation/dir2_Hoke_2015_photoinduced-trap.pdf` | PL 暗态恢复曲线——显示 "PL fully reversible" 表象 |
| 3 备选 | Fan 2025 | Fig. 4 (lattice histogram) | `papers/PIIS2666386425002528.pdf` | 应变直方图，post-illumination 显示 4% 各向异性应变残留 |

**建议**：这一格**贴 Hoke + Tiede 双图**（左侧 Hoke 显示"PL 完全回复"的表象，右侧 Tiede 显示"缺陷有 memory"的反例），矛盾立刻视觉化。

---

## 7. 中心假设（CENTRAL HYPOTHESIS）

**框规格**：
- 尺寸 ~4.5" × 2.0"
- 边框 `#C00000` 2pt 粗
- 填充 `#FBE5E5` 浅红
- 位于画布正中，**叠在 4 个角的视觉重心**

**内容**（严格使用 slide 7 符号）：

```
                    CENTRAL HYPOTHESIS

  Photoinduced phase segregation is the evolution of the
  iodide composition field  c(r,z)  under  μ_c = δG/δc.

  The dominant term in  μ_c  shifts with composition,
  illumination, strain, and interface conditions.

  No single observable identifies it.
  Only joint inverse inference across
       Z = [c, v, φ, ε, q]
  resolves the four contradictions above.
```

**字号建议**：
- 标题 "CENTRAL HYPOTHESIS"：14pt Bold 大写 `#C00000`
- 正文：13pt Regular `#1A1A1A`
- $\mu_c$、$Z$、字段符号：Cambria Math 13pt

---

## 8. 4 角到中心的视觉收束（细箭头）

```
        C1 ─────────╲       ╱───────── C2
                     ╲     ╱
                      ╲   ╱
                       ╲ ╱
                  CENTRAL HYPOTHESIS
                       ╱ ╲
                      ╱   ╲
                     ╱     ╲
        C3 ─────────╱       ╲───────── C4
```

**箭头规格**：
- 4 条细线箭头从每个角的内侧顶点指向中心框
- 线宽 0.5pt，色 `#C00000` 30% 透明度（不抢戏，但有指向感）
- 这条视觉提示告诉观众："4 个矛盾在论证 1 个结论"

---

## 9. 底部过渡条

```
→ Slide 7 formalizes this hypothesis as a free-energy
  functional G[Z] and the chemical potential μ_c whose
  dominant term identifies the responsible mechanism.
```

字号 10pt，色 `#5A5A5A`，居中。

---

## 10. 完整图引用清单（直接传给设计师/AI）

| Slide 6 位置 | 论文 + 图号 | 文件路径 | 用图原因 |
|---|---|---|---|
| **C1 配图** | Chen 2021, Fig. 4a | `papers/s41467-021-23008-z.pdf` | 阈值 $n_t$ 横跨 7 数量级的对数图——10⁷× 矛盾的直接证据 |
| **C2 配图 1** | Fan 2025, Fig. 3 panel b | `papers/PIIS2666386425002528.pdf` | EELS I/Cs 映射显示 I → 晶心 |
| **C2 配图 2** | Tang 2018, Fig. 5a | `papers/dir2_phase_segregation/dir2_Tang_2018_local-segregation.pdf` | KPFM CPD 映射显示 GB 处异常 |
| **C3 配图** | Peng 2023, Fig. 4 panel a | `papers/PIIS2590238523002163.pdf` | 相场模拟显示需要加 $G_{sep}$ 才能复现实验 |
| **C4 配图 1** | Hoke 2015, Fig. 2c | `papers/dir2_phase_segregation/dir2_Hoke_2015_photoinduced-trap.pdf` | PL 暗态恢复曲线——"完全可逆"的表象 |
| **C4 配图 2** | Tiede 2020, Fig. 5 | `papers/dir2_phase_segregation/dir2_Tiede_2020_iodide-defect-rearrangement.pdf` | $k_{growth}$ vs $R_H$ 显示缺陷化学记忆 |

**总计**：4 角共 6 张图。如果空间不够，**C2 和 C4 可以各只用 1 张**：
- C2 优先用 Fan 2025 Fig. 3（更新的论文 + 更具体的化学证据）
- C4 优先用 Tiede 2020 Fig. 5（直接的 memory 证据）

---

## 11. 给 AI 的明确指令

```text
ROLE
你是学术演讲设计师，负责重构 slide 6 为 4 角 + 中心钻石布局。

INPUT
1. 当前 PPT 文件：oral exam_260514.pptx
2. 本 prompt md 文件：slide6_4corners_central_prompt.md
3. Slide 7 符号规范（必读）：slide7_decoupling_framework_revision.md

CONSTRAINTS
- 符号系统严格沿用 slide 7：c, v, φ, ε, q（不能再用 x_Br/I, N_defect, ϕ_local, C_deg）
- 4 个角各放一个矛盾框（5.5" × 2.4"）
- 中心放 CENTRAL HYPOTHESIS 框（4.5" × 2.0"，红框浅红底）
- 4 条细线箭头从角指向中心
- 字号 12-14pt 正文，22pt 标题
- 配色 #C00000 / #1A1A1A / #5A5A5A / #FBE5E5
- 不要超过 1 张 slide（这就是 slide 6）

DELIVERABLE
更新后的 oral exam_260514.pptx（slide 6 改成 4 角 + 中心布局），
保留其它 slide 不动。

FIGURES
按上面 §10 表格预留 6 个图框占位符（白底 + 灰边 + 中心标注图号 +
来源论文 + 文件路径），用户后续手动贴入真实图像。

FORMULA
唯一允许的公式片段：
- μ_c = δG / δc  (在 CENTRAL 框)
- Z = [c, v, φ, ε, q]  (在 CENTRAL 框)
其它公式都不在 slide 6 出现（slide 7 才展开）。
```

---

## 12. 验证清单（设计完后逐项核对）

```
[ ] 总 slide 数仍为 10
[ ] slide 6 共 4 个角框 + 1 个中心框 + 1 个标题 + 1 个底部过渡 = 7 个区域
[ ] 所有符号使用 c / v / φ / ε / q（无 N_defect / x_Br/I 等旧记法）
[ ] 4 个角框各有 1 个图位（C2 和 C4 可各放 2 个）
[ ] 每个图位下方有完整 caption: Fig.N + 来源（如 "Chen 2021, Fig. 4a"）
[ ] 中心框使用红边 #C00000 + 浅红底 #FBE5E5
[ ] 4 条细箭头从角指向中心
[ ] 中心框包含 μ_c = δG/δc 和 Z = [c, v, φ, ε, q] 两个公式
[ ] 底部过渡条指向 slide 7 的 G[Z] 框架
[ ] 字号 12-16pt（标题 22pt 例外）
[ ] 无 emoji / 无渐变 / 无 placeholder 残留文字
```

---

**版本**：v1.0 / 2026-05-15
