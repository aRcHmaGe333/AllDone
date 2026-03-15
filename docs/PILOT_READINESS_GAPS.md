# Pilot Readiness Gaps

Status: active

This document identifies what still blocks AllDone from being presented as pilot-ready.

## Operational gaps

- no finalized pilot environment
- no finalized wash model
- no finalized return policy
- no finalized breakage assumptions
- no real SOP for intake, wash, inspection, and recirculation

## Packaging gaps

- first production-intent closure architecture not locked
- gasket replacement policy not validated
- supplier and MOQ reality not validated
- engineering test brief not yet completed

## Business gaps

- no live-validated pilot unit economics model
- no success-metric definition for a first pilot

## Required decisions now recorded

The repo now includes a default pilot shape and working commercial assumptions in [PILOT_MODEL_AND_ASSUMPTIONS.md](PILOT_MODEL_AND_ASSUMPTIONS.md).
The repo now also includes a first planning economics model in [PILOT_UNIT_ECONOMICS.md](PILOT_UNIT_ECONOMICS.md).

What remains missing is live validation of those assumptions.

## Software gaps

- no persistent production-ready subscription system
- no persistent production-ready fulfillment or pack-planning system
- no hardened route/stop execution layer
- no hardened container lifecycle system
- no production billing and exception handling integration layer

The repo now contains a prototype operator-facing backend surface for those functions in [OPERATIONS_MVP_SCOPE.md](OPERATIONS_MVP_SCOPE.md).

## Repo communication gap

The repo should remain framed as concept, research, and prototype until the gaps above are materially addressed.
