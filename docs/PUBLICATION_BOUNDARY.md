# Publication Boundary

Status: active

Purpose
-------
This document defines what belongs in the public AllDone repository and what should remain outside versioned public materials.

## Public by default

These belong in the public repo:

- canonical concept and system docs
- packaging and container specifications
- pilot assumptions and fundraising framing
- prototype source code
- IPClaim publication and verification files
- concise investor-readiness docs

If a file helps a serious outsider understand what AllDone is, what it provides, and what it still needs, it likely belongs in the public repo.

## Not public by default

These should not live in the public tracked tree:

- raw chat exports
- full research dumps
- duplicated compilations
- draft working notes that are not canonical
- ad hoc diligence materials containing counterpart names or private terms
- local operating spreadsheets
- local models with private assumptions
- contact lists
- outreach logs
- partner or supplier notes that are not intended for publication

## Current repository rule

Top-level `docs/` is for canonical public documentation only.

Raw source bundles, deprecated notes, and other non-canonical working materials should be placed under:

- `not_public/`

That path is gitignored on purpose.

## Investor data room rule

The public repo may contain:

- the structure of the data room
- the narrative docs used in fundraising

The public repo should not contain:

- private diligence files
- contact details
- unpublished commercial terms
- sensitive partner materials

Use a gitignored private folder for those materials.

## Archive rule

If a document is mainly useful for provenance or private synthesis and not for public comprehension, it should be moved out of `docs/` and into `not_public/`.

This keeps the public repo intentional and legible.
