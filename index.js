// function startScraping(){
//
// }
//
// function scrapeNovels(loginData, callback){
//   if(type(callback) !== "function"){
//     throw new Error("callback should be a function given" + type(callback));
//   }
//
//   startScraping(loginData);
// }



// var JSSoup = require('jssoup').default;
// var rawHtml = `<body><div class="fat"><div class="battle">hello</div></div><p>excuse</p></body>`;
// var element = new JSSoup(rawHtml);
// var filte = [{name: 'div', clas: 'fat', type:0},{name: 'div', clas: 'battle', type:0},{type:1, text:"Tales of Demons and Gods"}]
// let a = element.findAll('body');
// for(let i=0;i<filte.length;i++){
//   a = applyFilter(a,filte[i]);
// }
// console.log(a);

// const request = require('request');
//
// let d = request('https://www.google.com', function(err,response,body){
//   return body;
// });
//
// console.log(d);

const ParseUtils = require('./utils/parserUtils');
const fs = require('fs');

var metaData = JSON.parse(fs.readFileSync('./metaData.json','utf8'));
ParseUtils.getChapterDetails(metaData);
