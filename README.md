# Sapience Experience Playbook

A single-page playbook for creating the Blinksmart customer experience at Sapience Automata. It follows every customer through the 11 stages of the journey, from inventory readiness to closure, and shows what the customer should feel and who is accountable at each step.

## What's inside

| Section | What it does |
|---|---|
| **Overview** | A command centre that opens on the customer journey. Switch the journey between four views: **Customers** (devices and a dot per customer), **Health** (stages coloured by what is blocked, late or at risk), **Time in stage** (days spent now against each limit) and **Owners** (the Accountable owner, their contact and whether the stage is confirmed). Click any stage to open it in place: the customers in it with a one-click "Move to" button, how the stage runs, the owner and contact, what to do if it stalls, and the phase key results. Use the arrow keys to step through stages; Esc closes it. Below are six tiles (devices in use, customers needing you, scorecard, claims signed off, personas validated, open decisions). Each tile clicks through to the list behind it. Needs you can be filtered by area and has quick actions such as "Mark done" and "Move to". Coming up, flow and playbook readiness follow. **Copy weekly brief** puts a plain-text leadership summary on your clipboard. |
| **Customers** | One row per customer rollout: where they are in the journey, devices, contract value (₹ lakh), latest NPS, business days in the current stage against its limit, the accountable team, status and target start date. "Move to" advances a customer and restarts the stage clock. |
| **Stage playbook** | For each stage: the objective, the five steps of how the stage runs (with who does each), whether it is a moment of truth, the experience promise (what the customer should feel), the customer moment, the metric that proves the promise was kept, what we tell the customer, entry and exit criteria, SLA, handoff, risks to avoid, the medium and collateral kit, documents and systems, escalation path and the full RACI team. Stage content follows the Stage sheets. Confirm each stage once it is agreed. |
| **Who does what** | The RACI matrix for 15 roles across 11 stages, with exactly one Accountable owner per stage, following the Role sheets (Ops Coordinator owns stages 3 and 11). Search, filter by role, matrix or card layout. The Manufacturer row (SIM and connectivity) is ours, not in the Role sheets. |
| **Scorecard** | The north star, the four phase outcomes (A–D) and the goal for each of the 14 stakeholders, each with its key results. Click a key result to set its target, latest number, status (on track, at risk, off track) and a note. Filters show what's red or amber, the targets to set before rollout, and results with no target yet. Includes the weekly, monthly and quarterly review rhythm. |
| **Personas** | The 14 personas with their words, wants, what we say, owner and how to reach them. Mark each one validated once interviews confirm it, add notes, add your own or hide one. |
| **Collateral** | The 13 collateral items with stage, owner, medium, status (not started, copy final, in design, printed or live), due date and blocker; then the sign-offs: 8 claims to confirm before printing, 5 open copy items and 7 persona assumptions to validate. Tick a sign-off when it's done. |
| **Resources** | Your knowledge base: a library of the playbook documents, decks and templates (add your own links, filter by type), the ground rules, brand facts you can copy with one click, who to call at every stage, and a glossary. One search box covers all of it. |
| **Customer timeline** | Click any customer (in Customers, on the journey, in Needs you or in search) to open their page: every stage they passed through with the date and business days spent against the limit, totals, the slowest stage, notes you add along the way, and who owns the next step. |
| **Review mode** | **Start review** on the Overview opens an agenda for the weekly, monthly or quarterly review, following the review rhythm. **Print or save as PDF** produces a clean handout for the leadership meeting. |
| **Team view** | A read-only view for stage owners: their stages, what they do in each, the customers in those stages, their key results and what is on their list. Preview it from **Preview team view** in the left menu. |
| **Decisions** | Open decisions with an owner, a decide-by date and the outcome. |

**Sample data.** Click **Show sample data** at the bottom of the left menu to fill every section with realistic sample customers, targets, scorecard results, sign-offs, decisions and contacts. Nothing is saved while it is on, and your own data comes back when you hide it.

**Quick search.** Press **Ctrl K** (⌘K on a Mac) or click **Search** to jump to any customer, stage, team, persona, key result, document or glossary term, or to start an action such as adding a customer or starting a review.

**Edit in place.** Change a customer's status, a key result's target, current number and status, a collateral item's status and due date, or a persona's validated flag right on the page. In Who does what, click a cell and press A, R, C or I (or Delete to clear). Click a name to open the full editor.

## Run it

No build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

### Publish with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The dashboard will be live at `https://<your-username>.github.io/<repo-name>/`.

## Read-only team links

In the Google Sheets version, set `READ_KEY` in `Code.gs` to a second phrase (different from `SECRET`) and deploy a new version. In the dashboard, open **Google Sheet settings** and add the same phrase as the read-only key. Then open **Preview team view** and click **Copy common link**: one link for every stakeholder, where each person picks their team the first time (it is remembered after that). **Copy link for this team** gives a link that opens straight on one team. Anyone with that link sees only the team view and can never change anything; to cut access, change `READ_KEY` and deploy again.

In the hosted playbook on Claude, share the page from its Share menu. People you share it with see the team view and can only read; only you can make changes.

## Where your data is saved

**With Google Sheets (recommended).** Connect the dashboard to a Google Sheet you own and every change is saved there. You can open the dashboard from any computer or phone, read and edit the data in Sheets, and Google keeps the version history.

**Without it.** Data is saved only in this browser's local storage on this device. Use **Export backup** and **Import backup** to move or protect it.

### Connect a Google Sheet (about 5 minutes, once)

1. Create a blank Google Sheet, for example "Sapience Experience Playbook". Keep it private.
2. In the sheet, open **Extensions ▸ Apps Script**. Delete what's there and paste in everything from `apps-script/Code.gs`.
3. On the line `const SECRET = '...'`, replace the text with a long phrase only you know, for example `punchiry-blue-otter-2026`. Click **Save**.
4. Choose `setup` in the function menu and click **Run**. Google will ask you to allow access to your own sheet: choose your account, then **Advanced ▸ Go to project ▸ Allow**. Eleven tabs appear: Customers, Decisions, Targets, Playbook, RACI, Contacts, Scorecard, Personas, Collateral, Sign-offs and Resources.
5. Click **Deploy ▸ New deployment**. Choose type **Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy** and copy the **Web app URL**. It ends in `/exec`. On a company Google Workspace account it looks like `https://script.google.com/a/macros/yourcompany.com/s/…/exec`; that's fine.
6. Open the dashboard, click **Connect Google Sheet** at the bottom of the left menu, paste the URL and your secret phrase, then click **Connect**.

If the sheet is empty, everything already in your browser is copied into it. If the sheet already has data, the dashboard loads from the sheet. On a second computer or phone, repeat step 6 only.

**Check it works.** Before step 6, open your Web app URL with `?key=` and your phrase added, for example `https://script.google.com/macros/s/…/exec?key=punchiry-blue-otter-2026`, in a new browser tab. You should see `{"ok":true,"data":{…}}`.

### If the dashboard says "Google didn't answer"

Open the test link shown in the Connect panel, or the address above, and look at what Google shows:

| What you see | What to do |
|---|---|
| `{"ok":true,…}` | The sheet works. Reload the dashboard and connect again. |
| A Google sign-in page, or "You need access" | In **Deploy ▸ Manage deployments ▸ Edit**, set **Who has access** to **Anyone**. On a company Google Workspace account where only "Anyone within your company" is offered, choose that and stay signed in to that account in the same browser. |
| "Script function not found: doGet" | Save the code, then **Deploy ▸ Manage deployments ▸ Edit ▸ Version: New version ▸ Deploy**. |
| `{"ok":false,"error":"Set SECRET…"}` | Change `SECRET` in Code.gs, save, and deploy a new version. |
| `{"ok":false,"error":"The secret key does not match…"}` | Type the same phrase in the dashboard as in Code.gs. |
| "Authorization is required" or an error about permissions | Run `setup` again in Apps Script and click **Allow**. |

Use the URL ending in `/exec`. The one ending in `/dev` only works inside Apps Script.

**How syncing works.** Each change saves in the browser first and then goes to the sheet within a second or two. If you're offline, changes wait and send automatically when you're back; the status at the bottom of the left menu shows how many are waiting. Edits you make directly in the sheet appear in the dashboard when you return to its tab, or within a minute.

**Editing in the sheet.** You can edit any cell. Keep the header row as it is, keep the `ID` column filled, and use the values shown in the header for Status and Role. Dates work typed as `2026-10-22` or picked from a date. You can add your own columns; the dashboard leaves them alone.

**Updating from an earlier version.** Paste the new `Code.gs` over the old one (keep your `SECRET`), run `setup` once, then deploy a new version as below. Your data stays; the new tabs and columns are added.

**Updating the script.** If you change `Code.gs` later, use **Deploy ▸ Manage deployments ▸ Edit ▸ Version: New version** so the URL stays the same.

**Security.** The sheet stays private in your Google Drive. The dashboard reaches it only through the Web app URL together with your secret phrase, so keep both to yourself. Anyone who has both can read and change the playbook. To shut off access, change `SECRET` and deploy a new version, or archive the deployment.

If the repository is public, the dashboard code is public, but your data is not: it lives in your Google Sheet or your browser and is never committed to the repo. Don't commit backup files if they contain customer names.

## Customizing

All stage definitions, experience promises, SLA defaults (in business days) and the baseline RACI are at the top of the `<script>` block in `index.html`, in the `STAGES`, `DOCSTAGE` and `ROLES` arrays. The scorecard, personas, collateral and sign-off defaults are in `GOALS`, `PERSONAS`, `COLLATERAL` and `CHECKS`. Changes you make in the dashboard are saved as overrides on top of these defaults. "Reset to defaults" returns the matrix and stage details to the defaults without touching customers, decisions or contacts.

## Files

- `index.html` — the whole app (HTML, CSS and JavaScript in one file)
- `apps-script/Code.gs` — the Google Sheets backend you paste into Apps Script
- `README.md` — this file

## How the numbers work

- **In use** means a customer has reached stage 8 (Activation) or later: their devices are installed and switched on in their vehicles.
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
