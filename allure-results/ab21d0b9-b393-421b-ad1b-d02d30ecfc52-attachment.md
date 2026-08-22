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

Locator: getByLabel('Employee Id')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByLabel('Employee Id')

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "username"
- text:  Password
- textbox "password"
- button "Login"
- paragraph: Forgot Your Password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
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
  11 |   await page.locator('button[type="submit"]').click();
  12 | const labells= page.getByLabel('Employee Id');
> 13 | await expect(labells).toBeVisible();
     |                       ^ Error: expect(locator).toBeVisible() failed
  14 | await page.close();
  15 | })
```