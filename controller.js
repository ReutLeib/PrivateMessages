// TODO: change the package json
const   express     = require('express'),
        app         = express.Router();
        bodyParser  = require('body-parser');
        User        = require('./define_schema_main');
        Message     = require('./define_schema_messages');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/insertMessage', (req, res) => {

    Message.create({date : req.body.date, message: req.body.message, fromUser:req.body.fromUser},(err, msg) => {
      if (err) return res.status(500).send({"error":"can't find a message"});
            res.status(200).send(msg);
        });
});

app.post('/insertUser', (req, res) => {
    
    User.create({id: req.body.id,name: req.body.name},(err, msg) => {
        console.log(err);
      if (err) return res.status(500).send({"error":"can't find a user"});
            res.status(200).send(msg);
        });
});
// TODO: print with ids and not messages
app.get('/getAllMessages', (req,res) => { 

        User.find({}, (err, msg) => {
        if (err) 
            return res.status(500).send({"error":"can't find a message"});
        res.status(200).send(msg);
    });
});

app.post('/getMessageByID/', (req,res) => {
   
       User.findOne({id:req.body.id}, (err, user) => {
        if (err) 
            return res.status(500).send({"error":"can't find a message"});
        Message.find({"_id":{$in:user.messages}}, (err,msg) => {
           return res.status(200).send(msg);
        });
        
    });
   
});

app.post('/getMessageByDateAndID/', (req,res) => { 
   
       User.findOne({id:req.body.id}, (err, user) => {
        // console.log(user.messages);
        if (err) 
            return res.status(500).send({"error":"can't find a message"});
        Message.find({"_id":{$in:user.messages},date:req.body.date}, (err,msg) => {
           return res.status(200).send(msg);
        });
        
    });
});


module.exports = app;