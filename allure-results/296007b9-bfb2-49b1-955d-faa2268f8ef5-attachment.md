# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myntra.spec.js >> Myntra
- Location: tests\myntra.spec.js:3:5

# Error details

```
Error: locator.allTextContents: Test ended.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Myntra', async ({ page }) => {
  4  | 
  5  |     await page.goto("https://www.myntra.com/boy-tshirts");
  6  | 
  7  |     //1. Total Number of Products
  8  |     const products = page.locator('//li[@class="product-base"]');
  9  |     const count = await products.count();
  10 |     console.log("Total Number of Products: " + count);
  11 | 
  12 |     //2. Min price among all products
  13 |     const all_Prices = page.locator('//li[@class="product-base"]/a/div[@class="product-productMetaInfo"]/div[@class="product-price"]/span/span[@class="product-discountedPrice"] | //li[contains(@class,"product-base")][not(.//span[contains(@class,"strike")])]//div[contains(@class,"product-price")]//span');
  14 |     const priceText = await all_Prices.allTextContents();
  15 |     const price = priceText.map(text => {
  16 |         return Number(text.replace(/[^0-9]/g, ''));
  17 |     });
  18 |     const minPrice = Math.min(...price);
  19 |     console.log("Minimum price is: " + minPrice);
  20 | 
  21 |     //3. Find the product name for the minimum price
  22 |     async function getProductName(page, minPrice) {
  23 |         const productName = await page.locator(`//li[contains(@class,'product-base')][.//*[(contains(@class,'product-discountedPrice') or contains(@class,'product-price')) and contains(.,'${minPrice}')]]`).locator('.product-brand').first().innerText();
  24 |         return productName;
  25 |     }
  26 |     const productName = await getProductName(page, minPrice);
  27 |     console.log("Product name of the minumun price: " + productName);
  28 | 
  29 |     //4. Find the minimum price using fuction
  30 | 
  31 | async function getAllDiscountedPrices() {
  32 |     const allPrices = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');
> 33 |     const priceList = await allPrices.allTextContents();
     |                                       ^ Error: locator.allTextContents: Test ended.
  34 |     return priceList;
  35 | }
  36 | 
  37 | async function findMinimumPrice() {
  38 |     const priceList = await getAllDiscountedPrices();
  39 |     const prices = priceList.map((price) => Number(price.replace(/[^0-9]/g, '')));
  40 |     const minPrice = Math.min(...prices);
  41 |     console.log("Minimum price: " + minPrice);
  42 | 
  43 |     return minPrice;
  44 | }
  45 | 
  46 | await findMinimumPrice();
  47 | getAllDiscountedPrices()
  48 | });
```