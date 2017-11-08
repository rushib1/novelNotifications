
const JSSoup = require("jssoup").default;
const NetworkUtils = require('./networkUtils');

function getChapterDetails(websMetaData){
  websMetaData.forEach(function(webMetaData){;
    let baseURL = webMetaData.baseURL;
    webMetaData.novels.forEach(function(novelMetaData){
      let finalURL = NetworkUtils.generateURL(baseURL,novelMetaData,webMetaData.type);
      NetworkUtils.getWebpage(finalURL,parseWebForChapter(novelMetaData));
    });
  });
}

function applyFilter(elements, filte){
  let filteredArr = [];
  for(let i=0; i<elements.length; i++){
    let temp = undefined;
    if(filte.type != 1){
      temp = elements[i].findAll(filte.name,filte.clas);
      if(temp != undefined){
        filteredArr = filteredArr.concat(temp);
      }
    }
    else{
      temp = elements[i].text;
      if(temp != undefined && temp.indexOf(filte.string) != -1){
        filteredArr = filteredArr.concat(temp);
      }
    }
  }
  return filteredArr;
}

function parseWebForChapter(novelMetaData){
  let meta = novelMetaData;
  return function(err,data){
    if(err){
      console.log(err);
      return;
    }
    else{
      let htmlBS = new JSSoup(data);
      let searchPatterns = meta.searchPatterns;
      let filt = htmlBS.findAll('body');
      for(let i=0;i<searchPatterns.length;i++){
        filt = applyFilter(filt,searchPatterns[i]);
      }
      if(filt){
        console.log(filt[0]);
      }
    }
  };
}

module.exports = {
  getChapterDetails: getChapterDetails
};
