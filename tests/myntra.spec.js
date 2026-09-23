import { test, expect } from '@playwright/test';

test('Myntra', async ({ page }) => {

    await page.goto("https://www.myntra.com/boy-tshirts");

    //1. Total Number of Products
    const products = page.locator('//li[@class="product-base"]');
    const count = await products.count();
    console.log("Total Number of Products: " + count);

    //2. Min price among all products
    const all_Prices = page.locator('//li[@class="product-base"]/a/div[@class="product-productMetaInfo"]/div[@class="product-price"]/span/span[@class="product-discountedPrice"] | //li[contains(@class,"product-base")][not(.//span[contains(@class,"strike")])]//div[contains(@class,"product-price")]//span');
    const priceText = await all_Prices.allTextContents();
    const price = priceText.map(text => {
        return Number(text.replace(/[^0-9]/g, ''));
    });
    const minPrice = Math.min(...price);
    console.log("Minimum price is: " + minPrice);

    //3. Find the product name for the minimum price
    async function getProductName(page, minPrice) {
        const productName = await page.locator(`//li[contains(@class,'product-base')][.//*[(contains(@class,'product-discountedPrice') or contains(@class,'product-price')) and contains(.,'${minPrice}')]]`).locator('.product-brand').first().innerText();
        return productName;
    }
    const productName = await getProductName(page, minPrice);
    console.log("Product name of the minumun price: " + productName);

    //4. Find the minimum price using fuction
    async function getProductBrandByPrice(price) {
    const productLocator = page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`);
    const productName = await productLocator.textContent();
    return productName;
  }
  //Function to find the minimum price and call the getProductBrandByPrice function

  async function findMinimumPrice() {
    const allPrices = page.locator(
      '//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
    );

    
    const priceList = await allPrices.allTextContents();
    const prices = priceList.map((price) =>
    Number(price.replace(/[^0-9]/g, ''))
    );

    const minPrice = Math.min(...prices);
    console.log('Minimum price:', minPrice);

    // Calling the product-brand function inside this function
    const brandName = await getProductBrandByPrice(minPrice);
    console.log('Product Brand:', brandName);
  }
await findMinimumPrice();

//Task 5: Find minimun price and product name for 50 products using Xpath:

async function MinimumPrice() {
    const allPrices = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and not(@class))]');
    const priceList = await allPrices.allTextContents();
    const prices = priceList.map(p => Number(p.replace(/\D/g, '')));
    const minimum_price = Math.min(...prices);
    const product_name = await productBrand(minimum_price);
    console.log("Product Brand:", product_name);
    return minimum_price;
  }

  //Find ProductBrand Name
  async function productBrand(minimumPrice) {
    const brand = page.locator(`//span[(@class="product-discountedPrice" or (text() and not(@class))) and text()="${minimumPrice}"]/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`).first();
    return await brand.textContent();
  }

  console.log("Minimum Price:", await MinimumPrice());

});