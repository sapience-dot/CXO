# Blinksmart Experience Playbook

A single-page playbook for creating the Blinksmart customer experience at Sapience Automata. It follows every customer through the 11 stages of the journey, from inventory readiness to closure, and shows what the customer should feel and who is accountable at each step.

## What's inside

| Section | What it does |
|---|---|
| **Overview** | A one-line briefing of what needs you today, the customer journey with every customer placed on their current stage, blocked and late customers with their escalation path, go-lives and decisions in the next 30 days, progress against the quarter's target, and which team is holding the most customers. |
| **Customers** | One row per customer rollout: where they are in the journey, devices, business days in the current stage against its limit, the accountable team, status and go-live date. "Move to" advances a customer and restarts the stage clock. |
| **Stage playbook** | For each stage: the experience promise (what the customer should feel), the customer moment, entry and exit criteria, SLA, handoff, documents and systems, escalation path and the full RACI team. Confirm each stage once it is agreed. |
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

Everything you enter is saved in your browser's local storage on that device. Nothing is sent to a server.

- **Export backup** downloads all your data as a `.json` file.
- **Import backup** restores it, for example on another computer or browser.
- Clearing your browser's site data deletes it, so export a backup regularly.

If the repository is public, the dashboard code is public, but your data is not: it stays in your browser and is never committed to the repo. Don't commit backup files if they contain customer names.

## Customizing

All stage definitions, experience promises, SLA defaults (in business days) and the baseline RACI are at the top of the `<script>` block in `index.html`, in the `STAGES` and `ROLES` arrays. Changes you make in the dashboard are saved as overrides on top of these defaults. "Reset to defaults" returns the matrix and stage details to the defaults without touching customers, decisions or contacts.

## Files

- `index.html` — the whole app (HTML, CSS and JavaScript in one file)
- `README.md` — this file

## Keyboard shortcuts

- `N` adds a customer
- `/` jumps to search on the Customers and Who does what pages
- Arrow keys move between sections in the side navigation
- `Esc` closes the edit panel
