const { test, expect } = require('@playwright/test');

test('checkboxarray', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const checkBoxesLocators = [
    "//input[@type='checkbox' and @id='monday']",
    "//input[@type='checkbox' and @id='saturday']",
    "//input[@type='checkbox' and @id='sunday']"
  ];

  // To check the element
  for (const locator of checkBoxesLocators) {
    await page.locator(locator).check();
  }

  // Optional: Verify they are checked
  for (const locator of checkBoxesLocators) {
    await expect(page.locator(locator)).toBeChecked();
  }
});