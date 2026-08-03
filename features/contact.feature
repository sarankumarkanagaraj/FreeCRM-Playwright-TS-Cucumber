Feature: Contact Management

Background:
  Given user launches the FreeCRM application
  When user enters valid username and password
  And user clicks on Login button
  Then user should be logged in successfully

Scenario: Create Contact
  Given user navigates to Contacts page
  When user creates a new contact
  Then contact should be created successfully

Scenario: Verify Contact
  Given user navigates to Contacts page
  Then contact should be displayed

Scenario: Edit Contact
  Given user navigates to Contacts page
  When user edits the contact
  Then contact should be updated successfully

Scenario: Delete Contact
  Given user navigates to Contacts page
  When user deletes the contact
  Then contact should not exist