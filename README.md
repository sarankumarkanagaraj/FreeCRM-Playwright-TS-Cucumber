# FreeCRM Playwright TypeScript Cucumber Automation Framework

## Overview

This project is a UI Automation Framework developed using:

- Playwright
- TypeScript
- Cucumber (BDD)
- Page Object Model (POM)

The framework is created for automating the FreeCRM application as part of the automation assignment.

Application URL:

https://ui.freecrm.com/

---

## Technology Stack

- Playwright
- TypeScript
- Cucumber
- Node.js
- Page Object Model (POM)
- Git & GitHub

---

## Project Structure

```
features/
│
├── login.feature
├── company.feature
├── contact.feature
└── deals.feature

src/
│
├── common/
├── config/
├── constants/
├── fixtures/
├── hooks/
├── locators/
├── pages/
├── pageFactory/
├── steps/
├── support/
├── testData/
│   ├── excel/
│   └── json/
└── utils/

reports/
screenshots/
traces/
```

---

## Setup

Clone the repository

```bash
git clone https://github.com/sarankumarkanagaraj/FreeCRM-Playwright-TS-Cucumber.git
```

Install dependencies

```bash
npm install
```

---

## Environment Configuration

Copy

```
.env.example
```

Rename it to

```
.env
```

Update your own credentials.

Example:

```env
BASE_URL=https://ui.freecrm.com/

APP_USERNAME=your_email@gmail.com
APP_PASSWORD=your_password

BROWSER=chromium
HEADLESS=false
SLOWMO=300
```

> **Note:** Do not commit your `.env` file. It contains personal credentials.

---

## Execute Tests

Run all scenarios

```bash
npm test
```

or

```bash
npx cucumber-js
```

---

## Current Automation

- Login Module ✅
- Company Module (In Progress)
- Contact Module (In Progress)
- Deals Module (In Progress)

---

## Framework Features

- Playwright + TypeScript
- Cucumber BDD
- Page Object Model
- Locator Repository
- Base Page
- Custom World
- Hooks
- Environment Configuration
- JSON Test Data
- Excel Test Data
- Screenshot Capture
- Trace Generation
- HTML Reports
- GitHub Version Control

---

## Team Guidelines

- Clone the repository.
- Create your own feature branch.
- Work only on your assigned module.
- Do not modify common framework files without informing the POC.
- Use your own `.env` file with your own credentials.
- Commit only to your own branch.
- Raise a Pull Request after completing your assigned module.

---

## Repository

https://github.com/sarankumarkanagaraj/FreeCRM-Playwright-TS-Cucumber

---

## Author

Sarankumar Kanagaraj