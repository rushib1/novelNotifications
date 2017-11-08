const nodemailer = require('nodemailer');

function generateSubject(chapters){
  return `new Notifications from ${chapters.length+1}`
}

function generateBody(chapters){
  let body = chapters.reduce(
    function(finalBody, newNovel){
      return finalBody + `<p>${newNovel.novelName} released <a href="http://www.google.com">${newNovel.chapterNumber}</a></p>`
    }
  ,'');
  return body;
}

function createTransporter(loginData,config){
  let transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: loginData.user,
      pass: loginData.pass,
    }
  });
  return transporter;
}

function sendMail(transporterObject, notificationData){
  let mailOptions = {
    from: notificationData.sender,
    to: notificationData.recievers.join(', '),
    subject: generateSubject(notificationData.newChapters),
    html: generateBody(notificationData.newChapters)
  }
  transporterObject.sendMail(mailOptions, function(error, info){
    if(error){
      console.log("error while sending data" + error);
    }
    else
      console.log('Message sent'+info);
  })
}

function buildAndSendMail(){
  console.log('penta');
  let defaultOptions = {
    host: "smtp.gmail.com",
    post: 465,
    secure: true
  }
  let transporterObject = createTransporter({user: "", pass:""}, defaultOptions);
  let notificationData = {
    sender: '',
    recievers: ['', ''],
    newChapters: [
      {
        novelName: 'wdqk',
        chapterNumber: '320',
        chapterLink: 'www.google.com'
      }
    ]
  }
  if(transporterObject)
    sendMailThunk(transporterObject,notificationData);
}

buildMail();
