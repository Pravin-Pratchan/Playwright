# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: autosuggestdropdown.spec.js >> Auto
- Location: tests\autosuggestdropdown.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=CjwKCAjwwfnUBhAtEiwAfQpAYjpWvU007ixq5_fQXtKg7LIXaZ-qpNeB3nR67SPU8W_YNnhdY78MXRoCYnUQAvD_BwE
Call log:
  - navigating to "https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=CjwKCAjwwfnUBhAtEiwAfQpAYjpWvU007ixq5_fQXtKg7LIXaZ-qpNeB3nR67SPU8W_YNnhdY78MXRoCYnUQAvD_BwE", waiting until "load"

```

# Test source

```ts
  1 | import{test, expect} from '@playwright/test'
  2 | 
  3 | test('Auto', async ({ page }) => {
  4 | 
> 5 |     await page.goto('https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=CjwKCAjwwfnUBhAtEiwAfQpAYjpWvU007ixq5_fQXtKg7LIXaZ-qpNeB3nR67SPU8W_YNnhdY78MXRoCYnUQAvD_BwE');
    |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=CjwKCAjwwfnUBhAtEiwAfQpAYjpWvU007ixq5_fQXtKg7LIXaZ-qpNeB3nR67SPU8W_YNnhdY78MXRoCYnUQAvD_BwE
  6 |     await page.locator('#srcinput').fill('Dekhi');
  7 | });
```