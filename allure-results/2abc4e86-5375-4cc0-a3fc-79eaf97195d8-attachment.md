# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Orangehome.spec.js >> HomePage
- Location: tests\Orangehome.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: /h5[normalize-space()='Login']
Expected: visible
Error: Unexpected token "/" while parsing css selector "/h5[normalize-space()='Login']". Did you mean to CSS.escape it?

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for /h5[normalize-space()='Login']

```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | test('HomePage', async ({page}) => {
  4  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  5  |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  6  |   await expect(page).toHaveTitle('OrangeHRM');
  7  |   const logo= page.getByAltText('company-branding');
  8  |   await expect(logo).toBeVisible();
  9  |   await page.getByPlaceholder('Username').fill('Admin');
  10 |   await page.getByPlaceholder('Password').fill('admin@123');
  11 |   await page.getByRole('button', {type: 'submit'}).click();
  12 |   const login = await page.locator("/h5[normalize-space()='Login']");
> 13 |   await expect(login).toBeVisible();
     |                       ^ Error: expect(locator).toBeVisible() failed
  14 | // const labells= page.getByLabel('Employee Id');
  15 | // await expect(labells).toBeVisible();
  16 | // await page.close();
  17 | })
```