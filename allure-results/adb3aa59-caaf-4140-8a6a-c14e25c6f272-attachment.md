# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.js >> Find minimum price and its brand
- Location: tests\practice.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/boy-tshirts
Call log:
  - navigating to "https://www.myntra.com/boy-tshirts", waiting until "load"

```

# Test source

```ts
  1 | import { test } from '@playwright/test';
  2 | 
  3 | test('Find minimum price and its brand', async ({ page }) => {
> 4 |   await page.goto('https://www.myntra.com/boy-tshirts');
    |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/boy-tshirts
  5 | 
  6 | });
```