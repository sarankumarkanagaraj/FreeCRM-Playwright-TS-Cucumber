Feature: Sales Pipeline Management

Background:
  Given user launches the FreeCRM application
  When user enters valid username and password
  And user clicks on Login button
  Then user should be logged in successfully

Scenario: Sales Pipeline Management

  Given user navigates to Deals page

  When user creates a new deal
  Then deal should be created successfully

  When user edits the deal
  Then deal should be updated successfully

  # Pending Assignment
  # Create 5 Deals
  # Assign Different Stages
  # Close one as Won
  # Close one as Lost
  # Verify Pipeline Counts