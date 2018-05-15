var mongoose    = require('mongoose'),
    messSchema  = require('./define_schema_messages'),
    schema      = mongoose.Schema;   

var mainSchema = new mongoose.Schema({

        id:{type:Number,index:1,required:true},
        fromUser:String,
        messages: [messSchema] 
    
    });

var Mess = mongoose.model('Messages',mainSchema);
module.exports = Mess;