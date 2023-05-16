var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    branch:{
      type:String,
      required:true
    },
    budget:{
      type:String,
      required:true
    },
    type:{
      type:String,
      required:true
    },
    autherfirstname:{
      type:String,
      required:true
    },
    autherlastname:{
      type:String,
      required:true
    },
    innovator: {
      type:String,
      required:true
    },
    Nbmatching:{
      type:Number,
      default: 0
     },
     Branchlist: {
      type: [String], 
      default: []
    }
  });


  module.exports = mongoose.model('Posts', postSchema);