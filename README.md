# Blinksmart Rollout Dashboard

A single-page planning dashboard for the Blinksmart device rollout at Sapience Automata. It tracks every customer deployment across the 11 stages, from inventory readiness to closure, and shows who is accountable at each step.

## What's inside

| Tab | What it does |
|---|---|
| **Overview** | Devices live vs. target, devices in the pipeline, at-risk and blocked deployments, deployments over their stage SLA, a devices-by-stage chart, go-lives in the next 30 days, and where work is sitting by team. |
| **Pipeline** | One row per customer rollout: devices, current stage, business days in stage against the SLA, accountable team, status and go-live date. "Move to next stage" restarts the stage clock. |
| **Stage playbook** | For each stage: entry and exit criteria, SLA target, handoff, documents and systems, escalation path, and the full RACI team. Mark each stage as confirmed once agreed. |
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

All stage definitions, SLA defaults (in business days) and the baseline RACI are at the top of the `<script>` block in `index.html`, in the `STAGES` and `ROLES` arrays. Changes you make in the dashboard are saved as overrides on top of these defaults. "Reset RACI" returns the matrix and stage details to the defaults without touching deployments, decisions or contacts.

## Files

- `index.html` — the whole app (HTML, CSS and JavaScript in one file)
- `README.md` — this file
