export class CompanyLocators {
  // Left Menu
  companiesMenu = 'a[href="/companies"]';

  // Buttons
  newCompanyButton = '.menu-item-wrapper:has(a[href="/companies"]) button';
  saveButton = 'button.ui.linkedin.button';

  // Create Company
  companyName = 'input[name="name"]';

  // Search
  searchBox = 'input[placeholder="Search"]';

  // Grid Actions
  editButton = 'button:has(.edit.icon)';
  deleteButton = 'button:has(.trash.icon)';
  confirmDeleteButton = 'button.ui.red.button';
}
