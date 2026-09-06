import{test, expect} from '@playwright/test'

// test('boot', async ({ page }) => {

//   await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB');
//   await page.locator('.multiselect').click();
//   await page.locator("//label[normalize-space()='PHP']").click();
//  // await page.locator("//label[normalize-space()='Select all']").click();
//  await expect (await page.locator("//label[normalize-space()='PHP']")).toBeChecked();
//   await expect (await page.locator("//label[normalize-space()='JavaScript']")).not.toBeChecked();
// await page.waitForTimeout(4000);
// });

test('boot', async({page})=>{

await page.goto('https://demoqa.com/select-menu');
await page.locator('#oldSelectMenu').click();
await page.locator('#oldSelectMenu').selectOption('Green');
await page.locator('#oldSelectMenu').selectOption('Red');
await expect(page.locator('#oldSelectMenu')).toHaveValue("red");
await page.waitForTimeout(3000);
})
