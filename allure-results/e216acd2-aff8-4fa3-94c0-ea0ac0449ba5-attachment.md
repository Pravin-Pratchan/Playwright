# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegen.spec.js >> test
- Location: tests\codegen.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('LED Cinema Display features a')
    - waiting for "https://demoblaze.com/index.html" navigation to finish...
    - navigated to "https://demoblaze.com/index.html"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://demoblaze.com/index.html');
  5  |   await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  6  |   await page.getByRole('heading', { name: 'Nokia lumia' }).click();
  7  |   await page.getByRole('heading', { name: 'Nokia lumia' }).click();
  8  |   await page.getByRole('heading', { name: 'Nokia lumia' }).click();
> 9  |   await page.getByText('LED Cinema Display features a').click();
     |                                                         ^ Error: locator.click: Target page, context or browser has been closed
  10 |   await page.close();
  11 | });
```