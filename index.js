const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const twit = require('twit');
 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: false
  }));

app.get('/tweets/:search', function(req,res){
    console.log(req.params.search);
    res.json({'status':'Success'})
})
 
app.listen(3000)

console.log("RESTART") 