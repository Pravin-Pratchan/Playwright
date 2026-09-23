const { chromium } = require('playwright');

(async () => {
  // Launch Chrome (required for cr-* WebUI elements)
  const browser = await chromium.launch({
    headless: false,                    // set true for headless
    channel: 'chrome',                  // use real Chrome
    args: [
      '--disable-blink-features=AutomationControlled',
      // Uncomment if you need to open chrome:// pages:
      // '--allow-file-access-from-files',
    ]
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  // -------------------------------------------------------
  // 1. Go to the page that contains the element
  //    (replace with the real URL – e.g. chrome://newtab,
  //     a search results page, or whatever shows the match)
  // -------------------------------------------------------
  await page.goto('https://www.google.com');   // ← change this

  // -------------------------------------------------------
  // 2. Wait for the custom element to appear
  // -------------------------------------------------------
  await page.waitForSelector('cr-searchbox-match', { timeout: 10000 });

  // -------------------------------------------------------
  // 3. Playwright automatically pierces OPEN shadow roots
  // -------------------------------------------------------

  // A) Select the host element
  const match = page.locator('cr-searchbox-match#match-0');
  // or just the first one:
  // const match = page.locator('cr-searchbox-match').first();

  // B) Select inside the shadow root (notice the >> combinator)
  const container = page.locator('cr-searchbox-match#match-0 >> .container');

  // Alternative syntax (same result)
  // const container = page.locator('cr-searchbox-match#match-0')
  //                       .locator('.container');

  // -------------------------------------------------------
  // 4. Common actions
  // -------------------------------------------------------
  console.log('Host visible:', await match.isVisible());
  console.log('Container text:', await container.textContent());

  // Click the container inside the shadow root
  await container.click();

  // Get all matches
  const allMatches = page.locator('cr-searchbox-match');
  console.log('Total matches found:', await allMatches.count());

  // -------------------------------------------------------
  // 5. (Optional) Force access via evaluate if you ever need it
  // -------------------------------------------------------
  const shadowContent = await page.evaluate(() => {
    const host = document.querySelector('cr-searchbox-match#match-0');
    if (!host || !host.shadowRoot) return null;
    return host.shadowRoot.querySelector('.container')?.outerHTML;
  });
  console.log('Shadow HTML via evaluate:', shadowContent);

  // Keep browser open for inspection (remove in production)
  // await page.pause();

  await browser.close();
})();