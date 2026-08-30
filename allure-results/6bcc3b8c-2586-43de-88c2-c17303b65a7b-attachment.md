# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: david.spec.js >> david
- Location: tests\david.spec.js:2:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.davidscans.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'; 
  2  | test('david', async ({page}) => {
> 3  |     await page.goto('https://www.davidscans.com/');
     |                ^ Error: page.goto: Target page, context or browser has been closed
  4  |     await expect(page.getByAltText('Creote Elementor')).toBeVisible();
  5  |     await page.goto('https://www.davidscans.com/contact.html');
  6  |     await page.click("(//a[@class='nav-link'])[5]");   
  7  |     await page.getByPlaceholder('Your Name *').fill('Test');
  8  |     await page.getByPlaceholder('Mobile Number *').fill('9999999999');
  9  |     await page.getByPlaceholder('Enter the Test *').fill('Tests');
  10 |     await page.waitForTimeout(9000);
  11 |     await page.getByRole('button', {type: 'submit'}).click();
  12 |     await page.close();
  13 | });
```