# Container Sourcing Reality

Status: indicative supplier scan completed on 2026-03-15

Purpose
-------
This document closes the sourcing-reality question at an indicative planning level using public supplier-side procurement signals.

It closes `P1.3` for repo planning.

This is not the same thing as signed quotes or negotiated terms.

## What was checked

The sourcing check focused on:

- MOQ
- lead time
- mold implications
- whether borosilicate is realistic for pilot one
- whether tempered soda-lime is a practical fallback

## Public supplier signals reviewed

### Borosilicate-oriented signals

- JM Glass states `MOQ: 3000 pieces per design` and `Lead time: 25-30 days` for borosilicate cup and bottle manufacturing.
- Hongmo states mass-production lead time is around `30 days`, with new mold timing of about `15 days` to open mold and `15 days` to make samples, and states typical MOQ is `5000 or 10000 pcs`.
- A Global Sources drinkware spec sheet lists `MOQ 200 PCS per design, 3000 PCS for full custom` and `Bulk Lead time About 25-60 days` for high borosilicate and soda-lime drinkware categories.

### Soda-lime / food-jar signals

- Kandacork lists typical food-jar MOQ at `10,000-30,000` with `7-10 days` sample lead time in its comparison overview.
- Kandacork's canning-jar page states standard canning-jar MOQ starts around `6,000-10,000 pieces per item`, and notes production plus shipping can range from several weeks to a few months.
- ZGS lists one soda-lime storage-jar line with `MOQ 500pcs`, `Sample Lead Time 3-5 days`, and delivery in `35-45 days`, indicating that near-stock or lightly customized soda-lime formats can be procured with much lower friction.

## Interpretation

My inference from the supplier-side signals is:

- borosilicate is realistic for pilot one if geometry stays simple and the pilot is willing to operate in roughly the `3,000-10,000` MOQ band for semi-custom or full-custom work
- custom food-jar geometry can push MOQ materially higher, especially when decoration or new tooling is involved
- existing-mold or near-stock soda-lime formats are easier to procure quickly and at lower MOQ
- therefore tempered or standard soda-lime remains the practical fallback if procurement speed or MOQ becomes the limiting factor

## Decision

The AllDone pilot default remains:

- borosilicate glass plus stainless plus silicone

But the sourcing reality decision is now:

- use borosilicate as the target pilot default
- keep geometry simple enough that supplier MOQs remain plausible
- treat tempered or standard soda-lime as the operational fallback for early physical trials if needed

## Practical procurement rule

For pilot one:

1. do not begin with a highly bespoke hero shape
2. prioritize simple rectangular storage geometry and standard screw-neck dose geometry
3. expect custom borosilicate to be viable, but not ultra-low-MOQ
4. keep soda-lime fallback live if early pilot timing matters more than material purity

## What is still missing

Still missing before actual pilot procurement:

- formal RFQs
- landed-price comparison across shortlisted suppliers
- tolerance confirmation on the exact pilot SKUs
- closure compatibility confirmation on the final selected geometry

## Sources

- JM Glass: https://jmborosilicate.com/blog/custom-professional-borosilicate-glass-cup-bottle-manufacturer/4151/
- Hongmo Glass: https://glassbottle.hongmoglass.com/custom-glass-bottle-manufacturer/
- Global Sources drinkware spec sheet: https://pdt.static.globalsources.com/IMAGES/PDT/SPEC/820/K1221001820.pdf
- Kandacork overview: https://www.kandacork.com/china-glass-bottle-manufacturer-for-spirits-wine-cosmetics-pharma/
- Kandacork canning jars: https://kandacorkglass.com/product/canning-glass-jars/
- ZGS soda-lime storage jars: https://www.zgsglass.com/products_detail/72.html
