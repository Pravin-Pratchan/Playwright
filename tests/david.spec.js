import { test, expect } from '@playwright/test'; 
test('david', async ({page}) => {
    await page.goto('https://www.davidscans.com/');
    await expect(page.getByAltText('Creote Elementor')).toBeVisible();
    await page.goto('https://www.davidscans.com/contact.html');
    await page.click("(//a[@class='nav-link'])[5]");   
    await page.getByPlaceholder('Your Name *').fill('Test');
    await page.getByPlaceholder('Mobile Number *').fill('9999999999');
    await page.getByPlaceholder('Enter the Test *').fill('Tests');
    await page.waitForTimeout(9000);
    await page.getByRole('button', {type: 'submit'}).click();
    await page.close();
});