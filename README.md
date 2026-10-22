# Blinksmart Experience Playbook

A single-page playbook for creating the Blinksmart customer experience at Sapience Automata. It follows every customer through the 11 stages of the journey, from inventory readiness to closure, and shows what the customer should feel and who is accountable at each step.

## What's inside

| Section | What it does |
|---|---|
| **Overview** | A one-line briefing of what needs you today and the contract value at risk; the customer journey with every customer on their current stage and the moments of truth marked; blocked, late and unhappy customers with their escalation path; start dates and decisions in the next 30 days; progress against the quarter's target with NPS; and flow, which shows average order-to-live time and the bottleneck stage. **Copy weekly brief** puts a plain-text leadership summary on your clipboard. |
| **Customers** | One row per customer rollout: where they are in the journey, devices, contract value (₹ lakh), latest NPS, business days in the current stage against its limit, the accountable team, status and target start date. "Move to" advances a customer and restarts the stage clock. |
| **Stage playbook** | For each stage: whether it is a moment of truth, the experience promise (what the customer should feel), the customer moment, the metric that proves the promise was kept, what we tell the customer, entry and exit criteria, SLA, handoff, documents and systems, escalation path and the full RACI team. Confirm each stage once it is agreed. |
| **Who does what** | The RACI matrix for 15 roles across 11 stages, with exactly one Accountable owner per stage. Search, filter by role, matrix or card layout. |
| **Decisions** | Open decisions with an owner, a decide-by date and the outcome. |

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

## Where your data is saved

**With Google Sheets (recommended).** Connect the dashboard to a Google Sheet you own and every change is saved there. You can open the dashboard from any computer or phone, read and edit the data in Sheets, and Google keeps the version history.

**Without it.** Data is saved only in this browser's local storage on this device. Use **Export backup** and **Import backup** to move or protect it.

### Connect a Google Sheet (about 5 minutes, once)

1. Create a blank Google Sheet, for example "Blinksmart Playbook". Keep it private.
2. In the sheet, open **Extensions ▸ Apps Script**. Delete what's there and paste in everything from `apps-script/Code.gs`.
3. On the line `const SECRET = '...'`, replace the text with a long phrase only you know, for example `punchiry-blue-otter-2026`. Click **Save**.
4. Choose `setup` in the function menu and click **Run**. Google will ask you to allow access to your own sheet: choose your account, then **Advanced ▸ Go to project ▸ Allow**. Six tabs appear: Customers, Decisions, Targets, Playbook, RACI and Contacts.
5. Click **Deploy ▸ New deployment**. Choose type **Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy** and copy the **Web app URL** (it ends in `/exec`).
6. Open the dashboard, click **Connect Google Sheet** at the bottom of the left menu, paste the URL and your secret phrase, then click **Connect**.

If the sheet is empty, everything already in your browser is copied into it. If the sheet already has data, the dashboard loads from the sheet. On a second computer or phone, repeat step 6 only.

**How syncing works.** Each change saves in the browser first and then goes to the sheet within a second or two. If you're offline, changes wait and send automatically when you're back; the status at the bottom of the left menu shows how many are waiting. Edits you make directly in the sheet appear in the dashboard when you return to its tab, or within a minute.

**Editing in the sheet.** You can edit any cell. Keep the header row as it is, keep the `ID` column filled, and use the values shown in the header for Status and Role. Dates work typed as `2026-10-22` or picked from a date. You can add your own columns; the dashboard leaves them alone.

**Updating the script.** If you change `Code.gs` later, use **Deploy ▸ Manage deployments ▸ Edit ▸ Version: New version** so the URL stays the same.

**Security.** The sheet stays private in your Google Drive. The dashboard reaches it only through the Web app URL together with your secret phrase, so keep both to yourself. Anyone who has both can read and change the playbook. To shut off access, change `SECRET` and deploy a new version, or archive the deployment.

If the repository is public, the dashboard code is public, but your data is not: it lives in your Google Sheet or your browser and is never committed to the repo. Don't commit backup files if they contain customer names.

## Customizing

All stage definitions, experience promises, SLA defaults (in business days) and the baseline RACI are at the top of the `<script>` block in `index.html`, in the `STAGES` and `ROLES` arrays. Changes you make in the dashboard are saved as overrides on top of these defaults. "Reset to defaults" returns the matrix and stage details to the defaults without touching customers, decisions or contacts.

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
- **Value at risk** is the contract value of customers who are blocked, at risk or over their stage limit.

## Keyboard shortcuts

- `N` adds a customer
- `/` jumps to search on the Customers and Who does what pages
- Arrow keys move between sections in the side navigation
- `Esc` closes the edit panel
- Moving or deleting a customer shows **Undo** for a few seconds
