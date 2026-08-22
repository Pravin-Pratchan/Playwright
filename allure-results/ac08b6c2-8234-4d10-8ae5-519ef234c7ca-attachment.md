# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Orangehome.spec.js >> HomePage
- Location: tests\Orangehome.spec.js:3:1

# Error details

```
Error: page.waitForSelector: Unexpected token "/" while parsing css selector "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login". Did you mean to CSS.escape it?
Call log:
  - waiting for https://opensource-demo.orangehrmlive.com/web/index.php/auth/login to be visible

```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | test('HomePage', async ({page}) => {
> 4  |   await page.waitForSelector("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
     |              ^ Error: page.waitForSelector: Unexpected token "/" while parsing css selector "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login". Did you mean to CSS.escape it?
  5  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  6  |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  7  |   const a=await page.title();
  8  |   const b=await page.url();
  9  |   console.log(a);
  10 |   console.log(b);
  11 |   await page.close();
  12 | })
```