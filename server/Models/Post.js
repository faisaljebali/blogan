const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const postschema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  image_post:{
    type: String,
    required: true
  },
  data_created:{
    type: Date,
    default:Date.now()
  },
  user:{
    type:Schema.Types.ObjectId,
    ref: 'users'
  }
});
module.exports = mongoose.model('posts',postschema)
