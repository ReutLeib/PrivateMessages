var mongoose  = require('mongoose'),
    schema = mongoose.Schema;   
// message
var messSchema = new mongoose.Schema({

        date:String,
        fromUser:String,
        message: String
    
    });

mongoose.model('Message', messSchema);

module.exports = mongoose.model('Message');
