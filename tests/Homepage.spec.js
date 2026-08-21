const {test, expect} = require('@playwright/test')

test('HomePage', async ({page}) => {
  await page.goto('https://demoblaze.com/index.html');
  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://demoblaze.com/index.html');
  const a=await page.title();
  console.log(a);
  await page.close();
})