const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
//const mongoose = require('mongoose');
const app = express();
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST'); /*on donne l'access du delete put get post*/
  //next();
//});

// get url database
//const db = require('./server/config/keys').mongoIRU;
// connect to mongoose db
/*mongoose
        .connect(db)
        .then(() => console.log('Connect To Database'))
        .catch(err => console.log(err));

app.use(bodyparser.json());
*/
/* deploy config */
app.use(express.static(path.static(__dirname,'../dist/blog/')));
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'../dist/blog/index.html'));
});
/*
app.get('/',(req,res) => {
  res.send({msg:'hello world'});
});
*/
/*const user = require('./server/Routes/user');
app.use('/api/user',user);

*/
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`port used is : ${port}`))
