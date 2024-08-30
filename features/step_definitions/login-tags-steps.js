const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

console.log("running login tag steps")

let driver;

// Step definition for navigating to the login page
Given('the user is on the login page', { timeout: 10000 }, async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://the-internet.herokuapp.com/login');
});

// Step definition for entering valid credentials
When('the user enters valid credentials', async function () {
    await driver.findElement(By.name('username')).sendKeys('tomsmith');
    //await driver.findElement(By.id('username')).sendKeys('tomsmith')
    await driver.findElement(By.name('password')).sendKeys('SuperSecretPassword!');
});

// Step definition for submitting the login form
When('the user submits the login form', async function () {
    await driver.findElement(By.css('.radius')).click();
});

// Step definition for verifying successful login
Then('the user should be logged in successfully', async function () {
    await driver.wait(until.elementLocated(By.id('flash')), 10000);
    const message = await driver.findElement(By.id('flash')).getText();
    assert.strictEqual(message.includes('You logged into a secure area!'), true);
    await driver.quit();
});

// Step definition for entering invalid credentials
When('the user enters invalid credentials', async function () {
    await driver.findElement(By.name('username')).sendKeys('foo');
    await driver.findElement(By.name('password')).sendKeys('bar');
});

// Step definition for verifying error message
Then('the user should see an error message', async function () {
    await driver.wait(until.elementLocated(By.id('flash')), 10000);
    const message = await driver.findElement(By.id('flash')).getText();
    assert.strictEqual(message.includes('Your username is invalid!'), true);
    await driver.quit();
});
