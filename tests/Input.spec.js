const {test, expect} =require('@playwright/test');
test ('Inputbox', async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/');
// Method1:
const user1 = await page.locator('#name');
await expect(user1).toBeVisible();
await expect(user1).toBeEnabled();
await expect(user1).toBeEditable();
await expect(user1).toBeEmpty();
await page.locator('#name').fill("Pravin");
await expect(await page.locator('#country')).toBeEditable();
await expect(await page.locator('#country')).not.toBeEmpty();
// await page.locator('#country').fill("Canada");
// Mothod2:
// await expect(page.locator('#name')).toBeEditable();
// await expect(page.locator('#name')).toBeEnabled();
// await expect(page.locator('#name')).toBeEmpty();
await page.close();
})


