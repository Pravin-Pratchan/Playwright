# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkbox.spec.js >> checkbox
- Location: tests\checkbox.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - banner [ref=e7]:
    - generic [ref=e13]:
      - heading "Automation Testing Practice" [level=1] [ref=e15]
      - paragraph [ref=e17]: For Selenium, Cypress & Playwright
  - generic [ref=e22]:
    - heading "Pages" [level=2] [ref=e23]
    - list [ref=e25]:
      - listitem [ref=e26]:
        - link "Home" [ref=e27] [cursor=pointer]:
          - /url: http://testautomationpractice.blogspot.com/
      - listitem [ref=e28]:
        - link "Udemy Courses" [ref=e29] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/#udemy
      - listitem [ref=e30]:
        - link "Online Trainings" [ref=e31] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/
      - listitem [ref=e32]:
        - link "Blog" [ref=e33] [cursor=pointer]:
          - /url: https://www.pavantestingtools.com/
      - listitem [ref=e34]:
        - link "PlaywrightPractice" [ref=e35] [cursor=pointer]:
          - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - heading [level=3] [ref=e50]:
    - link "Data Entry Form" [ref=e51] [cursor=pointer]:
      - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
```

# Test source

```ts
  1  | const {test, expect} = require ('@playwright/test')
  2  | test('checkbox', async ({page})=>{
  3  | 
> 4  | await page.goto('https://testautomationpractice.blogspot.com/');
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  | await page.getByPlaceholder('Enter Name').fill("Pravin");
  6  | await page.locator('#textarea').fill(`S. Pravinkumar, No.1/32D, Flat: G1, Perumal Koil street, Kolakappam, Chennai - 600128.`);
  7  | await page.waitForTimeout(4000);
  8  | await page.locator("//input[@id='sunday']").check();
  9  | await expect (await page.locator("//input[@id='sunday']")).toBeChecked();
  10 | await page.locator("//input[@id='monday']").check();
  11 | await expect (await page.locator("//input[@id='monday']")).toBeChecked();
  12 | await page.locator("//input[@id='tuesday']").check();
  13 | await expect (await page.locator("//input[@id='tuesday']")).toBeChecked();
  14 | await page.locator("//input[@id='wednesday']").check();
  15 | await expect (await page.locator("//input[@id='wednesday']")).toBeChecked();
  16 | await page.waitForTimeout(4000);
  17 | await expect (await page.locator("//input[@id='thursday']")).not.toBeChecked();
  18 | await expect (await page.locator("//input[@id='friday']")).not.toBeChecked();
  19 | await expect (await page.locator("//input[@id='saturday']")).not.toBeChecked();
  20 | 
  21 | await page.close();
  22 | }
  23 | )
```