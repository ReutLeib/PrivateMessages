var express     = require('express'),
    event       = require('events'),
    bodyParser  = require('body-parser'),
    fs          = require("fs"),
    Mess        = require('./define_schema_main');
    app         = express();
    port        = process.env.PORT || 5050;


var mongoose = require('mongoose'),
    consts   = require('./consts');
mongoose.connect(consts.MLAB_KEY);



/////////////////////////////////////////////////////////////

var contents, jsonContent, g_messageJsons = [];
    messageID="", date="", mess="", fromUser="";

module.exports = {
  getAllMessages: () => {

      mongoose.connect(consts.MLAB_KEY).then( () =>{
          Mess.find({}, (err,user) => {
            if(err)
              console.log(`query error: ${err}`);
            console.log(`${user}`);
            console.log("_________________________________________");
            mongoose.disconnect();
          });
          // console.log(`connected: ${User}`);
        },
        err =>{
          console.log(`connection error: ${err}`);
        }
      );
  },

getMessageByID: (messageID) => {

      mongoose.connect(consts.MLAB_KEY).then( () =>{
          Mess.find({id:messageID}, (err,user) => {
            if(err)
              console.log(`query error: ${err}`);
            console.log(`${user}`);
            console.log("_________________________________________");

            // return `${user}`;
            mongoose.disconnect();
          });
          // console.log(`connected: ${User}`);
        },
        err =>{
          console.log(`connection error: ${err}`);
        }
      );
  },

// TODO: gave me all dates of messageID - need to fix it 
getMessageByDateAndID: (messageID,messageDate) =>{

      mongoose.connect(consts.MLAB_KEY).then( () =>{
      Mess.find({id:messageID,date:messageDate}, (err,user) => {
        if(err)
            console.log(`query error: ${err}`);
          console.log(`${user}`);
          console.log("_________________________________________");

         // return `${user}`;
         mongoose.disconnect();
       });
        // console.log(`connected: ${User}`);
      },
      err =>{
        console.log(`connection error: ${err}`);
      }
    );
},

insert: () => {
    //     mongoose.connect(consts.MLAB_KEY).then( () =>{
    //     var newUser1 = new Mess({
    //       id:7,
    //       fromUser: "mister7",
    //       // messages: ["Hi thereeeee2.1","Hi thereeeee2.2","Hi thereeeee2.3"]
    //       messages: [
    //       {
    //         date:"15.4.18",
    //         message: "Hi thereeeee7.1"
    //       },
    //       {
    //         date:"10.2.18",
    //         message: "Hi thereeeee7.2"
    //       },
    //       {
    //         date:"25.1.18",
    //         message: "Hi thereeeee7.3"
    //       },
    //       {
    //         date:"25.1.18",
    //         message: "Hi thereeeee7.4"
    //       }

    //         ]



    //     });
    //      newUser1.save((err) => {
    //       if(err)
    //         console.log(`error: ${err}`);
    //       else{
    //         console.log(`Saved doc: ${JSON.stringify(newUser1)}`);
    //         mongoose.disconnect();
    //       }
    //      });
    //      // console.log(`Mess: ${user}`);
    //   },
    //   err =>{
    //     console.log(`connection error: ${err}`);
    //   }
    // );
},

};