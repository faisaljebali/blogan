const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST'); /*on donne l'access du delete put get post*/
  next();
});

// get url database
const db = require('./server/config/keys').mongoIRU;
// connect to mongoose db
mongoose
        .connect(db)
        .then(() => console.log('Connect To Database'))
        .catch(err => console.log(err));

app.use(bodyparser.json());
// LOAD URL API POST
const user = require('./server/Routes/user');
app.use('/api/user',user);
// LOAD URL API POST
const post = require('./server/Routes/post');
app.use('/api/post',post);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/blog'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/blog/index.html'));
});

// PORT APP
const port = process.env.PORT || 3800;
app.listen(port,()=> console.log(`port used is : ${port}`))
