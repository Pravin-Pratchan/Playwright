# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boot.spec.js >> boot
- Location: tests\boot.spec.js:3:5

# Error details

```
Error: expect(locator).not.toBeChecked() failed

Locator:  locator('//label[normalize-space()=\'PHP\']')
Expected: not checked
Received: checked
Timeout:  5000ms

Call log:
  - Expect "not toBeChecked" with timeout 5000ms
  - waiting for locator('//label[normalize-space()=\'PHP\']')
    14 × locator resolved to <label class="checkbox">…</label>
       - unexpected value "checked"

```

```yaml
- text: 
- checkbox " PHP" [checked]
- text: PHP
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | test('boot', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB');
  6  |   await page.locator('.multiselect').click();
  7  |   await page.locator('.multiselect-item.multiselect-all').click();
  8  |  // await page.locator("//label[normalize-space()='Select all']").click();
> 9  |   await expect (await page.locator("//label[normalize-space()='PHP']")).not.toBeChecked();
     |                                                                             ^ Error: expect(locator).not.toBeChecked() failed
  10 |   await expect (await page.locator("//label[normalize-space()='JavaScript']")).not.toBeChecked();
  11 | await page.waitForTimeout(4000);
  12 | });
  13 | 
  14 | // test('boot', async({page})=>{
  15 | 
  16 | // await page.goto('https://demoqa.com/select-menu');
  17 | // await page.locator('#oldSelectMenu').click();
  18 | // await page.locator('#oldSelectMenu').selectOption('Green');
  19 | // await page.locator('#oldSelectMenu').selectOption('Red');
  20 | // await expect(page.locator('#oldSelectMenu')).toHaveValue("red");
  21 | // await page.waitForTimeout(3000);
  22 | // })
  23 | 
```