# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boot.spec.js >> boot
- Location: tests\boot.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - 'heading "Multiselect #01" [level=2] [ref=e6]'
  - generic [ref=e9]:
    - strong [ref=e10]: "Select Language:"
    - button "None selected" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | test('boot', async ({ page }) => {
  4  | 
> 5  |   await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  |   await page.locator('.multiselect').click();
  7  |   //await page.locator("//label[normalize-space()='Select all']").click();
  8  |   await page.locator("#input[value='javascript']").click();
  9  |  // await page.locator("//label[normalize-space()='Select all']").click();
  10 |   //await expect (await page.locator("//label[normalize-space()='PHP']")).toBeChecked();
  11 |   await expect (await page.locator("//label[normalize-space()='JavaScript']")).toBeChecked();
  12 | await page.waitForTimeout(4000);
  13 | });
  14 | 
  15 | // test('boot', async({page})=>{
  16 | 
  17 | // await page.goto('https://demoqa.com/select-menu');
  18 | // await page.locator('#oldSelectMenu').click();
  19 | // await page.locator('#oldSelectMenu').selectOption('Green');
  20 | // await page.locator('#oldSelectMenu').selectOption('Red');
  21 | // await expect(page.locator('#oldSelectMenu')).toHaveValue("red");
  22 | // await page.waitForTimeout(3000);
  23 | // })
  24 | 
```