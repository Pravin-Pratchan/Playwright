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
    console.log("Product name: " + productName);
});