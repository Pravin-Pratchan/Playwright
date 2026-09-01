import { test, expect } from '@playwright/test';
test('Multi', async({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator('#colors').selectOption(["Red", "Blue", "Yellow"]);

//To check the selected value present in the dropdown
await expect(page.locator('#colors')).toHaveValues(["red", "blue", "yellow"]);

//To check the value present in the dropdown
const content = await page.locator('#colors').textContent();
await expect(content.includes("Blue")).toBeTruthy();
await expect(content.includes("Green")).toBeTruthy();



//check the count
const options = await page.locator('#colors option');
await expect(options).toHaveCount(7);

//check the count using array
const options2 = await page.$$('#colors option');
await expect(options2.length).toBe(7);
console.log(options2.length);
});
 