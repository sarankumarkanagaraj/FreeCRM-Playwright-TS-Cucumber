export class DealsLocators {
  // Navigation
  dealsMenu = 'a[href="/deals"]';
  newDealButton = 'a[href="/deals/new"]';

  // Create Deal
  title = 'input[name="title"]';
  amount = 'input[name="amount"]';

  stageDropdown = 'div[name="stage"]';
  companyDropdown = 'div[name="company"] input.search';
  contactDropdown = 'div[name="contacts"] input.search';

  closeDate = '.react-datepicker__input-container input';

  saveButton = 'button.ui.linkedin.button';

  // List
  editButton = 'button:has(.edit.icon)';
  deleteButton = 'button:has(.trash.icon)';
  confirmDeleteButton = 'button.ui.red.button';
}
