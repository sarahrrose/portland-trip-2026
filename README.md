# Portland Trip 2026 🌲

A personalized trip-planning survey app for Sarah, Jessica, and Libby.
**Trip dates:** July 31 – August 4, 2026

## Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page — pick your name |
| `jessica.html` | Jessica's weekly survey |
| `libby.html` | Libby's weekly survey |
| `tracker.html` | Shared "in the running" list |
| `admin.html` | Sarah's admin panel (PIN protected) |
| `agenda.html` | AI-generated itinerary |
| `questions.js` | All 11 weeks of survey questions |
| `data.js` | localStorage read/write module |

## Setup (GitHub Pages)

### 1. Upload files to your repo
Go to `https://github.com/sarahrrose/portland-trip-2026` and upload all 8 files to the repo root.

### 2. Enable GitHub Pages
- Go to **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `main`, folder: `/ (root)`
- Save

Your site goes live at: `https://sarahrrose.github.io/portland-trip-2026/`

### 3. Set your admin PIN
Open `admin.html` on your device first to set a 4-digit PIN.

### 4. Send weekly links (every Monday starting June 1)
- Jessica: `.../jessica.html`
- Libby: `.../libby.html`
- Tracker (both): `.../tracker.html`

## Weekly Schedule

| Week | Send Date | Theme |
|------|-----------|-------|
| 1 | June 1 | Big Adventures (day trips, travel appetite) |
| 2 | June 8 | Portland's Personality |
| 3 | June 15 | Food Preferences |
| 4 | June 22 | Drinks & Evening Vibes |
| 5 | June 29 | Getting Outside |
| 6 | July 6 | Culture & Unique Experiences |
| 7 | July 13 | Shopping & Markets |
| 8 | July 20 | Rest & Pacing |
| 9 | July 27 | Day Trip Deep Dive |
| 10 | August 3 | Final Food Votes |
| 11 | August 10 | Last Calls & Wildcards |

## Generating the Itinerary

1. Open `admin.html`, enter PIN
2. Scroll to "Generate the Portland Itinerary" and click the button
3. AI reads all survey answers and generates a day-by-day agenda
4. Tap any activity block to edit it
5. Share `agenda.html` URL with Jessica and Libby

## Technical Notes

- All data stored in **browser localStorage** on each device
- Jessica's answers stay on Jessica's device; same for Libby
- Sarah sees everyone's data only via the Google Sheets export in admin
- No server required — pure static site
- AI generation uses the Anthropic API
