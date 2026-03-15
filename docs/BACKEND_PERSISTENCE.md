# Backend Persistence

Status: implemented

Purpose
-------
This document explains the current persistence model used by the AllDone backend prototype.

## What exists now

The backend no longer relies only on in-memory state during a single process lifetime.

Current persistence model:

- file-backed JSON runtime state
- automatic save on mutating operations
- automatic reload on service startup

Runtime directory:

- `data/runtime/`

Runtime state files:

- `operations.json`
- `distribution.json`

These files are intentionally gitignored.

## What this improves

- operator-flow prototype data survives restart
- distribution prototype data survives restart
- the repo can demonstrate a basic persistent workflow without requiring external infrastructure

## What this does not mean

This is not yet:

- a production database layer
- concurrent-safe multi-process persistence
- migration-managed storage
- hardened transactional infrastructure

The correct claim is:

the prototype now has local file-backed persistence, not just process-memory state.
