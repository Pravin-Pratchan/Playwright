# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myntra.spec.js >> Myntra
- Location: tests\myntra.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.myntra.com/boy-tshirts", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic:
      - link [ref=e4] [cursor=pointer]:
        - /url: /
      - navigation [ref=e5]:
        - generic [ref=e6]:
          - link "Men" [ref=e9] [cursor=pointer]:
            - /url: /shop/men
          - link "Women" [ref=e12] [cursor=pointer]:
            - /url: /shop/women
          - link "Kids" [ref=e15] [cursor=pointer]:
            - /url: /shop/kids
          - link "Home" [ref=e18] [cursor=pointer]:
            - /url: /shop/home-living
          - link "Beauty" [ref=e21] [cursor=pointer]:
            - /url: /personal-care
          - link "Genz" [ref=e24] [cursor=pointer]:
            - /url: /shop/fwd-women
          - generic [ref=e26]:
            - link "Studio" [ref=e27] [cursor=pointer]:
              - /url: /studio/home
            - superscript [ref=e29]: new
      - generic [ref=e30]:
        - generic [ref=e31]: Profile
        - link "Wishlist":
          - /url: /wishlist
          - generic [ref=e35] [cursor=pointer]
        - link "Bag":
          - /url: /checkout/cart
          - generic [ref=e37] [cursor=pointer]
      - textbox "Search for products, brands and more" [ref=e40]
  - contentinfo [ref=e49]:
    - generic [ref=e50]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - paragraph [ref=e53]:
            - link "ONLINE SHOPPING" [ref=e54] [cursor=pointer]:
              - /url: /?src=onlineShopping
          - link "Men" [ref=e55] [cursor=pointer]:
            - /url: /shop/men
          - link "Women" [ref=e56] [cursor=pointer]:
            - /url: /shop/women
          - link "Kids" [ref=e57] [cursor=pointer]:
            - /url: /shop/kids
          - link "Home" [ref=e58] [cursor=pointer]:
            - /url: /shop/home-living
          - link "Beauty" [ref=e59] [cursor=pointer]:
            - /url: /personal-care
          - link "Genz" [ref=e60] [cursor=pointer]:
            - /url: /shop/fwd-women
          - link "Gift Cards" [ref=e61] [cursor=pointer]:
            - /url: /giftcard
          - link "Myntra Insider" [ref=e62] [cursor=pointer]:
            - /url: /myntrainsider?cache=false
          - paragraph [ref=e63]: USEFUL LINKS
          - link "Blog" [ref=e64] [cursor=pointer]:
            - /url: http://blog.myntra.com/
          - link "Careers" [ref=e65] [cursor=pointer]:
            - /url: https://careers.myntra.com
          - link "Site Map" [ref=e66] [cursor=pointer]:
            - /url: /sitemap
          - link "Corporate Information" [ref=e67] [cursor=pointer]:
            - /url: /corp-info
          - link "Whitehat" [ref=e68] [cursor=pointer]:
            - /url: /security/whitehat
          - link "Cleartrip" [ref=e69] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Myntra Global" [ref=e70] [cursor=pointer]:
            - /url: https://www.myntraglobal.com/
        - generic [ref=e71]:
          - paragraph [ref=e72]: CUSTOMER POLICIES
          - link "Contact Us" [ref=e73] [cursor=pointer]:
            - /url: /contactus
          - link "FAQ" [ref=e74] [cursor=pointer]:
            - /url: /faqs
          - link "T&C" [ref=e75] [cursor=pointer]:
            - /url: /tac
          - link "Terms Of Use" [ref=e76] [cursor=pointer]:
            - /url: /termsofuse
          - link "Track Orders" [ref=e77] [cursor=pointer]:
            - /url: /my/orders
          - link "Shipping" [ref=e78] [cursor=pointer]:
            - /url: /faqs#shipping
          - link "Cancellation" [ref=e79] [cursor=pointer]:
            - /url: /faqs#cancel
          - link "Returns" [ref=e80] [cursor=pointer]:
            - /url: /faqs#returns
          - link "Privacy policy" [ref=e81] [cursor=pointer]:
            - /url: /privacypolicy
          - link "Grievance Redressal" [ref=e82] [cursor=pointer]:
            - /url: /grievanceredressal
          - link "FSSAI Food Safety Connect app" [ref=e83] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=e84]:
          - paragraph [ref=e85]: EXPERIENCE MYNTRA APP ON MOBILE
          - generic:
            - link:
              - /url: https://play.google.com/store/apps/details?id=com.myntra.android
            - link:
              - /url: https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059
          - generic [ref=e86]: KEEP IN TOUCH
          - link [ref=e87] [cursor=pointer]:
            - /url: https://www.facebook.com/myntra
          - link:
            - /url: https://twitter.com/myntra
          - link:
            - /url: https://www.youtube.com/user/myntradotcom
          - link:
            - /url: https://www.instagram.com/myntra
        - generic [ref=e89]:
          - generic [ref=e93]:
            - strong [ref=e94]: 100% ORIGINAL
            - text: guarantee for all products at myntra.com
          - generic [ref=e98]:
            - strong [ref=e99]: Return within 14days
            - text: of receiving your order
      - generic [ref=e101]:
        - separator [ref=e102]
        - generic [ref=e103]: POPULAR SEARCHES
        - generic [ref=e104]:
          - link "Adidas |" [ref=e105] [cursor=pointer]:
            - /url: /adidas
          - link "Arrow |" [ref=e106] [cursor=pointer]:
            - /url: /arrow
          - link "Fila |" [ref=e107] [cursor=pointer]:
            - /url: /fila
          - link "Online Shopping |" [ref=e108] [cursor=pointer]:
            - /url: /
          - link "Nike |" [ref=e109] [cursor=pointer]:
            - /url: /nike
          - link "Pepe Jeans |" [ref=e110] [cursor=pointer]:
            - /url: /pepe-jeans
          - link "Puma |" [ref=e111] [cursor=pointer]:
            - /url: /puma
          - link "United Colors of Benetton |" [ref=e112] [cursor=pointer]:
            - /url: /united-colors-of-benetton
          - link "Fastrack |" [ref=e113] [cursor=pointer]:
            - /url: /fastrack
          - link "Shorts |" [ref=e114] [cursor=pointer]:
            - /url: /men-shorts
          - link "Being Human |" [ref=e115] [cursor=pointer]:
            - /url: /being-human
          - link "Skirts |" [ref=e116] [cursor=pointer]:
            - /url: /women-shorts-skirts
          - link "Woodland |" [ref=e117] [cursor=pointer]:
            - /url: /woodland
          - link "Supra |" [ref=e118] [cursor=pointer]:
            - /url: /supra
          - link "Dresses |" [ref=e119] [cursor=pointer]:
            - /url: /dresses
          - link "Clothing |" [ref=e120] [cursor=pointer]:
            - /url: /clothing
          - link "Jewellery |" [ref=e121] [cursor=pointer]:
            - /url: /jewellery
          - link "T-shirts |" [ref=e122] [cursor=pointer]:
            - /url: /tshirts
          - link "Shoes |" [ref=e123] [cursor=pointer]:
            - /url: /shoes
          - link "Bags |" [ref=e124] [cursor=pointer]:
            - /url: /bags
          - link "Watches |" [ref=e125] [cursor=pointer]:
            - /url: /watches
          - link "Caps |" [ref=e126] [cursor=pointer]:
            - /url: /caps
          - link "Shirts |" [ref=e127] [cursor=pointer]:
            - /url: /shirts
          - link "Backpacks |" [ref=e128] [cursor=pointer]:
            - /url: /backpacks
          - link "Flip Flops |" [ref=e129] [cursor=pointer]:
            - /url: /flip-flops
          - link "Sunglasses |" [ref=e130] [cursor=pointer]:
            - /url: /sunglasses
          - link "Kurtas |" [ref=e131] [cursor=pointer]:
            - /url: /kurtas
          - link "Lingerie |" [ref=e132] [cursor=pointer]:
            - /url: /lingerie
          - link "Jackets |" [ref=e133] [cursor=pointer]:
            - /url: /jackets
          - link "Skechers |" [ref=e134] [cursor=pointer]:
            - /url: /skechers
          - link "Saree |" [ref=e135] [cursor=pointer]:
            - /url: /saree
          - link "Sandals |" [ref=e136] [cursor=pointer]:
            - /url: /sandals
          - link "Puma Tshirts |" [ref=e137] [cursor=pointer]:
            - /url: /puma-tshirts
          - link "Woodland Shoes |" [ref=e138] [cursor=pointer]:
            - /url: /woodland-shoes
          - link "Titan Watches |" [ref=e139] [cursor=pointer]:
            - /url: /titan-watches
          - link "Fastrack Watches |" [ref=e140] [cursor=pointer]:
            - /url: /fastrack-watches
          - link "Wrangler Shirts |" [ref=e141] [cursor=pointer]:
            - /url: /wrangler-shirts
          - link "Adidas Tshirts |" [ref=e142] [cursor=pointer]:
            - /url: /adidas-tshirts
          - link "Nike Shoes |" [ref=e143] [cursor=pointer]:
            - /url: /nike-shoes
          - link "Roadster Shirts |" [ref=e144] [cursor=pointer]:
            - /url: /roadster-shirts
          - link "Casual Shoes |" [ref=e145] [cursor=pointer]:
            - /url: /casual-shoes
          - link "Running Shoes |" [ref=e146] [cursor=pointer]:
            - /url: /running-shoes
          - link "Nike Sports Shoes |" [ref=e147] [cursor=pointer]:
            - /url: /nike-sports-shoes
          - link "Jeans |" [ref=e148] [cursor=pointer]:
            - /url: /jeans
          - link "Being Human Tshirts |" [ref=e149] [cursor=pointer]:
            - /url: /being-human-tshirts
          - link "Converse Shoes |" [ref=e150] [cursor=pointer]:
            - /url: /converse-shoes
          - link "Cricket Shoes" [ref=e151] [cursor=pointer]:
            - /url: /cricket-shoes
      - generic [ref=e152]:
        - generic [ref=e153]:
          - text: In case of any concern,
          - link "Contact Us" [ref=e154] [cursor=pointer]:
            - /url: /contactus
        - generic [ref=e155]: © 2026 www.myntra.com. All rights reserved.
        - link "A Flipkart company" [ref=e157] [cursor=pointer]:
          - /url: https://www.flipkart.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('Myntra', async ({ page }) => {
  3  | 
  4  | 
> 5  |     await page.goto("https://www.myntra.com/boy-tshirts");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  | 
  7  |     // const products = await page.$$('//li[@class="product-base"]');
  8  |     // const count = await products.count();
  9  |     // console.log(count);
  10 |     // for (const product of products) {
  11 |     //     const producttext = await product.textContent();
  12 |     //     console.log(producttext);
  13 |     // }
  14 | 
  15 | 
  16 |     //1. Total Number of Products
  17 |     const products = page.locator('//li[@class="product-base"]');
  18 |     const count = await products.count();
  19 |     console.log("Total Number of Products: "+count);
  20 | 
  21 | 
  22 |     //2. Min price among all products
  23 |     const all_Prices = page.locator('//li[@class="product-base"]/a/div[@class="product-productMetaInfo"]/div[@class="product-price"]/span/span[@class="product-discountedPrice"] | //li[contains(@class,"product-base")][not(.//span[contains(@class,"strike")])]//div[contains(@class,"product-price")]//span');
  24 |     const priceText = await all_Prices.allTextContents();
  25 |     const price = priceText.map(text => {
  26 |         return Number(text.replace(/[^0-9]/g, ''));
  27 |     });
  28 |     console.log("Minimum price is:"+ Math.min(...price));
  29 | 
  30 | });
  31 | 
  32 | //3. Find the price of minimun product name
```