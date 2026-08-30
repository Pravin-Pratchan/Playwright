const {test, expect} = require ('@playwright/test')
test('checkbox', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator("//input[@id='sunday']").check();
await expect (await page.locator("//input[@id='sunday']")).toBeChecked();
await page.locator("//input[@id='monday']").check();
await expect (await page.locator("//input[@id='monday']")).toBeChecked();
await page.locator("//input[@id='tuesday']").check();
await expect (await page.locator("//input[@id='tuesday']")).toBeChecked();
await page.locator("//input[@id='wednesday']").check();
await expect (await page.locator("//input[@id='wednesday']")).toBeChecked();
await expect (await page.locator("//input[@id='thursday']")).not.toBeChecked();
await expect (await page.locator("//input[@id='friday']")).not.toBeChecked();
await expect (await page.locator("//input[@id='saturday']")).not.toBeChecked();

await page.close();
}
)