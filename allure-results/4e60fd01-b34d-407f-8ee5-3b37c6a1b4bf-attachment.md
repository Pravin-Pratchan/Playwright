# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boot.spec.js >> boot
- Location: tests\boot.spec.js:14:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('#oldSelectMenu')
Error: expected value must be a string or regular expression
Expected has type:  number
Expected has value: 2

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]: Alerts, Frame & Windows
      - generic [ref=e49]:
        - generic [ref=e50] [cursor=pointer]: Widgets
        - list [ref=e63]:
          - listitem [ref=e64] [cursor=pointer]:
            - link "Accordian" [ref=e65]:
              - /url: /accordian
          - listitem [ref=e68] [cursor=pointer]:
            - link "Auto Complete" [ref=e69]:
              - /url: /auto-complete
          - listitem [ref=e72] [cursor=pointer]:
            - link "Date Picker" [ref=e73]:
              - /url: /date-picker
          - listitem [ref=e76] [cursor=pointer]:
            - link "Slider" [ref=e77]:
              - /url: /slider
          - listitem [ref=e80] [cursor=pointer]:
            - link "Progress Bar" [ref=e81]:
              - /url: /progress-bar
          - listitem [ref=e84] [cursor=pointer]:
            - link "Tabs" [ref=e85]:
              - /url: /tabs
          - listitem [ref=e88] [cursor=pointer]:
            - link "Tool Tips" [ref=e89]:
              - /url: /tool-tips
          - listitem [ref=e92] [cursor=pointer]:
            - link "Menu" [ref=e93]:
              - /url: /menu
          - listitem [ref=e96] [cursor=pointer]:
            - link "Select Menu" [ref=e97]:
              - /url: /select-menu
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e125]:
      - heading "Select Menu" [level=1] [ref=e126]
      - generic [ref=e127]: Select Value
      - generic [ref=e131]:
        - log [ref=e133]
        - generic [ref=e135]:
          - generic [ref=e136]: Select Option
          - combobox [ref=e138]
      - generic [ref=e144]: Select One
      - generic [ref=e148]:
        - log [ref=e150]
        - generic [ref=e152]:
          - generic [ref=e153]: Select Title
          - combobox [ref=e155]
      - generic [ref=e161]: Old Style Select Menu
      - combobox [active] [ref=e166]:
        - option "Red"
        - option "Blue"
        - option "Green" [selected]
        - option "Yellow"
        - option "Purple"
        - option "Black"
        - option "White"
        - option "Voilet"
        - option "Indigo"
        - option "Magenta"
        - option "Aqua"
      - generic [ref=e168]:
        - paragraph [ref=e169]: Multiselect drop down
        - generic [ref=e170]:
          - log [ref=e172]
          - generic [ref=e174]:
            - generic [ref=e175]: Select...
            - combobox [ref=e177]
      - generic [ref=e184]:
        - paragraph [ref=e185]: Standard multi select
        - listbox [ref=e186]:
          - option "Volvo" [ref=e187]
          - option "Saab" [ref=e188]
          - option "Opel" [ref=e189]
          - option "Audi" [ref=e190]
  - contentinfo [ref=e197]:
    - generic [ref=e198]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | // test('boot', async ({ page }) => {
  4  | 
  5  | //   await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1pw7s94*_ga*MTQ0NjcxOTkyOC4xNzg4NjU5ODUy*_ga_SEKJ4E9T4H*czE3ODg2NTk4NTEkbzEkZzAkdDE3ODg2NTk4NTEkajYwJGwwJGgwJGQ1VTd1NnZlRDlhOXUxVW5YVFlGYnp2TzRiTFpyZHhEN2JB');
  6  | //   await page.locator('.multiselect').click();
  7  | //   await page.locator("//label[normalize-space()='PHP']").click();
  8  | //  // await page.locator("//label[normalize-space()='Select all']").click();
  9  | //  await expect (await page.locator("//label[normalize-space()='PHP']")).toBeChecked();
  10 | //   await expect (await page.locator("//label[normalize-space()='JavaScript']")).not.toBeChecked();
  11 | // await page.waitForTimeout(4000);
  12 | // });
  13 | 
  14 | test('boot', async({page})=>{
  15 | 
  16 | await page.goto('https://demoqa.com/select-menu');
  17 | await page.locator('#oldSelectMenu').click();
  18 | await page.locator('#oldSelectMenu').selectOption('Green');
> 19 | await expect(page.locator('#oldSelectMenu')).toHaveValue(2);
     |                                              ^ Error: expect(locator).toHaveValue(expected) failed
  20 | await page.waitForTimeout(3000);
  21 | })
  22 | 
  23 | 
```