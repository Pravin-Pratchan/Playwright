# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boot.spec.js >> boot
- Location: tests\boot.spec.js:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB", waiting until "load"

```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | test('boot', async ({ page }) => {
  4  | 
> 5  |   await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  6  |   await page.locator('.multiselect').click();
  7  |   await page.locator("//label[normalize-space()='Select all']").click();
  8  |   await expect (await page.locator("//label[normalize-space()='PHP']")).toBeChecked();
  9  |   await expect (await page.locator("//label[normalize-space()='JavaScript']")).toBeChecked();
  10 |   await page.waitForTimeout(4000);
  11 | });
  12 | 
  13 | // test('boot', async({page})=>{
  14 | 
  15 | // await page.goto('https://demoqa.com/select-menu');
  16 | // await page.locator('#oldSelectMenu').click();
  17 | // await page.locator('#oldSelectMenu').selectOption('Red');
  18 | // await expect(page.locator('#oldSelectMenu')).toHaveValue("red");
  19 | // await page.waitForTimeout(3000);
  20 | // })
  21 | 
```