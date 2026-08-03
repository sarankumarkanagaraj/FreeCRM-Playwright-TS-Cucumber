Feature: Deal Management

Background:
  Given user launches the FreeCRM application
  When user enters valid username and password
  And user clicks on Login button
  Then user should be logged in successfully

# =====================================================
# Deal Creation
# =====================================================

Scenario: Create Deal
  Given user navigates to Deals page
  When user creates a new deal
  Then deal should be created successfully

Scenario: Create Deal linked to Company
  Given user navigates to Companies page
  When user creates a new company
  Then company should be created successfully

  Given user navigates to Deals page
  When user creates a new deal
  Then deal should be created successfully

Scenario: Create Deal linked to Contact
  Given user navigates to Contacts page
  When user creates a new contact
  Then contact should be created successfully

  Given user navigates to Deals page
  When user creates a new deal
  Then deal should be created successfully

Scenario Outline: Create Deal with Different Stage
  Given user navigates to Deals page
  When user creates a new deal with stage "<Stage>"
  Then deal stage should be displayed

Examples:
  | Stage     |
  | Prospect  |
  | Qualify   |
  | Research  |
  | Quote     |
  | Negotiate |
  | Won       |
  | Lost      |

# =====================================================
# Deal Validation
# =====================================================

Scenario: Verify Deal in List
  Given user navigates to Deals page
  Then deal should be displayed

Scenario: Verify Deal Amount
  Given user navigates to Deals page
  Then deal amount should be displayed

Scenario: Verify Deal Stage
  Given user navigates to Deals page
  Then deal stage should be displayed

Scenario: Verify Deal Owner
  Given user navigates to Deals page
  Then deal owner should be displayed

# =====================================================
# Deal Update
# =====================================================

Scenario: Update Deal Amount
  Given user navigates to Deals page
  When user edits the deal
  Then deal should be updated successfully

Scenario Outline: Change Deal Stage
  Given user navigates to Deals page
  When user changes deal stage to "<Stage>"
  Then deal stage should be displayed

Examples:
  | Stage     |
  | Prospect  |
  | Qualify   |
  | Research  |
  | Quote     |
  | Negotiate |
  | Won       |
  | Lost      |

Scenario: Update Close Date
  Given user navigates to Deals page
  When user updates deal close date
  Then deal close date should be updated

Scenario: Add Notes
  Given user navigates to Deals page
  When user adds note to deal
  Then note should be displayed

# =====================================================
# Deal Workflow
# =====================================================

Scenario: Move Deal to Qualify
  Given user navigates to Deals page
  When user changes deal stage to "Qualify"
  Then deal stage should be displayed

Scenario: Move Deal to Research
  Given user navigates to Deals page
  When user changes deal stage to "Research"
  Then deal stage should be displayed

Scenario: Move Deal to Quote
  Given user navigates to Deals page
  When user changes deal stage to "Quote"
  Then deal stage should be displayed

Scenario: Move Deal to Won
  Given user navigates to Deals page
  When user changes deal stage to "Won"
  Then deal stage should be displayed

Scenario: Move Deal to Lost
  Given user navigates to Deals page
  When user changes deal stage to "Lost"
  Then deal stage should be displayed

# =====================================================
# Deal Delete
# =====================================================

Scenario: Delete Deal
  Given user navigates to Deals page
  When user deletes the deal
  Then deal should not exist