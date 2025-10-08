const fs = require('fs')
const http = require('http')
const path = require('path')
const os = require('os')
const url = require('url');
const crypto = require('crypto');
const math = require('./math')
const lodash = require('lodash')

// fs.readFile('example.txt' , 'utf-8',(err,data)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log(data)
// })
// const content = "Hello ,NodeJs"

// fs.writeFile('output.txt',content,(err)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log('File written successfully');
// })

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/plain')
//     res.end('Hello, world')
// })
// server.listen(3001,()=>{
//     console.log('Server running at http://localhost:3001')
// })


// const directory = '/user/local'
// const fileName = 'example.txt'
// const fullPath = path.join(directory,fileName)
// console.log(fullPath);

// console.log('Platform:', os.platform());
// console.log('CPU Architecture:', os.arch());
// console.log('Total Memory (bytes):', os.totalmem());
// console.log('Free Memory (bytes):', os.freemem());
// console.log('Uptime (seconds):', os.uptime());

// // --- URL Module Example ---
// const myUrlString = 'https://example.com:8080/path/name?query=hello&id=123#hash';
// const myUrl = new URL(myUrlString);

// console.log('Full URL:', myUrl.href);
// console.log('Protocol:', myUrl.protocol);
// console.log('Host:', myUrl.host);
// console.log('Hostname:', myUrl.hostname);
// console.log('Port:', myUrl.port);
// console.log('Pathname:', myUrl.pathname);
// console.log('Search (query string):', myUrl.search);
// console.log('Query parameters (as object):', myUrl.searchParams.get('query'));
// console.log('Hash:', myUrl.hash);

// // --- Crypto Module Example ---
// const dataToHash = 'Hello world';
// const hash = crypto.createHash('sha256'); 
// hash.update(dataToHash); 
// const hashedData = hash.digest('hex');

// console.log('Original Data:', dataToHash);
// console.log('SHA-256 Hash (hex):', hashedData);

// console.log(math.add(5,3));
// console.log(math.substract(5,3));

const number = [1,2,3,4,5]
const reverse = lodash.reverse(number)
console.log(reverse)
