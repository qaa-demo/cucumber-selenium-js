# Login feature file login.feature

Feature: Login
  As a user
  I want to login to the website
  So that I can access secure areas

  Scenario Outline: Login with <username> and <password>
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then I should see a message "<message>"

    Examples:
      | username  | password           | message                          |
      | tomsmith  | SuperSecretPassword! | You logged into a secure area!  |
      | dummy     | dummy              | Your username is invalid!       |
