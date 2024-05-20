// pom/google-search-page.js

const { By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

class GoogleSearchPage {
  constructor(driver) {
    this.driver = driver;
  }

  async open(pageUrl) {
    await this.driver.get(pageUrl);
  }

  async search(searchTerm) {
    const searchBox = await this.driver.findElement(By.name('q'));
    await searchBox.sendKeys(searchTerm, Key.RETURN);
    await this.driver.wait(until.titleContains(searchTerm), 10000);
  }

  async validate(expectedTitle) {
    const currentTitle = await this.driver.getTitle();
    console.log("Current title:", currentTitle)
    assert.strictEqual(currentTitle, expectedTitle);

  }
}

module.exports = GoogleSearchPage;
