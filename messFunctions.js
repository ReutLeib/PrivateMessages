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

var contents, jsonContent, g_messageJsons = [];
    messageID="", date="", mess="", fromUser="";

module.exports = {

};