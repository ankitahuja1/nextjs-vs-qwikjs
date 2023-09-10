const puppeteer = require('puppeteer');

(async () => {
  // Launch Puppeteer and create a new page.
  const browser = await puppeteer.launch( { headless: 'new' } );
  const page = await browser.newPage();

  try {
    const url = 'https://example.com';

    // Enable the Chrome DevTools Performance API
    await page.tracing.start({ path: 'trace.json' });

    // Navigate to the URL
    const navigationPromise = page.goto(url);

    // Wait for the navigation to complete
    await navigationPromise;

    // Stop tracing and gather the trace data
    await page.tracing.stop();

    // Parse and analyze the trace data to calculate response time
    const traceData = require('fs').readFileSync('trace.json', 'utf8');
    const traceEvents = JSON.parse(traceData).traceEvents;
    const navigationStartEvent = traceEvents.find(event => event.name === 'navigationStart');
    const responseReceivedEvent = traceEvents.find(event => event.name === 'ResourceReceiveResponse');

    if (navigationStartEvent && responseReceivedEvent) {
      const navigationStartTime = navigationStartEvent.ts / 1000; // Convert to milliseconds
      const responseReceivedTime = responseReceivedEvent.ts / 1000; // Convert to milliseconds
      const responseTime = responseReceivedTime - navigationStartTime;
      console.log(`Navigation Response Time: ${responseTime}ms`);
    } else {
      console.error('Unable to calculate response time.');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
