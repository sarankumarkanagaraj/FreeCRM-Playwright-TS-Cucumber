import { Given, When, Then } from '@cucumber/cucumber';
import { ContactPage } from '../pages/ContactPage';
import { CustomWorld } from '../support/custom-world';
import { ContactData } from '../testData/TestData';

let contactPage: ContactPage;

Given('user navigates to Contacts page', async function (this: CustomWorld) {
  contactPage = new ContactPage(this.page!);

  await contactPage.navigateToContacts();
});

When('user creates a new contact', async function () {
  await contactPage.clickNewContact();

  await contactPage.createContact(ContactData.firstName, ContactData.lastName, ContactData.company);
});

Then('contact should be created successfully', async function () {
  await contactPage.verifyContactCreated(ContactData.firstName, ContactData.lastName);
});

Then('contact should be displayed', async function () {
  await contactPage.verifyContactDisplayed(ContactData.firstName, ContactData.lastName);
});

When('user edits the contact', async function () {
  await contactPage.editContact(ContactData.updatedFirstName, ContactData.updatedLastName);
});

Then('contact should be updated successfully', async function () {
  await contactPage.verifyContactUpdated(ContactData.updatedFirstName, ContactData.updatedLastName);
});

When('user deletes the contact', async function () {
  await contactPage.deleteContact();
});

Then('contact should not exist', async function () {
  await contactPage.verifyContactDeleted(ContactData.updatedFirstName, ContactData.updatedLastName);
});
