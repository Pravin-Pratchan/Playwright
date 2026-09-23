# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: browser.spec.js >> browsers
- Location: tests\browser.spec.js:12:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.redbus.in/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | // test('browsers', async ({ context }) => {
  4  | 
  5  | //     const redbus = await context.newPage();
  6  | //     await redbus.goto("https://www.redbus.in/");
  7  | 
  8  | //     const flipkart = await context.newPage();
  9  | //     await flipkart.goto("https://www.flipkart.com/");
  10 | // });
  11 | 
  12 | test('browsers', async ({ browser }) => {
  13 |     const browser1 = await browser.newContext();
  14 |     const redbus = await browser1.newPage();
> 15 |     await redbus.goto("https://www.redbus.in/");
     |                  ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  16 | 
  17 |     const flipkart = await browser1.newPage();
  18 |     await flipkart.goto("https://www.flipkart.com/");
  19 | });
```