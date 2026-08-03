export const LoginData = {
  username: process.env.APP_USERNAME!,
  password: process.env.APP_PASSWORD!,
};

export const CompanyData = {
  companyName: 'OpenAI Automation Pvt Ltd',
  updatedCompanyName: 'OpenAI Automation Pvt Ltd Updated',
};

export const ContactData = {
  firstName: 'William',
  lastName: 'Jones',
  updatedFirstName: 'William Updated',
  updatedLastName: 'Jones Updated',

  company: CompanyData.companyName,
};

export const DealData = {
  title: 'Automation Deal',
  updatedTitle: 'Automation Deal Updated',

  amount: '50000',
  updatedAmount: '75000',

  stage: 'Prospect',
  updatedStage: 'Won',

  closeDate: '08/20/2026',

  note: 'Automation Note',

  company: CompanyData.companyName,

  contact: `${ContactData.firstName} ${ContactData.lastName}`,
};
