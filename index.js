var express     = require('express'),
    event       = require('events'),
    bodyParser  = require('body-parser'),
    app         = express();
    port        = process.env.PORT || 5050;



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));



app.all('*', (req,res,next) => {
   // res.send('Global handler for all route');
    console.log("11");
    req.next();   // next to next route
});

app.get('/myprofile', (req,res) => { //if req&&get
    // include to index.html
    res.sendFile(`${__dirname}/html/index.html`);
    console.log("22");
    // res.send('server root');
});

// client cant see public, if client sent request to assets:
app.use('/assets', express.static(`${__dirname}/public`));





// TODO: change that
app.listen(port);
console.log(`listening on port ${port}`);


