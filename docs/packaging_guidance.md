Status: approved

# Packaging Guidance

Purpose
-------
Canonical packaging direction for the AllDone repo.

This document replaces the older mixed-material pilot guidance with the current project position:

**AllDone defaults to reusable glass packaging for consumer-facing food and consumables containers, with stainless steel and silicone in the closure path.**

---

## Core packaging decision

### Default consumer-facing material stack

- Container body: borosilicate 3.3 glass
- Lid structure: food-grade stainless steel
- Seal / gasket: platinum-cured food-grade silicone
- Dispensing path: stainless steel and silicone where needed

This is the default because it best matches the project's goals:

- chemical inertness
- zero odor absorption
- repeated industrial washing
- long reuse life
- closed-loop recyclability

### Conditional alternatives

Alternative materials are allowed only where the default stack is not practical:

- tempered soda-lime glass for cost-sensitive or lower-thermal-stress SKUs
- stainless steel or anodized aluminum for selected non-transparent or high-abuse applications
- engineered plastics only where weight, pump hardware, tamper requirements, or safety constraints make them unavoidable

These are exceptions, not the main direction.

---

## Container families

### 1. Storage modules

Rectangular, fridge-compatible glass containers for meal prep, prepared foods, chilled groceries, and leftovers.

Primary requirements:

- stackable
- easy to inspect
- easy to wash
- sized for common home shelf geometry
- minimal moving parts

### 2. Dose modules

Small cylindrical or cartridge-like containers for oils, sauces, cosmetics, hygiene products, and other measured consumables.

Primary requirements:

- stable base
- tamper-evident options
- repeatable dispensing
- easy separation of wearable parts

### 3. Bulk and depot handling modules

Transport, crate, and wash-line support equipment does not need to use the same material stack as consumer containers.

For these items, the project may use:

- stainless steel
- aluminum
- industrial reusable crates
- protective rack and insert systems

---

## Design principles

1. The body should be passive and durable.
2. Wear parts should be replaceable.
3. Food-contact surfaces should stay as inert as possible.
4. Containers should open fully for inspection and sanitation.
5. Geometry should support stacking, washing, and return logistics.
6. The system should prefer standardizable footprints over one-off novelty shapes.

---

## Canonical supporting documents

- `container_material_system_spec.md` for the material stack decision
- `glass_container_family_spec.md` for storage and dose module geometry
- `reusable-packaging-systems-research.md` for external system comparisons and market lessons
- `ALLDONE_NAMING_AND_PACKAGING_DECISION.md` for the naming and concept decision trail

---

## Open decisions still requiring prototyping

- exact lid architecture for the first pilot SKUs
- breakage rates under real courier and household handling
- gasket replacement interval under actual wash chemistry
- final footprint set for home fridge use
- which non-glass exceptions are operationally justified

---

## Project rule

If another document in this repo conflicts with this one on the material choice, this document wins unless a newer approved spec explicitly replaces it.
