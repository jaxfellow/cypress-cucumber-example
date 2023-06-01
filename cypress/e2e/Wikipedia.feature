@wikipedia
Feature: Visit Wikipedia

  Scenario: Opening Wikipedia page
    Given I open "Wikipedia" page
    Then I see "Wikipedia" in the url

  Scenario: Searching for a specific topic
    Given I am on the Wikipedia homepage
    When I enter "Artificial Intelligence" into the search box
    And I click the search button
    Then I should see the search results page

  Scenario: Opening a Wikipedia article
    Given I am on the Wikipedia homepage
    When I search for "OpenAI"
    And I click on the first search result
    Then I should see the article page for "OpenAI"

  Scenario: Navigating to Wikipedia's main page from an article
    Given I am on a Wikipedia article page
    When I click on the Wikipedia logo
    Then I should be redirected to the Wikipedia main page
