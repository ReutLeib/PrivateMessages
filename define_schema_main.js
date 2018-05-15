var mongoose    = require('mongoose'),
    messSchema  = require('./define_schema_messages'),
    schema      = mongoose.Schema;   

var mainSchema = new mongoose.Schema({

        id:{type:Number,index:1,required:true},
        fromUser:String,
        messages: [messSchema] 
    
    });

// // setters:
// messSchema.path('name').set((val)=>{
//   let sval = String(val).toUpperCase();
//   console.log(`\n capitalized: ${sval}`);
//   return sval;
// })


// // validate a single key (=field)
// messSchema.path('age').validate((val) => {
//   console.log(`\n validate ${val}`);
//   let ival = Number(val);
//   return ival > 18; // means a>18 -> return true
// }, "user is too young" ); // msg s for error 

// messSchema.pre('save', (next) =>{
//   console.log(`\n Before saving do something...\n`);
//   return next();
// })

// console.log(`required paths: ${user.requiredPaths()}`); 
// console.log(`indexes: ${JSON.stringify(user.indexes())}`);
var Mess = mongoose.model('Messages',mainSchema);
module.exports = Mess;