Feature: Company Management

  Background:
    Given user launches the FreeCRM application
    When user enters valid username and password
    And user clicks on Login button
    Then user should be logged in successfully

  Scenario: Create Company
    Given user navigates to Companies page
    When user creates a new company
    Then company should be created successfully

  Scenario: Search Company
    Given user navigates to Companies page
    When user searches for the company
    Then company should be displayed

  Scenario: Edit Company
    Given user navigates to Companies page
    When user edits the company
    Then company should be updated successfully

  Scenario: Delete Company
    Given user navigates to Companies page
    When user deletes the company
    Then company should not exist