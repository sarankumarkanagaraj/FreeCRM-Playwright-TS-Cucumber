import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { CompanyPage } from '../pages/CompanyPage';
import { CompanyData } from '../testData/TestData';

let companyPage: CompanyPage;

Given('user navigates to Companies page', async function (this: CustomWorld) {
  companyPage = new CompanyPage(this.page!);

  await companyPage.navigateToCompanies();
});

When('user creates a new company', async function () {
  await companyPage.clickNewCompany();

  await companyPage.createCompany(CompanyData.companyName);
});

Then('company should be created successfully', async function () {
  await companyPage.verifyCompanyCreated(CompanyData.companyName);
});

When('user searches for the company', async function () {
  await companyPage.searchCompany(CompanyData.companyName);
});

Then('company should be displayed', async function () {
  await companyPage.verifyCompanyDisplayed(CompanyData.companyName);
});

When('user edits the company', async function () {
  await companyPage.editCompany(CompanyData.updatedCompanyName);
});

Then('company should be updated successfully', async function () {
  await companyPage.verifyCompanyUpdated(CompanyData.updatedCompanyName);
});

When('user deletes the company', async function () {
  await companyPage.deleteCompany();
});

Then('company should not exist', async function () {
  await companyPage.verifyCompanyDeleted(CompanyData.updatedCompanyName);
});
