var mongoose = require('mongoose');
var messSchema = require('./define_schema_messages');

var mainSchema = new mongoose.Schema({

        id:{type:Number,index:1,required:true},
        name: String,
        messages: [{type:mongoose.Schema.Types.ObjectId,ref:"Message"}] 
    
    });

mongoose.model('User', mainSchema);

module.exports = mongoose.model('User');