import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ContactLocators } from '../locators/ContactLocators';
import { ContactData } from '../testData/TestData';

export class ContactPage extends BasePage {
  private locator = new ContactLocators();

  async navigateToContacts() {
    await this.page.click(this.locator.contactsMenu);
  }

  async clickNewContact() {
    await this.page.click(this.locator.newContactButton);
  }

  async createContact(firstName: string, lastName: string, company: string) {
    await this.page.fill(this.locator.firstName, firstName);

    await this.page.fill(this.locator.lastName, lastName);

    await this.page.fill(this.locator.companyDropdown, company);

    await this.page.keyboard.press('Enter');

    await this.page.click(this.locator.saveButton);
  }

  async verifyContactCreated(firstName: string, lastName: string) {
    await expect(this.page.locator('.selectable')).toContainText(`${firstName} ${lastName}`);
  }

  async verifyContactDisplayed(firstName: string, lastName: string) {
    await this.navigateToContacts();

    const row = this.page.locator(`tr:has(a:has-text("${firstName} ${lastName}"))`).first();

    await expect(row).toBeVisible();
  }

  async editContact(updatedFirst: string, updatedLast: string) {
    await this.navigateToContacts();

    const row = this.page
      .locator(`tr:has(a:has-text("${ContactData.firstName} ${ContactData.lastName}"))`)
      .first();

    await expect(row).toBeVisible();

    await row.locator(this.locator.editButton).click();

    await expect(this.page.locator(this.locator.firstName)).toBeVisible();

    await this.page.locator(this.locator.firstName).clear();
    await this.page.fill(this.locator.firstName, updatedFirst);

    await this.page.locator(this.locator.lastName).clear();
    await this.page.fill(this.locator.lastName, updatedLast);

    await this.page.click(this.locator.saveButton);
  }

  async verifyContactUpdated(firstName: string, lastName: string) {
    await expect(this.page.locator('.selectable')).toContainText(`${firstName} ${lastName}`);
  }

  async deleteContact() {
    await this.navigateToContacts();

    const row = this.page
      .locator(
        `tr:has(a:has-text("${ContactData.updatedFirstName} ${ContactData.updatedLastName}"))`,
      )
      .first();

    await expect(row).toBeVisible();

    await row.locator(this.locator.deleteButton).click();

    await expect(this.page.locator(this.locator.confirmDeleteButton)).toBeVisible();

    await this.page.locator(this.locator.confirmDeleteButton).click();
  }

  async verifyContactDeleted(firstName: string, lastName: string) {
    await this.navigateToContacts();

    await expect(this.page.locator(`a:has-text("${firstName} ${lastName}")`)).toHaveCount(0);
  }
}
