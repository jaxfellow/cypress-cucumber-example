@smokeTest
Feature: Search Google
  
  Scenario: Opening a Google network page
    Given I open "Google" page
    Then I see "Google" in the url