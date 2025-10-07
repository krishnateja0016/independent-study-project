
Research Testbed: Safe instrumentation for agent vs human signal collection
=========================================================================

What this package contains (safe, non-deceptive)
- public/ironman/...   (your Ironman site with added research probe script)
- public/batman/...    (your Batman site with added research probe script)
- server.js            - Express server to host the sites and receive probe logs
- simulate.js          - Puppeteer script to run controlled "agent" visits
- probes.log           - created at runtime; logs received probes
- README.md            - you're reading a generated README
- NOTE: This testbed does NOT serve different content to agents vs humans.
        It ALWAYS serves the same visible content, and records benign signals
        so you can study detection and diversity of fingerprints.

Quick start (local, ethical)
1) Inspect the sites in the 'public' folders to ensure content is correct.
2) From this folder (/mnt/data/research_testbed):
   - Initialize:   npm init -y
   - Install:      npm install express puppeteer
   - Run server:   node server.js
   - Open human browser: visit http://localhost:8000/ironman/ (or /batman/)
   - Run agent simulator: node simulate.js
   - View collected probes: http://localhost:8000/probes
   - Simple analysis: http://localhost:8000/probe-last

Research plan (high level) - what to do next
1) Hypotheses:
   H1: Headless/automated agents produce a measurable signal set (webdriver flag, UA, canvas differences).
   H2: Simple server-side heuristics can flag many lab agents but are evadable; evaluate false positives.

2) Experiments:
   - Collect baseline: run 50 human visits (different browsers/devices) + 50 agent visits (Puppeteer variants).
   - Extract features from probes.log: UA tokens, webdriver bool, canvas hashes, plugin counts.
   - Train a lightweight classifier (logistic regression) to separate agent vs human in-lab.
   - Evaluate robustness: modify agent fingerprints (UA, disable webdriver flag) and measure drop in detection.

3) Metrics:
   - True Positive Rate (TPR) on agent visits
   - False Positive Rate (FPR) on human visits
   - Precision/Recall, ROC-AUC, and time-to-detect

Ethics checklist (MUST follow)
- Do NOT deploy the instrumented site publicly.
- Run tests only on consenting machines and agent instances you control.
- Do not collect personal identifying information. The probe collects only browser signals; if you add IP logs, treat them carefully.
- If you plan to publish, include disclosure and mitigation sections and follow your institution's IRB.

If you want, I can:
- Produce analysis scripts to parse probes.log and build a dataset CSV.
- Provide a simple classifier (Python notebook) to train and evaluate.
- Flesh out the experiment matrix with exact numbers and schedule.

