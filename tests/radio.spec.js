import {test, expect} from '@playwright/test'

test('radio', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
await expect(page).toHaveTitle('Automation Testing Practice');


await page.locator("//input[@id='male']").check();
await page.waitForTimeout(3000);
await page.locator("//input[@id='female']").check();
await page.waitForTimeout(4000);

//Another methiod// await page.check("//input[@id='male']");

await expect (await page.locator("//input[@id='male']")).not.toBeChecked();
await expect (await page.locator("//input[@id='female']")).toBeChecked(); //To see female is not checked

})