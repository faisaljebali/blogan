const mongoose = require('mongoose');
const CommentSchema = mongoose.schema({
  comment:{
    type:String,
    required:true
  },
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'posts'
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
  },
  datecreated:{
    type:Date,
    default:Date.now()
  }
});
module.exportes = mongoose.model('comments',CommentSchema)
