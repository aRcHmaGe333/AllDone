# Pilot Unit Economics

Status: assumption-based planning model

Purpose
-------
This document provides the first defensible pilot unit-economics model for AllDone.

It closes `P3.1` at the planning level.

This is not validated field data. It is an explicit planning model that can later be replaced with live pilot evidence.

## Base pilot assumptions

From [PILOT_MODEL_AND_ASSUMPTIONS.md](PILOT_MODEL_AND_ASSUMPTIONS.md):

- `60` active households
- `EUR 55` average weekly basket per household
- `EUR 5` weekly service fee per household
- `4` issued containers per household per week
- `360` container pilot fleet

## Commercial assumptions

Working planning assumptions:

| Variable | Assumption |
|---|---|
| Average weekly basket | EUR 55 |
| Merchandise gross margin | 30-35% |
| Weekly service fee | EUR 5 |
| Deposit | EUR 40 refundable |

## Loop-cost assumptions

Working operating assumptions for a dense-cluster pilot:

| Cost item | Working range |
|---|---|
| Container depreciation per turn | EUR 0.20-EUR 0.45 |
| Wash + inspection per returned container | EUR 0.25-EUR 0.60 |
| Gasket and closure reserve per container turn | EUR 0.05-EUR 0.15 |
| Breakage + loss reserve per container turn | EUR 0.05-EUR 0.20 |
| Route cost per household stop | EUR 2.50-EUR 4.50 |

## Per-household weekly loop cost

At `4` containers per household per week:

- packaging-loop cost per container turn:
  - low case: `0.20 + 0.25 + 0.05 + 0.05 = EUR 0.55`
  - high case: `0.45 + 0.60 + 0.15 + 0.20 = EUR 1.40`

- packaging-loop cost per household per week:
  - low case: `4 x 0.55 = EUR 2.20`
  - high case: `4 x 1.40 = EUR 5.60`

- add route cost per weekly stop:
  - low case: `EUR 2.50`
  - high case: `EUR 4.50`

Estimated total loop cost per household per week:

- low case: `EUR 4.70`
- high case: `EUR 10.10`

## Per-household weekly gross contribution before central overhead

Merchandise gross profit:

- low case: `EUR 55 x 30% = EUR 16.50`
- high case: `EUR 55 x 35% = EUR 19.25`

Add weekly service fee:

- low case inflow before loop cost: `EUR 21.50`
- high case inflow before loop cost: `EUR 24.25`

Subtract loop cost:

- low-case contribution after loop cost: `EUR 21.50 - EUR 10.10 = EUR 11.40`
- high-case contribution after loop cost: `EUR 24.25 - EUR 4.70 = EUR 19.55`

## Pilot-level weekly contribution before central overhead

At `60` active households:

- low case: `60 x EUR 11.40 = EUR 684` per week
- high case: `60 x EUR 19.55 = EUR 1,173` per week

Approximate monthly contribution before central overhead:

- low case: about `EUR 2,964`
- high case: about `EUR 5,083`

## What this means

The logic of the pilot is plausible if:

- merchandise margins are real
- route density stays high
- return compliance stays high
- breakage stays low
- the wash loop remains disciplined

The pilot does not require the `EUR 5` service fee to carry the whole business by itself.

The combined model is:

- merchandise margin
- service fee
- reusable packaging loop discipline

## Sensitivity points

The economics degrade quickly if:

- households are too geographically dispersed
- average weekly basket falls materially below `EUR 45`
- breakage or non-return rises above target
- wash labor is much higher than assumed
- stop-time efficiency is poor

## Current conclusion

At the planning level, the first pilot is economically worth testing.

It is not yet economically proven.

That is the correct external wording.
