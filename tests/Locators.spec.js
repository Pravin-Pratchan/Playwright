const {test, expect} = require('@playwright/test');

test('Locators', async ({page}) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.locator('id=login2').click();  
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("//button[normalize-space()='Log in']").click();
  const logout = await page.locator("//a[normalize-space()='Log out']");
  await expect(logout).toBeVisible();
  await page.close();
}) 