const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({

pseudo: {
    type : String,
    required : true,
    minLength: 3,
    maxLength: 55,
    unique: true,
    trim: true
},
email: {
    type : String,
    required : true,
  unique: true, 
},
password: {
    type : String,
    required : true,
   
},

picture : {
    type : String,
    default: "https://cdn2.iconfinder.com/data/icons/random-outline-3/48/random_14-512.png"
    
},

bio : {
    type : String,
    max: 1024,
    
},

role : {
    type: String,
    default: "user"

}

},
{
    timestamps: true,
})




userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);