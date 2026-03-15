# Pilot Model And Assumptions

Status: working assumptions

Purpose
-------
This document defines a practical first-pilot shape for AllDone and provides the minimum business information an investor, partner, or operator will ask for.

These are working assumptions for planning and communication. They are not audited financials or vendor-quoted costs.

## Proposed first pilot

The first pilot should be narrow.

Recommended shape:

- one dense residential cluster
- 60 active households
- weekly recurring replenishment
- grocery staples and a small set of fridge-stable recurring goods
- reusable glass as the default consumer-facing container standard
- deposit-backed returns
- one wash partner or one centralized small depot wash line

This is enough to validate the loop without pretending to have solved the whole market.

## Pilot offer

The pilot offer should be simple:

- households subscribe to a recurring supply plan
- the basket is edited within a defined cut-off window
- filled containers arrive on a scheduled day
- empties are picked up on the same stop or the following cycle
- containers are inspected, washed, refilled, and recirculated

## Default pilot assumptions

| Item | Working assumption |
|---|---|
| Pilot environment | one apartment-block cluster or housing cooperative |
| Active households | 60 |
| Delivery cadence | once per week |
| Initial product scope | 8-15 recurring staple SKUs |
| Avg weekly basket per household | EUR 55 |
| Service fee per household per week | EUR 5 |
| Refundable household deposit | EUR 40 |
| Avg issued containers per household per cycle | 4 |
| Fleet buffer multiplier | 1.5x |
| Return window | by next scheduled cycle |

## Derived pilot scale

Using the assumptions above:

- weekly merchandise volume: `60 x EUR 55 = EUR 3,300`
- monthly merchandise volume at steady state: about `EUR 14,300`
- annualized merchandise volume at steady state: about `EUR 171,600`
- weekly service-fee revenue: `60 x EUR 5 = EUR 300`
- annualized service-fee revenue at steady state: about `EUR 15,600`
- deposit float collected at full activation: `60 x EUR 40 = EUR 2,400`
- active container turns per week: `60 x 4 = 240`
- target container fleet for pilot: `240 x 1.5 = 360` containers

These figures are useful because they convert the idea into a testable operating scale.

## What has to be true for the pilot to deserve scaling

The pilot should only be described as scale-worthy if it reaches most of the following thresholds:

- active household retention is strong after the initial trial period
- return compliance is at least 97 percent within the agreed return window
- combined breakage and non-return stays below 1 percent of container turns
- wash and recirculation is operationally stable
- the route cluster is dense enough that stops are efficient
- the household experience is clearly better than ordinary shopping and ordinary disposable delivery

## Working economic thresholds

The exact numbers will vary by geography, labor, and sourcing, but the business logic is straightforward.

The first pilot should aim for:

- average weekly basket of at least `EUR 45`
- service fee of at least `EUR 4-6` per active household per week
- one dense cluster rather than dispersed neighborhoods
- container reuse high enough that packaging capex is amortized over many cycles
- wash and return cost low enough that the reusable loop beats disposable packaging plus fragmented last-mile behavior

If those conditions cannot be met, the pilot should be redesigned before scaling.

## Indicative pilot capital needs

Order-of-magnitude cash needs for a narrow first pilot:

| Category | Indicative range |
|---|---|
| Initial glass container fleet and closures | EUR 3,000-EUR 8,000 |
| Crates, racks, totes, and handling materials | EUR 2,000-EUR 6,000 |
| Wash setup or wash-partner onboarding | EUR 5,000-EUR 20,000 |
| Labels, scanning, and small ops equipment | EUR 1,000-EUR 4,000 |
| Pilot launch reserve for labor, spoilage, transport, and contingencies | EUR 20,000-EUR 60,000 |

Indicative total hard-cost range, excluding founder labor and major facility build-out:

- `EUR 31,000-EUR 98,000`

If software hardening is externally contracted rather than founder-built, add a separate build budget.

## What the money is for

Investment in AllDone should fund:

- the first real container fleet
- the return and wash loop
- the first narrow operating environment
- the software required to run the loop
- the evidence needed to prove repeatability

The money is not mainly for marketing theater. It is for proving that the closed loop works.

## Minimum operating requirements before launch

- first pilot container set locked
- wash and inspection SOP written
- return policy written
- breakage and retirement rules written
- household subscription and billing flow defined
- container status tracking live
- route manifest and pickup confirmation live

## Questions an investor will ask

AllDone should be able to answer these clearly:

- What exact user problem is solved?
- Why is this better than ordinary grocery delivery?
- What is the first pilot environment?
- What is the first product scope?
- Why glass, and where are the exceptions?
- What return behavior is required?
- What makes the unit economics work?
- What does the software need to do versus what can stay manual in the first pilot?
- What proof points would justify a larger round or broader rollout?

## Current answer set

The repo can now answer most of the framing questions.

What still needs live validation:

- real supplier quotes
- real wash costs
- real breakage rates
- real household retention and return behavior
- real route density and stop-time performance

## Next proof points

The next stage should produce:

1. a locked pilot brief
2. a first operating SOP for return and wash
3. a real container sourcing estimate
4. a basic operator-facing software flow
5. pilot metrics from actual households
