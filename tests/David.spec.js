import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://davidscans.com/branch.html');
  await page.getByRole('link', { name: 'Creote Elementor' }).click();
  await page.goto('https://davidscans.com/index.html');
  await page.getByRole('heading', { name: 'Best Health Check Packages' }).click();
  await page.getByRole('heading', { name: 'Book Appointment' }).click();
  await page.getByText('Note : Verify Your Mobile').click();
  await page.locator('#firstForm').getByPlaceholder('Enter Your Name').click();
  await page.getByRole('textbox', { name: ' Verfiy Mobile Number' }).click();
  await page.locator('#content').getByPlaceholder('Enter Test name').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByText('About', { exact: true }).click();
  await page.locator('section').filter({ hasText: 'About David Labs & Scans' }).getByRole('heading').click();
  await page.locator('section').filter({ hasText: 'About David Labs & Scans' }).getByRole('paragraph').click();
  await page.getByRole('link', { name: 'More Details' }).nth(1).click();
  await page.close();
});