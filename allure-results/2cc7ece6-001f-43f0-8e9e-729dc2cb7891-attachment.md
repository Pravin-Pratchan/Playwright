# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boot.spec.js >> boot
- Location: tests\boot.spec.js:14:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#oldSelectMenu')
Expected: "2"
Received: "red"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('#oldSelectMenu')
    13 × locator resolved to <select id="oldSelectMenu">…</select>
       - unexpected value "red"

```

```yaml
- combobox:
  - option "Red" [selected]
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Purple"
  - option "Black"
  - option "White"
  - option "Voilet"
  - option "Indigo"
  - option "Magenta"
  - option "Aqua"
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | // test('boot', async ({ page }) => {
  4  | 
  5  | //   await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB');
  6  | //   await page.locator('.multiselect').click();
  7  | //   await page.locator("//label[normalize-space()='PHP']").click();
  8  | //  // await page.locator("//label[normalize-space()='Select all']").click();
  9  | //  await expect (await page.locator("//label[normalize-space()='PHP']")).toBeChecked();
  10 | //   await expect (await page.locator("//label[normalize-space()='JavaScript']")).not.toBeChecked();
  11 | // await page.waitForTimeout(4000);
  12 | // });
  13 | 
  14 | test('boot', async({page})=>{
  15 | 
  16 | await page.goto('https://demoqa.com/select-menu');
  17 | await page.locator('#oldSelectMenu').click();
  18 | await page.locator('#oldSelectMenu').selectOption('Green');
  19 | await page.locator('#oldSelectMenu').selectOption('Red');
> 20 | await expect(page.locator('#oldSelectMenu')).toHaveValue("2");
     |                                              ^ Error: expect(locator).toHaveValue(expected) failed
  21 | await page.waitForTimeout(3000);
  22 | })
  23 | 
  24 | 
```