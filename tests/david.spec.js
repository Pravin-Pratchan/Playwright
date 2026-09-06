import { test, expect } from '@playwright/test'; 
test('david', async ({page}) => {
    await page.goto('https://www.davidscans.com/');
    await expect (page.locator(".logo_default")).toBeVisible();
    //await expect(page.getByAltText('Creote Elementor')).toBeVisible();
    await page.click("(//a[@class='nav-link'])[5]");   
    await page.getByPlaceholder('Your Name *').fill('Test');
    await page.getByPlaceholder('Mobile Number *').fill('9999999999');
    await page.getByPlaceholder('Enter the Test').fill('Tests');
    await page.waitForTimeout(4000);

    //await page.waitForTimeout(9000);
    await page.getByRole('button', {type: 'submit'}).click();
    await page.locator('.contact-toggler').click();
    await page.getByPlaceholder('Enter Your Name').fill('Test');
    await page.getByPlaceholder('Your Mobile Number').fill('8888888888');
     await page.locator('input[name="testName"][size="40"]').fill('Your value');
    await page.locator("form[id='secondForm'] button[type='submit']").click();
    await page.waitForTimeout(4000);

});