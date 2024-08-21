const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');

let driver;

Given('the user is on the login page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://example.com/login');
});

When('the user enters their credentials', async function () {
    await driver.findElement(By.id('username')).sendKeys('validUsername');
    await driver.findElement(By.id('password')).sendKeys('validPassword');
});

When('the user submits the login form', async function () {
    await driver.findElement(By.id('loginButton')).click();
});

Then('the user should be logged in successfully', async function () {
    await driver.wait(until.urlContains('dashboard'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    if (!currentUrl.includes('dashboard')) {
        throw new Error('Login failed');
    }
    await driver.quit();
});

When('the user enters invalid credentials {string} and {string}', async function (username, password) {
    await driver.findElement(By.id('username')).sendKeys(username);
    await driver.findElement(By.id('password')).sendKeys(password);
});

Then('the user should see an error message', async function () {
    const errorElement = await driver.wait(until.elementLocated(By.css('.error')), 10000);
    const errorText = await errorElement.getText();
    if (!errorText.includes('The username and password could not be verified.')) {
        throw new Error(`Expected error message but got "${errorText}"`);
    }
    await driver.quit();
});
