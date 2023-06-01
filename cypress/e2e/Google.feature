@google
Feature: Search Google
  
  Scenario: Opening a Google network page
    Given I open "Google" page
    Then I see "Google" in the url

  Scenario: Performing a basic search
    Given I am on the Google homepage
    When I enter "Cypress" into the search box
    Then I should see search results

  Scenario: Clicking on a search result
    Given I am on the Google search results page
    When I click on the first search result
    Then I should be redirected to the corresponding website