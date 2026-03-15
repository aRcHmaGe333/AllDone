# API Quickstart

Purpose
-------
This is the fastest way to run the AllDone prototype backend and inspect the current API surface.

## What it includes

- distribution and consumption prototype endpoints
- operations MVP endpoints for households, subscriptions, pack plans, routes, returns, wash, and billing
- local file-backed persistence under `data/runtime/`

## Run

Install dependencies, then start the API:

```bash
npm install
npm run start
```

For a demo run with sample data preloaded:

```bash
npm run demo:api
```

Default port:

```text
3100
```

## Core endpoints

- `GET /`
- `GET /health`
- `GET /api/distribution`
- `GET /api/operations`

## Useful operations flow

1. `POST /api/operations/households`
2. `POST /api/operations/subscriptions`
3. `POST /api/operations/pack-plans/generate`
4. `POST /api/operations/routes/generate`
5. `POST /api/operations/returns/process`
6. `POST /api/operations/wash-batches`
7. `POST /api/operations/wash-batches/:washBatchId/inspect`
8. `POST /api/operations/wash-batches/:washBatchId/release`
9. `POST /api/operations/billing/events`
10. `GET /api/operations/dashboard`

## Runtime data

Prototype state is persisted locally in gitignored JSON files under `data/runtime/`.

This is intentional for prototype continuity, but it is not a production storage design.

## Scope note

This API is a prototype backend for system understanding and pilot-shape demonstration.

It should be presented as:

- funding-ready technical artifact
- operator-facing MVP skeleton

It should not be presented as:

- production backend
- pilot-proven operating software
