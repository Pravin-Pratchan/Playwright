# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boot.spec.js >> boot
- Location: tests\boot.spec.js:14:5

# Error details

```
Error: locator.check: Error: Not a checkbox or radio button
Call log:
  - waiting for locator('#oldSelectMenu')
    - locator resolved to <select id="oldSelectMenu">…</select>

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]: Elements
      - generic [ref=e22]: Forms
      - generic [ref=e35]: Alerts, Frame & Windows
      - generic [ref=e47]:
        - generic [ref=e48] [cursor=pointer]: Widgets
        - list [ref=e61]:
          - listitem [ref=e62] [cursor=pointer]:
            - link "Accordian" [ref=e63]:
              - /url: /accordian
          - listitem [ref=e66] [cursor=pointer]:
            - link "Auto Complete" [ref=e67]:
              - /url: /auto-complete
          - listitem [ref=e70] [cursor=pointer]:
            - link "Date Picker" [ref=e71]:
              - /url: /date-picker
          - listitem [ref=e74] [cursor=pointer]:
            - link "Slider" [ref=e75]:
              - /url: /slider
          - listitem [ref=e78] [cursor=pointer]:
            - link "Progress Bar" [ref=e79]:
              - /url: /progress-bar
          - listitem [ref=e82] [cursor=pointer]:
            - link "Tabs" [ref=e83]:
              - /url: /tabs
          - listitem [ref=e86] [cursor=pointer]:
            - link "Tool Tips" [ref=e87]:
              - /url: /tool-tips
          - listitem [ref=e90] [cursor=pointer]:
            - link "Menu" [ref=e91]:
              - /url: /menu
          - listitem [ref=e94] [cursor=pointer]:
            - link "Select Menu" [ref=e95]:
              - /url: /select-menu
      - generic [ref=e98]: Interactions
      - generic [ref=e110]: Book Store Application
    - generic [ref=e123]:
      - heading "Select Menu" [level=1] [ref=e124]
      - generic [ref=e125]: Select Value
      - generic [ref=e129]:
        - log [ref=e131]
        - generic [ref=e133]:
          - generic [ref=e134]: Select Option
          - combobox [ref=e136]
      - generic [ref=e142]: Select One
      - generic [ref=e146]:
        - log [ref=e148]
        - generic [ref=e150]:
          - generic [ref=e151]: Select Title
          - combobox [ref=e153]
      - generic [ref=e159]: Old Style Select Menu
      - combobox [ref=e164]:
        - option "Red" [selected]
        - option "Blue"
        - option "Green"
        - option "Yellow"
        - option "Purple"
        - option "Black"
        - option "White"
        - option "Voilet"
        - option "Indigo"
        - option "Magenta"
        - option "Aqua"
      - generic [ref=e166]:
        - paragraph [ref=e167]: Multiselect drop down
        - generic [ref=e168]:
          - log [ref=e170]
          - generic [ref=e172]:
            - generic [ref=e173]: Select...
            - combobox [ref=e175]
      - generic [ref=e182]:
        - paragraph [ref=e183]: Standard multi select
        - listbox [ref=e184]:
          - option "Volvo" [ref=e185]
          - option "Saab" [ref=e186]
          - option "Opel" [ref=e187]
          - option "Audi" [ref=e188]
  - contentinfo [ref=e195]:
    - generic [ref=e196]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
> 17 | await page.locator('#oldSelectMenu').check();
     |                                      ^ Error: locator.check: Error: Not a checkbox or radio button
  18 | await page.locator('#oldSelectMenu').selectOption('Green');
  19 | await expect(page.locator('#oldSelectMenu')).toHaveValue("2");
  20 | await page.waitForTimeout(3000);
  21 | })
  22 | 
  23 | 
```