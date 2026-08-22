# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegen.spec.js >> test
- Location: tests\codegen.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('LED Cinema Display features a')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - generic [ref=f1e3]:
      - link "PRODUCT STORE" [ref=f1e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f1e7]:
        - listitem [ref=f1e8]:
          - link "Home (current)" [ref=f1e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f1e10]: (current)
        - listitem [ref=f1e11]:
          - link "Contact" [ref=f1e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f1e13]:
          - link "About us" [ref=f1e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f1e15]:
          - link "Cart" [ref=f1e16] [cursor=pointer]:
            - /url: cart.html
        - listitem [ref=f1e17]:
          - link "Log in" [ref=f1e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=f1e19]:
          - link "Sign up" [ref=f1e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=f1e22]:
    - generic [ref=f1e25]:
      - list [ref=f1e26]:
        - listitem [ref=f1e27] [cursor=pointer]
        - listitem [ref=f1e28] [cursor=pointer]
        - listitem [ref=f1e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=f1e32]:
      - heading "Nokia lumia 1520" [level=2] [ref=f1e33]
      - separator [ref=f1e34]
      - heading "$820 *includes tax" [level=3] [ref=f1e35]
      - separator [ref=f1e36]
      - generic [ref=f1e37]:
        - list:
          - listitem
        - generic [ref=f1e39]:
          - strong [ref=f1e40]: Product description
          - paragraph [ref=f1e41]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
      - separator [ref=f1e42]
      - link "Add to cart" [ref=f1e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=f1e47]:
    - generic [ref=f1e50]:
      - heading "About Us" [level=4] [ref=f1e51]
      - paragraph [ref=f1e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e55]:
      - heading "Get in Touch" [level=4] [ref=f1e56]
      - paragraph [ref=f1e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e58]: "Phone: +440 123456"
      - paragraph [ref=f1e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e63]
  - contentinfo [ref=f1e65]:
    - paragraph [ref=f1e66]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://demoblaze.com/index.html');
  5  |   await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  6  |   await page.getByRole('heading', { name: 'Nokia lumia' }).click();
  7  |   await page.getByRole('heading', { name: 'Nokia lumia' }).click();
  8  |   await page.getByRole('heading', { name: 'Nokia lumia' }).click();
> 9  |   await page.getByText('LED Cinema Display features a').click();
     |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  10 |   await page.close();
  11 | });
```