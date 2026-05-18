# Research Proposal

**Lin Weiye**  
**2026/05/18**

## Research Theme

**State-Locked Decoupling of Photoinduced Halide Phase Segregation in Wide-Bandgap Mixed-Halide Perovskites**

## Abstract

Wide-bandgap (1.65–1.80 eV) mixed-halide perovskites are key top absorbers for perovskite/silicon tandem solar cells, but their voltage and spectral stability are limited by photoinduced I/Br phase segregation, which causes quasi-Fermi-level-splitting reduction and open-circuit voltage loss. This project proposes a **state-locked decoupling framework** that experimentally and theoretically separates **reversible optical readout** (PL, KPFM) from **irreversible chemical / structural memory** (an auxiliary field <i>q</i>): drive the material into reproducible trajectory checkpoints <i>S</i><sub>0</sub>–<i>S</i><sub>5</sub>, suppress further evolution by low-temperature locking, and read each locked state using optical, chemical, structural, electrostatic, and defect-sensitive probes. The locked-state fingerprints will constrain a **driven** Cahn-Hilliard composition-evolution model (with non-equilibrium carrier coupling and an irreversibility channel) and identify which physical term dominates onset, growth, saturation, and recovery. The expected result is a falsifiable mechanism map, with a hard pre-registered failure condition, rather than a PL-only description of phase segregation.

## 1. Background and Research Question

Wide-bandgap mixed-halide perovskites with bandgaps of about 1.65-1.80 eV are essential for high-efficiency tandem photovoltaics<sup>8</sup>. Their adjustable I/Br ratio enables bandgap control, but the same compositional flexibility also creates a serious instability: under illumination, initially mixed halides can segregate into iodide-rich and bromide-rich regions<sup>1</sup>. The iodide-rich regions have lower bandgap, collect carriers by funneling, red-shift photoluminescence (PL), and reduce quasi-Fermi-level splitting and open-circuit voltage<sup>1,5</sup>.

Previous studies have clarified important parts of this process. Hoke et al. established reversible red-shifted emission in mixed-halide perovskites<sup>1</sup>; Brivio et al. described the thermodynamic miscibility gap<sup>2</sup>; Tang<sup>3</sup>, Zhao<sup>4</sup>, Peng<sup>6</sup>, and Fan<sup>7</sup> showed that local microstructure, strain, and cryogenic imaging reveal spatially heterogeneous segregation pathways. A unified theoretical account that combines thermodynamics, electrostatics, and carrier funneling has also been proposed<sup>5</sup>. However, the field still lacks an operational method to decide whether different measurements are observing the same material state. A PL time point is not enough, because PL can be dominated by a small low-bandgap domain and may not represent average composition or complete recovery.

The central research question is:

> Can photoinduced halide phase segregation be divided into reproducible operational states, and can locked-state readout identify which physical term controls each transition?

This question is motivated by four unresolved contradictions in the literature: (C1) **where** segregation starts (grain boundary, grain interior, or intragrain clusters); (C2) **when** it truly begins (threshold crossing, classical nucleation, or spinodal amplification, with possible non-optical precursors preceding PL onset); (C3) **what** PL actually reports (chemical composition or funneling-weighted emission from a small low-bandgap domain); and (C4) **whether** optical recovery implies material recovery. The proposed project therefore shifts the unit of analysis from a single PL trace to a **locked material state**, so that each contradiction is tested against state-resolved, multi-modal endpoints rather than a PL time point.

## 2. Objective, Hypothesis, and State Definition

The objective is to establish a state-resolved experimental and physical framework for photoinduced phase segregation in wide-bandgap mixed-halide perovskites. The framework must be useful even if the initial state boundaries are revised by data.

The central hypothesis is:

> Photoinduced halide phase segregation can be segmented into reproducible operational states <i>S</i><sub>0</sub> to <i>S</i><sub>5</sub>. The conserved halide composition field <i>c</i>(<b>r</b>, <i>t</i>) evolves according to a Cahn-Hilliard-type framework, while mobility, electrostatic, elastic, interface, and memory channels determine which term dominates each state transition.

The proposed operational states are:

Each state is defined by a **primary** trigger (a numerical threshold on a single anchor observable) and **secondary** corroborating channels. When a secondary channel disagrees with the primary trigger, the disagreement itself is recorded as a state-resolved diagnostic rather than being averaged away. Numerical thresholds are to be locked at the end of Year 1 from baseline statistics.

| State | Operational meaning | Primary trigger (anchor) | Secondary / corroborating channels |
|---|---|---|---|
| <i>S</i><sub>0</sub> | dark mixed baseline | all channels within ±2σ of dark baseline | — |
| <i>S</i><sub>1</sub> | photoactivated precursor | KPFM ΔCPD &gt; threshold *before* PL red-fraction exceeds noise floor | SPV, weak operando XRD shift |
| <i>S</i><sub>2</sub> | segregation onset | PL red-fraction crosses threshold (numerical, to be set in Year 1) | GIWAXS/XRD peak splitting, SIMS/EELS contrast |
| <i>S</i><sub>3</sub> | growth | PL red-fraction increases monotonically with dose | spatial domain count, GIWAXS peak area |
| <i>S</i><sub>4</sub> | saturated segregated state | PL red-fraction plateau (d/d<i>t</i> &lt; threshold) | at least one non-PL channel also plateaus |
| <i>S</i><sub>5</sub> | recovery / memory | PL recovers to ≤ 110% of <i>S</i><sub>0</sub> baseline after dark relaxation | residual <i>q</i>(<b>r</b>) in XPS / SIMS / GIWAXS PbI<sub>2</sub> tail |

The measured fingerprint of state <i>S</i><sub>k</sub> is:

<div class="eq" style="position: relative;"><i>Z</i>(<i>S</i><sub>k</sub>) = [<i>c</i><sub>k</sub>(<b>r</b>), &nbsp;<i>v̄</i><sub>k</sub>, &nbsp;φ<sub>k</sub>(<b>r</b>), ε<sub>k</sub>(<b>r</b>), <i>q</i><sub>k</sub>(<b>r</b>)]<span style="position: absolute; right: 2pt; font-style: normal;">(1)</span></div>

Here <i>c</i>(<b>r</b>) is the local iodide fraction, <i>v̄</i> is a **sample-averaged scalar** ionic-conductivity parameter (admittance/impedance derived; the only non-field entry in <i>Z</i>), φ(<b>r</b>) is a surface/local potential proxy, ε(<b>r</b>) is strain or microstrain, and <i>q</i>(<b>r</b>) is the auxiliary field for irreversible chemistry / trapped-charge memory. <i>S</i><sub>k</sub> are therefore **reproducible trajectory checkpoints along a controlled protocol**, not thermodynamic states; the framework admits hysteresis and non-Markovian channels through <i>q</i>. The fingerprint is not claimed to be a complete microscopic state — it is an experimentally accessible constraint on the model.

## 3. Physical Framework

The primary order parameter is the local iodide fraction. Within the segregation regime (no halide loss to side phases), it is conserved:

<div class="eq" style="position: relative;"><i>c</i>(<b>r</b>, <i>t</i>) = <i>x</i><sub>I</sub>(<b>r</b>, <i>t</i>), &nbsp;&nbsp; d/dt ∫<sub>Ω</sub> <i>c</i>(<b>r</b>, <i>t</i>) dV = 0 &nbsp; (when <i>R</i><sub>q</sub> = 0)<span style="position: absolute; right: 2pt; font-style: normal;">(2)</span></div>

For a mixed I/Br lattice, a regular-solution-type free energy gives the basic demixing tendency:

<div class="eq" style="position: relative;"><i>f</i><sub>mix</sub>(<i>c</i>) = (<i>k</i><sub>B</sub><i>T</i>/Ω<sub>0</sub>)[<i>c</i> ln <i>c</i> + (1 - <i>c</i>) ln(1 - <i>c</i>) + χ<i>c</i>(1 - <i>c</i>)]<span style="position: absolute; right: 2pt; font-style: normal;">(3)</span></div>

The working effective free-energy functional is:

<div class="eq" style="position: relative;"><i>G</i>[<i>c</i>] = ∫<sub>Ω</sub> [<i>f</i><sub>mix</sub>(<i>c</i>) + (κ/2)|∇<i>c</i>|<sup>2</sup> + <i>f</i><sub>carrier</sub>(<i>c</i>, <i>n</i>, <i>p</i>) + <i>f</i><sub>elastic</sub> + <i>f</i><sub>elec</sub>] dV + <i>G</i><sub>interface</sub><span style="position: absolute; right: 2pt; font-style: normal;">(4)</span></div>

Here <i>f</i><sub>carrier</sub> is **not** a thermodynamic free energy: it is the effective potential obtained after adiabatic elimination of fast photo-excited carriers, expressed through their quasi-Fermi levels<sup>5</sup>; illumination enters as a non-equilibrium driver rather than a state function. The corresponding driven Cahn-Hilliard-type evolution equation<sup>9</sup> is:

<div class="eq" style="position: relative;">∂<i>c</i>/∂<i>t</i> = ∇ · [<i>M</i>(<i>c</i>, <i>v̄</i>, <i>T</i>)∇μ<sub>c</sub>] − <i>k</i>(<i>c</i>, <i>I</i>) <i>c</i> + <i>k</i><sub>rev</sub><i>q</i>, &nbsp;&nbsp; ∂<i>q</i>/∂<i>t</i> = <i>k</i>(<i>c</i>, <i>I</i>) <i>c</i> − <i>k</i><sub>rev</sub><i>q</i>, &nbsp;&nbsp; μ<sub>c</sub> = δ<i>G</i>/δ<i>c</i><span style="position: absolute; right: 2pt; font-style: normal;">(5)</span></div>

Eq. (5) is closed by no-flux boundary conditions at the film/substrate and air interfaces; <i>G</i><sub>interface</sub> supplies the grain-boundary and electrode surface-exchange terms. Variables: <i>v̄</i> is a **sample-averaged** ionic-conductivity parameter calibrated from impedance/admittance (not a spatial field, in contrast to <i>c</i>(<b>r</b>) and <i>q</i>(<b>r</b>)); <i>q</i>(<b>r</b>, <i>t</i>) is an auxiliary field tracking irreversible chemistry / trapped-charge memory (e.g., halide bound to a secondary PbI<sub>2</sub>/PbBr<sub>2</sub> phase, deep-trap occupation); <i>k</i> and <i>k</i><sub>rev</sub> are forward/reverse rate coefficients. The pair (Eq. 5a, Eq. 5b) conserves the total halide budget <i>c</i> + <i>q</i>; the conservation in Eq. (2) holds whenever <i>k</i> can be set to zero by experimental design (e.g., inert atmosphere, sub-degradation light dose).

In this formulation, <i>f</i><sub>mix</sub> and the gradient term describe thermodynamic demixing and domain formation; <i>M</i>(<i>c</i>, <i>v̄</i>, <i>T</i>) describes vacancy-assisted ionic mobility; <i>f</i><sub>elec</sub> and <i>f</i><sub>elastic</sub> capture potential and strain contributions; <i>f</i><sub>carrier</sub> is the non-equilibrium driver; <i>k</i> selects the irreversible-chemistry channel for state <i>S</i><sub>5</sub> memory. The model is used diagnostically: for each <i>S</i><sub>k</sub> → <i>S</i><sub>k+1</sub> transition, the dominant term is the one that best explains onset position, growth rate, saturation, or residual memory with stated uncertainty.

## 4. Methodology

The experimental strategy has four steps. First, samples will be driven into target states by controlled light dose, wavelength, intensity, temperature, and atmosphere. Operando PL hyperspectral imaging will track peak position, red fraction, linewidth, and spatial contrast. KPFM or SPV will be used where possible to detect potential-related precursors.

Second, once a target <i>S</i><sub>k</sub> is reached, further evolution will be suppressed by low-temperature state preservation. Practical routes include cryostage quenching to 170-100 K, liquid-nitrogen cold-stage transfer near 77 K, and plunge-freeze cryo preparation for TEM-compatible samples when collaboration is available. Locking will be validated by delay series, dark-transfer controls, low-temperature PL, beam-dose tests, and sister-sample replication. A successful lock means that drift during transfer/readout is smaller than state-to-state contrast or is explicitly included as uncertainty.

Third, the locked state will be read by scale-tagged endpoint characterization:

| Target | Main readout | Model role |
|---|---|---|
| <i>c</i> | EELS, TOF-SIMS, XPS, GIWAXS/XRD | composition, mixing, gradient terms |
| <i>v̄</i> (scalar) | admittance/impedance (primary), DLTS / TRPL / hysteresis (secondary, calibration only) | mobility modifier <i>M</i>(<i>c</i>, <i>v̄</i>, <i>T</i>) |
| φ | KPFM, SPV | electrostatic or surface-potential contribution |
| ε | GIWAXS, XRD, Raman, 4D-STEM | elastic contribution |
| <i>q</i> | XPS, SIMS, PbI2-related XRD, recovery-delay tests | irreversible chemistry or memory |

Fourth, the measured fields will be mapped to model terms. The core publishable path is PL/KPFM or SPV plus XPS/SIMS and GIWAXS/Raman. Cryo-CL, cryo-EELS, 4D-STEM, and cryo-STEM-EDS are validation paths, not requirements for project success.

## 5. Three-Year Research Plan

| Period | Main work | Acceptance gate |
|---|---|---|
| Year 1 | 4-point composition pre-screen (Cs<sub>x</sub>FA<sub>1-x</sub>Pb(I<sub>1-y</sub>Br<sub>y</sub>)<sub>3</sub>, <i>y</i> ∈ {0.20, 0.27, 0.33, 0.40}) by operando PL to select one baseline composition; build fiducial-marked thin films on glass; establish operando PL hyperspectral protocol + one non-optical channel (KPFM **or** impedance for <i>v̄</i>); develop single cryogenic locking protocol (170 K cryostage) with a quench-time vs ionic-diffusion-time (Damköhler) validation; lock numerical thresholds for <i>S</i><sub>0</sub>, <i>S</i><sub>2</sub>, <i>S</i><sub>4</sub> from baseline statistics. (77 K plunge-freeze and device-like stacks deferred to Year 2.) | Locking fidelity is quantified by a Damköhler-number argument (cooling time ≪ fastest mode); transfer/readout drift is smaller than state contrast or reported as uncertainty; quantitative <i>S</i><sub>k</sub> trigger table published. |
| Year 2 | Extend trigger table to <i>S</i><sub>1</sub>, <i>S</i><sub>3</sub>, <i>S</i><sub>5</sub>; add scale-tagged endpoint channels (XPS/SIMS chemical; GIWAXS/Raman structural); correlate fiducial-matched ROI-statistics across optical, chemical, and structural channels; introduce 77 K plunge-freeze for selected states with collaborators if available; build mini-devices on the baseline composition to track quasi-Fermi-level splitting (QFLS) / <i>V</i><sub>oc</sub> retention as a PV-relevant bridge metric. | At least two independent endpoint channels correlate with state labels at &gt; 2σ; QFLS retention is reported per state; Paper 1 (state-locked decoupling) submitted. |
| Year 3 | Analyze <i>S</i><sub>4</sub> → <i>S</i><sub>5</sub> recovery and memory; fit measured <i>Z</i>(<i>S</i><sub>k</sub>) changes against Eq. (5) terms; construct a **transition-term map** for onset / growth / saturation / recovery on the baseline composition (regime-diagram-style extension across <i>y</i> only if Year 2 yields tight error bars). | The model improves on a PL-only kinetic description against a pre-registered metric, or the state boundaries are revised; Paper 2 and thesis chapters completed. |

## 6. Expected Outcomes, Originality, and Risk Management

The expected outcomes are: (1) reproducible operational definitions for <i>S</i><sub>0</sub>-<i>S</i><sub>5</sub>; (2) a transferable write-lock-read-map protocol; (3) a state-resolved mechanism map assigning dominant physical terms to transitions; and (4) two publication-ready datasets, one focused on state-locked decoupling and one on the mechanism regime diagram.

The originality lies in three aspects. First, the project treats phase segregation as a state-resolved physical process rather than a PL red-shift alone. Second, locking is triggered by physical state criteria rather than arbitrary illumination time. Third, the model explicitly separates conserved composition evolution from sample-averaged ionic-conductivity, proxy variables, and irreversible memory, avoiding overclaiming complete microscopic inversion. The term **"decoupling"** in this proposal denotes the experimental and modelling separation of (i) **reversible optical readout (PL, KPFM)** from (ii) **irreversible chemical / structural memory (the auxiliary field <i>q</i>(<b>r</b>) tracked by XPS, SIMS, PbI<sub>2</sub>-XRD)**, anchored at each locked state.

The main risks and fallback strategies are:

| Risk | Fallback |
|---|---|
| State locking is imperfect | quantify drift via Damköhler-number test and include residual as uncertainty |
| Cooling-induced artifacts (thermal contraction, low-T PL line-shape, exciton-polaron renormalisation) | report low-T endpoints with a paired unilluminated cooled-only control sample to subtract baseline shifts |
| Same-statistics ROI registration fails | fall back to fiducial-matched **statistical** regions (not pixel-level same-ROI) and ROI-level distributions |
| KPFM/SPV is surface-sensitive | report φ only as a surface/local potential proxy |
| SIMS/EELS damages the sample | use dose series and cross-check with XPS/GIWAXS |
| Cryogenic microscopy collaboration is unavailable | retain PL/KPFM(SPV)/XPS/SIMS/GIWAXS/Raman as the core path |
| <i>S</i><sub>0</sub>-<i>S</i><sub>5</sub> is incomplete | revise state boundaries based on data rather than forcing the initial model |

Overall, the project is designed to remain falsifiable. A **hard failure condition** is committed in advance: if, by the end of Year 2, no non-PL endpoint channel correlates with the PL-defined state labels at &gt; 2σ across replicates, the state-locked premise is abandoned and the work reverts to a kinetic-PL-only framework. Beyond this, soft failures are absorbed by uncertainty: if a channel fails, the framework is reduced to validated variables; if the six-state model is wrong, the state definition is revised; if locking is imperfect, the uncertainty becomes part of the result.

## References

1. Hoke, E. T.; Slotcavage, D. J.; Dohner, E. R.; Bowring, A. R.; Karunadasa, H. I.; McGehee, M. D. Reversible Photo-Induced Trap Formation in Mixed-Halide Hybrid Perovskites for Photovoltaics. *Chemical Science* **2015**, 6, 613-617.
2. Brivio, F.; Caetano, C.; Walsh, A. Thermodynamic Origin of Photoinstability in the CH3NH3Pb(I1-xBrx)3 Hybrid Halide Perovskite Alloy. *Journal of Physical Chemistry Letters* **2016**.
3. Tang, X.; van den Berg, M. F. A.; Gu, E.; Horneber, A.; Matt, G. J.; Osvet, A.; Meixner, A. J.; Zhang, D.; Brabec, C. J. Local Observation of Phase Segregation in Mixed-Halide Perovskite. *Nano Letters* **2018**.
4. Zhao, Y.; Miao, P.; Elia, J.; Hu, H.; Wang, X.; Heumueller, T.; et al. Strain-Activated Light-Induced Halide Segregation in Mixed-Halide Perovskite Solids. *Nature Communications* **2020**, 11, 6328.
5. Chen, Z.; Brocks, G.; Tao, S.; Bobbert, P. A. Unified Theory for Light-Induced Halide Segregation in Mixed Halide Perovskites. *Nature Communications* **2021**, 12, 2687.
6. Peng, S.; Wang, Y.; Braun, M.; Dionne, J.; Cai, W.; McIntyre, P. C. Kinetics and Mechanism of Light-Induced Phase Separation in a Mixed-Halide Perovskite. *Matter* **2023**, 6, 2052-2065.
7. Fan, Q.; Cui, Y.; Li, Y.; Karunadasa, H. I.; Lindenberg, A. M.; et al. Phase Segregation Dynamics in Mixed-Halide Perovskites Revealed by Plunge-Freeze Cryo-Electron Microscopy. *Cell Reports Physical Science* **2025**, 6, 102653.
8. Nie, T.; Fang, Z.; Ren, X.; Duan, Y.; Liu, S. Recent Advances in Wide-Bandgap Organic-Inorganic Halide Perovskite Solar Cells and Tandem Application. *Nano-Micro Letters* **2023**, 15, 70.
9. Cahn, J. W.; Hilliard, J. E. Free Energy of a Nonuniform System. I. Interfacial Free Energy. *Journal of Chemical Physics* **1958**, 28, 258-267.
