var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var investorSchema = new Schema({
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
        rolecompany: {
          type: String,
          required: true
        },
        company: {
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
        }
      
});
 
module.exports = mongoose.model('investor', investorSchema);