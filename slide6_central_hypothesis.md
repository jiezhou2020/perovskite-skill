# Slide 6 重构：4 文献矛盾 → 1 个中心假设

> **结构方向**：删掉原 4 假设并列；改为"4 个文献矛盾汇总 + 1 个 central hypothesis"。
> **逻辑**：每个矛盾给出具体证据 → 4 个矛盾共同指向一个中心结论 → 下一页开始验证。
> **位置**：Slide 6（前接 slide 5 = PIPS 现象 + 文献调研；后接 slide 7 = 5 Z + forward model 验证）

---

## 0. 标题

```
4. Phase segregation: literature contradictions and the central hypothesis

The field has accumulated four real disagreements over a decade —
they motivate one unified question.
```

---

## 1. 上半画布：4 个文献矛盾（2×2 网格）

### Contradiction 1 — Thermodynamic predictions disagree by 10⁷×

```
Chen 2021:    threshold ≈ 1750 W/cm²
Ruth 2023:    threshold ≈ 0.1 W/cm²
Experiment:   ≈ 35 W/cm² (Elmelund 2020)

No single theory predicts both threshold AND temperature dependence.
```

**库内引用**：
- `papers/s41467-021-23008-z.pdf` (Chen 2021)
- `papers/dir2_phase_segregation/dir2_Ruth_2023_thermodynamic-model.pdf`

---

### Contradiction 2 — I-rich location reverses across studies

```
Tang 2018 (MAPb, x_Br = 0.30):  I → grain boundary
Fan 2025  (CsPb, x_Br = 0.70):  I → grain center

Same plunge-freeze workflow, opposite outcome.
```

**库内引用**：
- `papers/dir2_phase_segregation/dir2_Tang_2018_local-segregation.pdf`
- `papers/PIIS2666386425002528.pdf` (Fan 2025)

---

### Contradiction 3 — Funneling alone is 10³× too weak

```
Chen 2021 / Ruth 2023:  funneling-dominated free energy
Peng 2023 PFM (numerical): funneling 1000× insufficient;
                            ad hoc G_sep term needed.

Physical origin of G_sep (polaron strain vs trapped holes) unknown.
```

**库内引用**：
- `papers/PIIS2590238523002163.pdf` (Peng 2023)
- `papers/s41467-021-23008-z.pdf` (Chen 2021)

---

### Contradiction 4 — Optical recovery may not equal physical recovery

```
Hoke 2015:    PL fully reversible after dark relaxation
Tiede 2020:   defect-mediated memory persists
Fan 2025:     4% anisotropic strain appears post-segregation

PL recovery ≠ strain / defect / chemistry recovery?
```

**库内引用**：
- `papers/dir2_phase_segregation/dir2_Hoke_2015_photoinduced-trap.pdf`
- `papers/dir2_phase_segregation/dir2_Tiede_2020_iodide-defect-rearrangement.pdf`
- `papers/PIIS2666386425002528.pdf` (Fan 2025)

---

## 2. 中间过渡条（红字 #C00000）

```
Four mechanisms are documented in literature
(composition · defects · strain · electrostatics).
Each paper sees one facet. No single mechanism universally explains PIPS.
```

---

## 3. 下半画布：CENTRAL HYPOTHESIS（红框强调）

```
┌──────────────────────────────────────────────────────────────────────────┐
│  CENTRAL HYPOTHESIS                                                      │
│                                                                          │
│  Photoinduced phase segregation is a coupled multi-mechanism             │
│  process. The dominant driver shifts with composition, illumination,     │
│  strain and interface conditions.                                        │
│                                                                          │
│  No single characterization, no single mechanism, no single regime       │
│  can settle the field's contradictions.                                  │
│                                                                          │
│  → Only joint inverse inference across all five mechanism candidates     │
│      can decouple their conditional contributions and resolve the        │
│      contradictions above.                                               │
└──────────────────────────────────────────────────────────────────────────┘
```

**视觉规范**：
- 边框 #C00000 (2pt)
- 底色 #FBE5E5 (浅红淡填充)
- 标题 "CENTRAL HYPOTHESIS" 14pt Bold 大写
- 内文 13pt Regular，自动换行

---

## 4. 底部过渡（指向 slide 7）

```
→ Slide 7 begins the verification path:
   five-mechanism state space  →  forward model  →
   multi-modal protocol  →  decoupled regime diagram
```

字号 10pt，色 #5A5A5A，居中。

---

## 5. 整体逻辑链（slide 5 → 6 → 7 → 8）

```
Slide 5  PIPS 现象 + 6 篇文献时间轴
            ↓ 现象清楚了，解释打架
Slide 6  4 矛盾 + 1 中心假设            ← 本页
            ↓ 中心假设：5 机制耦合，需联合反演
Slide 7  5 Z + forward model            (中心假设的形式化)
            ↓ 怎么测
Slide 8  SL-PCI 4 步 + 仪器矩阵
            ↓ 三年怎么落地
Slide 9  甘特图
            ↓ 出什么
Slide 10 Mechanism regime diagram
```

每一页直接回应上一页的"那然后呢"。

---

## 6. 委员预期问答（用于备答辩）

| 委员可能问 | 你回答 |
|---|---|
| "你为什么用 5 个 Z 而不是 1 个？" | 中心假设已经替我答了：没有任何一个机制单独够用 |
| "你怎么知道这 4 个矛盾是真的？" | 4 个矛盾每条有具体文献名 + 数据点，现场可查 |
| "为什么需要多模态？" | 中心假设的"No single characterization"已替我答了 |
| "5 个机制的相对贡献怎么量化？" | 下一页（slide 7）的 forward model + joint inference |

---

## 7. 中心假设的口语版（60 秒讲稿）

> **"The field has four standing contradictions — they don't reconcile because no one tested all mechanisms jointly. The threshold prediction is off by ten million times. The location flips between studies. Funneling alone is a thousand times too weak. Optical recovery hides physical memory.**
> 
> **Together these contradictions point to one conclusion: phase segregation is a coupled multi-mechanism problem, and the dominant mechanism is condition-dependent.**
> 
> **No single characterization can settle it. The rest of this talk shows the inverse-inference framework that does."**

中文版：

> "这个领域积累了四个互相打架的结论——不是因为谁错了，是因为没人**同时**测过所有机制。阈值预测差一千万倍，I 富集位置在不同论文里反方向，funneling 单独算只有需要的千分之一，光学恢复掩盖了物理 memory。
> 
> 四条矛盾共同指向一个结论：**相分离是多机制耦合过程，主导机制随条件变化。**
> 
> 单一表征无法仲裁。下一页开始展示能仲裁的反向推断框架。"

---

## 8. 视觉布局总结

```
┌─────────────────────────────────────────────────────────────────┐
│ Title                                                       占 8% │
├─────────────────────────────────────────────────────────────────┤
│ ┌──────────────────┬──────────────────┐                   占 38% │
│ │ Contradiction 1  │ Contradiction 2  │                          │
│ │ thermo 10⁷×      │ location reverses│                          │
│ ├──────────────────┼──────────────────┤                          │
│ │ Contradiction 3  │ Contradiction 4  │                          │
│ │ funneling 10³×   │ recovery memory  │                          │
│ └──────────────────┴──────────────────┘                          │
├─────────────────────────────────────────────────────────────────┤
│ ── 红字过渡条（8% 高）──                                          │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┐    占 36% │
│ │  CENTRAL HYPOTHESIS                                  │          │
│ │  （红框 + 浅红填充）                                  │          │
│ └─────────────────────────────────────────────────────┘          │
├─────────────────────────────────────────────────────────────────┤
│ → Slide 7 transition                                       占 6% │
│ Footer  6/10                                              占 4%  │
└─────────────────────────────────────────────────────────────────┘
```

---

**版本**：v1.0 / 2026-05-15
