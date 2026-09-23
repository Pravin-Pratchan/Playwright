import { test } from '@playwright/test';
test('Find minimum price', async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.locator("#twotabsearchtextbox").click();
  await page.locator("#twotabsearchtextbox").fill("Iphone 17");
  await page.waitForTimeout(3000);
  await page.locator('//div[@id="sac-suggestion-row-1"]').click();
  await page.waitForTimeout(5000);
  const iPhone = page.locator('//span[@data-component-type="s-search-results"]/div/div[@role="listitem"][.//div[@data-cy="reviews-block"]//span[@aria-hidden="true" and contains(text(), "4.6")]]//div[@data-cy="title-recipe"]/a/h2/span[not(@class) and contains(text(), "iPhone 17")]');
  const product = page.locator('//div[@data-cy="title-recipe"]/a/h2/span[not(@class) and contains(text(), "iPhone 17")]');
  const count = await iPhone.count();
  const title = await product.allTextContents();
  console.log("Total Number of Iphone Products with 4.6 rating: " + count);
  console.log("Product name: " + title); 
}); 