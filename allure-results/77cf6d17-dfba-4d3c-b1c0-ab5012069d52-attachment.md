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
- generic [ref=e16]:
  - banner [ref=e17]:
    - generic [ref=e23]:
      - heading "Automation Testing Practice" [level=1] [ref=e25]
      - paragraph [ref=e27]: For Selenium, Cypress & Playwright
  - list [ref=e34]:
    - listitem [ref=e35]:
      - link "Home" [ref=e36] [cursor=pointer]:
        - /url: http://testautomationpractice.blogspot.com/
    - listitem [ref=e37]:
      - link "Udemy Courses" [ref=e38] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/#udemy
    - listitem [ref=e39]:
      - link "Online Trainings" [ref=e40] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/
    - listitem [ref=e41]:
      - link "Blog" [ref=e42] [cursor=pointer]:
        - /url: https://www.pavantestingtools.com/
    - listitem [ref=e43]:
      - link "PlaywrightPractice" [ref=e44] [cursor=pointer]:
        - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - heading [level=3] [ref=e65]:
    - link "Data Entry Form" [ref=e66] [cursor=pointer]:
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
  19 | await page.waitForTimeout(4000);
  20 | await page.close();
  21 | })
  22 | 
  23 | 
  24 | 
```