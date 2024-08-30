# Cucumber Selenum JavaScript Project Intro

### **Introduction**

Welcome to this intro course on **JavaScript Test Automation with Selenium and Cucumber**! In this course, we will explore how to write test automation scripts using JavaScript, Selenium, and Cucumber. The aim is to provide you with a foundation in these technologies by guiding you through the creation of basic tests.

#### **Course Overview**

1. **Project Setup**: We will start by creating a project directory and installing the required dependencies. You’ll learn how to set up your development environment to support Selenium and Cucumber BDD framework.

2. **Cucumber Feature and Steps Structure**: Next, we will dive into the Cucumber framework, setting up feature files with Gherkin Given And Then language syntax and step definitions with JavaScript. This will help you understand how to define and implement test scenarios in a Cucumber BDD Gherkin format.

3. **Basic Selenium Tests**: Through hands-on examples, you’ll practice writing basic Selenium tests. These examples will cover common interactions with web elements and showcase how to leverage Selenium WebDriver for browser automation,

#### **Learning Approach**

- **Interactive Coding**: Instead of copying and pasting code, we encourage you to **type the code yourself**. This approach will reinforce your learning and **prepare you for coding interviews** by helping you become more familiar with syntax and debugging.

- **Hands-On Practice**: Each section will include practical examples related to test automation. We’ll use real-world scenarios from [The Internet](https://the-internet.herokuapp.com/) to create and test different features, allowing you to practice setting up feature/step definition structure plus practice Selenium working with selenium locators and JavaScript syntax.

By the end of this course, you will have a well-rounded understanding of how to set up and write automation tests using JavaScript, Selenium, and Cucumber. Let's get started and build your automation skills!

## Prerequisites
* [Node.js](https://nodejs.org/) (with npm) installed on your machine
* [Visual Studio Code](https://code.visualstudio.com/download) IDE installed on your macine
* [git] (https://git-scm.com/) installed on your machine
* [GitHub] register your account and login
* Basic Knowledge of JavaScript 
* Basic understanding of [Selenium WebDriver](https://selenium.dev)
* Basic knowledge of Command Line Interface (CLI) and running commands in Terminal 
* Basic understanding of git version control and :octocat: GitHub source control technologies

### **Instructions for Setting Up the Project Folder**
---

1. **Create and Clone Repository**

   - Create a new empty repository on GitHub named `selenium-cucumber-js`.
   - Clone the repository to your local machine.
   - Open the folder in Visual Studio Code.

2. **Add `.gitignore`**

   - Create a `.gitignore` file and add:
     ```
     node_modules/
     .env
     ```

3. **Initialize Node.js Project**

   - Open a terminal in Visual Studio Code and run:
     ```bash
     npm init -y
     ```

---

4. **Install Required Libraries**

   Install Selenium WebDriver, Cucumber, Chromedriver and Chai (assertion library):
   ```bash
   npm install --save-dev selenium-webdriver @cucumber/cucumber chromedriver chai
   ```

5. **Create the Basic Project Structure**
Add `features` and `features/step-definitions` and  `support` folders. Your folder structure should look like this:
   ```
   cucumber-selenium-js/
   ├── features/
   │   └── step_definitions/
   ├── node_modules/
   ├── support/   
   ├── package.json
   ├── package-lock.json
   └── cucumber.js
   ```
---



## **Course Plan for JavaScript Test Automation with Selenium and Cucumber**

**Concepts Covered:**
- Variables & Data Types
- Functions
- Error Handling
- Async/Await
- Using Hooks in Cucumber
- Using Tags in Cucumber

---

#### **1. Variables & Data Types**

In this exercise, we will create our first test using the Cucumber/Gherkin syntax. We'll start by defining a feature in a .feature file and then implement the corresponding step definitions in a .steps.js file. This exercise will introduce you to the concept of variables in JavaScript. We'll use these variables to interact with web elements and manage data within our tests. 

In JavaScript, variables can be declared using `var`, `let`, or `const` keywords :

- **`var`**: Variables are accessible throughout the entire function or globally if declared outside a function. They can be redeclared and updated.

- **`let`**: Variables are accessible only within the block (e.g., inside `{}`) where they are declared. They cannot be redeclared in the same block and can be updated.

- **`const`**: Variables are accessible only within the block where they are declared and their value cannot be changed. If declared as an object or array, the contents can still be modified.

   - **Feature File: `features/variables.feature`**
     ```gherkin
     Feature: Variables and Data Types
       Scenario: Using variables for interacting with form fields
         Given I navigate to the Form Authentication page
         When I enter valid credentials
         Then I should be redirected to the secure area
     ```

   - **Steps File: `features/step_definitions/variables.steps.js`**
     ```javascript
     const { Given, When, Then, After } = require('@cucumber/cucumber'); // Import Cucumber functions
     const { expect } = require('chai'); // Import Chai for assertions
     const { Builder, By } = require('selenium-webdriver'); // Import Selenium WebDriver classes

     let driver; // Declare a variable to hold the WebDriver instance
     const username = 'tomsmith'; // Variable for username
     const password = 'SuperSecretPassword!'; // Variable for password

     // Step definition for navigating to the login page
     Given('I navigate to the Form Authentication page', async function () {
         driver = await new Builder().forBrowser('chrome').build(); // Initialize WebDriver and open Chrome
         await driver.get('https://the-internet.herokuapp.com/login'); // Navigate to the login page
     });

     // Step definition for entering credentials and submitting the form
     When('I enter valid credentials', async function () {
         await driver.findElement(By.id('username')).sendKeys(username); // Enter the username
         await driver.findElement(By.id('password')).sendKeys(password); // Enter the password
         await driver.findElement(By.css('button[type="submit"]')).click(); // Click the submit button
     });

     // Step definition for verifying redirection
     Then('I should be redirected to the secure area', async function () {
         const content = await driver.findElement(By.id('flash')).getText(); // Get the text of the flash message
         expect(content).to.contain('You logged into a secure area!'); // Assert that the message contains expected text
         await driver.quit(); // Close the browser
     });
     ```

**Run your test**:
In terminal run the folowing command:

   ```bash
   npx cucumber-js
   ```

**Update your GitHub Repo:**
   1. After updating your files, open the terminal.
   2. Run the following commands to commit your changes:
      ```bash
      git status
      git add .
      git commit -m "added variables and data types example"
      git push
      ```

---

#### **2. Functions**

   - **Feature File: `features/form-auth.feature`**
     ```gherkin
     Feature: Functions
       Scenario: Using functions to fill out a form
         Given I navigate to the Form Authentication page
         When I fill in the login form with username "tomsmith" and password "SuperSecretPassword!"
         Then I should see the message "You logged into a secure area!"
     ```

   - **Steps File: `features/step_definitions/form-auth.steps.js`**
     ```javascript
     const { Given, When, Then, After } = require('@cucumber/cucumber'); // Import Cucumber functions
     const { expect } = require('chai'); // Import Chai for assertions
     const { Builder, By } = require('selenium-webdriver'); // Import Selenium WebDriver classes

     let driver; // Declare a variable to hold the WebDriver instance

     // Function to log in
     async function login(username, password) {
         await driver.findElement(By.id('username')).sendKeys(username); // Enter the username
         await driver.findElement(By.id('password')).sendKeys(password); // Enter the password
         await driver.findElement(By.css('button[type="submit"]')).click(); // Click the submit button
     }

     // After each scenario, close the browser
     After(async function () {
         if (driver) { // Check if the driver exists
             await driver.quit(); // Close the browser
         }
     });

     // Step definition for navigating to the login page
     Given('I navigate to the Form Authentication page', async function () {
         driver = await new Builder().forBrowser('chrome').build(); // Initialize WebDriver and open Chrome
         await driver.get('https://the-internet.herokuapp.com/login'); // Navigate to the login page
     });

     // Step definition for filling in the login form
     When('I fill in the login form with username {string} and password {string}', async function (username, password) {
         await login(username, password); // Call the login function with provided credentials
     });

     // Step definition for verifying redirection
     Then('I should see the message {string}', async function (message) {
         const content = await driver.findElement(By.id('flash')).getText(); // Get the text of the flash message
         expect(content).to.contain(message); // Assert that the message contains expected text
     });
     ```

**Run your test**:
   ```bash
   npx cucumber-js
   ```

**Update your GitHub Repo:**
   1. After updating your files, open the terminal.
   2. Run the following commands to commit your changes:
      ```bash
      git status
      git add .
      git commit -m "added functions example"
      git push
      ```

---


#### **3. Error Handling**

- **Feature File: `features/dropdown.feature`**
  ```gherkin
  Feature: Error Handling
    Scenario: Handling errors while selecting dropdown options
      Given I navigate to the Dropdown page
      When I select an invalid option
      Then I should see an error message
  ```

- **Steps File: `features/step_definitions/dropdown.steps.js`**
  ```javascript
  const { Given, When, Then } = require('@cucumber/cucumber'); // Import Cucumber functions
  const { expect } = require('chai'); // Import Chai for assertions
  const { Builder, By } = require('selenium-webdriver'); // Import Selenium WebDriver classes

  let driver; // Declare a variable to hold the WebDriver instance

  // Step definition for navigating to the dropdown page
  Given('I navigate to the Dropdown page', async function () {
      driver = await new Builder().forBrowser('chrome').build(); // Initialize WebDriver and open Chrome
      await driver.get('https://the-internet.herokuapp.com/dropdown'); // Navigate to the dropdown page
  });

  // Step definition for selecting an invalid option and handling errors
  When('I select an invalid option', async function () {
      try {
          await driver.findElement(By.css('select')).sendKeys('Invalid Option'); // Attempt to select an invalid option
      } catch (error) {
          console.error('Error selecting option:', error); // Log the error if selection fails
      } finally {
          // Cleanup code or additional operations can go here if needed
      }
  });

  // Step definition for verifying the error message
  Then('I should see an error message', async function () {
      const errorMessage = 'Invalid Option'; // Example error message
      let content;

      try {
          content = await driver.findElement(By.css('#error')).getText(); // Attempt to get the error message text
      } catch (error) {
          console.error('Error retrieving error message:', error); // Log the error if retrieval fails
      } finally {
          // Close the browser after test
          if (driver) {
              await driver.quit(); // Ensure the browser is closed
          }
      }

      // Assert that the error message contains the expected text
      expect(content).to.include(errorMessage); 
  });
  ```

### **Explanation of Error Handling**

- **`try` block**: Used to write code that may throw an error. If an error occurs, execution moves to the `catch` block.
- **`catch` block**: Handles errors that occur in the `try` block. Here, errors are logged to the console.
- **`finally` block (Optional)**: Contains code that always runs, regardless of whether an error occurred or not. It is useful for cleanup operations, such as closing the browser.

---
Run your tests and push the changes to your GitHub Repo

---

#### **4. Async/Await**

   - **Feature File: `features/drag-and-drop.feature`**
     ```gherkin
     Feature: Handling Drag and Drop
       Scenario: Perform drag and drop action
         Given I navigate to the Drag and Drop page
         When I drag and drop elements
         Then I should see the elements in the new positions
     ```

   - **Steps File: `features/step_definitions/drag-and-drop.steps.js`**
     ```javascript
     const { Given, When, Then, After } = require('@cucumber/cucumber');
     const { Builder, By, Actions } = require('selenium-webdriver');
     const { expect } = require('chai');

     let driver;

     Given('I navigate to the Drag and Drop page', async function () {
         driver = await new Builder().forBrowser('chrome').build();
         await driver.get('https://the-internet.herokuapp.com/drag_and_drop');
     });

     When('I drag and drop elements', async function () {
         const source = await driver.findElement(By.id('column-a'));
         const target = await driver.findElement(By.id('column-b'));

         const actions = driver.actions({ async: true });
         await actions.dragAndDrop(source, target).perform();  // Perform drag and drop action
     });

     Then('I should see the elements in the new positions', async function () {
         const sourceText = await driver.findElement(By.id('column-a')).getText();
         const targetText = await driver.findElement(By.id('column-b')).getText();
         expect(sourceText).to.equal('B');
         expect(targetText).to.equal('A');
     });

     After(async function () {
         await driver.quit();
     });
     ```
---
Run your tests and push the changes to your GitHub Repo

---

### **5. Let's put it all together - JavaScript Alerts Automation**
NOTE: in this example we will be using Node.js built in assertions

**Feature File: `features/alerts.feature`**

```gherkin
Feature: JavaScript Alerts

  Scenario: Handling "Click for JS Alert"
    Given I navigate to the JavaScript Alerts page
    When I click the "Click for JS Alert" button
    Then I should see an alert with the text "I am a JS Alert"
    And I should see the result text "You successfully clicked an alert"

  Scenario: Handling "Click for JS Confirm"
    When I click the "Click for JS Confirm" button
    Then I should see a confirmation alert with the text "I am a JS Confirm"
    And the result text should be "You clicked: Ok"

  Scenario: Handling "Click for JS Prompt" with cancel
    When I click the "Click for JS Prompt" button
    Then I should see a prompt alert with the text "I am a JS prompt"
    When I dismiss the prompt
    And the result text should be "You clicked: Cancel"

  Scenario: Handling "Click for JS Prompt" with text input
    When I click the "Click for JS Prompt" button
    Then I should see a prompt alert with the text "I am a JS prompt"
    When I enter "Cucumber is Cool" into the prompt
    And I accept the prompt
    And the result text should be "You entered: Cucumber is Cool"
```

**Steps File: `features/steps/alerts.steps.js`**

```javascript
const { Given, When, Then } = require('@cucumber/cucumber'); // Import Cucumber functions for defining steps
const { Builder, By, until } = require('selenium-webdriver'); // Import Selenium WebDriver components
const assert = require('assert'); // Import built-in Node.js assertion library

let driver; // Variable to hold the WebDriver instance

Given('I navigate to the JavaScript Alerts page', async function () {
    driver = await new Builder().forBrowser('chrome').build(); // Create a new instance of WebDriver for Chrome
    await driver.get('https://the-internet.herokuapp.com/javascript_alerts'); // Navigate to the JavaScript Alerts page
});

When('I click the "Click for JS Alert" button', async function () {
    await driver.findElement(By.css('button[onclick="jsAlert()"]')).click(); // Find and click the "Click for JS Alert" button
});

Then('I should see an alert with the text "I am a JS Alert"', async function () {
    await driver.wait(until.alertIsPresent(), 10000); // Wait until the alert is present
    const alert = await driver.switchTo().alert(); // Switch to the alert
    assert.strictEqual(await alert.getText(), 'I am a JS Alert'); // Assert that the alert text is correct
    alert.accept(); // Accept the alert
});

Then('I should see the result text "You successfully clicked an alert"', async function () {
    const resultText = await driver.findElement(By.id('result')).getText(); // Get the result text from the page
    assert.strictEqual(resultText, 'You successfully clicked an alert'); // Assert that the result text is correct
    await driver.quit(); // Close the browser
});

When('I click the "Click for JS Confirm" button', async function () {
    await driver.findElement(By.css('button[onclick="jsConfirm()"]')).click(); // Find and click the "Click for JS Confirm" button
});

Then('I should see a confirmation alert with the text "I am a JS Confirm"', async function () {
    await driver.wait(until.alertIsPresent(), 10000); // Wait until the confirmation alert is present
    const alert = await driver.switchTo().alert(); // Switch to the confirmation alert
    assert.strictEqual(await alert.getText(), 'I am a JS Confirm'); // Assert that the alert text is correct
    alert.accept(); // Accept the alert
});

Then('the result text should be "You clicked: Ok"', async function () {
    const resultText = await driver.findElement(By.id('result')).getText(); // Get the result text from the page
    assert.strictEqual(resultText, 'You clicked: Ok'); // Assert that the result text is correct
    await driver.quit(); // Close the browser
});

When('I click the "Click for JS Prompt" button', async function () {
    await driver.findElement(By.css('button[onclick="jsPrompt()"]')).click(); // Find and click the "Click for JS Prompt" button
});

Then('I should see a prompt alert with the text "I am a JS prompt"', async function () {
    await driver.wait(until.alertIsPresent(), 10000); // Wait until the prompt alert is present
    const alert = await driver.switchTo().alert(); // Switch to the prompt alert
    assert.strictEqual(await alert.getText(), 'I am a JS prompt'); // Assert that the alert text is correct
    alert.sendKeys('Cucumber is cool'); // Enter text into the prompt
    alert.accept(); // Accept the prompt
});

```

---
Run your tests and push the changes to your GitHub Repo

---


## Project Folder Structure by this point:
```
cucumber-selenium-js/
├── features/
│   ├── alets.feature
│   ├── login.feature
│   ├── form-auth.feature
│   ├── dropdown.feature
│   ├── dynamic-content.feature
│   ├── drag-and-drop.feature
│   └── step_definitions/
│       ├── alert.steps.js
│       ├── login.steps.js
│       ├── form-auth.steps.js
│       ├── dropdown.steps.js
│       ├── dynamic-content.steps.js
│       └── drag-and-drop.steps.js
├── node_modules/
├── support/ 
├── package.json
├── package-lock.json
└── cucumber.js
```

---

# Introduction to Using Hooks in Cucumber

In this tutorial, we'll explore how to use `Before` and `After` hooks in Cucumber to manage your Selenium WebDriver setup and teardown. This approach helps keep your step definitions clean and focused on testing logic.

## Overview

Hooks are special functions that allow you to run code before or after scenarios or features. By using hooks, you can centralize setup and cleanup logic, making your test suite more organized and maintainable.

### Setting Up Hooks

1. **Create the `hooks.js` File**

   In your `features/support` directory, create a file named `hooks.js`. This file will manage the initialization and teardown of your WebDriver.

   ```javascript
   const { Before, After } = require('@cucumber/cucumber');
   const { Builder } = require('selenium-webdriver');
   
   // Initialize WebDriver
   let driver;
   
   Before(async function () {
     driver = new Builder().forBrowser('chrome').build(); // Initialize WebDriver
     this.driver = driver; // Make WebDriver available in step definitions
   });
   
   After(async function () {
     await driver.quit(); // Close WebDriver instance after each scenario
   });
   ```

   - **`Before` Hook**: This function runs before each scenario. It initializes the WebDriver instance and makes it available to step definitions via `this.driver`.
   - **`After` Hook**: This function runs after each scenario. It closes the WebDriver instance to clean up resources.

2. **Update Step Definitions**

   Now that the WebDriver setup and teardown are handled in `hooks.js`, your step definitions will look cleaner. Here’s how you should modify your step definitions to use the WebDriver instance from the hooks:

   ```javascript
   const { Given, When, Then } = require('@cucumber/cucumber');
   const { By, until } = require('selenium-webdriver');
   const assert = require('assert');
   
   Given('user is on the login page', async function () {
     await this.driver.get('https://example.com/login');
   });
   
   When('user enters valid credentials', async function () {
     await this.driver.findElement(By.css('#username')).sendKeys('user');
     await this.driver.findElement(By.css('#password')).sendKeys('user');
   });
   
   When('user submits the login form', async function () {
     await this.driver.findElement(By.css('#submit')).click();
   });
   
   Then('user should see a welcome header', async function () {
     const welcomeHeader = await this.driver.wait(until.elementLocated(By.css('#welcome-header')), 10000);
     await this.driver.wait(until.elementIsVisible(welcomeHeader), 10000);
     assert.strictEqual(await welcomeHeader.isDisplayed(), true, 'Welcome header is not visible');
     const currentUrl = await this.driver.getCurrentUrl();
     assert.strictEqual(currentUrl, 'https://example.com/dashboard', 'URL does not match expected value');
   });
   ```

### Benefits of Using Hooks

- **Cleaner Step Definitions**: With setup and teardown code in hooks, your step definitions are focused on testing logic rather than WebDriver management.
- **Centralized Management**: Hooks allow you to manage WebDriver initialization and cleanup in one place, making it easier to update or modify the setup process.
---


# Introduction to Using Tags in Cucumber

Tags in Cucumber allow you to categorize and filter your scenarios or features. This tutorial covers how to use tags effectively and provides an example of how to tag scenarios for valid and invalid login tests.

## Using Tags in Cucumber

Tags help in organizing tests, running specific subsets of tests, and excluding certain tests from being executed.

### Adding Tags to Scenarios

You can add tags directly to your feature files. Tags are added at the beginning of a feature or scenario and are preceded by the `@` symbol.

#### Example Feature File

```gherkin
# features/login.feature

@valid
Feature: User Login

  Scenario: Successful login with valid credentials
    Given user is on the login page
    When user enters valid credentials
    And user submits the login form
    Then user should see a welcome header

@invalid
Feature: User Login

  Scenario: Unsuccessful login with invalid credentials
    Given user is on the login page
    When user enters invalid credentials
    And user submits the login form
    Then user should see an error message
```

### Running Tagged Scenarios

You can run specific tagged scenarios using Cucumber’s command-line options. For example, to run only the scenarios tagged with `@valid`, use:

```bash
npx cucumber-js --tags @valid
```

To run scenarios tagged with `@invalid`, use:

```bash
npx cucumber-js --tags @invalid
```

To run scenarios tagged with both `@valid` and `@important`, use:

```bash
npx cucumber-js --tags "@valid and @important"
```

---

**Create Your Own Examples:**

Visit [https://the-internet.herokuapp.com/](https://the-internet.herokuapp.com/) and select a page that has not yet been covered in the course. Some examples include: Checkboxes, File Download, Hovers, Nested Frames. Each page offers different interactive elements and scenarios to automate.

For each selected page, create a new Cucumber feature file and a corresponding step definition file. Write tests that cover the key interactions and scenarios available on that page. After creating and running your tests, ensure they are working as expected. Finally, update your repository with the new feature and step definition files to keep your project up to date.

---
# References:

## Common interactions with web elements using Selenium and JavaScript

```js
// Click a button
await driver.findElement(By.id("button-id")).click();

// Type text into a text field
await driver.findElement(By.id("text-field-id")).sendKeys("Hello, World!");

// Get the text content of an element (div)
var divText = await driver.findElement(By.id("div-id")).getText();
console.log(divText);

// Select an option from a select element
await new Select(driver.findElement(By.id("select-id"))).selectByValue("option-value");

// Check or uncheck a checkbox
await driver.findElement(By.id("checkbox-id")).click();

// Enter text and press a keyboard key
// add the following import to the top of the file
const { Key } = require("selenium-webdriver");

await driver.findElement(By.name("searchBox")).sendKeys("Selenium WebDriver", Key.RETURN);
await driver.findElement(By.css("#my-input")).sendKeys("text to enter", Key.TAB);

// wait for element before interracting with it
await this.driver.wait(until.elementLocated(By.name('username')), 10000);

// add assertion, get text from element
// add the following import to the top of the file. NOTE:'assert' is a built-in module in Node.js
const assert = require('assert');

const message = await driver.findElement(By.id('flash')).getText();
assert.strictEqual(message.includes('You logged into a secure area!'), true);


```

## BDD (Behavior-Driven Development)
Behavior-Driven Development **(BDD) is a software development methodology** that extends Test-Driven Development (TDD) by emphasizing collaboration between developers, testers, and business stakeholders. BDD focuses on the behavioral specification of software features. It aims to improve communication and understanding between all parties involved in the development process.

In BDD, features are described in terms of the expected behavior of the system, written in a language that is easily understandable by non-technical stakeholders. These behaviors are often defined through scenarios that describe how the software should behave in different situations.

## Cucumber
**Cucumber is a popular tool used in BDD**. It allows you to write tests in a natural, human-readable language that non-programmers can understand. Cucumber supports multiple programming languages and integrates with various testing frameworks. It is often used to bridge the gap between non-technical stakeholders and developers by using plain language to describe the behavior of the software.

Cucumber uses feature files written in Gherkin syntax to define the behavior of the application. These feature files are then used to generate executable tests.

## Gherkin
**Gherkin is the language used by Cucumber** to write the test scenarios in a human-readable format. It uses a simple syntax to define test cases and scenarios. Gherkin syntax includes keywords like:

- **Feature** Describes the feature being tested.
- **Scenario** Represents a single test case or behavior.
- **Given** Describes the initial context or setup.
- **When** Describes the action or event.
- **Then** Describes the expected outcome or result.

### Example of Gherkin Syntax:
```gherkin
Feature: User login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks the login button
    Then the user should be redirected to the homepage
    And a welcome message should be displayed

```

## Roles and Responsibilities in BDD with Cucumber and Gherkin

### 1. Product Owners / Business Analysts
#### Responsibilities:
- Writing Features: Product Owners (POs) or Business Analysts (BAs) are responsible for writing the initial feature files using Gherkin syntax. They describe the business requirements and expected behaviors in a language that is understandable to both technical and non-technical team members.
- Example: A PO writes a feature file to define a scenario where a user logs in successfully with valid credentials.
### 2. Test Automation Engineers / QA Engineers
#### Responsibilities:
- Developing Step Definitions: QA Engineers or Test Automation Engineers create the step definitions that map the Gherkin steps (Given, When, Then) to actual code. These step definitions implement the logic required to interact with the application and validate the outcomes described in the feature files.
- Developing Automated Tests: They also develop automated test scripts based on the step definitions and ensure that these tests are integrated into the CI/CD pipeline.
- Example: A QA Engineer writes the step definitions to interact with the login page, fill in credentials, and verify that the user is redirected to the homepage.
### 3. Developers
#### Responsibilities:
- Collaborating on Features: Developers collaborate with the PO and QA Engineers to ensure that the feature files accurately represent the expected behavior and that the implementation aligns with the described scenarios.
- Providing Feedback: They provide feedback on the feasibility and technical aspects of the scenarios and suggest any necessary adjustments.
- Example: A Developer reviews the feature file for user login and suggests adjustments to handle edge cases or clarify the expected outcomes.
### 4. Team Communication and Collaboration:
#### Meetings: 
Regular meetings such as sprint planning, refinement sessions, and daily stand-ups are used to discuss and review feature files, scenarios, and test results. During these meetings, team members align on the feature descriptions and implementation details.
#### Documentation and Collaboration Tools: 
Tools like Azure DevOps, JIRA, Confluence, or a similar project management system are used to document feature files, track the status of test cases, and facilitate communication between team members.
#### Feedback Loops: 
Continuous feedback is provided during development and testing phases. POs, QA Engineers, and Developers discuss any issues or discrepancies in the feature files and update them as needed.
#### Example of Communication:
- Initial Setup: The PO writes a feature file for user login and shares it with the team.
- Development: The Developer and QA Engineer review the feature file in a sprint planning meeting. The Developer provides feedback on the implementation, and the QA Engineer starts developing step definitions and automated tests.
- Integration: During the sprint, the QA Engineer integrates the automated tests into the CI/CD pipeline and communicates any issues or updates related to the test execution.
- Review and Feedback: The team reviews test results, addresses any failures, and updates the feature file and step definitions as necessary based on the feedback.

This approach ensures that all team members are aligned on the requirements, responsibilities are clearly defined, and communication channels are established to handle any issues that arise during the development and testing process.

---
Here is a list of links to the official pages for Node.js, Cucumber, and Selenium:

- [Node.js Official Website](https://nodejs.org/)
- [Cucumber Official Website](https://cucumber.io/)
- [Selenium Official Website](https://www.selenium.dev/)