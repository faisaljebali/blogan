const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const postModel = require('../Models/Post');

// get url database
const db = require('../config/keys').mongoIRU;
// connect to mongoose db
mongoose
        .connect(db)
        .then(() => console.log('Connect To Database'))
        .catch(err => console.log(err));
// test route
router.get('/test', (req,res) => {
       res.json({msg:'Hello post'});
});
router.post('/add', async (req,res) => {
  const newPost = await new postModel(req.body);
  newPost.save((err,data) =>{
    if(!err){ res.status(200).send(data); }
    else{
      res.sendStatus(500)
      console.error(error)
    }
  });
});
router.get('/all',async function(req,res){
  const data = await postModel.find().populate({ path: 'user' });
  res.send(data);

});
module.exports = router;
