# PDF Keyword Extraction to Google Sheets

This Google Apps Script is designed to extract specific keywords from PDF files stored in a Google Drive folder using Optical Character Recognition (OCR). The extracted text is analyzed for a set of predefined keywords, and the results are saved into a specified Google Sheet.

## Features
- **OCR Text Extraction**: Converts PDFs into Google Docs, extracts the text using Google Drive's OCR feature, and processes it for keyword matches.
- **Keyword Matching**: The script checks for multiple variants of keywords, such as programming languages, frameworks, methodologies, tools, and certifications.
- **Case-Sensitivity**: Configurable case-sensitive flags ensure accurate keyword matching where necessary (e.g., "Vue" vs. "view").
- **Google Sheets Integration**: Saves the results of keyword extraction into a designated tab in a Google Sheet for further analysis.

## Setup

### 1. Clone the Project
Copy the script into your Google Apps Script editor, accessible via [Google Apps Script](https://script.google.com/).

### 2. Enable the Google Drive Advanced Service
The script uses the Google Drive API for file manipulation and OCR processing. To enable this:
1. Open your Apps Script project.
2. Navigate to `Resources > Advanced Google services`.
3. Turn on the **Drive API**.
4. Go to `Google Cloud Console` by clicking the link in the dialog.
5. In the Cloud Console, ensure the **Drive API** is enabled for the project.

### 3. Set Constants
Update the following global constants in the script:
- `SOURCE_FOLDER_ID`: The ID of the folder in Google Drive containing the PDFs.
- `SHEET_ID`: The ID of the Google Sheet where extracted data will be saved.
- `EXTRACTED_TAB`: The name of the tab within the Google Sheet where the data will be written.

```javascript
const SOURCE_FOLDER_ID = 'Your_Google_Drive_Folder_ID';
const SHEET_ID = 'Your_Google_Sheet_ID';
const EXTRACTED_TAB = 'extracted';

### 4. Permissions
Ensure that the script has access to your Google Drive and Google Sheets. When you first run the script, you will be prompted to grant permissions for:

Google Drive: For accessing the PDFs, converting them to Google Docs, and extracting text.
Google Sheets: To write the extracted and analyzed data to the specified Google Sheet.

### 5. Trigger the Script
Run the main() function from the Apps Script editor to start processing the PDFs.

### 6. Keyword Configuration
You can customize or extend the combinedKeywords object to add new keywords or modify existing ones. Keywords are grouped by categories like front-end technologies, back-end frameworks, databases, and more.

javascript
Copy code
const combinedKeywords = {
  'JavaScript': { terms: ['JavaScript', 'javascript', 'JS'], caseSensitive: false },
  'React': { terms: ['React.js', 'React'], caseSensitive: true },
  ...
};

### Logging and Debugging
The script includes detailed logging at various stages, such as during file conversion, text extraction, keyword matching, and saving results to Google Sheets. You can view the logs from the Google Apps Script editor by navigating to View > Logs.

### Example Usage
To run the script:

Ensure the constants (SOURCE_FOLDER_ID, SHEET_ID, and EXTRACTED_TAB) are set correctly.
Run the main() function from the Apps Script editor.
Wait for the script to process all files, and check the Logs section for progress.

### Credits
This script was inspired by contributions from the following resources:

yusufnadiruzun (https://gist.github.com/yusufnadiruzun)
mogsdad (https://gist.github.com/mogsdad)
