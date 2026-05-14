# Slide 7 Revision: Decoupling Framework for Photoinduced Halide Segregation

## 1. Purpose of This Slide

This slide should not simply state that there are five coupled latent states.  
It should define what is being decoupled, how each state variable enters the physical driving force, and why multimodal endpoint characterization is needed.

The key message should be:

> Phase segregation is the evolution of a halide composition field, but its driving force is modified by defects, local electrostatic potential, strain, interfaces, and irreversible chemistry.

The logical chain should be:

```text
hidden state field Z
    -> free-energy functional G[Z]
    -> chemical potential mu_c
    -> halide segregation kinetics
    -> multimodal readout / inference
```

This makes "decoupling" a concrete physical problem rather than a slogan.

---

## 2. Recommended Slide Title

**Decoupling Framework: Five State Fields Governing Halide Segregation**

Recommended subtitle:

**The same PL red-shift can arise from different hidden state fields; therefore, the target is to estimate the state field Z, not only observe PL.**

---

## 3. Unified State-Field Definition

The current notation mixes different styles, such as `x_Br/I`, `N_defect`, `phi_local`, and `C_deg`.  
This makes the five quantities look unrelated.

Use one consistent notation: all five quantities are spatial state fields.

$$
Z_k(\mathbf r,z)=
\left[
c_k(\mathbf r,z),
v_k(\mathbf r,z),
\phi_k(\mathbf r,z),
\varepsilon_k(\mathbf r,z),
q_k(\mathbf r,z)
\right]
$$

Here, $k$ denotes the locked material state, for example $S_0, S_1, S_2, S_3$.

| Symbol | Meaning | Experimental connection |
|---|---|---|
| $c(\mathbf r,z)$ | local iodide fraction; $x_{Br}=1-c$ | SIMS, XPS, PL peak shift |
| $v(\mathbf r,z)$ | mobile defect / halide-vacancy density | PL linewidth, trap-related emission, KPFM contrast |
| $\phi(\mathbf r,z)$ | local electrostatic potential | KPFM, SPV |
| $\varepsilon(\mathbf r,z)$ | strain or microstrain field | GIWAXS, Raman shift/broadening |
| $q(\mathbf r,z)$ | irreversible chemical degradation / memory coordinate | XPS chemical states, Raman, non-recovered endpoint signal |

Use $c$ as the iodide fraction because I-rich regions are directly linked to PL red-shift.  
The bromide fraction is then simply $1-c$.

---

## 4. Core Free-Energy Functional

The earlier expression

$$
G_{total}=G_{mix}+G_{carrier}+G_{elastic}+G_{defect}+G_{interface}
$$

is directionally useful, but it is too compressed.  
The quantities are spatial fields, so the more rigorous form is a free-energy functional:

$$
G[Z]
=
\int_{\Omega}
\left[
f_{mix}(c)
+
\frac{\kappa}{2}|\nabla c|^2
+
f_{carrier}(c;n_{ph})
+
f_{elastic}(c,\varepsilon)
+
f_{defect}(c,v,\phi,\varepsilon)
+
f_{deg}(c,q)
\right]dV
+
\int_{\Gamma}
\gamma(c,v,\varepsilon,q)dS
$$

Where:

| Term | Physical role |
|---|---|
| $f_{mix}$ | thermodynamic mixing tendency of I/Br |
| $\frac{\kappa}{2}|\nabla c|^2$ | penalty for sharp composition gradients |
| $f_{carrier}$ | photocarrier free-energy lowering in low-bandgap I-rich regions |
| $f_{elastic}$ | strain penalty caused by composition-dependent lattice mismatch |
| $f_{defect}$ | vacancy / defect contribution and electrostatic coupling |
| $f_{deg}$ | irreversible chemical memory |
| $\gamma$ | surface / grain-boundary contribution |

---

## 5. Concrete Models for Each Term

### 5.1 Mixing Free Energy

$$
f_{mix}(c)
=
\frac{k_BT}{\Omega_0}
\left[
c\ln c+(1-c)\ln(1-c)+\chi c(1-c)
\right]
$$

Meaning:

- $c\ln c+(1-c)\ln(1-c)$ is the configurational entropy of I/Br mixing.
- $\chi c(1-c)$ is the enthalpic penalty or preference for mixing.
- If $\chi$ is large enough, the mixture can become unstable or metastable, creating a miscibility gap.

This term captures the dark thermodynamic tendency toward or against halide mixing.

---

### 5.2 Gradient Energy

$$
f_{grad}
=
\frac{\kappa}{2}|\nabla c|^2
$$

Meaning:

- This penalizes abrupt spatial jumps in composition.
- It prevents the model from predicting infinitely sharp I-rich / Br-rich boundaries.
- It sets a characteristic length scale for phase-separated domains.

This term is standard in phase-field descriptions of spinodal decomposition and phase separation.

---

### 5.3 Photocarrier Contribution

A simple presentation-level model is:

$$
f_{carrier}(c;n_{ph})
\approx
n_{ph}E_g(c)
$$

The local bandgap can be written with a bowing relation:

$$
E_g(c)
=
cE_g(I)
+
(1-c)E_g(Br)
-
b c(1-c)
$$

Meaning:

- $n_{ph}$ is the photocarrier density under illumination.
- $E_g(c)$ decreases as the local region becomes more I-rich.
- Photocarriers lower their energy by funneling into lower-bandgap I-rich regions.
- This adds a light-induced driving force for segregation.

This term explains why a film that is relatively stable in the dark can segregate under illumination.

---

### 5.4 Elastic / Strain Contribution

$$
f_{elastic}(c,\varepsilon)
=
\frac{1}{2}C
\left[
\varepsilon-\alpha(c-c_0)
\right]^2
$$

Meaning:

- I and Br have different ionic sizes.
- A change in local halide composition changes the preferred lattice parameter.
- $c_0$ is the initial iodide fraction.
- $\alpha(c-c_0)$ is the composition-induced eigenstrain.
- $C$ is an effective elastic modulus.

This term means strain is not just a consequence of segregation.  
It can also modify the local driving force for segregation.

---

### 5.5 Defect and Electrostatic Contribution

The defect free energy can be written as:

$$
f_{defect}(c,v,\phi,\varepsilon)
=
\frac{k_BT}{\Omega_0}
\left[
v\ln v+(1-v)\ln(1-v)
\right]
+
vE_v(c,\phi,\varepsilon)
$$

with:

$$
E_v(c,\phi,\varepsilon)
=
E_v^0
+
\lambda_c(c-c_0)
+
q_v e\phi
+
\lambda_{\varepsilon}\varepsilon
$$

Meaning:

- $v$ is the local vacancy or mobile defect density.
- $E_v$ is the local defect formation energy.
- Defect formation energy can change with composition, electrostatic potential, and strain.
- A higher vacancy density can increase halide mobility and accelerate segregation.

The local electrostatic potential can be connected to charge distribution using a Poisson-type relation:

$$
-\nabla\cdot(\epsilon_{perm}\nabla\phi)
=
\rho
$$

$$
\rho
=
e(p-n+q_vv+\rho_{fixed})
$$

Meaning:

- $\phi$ is not an independent decoration.
- It reflects local charge imbalance from electrons, holes, charged defects, and fixed charges.
- This gives KPFM / SPV a physical role in the decoupling framework.

---

### 5.6 Irreversible Chemical Memory

$$
f_{deg}(c,q)
=
\lambda_q q(c-c_0)
+
\frac{1}{2}K_q q^2
$$

with slow evolution:

$$
\frac{\partial q}{\partial t}
=
k_q(c,v,I,T)(1-q)
$$

Meaning:

- $q$ is not the same as PL intensity.
- It represents slow or irreversible chemical change.
- Examples include oxidation, decomposition-related chemical states, or non-recovered bonding environments.
- $q$ explains why PL recovery does not necessarily mean physical recovery.

This term is important because it connects the "locked endpoint" idea to a testable material memory.

---

### 5.7 Surface and Grain-Boundary Contribution

The interfacial contribution is better written as a surface integral:

$$
G_{interface}
=
\int_{\Gamma}
\gamma(c,v,\varepsilon,q)dS
$$

Its variation gives the boundary condition:

$$
\kappa\nabla c\cdot\mathbf n
=
-
\frac{\partial \gamma}{\partial c}
$$

Meaning:

- Grain boundaries and surfaces can attract or repel certain halide compositions.
- They can also accumulate defects or degradation products.
- Therefore, GB/surface effects are not just morphology; they alter the boundary condition for segregation.

This is a cleaner way to connect boundary dependence to the phase-field model.

---

## 6. The Actual Decoupling Equation

The direct evolving variable for halide segregation is $c$.  
The driving force is its chemical potential:

$$
\mu_c
=
\frac{\delta G}{\delta c}
$$

This can be written conceptually as:

$$
\mu_c
=
\mu_{mix}
+
\mu_{grad}
+
\mu_{carrier}
+
\mu_{elastic}
+
\mu_{defect}
+
\mu_{deg}
+
\mu_{interface}
$$

Then the segregation kinetics follow a Cahn-Hilliard-type equation:

$$
\frac{\partial c}{\partial t}
=
\nabla\cdot
\left[
M_c(c,v,T)\nabla\mu_c
\right]
$$

with mobility:

$$
M_c(c,v,T)
\approx
\frac{D_c(v,T)c(1-c)}{k_BT}
$$

Meaning:

- $c$ changes because gradients in chemical potential drive halide transport.
- $v$ affects the mobility because vacancy density changes ion migration pathways.
- Temperature enters through both thermodynamics and diffusion.

The key sentence for the slide:

> Decoupling means separating the contributions to $\mu_c$, not simply listing five variables.

---

## 7. Recommended Slide Layout

### Left side: State fields

Use a clean vertical or radial diagram, but avoid implying that every pair is equally and directly coupled.

```text
Z_k(r,z) = [c, v, phi, epsilon, q]

c(r,z): halide composition
v(r,z): mobile defects / vacancies
phi(r,z): local potential
epsilon(r,z): strain
q(r,z): chemical memory
```

### Right side: Physical model

Use only three core equations:

$$
G[Z]
=
\int_{\Omega}
\left[
f_{mix}
+
f_{grad}
+
f_{carrier}
+
f_{elastic}
+
f_{defect}
+
f_{deg}
\right]dV
+
\int_{\Gamma}\gamma dS
$$

$$
\mu_c=\frac{\delta G}{\delta c}
$$

$$
\frac{\partial c}{\partial t}
=
\nabla\cdot
\left[
M_c\nabla\mu_c
\right]
$$

### Bottom message

```text
PL red-shift is an observable, not a mechanism.
The mechanism is identified by which term dominates mu_c.
```

---

## 8. What to Remove from the Current Slide

Remove or reduce:

- "every pair coupled bidirectionally"
- full five-point bidirectional coupling language
- mixed notation such as `x_Br/I`, `N_defect`, `C_deg`
- a bare formula like `Gtotal = Gmix + Gcarrier + Gelastic + Gdefect + Ginterface` without explanation

Reason:

These phrases sound broad but do not tell the examiner what is measurable, what is modeled, or what is being decoupled.

---

## 9. Recommended Final Message of Slide 7

The slide should leave the examiner with one clear idea:

> The research does not claim that PL red-shift alone proves phase segregation mechanism.  
> Instead, it defines a state field $Z$, derives the segregation driving force from $G[Z]$, and uses locked endpoint measurements to estimate which physical term dominates $\mu_c$.

This makes the transition to the next methodology slide much stronger:

```text
Need to estimate Z
    -> write state by illumination
    -> lock state
    -> read endpoint projections
    -> infer which term controls mu_c
```

---

## 10. Literature Basis

This framework is consistent with the following physical ideas:

- Brivio et al. 2016: mixed-halide perovskites can show miscibility-gap / spinodal behavior.
- Hoke et al. 2015: light-induced spectral and structural changes can be reversible, but optical recovery alone does not fully define physical recovery.
- Chen et al. 2021: photocarrier free-energy lowering in lower-bandgap I-rich regions can drive light-induced segregation.
- Peng et al. 2023: phase-field modeling and cryo-STEM-CL observations support spinodal-type phase separation with coupled electronic and chemical driving forces.

