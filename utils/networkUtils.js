
const request = require('request');
const cloudscraper = require('cloudscraper');

function getHeaders(url) {
  var headers = {
    method: 'GET',
    url: url,
    'User-Agent': 'Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.4) Gecko/20030624 Netscape/7.1 (ax)'
  };
  return headers;
}

function generateURL(baseURL,metaData,type){
  switch(type){
    case 0:
      return baseURL;
    default:
      return baseURL;
  }
}

function getWebpage(url,callback){
  request(getHeaders(url), function(err,response,body){
    if(err)
      console.log(err);
    if(body){
      callback(err,body);
    }
  })
}

module.exports = {
  generateURL: generateURL,
  getWebpage: getWebpage
};
