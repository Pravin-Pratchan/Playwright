# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.js >> Find minimum price
- Location: tests\practice.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.amazon.in/", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | test('Find minimum price', async ({ page }) => {
> 3  |   await page.goto("https://www.amazon.in/");
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  4  |   await page.locator("#twotabsearchtextbox").click();
  5  |   await page.locator("#twotabsearchtextbox").fill("Iphone 17");
  6  |   await page.waitForTimeout(3000);
  7  |   await page.locator('//div[@id="sac-suggestion-row-1"]').click();
  8  |   await page.waitForTimeout(5000);
  9  |   const iPhone = page.locator('//span[@data-component-type="s-search-results"]/div/div[@role="listitem"][.//div[@data-cy="reviews-block"]//span[@aria-hidden="true" and contains(text(), "4.6")]]//div[@data-cy="title-recipe"]/a/h2/span[not(@class) and contains(text(), "iPhone 17")]');
  10 |   const product = page.locator('//div[@data-cy="title-recipe"]/a/h2/span[not(@class) and contains(text(), "iPhone 17")]');
  11 |   const count = await iPhone.count();
  12 |   const title = await product.allTextContents();
  13 |   console.log("Total Number of Iphone Products with 4.6 rating: " + count);
  14 |   console.log("Product name: " + title);
  15 | }); 
```