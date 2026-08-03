import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { CompanyLocators } from '../locators/CompanyLocators';
import { CompanyData } from '../testData/TestData';

export class CompanyPage extends BasePage {
  private locator = new CompanyLocators();

  // ===========================
  // Navigation
  // ===========================

  async navigateToCompanies() {
    await this.page.click(this.locator.companiesMenu);
  }

  async clickNewCompany() {
    await this.page
      .locator('.menu-item-wrapper')
      .filter({
        has: this.page.locator('a[href="/companies"]'),
      })
      .locator('button')
      .click();
  }

  // ===========================
  // Create Company
  // ===========================

  async createCompany(companyName: string) {
    await this.page.fill(this.locator.companyName, companyName);
    await this.page.click(this.locator.saveButton);

    await expect(this.page.locator('.edit-in-place-holder p')).toHaveText(companyName);
  }

  async verifyCompanyCreated(companyName: string) {
    await expect(this.page.locator('.edit-in-place-holder p')).toHaveText(companyName);
  }

  // ===========================
  // Search Company
  // ===========================

  async searchCompany(companyName: string) {
    await this.page.fill(this.locator.searchBox, companyName);
  }

  async verifyCompanyDisplayed(companyName: string) {
    await expect(this.page.locator(`a:has-text("${companyName}")`)).toBeVisible();
  }

  // ===========================
  // Edit Company
  // ===========================

  async editCompany(updatedCompanyName: string) {
    await this.searchCompany(CompanyData.companyName);

    const row = this.page.locator(`tr:has(a:has-text("${CompanyData.companyName}"))`);

    await expect(row).toBeVisible();

    await row.locator('button:has(.edit.icon)').click();
    await expect(this.page.locator('input[name="name"]').first()).toBeVisible();

    await this.page.locator('input[name="name"]').first().fill(updatedCompanyName);

    await this.page.click(this.locator.saveButton);
  }

  async verifyCompanyUpdated(updatedCompanyName: string) {
    await expect(this.page.locator('.edit-in-place-holder p')).toHaveText(updatedCompanyName);
  }

  // ===========================
  // Delete Company
  // ===========================

  async deleteCompany() {
    await this.searchCompany(CompanyData.updatedCompanyName);

    await expect(
      this.page.locator(`tr:has(a:has-text("${CompanyData.updatedCompanyName}"))`),
    ).toBeVisible();

    const row = this.page.locator(`tr:has(a:has-text("${CompanyData.updatedCompanyName}"))`);

    await expect(row).toBeVisible();

    await row.locator('button:has(.trash.icon)').click();

    await expect(this.page.locator(this.locator.confirmDeleteButton)).toBeVisible();

    await this.page.locator(this.locator.confirmDeleteButton).click();
  }

  async verifyCompanyDeleted(companyName: string) {
    await this.searchCompany(companyName);

    await expect(this.page.locator(`a:has-text("${companyName}")`)).toHaveCount(0, {
      timeout: 10000,
    });
  }
}
