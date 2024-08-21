@authentication
Feature: User Login

@valid-login
Scenario: Log in with valid credentials
  Given the user is on the login page
  When the user enters their credentials
  And the user submits the login form
  Then the user should be logged in successfully

@invalid-login
Scenario: Log in with incorrect credentials
  Given the user is on the login page
  When the user enters invalid credentials "foo" and "bar"
  Then the user should see an error message