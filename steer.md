# AllDone Steer: Review & Roadmap

## Executive Review

**Current Status:** High-quality conceptual and prototype state. The project has successfully moved from "vague idea" to a "defensible operating model" with a clear narrow-scope pilot strategy. The documentation is exceptionally thorough, covering unit economics, architectural overview, and container specifications.

**Strengths:**
- **Clarity of Mission:** The "closed-loop home provisioning" narrative is consistent and compelling.
- **Narrow Pilot Focus:** Correctly identifies that a 60-household cluster is the right size for initial validation.
- **Architectural Readiness:** The backend prototype covers the necessary logic (distribution, operations, consumption profiling) required to run the loop.

**Constructive Criticism & Priorities:**

1.  **Transition from "Planning" to "Procurement":**
    The project is currently "assumption-heavy." While `TASKS.md` marks many items as "completed," they are completed at a *planning level*. The highest priority is replacing these assumptions with **hard quotes**.
    - *Action:* Lock a specific supplier for the `Storage-M` and `Dose-M` glass sets and get a real MOQ/price-break quote.

2.  **Software Robustness (The Persistence Gap):**
    The prototype uses local file-backed persistence. For a real pilot with 60 households, this is a risk.
    - *Action:* Harden the persistence layer (e.g., SQLite or a lightweight DB) to ensure household records and container lifecycles aren't lost or corrupted during pilot operations.

3.  **Operator Interface (The "Invisible" Software):**
    The backend logic exists, but there is no mention of how the driver or the wash-depot operator actually *interacts* with it. 
    - *Action:* Prioritize a "Minimum Viable UI" (could be a simple mobile-responsive web view) for marking "Delivered," "Collected," and "Washed/Inspected."

4.  **The "Return Loop" Enforcement:**
    The model assumes 97%+ return compliance. The "logic" for deposits exists, but the "mechanism" (how the user pays, how it's refunded, how the operator scans the return) needs to be more than just a conceptual SOP.
    - *Action:* Build the "Scan-on-Return" logic into the software MVP.

---

## Roadmap: Validation Sequences

1. **Sequence 1: Hardening & Evidence:** Sourcing real-world quotes and executing the database migration.
2. **Sequence 2: Field Interface (Operator MVP):** Building the mobile-responsive screens and "Scan-on-Return" logic.
3. **Sequence 3: Pilot Readiness & Partnering:** Household recruitment, [HIRE/PARTNER] for logistics, and live "Dry Run" cycles.

---

## Detailed Task Backlog

### [S1] Sourcing & Economic Evidence (Real-World)
*   - [ ] **S1.1: Generate Sourcing Brief:** Convert `glass_container_family_spec.md` into a 1-page PDF for supplier outreach.
*   - [ ] **S1.2: [HIRE/PARTNER] Supplier Outreach:** Contact minimum 3 suppliers (e.g., local distributors like Berlin Packaging and Alibaba direct manufacturers) for 500-unit MOQ quotes on Borosilicate glass.
*   - [ ] **S1.3: Update Economics Model:** Replace "indicative" costs in `PILOT_UNIT_ECONOMICS.md` with real quote data including shipping/import duties.
*   - [ ] **S1.4: [HIRE/PARTNER] Wash-Line Cost Audit:** Identify a local industrial wash partner or specify the exact detergent/energy/labor cost per cycle for a DIY line.

### [S2] Software Hardening (Solo-Leverage)
*   - [ ] **S2.1: SQLite Migration:** Replace `json-file` persistence in `src/backend/services/` with an SQLite implementation (using `better-sqlite3`).
*   - [ ] **S2.2: Schema Definition:** Define SQL tables for `Households`, `Containers` (with status tracking), `Subscriptions`, and `Routes`.
*   - [ ] **S2.3: Data Migration Script:** Write a script to migrate existing prototype JSON data into the new SQLite schema.
*   - [ ] **S2.4: Scan-on-Return API:** Implement a new endpoint `/api/operations/return-scan` that updates container status and triggers deposit credit logic.

### [S3] Operator MVP (The "Steer" Interface)
*   - [ ] **S3.1: Mobile-Responsive Viewport:** Set up a basic smartphone frontend (React or simple EJS) for field use.
*   - [ ] **S3.2: Screen: Route Manifest:** A view for the driver showing stop order and "Crates to Drop / Containers to Collect."
*   - [ ] **S3.3: Screen: Container Intake:** Scanner/button interface for the wash-depot operator to bulk-update status to "Washed/Ready."
*   - [ ] **S3.4: Screen: Exception Logger:** A "Report Issue" button for drivers to log breakage or "Not Returned" at the door.

### [S4] Legal & Onboarding (Structure for Team)
*   - [ ] **S4.1: Deposit Agreement:** Draft the 1-page terms for the "EUR 40 Deposit" for the 60 pilot households.
*   - [ ] **S4.2: [HIRE/PARTNER] Regulatory Filing:** Check local regulations for "reusable container refill" and confirm label/seal requirements.
*   - [ ] **S4.3: Onboarding UI:** A simple landing page for the 60 pilot users to input their "Consumption Profile" and set their delivery schedule.

---

**Steer Summary:** The project is one "real quote" and one "simple UI" away from being truly investment-ready. Completion of Sequence 1 ([S1] and [S2]) is the primary blocker. Stop building "more logic" and start "hardening the current logic" while fetching "real-world prices."
