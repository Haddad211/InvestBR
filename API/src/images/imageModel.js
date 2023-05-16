const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageName: {
    type: String,
  },
  imageData: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema);
