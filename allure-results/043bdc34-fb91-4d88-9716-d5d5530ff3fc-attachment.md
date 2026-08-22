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
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Employee Id')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByLabel('Employee Id')
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e12]:
          - alert [ref=f1e13]:
            - generic [ref=f1e14]:
              - generic [ref=f1e15]: 
              - paragraph [ref=f1e16]: Invalid credentials
          - generic [ref=f1e18]:
            - paragraph [ref=f1e19]: "Username : Admin"
            - paragraph [ref=f1e20]: "Password : admin123"
        - generic [ref=f1e21]:
          - generic [ref=f1e23]:
            - generic [ref=f1e24]:
              - generic [ref=f1e25]: 
              - generic [ref=f1e26]: Username
            - textbox "username" [active] [ref=f1e28]
          - generic [ref=f1e30]:
            - generic [ref=f1e31]:
              - generic [ref=f1e32]: 
              - generic [ref=f1e33]: Password
            - textbox "password" [ref=f1e35]
          - button "Login" [ref=f1e37] [cursor=pointer]
          - paragraph [ref=f1e39] [cursor=pointer]: Forgot Your Password?
      - generic [ref=f1e40]:
        - generic [ref=f1e41]:
          - link [ref=f1e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e54]:
          - paragraph [ref=f1e55]: OrangeHRM OS 5.9
          - paragraph [ref=f1e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e59]
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
  12 | const labells= page.getByLabel('Employee Id');
> 13 | await expect(labells).toBeVisible();
     |                       ^ Error: expect(locator).toBeVisible() failed
  14 | await page.close();
  15 | })
```