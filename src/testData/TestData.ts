import { TestDataGenerator } from '../utils/TestDataGenerator';

export const LoginData = {
  username: process.env.APP_USERNAME!,
  password: process.env.APP_PASSWORD!
};

export const CompanyData = {
  companyName: TestDataGenerator.companyName(),
  updatedCompanyName: `${TestDataGenerator.companyName()} Updated`
};

export const ContactData = {
  firstName: TestDataGenerator.contactFirstName(),
  lastName: 'Jones',

  updatedFirstName: `${TestDataGenerator.contactFirstName()} Updated`,
  updatedLastName: 'Jones Updated',

  company: CompanyData.companyName
};

export const DealData = {
  title: TestDataGenerator.dealTitle(),
  updatedTitle: `${TestDataGenerator.dealTitle()} Updated`,

  amount: '50000',
  updatedAmount: '75000',

  stage: 'Prospect',
  updatedStage: 'Won',

  closeDate: '08/20/2026',

  note: 'Automation Note',

  company: CompanyData.companyName,
  contact: `${ContactData.firstName} ${ContactData.lastName}`
};
