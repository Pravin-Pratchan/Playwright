import{test, expect} from '@playwright/test';

//One browser and multiple tabs

// test('browsers', async ({ context }) => {
//     const redbus = await context.newPage();
//     await redbus.goto("https://www.redbus.in/");

//     const flipkart = await context.newPage();
//     await flipkart.goto("https://www.flipkart.com/");

//Multiple browser and multiple tabs in one browser
test('browsers', async ({ browser }) => {
    const browser1 = await browser.newContext(
        record
    );
    const redbus1 = await browser1.newPage();
    await redbus1.goto("https://www.redbus.in/");

    const flipkart1 = await browser1.newPage();
    await flipkart1.goto("https://www.flipkart.com/");

    const browser2 = await browser.newContext();
    const redbus2 = await browser2.newPage();
    await redbus2.goto("https://www.redbus.in/");

    const flipkart2 = await browser2.newPage();
    await flipkart2.goto("https://www.flipkart.com/");
});