# Container Material System Specification

Status: approved

## Decision

The default AllDone material stack for reusable consumer-facing containers is:

- Container body: borosilicate 3.3 glass
- Lid structure: food-grade stainless steel
- Seal / gasket: platinum-cured food-grade silicone
- Dispensing path: stainless steel and silicone where needed

This is the preferred stack for food and preservative-light consumables in a closed-loop return, wash, refill, and recirculation system.

## Why this stack wins

### Chemical behavior

- glass is inert to normal food acids, oils, alcohols, and most household consumables
- glass does not absorb odors or staining
- stainless steel and platinum silicone are stable under repeated wash and refill use

### Reuse durability

- borosilicate handles thermal cycling better than standard soda-lime glass
- stainless lids avoid plastic hinge fatigue
- silicone gaskets are the only intentionally replaceable wear component

### Sanitation compatibility

- the stack is compatible with repeated industrial wash cycles
- surfaces are easy to inspect for residue and damage
- removable seals allow deeper cleaning and scheduled replacement

## Expected lifecycle

Indicative target ranges:

- Glass body: 300-500+ cycles under controlled handling
- Stainless lid: effectively long-life unless mechanically damaged
- Silicone gasket: planned replacement component, approximately 100-200 cycles depending on seal design and wash chemistry

Actual lifespan depends on:

- drop rate
- stacking geometry
- wash temperatures and detergents
- user handling
- transport packaging quality

## Materials to avoid as the primary default

### Tempered soda-lime glass

Useful as a fallback, but not the ideal default when thermal cycling and sanitation load are the main design drivers.

### HDPE

Not the preferred choice for repeated high-temperature sanitation or long-life closure systems.

### Wood

Poor fit for moisture, odor, and hygiene control in a closed-loop wash system.

### Plastic-heavy lid systems

PP, Tritan, and similar plastics can still be useful in constrained situations, but they should not define the main AllDone standard where inertness and long-cycle durability are the priority.

## Preferred lid architecture

Preferred direction:

- stainless screw-thread or similarly robust closure
- removable silicone gasket
- minimal moving parts
- full access for cleaning

Avoid complex clip-heavy consumer lid mechanisms unless testing proves they survive the intended cycle count.

## Fallback strategy

If sourcing or cost makes full borosilicate rollout impractical in the first pilot, the fallback order is:

1. borosilicate glass plus steel plus silicone
2. tempered soda-lime glass plus steel plus silicone
3. selective use of engineered plastic only where specific operational constraints require it

The project should not revert to a plastic-first packaging strategy as the main direction.

## What still needs validation

- empirical breakage rates
- gasket service interval
- wash-line compatibility by exact closure design
- weight and ergonomics by SKU
- procurement and MOQ reality from target suppliers
