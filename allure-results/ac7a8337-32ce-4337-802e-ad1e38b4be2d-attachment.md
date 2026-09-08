# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: autosuggestdropdown.spec.js >> Auto
- Location: tests\autosuggestdropdown.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://www.redbus.in/
Call log:
  - navigating to "https://www.redbus.in/", waiting until "load"

```

# Test source

```ts
  1 | import{test, expect} from '@playwright/test'
  2 | 
  3 | test('Auto', async ({ page }) => {
  4 | 
> 5 |     await page.goto('https://www.redbus.in');
    |                ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://www.redbus.in/
  6 |     await page.locator('#srcinput').fill('Delhi');
  7 | });
```