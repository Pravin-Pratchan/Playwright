import{test, expect} from '@playwright/test'

test('Auto', async ({ page }) => {

    await page.goto('https://www.redbus.in');
    await page.locator('#srcinput').fill('Delhi');
    await page.waitForT imeout(4000);
});