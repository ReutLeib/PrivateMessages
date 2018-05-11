var express     = require('express'),
    event       = require('events'),
    bodyParser  = require('body-parser'),
    fs          = require("fs"),
    app         = express();
    // TODO: i need config.js?
    port        = process.env.PORT || 5050;

var contents, jsonContent;
var messageID="", date="", mess="", fromUser="";
var g_messageJsons = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', (req,res,next) => {
   // res.send('Global handler for all route');
    console.log("*");
    req.next();   // next to next route
});

app.get('/PrivateMessages', (req,res) => { 
    // include to index.html
    res.sendFile(`${__dirname}/html/index.html`);
    console.log("/PrivateMessages");
    // res.send('server root');
});

// client cant see public, if client sent request to assets:
app.use('/assets', express.static(`${__dirname}/public`));

app.get('/getAllMessages', (req,res) => { 
    contents = fs.readFileSync("data/messages.json");
    jsonContent = JSON.parse(contents);
    messageID="", date="", mess="", fromUser="";

    jsonContent.forEach((value) => {
        messageID = value.id;
        date = value.date;
        fromUser = value.fromUser;
        mess = value.message;

        g_messageJsons.push({messageID:messageID,
            date:date,
            fromUser:fromUser,
            message:mess });
    });

    if (date){
        res.json({g_messageJsons:g_messageJsons});
    } else{
        var response = "Nothing Found with this date";
        res.json({error:response});
    }

});

app.post('/getMessageByID/', (req,res) => {
    contents = fs.readFileSync("data/messages.json");
    jsonContent = JSON.parse(contents);
    date = "", mess = "", fromUser = "";
    messageID = req.body.id;
    
    jsonContent.forEach((value) => {
     if (value.id == messageID){
       date = value.date;
       fromUser = value.fromUser;
       mess = value.message;
     }
    });

    if (date){
        res.json({messageID:messageID,
            date:date,
            fromUser:fromUser,
            message:mess });
    } else{
        var response = "Nothing Found with this date";
        res.json({error:response});
    }


});

// TODO: 2 params - id & from User
// TODO: return JSON
app.get('/getMessageData/:id', (req,res) => { 
    contents = fs.readFileSync("data/messages.json");
    jsonContent = JSON.parse(contents);
    date = "", mess = "", fromUser = "";
    messageID = req.params.id;

    jsonContent.forEach((value) => {
     if (value.id == messageID){
       date = value.date;
       fromUser = value.fromUser;
       mess = value.message;
     }
    });

    if (date){
    res.json({messageID:messageID,
        date:date,
        fromUser:fromUser,
        message:mess });
    } else{
        var response = "Nothing Found with this date";
        res.json({error:response});
    }
       
  //  if (date){
  //   var response = `Message from:${fromUser}`;
  //   var datte    = `Date:${date}`;
  //   var messag   = `Text:${mess}`;

  //  } 
  //  else var response = "Nothing Found with this date";


  // res.send(`<!DOCTYPE html>
  //           <html lang="en">
  //               <head>
  //                 <meta charset="UTF-8">
  //                 <title> hello from Express server</title>
  //                 <link href="assets/style.css" rel="stylesheet">
  //               </head>
  //               <body>
  //                 <h1>${response}</h1>
  //                 <p>${datte}</p>
  //                 <p>${messag}</p>
  //               </body>
  //           </html>`);
});

// TODO: change that
app.listen(port);
console.log(`listening on port ${port}`);


