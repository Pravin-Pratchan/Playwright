# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdown2.spec.js >> dropdown2
- Location: tests\dropdown2.spec.js:2:1

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#country')
Expected: "india"
Received: "china"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('#country')
    14 × locator resolved to <select id="country" class="form-control">…</select>
       - unexpected value "china"

```

```yaml
- combobox "Country:":
  - option "United States"
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China" [selected]
  - option "Brazil"
  - option "India"
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | test('dropdown2', async ({ page }) => {
  3  | await page.goto("https://testautomationpractice.blogspot.com/");
  4  | await page.locator('#country').selectOption({ label: 'India' });
  5  | await page.locator('#country').selectOption({ label: 'China' });
> 6  | await expect(page.locator('#country')).toHaveValue('india');
     |                                        ^ Error: expect(locator).toHaveValue(expected) failed
  7  | await expect(page.locator('#country')).toHaveValue('china');
  8  | 
  9  | });
  10 | 
```