# Investor Overview

## AllDone in one sentence

**AllDone removes grocery shopping by making household supply continuous.**

Recurring goods arrive according to household demand and use. Suitable goods travel in reusable containers. Empty containers come back on the recurring route, are inspected, washed, refilled and returned to circulation.

The household keeps control of what it wants while much of the remembering, planning, travelling, carrying, packaging disposal and quantity guesswork moves into the service.

## The problem

Routine grocery shopping is a supply job performed separately by every household.

Someone checks stock, predicts shortages, chooses quantities, makes a list, travels, picks, carries, unloads, stores and later deals with the packaging and food that was bought in the wrong amount.

Standard grocery delivery removes some travel and carrying. It usually keeps the same fixed retail packs, disposable packaging and one-off order behaviour.

AllDone is designed around the recurring need itself.

## Where the value comes from

For households, the main gains are time, attention, carrying effort, more predictable supply and a closer fit between delivered quantity and actual use.

For dense buildings, recurring delivery and return can reduce fragmented trips and packaging entering shared waste streams.

For suppliers and fulfillment partners, recurring household demand can become visible earlier and packing can happen against a known route and household set.

For the operator, the business case comes from combining merchandise margin and a service fee with a loop that becomes more efficient as route density, container reuse and operational learning improve.

The correct economic benchmark is the full grocery loop against the full AllDone loop. [TOTAL_SYSTEM_VALUE_MODEL.md](TOTAL_SYSTEM_VALUE_MODEL.md) sets out that comparison.

## The first pilot

The current working model is:

- one apartment-block cluster or housing cooperative
- about 60 active households
- weekly replenishment
- 8-15 staple SKUs
- `Storage-M` and `Dose-M` reusable container formats
- deposit-backed returns
- one centralized wash point

The pilot is deliberately narrow. It exists to measure return behaviour, wash cost, breakage and loss, route time, labour per household, repeat use, food waste avoided, packaging avoided and contribution before central overhead.

The planning model uses a EUR 55 weekly basket, a EUR 5 weekly service fee and four container turns per household. Those figures are working assumptions until live operation replaces them with measured values.

See [PILOT_MODEL_AND_ASSUMPTIONS.md](PILOT_MODEL_AND_ASSUMPTIONS.md) and [PILOT_UNIT_ECONOMICS.md](PILOT_UNIT_ECONOMICS.md).

## What already exists

The repository already contains:

- the system and pilot design
- container material and family specifications
- return, wash, inspection, breakage and gasket policies
- a regulatory and food-safety checklist for pilot planning
- an assumption-based unit-economics model
- a Node.js/Express prototype for household, pack, route, return, wash and billing workflows
- earlier consumption-learning and quantity-adjustment logic
- local file-backed persistence for prototype continuity
- a public authorship and timestamp-verification trail

The backend is useful enough to demonstrate the operating sequence and still needs pilot hardening, especially around persistence, operator interfaces and payment/deposit handling.

## Current stage

AllDone is public, documented, prototype-backed and ready for serious early funding conversations about the next proof stage.

The operation has not yet been demonstrated in a live pilot. Supplier quotes, physical samples, measured wash and breakage data, a pilot site, recruited households, local compliance clearance and live retention and route data remain to be produced.

That distinction matters: funding would pay to create the evidence, rather than finance a claim that the evidence already exists.

## What early funding buys

The current planning range is EUR 250,000-500,000, with EUR 350,000 used as the main 12-18 month case.

That capital is intended to fund:

- the first real container fleet and handling equipment
- wash-and-return operations
- software hardening and simple driver/depot interfaces
- legal and compliance work
- pilot labour and working capital
- enough runway to collect meaningful operating data

The separate narrow pilot model puts the initial physical hard-cost range at roughly EUR 31,000-98,000 before founder labour or a major facility build-out.

## What creates an advantage

Today the advantage is the integrated design: demand, quantities, containers, delivery, returns, washing and software have been designed as parts of one operating loop.

A live pilot can turn that design into practical knowledge about container lifespan, closure failures, wash cost, packing accuracy, return behaviour, route density, building access, household changes and the exceptions the software must handle.

That operating knowledge is more difficult to reproduce than a customer-facing screen.

## Reading path

- [README](../README.md)
- [Value proposition](VALUE_PROPOSITION.md)
- [Pilot brief](PILOT_BRIEF.md)
- [Pilot economics](PILOT_UNIT_ECONOMICS.md)
- [Architecture overview](ARCHITECTURE_OVERVIEW.md)
- [Why now and advantage](WHY_NOW_AND_UNFAIR_ADVANTAGE.md)
- [Three risks](THREE_RISKS.md)
- [Raise plan](RAISE_PLAN.md)
