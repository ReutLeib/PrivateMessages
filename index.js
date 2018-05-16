// TODO: needs config ??
// TODO: ignore from consts file
const express     = require('express'),
      event       = require('events'),
      bodyParser  = require('body-parser'),
      fs          = require('fs'),
      controller  = require('./controller'),
      messFunc    = require('./messFunctions');
      app         = express();
      port        = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/mess', controller);

app.all('*', (req,res,next) => {
  // cant print - note in console
   // res.send('Global handler for all route');
    req.next();   // next to next route
});

app.get('/PrivateMessages', (req,res) => { 
    // include to index.html
    res.sendFile(`${__dirname}/html/index.html`);
    console.log("/PrivateMessages");
});

// client cant see public, if client sent request to assets:
app.use('/assets', express.static(`${__dirname}/public`));



// app.get('/getAllMessages', (req,res) => { 
//    res.json(messFunc.getAllMessages());
//    // res.json({message:"Reut"});
// });

app.get('/getMessageByID', (req,res) => { 
      res.json({message:`Please copy the URL from here to the 'Postman',
         and send a parameter 'id'`});
});

// app.post('/getMessageByID/', (req,res) => {
//     res.json(messFunc.getMessageByID(req.body.id));
//    // res.json({message:"Reut"});
   
// });

app.get('/getMessageByDateAndID', (req,res) => { 
   res.json({message:`Please copy the URL from here to the 'Postman',
         and send two parameters: 'id' and 'date'`});
});




// TODO: 2 params - id & date
// TODO: return JSON
// app.post('/getMessageByDateAndID/', (req,res) => { 
//    // res.json({message:"Reut"});
//     res.json(messFunc.getMessageByDateAndID(req.body.id,req.body.date));

// });

app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});



