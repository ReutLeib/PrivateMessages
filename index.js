// TODO: ignore from consts file
var express     = require('express'),
      event       = require('events'),
      bodyParser  = require('body-parser'),
      fs          = require('fs'),
      controller  = require('./controller'),
      messFunc    = require('./messFunctions');
      app         = express();
      port        = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/mess', controller);

app.all('*', (req,res,next) => {
    req.next();   // next to next route
});

app.get('/PrivateMessages', (req,res) => { 
    // include to index.html
    res.sendFile(`${__dirname}/html/index.html`);
    console.log("Enter route: /PrivateMessages");
});

// client cant see public, if client sent request to assets:
app.use('/assets', express.static(`${__dirname}/public`));

app.get('/getMessageByID', (req,res) => { 
      res.json({message:`Please copy this URL:
          https://prvtmessages.herokuapp.com/mess/getMessageByID 
          to the 'Postman',
          and send a parameter 'id'`});
    console.log("Enter route(GET): /getMessageByID");

});

app.get('/getMessageByDateAndID', (req,res) => { 
        res.json({message:`Please copy this URL:
          https://prvtmessages.herokuapp.com/mess/getMessageByDateAndID 
          to the 'Postman',
          and send a parameter 'id' and 'date'`});
    console.log("Enter route(GET): /getMessageByDateAndID");

});

app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});




