# FreeCRM Automation Framework

## Overview

This project is an end-to-end UI automation framework developed using Playwright, TypeScript and Cucumber (BDD) for the FreeCRM application.

The framework follows the Page Object Model (POM) design pattern with reusable page classes, centralized locators, dynamic test data generation and Cucumber feature files.

---

## Technology Stack

- Playwright
- TypeScript
- Cucumber (BDD)
- Node.js
- ESLint
- Git & GitHub

---

## Framework Design

```
src
│
├── config
├── locators
├── pages
├── steps
├── support
├── testData
├── utils
│
features
```

---

## Implemented Modules

### Login

- Login with valid credentials

### Company

- Create Company
- Search Company
- Update Company
- Delete Company

### Contact

- Create Contact
- Verify Contact
- Update Contact
- Delete Contact

### Deal

- Create Deal
- Create Deal linked with Company
- Create Deal linked with Contact
- Create Deal with different stages
- Verify Deal
- Verify Amount
- Verify Stage
- Verify Owner
- Update Deal
- Change Deal Stage
- Delete Deal

---

## Business Scenarios

- Lead to Deal Flow
- Customer Onboarding
- Sales Pipeline Management

---

## Framework Features

- Page Object Model (POM)
- Cucumber BDD
- Dynamic Test Data Generator
- Reusable Components
- Environment Variables
- TypeScript Support
- ESLint
- GitHub Integration

---

## Project Structure

```
features/

login.feature
company.feature
contact.feature
deals.feature
leadToDeal.feature
customerOnboarding.feature
salesPipeline.feature

src/

config/
locators/
pages/
steps/
support/
testData/
utils/
```

---

## Installation

```bash
npm install
```

---

## Execute All Tests

```bash
npm run cucumber
```

---

## Execute Specific Feature

```bash
npm run cucumber -- --name "Create Company"
```

Example:

```bash
npm run cucumber -- --name "Create Deal"
```

---

## TypeScript Validation

```bash
npx tsc --noEmit
```

---

## Lint

```bash
npm run lint
```

---

## Current Status

### Completed

- Login Automation
- Company CRUD
- Contact CRUD
- Deal CRUD
- Business Scenarios
- Dynamic Test Data
- Playwright + Cucumber Framework

### Pending Enhancements

The following assignment scenarios are identified but pending implementation due to additional application modules/UI:

- Follow-up Task creation
- Onboarding Task creation
- Task Assignment
- Task Completion
- Activity History validation
- Pipeline Count validation
- Deal Notes automation (pending UI implementation)

---