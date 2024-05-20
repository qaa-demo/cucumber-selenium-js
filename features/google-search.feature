# google-search.feature

Feature: Google Search
  As a user
  I want to search Google for a term
  So that I can see relevant search results

  Scenario: Search for the term "Selenium Webdriver"
    Given I am on the Google search page "https://www.google.com"
    When I search for "Selenium Webdriver"
    Then the page title should be "Selenium Webdriver - Google Search"