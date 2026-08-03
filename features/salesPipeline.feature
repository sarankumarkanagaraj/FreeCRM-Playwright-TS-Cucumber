Feature: Sales Pipeline

Background:
  Given user launches the FreeCRM application
  When user enters valid username and password
  And user clicks on Login button
  Then user should be logged in successfully

Scenario: Sales Pipeline

  Given user navigates to Deals page

  When user creates a new deal
  Then deal should be created successfully

  When user edits the deal
  Then deal should be updated successfully