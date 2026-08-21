const {test, expect} = require('@playwright/test');

test('Elements', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    // const links = await page.$$('a');
    // for (const link of links) {
    //     const linktext=await link.textContent();
    //     console.log(linktext);
    // }

    await page.waitForSelector("(//div[@id='tbodyid'])//h4/a");
    const products = await page.$$("(//div[@id='tbodyid'])[1]//h4/a");
    for (const product of products) {
        const producttext = await product.textContent();
        console.log(producttext);
    }
});