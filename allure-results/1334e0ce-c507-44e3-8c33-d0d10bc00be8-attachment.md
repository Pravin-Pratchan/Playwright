# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Orangehome.spec.js >> HomePage
- Location: tests\Orangehome.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: opensource-demo.orangehrmlive.com
      - text: took too long to respond.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_CONNECTION_TIMED_OUT
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | test('HomePage', async ({page}) => {
> 4  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |              ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  5  |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  6  |   await expect(page).toHaveTitle('OrangeHRM');
  7  |   const logo= page.getByAltText('company-branding');
  8  |   await expect(logo).toBeVisible();
  9  |   await page.getByPlaceholder('Username').fill('Admin');
  10 |   await page.getByPlaceholder('Password').fill('admin@123');
  11 |   test.slow();
  12 |   await page.getByRole('button', {type: 'submit'}).click();
  13 | const labells= page.getByLabel('Employee Id');
  14 | await expect(labells).toBeVisible();
  15 | await page.close();
  16 | })
```