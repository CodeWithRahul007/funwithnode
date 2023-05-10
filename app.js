// const number = 35;

// if (number > 50) {
//   console.log("Large Number");
// } else {
//   console.log("Small Number");
// }

// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//   console.log("This is 1 sec interval bound");
// }, 1000)

// const harry = "harry";
// const jim = "jim";
// const tom = "tom";

// const names = require('./namesData');
// const introduceYourself = require('./introductionFunction');


// const names = {harry:"harry",jim:"jim"}

// introduceYourself(names.harry);
// introduceYourself(names.jim);
// introduceYourself(names.tom);

// console.log(names);

// Built in module

// const os = require("os");

// Info about current user
// console.log(os.userInfo());

//Info about system uptime;
// console.log(os.uptime());


// Practical use case of os module;

// const myOSInfo = {
//   type: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem()
// }

// console.log(myOSInfo);

// ========================================================

// Path Module:
// const path = require('path');

// console.log(path.sep);

// const filepath = path.join('\content', 'subcontent', 'test.txt');
// console.log(filepath);

// const base = path.basename(filepath);
// console.log(base);

// const absolutePath = path.resolve(__dirname, 'content', 'subcontent', 'test.txt');
// console.log(absolutePath);
// ===========================================================
// FS
// Reading data from particular file
// Creating and writing data into new file

// const fs = require('fs');
// fs.readFileSync()

// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/firstFile.txt', 'utf8');
// console.log(first);

// const secondFile = readFileSync('./content/secondFile.txt', 'utf8');
// console.log(secondFile);

// writeFileSync('./content/subcontent/newFile.txt', 'This file is created using writeFileSync');

// const newFile = readFileSync('./content/subcontent/newFile.txt', 'utf8');
// console.log(newFile);

// writeFileSync('./content/subcontent/combinedDataFile.txt', `Combined content is : ${first}, ${secondFile}`);

// =====================================================================

const http = require('http');
// to set up a web server

const server = http.createServer((req, res) => {

  // console.log(req);

  if (req.url === "/") {
    res.write(`
  <h1>this is home page. Welcome aboard! This is amazing</h1>
  <p>Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
  `);
    res.end();
  }

  if (req.url === "/features") {
    res.write(`
      <h1> Feature 1</h1>
      <h1> Feature 2</h1>
      <h1> Feature 3</h1>
      <h1> Feature 4</h1>
      <a href='/pricing'>Back to home page</a>
    `)
    res.end();
  }

  if (req.url === '/pricing') {
    res.write(`
    <h1>The monthly subscription cost is 250 Dollars</h1>
    `)
    res.end();
  }

  res.end(`<h1>404 : Page not found</h1>`)
});

server.listen(4000);

// NPM Setup