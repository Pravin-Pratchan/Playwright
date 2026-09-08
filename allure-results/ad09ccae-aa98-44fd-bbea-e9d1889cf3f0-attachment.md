# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: autosuggestdropdown.spec.js >> Auto Suggest DropDown
- Location: tests\autosuggestdropdown.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.redbus.in/
Call log:
  - navigating to "https://www.redbus.in/", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Auto Suggest DropDown', async ({ page }) => {
  4  | 
> 5  |   await page.goto('https://www.redbus.in/');
     |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.redbus.in/
  6  | 
  7  |   // 1. Type in the "From" search box (this triggers auto-suggestions)
  8  |   await page.locator('#src').fill('Delhi');
  9  | 
  10 |   // 2. Wait for the auto-suggestions to appear
  11 |   await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]");
  12 | });
```