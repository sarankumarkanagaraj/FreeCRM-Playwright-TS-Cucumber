Feature: Deal Management

Background:
Given user launches the FreeCRM application
When user enters valid username and password
And user clicks on Login button
Then user should be logged in successfully

Scenario: Create Deal
Given user navigates to Deals page
When user creates a new deal
Then deal should be created successfully

Scenario: Verify Deal
Given user navigates to Deals page
Then deal should be displayed

Scenario: Update Deal Amount
Given user navigates to Deals page
When user edits the deal
Then deal should be updated successfully

Scenario: Delete Deal
Given user navigates to Deals page
When user deletes the deal
Then deal should not exist

Scenario: Verify Deal Amount
Given user navigates to Deals page
Then deal amount should be displayed

Scenario: Verify Deal Stage
Given user navigates to Deals page
Then deal stage should be displayed

Scenario: Verify Deal Owner
Given user navigates to Deals page
Then deal owner should be displayed

Scenario: Change Deal Stage
Given user navigates to Deals page
When user changes deal stage to "Won"
Then deal stage should be displayed