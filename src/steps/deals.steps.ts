import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { DealsPage } from '../pages/DealsPage';
import { DealData } from '../testData/TestData';

let dealsPage: DealsPage;

Given('user navigates to Deals page', async function (this: CustomWorld) {
  dealsPage = new DealsPage(this.page!);

  await dealsPage.navigateToDeals();
});

When('user creates a new deal', async function () {
  await dealsPage.clickNewDeal();

  await dealsPage.createDeal(
    DealData.title,
    DealData.amount,
    DealData.stage,
    DealData.company,
    DealData.contact,
  );
});

Then('deal should be created successfully', async function () {
  await dealsPage.verifyDealCreated(DealData.title);
});

When('user edits the deal', async function () {
  await dealsPage.editDeal(DealData.updatedTitle, DealData.updatedAmount);
});

Then('deal should be updated successfully', async function () {
  await dealsPage.verifyDealUpdated(DealData.updatedTitle);
});

When('user deletes the deal', async function () {
  await dealsPage.deleteDeal(DealData.updatedTitle);
});

Then('deal should not exist', async function () {
  await dealsPage.verifyDealDeleted(DealData.updatedTitle);
});

Then('deal should be displayed', async function () {
  await dealsPage.verifyDealDisplayed(DealData.title);
});
