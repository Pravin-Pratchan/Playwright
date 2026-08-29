const {test, expect} = require('@playwright/test');

test('radio', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
await expect(page).toHaveTitle('Automation Testing Practice');


await page.locator("//input[@id='male']").check();
//Another methiod// await page.check("//input[@id='male']");

await expect (await page.locator("//input[@id='male']")).toBeChecked();
await expect (await page.locator("//input[@id='female']")).not.toBeChecked(); //To see female is not checked

})