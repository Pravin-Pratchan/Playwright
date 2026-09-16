import {test, expect} from '@playwright/test';
test ('Flipkart', async ({page})=>{
await page.goto("https://www.flipkart.com/");
await page.locator("//div[@class='FO_kXv']//div[6]//div[1]//div[1]//div[1]//a[1]//div[1]//div[1]//div[1]//div[1]//img[1]").click();
await page.waitForTimeout(5000);
const products = await page.$$('//div[@class="css-g5y9jx"]/div/div/div/a/div[@class="css-g5y9jx r-1awozwy"]/div[@dir="auto"]');
    
    for (const product of products) {
        const producttext = await product.textContent();
        console.log(producttext);
    }


//   await page.waitForSelector("(//div[@id='tbodyid'])//h4/a");
//     const products = await page.$$("(//div[@id='tbodyid'])[1]//h4/a");
//     for (const product of products) {
//         const producttext = await product.textContent();
//         console.log(producttext);
//     }

});



