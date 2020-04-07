const JsdomEnvironment = require('jest-environment-jsdom');
const puppeteer = require('node_modules/puppeteer');
// class student {
//     constructor(name, grade, subject) {
//         this._name = name;
//         this._grade = grade;
//         this._subject = subject;
//     };

//     get name() {
//         return this._name;
//     };

//     get grade() {
//         return this._grade;
//     };

//     get class() {
//         return this._grade;
//     };
// };

// let final_students = [];

// let students = ["Joey",'Ava',"Caedmon", "Mary Clare"];



// for(i = 0; i < students.length; i++){
//     temporary_student = new student(students[i], '8th', 'science');
//     final_students.push(temporary_student);
// }

// console.log(final_students);

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

