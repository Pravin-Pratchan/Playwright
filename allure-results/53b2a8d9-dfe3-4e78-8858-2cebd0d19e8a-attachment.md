# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: work.spec.js >> radio
- Location: tests\work.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('my-component .inner-button')

```

# Test source

```ts
  1 | import {test, expect} from '@playwright/test'
  2 | 
  3 | test('radio', async ({page})=>{
> 4 | await page.locator('my-component .inner-button').click();
    |                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  5 | }
  6 | );
```