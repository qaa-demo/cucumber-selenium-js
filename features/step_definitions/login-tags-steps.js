const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');

Given('the user is on the login page', async function () {
    await this.driver.get('https://example.com/login');
});

When('the user enters their credentials', async function () {
    await this.driver.findElement(By.id('username')).sendKeys('validUsername');
    await this.driver.findElement(By.id('password')).sendKeys('validPassword');
});

When('the user submits the login form', async function () {
    await this.driver.findElement(By.id('loginButton')).click();
});

Then('the user should be logged in successfully', async function () {
    await this.driver.wait(until.urlContains('dashboard'), 10000);
    const currentUrl = await this.driver.getCurrentUrl();
    if (!currentUrl.includes('dashboard')) {
        throw new Error('Login failed');
    }
});

When('the user enters invalid credentials {string} and {string}', async function (username, password) {
    await this.driver.findElement(By.id('username')).sendKeys(username);
    await this.driver.findElement(By.id('password')).sendKeys(password);
});

Then('the user should see an error message', async function () {
    const errorElement = await this.driver.wait(until.elementLocated(By.css('.error')), 10000);
    const errorText = await errorElement.getText();
    if (!errorText.includes('The username and password could not be verified.')) {
        throw new Error(`Expected error message but got "${errorText}"`);
    }
});
