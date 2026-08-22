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
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | test('HomePage', async ({page}) => {
> 4  |   await page.goto('https://opensource-demo.orangehrmlive.com');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  6  |   const a=await page.title();
  7  |   const b=await page.url();
  8  |   console.log(a);
  9  |   console.log(b);
  10 |   await page.close();
  11 | })
```