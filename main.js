const puppeteer = require('node_modules/puppeteer');



$(document).ready(() => {

    const $username = $('#username');
    const $pw = $('#pw');
    const $loginButton = $('#login-button');
    

    $('#login-button').on('click', () => {


            (async () => {
                const browser = await puppeteer.launch({
                    headless: false
                });
                const page = await browser.newPage();
          
                // original URL: http://fastdir.com/ololdenver/
                await page.goto("https://ssl.fastdir.com/~fastdir/cgi/Login.pl?S=205");
          
                // run this script by using `node inspect scrape.js` in bash
                // type "cont" then "repl" to interact with the page
                debugger
          
                await page.type('input[name=ScreenName]', 'TD2017');
                await page.type('input[name=pw]', 'OlolMS');
            })();
    });
});

