// TODO: const :
var express     = require('express'),
    event       = require('events'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    messFunc    = require('./messFunctions');
    app         = express();
    port        = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', (req,res,next) => {
   res.send('Global handler for all route');
    req.next();   // next to next route
});

// app.get('/insert',(req,res) =>{
//    res.json(messFunc.insert());
// });

app.get('/PrivateMessages', (req,res) => { 
    // include to index.html
    res.sendFile(`${__dirname}/html/index.html`);
    console.log("/PrivateMessages");
    // res.send('server root');
});

// client cant see public, if client sent request to assets:
app.use('/assets', express.static(`${__dirname}/public`));

app.get('/getAllMessages', (req,res) => { 
   res.json(messFunc.getAllMessages());
   // res.json(messFunc.getAllMessages());
});

app.post('/getMessageByID/', (req,res) => {
    res.json(messFunc.getMessageByID(req.body.id));
});

// TODO: 2 params - id & date
// TODO: return JSON
app.post('/getMessageByDateAndID/', (req,res) => { 
    res.json(messFunc.getMessageByID(req.body.id,req.body.date));


       
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


