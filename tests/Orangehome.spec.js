const {test, expect} = require('@playwright/test')

test('HomePage', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');
  const logo= page.getByAltText('company-branding');
  await expect(logo).toBeVisible();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin@123');
  await page.getByRole('button', {type: 'submit'}).click();
// const labells= page.getByLabel('Employee Id');
// await expect(labells).toBeVisible();
// await page.close();
})