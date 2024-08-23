//google-search-pom-steps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const Chrome = require('selenium-webdriver/chrome');
const options = new Chrome.Options();
const args = options.addArguments("start-maximized")
const GoogleSearchPage = require('../../pom/google-search-page');

console.log("running search pom steps")

let driver;
let googleSearchPage;


driver = new Builder().forBrowser('chrome').setChromeOptions(args).build();
googleSearchPage = new GoogleSearchPage(driver);


Given('I am on the Google search page {string}', { timeout: 10000 }, async function (pageUrl) {
  await googleSearchPage.open(pageUrl);
});

When('I search for {string}', { timeout: 10000 }, async function (searchTerm) {
  await googleSearchPage.search(searchTerm);
});

Then('the page title should be {string}', async function (expectedTitle) {
  await googleSearchPage.validate(expectedTitle)
  await driver.quit();
});

