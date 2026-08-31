const { test, expect } = require('@playwright/test');

test('Dropdown - values present & select', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Select by label
await page.locator('#country').selectOption({ label: 'India' });
await expect(page.locator('#country')).toHaveValue('india');
  // select by Test: await page.locator('#country').selectOption('India');
  // select by Value: await page.locator('#country').selectOption('UK');
  // select by index no. await  page.locator('#country').selectOption({index: 1});
  // select by direct method await page.selectOption('#country', 'india');
    
  // Check total options
  const options = page.locator('#country option');
  await expect(options).toHaveCount(10);

  // Check particular option exists
  const content = await page.locator('#country').textContent();
  await expect(content.includes('United Kingdom')).toBeTruthy();

  // Select using loop
  const allOptions = await page.$$('#country option');
  for (const option of allOptions) {
    const text = await option.textContent();
    if (text.includes('France')) {
      await page.selectOption('#country', text.trim());
      break;
    }
  }

  await page.waitForTimeout(3000);
});