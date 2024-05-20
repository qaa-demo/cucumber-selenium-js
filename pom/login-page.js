// login-page.js
// ==========

const { By } = require("selenium-webdriver");
const assert = require('assert');
const { locators, data } = require("../support/locators");


class LoginPage {

  constructor(driver) {
    this.driver = driver;
  }

  // class methods 

  async goto() {
    await this.driver.get(data.baseUrl);
  }

  async loginAs(username, password) {
    await this.driver.findElement(By.css(locators.username)).sendKeys(username);
    await this.driver.findElement(By.css(locators.password)).sendKeys(password);
    await this.driver.findElement(By.css(locators.submitButton)).click();
  }

  async validatePageUrl(expectedUrl) {
    const actualUrl = await this.driver.getCurrentUrl();
    // const res = expect(actualUrl).to.equal(expectedUrl);
    const res = assert.strictEqual(actualUrl, expectedUrl);
    return res;
  }

  async validatePageTitle(expectedTitle) {
    const actualTitle = await this.driver.getTitle();
    // const res = expect(actualTitle).to.equal(expectedTitle);
    const res = assert.strictEqual(actualTitle, expectedTitle);
    return res;
  }

  async validateSuccessMessage() {
    await this.validatePageText("successMessage");
  }

  async validateErrorMessage() {
    await this.validatePageText("errorMessage");
  }

  async validateLoginPageHeading() {
    await this.validatePageText("loginPageHeading");
  }

  async validateSecureAreaPageHeading() {
    await this.validatePageText("secureAreaPageHeading");
  }

    async logout() {
    await this.driver.findElement(By.css(locators.logoutButton)).click();
  }

  // common methods

  async validatePageText(val) {
    const element = await this.driver.findElement(By.css(locators[val]));
    const actualText = await element.getText();
    const expectedText = data[val];
    // const res = expect(actualText).to.contain(expectedText);
    const res = assert.strictEqual(actualText, expectedText);
    return res;
  }
}

module.exports = LoginPage;
