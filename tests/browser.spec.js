import { test, expect } from '@playwright/test'

// test('browsers', async ({ context }) => {

//     const redbus = await context.newPage();
//     await redbus.goto("https://www.redbus.in/");

//     const flipkart = await context.newPage();
//     await flipkart.goto("https://www.flipkart.com/");
// });

test('browsers', async ({ browser }) => {
    const browser1 = await browser.newContext();
    const redbus = await browser1.newPage();
    await redbus.goto("https://www.redbus.in/");

    const flipkart = await browser1.newPage();
    await flipkart.goto("https://www.flipkart.com/");
});