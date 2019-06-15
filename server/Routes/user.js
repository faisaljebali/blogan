const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = require('../Models/User');
const userModel = mongoose.model('users', userSchema)
const multer = require('multer');
//config upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/posts/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
    }
});

var upload = multer({
  storage: storage
});
//var upload = multer({ dest: 'uploads/users/' })

// get url database
const db = require('../config/keys').mongoIRU;
// connect to mongoose db
mongoose
        .connect(db)
        .then(() => console.log('Connect To Database'))
        .catch(err => console.log(err));
// test route
router.get('/test', (req,res) => {
       res.json({msg:'Hello user'});
});
// route registre post
router.post('/registre', (req,res) => {
  userModel.findOne({email:req.body.email}, function(err,user) {
    if(user){
     return res.send({msg:'this email used',statuts:'400'})
    }
  var newUser = new userModel(req.body);
  newUser.verify = '456789123'
  newUser.save((err, doc)=> {
    if (!err) {
      res.status(200).send({message:'Success register'});
    }else{
      res.send(err);
    }
  });
});
})

router.post('/login' , async (req,res) => {
const resultat = await userModel.findOne({email:req.body.email});
if(!resultat){
  res.send({
    msg:'email incorect',
    status: '401',
  })
}
if(resultat.password != req.body.password){
  //console.log(resultat.password);
  res.send({
    msg:'email or password incorect',
    status: '401',
  })
}else{
  res.status(200).send({msg:'ok',userTokeb:jwt.sign({data:resultat},'AZERTT'),status:'200',iduser:resultat._id,nom_user:resultat.nom+' '+resultat.prenom})
}
});

router.post('/upload', upload.single('file'), function (req, res, next) {
  res.send(req.file);
});

module.exports = router;
