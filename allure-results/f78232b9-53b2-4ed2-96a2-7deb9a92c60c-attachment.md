# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: david.spec.js >> david
- Location: tests\david.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('text', { name: 'testName' })

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - generic [ref=f3e2]:
    - generic [ref=f3e3]:
      - banner [ref=f3e5]:
        - generic [ref=f3e6]: David Labs and Scans is An ISO & NABL Accredited Lab located in Porur chennai It is the biggest reference lab nearby Porur Additional special is we do *Home Blood Collection and ECG.
        - generic [ref=f3e12]:
          - link [ref=f3e15] [cursor=pointer]:
            - /url: index.html
            - img "Creote Elementor" [ref=f3e16]
          - generic [ref=f3e18]:
            - generic [ref=f3e20]:
              - generic [ref=f3e21]: 
              - generic [ref=f3e22]:
                - heading "6:00AM - 9:00PM" [level=4] [ref=f3e23]
                - paragraph [ref=f3e24]: Monday to Saturday
            - generic [ref=f3e26]:
              - generic [ref=f3e27]: 
              - generic [ref=f3e28]:
                - heading "Home Visit Booking" [level=4] [ref=f3e29]
                - paragraph [ref=f3e30]:
                  - link "+91 94866 33000" [ref=f3e32] [cursor=pointer]:
                    - /url: tel:9486633000;
            - text: 
            - generic [ref=f3e34]:
              - generic [ref=f3e35]: 
              - generic [ref=f3e36]:
                - heading "Become a Franchise" [level=4] [ref=f3e37]
                - link "Click Here" [ref=f3e38] [cursor=pointer]:
                  - /url: franchise.html
        - generic [ref=f3e43]:
          - list [ref=f3e46]:
            - listitem [ref=f3e47]:
              - link "Home" [ref=f3e48] [cursor=pointer]:
                - /url: index.html
            - listitem [ref=f3e49]:
              - link "About Us" [ref=f3e50] [cursor=pointer]:
                - /url: about.html
            - listitem [ref=f3e51]:
              - link "Speciality Services" [ref=f3e52] [cursor=pointer]:
                - /url: service.html
            - listitem [ref=f3e53]:
              - link "Directory of Services" [ref=f3e54] [cursor=pointer]:
                - /url: directory-services.html
            - listitem [ref=f3e55]:
              - link "Packages" [ref=f3e56] [cursor=pointer]:
                - /url: packeges.html
            - listitem [ref=f3e57]:
              - link "Our Branches" [ref=f3e58] [cursor=pointer]:
                - /url: branch.html
            - listitem [ref=f3e59]:
              - link "Contact Us" [ref=f3e60] [cursor=pointer]:
                - /url: contact.html
          - generic [ref=f3e61]: Book a test
      - generic [ref=f3e63]:
        - img "bg_image" [ref=f3e66]
        - generic [ref=f3e69]:
          - generic [ref=f3e70]: Contact
          - list [ref=f3e75]:
            - listitem [ref=f3e76]:
              - text: 
              - link "Home" [ref=f3e77] [cursor=pointer]:
                - /url: index.html
            - listitem [ref=f3e78]: Contact
      - generic [ref=f3e79]:
        - generic [ref=f3e83]:
          - generic [ref=f3e84]:
            - heading "Reach Our Expert Team" [level=2] [ref=f3e85]
            - paragraph [ref=f3e86]: Send a message through given form, If your enquiry is time sensitive please use below contact details.
            - form [ref=f3e90]:
              - generic [ref=f3e92]:
                - generic [ref=f3e94]:
                  - generic [ref=f3e95]: Your Name
                  - textbox "Your Name *" [ref=f3e96]: Test
                - generic [ref=f3e98]:
                  - generic [ref=f3e99]: Mobile Number
                  - textbox "Mobile Number *" [ref=f3e100]: "9999999999"
                - generic [ref=f3e102]:
                  - generic [ref=f3e103]: Enter the Test
                  - textbox "Enter the Test *" [ref=f3e104]: Tests
                - button "Appointment" [ref=f3e105] [cursor=pointer]
          - generic [ref=f3e106]:
            - generic [ref=f3e107]: Contact Info to
            - generic [ref=f3e111] [cursor=pointer]:
              - generic [ref=f3e112]: 
              - generic [ref=f3e114]:
                - heading "Address" [level=3] [ref=f3e115]
                - paragraph [ref=f3e116]: Plot No 45 ,Annai Vailankanni Nagar -I , Mugalivakkam Main Road, Madanandapuram, Porur,Chennai -600125
            - generic [ref=f3e119] [cursor=pointer]:
              - generic [ref=f3e120]: 
              - generic [ref=f3e122]:
                - heading "General Enquires" [level=3] [ref=f3e123]
                - paragraph [ref=f3e124]:
                  - text: "Phone:"
                  - link "044-4214 9999" [ref=f3e125]:
                    - /url: tel:04442149999
                  - text: /
                  - link "044-2482 5555" [ref=f3e126]:
                    - /url: "tel:04424825555 "
                  - text: /
                  - link "94866 33000" [ref=f3e127]:
                    - /url: tel:09486633000
                  - text: "& Email:"
                  - link "info@davidscans.com" [ref=f3e128]:
                    - /url: mailto:info@davidscans.com;
                  - text: /
                  - link "davidlabsandscans@gmail.com" [ref=f3e129]:
                    - /url: mailto:davidlabsandscans@gmail.com ;
            - generic [ref=f3e132] [cursor=pointer]:
              - generic [ref=f3e133]: 
              - generic [ref=f3e135]:
                - heading "Operation Hours" [level=3] [ref=f3e136]
                - paragraph [ref=f3e137]: "Mon-Sat: 06.00 Am to 09.00 Pm"
                - paragraph [ref=f3e138]: "Sunday: 06.00 Am to 12.00 Pm"
            - list [ref=f3e141]:
              - listitem [ref=f3e142]:
                - link " facebook" [ref=f3e143] [cursor=pointer]:
                  - /url: https://www.facebook.com/
                  - generic [ref=f3e144]: 
                  - generic [ref=f3e145]: facebook
              - listitem [ref=f3e146]:
                - link " instagram" [ref=f3e147] [cursor=pointer]:
                  - /url: https://www.instagram.com/
                  - generic [ref=f3e148]: 
                  - generic [ref=f3e149]: instagram
              - listitem [ref=f3e150]:
                - link " linkedin" [ref=f3e151] [cursor=pointer]:
                  - /url: https://www.linkedin.com/
                  - generic [ref=f3e152]: 
                  - generic [ref=f3e153]: linkedin
              - listitem [ref=f3e154]:
                - link " youtube" [ref=f3e155] [cursor=pointer]:
                  - /url: https://www.youtube.com/
                  - generic [ref=f3e156]: 
                  - generic [ref=f3e157]: youtube
        - iframe [ref=f3e163]:
          
      - generic [ref=f3e164]:
        - generic [ref=f3e168]:
          - generic [ref=f3e171]:
            - link [ref=f3e173] [cursor=pointer]:
              - /url: "#"
              - img "logo" [ref=f3e174]
            - paragraph [ref=f3e176]: David Labs & Scans, established in the year 2012, is uniquely positioned to more effectively support local pathology for enhanced patient care.
          - generic [ref=f3e177]:
            - heading "Quick Links" [level=2] [ref=f3e180]
            - list [ref=f3e186]:
              - listitem [ref=f3e187]:
                - link "Privacy Policy" [ref=f3e188] [cursor=pointer]:
                  - /url: privacy-policy.html
              - listitem [ref=f3e189]:
                - link "Terms of Service" [ref=f3e190] [cursor=pointer]:
                  - /url: terms-of-service.html
              - listitem [ref=f3e191]:
                - link "Refund and Cancellation Policy" [ref=f3e192] [cursor=pointer]:
                  - /url: refund-cancellation-policy.html
              - listitem [ref=f3e193]:
                - link "Pricing" [ref=f3e194] [cursor=pointer]:
                  - /url: pricing.html
              - listitem [ref=f3e195]:
                - link "Feedback" [ref=f3e196] [cursor=pointer]:
                  - /url: feedback.html
          - generic [ref=f3e197]:
            - heading "Packages" [level=2] [ref=f3e200]
            - list [ref=f3e204]:
              - listitem [ref=f3e205]:
                - link "PCOS Package" [ref=f3e206] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e207]:
                - link "APLA Package" [ref=f3e208] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e209]:
                - link "AMH PLUS Package" [ref=f3e210] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e211]:
                - link "STD Profile Basic" [ref=f3e212] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e213]:
                - link "Metabolic Profile" [ref=f3e214] [cursor=pointer]:
                  - /url: packeges.html
          - generic [ref=f3e215]:
            - heading "Packages" [level=2] [ref=f3e218]
            - list [ref=f3e222]:
              - listitem [ref=f3e223]:
                - link "Fever Profile" [ref=f3e224] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e225]:
                - link "Arthritis Profile" [ref=f3e226] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e227]:
                - link "Cardiac Risk Profile" [ref=f3e228] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e229]:
                - link "Anemia Package" [ref=f3e230] [cursor=pointer]:
                  - /url: packeges.html
              - listitem [ref=f3e231]:
                - link "Healthy Pregnant" [ref=f3e232] [cursor=pointer]:
                  - /url: packeges.html
          - generic [ref=f3e233]:
            - heading "Get In Touch" [level=2] [ref=f3e236]
            - generic [ref=f3e239]:
              - paragraph [ref=f3e241]: Madanandapuram, Porur, Chennai - 600 125
              - generic [ref=f3e242]:
                - heading "Contact" [level=6] [ref=f3e243]
                - generic [ref=f3e244]:
                  - heading "Phone :" [level=5] [ref=f3e245]
                  - link "044-4214 9999" [ref=f3e246] [cursor=pointer]:
                    - /url: tel:04442149999
                - generic [ref=f3e247]:
                  - heading "Mail Us :" [level=5] [ref=f3e248]
                  - link "info@davidscans.com" [ref=f3e249] [cursor=pointer]:
                    - /url: tel:info@davidscans.com
        - generic [ref=f3e254]:
          - generic [ref=f3e256]:
            - text: © 2017
            - link "David Labs & Scans" [ref=f3e257] [cursor=pointer]:
              - /url: index.html
            - text: All Rights Reserved. Designed By
            - link "Imperial" [ref=f3e258] [cursor=pointer]:
              - /url: https://impinfo.in/
          - list [ref=f3e262]:
            - listitem [ref=f3e263]:
              - link " facebook" [ref=f3e264] [cursor=pointer]:
                - /url: https://www.facebook.com/
                - generic [ref=f3e265]: 
                - generic [ref=f3e266]: facebook
            - listitem [ref=f3e267]:
              - link " instagram" [ref=f3e268] [cursor=pointer]:
                - /url: https://www.instagram.com/davidlabsandscans/
                - generic [ref=f3e269]: 
                - generic [ref=f3e270]: instagram
            - listitem [ref=f3e271]:
              - link " linkedin" [ref=f3e272] [cursor=pointer]:
                - /url: https://www.linkedin.com/
                - generic [ref=f3e273]: 
                - generic [ref=f3e274]: linkedin
            - listitem [ref=f3e275]:
              - link " youtube" [ref=f3e276] [cursor=pointer]:
                - /url: https://www.youtube.com/
                - generic [ref=f3e277]: 
                - generic [ref=f3e278]: youtube
      - generic [ref=f3e280] [cursor=pointer]:  
      - generic [ref=f3e284]:
        - generic [ref=f3e285] [cursor=pointer]: 
        - generic [ref=f3e291]:
          - paragraph [ref=f3e292]:
            - generic [ref=f3e293]:
              - text: Your name
              - textbox "Your name " [ref=f3e294]:
                - /placeholder: Enter Your Name
                - text: Test
              - generic [ref=f3e295]: 
          - paragraph [ref=f3e296]:
            - generic [ref=f3e297]:
              - text: Your Mobile Number
              - spinbutton "Your Mobile Number " [active] [ref=f3e298]: "8888888888"
              - generic [ref=f3e299]: 
          - paragraph [ref=f3e300]:
            - generic [ref=f3e301]:
              - text: Test name
              - textbox "Test name " [ref=f3e302]:
                - /placeholder: Enter Test name
              - generic [ref=f3e303]: 
          - button "Submit" [ref=f3e304] [cursor=pointer]
      - list [ref=f3e307] [cursor=pointer]:
        - listitem [ref=f3e308]: P
        - listitem [ref=f3e309]: A
        - listitem [ref=f3e310]: "Y"
        - listitem [ref=f3e311]: M
        - listitem [ref=f3e312]: E
        - listitem [ref=f3e313]: "N"
        - listitem [ref=f3e314]: T
        - listitem [ref=f3e315]: S
      - text: 
    - link "" [ref=f3e317] [cursor=pointer]:
      - /url: tel:+919486633000
  - iframe [ref=f3e319]:
    - generic [ref=f5e5]:
      - button [ref=f5e6] [cursor=pointer]
      - generic [ref=f5e7]: "1"
  - generic [ref=f3e320]:
    - generic [ref=f3e321] [cursor=pointer]
    - generic [ref=f3e323]:
      - strong [ref=f3e327] [cursor=pointer]: Welcome to David Labs & Scans
      - generic [ref=f3e328] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'; 
  2  | test('david', async ({page}) => {
  3  |     await page.goto('https://www.davidscans.com/');
  4  |     await expect (page.locator(".logo_default")).toBeVisible();
  5  |     //await expect(page.getByAltText('Creote Elementor')).toBeVisible();
  6  |     await page.click("(//a[@class='nav-link'])[5]");   
  7  |     await page.getByPlaceholder('Your Name *').fill('Test');
  8  |     await page.getByPlaceholder('Mobile Number *').fill('9999999999');
  9  |     await page.getByPlaceholder('Enter the Test *').fill('Tests');
  10 |     //await page.waitForTimeout(9000);
  11 |     //await page.getByRole('button', {type: 'submit'}).click();
  12 |     await page.locator('.contact-toggler').click();
  13 |     await page.getByPlaceholder('Enter Your Name').fill('Test');
  14 |     await page.getByPlaceholder('Your Mobile Number').fill('8888888888');
> 15 |     await page.getByRole('text', { name: 'testName' }).fill('Test2');
     |                                                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  16 |     await page.waitForTimeout(4000);
  17 |     //await page.locator("form[id='secondForm'] button[type='submit']").click();
  18 | });
```