import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { DealsLocators } from '../locators/DealsLocators';
import { DealData, ContactData } from '../testData/TestData';

export class DealsPage extends BasePage {
  private locator = new DealsLocators();

  // ==========================
  // Navigation
  // ==========================

  async navigateToDeals() {
    await this.page.click(this.locator.dealsMenu);
  }

  async clickNewDeal() {
    await this.page.click(this.locator.newDealButton);
  }

  // ==========================
  // Create Deal
  // ==========================

  async createDeal(
    title: string,
    amount: string,
    stage: string,
    company?: string,
    contact?: string
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

  // ==========================
  // Validation
  // ==========================

  async verifyDealCreated(title: string) {
    await expect(this.page.locator('.edit-in-place-holder p')).toHaveText(title);
  }

  async verifyDealDisplayed(title: string) {
    await this.navigateToDeals();

    await expect(this.page.locator(`a:has-text("${title}")`).first()).toBeVisible();
  }

  async verifyAmount(amount: string) {
    await expect(this.page.locator('.ui.field').filter({ hasText: 'Amount' })).toContainText(
      amount
    );
  }

  async verifyStage(stage: string) {
    await expect(this.page.locator('.ui.field').filter({ hasText: 'Stage' })).toContainText(stage);
  }

  async verifyOwner(owner: string) {
    await expect(this.page.locator('.ui.field').filter({ hasText: 'Assigned To' })).toContainText(
      owner
    );
  }

  // ==========================
  // Update
  // ==========================

  async editDeal(updatedTitle: string, updatedAmount: string) {
    await this.navigateToDeals();

    const row = this.page.locator(`tr:has(a:has-text("${DealData.title}"))`).first();

    await expect(row).toBeVisible();

    await row.locator(this.locator.editButton).click();

    await expect(this.page.locator(this.locator.title)).toBeVisible();

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

  async changeStage(stage: string) {
    await this.page.click(this.locator.stageDropdown);

    await this.page.getByText(stage, { exact: true }).click();

    await this.page.click(this.locator.saveButton);
  }

  async updateCloseDate(date: string) {
    await this.page.fill(this.locator.closeDate, date);

    await this.page.keyboard.press('Enter');

    await this.page.click(this.locator.saveButton);
  }

  async addNote() {
    // TODO
    // Waiting for note textbox locator
    // Waiting for note save button locator
  }

  // ==========================
  // Delete
  // ==========================

  async deleteDeal(title: string) {
    await this.navigateToDeals();

    const row = this.page.locator(`tr:has(a:has-text("${title}"))`).first();

    await expect(row).toBeVisible();

    await row.locator(this.locator.deleteButton).click();

    await expect(this.page.locator(this.locator.confirmDeleteButton)).toBeVisible();

    await this.page.locator(this.locator.confirmDeleteButton).click();
  }

  async verifyDealDeleted(title: string) {
    await this.navigateToDeals();

    await expect(this.page.locator(`a:has-text("${title}")`)).toHaveCount(0);
  }
}
