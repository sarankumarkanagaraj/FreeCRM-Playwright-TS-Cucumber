Feature: Customer Onboarding

Background:
  Given user launches the FreeCRM application
  When user enters valid username and password
  And user clicks on Login button
  Then user should be logged in successfully

Scenario: Customer Onboarding

  Given user navigates to Companies page
  When user creates a new company
  Then company should be created successfully

  Given user navigates to Contacts page
  When user creates a new contact
  Then contact should be created successfully

  # Pending Assignment
  # Create Onboarding Task
  # Assign Task
  # Complete Task
  # Verify Activity History