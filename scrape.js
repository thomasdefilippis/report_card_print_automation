// if things break, use `rm -rf node_modules; npm install`

// https://github.com/puppeteer/puppeteer
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // original URL: http://fastdir.com/ololdenver/
  await page.goto("https://ssl.fastdir.com/~fastdir/cgi/Login.pl?S=205")

  // run this script by using `node inspect scrape.js` in bash
  // type "cont" then "repl" to interact with the page
  debugger

  await page.type('input[name=ScreenName]', 'username');
  await page.type('input[name=pw]', 'password');

  await page.click('div[class=newLoginElement] input[type=image]');

  await page.waitForNavigation();

})();