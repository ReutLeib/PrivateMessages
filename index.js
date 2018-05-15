// TODO: needs config ??
const express     = require('express'),
      event       = require('events'),
      bodyParser  = require('body-parser'),
      fs          = require('fs'),
      messFunc    = require('./messFunctions');
      app         = express();
      port        = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', (req,res,next) => {
   // res.send('Global handler for all route');
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
    res.json(messFunc.getMessageByDateAndID(req.body.id,req.body.date));
});

app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});



