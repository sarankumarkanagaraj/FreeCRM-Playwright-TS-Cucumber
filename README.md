# FreeCRM Playwright TypeScript Cucumber Automation Framework

## Project Overview

This project is an End-to-End UI Automation Framework developed for automating the FreeCRM application using:

- Playwright
- TypeScript
- Cucumber (BDD)
- Page Object Model (POM)

This framework is developed as part of the Playwright Framework Assignment.

---

## Technology Stack

- Playwright
- TypeScript
- Cucumber
- Node.js
- Faker
- XLSX
- Dotenv

---

## Framework Features

- Environment Variable Support (.env)
- Page Object Model (POM)
- Reusable Utility Functions
- Cucumber Feature Files
- Step Definitions
- Hooks
- HTML Reports
- JSON Reports
- Screenshots
- Data Driven Testing using JSON & Excel
- Faker Test Data
- GitHub Version Control

---

## Project Structure

```
FreeCRM-Playwright-TS-Cucumber

├── features
├── reports
├── screenshots
├── src
│   ├── pages
│   ├── locators
│   ├── steps
│   ├── support
│   ├── utils
│   ├── config
│   ├── fixtures
│   └── testData
├── .env
├── cucumber.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Application Under Test

FreeCRM

https://ui.freecrm.com/

---

## Prerequisites

- Node.js
- Visual Studio Code
- Git
- Playwright Browsers

Install browsers:

```
npx playwright install
```

---

## Installation

Clone Repository

```
git clone <repository-url>
```

Install Dependencies

```
npm install
```

---

## Execute Tests

Run all tests

```
npm test
```

Run Cucumber

```
npm run cucumber
```

---

## Reports

Reports are generated under

```
reports/
```

Screenshots are stored under

```
screenshots/
```

---

## Team Members

- Sarankumar Kanagaraj (POC / Framework)
- Mansur Shaikh
- Shyamala Rajappa
- Sneha D Pandey

---

## Assignment Checklist

- Environment Variables
- Data Driven Framework
- Faker Integration
- Page Object Model
- HTML Reporting
- Global Hooks
- Coding Standards
- Reusable Functions
- Azure DevOps Integration (Future Enhancement)

---

## Version Control

GitHub Branch Strategy

- main
- sarankumar
- mansur
- shyamala
- sneha

Each team member will work on their own branch and merge after successful validation.
