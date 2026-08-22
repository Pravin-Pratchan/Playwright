import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('heading', { name: 'Nokia lumia' }).click();
  await page.getByRole('heading', { name: 'Nokia lumia' }).click();
  await page.getByRole('heading', { name: 'Nokia lumia' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.close();
});