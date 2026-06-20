# Court Fury Badminton Academy — Website

## 📁 What's in this folder
- `index.html` — the complete website (all sections, styles, and scripts in one file)
- `images/` — coach photo + 4 real student/training photos
- `vercel.json` — Vercel deployment config
- `google-apps-script.js` — code to paste into Google Sheets so form submissions get emailed + logged

## 🚀 Deploy to Vercel
1. Unzip this folder
2. Go to vercel.com → "Add New" → "Project" → drag & drop the unzipped folder
3. Click Deploy

## 📋 IMPORTANT: Connect the enrollment form (one-time, ~5 min)
Right now the form will show "submitted" but **the data won't go anywhere** until you complete this step.

1. Create a Google Sheet called "Court Fury Enrollments"
2. Row 1 headers: `Timestamp | Name | Phone | Email | Age | Batch | Skill Level | Message`
3. Extensions → Apps Script → paste in the contents of `google-apps-script.js`
4. Deploy → New deployment → Web app → Execute as "Me" → Access "Anyone"
5. Authorize when prompted (click Advanced → Go to project → Allow)
6. Copy the Web App URL it gives you (ends in `/exec`)
7. Open `index.html`, find this line near the bottom (in the `<script>` section):
   ```
   const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
8. Replace the placeholder text with your real URL, save, and redeploy to Vercel

Once that's done, every form submission will:
- ✅ Add a new row to your Google Sheet
- ✅ Send an email to itsmystyl@gmail.com with the submitter's details

## 🖼️ Images included
- `coach-aman-tiwari.jpg` — Head coach photo (used in Coach section)
- `gallery-1.jpg` to `gallery-4.jpg` — real student/training photos (used in Gallery section)

To add more photos later, drop new images into the `images/` folder and add a matching `<div class="gallery-item">` block in the Gallery section of `index.html`.
