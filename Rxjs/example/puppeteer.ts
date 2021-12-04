import puppeteer from 'puppeteer';

const GOOGLE = 'https://www.google.com';
(async () => {
    const browser: puppeteer.Browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(GOOGLE);
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
})();

(async () => {
    const browser: puppeteer.Browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(GOOGLE);
    await page.screenshot({ path: 'screenshot2.png' });
    await browser.close();
})();
