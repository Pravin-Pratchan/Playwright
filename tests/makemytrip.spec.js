import { test, expect } from '@playwright/test'

test("redbus", async({page})=>{
await page.goto("https://www.redbus.in/");
await page.locator('//idnput[@id="srcinput"]').click();
// await page.getByPlaceholder("Search Boarding Point").fill("Chennai");
await page.waitForTimeout(3000);
});
