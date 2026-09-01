const {test, expect} = require('@playwright/test')
test('dropdown2', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator('#country').selectOption({ label: 'India'});
await expect(page.locator('#country')).toHaveValue('india');
await page.locator('#country').selectOption({ label: 'China' });
await expect(page.locator('#country')).toHaveValue('china');
await expect(page.locator('#country')).not.toHaveValue('france');

const options = page.locator('#country option');
await expect(options).toHaveCount(10);

//select and check the value using loop //Single values will be checked at a time
const allOptions = await page.$$('#country option');
  for (const option of allOptions) {
    const text = await option.textContent();
    if (text.includes('France')) {
      await page.selectOption('#country', text.trim());
      await expect(page.locator('#country')).toHaveValue('france');
      break;
    }
  }

  await page.waitForTimeout(3000);
});
