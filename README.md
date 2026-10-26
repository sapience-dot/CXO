# Sapience Experience Playbook

A single-page playbook for creating the Blinksmart customer experience at Sapience Automata. It follows every customer through the 11 stages of the journey, from inventory readiness to closure, and shows what the customer should feel and who is accountable at each step.

## What's inside

| Section | What it does |
|---|---|
| **Overview** | A command centre that opens on the customer journey. Switch the journey between four views: **Customers** (devices and a dot per customer), **Health** (stages coloured by what is blocked, late or at risk), **Time in stage** (days spent now against each limit) and **Owners** (the Accountable owner, their contact and whether the stage is confirmed). Click any stage to open it in place: the customers in it with a one-click "Move to" button, how the stage runs, the owner and contact, what to do if it stalls, and the phase key results. Use the arrow keys to step through stages; Esc closes it. Below are six tiles (devices in use, customers needing you, scorecard, claims signed off, personas validated, open decisions). Each tile clicks through to the list behind it. Needs you can be filtered by area and has quick actions such as "Mark done" and "Move to". Coming up, flow and playbook readiness follow. **Copy weekly brief** puts a plain-text leadership summary on your clipboard. |
| **Insights** | The whole customer experience in pictures. A headline figure shows the share of stage hand-offs finished within their time limit, and names the stage where the experience leaks most. **The experience river** shows every live order as a dot in its current stage (sized by devices, coloured by status), on a stream that widens where devices are piling up, under a line showing how often each stage finishes on time, with moments of truth marked. Below it: devices installed over the last 12 weeks against the target, average time in each stage against its limit, where orders stand, device installations, and the scorecard by phase. Hover or tab to any mark for its numbers, tap a dot to open the order, and use **Show the numbers** under each chart for the data as a table. |
| **Customers** | One row per order: where it is in the journey, devices, contract value (₹ lakh), latest NPS, business days in the current stage against its limit, the accountable team, status and install date (promised, or the actual date once installed). A customer with several orders, such as a repeat order or batches installed at different depots on different dates, gets a summary row (total devices, devices in use, value, worst status, next planned install, **Add order**) with each order listed under it. Each order moves through the stages on its own. "Move to" advances an order and restarts the stage clock. Moving an order past Installation records its installation date. |
| **Stage playbook** | For each stage: the objective, the five steps of how the stage runs (with who does each), whether it is a moment of truth, the experience promise (what the customer should feel), the customer moment, the metric that proves the promise was kept, what we tell the customer, entry and exit criteria, SLA, handoff, risks to avoid, the medium and collateral kit, documents and systems, escalation path and the full RACI team. Stage content follows the Stage sheets. Confirm each stage once it is agreed. |
| **Who does what** | The RACI matrix for 15 roles across 11 stages, with exactly one Accountable owner per stage, following the Role sheets (Ops Coordinator owns stages 3 and 11). Search, filter by role, matrix or card layout. The Manufacturer row (SIM and connectivity) is ours, not in the Role sheets. |
| **Scorecard** | The north star, the four phase outcomes (A–D) and the goal for each of the 14 stakeholders, each with its key results. Click a key result to set its target, latest number, status (on track, at risk, off track) and a note. Filters show what's red or amber, the targets to set before rollout, and results with no target yet. Includes the weekly, monthly and quarterly review rhythm. |
| **Personas** | The 14 personas with their words, wants, what we say, owner and how to reach them. Mark each one validated once interviews confirm it, add notes, add your own or hide one. |
| **Collateral** | The 13 collateral items with stage, owner, medium, status (not started, copy final, in design, printed or live), due date and blocker; then the sign-offs: 8 claims to confirm before printing, 5 open copy items and 7 persona assumptions to validate. Tick a sign-off when it's done. |
| **Resources** | Your knowledge base: a library of the playbook documents, decks and templates (add your own links, filter by type), the ground rules, brand facts you can copy with one click, who to call at every stage, and a glossary. One search box covers all of it. |
| **Customer timeline** | Click any customer or order (in Customers, on the journey, in Needs you or in search) to open their page: every stage they passed through with the date and business days spent against the limit, totals, the slowest stage, notes you add along the way, and who owns the next step. When a customer has more than one order, a table at the top lists every order with its site, devices, stage, status and install date; click one to switch to it, or use **Add another order**. |
| **Review mode** | **Start review** on the Overview opens an agenda for the weekly, monthly or quarterly review, following the review rhythm. **Print or save as PDF** produces a clean handout for the leadership meeting. |
| **Team view** | A read-only view for stage owners: their stages, what they do in each, the customers in those stages, their key results and what is on their list. Preview it from **Preview team view** in the left menu. |
| **Device installations** | On each order's page: one row per device with its device ID, vehicle number, status (pending, installed or issue), installation date, installer and a note. **Add device** adds one; **Add several** takes a pasted list (device ID, then vehicle number, one per line, straight from a spreadsheet) and skips IDs already in the order. Change a status or date right in the table; marking a device installed fills in today's date. A progress bar and filters show what is done, pending or has a problem, and **Copy list** puts the list on your clipboard as CSV. Orders show "x installed" in Customers, devices with an issue appear under Needs you, and quick search finds an order by device ID or vehicle number. |
| **Decisions** | Open decisions with an owner, a decide-by date and the outcome. |

**Settings and data.** Everything that isn't a section sits under **Settings and data** at the bottom of the left menu (in **More** on phones): Preview team view, Copy as CSV, Export backup, Import backup, Team access and Sign out. The save status always stays visible above it.

**On phones and tablets.** On a phone the menu moves to a tab bar at the bottom (Overview, Customers, Scorecard, Search and More); More opens every section and setting. Tablets keep the side menu. A short branded splash plays once per visit.

**Quick search.** Press **Ctrl K** (⌘K on a Mac) or click **Search** to jump to any customer, stage, team, persona, key result, document or glossary term, or to start an action such as adding a customer or starting a review.

**Edit in place.** Change a customer's status, a key result's target, current number and status, a collateral item's status and due date, or a persona's validated flag right on the page. In Who does what, click a cell and press A, R, C or I (or Delete to clear). Click a name to open the full editor.

## Where the data lives

Everything is saved in one place: your Google Firebase project **cxo-playbook** (Cloud Firestore, free Spark plan). Nothing is kept in the code or the repository. Everyone signs in with Google. Changes sync live between computers and phones, work offline and catch up when the connection returns.

- **Editor:** `marketing@sapienceautomata.com` can change everything.
- **Readers:** everyone with a `@sapienceautomata.com` Google account, plus anyone you add under **Team access**, sees the read-only team view.
- **Everyone else** who signs in sees "Not shared with you yet".

To change who edits, update `editors` in `firebase-config.js` **and** `isEditor()` in `firebase/firestore.rules`, then publish the rules. To stop company-wide reading, change the domain line in the rules as its comment explains.

## Go live (about 15 minutes, once)

The web app keys are already in `firebase-config.js`. Finish these steps in the Firebase console (console.firebase.google.com ▸ **cxo-playbook**):

1. **Firestore.** Build ▸ Firestore Database ▸ **Create database** ▸ location `asia-south1 (Mumbai)` ▸ **Start in production mode**.
2. **Rules.** Firestore Database ▸ **Rules**: replace everything with the contents of `firebase/firestore.rules` and click **Publish**. Until you do, nobody can read or write, because production mode denies everything.
3. **Google sign-in.** Build ▸ Authentication ▸ **Get started** ▸ Sign-in method ▸ **Google** ▸ Enable ▸ choose a support email ▸ Save.
4. **Authorized domain.** Authentication ▸ Settings ▸ **Authorized domains** ▸ Add domain: your GitHub Pages address, for example `yourname.github.io` (just the host, no `https://` or path). `cxo-playbook.web.app` and `localhost` are allowed already.
5. **Publish the site.** Push this folder to GitHub, then in the repository open **Settings ▸ Pages ▸ Deploy from a branch ▸ `main` / `(root)` ▸ Save**. The playbook is live at `https://<your-username>.github.io/<repo-name>/`.
6. **First sign-in.** Open the link and sign in as `marketing@sapienceautomata.com`. The database starts empty: add your first customer, or use **Import backup** if you exported one from an earlier version.
7. **Check the lock.** In a private window, sign in with a personal Gmail account that isn't on the list. It must show "Not shared with you yet". Then add a colleague under **Team access** and check they get the read-only view.

**Alternative to GitHub Pages: Firebase Hosting (also free).** With Node.js installed: `npm install -g firebase-tools`, `firebase login`, then in this folder `firebase deploy`. That publishes the site to `https://cxo-playbook.web.app` and the security rules in one step (`firebase.json` and `.firebaserc` are set up for it). `firebase deploy --only firestore:rules` publishes just the rules.

**If the page says…**

| Message | What to do |
|---|---|
| Connect the database | `firebase-config.js` is missing a value, or `editors` still has the example address. |
| This web address isn't allowed to sign in yet | Do step 4 for the address in your browser bar. |
| Not shared with you yet | That Google account isn't the editor, isn't on your domain and isn't on Team access. |
| Can't reach the database / Missing or insufficient permissions | Firestore isn't created yet (step 1) or the rules aren't published (step 2). |
| The sign-in window closes straight away | Allow pop-ups for the site; it falls back to a full-page sign-in when pop-ups are blocked. |

## Sharing with the team

Send everyone the same link. Colleagues with a `@sapienceautomata.com` Google account can open it straight away. Add anyone else, such as distributors or the manufacturer, under **Settings and data ▸ Team access**: they sign in with that Google account and see the read-only team view. In **Preview team view**, **Copy common link** gives one link where each person picks their team the first time; **Copy link for this team** opens straight on one team (the link ends in `#team=ops`, for example).

## Free limits and backups

The Spark plan gives 1 GiB of storage, 50,000 document reads and 20,000 writes a day, with no card and no bill. The playbook is a few hundred small documents, so opening it reads a few hundred: comfortable for daily team use. If a daily limit is ever reached, the database pauses until it resets the next day.

Use **Export backup** once a week and keep the file somewhere private: it contains customer names. **Import backup** (editors only) replaces the database with the file's contents.

**Security.** The values in `firebase-config.js` are public by design; the published rules decide who can read and write. The rules only allow the playbook's own collections, only verified Google accounts, and only the editor to write. If the repository is public, the code is public but the data isn't: it lives in Firestore. Never commit backup files.

## Run it on your computer

Serve the folder and open it at `http://localhost:8000` (localhost is an allowed sign-in address):

```bash
python3 -m http.server 8000
```

## Customizing

All stage definitions, experience promises, SLA defaults (in business days) and the baseline RACI are at the top of the `<script>` block in `index.html`, in the `STAGES`, `DOCSTAGE` and `ROLES` arrays. The scorecard, personas, collateral and sign-off defaults are in `GOALS`, `PERSONAS`, `COLLATERAL` and `CHECKS`. Changes you make in the dashboard are saved as overrides on top of these defaults. "Reset to defaults" returns the matrix and stage details to the defaults without touching customers, decisions or contacts.

## Files

- `index.html` — the whole app (HTML, CSS and JavaScript in one file)
- `firebase-config.js` — the Firebase project keys and the editor list
- `firebase.json`, `.firebaserc` — optional: deploy the site and rules with the Firebase CLI
- `firebase/firestore.rules` — who can read and write the database (paste into the console, or `firebase deploy`)
- `README.md` — this file

## How the numbers work

- **Orders and customers.** Orders with the same customer name belong to one customer. Counts of customers count distinct names; devices, value and time in stage are per order.
- **In use** means an order has reached stage 8 (Activation) or later: their devices are installed and switched on in their vehicles.
- **Time in stage** and all SLA checks count business days (Monday to Friday).
- **Order to first use** is the average business days from a customer's first recorded stage to reaching stage 8. It is built from stage history, which is recorded every time a customer moves stage.
- **Bottleneck** is the stage whose average time most exceeds its limit.
- **NPS** is the share of promoters (9–10) minus the share of detractors (0–6) across customers with a score. Any score of 6 or below appears under Needs you.
- **Scorecard** counts every key result as on track, at risk, off track or not reviewed. Off-track results appear under Needs you in red, at-risk ones in amber, along with overdue sign-offs and collateral past its due date.
- **Playbook readiness** also tracks key results with a target, claims signed off, personas validated and collateral printed or live.
- **Value at risk** is the contract value of customers who are blocked, at risk or over their stage limit.

## Keyboard shortcuts

- `N` adds a customer
- `/` jumps to search on the Customers and Who does what pages
- Arrow keys move between sections in the side navigation
- `Esc` closes the edit panel
- Moving or deleting a customer shows **Undo** for a few seconds
