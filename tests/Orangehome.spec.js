const {test, expect} = require('@playwright/test')

test('HomePage', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const a=await page.title();
  const b=await page.url();
  console.log(a);
  console.log(b);
  await page.close();
})