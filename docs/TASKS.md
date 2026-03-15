# AllDone Task Backlog

Status: active

Purpose
-------
This is the canonical task list derived from:

- the current repo and business assessment
- the glass-first packaging decision
- the newly consolidated container and material research

Tasks are grouped by practical sequence, not by abstract category.

---

## Completed already

The following backlog items are already complete in the current repo state:

- `P0.1` Rename internal software terminology away from `PrecisionDelivery`
- `P0.4` Reduce front-door documentation clutter
- `P0.5` Maintain the publication boundary
- `P1.1` Lock the first pilot container set
- `P1.2` Define the first production-intent closure architecture
- `P1.3` Validate borosilicate vs tempered soda-lime fallback strategy with sourcing reality
- `P1.4` Define gasket service policy
- `P1.5` Define breakage assumptions and mitigation
- `P1.6` Convert the container family spec into an engineering test brief
- `P2.1` Define the wash-line operating model
- `P2.2` Write the first real container processing SOP
- `P2.3` Define a return-loop policy
- `P2.4` Define depot equipment assumptions
- `P3.2` Define the first pilot environment
- `P3.3` Narrow the first product scope
- `P3.4` Create a regulatory and food-safety review checklist
- `P3.1` Build a pilot unit economics model
- `P4.7` Keep advanced consumption learning secondary to closed-loop execution
- `P4.1` Implement household and subscription records
- `P4.2` Implement fulfillment and pack planning
- `P4.3` Implement route and stop planning
- `P4.4` Implement container lifecycle tracking
- `P4.5` Implement wash and inspection workflow support
- `P4.6` Implement billing and exception handling
- `P5.1` Produce a true pilot brief
- `P5.2` Produce a canonical architecture overview

These remain listed below for traceability, but they are no longer active blockers.

---

## Phase 0: Repo and publication cleanup

### P0.1 Rename internal software terminology away from PrecisionDelivery

Status: completed

- Rename code and comments that still use `PrecisionDistribution` or `precision distribution` as the primary system name.
- Keep historical references only where they are explicitly part of the naming transition record.
- Update public-facing wording first; update internal class/file names second.

### P0.2 Refresh the timestamp proof chain for the current AllDone state

- Commit the renamed and consolidated repo.
- Push from the `AllDone` path.
- Confirm a fresh `.timestamps` proof is created for the current repository state.
- Update `LICENSE.md` proof status after the new timestamp exists.

### P0.3 Update the GitHub remote after the remote repo is renamed

- Change the repository slug from `PrecisionDelivery` to `AllDone` on the hosting side.
- Update `.git/config` remote URL locally after the remote rename is real.

### P0.4 Reduce front-door documentation clutter

Status: completed

- Move draft or deprecated docs out of the main `docs` surface if they are not canonical.
- Likely candidates:
  - `not_public/working_notes/New_bearings.md`
  - `not_public/working_notes/delivery_decision_checklist.md`
- Keep the evidence, but stop presenting draft material as primary documentation.

### P0.5 Maintain the publication boundary

Status: completed

- Keep `docs/` canonical and public.
- Keep raw exports, duplicated compilations, and private diligence material under `not_public/`.
- Do not allow future research dumps to drift back into the public repo surface.

---

## Phase 1: Packaging and container validation

### P1.1 Lock the first pilot container set

Status: completed

- Confirm the initial pilot SKUs:
  - `Storage-M`
  - `Dose-M`
- Decide whether a third pilot SKU is needed or whether two is enough for early validation.
- Record the final pilot set in `glass_container_family_spec.md`.

### P1.2 Define the first production-intent closure architecture

Status: completed

- Select the first closure type for storage modules.
- Select the first closure type for dose modules.
- Decide whether clamp lids are genuinely needed in the pilot or whether screw-thread closures are enough.
- Document the decision and rationale.

### P1.3 Validate borosilicate vs tempered soda-lime fallback strategy with sourcing reality

Status: completed at indicative supplier-scan level

- Contact target suppliers or gather procurement quotes.
- Verify:
  - MOQ
  - tooling cost
  - per-unit cost by volume
  - lead times
  - available tolerances
- Use the result to decide whether borosilicate remains the pilot default or whether tempered soda-lime is temporarily necessary for the first trial.

### P1.4 Define gasket service policy

Status: completed

- Test or estimate gasket wear under the intended wash chemistry and cycle count.
- Establish:
  - inspection interval
  - replacement interval
  - spare part stocking assumptions

### P1.5 Define breakage assumptions and mitigation

Status: completed

- Create a breakage model for:
  - depot handling
  - route transport
  - household use
  - returns
- Specify mitigation measures:
  - crate/rack design
  - separators or bumpers
  - handling instructions
  - retirement thresholds

### P1.6 Convert the container family spec into an engineering test brief

Status: completed

- Add target wall thickness ranges.
- Add target weights.
- Add allowable dimensional tolerances.
- Add pass/fail tests:
  - wash cycle survival
  - low-height drop
  - leak resistance
  - stacking stability

---

## Phase 2: Wash, return, and depot operations

### P2.1 Define the wash-line operating model

Status: completed

- Decide whether the pilot uses:
  - centralized depot washing
  - distributed washing
  - a hybrid model
- Base the choice on actual pilot scale rather than abstract preference.

### P2.2 Write the first real container processing SOP

Status: completed

- Intake dirty returns
- Inspect
- Segregate damaged units
- Wash
- Dry
- Reassemble
- Refill-ready release

This should become an operational document, not just a concept note.

### P2.3 Define a return-loop policy

Status: completed

- How containers are collected
- What happens if containers are not returned
- Whether deposits are needed
- Whether subscription pickup alone is enough
- What the loss threshold is before intervention

### P2.4 Define depot equipment assumptions

Status: completed

- Rack sizes
- Washer model assumptions
- Storage layout
- Inspection station requirements
- Refill staging requirements

---

## Phase 3: Business and pilot readiness

### P3.1 Build a pilot unit economics model

Status: completed

- Container capex
- Closure/gasket replacement
- Wash cost
- Breakage cost
- Transport cost
- Labor cost
- Return compliance assumptions
- Subscription pricing assumptions

The project should not be described as pilot-ready until this exists in a defensible form.

### P3.2 Define the first pilot environment

Status: completed

- apartment block
- housing cooperative
- office or campus
- mixed neighborhood

Choose one. The rest can wait.

### P3.3 Narrow the first product scope

Status: completed

- Decide whether the first pilot is:
  - chilled prepared food
  - grocery staples
  - hygiene/household consumables
  - a tightly defined mixed basket

The current concept is broader than a first pilot should be.

### P3.4 Create a regulatory and food-safety review checklist

Status: completed

- food-contact materials
- wash/sanitation requirements
- labeling
- tamper evidence where needed
- cosmetics or hygiene-specific requirements if dose modules are included

---

## Phase 4: Software MVP

### P4.1 Implement household and subscription records

Status: completed at prototype backend scope

- household profile
- recurring supply plan
- cadence
- skip/pause/change flow
- dietary and handling constraints

### P4.2 Implement fulfillment and pack planning

Status: completed at prototype backend scope

- what must be packed today
- quantities by household
- mapping from order line to container SKU
- exception handling for unavailable items

### P4.3 Implement route and stop planning

Status: completed at prototype backend scope

- route manifest
- stop order
- delivery window
- return pickup association
- driver-facing completion states

### P4.4 Implement container lifecycle tracking

Status: completed at prototype backend scope

- issued
- in customer possession
- returned
- washing
- ready to refill
- damaged
- retired

### P4.5 Implement wash and inspection workflow support

Status: completed at prototype backend scope

- batch intake
- defect recording
- gasket replacement logging
- container release back to inventory

### P4.6 Implement billing and exception handling

Status: completed at prototype backend scope

- recurring billing
- missed return fees or credits
- breakage or loss handling
- plan changes

### P4.7 Delay advanced consumption learning until the loop works

Status: completed

- Keep the existing prototype logic as non-core.
- Do not treat consumption prediction as the MVP backbone.
- Basic closed-loop execution matters more than optimization at this stage.

---

## Phase 5: Documentation hardening

### P5.1 Produce a true pilot brief

Status: completed

- chosen pilot environment
- chosen pilot SKUs
- chosen wash model
- chosen business model
- chosen software scope
- chosen success metrics

### P5.2 Produce a canonical architecture overview

Status: completed

- household
- supply
- packaging
- route
- return
- wash
- refill
- billing
- software touchpoints

### P5.3 Keep archive discipline

- New raw exports go under `not_public/`
- Canonical outputs stay in top-level `docs/`
- Avoid reintroducing duplicated raw chat dumps into the public documentation surface

---

## Immediate recommended order

1. Complete Phase 0.2 and 0.3.
2. Complete `P1.3`.
3. Harden the prototype MVP beyond in-memory scope if a live pilot build starts.
4. Replace planning assumptions with live pilot evidence.
