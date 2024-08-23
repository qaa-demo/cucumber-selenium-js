// loging-steps.js

const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

console.log("running login steps")

// After each scenario, close the browser
After(async function () {
    if (driver) { // Check if the driver exists
        await driver.quit(); // Close the browser
    }
});

let driver;
const baseUrl = 'https://the-internet.herokuapp.com/login'

Given('I am on the login page', { timeout: 10000 }, async function () {
    driver = await new Builder().forBrowser('chrome').build();
    console.log("Navigate to: ", baseUrl)
    await driver.get(baseUrl);
});

When('I login with username {string} and password {string}', async function (username, password) {
    console.log(`Login as ${username} with password ${password}`)
    await driver.findElement(By.name('username')).sendKeys(username);
    await driver.findElement(By.name('password')).sendKeys(password);
    await driver.findElement(By.css('.radius')).click();
});

Then('I should see a message {string}', async function (expectedMessage) {
    await driver.wait(until.elementLocated(By.id('flash')), 10000);
    const message = await driver.findElement(By.id('flash')).getText();
    console.log(message, `expected: ${expectedMessage}`)
    assert.strictEqual(message.includes(expectedMessage), true);
    // await driver.quit();
});