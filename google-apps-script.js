/**
 * COURT FURY BADMINTON ACADEMY — Enrollment Form Handler
 * --------------------------------------------------------
 * This script does TWO things when someone submits the enroll form:
 *   1. Appends the entry as a new row in this Google Sheet
 *   2. Sends an email notification to itsmystyl@gmail.com
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet "Court Fury Enrollments"
 * 2. Make sure Row 1 has these exact headers (in this order):
 *    Timestamp | Name | Phone | Email | Age | Batch | Skill Level | Message
 * 3. Go to Extensions → Apps Script
 * 4. Delete any starter code, paste this entire file in
 * 5. Click the Save icon (💾)
 * 6. Click "Deploy" → "New deployment"
 *    - Click the gear icon ⚙️ next to "Select type" → choose "Web app"
 *    - Description: "Court Fury Enroll Handler" (optional)
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 7. Click "Deploy"
 * 8. First time only: Google will ask you to authorize — click through
 *    "Advanced" → "Go to [project name] (unsafe)" → "Allow"
 *    (This warning appears because it's your own unpublished script — totally normal)
 * 9. Copy the "Web app URL" it gives you — it looks like:
 *    https://script.google.com/macros/s/AKfycb.../exec
 * 10. Send that URL back to Claude, who will paste it into the website code
 *     in place of "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE"
 *
 * NOTE: If you ever edit this script again, you must create a
 * "New deployment" again for changes to take effect (or use
 * "Manage deployments" → edit → new version).
 */

const NOTIFY_EMAIL = "itsmystyl@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 1. Append to the Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.age || "",
      data.batch || "",
      data.skillLevel || "",
      data.message || ""
    ]);

    // 2. Send email notification
    const subject = "🏸 New Enrollment — " + (data.name || "Unknown");
    const body =
      "New enrollment received on Court Fury website:\n\n" +
      "Name: " + (data.name || "-") + "\n" +
      "Phone: " + (data.phone || "-") + "\n" +
      "Email: " + (data.email || "-") + "\n" +
      "Age: " + (data.age || "-") + "\n" +
      "Preferred Batch: " + (data.batch || "-") + "\n" +
      "Skill Level: " + (data.skillLevel || "-") + "\n" +
      "Message: " + (data.message || "-") + "\n\n" +
      "Submitted: " + new Date().toLocaleString();

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
