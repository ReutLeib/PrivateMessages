var mongoose  = require('mongoose'),
    schema = mongoose.Schema;   

var messSchema = new mongoose.Schema({

        date:String,
        message: String
    
    });

module.exports = messSchema;


