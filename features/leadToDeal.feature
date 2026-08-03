Feature: Lead To Deal Flow

Background:
  Given user launches the FreeCRM application
  When user enters valid username and password
  And user clicks on Login button
  Then user should be logged in successfully

Scenario: Lead to Deal

  Given user navigates to Companies page
  When user creates a new company
  Then company should be created successfully

  Given user navigates to Contacts page
  When user creates a new contact
  Then contact should be created successfully

  Given user navigates to Deals page
  When user creates a new deal
  Then deal should be created successfully