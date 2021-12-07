import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import { from } from 'rxjs';

const url =
    'https://select.ridibooks.com/search?q=%EB%8B%AC%EB%9F%AC%EA%B5%AC%ED%8A%B8&type=Books';
const [TITLE, REDIRECT_URL] = [0, 1];
const select = '#app > main > ul> li';
const child = ['div > div > a > h3', 'div > div > a', 'a h3'];
// (async () => {
//     const browser: puppeteer.Browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: 'networkidle0' });
//     const content = await page.content();
//     const $ = cheerio.load(content);
//     $(select).each((index, list) => {
//         const name = $(list).find(child[TITLE]).text();
//         console.log(index, name);
//     });
//     await browser.close();
// })();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const content = await page.content();
    const $ = cheerio.load(content);
    $(select).each((index, list) => {
        const name = $(list).find(child[TITLE]).text();
        console.log(index, name);
    });
    await browser.close();
})();

// return rxjs
//     .from(urls)
//     .pipe(
//         orderedMergeMap(async (url) => {
//             return withPage(browser)(async (page) => {
//                 console.log(`Scraping ${url}`);
//                 await page.goto(`${host}/${url}`);

//                 const result = await page.evaluate(
//                     (e) => e.textContent,
//                     await page.$('#result')
//                 );
//                 console.log(`Scraping ${url} finished`);
//                 return result;
//             });
//         }, 3),
//         toArray()
//     )
//     .toPromise();
