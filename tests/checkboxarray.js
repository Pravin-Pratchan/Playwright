const {test, expect} = require ('@playwright/test')
test('checkboxarray', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator("//input[@id='sunday']").check();
await expect (await page.locator("//input[@id='sunday']")).toBeChecked();
// Store the locators of the checkboxes you want to select in an array
const checkBoxesLocators = [
  "//input[@type='checkbox' and @id='monday']",   // Monday
  "//input[@type='checkbox' and @id='saturday']", // Saturday
  "//input[@type='checkbox' and @id='sunday']"    // Sunday
];

// Loop through the array and check each checkbox
for (const locator of checkBoxesLocators) {
  if (await page.locator(locator).isChecked()) {
    await page.locator(locator).uncheck();
  }
}

})