import{test, expect} from '@playwright/test'
test('practice', async ({page})=>{
// await page.goto("https://practicetestautomation.com/practice-test-login/");
// await page.locator("#username").fill("student");
// await page.locator('#password').fill("Password123")
// await page.locator('#submit').click();
await page.goto("https://practicetestautomation.com/practice-test-table/");
await page.getByRole('radio', { name: 'Java' }).check();
await page.waitForTimeout(3000);
});