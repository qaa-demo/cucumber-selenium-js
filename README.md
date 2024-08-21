# Cucumber Selenium JavaScript Framework
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


## Project Structure

```
/project-root-folder                    # Project root folder i.e. selenium-cucumber-js
   ├── features/                        # Directory containing feature files
   │   ├── example.feature              # Example feature file
   │   └── other-feature.feature        # Additional feature files
   ├── step_definitions/                # Directory for step definitions
   │   ├── example_steps.js             # JavaScript file for step definitions
   │   └── other_steps.js               # Additional step definition files
   ├── support/                         # Directory for support files
   │   ├── hooks.js                     # Hooks for setup and teardown
   │   └── world.js                     # Custom world setup
   ├── package.json                     # npm package configuration file
   └── cucumber.js                      # Cucumber configuration file
```

## BDD Test Automation Development

### 1. Define Features
   - **Create Feature Files**: Write `.feature` files in the `features/` directory using Gherkin syntax.
     - Example (`example.feature`):
       ```gherkin
       Feature: Example Feature
         Scenario: Example Scenario
           Given a precondition
           When an action is performed
           Then an expected outcome is observed
       ```

### 2. Implement Step Definitions
   - **Create Step Definition Files**: Implement the steps described in feature files using JavaScript in the `step_definitions/` directory.
     - Example (`example_steps.js`):
       ```javascript
       const { Given, When, Then } = require('@cucumber/cucumber');

       Given('a precondition', function () {
         // Implementation code
       });

       When('an action is performed', function () {
         // Implementation code
       });

       Then('an expected outcome is observed', function () {
         // Implementation code
       });
       ```

### 3. Configure Cucumber
   - **Setup Configuration**: Define Cucumber options and hooks in `cucumber.js` or `package.json`.
     - Example (`cucumber.js`):
       ```javascript
       module.exports = {
         default: `--format-options '{"showSnippets": true}'`,
       };
       ```

### 4. Use Hooks and Support Files
   - **Define Hooks**: Implement hooks for setup and teardown tasks in `support/hooks.js`.
     - Example (`hooks.js`):
       ```javascript
       const { Before, After } = require('@cucumber/cucumber');

       Before(function () {
         // Code to run before each scenario
       });

       After(function () {
         // Code to run after each scenario
       });
       ```

   - **Custom World Setup**: Define custom world setup in `support/world.js`.
     - Example (`world.js`):
       ```javascript
       const { setWorldConstructor } = require('@cucumber/cucumber');

       class CustomWorld {
         constructor() {
           // Custom setup
         }
       }

       setWorldConstructor(CustomWorld);
       ```

### 5. Use Tags
   - **Organize and Filter Tests**: Tags are used in feature files to categorize and filter scenarios.
     - Example:
       ```gherkin
       @login
       Scenario: Valid login
         Given the user is on the login page
         When the user enters valid credentials
         Then the user should be logged in successfully
       ```
   - **Run Tagged Tests**: Execute specific scenarios by using the `--tags` option with the `npm test` command.
     - Command:
       ```bash
       npm test -- --tags "@login"
       ```

### 6. Execute Tests
   - **Run Tests**: Use the `test` script in `package.json` to execute tests.
     - Command:
       ```bash
       npm test
       ```