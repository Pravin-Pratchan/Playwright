# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radio.spec.js >> radio
- Location: tests\radio.spec.js:3:1

# Error details

```
Error: expect(locator).not.toBeChecked() failed

Locator:  locator('//input[@id=\'female\']')
Expected: not checked
Received: checked
Timeout:  5000ms

Call log:
  - Expect "not toBeChecked" with timeout 5000ms
  - waiting for locator('//input[@id=\'female\']')
    14 × locator resolved to <input id="female" type="radio" name="gender" value="female" class="form-check-input"/>
       - unexpected value "checked"

```

```yaml
- radio "Female" [checked]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | 
  3  | test('radio', async ({page})=>{
  4  | await page.goto('https://testautomationpractice.blogspot.com/');
  5  | await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
  6  | await expect(page).toHaveTitle('Automation Testing Practice');
  7  | 
  8  | 
  9  | await page.locator("//input[@id='male']").check();
  10 | //Another methiod// await page.check("//input[@id='male']");
  11 | 
  12 | await expect (await page.locator("//input[@id='male']")).toBeChecked();
  13 | await page.locator("//input[@id='female']").check();
> 14 | await expect (await page.locator("//input[@id='female']")).not.toBeChecked();
     |                                                                ^ Error: expect(locator).not.toBeChecked() failed
  15 | 
  16 | })
```