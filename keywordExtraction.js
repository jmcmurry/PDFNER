// config
const SOURCE_FOLDER_ID = 'YOUR_FOLDER_ID'; // Folder with PDFs
const SHEET_ID = 'YOUR_SHEET_ID'; // Google Sheet ID
const EXTRACTED_TAB = 'NAME_OF_RESULTS_TAB_IN_SHEET'; // Sheet tab for extracted data

// Combined keywords with case sensitivity flags, comment out ones you aren't interested in for a particular posting, or add your own
const combinedKeywords = {
  // Front-End
  'Ajax': { terms: ['AJAX', 'Ajax'], caseSensitive: false },
  'Angular': { terms: ['Angular', 'AngularJS', 'Angular.js'], caseSensitive: false },
  'Bootstrap': { terms: ['Bootstrap', 'React Bootstrap'], caseSensitive: false },
  'CSS3': { terms: ['CSS3', 'CSS'], caseSensitive: false },
  'D3.js': { terms: ['D3', 'D3.js'], caseSensitive: false },
  'Flexbox': { terms: ['Flexbox'], caseSensitive: false },
  'HTML': { terms: ['HTML5', 'HTML'], caseSensitive: false },
  'jQuery': { terms: ['jQuery'], caseSensitive: false },
  'JavaScript': { terms: ['JavaScript', 'javascript', 'JS', 'ES6', 'ES2015'], caseSensitive: false },
  'LESS': { terms: ['LESS'], caseSensitive: true },
  'React': { terms: ['React.js', 'React'], caseSensitive: true },
  'Sass': { terms: ['Sass'], caseSensitive: false },
  'Vue.js': { terms: ['Vue.js', 'vue.js'], caseSensitive: true },
  
  // Back-End
  'Django': { terms: ['Django'], caseSensitive: false },
  'Elasticsearch': { terms: ['Elasticsearch'], caseSensitive: false },
  'Express': { terms: ['Express'], caseSensitive: false },
  'Flask': { terms: ['Flask'], caseSensitive: false },
  'GraphQL': { terms: ['GraphQL'], caseSensitive: false },
  'Hibernate': { terms: ['Hibernate'], caseSensitive: false },
  'Java': { terms: ['Java'], caseSensitive: false },
  'JSP': { terms: ['JSP', 'JavaServer Pages'], caseSensitive: false },
  'Node.js': { terms: ['Node.js'], caseSensitive: false },
  'Oracle': { terms: ['Oracle'], caseSensitive: false },
  'PHP': { terms: ['PHP'], caseSensitive: false },
  'Ruby': { terms: ['Ruby'], caseSensitive: false },
  'Sequelize': { terms: ['Sequelize'], caseSensitive: false },
  'Spring': { terms: ['Spring', 'Spring Boot', 'Spring MVC'], caseSensitive: true },

  // Databases & Frameworks
  'Cassandra': { terms: ['Cassandra'], caseSensitive: false },
  'Firebase': { terms: ['Firebase'], caseSensitive: false },
  'LAMP stack': { terms: ['LAMP stack'], caseSensitive: false },
  'MEAN stack': { terms: ['MEAN stack'], caseSensitive: false },
  'MongoDB': { terms: ['MongoDB'], caseSensitive: false },
  'NoSQL': { terms: ['NoSQL'], caseSensitive: false },
  'PostgreSQL': { terms: ['PostgreSQL', 'ElephantSQL'], caseSensitive: false },
  'Redis': { terms: ['Redis'], caseSensitive: false },
  'SQL': { terms: ['SQL', 'mySQL', 'MySQL', 'Microsoft SQL Server', 'SQLite', 'SQL Server'], caseSensitive: false },

  // Cloud Platforms
  'AWS': { terms: ['AWS', 'Amazon Web Services', 'EC2', 'Lambda', 'S3', 'RDS'], caseSensitive: false },
  'Azure': { terms: ['Azure', 'Microsoft Azure'], caseSensitive: false },
  'Google Cloud': { terms: ['Google Cloud', 'Google Cloud Platform', 'GCP'], caseSensitive: false },
  'Heroku': { terms: ['Heroku'], caseSensitive: false },
  'Serverless': { terms: ['Serverless', 'AWS Lambda'], caseSensitive: false },

  // DevOps & Testing
  'Ansible': { terms: ['Ansible'], caseSensitive: false },
  'BitBucket': { terms: ['BitBucket'], caseSensitive: false },
  'CI/CD': { terms: ['CI/CD', 'Continuous Integration', 'Continuous Deployment'], caseSensitive: false },
  'Cypress': { terms: ['Cypress'], caseSensitive: false },
  'DevOps': { terms: ['DevOps'], caseSensitive: false },
  'Docker': { terms: ['Docker'], caseSensitive: false },
  'Git': { terms: ['Git', 'GitHub'], caseSensitive: false },
  'Jenkins': { terms: ['Jenkins'], caseSensitive: false },
  'JUnit': { terms: ['JUnit'], caseSensitive: false },
  'Karma': { terms: ['Karma'], caseSensitive: false },
  'Kubernetes': { terms: ['Kubernetes'], caseSensitive: false },
  'Mocha': { terms: ['Mocha', 'Chai'], caseSensitive: false },
  'Puppet': { terms: ['Puppet'], caseSensitive: false },
  'Prometheus': { terms: ['Prometheus'], caseSensitive: false },
  'Terraform': { terms: ['Terraform'], caseSensitive: false },
  'Grafana': { terms: ['Grafana'], caseSensitive: false },
  'Jasmine': { terms: ['Jasmine'], caseSensitive: false },
  'System Testing': { terms: ['System Testing'], caseSensitive: false },
  'Test-driven development': { terms: ['Test-driven development', 'TDD'], caseSensitive: false },
  'Unit Testing': { terms: ['Unit Testing'], caseSensitive: false },

  // Methodologies & Tools
  'Agile': { terms: ['Agile', 'Scrum', 'Kanban', 'XP', 'Extreme Programming'], caseSensitive: false },
  'Eclipse': { terms: ['Eclipse'], caseSensitive: false },
  'IntelliJ IDEA': { terms: ['IntelliJ IDEA'], caseSensitive: false },
  'Jira': { terms: ['Jira'], caseSensitive: false },
  'Lucene': { terms: ['Lucene'], caseSensitive: false },
  'NetBeans': { terms: ['NetBeans'], caseSensitive: false },
  'Protege': { terms: ['Protege', 'protégé'], caseSensitive: false },
  'Search engines': { terms: ['Search engines'], caseSensitive: false },
  'ServiceNow': { terms: ['ServiceNow'], caseSensitive: false },
  'Solr': { terms: ['Solr'], caseSensitive: false },
  'Spring STS': { terms: ['Spring STS'], caseSensitive: false },
  'VS Code': { terms: ['VS Code', 'Visual Studio', 'Visual Studio Code'], caseSensitive: false },
  'Jupyter Notebook': { terms: ['Jupyter Notebook'], caseSensitive: false },
  'Pycharm': { terms: ['Pycharm'], caseSensitive: false },
  'R Studio': { terms: ['R Studio'], caseSensitive: false },
  'Tableau': { terms: ['Tableau'], caseSensitive: false },
  'Dashboards': { terms: ['Dashboards'], caseSensitive: false },

  // Certifications
  'AWS Cloud Practitioner': { terms: ['AWS Cloud Practitioner', 'Ultimate AWS certified Cloud Practitioner'], caseSensitive: false },
  'Web Development Bootcamp': { terms: ['The Complete 2024 Web Development Bootcamp'], caseSensitive: false },
  'Microsoft Certified': { terms: ['Microsoft certified Software Developer'], caseSensitive: false },
  'LinkedIn Certified': { terms: ['LinkedIn certified Software Developer'], caseSensitive: false },

  // Soft Skills
  'Collaboration': { terms: ['Collaboration'], caseSensitive: false },
  'Communication': { terms: ['Communication', 'Excellent Communication'], caseSensitive: false },
  'Attention to detail': { terms: ['Attention to detail'], caseSensitive: false },
  'Adaptable': { terms: ['Adaptable'], caseSensitive: false },
  'Presentation': { terms: ['Presentation'], caseSensitive: false },
  'Problem Solving': { terms: ['Problem Solving'], caseSensitive: false },

  // Miscellaneous
  'C++': { terms: ['C++'], caseSensitive: false },
  'COMSOL': { terms: ['COMSOL'], caseSensitive: false },
  'JSON': { terms: ['JSON'], caseSensitive: false },
  'JMS': { terms: ['JMS', 'Java Message Service'], caseSensitive: false },
  'JWT': { terms: ['JWT', 'JSON Web Token'], caseSensitive: false },
  'Matlab': { terms: ['Matlab'], caseSensitive: false },
  'OOP': { terms: ['OOP', 'Object-Oriented Programming'], caseSensitive: false },
  'RESTful APIs': { terms: ['RESTful APIs', 'REST APIs', 'REST', 'RESTful API'], caseSensitive: false },
  'SOAP': { terms: ['SOAP', 'Simple Object Access Protocol'], caseSensitive: false },
  'TypeScript': { terms: ['TypeScript'], caseSensitive: false },

  // Knowledge Domains
  'Ontologies': { terms: ['ontologies', 'ontology'], caseSensitive: false },
  'KBs': { terms: ['knowledgebase', 'knowledgebases', 'knowledge bases', 'knowledge base'], caseSensitive: false },
  'Semantic Web': { terms: ['Semantic Web', 'SemWeb', 'OWL', 'RDF', 'network graph','graph network','network graphs','graph networks' ], caseSensitive: false },
  'bioinformatics': { terms: ['bioinformatics', 'bioinformatic', 'informatics'], caseSensitive: false },
  'biology': { terms: ['biolgy', 'biological', 'biomedicine']},
  'medicine': { terms: ['medicine','medical', 'hospital', 'biomedicine']},
  'research': { terms: ['research']},


  // Security & Authentication
  'OAuth': { terms: ['OAuth'], caseSensitive: false },
  'SAML': { terms: ['SAML', 'Security Assertion Markup Language'], caseSensitive: false },
  'SSL/TLS': { terms: ['SSL', 'TLS', 'Transport Layer Security', 'Secure Sockets Layer'], caseSensitive: false },

  // Containerization & Orchestration
  'OpenShift': { terms: ['OpenShift'], caseSensitive: false }
};

// Main function to process the folder of PDFs and output to a Google Sheet
function main() {
  Logger.log(`Starting to process folder with ID: ${SOURCE_FOLDER_ID}`);
  
  const extractedText = convertPDFsInFolderToText(SOURCE_FOLDER_ID);
  Logger.log(`Extracted Text: \n${extractedText}`);
  
  const analyzedResults = analyzeText(extractedText);
  saveResultsToSheet(analyzedResults);

  Logger.log('Processing complete. Data has been saved to the Google Sheet.');
}

// Function to convert a folder of PDFs into text using OCR with logging
function convertPDFsInFolderToText(folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  let allTextContent = "";

  while (files.hasNext()) {
    const pdfFile = files.next();
    try {
      const textContent = convertSinglePDFToText(pdfFile.getId());
      allTextContent += `\n=== Start of ${pdfFile.getName()} ===\n`;
      allTextContent += textContent;
      allTextContent += `\n=== End of ${pdfFile.getName()} ===\n`;
    } catch (error) {
      Logger.log(`Failed to process file ${pdfFile.getName()}: ${error.message}`);
    }
  }
  return allTextContent;
}

// Function to convert a single PDF to text using OCR with detailed logging
function convertSinglePDFToText(fileId) {
  Logger.log(`Starting conversion for file ID: ${fileId}`);

  try {
    const pdfFile = DriveApp.getFileById(fileId);
    const fileBlob = pdfFile.getBlob();

    const fileMetadata = {
      name: pdfFile.getName().replace(/\.pdf$/, ''),
      mimeType: 'application/vnd.google-apps.document'
    };

    const options = {
      ocr: true,
      ocrLanguage: "en",
      fields: 'id, name'
    };

    Logger.log(`Converting PDF to Google Docs using OCR...`);
    const response = Drive.Files.create(fileMetadata, fileBlob, options);
    const { id } = response;
    Utilities.sleep(10000); // Wait 10 seconds for OCR processing

    const doc = DocumentApp.openById(id);
    const textContent = doc.getBody().getText();

    DriveApp.getFileById(id).setTrashed(true);  // Delete the temporary Google Document

    Logger.log(`Text successfully extracted from Google Document: ${textContent.length} characters`);
    return textContent;

  } catch (error) {
    Logger.log(`Error during PDF-to-text conversion: ${error.message}`);
    throw error;
  }
}

// Analyze the extracted text for matching terms from the combinedKeywords object
function analyzeText(textContent) {
  Logger.log(`Starting text analysis...`);
  
  const results = {};

  for (const [key, { terms, caseSensitive }] of Object.entries(combinedKeywords)) {
    const regexFlags = caseSensitive ? 'g' : 'gi';  // Case-sensitive flag
    const regexPatterns = terms.map(term => new RegExp(term, regexFlags));  // Create regex patterns

    results[key] = [];

    // Iterate through each regex pattern for a keyword
    for (const regex of regexPatterns) {
      const matches = textContent.match(regex);  // Find all matches
      if (matches) {
        results[key].push(...matches);  // Add all matched terms
      }
    }

    // Log matches for each keyword
    if (results[key].length > 0) {
      Logger.log(`Found matches for "${key}": ${results[key].join(', ')}`);
    }
  }

  Logger.log("Text analysis completed.");
  return results;
}

// Save the analyzed results to the Google Sheet in the specified tab
function saveResultsToSheet(analyzedResults) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(EXTRACTED_TAB);

  if (!sheet) {
    Logger.log(`Sheet with name "${EXTRACTED_TAB}" not found.`);
    return;
  }

  Logger.log('Clearing existing content in the sheet.');
  sheet.clear(); // Clear any existing data

  const headers = ['Keyword', 'Matched Terms'];
  sheet.appendRow(headers); // Append headers

  for (const [keyword, matches] of Object.entries(analyzedResults)) {
    if (matches.length > 0) {
      sheet.appendRow([keyword, matches.join(', ')]);
    }
  }

  Logger.log('Results saved to the sheet.');
}
