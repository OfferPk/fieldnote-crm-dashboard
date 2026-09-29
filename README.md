# Fieldnote CRM Dashboard

A responsive, browser-only contact dashboard for manual contact entry, CSV/XLS/XLSX/TSV/TXT imports, and public Google Sheets imports. It supports multi-source append imports with per-source outcomes, duplicate review, country/location summaries, search and filters, follow-up dates, and exports in XLSX, TXT, CSV, TSV, or JSON.

## Privacy and storage

The app starts blank. Contact records are processed in the browser and saved in that browser's `localStorage` on the current device; the app does not upload or sync the saved list to an account or server. Browser storage is not encrypted and is not automatically backed up. Use **Export backup** to download a private JSON copy, **Restore / merge** to append contacts from a backup without replacing the current list, or **Clear all** to remove this browser's saved list. Keep exported backups private and clear the list when using a shared device.

Public Google Sheets links are fetched anonymously into the browser. Only public or published sheets are supported; there is no private-sheet sign-in or Google authorization. Some share links may be blocked by browser CORS; a published/export CSV link or a downloaded CSV file can be used instead.

## Exports and duplicate handling

The download controls let you choose a file format (XLSX, readable TXT, CSV, TSV, or JSON) and a record scope. **Unique records** contains the first matching row for each duplicate signature; **All records** includes every original row, including duplicates. Exporting never deletes or changes source rows. Both scopes include the CRM fields: name, city/location, country, phone, status, notes, next follow-up, and source. XLSX and JSON keep phone values as strings; CSV and TSV preserve the literal text in the file, although spreadsheet apps may automatically reformat phone values when opening delimited files.

Duplicate detection is conservative: a later row is marked as a duplicate when its normalized name and non-empty phone match an earlier row. If the phone is empty, normalized name, location, and country must all match. Case, spacing, and punctuation are ignored only for comparison. All original rows remain available; the unique view and unique export keep the first matching row.

## Run

Open `index.html` in a modern browser. Excel import/export uses the SheetJS library loaded from jsDelivr; CSV, TSV, TXT, and JSON import/export work without it. No contact examples are bundled in the repository.
