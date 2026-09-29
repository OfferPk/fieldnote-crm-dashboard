# Fieldnote CRM Dashboard

A lightweight, responsive contact dashboard that imports CSV and Excel files, or public Google Sheets, directly in the browser. It includes contact search, duplicate review, country/location summaries, and a unique-record XLSX export.

## Privacy

The bundled demo rows are generated placeholders with no phone numbers. No real contact records or user data are included in this repository. Imported spreadsheets are processed in the browser and are not uploaded by this app; connecting a public Google Sheet fetches that public sheet into the browser.

## Run

Open `index.html` in a modern browser. Excel import/export uses the SheetJS library loaded from jsDelivr; CSV import works without it. Google Sheets import requires a public or published sheet.
