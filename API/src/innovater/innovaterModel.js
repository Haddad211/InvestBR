var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var innovaterSchema = new Schema({
        firstname:{
          type:String,
          required:true
        },
 
        lastname: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        password: {
          type: String,
          required: true
        },
        confirmpassword: {
          type: String,
          required: true
        },
        zip: {
          type: String,
          required: true
        },
        country: {
          type: String,
          required: true
        },
        code: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          required: true
        },
        branch: {
          type: String,
          required: true
        },
        status:{
          type:Boolean,
          require:true
        },
        posts: [{ 
          title: { type: String, required: true },
          content: { type: String, required: true },
          date: { type: Date, default: Date.now },
        }]
});
 
module.exports = mongoose.model('innovaters',innovaterSchema);