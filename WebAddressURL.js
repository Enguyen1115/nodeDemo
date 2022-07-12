// import url from 'url'; 
var url = require('url');

var urlAddress = 'http://localhost:8080/default.html?year=2022&month=July';

var p = url.parse(urlAddress, true);

console.log(p.query.year);
console.log(p.query.month);

console.log(p.host);
console.log(p.pathname);
console.log(p.search);
