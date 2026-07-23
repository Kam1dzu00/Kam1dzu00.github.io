window.PROFILE_DATA = window.PROFILE_DATA || {};
window.PROFILE_DATA.en = {
  "metaTitle": "Mikhail Fedrunov — 1C Developer / Business Analyst / Automation Specialist",
  "nav": {
    "profile": "Profile",
    "experience": "Experience",
    "cases": "Cases",
    "skills": "Skills",
    "cv": "CV"
  },
  "heroKicker": "SPECIALIST PROFILE · BUSINESS SYSTEMS",
  "heroTitle": "I automate business processes, not just code features.",
  "heroLead": "1C developer and business analyst with hands-on experience automating sales, manufacturing, warehouse and accounting processes. I own tasks end to end: user interviews, process analysis, solution design, development, testing, rollout and support. I support more than 300 users and nine information bases, including three production systems for manufacturing and distribution companies. My strongest areas are DCS and complex queries, extensions and external processors, HTTP/True API, JSON/XML/FTP, background jobs, product marking and DataMatrix, cross-database exchanges and print forms.",
  "role": "1C Developer / Business Analyst / Automation Specialist",
  "location": "Simferopol, Crimea",
  "relocation": "Ready to relocate to Serbia immediately after an offer; requires employer support with work authorization and legalization.",
  "status": "Open to opportunities in Serbia",
  "buttons": {
    "pdf": "Open PDF",
    "docx": "Download DOCX",
    "contact": "Contact"
  },
  "formLabels": {
    "status": "Status",
    "focus": "Focus",
    "scale": "Scale",
    "location": "Location"
  },
  "formValues": {
    "status": "Ready to relocate",
    "focus": "1C · analysis · integrations",
    "scale": "300+ users · 9 databases",
    "location": "Simferopol → Serbia"
  },
  "metrics": [
    [
      "300+",
      "supported users"
    ],
    [
      "3 / 9",
      "production / total databases"
    ],
    [
      "end to end",
      "from requirement to production"
    ],
    [
      "several days",
      "of manual work saved by the key verification tool"
    ]
  ],
  "profileLabel": "VALUE FOR THE COMPANY",
  "profileTitle": "Development, analysis and reliability in one specialist.",
  "profileText": "Combines three disciplines in one accountable role: 1C development, business analysis, and data/integration quality control.",
  "competencies": [
    [
      "1C development",
      "1C:Enterprise 8.3; Trade Management, Accounting, Payroll; extensions; external processors and reports; documents; information registers; forms and print layouts."
    ],
    [
      "Queries and analytics",
      "Data Composition System, complex queries, joins, grouping, analytical dimensions, cross-source reconciliation and management reporting."
    ],
    [
      "Integrations",
      "HTTP and True API, token-based authorization, Standard Subsystems Library, FTP, JSON, XML, CSV and TXT."
    ],
    [
      "Automation and reliability",
      "Background and scheduled jobs, batch processing, duplicate control, error logging, API validation and inter-system exchange checks."
    ],
    [
      "Business analysis",
      "User interviews, as-is process analysis, target solution design, logic alignment, rollout and user training."
    ],
    [
      "Application support",
      "Support for 300+ users and three production plus six test/development information bases."
    ]
  ],
  "experienceLabel": "EXPERIENCE",
  "experienceTitle": "I understand operations from the inside and turn requirements into working tools.",
  "experience": [
    {
      "company": "TD Vremya, Simferopol",
      "role": "Systems Programmer / 1C Developer",
      "period": "January 2026 — Present",
      "intro": "Manufacturing and distribution companies. Primary specialist for applied 1C work: development, integrations, analytics and user support.",
      "bullets": [
        "Support more than 300 users, three production information bases and six test or development bases.",
        "Gather requirements from accounting, sales, logistics, warehouse, manufacturing and management; propose the technical design and deliver the working solution.",
        "Develop extensions, external processors and reports, documents, information registers, forms, DCS reports and print layouts.",
        "Build integrations through HTTP/True API, FTP, JSON and XML; use the Standard Subsystems Library for server requests, authorization and token handling.",
        "Configure background and scheduled jobs for file ingestion, bulk validation, code processing and report delivery.",
        "Maintain cross-database exchanges, exchange plans, XML transfers and Data Conversion 2.1 rules.",
        "Test changes in test bases, support production rollout and fix issues reported by users.",
        "Prepare user instructions and explain the business logic of new tools and changed processes."
      ]
    },
    {
      "company": "OVK-Term, Simferopol",
      "role": "1C Operator → Logistician → Acts Manager → Deputy Warehouse Manager",
      "period": "January 2023 — November 2025",
      "intro": "Progressed from operational 1C work to coordination of warehouse and logistics processes. This experience formed a strong business foundation for later automation work.",
      "bullets": [
        "Worked with the full goods movement cycle: receiving, storage, transfer, picking, shipment, delivery, returns and inventory counts.",
        "Analysed discrepancies between 1C data, primary documents and actual warehouse and logistics operations.",
        "Coordinated warehouse staff, logisticians, drivers, managers and accounting, aligning requirements across departments.",
        "Controlled acts, transfers, shipments, warehouse balances and accompanying documentation.",
        "Built Excel tools using complex formulas, pivot tables and VBA to reduce manual preparation and reconciliation.",
        "Formalized working procedures and prepared employee instructions."
      ]
    }
  ],
  "casesLabel": "PRODUCTION CASES",
  "casesTitle": "Cases with business context, implementation and measurable impact.",
  "casesIntro": "Hover reveals the project structure; click opens the full case.",
  "cases": [
    {
      "id": "CASE-001",
      "title": "Outgoing UTD reconciliation with Chestny ZNAK",
      "short": "Background verification of documents and product-code ownership through True API.",
      "challenge": "EDI status in the accounting system did not always provide enough certainty. Employees additionally checked documents and marking codes manually, which could take several working days.",
      "solution": "Built an Accounting 3.0 processor with organization and period filters. It finds sales and UTD documents that require verification, calls True API by document identifier, extracts codes from the UTD and checks the current owner of each code. Bulk checks run as background jobs with status tracking and a clear result protocol.",
      "result": "The user receives one table with sales documents, UTDs, statuses, identifiers and code counts, plus optional TXT export. A multi-day manual procedure is replaced by one run and review of the result.",
      "stack": "1C Accounting 3.0 · True API · HTTP · SSL · Standard Subsystems Library · background jobs · DataMatrix"
    },
    {
      "id": "CASE-002",
      "title": "DataMatrix ingestion from a mobile application",
      "short": "Automated JSON ingestion from FTP and matching to 1C master data.",
      "challenge": "Sales agents scan a retail location and pack/case codes during cash sales. The business needed a centralized way to collect and connect this information to accounting data.",
      "solution": "Implemented FTP retrieval of JSON files and parsing of upload date, sale date, agent, retail location and DataMatrix codes. Added matching to users, partners, products and routes, a custom information register, duplicate control and error logging.",
      "result": "Data enters 1C automatically and becomes ready for analytics without manual file assembly. Matching errors are preserved and logged for follow-up.",
      "stack": "1C Trade Management · FTP · JSON · scheduled jobs · information registers · DataMatrix"
    },
    {
      "id": "CASE-003",
      "title": "Agent and division scanning control",
      "short": "Reconciliation of mobile scans against actual sales in the accounting system.",
      "challenge": "Management needed to see which agents scan marked products, where scans are missing and whether scan volumes match actual sales.",
      "solution": "Developed reports grouped by division and agent, with conversion of blocks and cases into packs, totals and explicit lists of employees without scans. Application data is reconciled with sales from the accounting base.",
      "result": "Managers receive a clear view by division and agent: no scanning, incomplete scanning and discrepancies against accounting records.",
      "stack": "1C · DCS · complex queries · information registers · cross-database reconciliation · Excel"
    },
    {
      "id": "CASE-004",
      "title": "Local browser utilities for marking codes",
      "short": "A set of HTML/JavaScript tools for bulk TXT, CSV and XML processing.",
      "challenge": "Large code sets repeatedly had to be merged, compared, cleaned and converted by hand while preserving every DataMatrix character exactly.",
      "solution": "Created standalone browser tools for XML extraction, CSV↔TXT conversion, duplicate detection/removal, file merging, written-off code removal, pack/case separation, totals and reverse reconciliation.",
      "result": "Bulk operations run locally without software installation or uploading files to external services. Users see statistics and errors and receive downloadable output files.",
      "stack": "HTML · CSS · JavaScript · File API · CSV/XML/TXT · DataMatrix"
    },
    {
      "id": "CASE-005",
      "title": "Print forms and batch PDF generation",
      "short": "Multi-page documents with dynamic details, dates and signatories.",
      "challenge": "Standard print forms did not cover internal rules for legal entities, signatories, dates and document packages.",
      "solution": "Developed and maintained transport invoices, requirements, notices and internal forms. Implemented dynamic signatories, totals, business-day dates, multi-page output and batch saving of separate PDFs.",
      "result": "Documents are generated according to company rules and are ready to print without manual edits. Batch export accelerates preparation of document packages.",
      "stack": "1C · spreadsheet document · print layouts · PDF"
    },
    {
      "id": "CASE-006",
      "title": "Cross-database exchange support",
      "short": "Exchange plans, Data Conversion 2.1, XML and selective document transfer.",
      "challenge": "Cross-database exchanges required changes to rules, object registration control and investigation of transfer errors.",
      "solution": "Adjusted exchange plans and Data Conversion 2.1 rules, analysed export contents, configured selective document transfer and worked with XML exchange format.",
      "result": "Required documents and attributes move between systems predictably, while failures can be isolated to a rule or object.",
      "stack": "1C · Data Conversion 2.1 · exchange plans · XML · background jobs"
    }
  ],
  "caseLabels": {
    "challenge": "Business challenge",
    "solution": "Implementation",
    "result": "Impact",
    "stack": "Technology",
    "open": "Open case",
    "close": "Close"
  },
  "workflowLabel": "WORKING APPROACH",
  "workflowTitle": "From a user problem to a stable production solution.",
  "workflow": [
    [
      "01",
      "Understand",
      "Interview users, inspect documents and data, and identify the actual source of the problem."
    ],
    [
      "02",
      "Design",
      "Define 1C objects, integrations, validation, error scenarios and a usable interface."
    ],
    [
      "03",
      "Build",
      "Implement the solution, background processes, reports and control tools."
    ],
    [
      "04",
      "Deliver",
      "Test in a separate base, roll out, train users and support the result."
    ]
  ],
  "skillsLabel": "TECHNOLOGY",
  "skillsTitle": "Working stack",
  "skills": [
    "1C:Enterprise 8.3",
    "Trade / Accounting / Payroll",
    "DCS and 1C query language",
    "Extensions and external processors",
    "HTTP / True API / SSL",
    "FTP / JSON / XML / CSV / TXT",
    "Background and scheduled jobs",
    "Data Conversion 2.1 and exchange plans",
    "DataMatrix / Chestny ZNAK",
    "HTML / CSS / JavaScript",
    "Excel / VBA",
    "Git / Postman — basic experience"
  ],
  "toolsLabel": "WORKING DEMOS",
  "toolsTitle": "Local tools actually used for product-code processing.",
  "demoOpen": "Open tool",
  "demos": [
    [
      "Extract codes from XML",
      "Extract DataMatrix values from multiple XML files into a ready TXT file.",
      "demos/xml-to-txt.html"
    ],
    [
      "Find and remove duplicates",
      "Validate large code sets with totals and separate output.",
      "demos/deduplicate.html"
    ],
    [
      "Remove written-off codes",
      "Compare multiple source files against written-off codes and generate cleaned outputs.",
      "demos/remove-codes.html"
    ],
    [
      "TXT to CSV for Chestny ZNAK",
      "Prepare a structured CSV file for subsequent upload.",
      "demos/txt-to-csv.html"
    ]
  ],
  "cvLabel": "FULL CV",
  "cvTitle": "One universal profile for candidate evaluation.",
  "cvText": "The PDF is ready to share or print. DOCX is available for recruiter workflow. The document language follows the selected site language.",
  "cvOther": "Other languages",
  "contactLabel": "CONTACT",
  "contactTitle": "Ready to discuss the role, working format and relocation to Serbia.",
  "footer": "Business systems and automation portfolio",
  "commandText": "Open candidate profile",
  "caseStatus": "IN PRODUCTION",
  "pdfHint": "Ready to share and print",
  "docxHint": "Editable document",
  "systemStatus": "SYSTEM READY"
};
