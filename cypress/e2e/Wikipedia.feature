@smokeTest
Feature: Visit Wikipedia
  
  Scenario: Opening Wikipedia page
    Given I open "Wikipedia" page
    Then I see "Wikipedia" in the url