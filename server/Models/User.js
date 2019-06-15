const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = new mongoose.Schema({
  nom: String,
  prenom: String,
  email:{
    type: String,
    unique:true,
    required:true
  },
  password: {
    type: String,
    required:true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user','admin']
  },
  verify: String,
  creatdate: {
    type: Date,
    default: Date.now()
  }
});
mongoose.model('User',User);
module.exports = User;
