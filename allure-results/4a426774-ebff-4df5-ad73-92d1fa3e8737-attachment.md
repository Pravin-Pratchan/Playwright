# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Input.spec.js >> Inputbox
- Location: tests\Input.spec.js:2:1

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
- generic [ref=e7]:
  - banner [ref=e8]:
    - generic [ref=e14]:
      - heading "Automation Testing Practice" [level=1] [ref=e16]
      - paragraph [ref=e18]: For Selenium, Cypress & Playwright
  - generic [ref=e23]:
    - heading "Pages" [level=2] [ref=e24]
    - list [ref=e26]:
      - listitem [ref=e27]:
        - link "Home" [ref=e28] [cursor=pointer]:
          - /url: http://testautomationpractice.blogspot.com/
      - listitem [ref=e29]:
        - link "Udemy Courses" [ref=e30] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/#udemy
      - listitem [ref=e31]:
        - link "Online Trainings" [ref=e32] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/
      - listitem [ref=e33]:
        - link "Blog" [ref=e34] [cursor=pointer]:
          - /url: https://www.pavantestingtools.com/
      - listitem [ref=e35]:
        - link "PlaywrightPractice" [ref=e36] [cursor=pointer]:
          - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - heading [level=3] [ref=e51]:
    - link "Data Entry Form" [ref=e52] [cursor=pointer]:
      - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
```

# Test source

```ts
  1  | const {test, expect} =require('@playwright/test');
  2  | test ('Inputbox', async({page})=>
  3  | {
> 4  | await page.goto('https://testautomationpractice.blogspot.com/');
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  | // Method1:
  6  | const user1 = await page.locator('#name');
  7  | await expect(user1).toBeVisible();
  8  | await expect(user1).toBeEnabled();
  9  | await expect(user1).toBeEditable();
  10 | await expect(user1).toBeEmpty();
  11 | await page.locator('#name').fill("Pravin");
  12 | await expect(await page.locator('#country')).toBeEditable();
  13 | await expect(await page.locator('#country')).not.toBeEmpty();
  14 | // Mothod2:
  15 | // await expect(page.locator('#name')).toBeEditable();
  16 | // await expect(page.locator('#name')).toBeEnabled();
  17 | // await expect(page.locator('#name')).toBeEmpty();
  18 | await page.locator('#name').fill("Pravin");
  19 | })
  20 | 
  21 | 
  22 | 
```