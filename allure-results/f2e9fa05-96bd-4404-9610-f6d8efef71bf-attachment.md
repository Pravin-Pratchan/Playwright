# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myntra.spec.js >> Myntra
- Location: tests\myntra.spec.js:2:5

# Error details

```
Error: locator.allTextContents: Test ended.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('Myntra', async ({ page }) => {
  3  | 
  4  | 
  5  |     await page.goto("https://www.myntra.com/boy-tshirts");
  6  | 
  7  |     // const products = await page.$$('//li[@class="product-base"]');
  8  |     // const count = await products.count();
  9  |     // console.log(count);
  10 |     // for (const product of products) {
  11 |     //     const producttext = await product.textContent();
  12 |     //     console.log(producttext);
  13 |     // }
  14 | 
  15 | 
  16 |     //1. Total Number of Products
  17 |     const products = page.locator('//li[@class="product-base"]');
  18 |     const count = await products.count();
  19 |     console.log("Total Number of Products: "+count);
  20 | 
  21 | 
  22 |     //2. Min price among all products
  23 |     const all_Prices = page.locator('//li[@class="product-base"]/a/div[@class="product-productMetaInfo"]/div[@class="product-price"]/span/span[@class="product-discountedPrice"] | //li[contains(@class,"product-base")][not(.//span[contains(@class,"strike")])]//div[contains(@class,"product-price")]//span');
  24 |     const priceText = await all_Prices.allTextContents();
> 25 |     console.log(all_Prices.allTextContents());
     |                            ^ Error: locator.allTextContents: Test ended.
  26 |     const price = priceText.map(text => {
  27 |         return Number(text.replace(/[^0-9]/g, ''));
  28 |     });
  29 |     console.log("Minimum price is: "+ Math.min(...price));
  30 | 
  31 | });
  32 | 
  33 | //3. Find the price of minimun product name
  34 | 
```