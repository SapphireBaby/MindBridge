# MindBridge V2 entry experience (review prototype)

This is a **separate local working copy**, prepared from the uploaded merged MindBridge ZIP. It does not modify `SapphireBaby/MindBridge` or the Cloudflare production deployment.

## What's new
- A premium audience-selection welcome screen with **MindBridge Personal** and **MindBridge Teams**.
- Distinct plum/rose and dark teal themes using one React codebase.
- A separate, theme-specific scenario directory for each audience.
- Navigation back to audience selection and between Personal and Teams.
- The original four scenario definitions, chat flow and debrief components are retained.
- A visible notice that conversation replies and debriefs remain **prototype behavior**.

## What's deliberately not included
- Live AI / model API integration.
- A backend, user accounts, subscriptions, data storage or employer analytics.
- Any changes to the live production site.

## How to preview locally
```
npm install
npm run dev
```
Open the local URL shown by Vite. To test the build, run `npm run build`.

## Release gate
Before deployment, test on mobile and desktop, verify all four scenarios, audit accessibility, choose a secure AI backend, and get explicit approval to merge. A GitHub branch named `mindbridge-v2` is **proposed**, not created by this ZIP.

## Privacy note
Do not enter sensitive personal details during prototype testing. Current dialogue logic simulates AI replies and the debrief is not personalized clinical or psychological assessment.
