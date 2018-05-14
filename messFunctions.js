var express     = require('express'),
    event       = require('events'),
    bodyParser  = require('body-parser'),
    fs          = require("fs"),
    app         = express();
    port        = process.env.PORT || 5050;

var contents, jsonContent, g_messageJsons = [];
    messageID="", date="", mess="", fromUser="";

module.exports = {
  getAllMessages: () => {
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
          return g_messageJsons;
      } else{
          return "Nothing Found with this date";
      }
  },

getMessageByID: (messageID) => {
    contents = fs.readFileSync("data/messages.json");
    jsonContent = JSON.parse(contents);
    date = "", mess = "", fromUser = "";
    
    jsonContent.forEach((value) => {
     if (value.id == messageID){
       date = value.date;
       fromUser = value.fromUser;
       mess = value.message;
     }
    });

    if (date){
        return {messageID:messageID,
                date:date,
                fromUser:fromUser,
                message:mess };
    } else{
        return "Nothing Found with this date";
    }
  }






};