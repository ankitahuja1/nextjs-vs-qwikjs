const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch( { headless: 'new' } );
  const page = await browser.newPage();

  try {
    // Replace 'http://localhost:3000' with the URL of your Next.js application.
    const url = 'http://localhost:3000';
    await page.goto(url);

    // Wait for the link to be visible before clicking.
    const linkSelector = 'a[href="/product/2"]'; // CSS selector for the link.
    await page.waitForSelector(linkSelector);

    // Record the current timestamp before clicking the link.
    const startTime = performance.now();

    // Click the link.
    await page.click(linkSelector);

    // Wait for navigation to complete.
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Calculate the time taken to load the page.
    const endTime = performance.now();
    const pageLoadTime = endTime - startTime;

    console.log(`Page load time after clicking the link: ${pageLoadTime} milliseconds`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
