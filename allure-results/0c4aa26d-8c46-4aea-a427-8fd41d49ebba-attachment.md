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
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('Find minimum price and its brand', async ({ page }) => {
> 4  |   await page.goto('https://www.myntra.com/boy-tshirts');
     |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/boy-tshirts
  5  | //function to get the product brand by price
  6  |   async function getProductBrandByPrice(price) {
  7  |     const productLocator = page.locator(
  8  |         `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`
  9  |     );
  10 |     const productName = await productLocator.textContent();
  11 |     return productName;
  12 |   }
  13 |   //Function to find the minimum price and call the getProductBrandByPrice function
  14 | 
  15 |   async function findMinimumPrice() {
  16 |     const allPrices = page.locator(
  17 |       '//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
  18 |     );
  19 | 
  20 |     
  21 |     const priceList = await allPrices.allTextContents();
  22 | 
  23 |     const prices = priceList.map((price) =>
  24 |       Number(price.replace(/[^0-9]/g, ''))
  25 |     );
  26 | 
  27 |     const minPrice = Math.min(...prices);
  28 | 
  29 |     console.log('Minimum price:', minPrice);
  30 | 
  31 |     // Calling the product-brand function inside this function
  32 |     const brandName = await getProductBrandByPrice(minPrice);
  33 | 
  34 |     console.log('Product Brand:', brandName);
  35 |   }
  36 | 
  37 |   await findMinimumPrice();
  38 | });
```