# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boot.spec.js >> boot
- Location: tests\boot.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#multiselect-item multiselect-all active')

```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | test('boot', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB');
  6  |   await page.locator('.multiselect').click();
> 7  |   await page.locator('.multiselect-item multiselect-all active').click();
     |                                                                  ^ Error: locator.click: Target page, context or browser has been closed
  8  |     await page.waitForTimeout(3000);
  9  | 
  10 | });
  11 | 
  12 | 
```