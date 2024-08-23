# Cucumber Selenum JavaScript Project Intro Course

### **Introduction to the Crash Course**

Welcome to this crash course on **JavaScript Test Automation with Selenium and Cucumber**! In this course, we will explore how to write effective test automation scripts using JavaScript, Selenium, and Cucumber. The aim is to provide you with a solid foundation in these technologies by guiding you through the creation of basic tests.

#### **Course Overview**

1. **Project Setup**: We will start by creating a project directory and installing the required dependencies. You’ll learn how to set up your development environment to support Selenium and Cucumber.

2. **Cucumber Feature and Steps Structure**: Next, we will dive into the Cucumber framework, setting up feature files and step definitions. This will help you understand how to define and implement test scenarios in a readable, maintainable format.

3. **Basic Selenium Tests**: Through hands-on examples, you’ll practice writing basic Selenium tests. These examples will cover common interactions with web elements and showcase how to leverage Selenium WebDriver for browser automation.

#### **Learning Approach**

- **Interactive Coding**: Instead of copying and pasting code, we encourage you to type the code yourself. This approach will reinforce your learning and prepare you for coding interviews by helping you become more familiar with syntax and debugging.

- **Hands-On Practice**: Each section will include practical examples related to test automation. We’ll use real-world scenarios from [The Internet](https://the-internet.herokuapp.com/) to create and test different features, allowing you to apply what you’ve learned in a tangible way.

By the end of this course, you will have a well-rounded understanding of how to set up and write automation tests using JavaScript, Selenium, and Cucumber. Let's get started and build your automation skills!

## Prerequisites
* [Node.js](https://nodejs.org/) (with npm)
* [Visual Studio Code](https://code.visualstudio.com/download)
* Basic Knowledge of JavaScript 
* Basic understanding of [Selenium WebDriver](https://selenium.dev)
* Basic knowledge of Command Line Interface (CLI) and running commands in Terminal 
* Basic understanding of git version control and :octocat: GitHub source control technologies

### **Instructions for Setting Up the Project Folder**

1. **Create the Root Project Folder**

   Open your terminal and run the following command to create the root folder for your project:
   ```bash
   mkdir cucumber-selenium-js
   ```

2. **Navigate to the Project Folder**

   Change directory to the newly created folder:
   ```bash
   cd cucumber-selenium-js
   ```

3. **Initialize a New Node.js Project**

   Initialize a new Node.js project by running:
   ```bash
   npm init -y
   ```
   This creates a `package.json` file with default settings.

4. **Install Required Libraries**

   Install Selenium WebDriver, Cucumber, and Chromedriver:
   ```bash
 
   npm install --save-dev selenium-webdriver @cucumber/cucumber chromedriver chai
   ```

5. **Create the Basic Project Structure**

   Create the folder structure for features and steps:
   ```bash
   mkdir -p features/steps
   ```

   This will set up the following empty folder structure:
   ```
   cucumber-selenium-js/
   ├── features/
   │   └── steps/
   ├── node_modules/
   ├── package.json
   ├── package-lock.json
   └── cucumber.js
   ```
---

### **Next Steps**

Once you have set up the folder structure, you can start creating feature files and step definition files as outlined in the previous instructions.



## **Course Plan for JavaScript Test Automation with Selenium and Cucumber**

**Concepts Covered:**
- Variables & Data Types
- Functions
- Control Flow
- Error Handling
- Async/Await

---

#### **1. Variables & Data Types**

   - **Feature File: `features/variables.feature`**
     ```gherkin
     Feature: Variables and Data Types
       Scenario: Using variables for interacting with form fields
         Given I navigate to the Form Authentication page
         When I enter valid credentials
         Then I should be redirected to the secure area
     ```

   - **Steps File: `features/steps/variables.steps.js`**
     ```javascript
     const { Given, When, Then, After } = require('@cucumber/cucumber'); // Import Cucumber functions
     const { expect } = require('chai'); // Import Chai for assertions
     const { Builder, By } = require('selenium-webdriver'); // Import Selenium WebDriver classes

     let driver; // Declare a variable to hold the WebDriver instance
     const username = 'tomsmith'; // Variable for username
     const password = 'SuperSecretPassword!'; // Variable for password

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
     });
     ```

**Run your test**:
   ```bash
   npx cucumber-js
   ```

**Update your Git Repo:**
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

   - **Steps File: `features/steps/form-auth.steps.js`**
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

**Update your Git Repo:**
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

   - **Steps File: `features/steps/dropdown.steps.js`**
     ```javascript
     const { Given, When, Then, After } = require('@cucumber/cucumber'); // Import Cucumber functions
     const { expect } = require('chai'); // Import Chai for assertions
     const { Builder, By, until } = require('selenium-webdriver'); // Import Selenium WebDriver classes

     let driver; // Declare a variable to hold the WebDriver instance

     // After each scenario, close the browser
     After(async function () {
         if (driver) { // Check if the driver exists
             await driver.quit(); // Close the browser
         }
     });

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
             console.error('Error selecting option:', error); // Log the error
         }
     });

     // Step definition for verifying the error message
     Then('I should see an error message', async function () {
         const errorMessage = 'Invalid Option'; // Example error message
         const content = await driver.findElement(By.css('#error')).getText(); // Get the text of the error message
         expect(content).to.contain(errorMessage); // Assert that the error message contains expected text
     });
     ```
**Run your test**:
   ```bash
   npx cucumber-js
   ```

**Update your Git Repo:**
   1. After updating your files, open the terminal.
   2. Run the following commands to commit your changes:
      ```bash
      git status
      git add .
      git commit -m "added error handling example"
      git push
      ```

---

#### **5. Async/Await**

   - **Feature File: `features/drag-and-drop.feature`**
     ```gherkin
     Feature: Handling Drag and Drop
       Scenario: Perform drag and drop action
         Given I navigate to the Drag and Drop page
         When I drag and drop elements
         Then I should see the elements in the new positions
     ```

   - **Steps File: `features/steps/drag-and-drop.steps.js`**
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
**Run your test**:

**Update your Git Repo:**

---
## Project Folder Structure by this point:
```
cucumber-selenium-js/
│
├── features/
│   ├── login.feature
│   ├── form-auth.feature
│   ├── dropdown.feature
│   ├── dynamic-content.feature
│   ├── drag-and-drop.feature
│   └── steps/
│       ├── login.steps.js
│       ├── form-auth.steps.js
│       ├── dropdown.steps.js
│       ├── dynamic-content.steps.js
│       └── drag-and-drop.steps.js
│
├── node_modules/
│
├── package.json
├── package-lock.json
└── cucumber.js
```

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