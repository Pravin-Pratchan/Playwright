# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: david.spec.js >> david
- Location: tests\david.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.davidscans.com/", waiting until "load"

```

# Test source

```ts
  1 | const {test, expect} = require ('@playwright/test') 
  2 | test('david', async ({page}) => {
> 3 |     await page.goto('https://www.davidscans.com/');
    |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  4 |     await expect(page.getbyplaceholder('Creote Elementor')).toBeVisible();
  5 | })
```