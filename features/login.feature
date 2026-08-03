Feature: Login

  Scenario: Login with valid credentials
    Given user launches the FreeCRM application
    When user enters valid username and password
    And user clicks on Login button
    Then user should be logged in successfully