# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myntra.spec.js >> Myntra
- Location: tests\myntra.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/boy-tshirts/
Call log:
  - navigating to "https://www.myntra.com/boy-tshirts/", waiting until "load"

```

# Test source

```ts
  1 | import{test, expect} from '@playwright/test';
  2 | 
  3 | test('Myntra', async ({ page }) => {
  4 | 
> 5 | await page.goto("https://www.myntra.com/boy-tshirts/");
    |            ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/boy-tshirts/
  6 | 
  7 | });
  8 | 
```