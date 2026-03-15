# VERIFY.md — How to Verify an IPClaim APC Record

This document explains how anyone can independently verify that a published state of this repository existed at the claimed time.

No special software is required beyond OpenSSL.

---

## What You Are Verifying

This repository stores RFC 3161 timestamp tokens in `.timestamps/`.

Each `.tsr` file corresponds to a published Git tree hash — a cryptographic fingerprint of the tracked repository contents at a given commit.

---

## Step-by-Step Verification

### 1. Recompute the Tree Hash

Clone or download the repository at the commit you want to verify, then run:

```bash
git rev-parse HEAD^{tree}
```

The result should match the relevant `.timestamps/<TREE_HASH>.tsr` filename.

### 2. Download the FreeTSA Certificates

```bash
wget https://freetsa.org/files/tsa.crt
wget https://freetsa.org/files/cacert.pem
```

### 3. Verify the RFC 3161 Timestamp

```bash
echo -n "[TREE_HASH]" > /tmp/tree_hash.txt
openssl ts -verify \
  -in .timestamps/[TREE_HASH].tsr \
  -data /tmp/tree_hash.txt \
  -CAfile cacert.pem \
  -untrusted tsa.crt
```

If OpenSSL returns `Verification: OK`, the timestamp is valid for that published repository state.

---

## What This Proves

| Question | Answer |
|---|---|
| Did this repository state exist at the claimed date? | Yes, for the matching tree hash. |
| Can a changed repository still verify against the same token? | No. Any tracked file change produces a different tree hash. |
| Does verification require trusting the Author? | No. It depends on the cryptographic hash and the TSA signature. |

---

## Notes

- The timestamp proves existence of a published repository state, not business viability or legal enforceability by itself.
- After materially changing the repository, publish a fresh commit and generate a fresh timestamp if you want the latest state covered by the public proof chain.
