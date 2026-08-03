import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ENV } from '../config/env';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/custom-world';

let loginPage: LoginPage;

Given('user launches the FreeCRM application', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page!);

  await loginPage.launchApplication(ENV.BASE_URL);
});

When('user enters valid username and password', async function () {
  await loginPage.enterUsername(ENV.USERNAME);
  await loginPage.enterPassword(ENV.PASSWORD);
});

When('user clicks on Login button', async function () {
  await loginPage.clickLogin();
});

Then('user should be logged in successfully', async function (this: CustomWorld) {
  await expect(this.page!.getByPlaceholder('Search')).toBeVisible({
    timeout: 10000,
  });
});
