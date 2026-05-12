# Formulas for SL-PCI Slides — render via LaTeX and screenshot into PPT

> Render at: https://latex.codecogs.com/   OR   VSCode Markdown Preview Enhanced (with Math)   OR   Typora
> Each formula below is self-contained and standalone — pick what you need.

---

## 1. Forward observation model (S7 banner)

$$y_m \;=\; H_m(Z;\,\theta_m) \;+\; A_m \;+\; \eta_m$$

> observation = physics forward model + artifact channel + noise

---

## 2. Latent state vector (S6 / S7 / S8)

$$Z \;=\; \bigl\{\, x_{\mathrm{Br/I}},\; N_{\mathrm{defect}},\; \varphi_{\mathrm{local}},\; \varepsilon,\; C_{\mathrm{deg}} \,\bigr\}$$

---

## 3. Carrier funneling weight — Ruth 2023 model (S5 / S8)

$$w_p \;\propto\; V_D^{-1}\,\exp\!\left(-\,\frac{\Delta E_g^{\,p}}{k_B T}\right),\qquad V_D \;=\; \tfrac{4}{3}\pi\,\ell_{e/h}^{3}$$

> $\ell_{e/h}$ = carrier diffusion length (100–1000 nm in perovskites);
> $\Delta E_g$ = bandgap offset between the funnel domain and the parent alloy.

---

## 4. PL spectrum decomposition (S8)

$$I_{\mathrm{PL}}(E) \;=\; \sum_p\, w_p\;\eta_p(N_{\mathrm{defect}})\;L_p\!\bigl(E_g^p,\sigma_p\bigr)\;R(\alpha,d)$$

---

## 5. KPFM CPD five-component decomposition (S5 / S8)

$$V_{\mathrm{CPD}}(r,t) \;=\; W_0(\chi_{\mathrm{Br}}^{\mathrm{surf}}) \;-\; V_{bb}(N_{\mathrm{defect}}) \;-\; V_{\mathrm{SPV}}(I,N_{\mathrm{defect}}) \;-\; V_{\mathrm{ion}}(t,\mu_X) \;-\; V_{\mathrm{trap}}(r,t)$$

> Components separable by their characteristic time constants:
> $V_{\mathrm{SPV}} \sim \text{ms}$ (light step), $V_{\mathrm{trap}} \sim \text{s}$ (scan rate), $V_{\mathrm{ion}} \sim \text{min}$ (dark relaxation)

---

## 6. PLQY-TRPL bulk / surface separation (S8)

$$\eta_{\mathrm{PLQY}}^{-1} - 1 \;=\; \frac{1}{k_{\mathrm{rad}}\,\tau_{\mathrm{SRH}}\!\left(N_b\right)} \;+\; \frac{S_{\mathrm{surf}}(N_s)}{k_{\mathrm{rad}}\,d}$$

$$\tau_{\mathrm{eff}}^{-1} \;=\; \tau_{\mathrm{SRH}}^{-1} \;+\; \tau_{\mathrm{rad}}^{-1} \;+\; \tau_{\mathrm{surf}}^{-1}$$

---

## 7. AR-XPS depth profile integral (S8)

$$\frac{I_{\mathrm{Br}}(\theta)}{I_{\mathrm{I}}(\theta)} \;=\; \frac{\displaystyle\int_0^\infty c_{\mathrm{Br}}(z)\,\exp\!\left(-\frac{z}{\lambda\cos\theta}\right)dz}{\displaystyle\int_0^\infty c_{\mathrm{I}}(z)\,\exp\!\left(-\frac{z}{\lambda\cos\theta}\right)dz}$$

> $\lambda$ = inelastic mean free path; dose-series extrapolation to zero dose removes beam-driven $A_m$.

---

## 8. GIWAXS Vegard's law + Williamson–Hall (S8)

$$q_{hkl}(x_{\mathrm{Br}}) \;=\; q_0\!\left(1 \;-\; x_{\mathrm{Br}} \cdot \frac{\Delta a}{a}\right)$$

$$\mathrm{FWHM}(q) \;\approx\; \varepsilon\,\tan\theta \;+\; \frac{K\lambda}{L}$$

> Joint broadening: strain $\varepsilon$ × angle + Scherrer crystallite-size $L$. Disentangling requires multi-order ($hkl$) measurement.

---

## 9. Bayesian joint posterior (S7 / S9)

$$p\!\left(Z, \theta \,\big|\, \{y_m\}\right) \;\propto\; p(Z, \theta)\,\prod_m p\!\left(y_m \,\big|\, Z, \theta\right)$$

---

## 10. Jacobian and condition number (S9)

$$J_{mj} \;=\; \left.\frac{\partial H_m}{\partial Z_j}\right|_{Z_0}, \qquad \kappa \;=\; \frac{\sigma_{\max}(J)}{\sigma_{\min}(J)}$$

> Computed by SVD on the design matrix $J$ before any sample is fabricated. $\kappa$ tracks identifiability.

---

## 11. Hα — Conditional stabilization decision rule (S6)

$$\hat\varphi \;=\; \beta_0 \;+\; \beta_1\,\chi_{\mathrm{Br}}^{\mathrm{surf}} \;+\; \beta_2\,N_{\mathrm{defect}} \;+\; \beta_3\,\varepsilon \;+\; \beta_4\,\varphi_{\mathrm{loc}} \;+\; \epsilon$$

$$\text{Support } H_\alpha\!:\qquad \hat\beta_1 \;<\; 0,\qquad \text{95\% CI excludes } 0$$

---

## 12. Hβ — Electrostatic precursor decision rule (S6)

$$\Pr\!\Bigl[\, t_{\mathrm{CPD\,anomaly}} \;<\; t_{\mathrm{PL\,hotspot}} \;\Big|\; \text{same ROI} \,\Bigr] \;>\; 0.5 \;+\; \delta$$

> $\delta$ from drift budget.

---

## 13. Hγ — Reversibility Bayes factor (S6)

$$K \;=\; \frac{p\!\left(\{y\} \,\big|\, M_{\mathrm{reversible}}\right)}{p\!\left(\{y\} \,\big|\, M_{\mathrm{irreversible}}\right)}$$

$$|\log_{10} K| > 1 \;\Longrightarrow\; \text{decisive}$$

---

## 14. RGA — irreversible halide loss rate (S8)

$$\frac{dN_{\mathrm{I}_2}}{dt} \;=\; R_{\mathrm{loss}}\!\left(c_{\mathrm{I}},\,T,\,h\nu\right)\,V_{\mathrm{film}}$$

> Sealed-vs-open chamber comparison isolates irreversible loss from reversible drift.

---

## 15. Ruth thermodynamic model (S5 — optional, for advanced viewers)

$$\Delta F^{*}(x) \;=\; \Delta F_{\mathrm{mix}}(x) \;+\; \Delta F_{\mathrm{light}}(x)$$

$$E_{\mathrm{PL}}(x) \;=\; E_{\mathrm{PL},x=0}(1-x) \;+\; E_{\mathrm{PL},x=1}\,x \;-\; b\,x(1-x)$$

> $\Delta F_{\mathrm{light}}$ = free-energy gain from carrier accumulation in I-rich inclusions
> $b$ = bowing parameter for the alloy bandgap.

---

# How to screenshot

1. Open this file in VSCode → install **Markdown Preview Enhanced**, or open it in Typora.
2. Right-click the rendered equation → "Copy as image" (Typora) or "Take screenshot" (other tools).
3. Or paste the LaTeX source into https://latex.codecogs.com/ → Download PNG.
4. Drop the PNG into the relevant slide where the symbolic text currently sits.
