const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


/* app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});
 */

/* app.use(function(req,res,next){
    
}) */
app.get("/",function(req,res){

   res.send("data")
   /*  res.send({msg:"server"}); */
 })

app.listen(7272,function(req,res){
    console.log("server started listenig")
})