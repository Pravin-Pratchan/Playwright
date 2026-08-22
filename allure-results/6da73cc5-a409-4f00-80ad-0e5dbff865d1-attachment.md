# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Orangehome.spec.js >> HomePage
- Location: tests\Orangehome.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | test('HomePage', async ({page}) => {
> 4  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  5  |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  6  |   await expect(page).toHaveTitle('OrangeHRM');
  7  |   const logo= page.getByAltText('company-branding');
  8  |   await expect(logo).toBeVisible();
  9  |   await page.getByPlaceholder('Username').fill('Admin');
  10 |   await page.getByPlaceholder('Password').fill('admin@123');
  11 |   await page.getByRole('button', {type: 'submit'}).click();
  12 | // const labells= page.getByLabel('Employee Id');
  13 | // await expect(labells).toBeVisible();
  14 | // await page.close();
  15 | })
```