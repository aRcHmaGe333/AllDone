# Operations MVP Scope

Status: prototype backend implemented

Purpose
-------
This document defines the operator-facing MVP scope currently implemented in the AllDone backend prototype.

## Current prototype coverage

The repo now includes a prototype backend surface for:

- household records
- subscription records
- pack-plan generation
- route manifest generation
- route stop completion
- container lifecycle states
- return intake processing
- wash batch creation, inspection, and release
- billing-event recording
- local file-backed persistence across restarts

## API surface

Prototype route root:

- [operations.js](../src/backend/routes/operations.js)

Prototype service logic:

- [AllDoneOperationsService.js](../src/backend/services/AllDoneOperationsService.js)

## What this clears in the backlog

At prototype backend scope, this covers:

- `P4.1`
- `P4.2`
- `P4.3`
- `P4.4`
- `P4.5`
- `P4.6`

## What it does not claim

This does not mean:

- production persistence exists
- security exists
- payment integration exists
- multi-user auth exists
- pilot operations are fully validated

It means the repo now contains the core operator-facing execution skeleton instead of only demand-learning logic.
It also means that skeleton now survives restart in local runtime JSON storage.
