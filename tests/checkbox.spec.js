const {test, expect} = require ('@playwright/test')
test('checkbox', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.getByPlaceholder('Enter Name').fill("Pravin");
await page.locator('#textarea').fill(`S. Pravinkumar, No.1/32D, Flat: G1, Perumal Koil street, Kolakappam, Chennai - 600128.`);
await page.waitForTimeout(4000);
await page.locator("//input[@id='sunday']").check();
await expect (await page.locator("//input[@id='sunday']")).toBeChecked();
await page.locator("//input[@id='monday']").check();
await expect (await page.locator("//input[@id='monday']")).toBeChecked();
await page.locator("//input[@id='tuesday']").check();
await expect (await page.locator("//input[@id='tuesday']")).toBeChecked();
await page.locator("//input[@id='wednesday']").check();
await expect (await page.locator("//input[@id='wednesday']")).toBeChecked();
await page.waitForTimeout(4000);
await expect (await page.locator("//input[@id='thursday']")).not.toBeChecked();
await expect (await page.locator("//input[@id='friday']")).not.toBeChecked();
await expect (await page.locator("//input[@id='saturday']")).not.toBeChecked();

await page.close();
}
)