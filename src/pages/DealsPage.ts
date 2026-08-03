import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { DealsLocators } from '../locators/DealsLocators';
import { DealData, ContactData } from '../testData/TestData';

export class DealsPage extends BasePage {
  private locator = new DealsLocators();

  //=========================
  // Navigation
  //=========================

  async navigateToDeals() {
    await this.page.click(this.locator.dealsMenu);
  }

  async clickNewDeal() {
    await this.page.click(this.locator.newDealButton);
  }

  //=========================
  // Create
  //=========================

  async createDeal(
    title: string,
    amount: string,
    stage: string,
    company?: string,
    contact?: string,
  ) {
    await this.page.fill(this.locator.title, title);

    await this.page.fill(this.locator.amount, amount);

    await this.page.click(this.locator.stageDropdown);

    await this.page.getByText(stage, { exact: true }).click();

    if (company) {
      await this.page.fill(this.locator.companyDropdown, company);

      await this.page.locator('.menu .item').filter({ hasText: company }).first().click();
    }

    if (contact) {
      await this.page.fill(this.locator.contactDropdown, ContactData.firstName);

      await this.page
        .locator('.menu .item')
        .filter({ hasText: ContactData.firstName })
        .first()
        .click();
    }

    await this.page.click(this.locator.saveButton);
  }

  //=========================
  // Verification
  //=========================

  async verifyDealCreated(title: string) {
    await expect(this.page.locator('.edit-in-place-holder p')).toHaveText(title);
  }

  async verifyDealDisplayed(title: string) {
    await this.navigateToDeals();

    await expect(this.page.locator(`a:has-text("${title}")`)).toBeVisible();
  }

  async verifyAmount(amount: string) {
    await expect(this.page.getByText(amount)).toBeVisible();
  }

  async verifyStage(stage: string) {
    await expect(this.page.getByText(stage)).toBeVisible();
  }

  //=========================
  // Update
  //=========================

  async editDeal(updatedTitle: string, updatedAmount: string) {
    const row = this.page.locator(`tr:has(a:has-text("${DealData.title}"))`);

    await row.locator(this.locator.editButton).click();

    await this.page.locator(this.locator.title).clear();

    await this.page.fill(this.locator.title, updatedTitle);

    await this.page.locator(this.locator.amount).clear();

    await this.page.fill(this.locator.amount, updatedAmount);

    await this.page.click(this.locator.saveButton);
  }

  async verifyDealUpdated(updatedTitle: string) {
    await expect(this.page.locator('.edit-in-place-holder p')).toHaveText(updatedTitle);
  }

  async updateAmount(amount: string) {
    await this.page.locator(this.locator.amount).clear();

    await this.page.fill(this.locator.amount, amount);

    await this.page.click(this.locator.saveButton);
  }

  async updateStage(stage: string) {
    await this.page.click(this.locator.stageDropdown);

    await this.page.getByText(stage, { exact: true }).click();

    await this.page.click(this.locator.saveButton);
  }

  async updateCloseDate(date: string) {
    await this.page.fill(this.locator.closeDate, date);

    await this.page.keyboard.press('Enter');

    await this.page.click(this.locator.saveButton);
  }

  async addNote(note: string) {
    // TODO
    // Need Notes locator
  }

  //=========================
  // Delete
  //=========================

  async deleteDeal(title: string) {
    await this.navigateToDeals();

    const row = this.page.locator(`tr:has(a:has-text("${title}"))`);

    await row.locator(this.locator.deleteButton).click();

    await this.page.click(this.locator.confirmDeleteButton);
  }

  async verifyDealDeleted(title: string) {
    await this.navigateToDeals();

    await expect(this.page.locator(`a:has-text("${title}")`)).toHaveCount(0);
  }
}
