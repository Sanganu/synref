var express = require("express");
var app = express();
var path = require("path");
PORT = process.env.PORT || 3000;

var mygods = require("./godsMaster");
var placedate = require("./sitesWorship");

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true })); // If this is not used the req.body will be undefined.

app.get("/",function(req,res){
   return res.sendFile(path.join(__dirname,"Devotionalblog.html"));
});


app.get("/api/all",function(req,res){
  return res.json(mygods);
});

app.get("/:usergod",function(req,res){
   var usergod = req.params.usergod;
   console.log(usergod);
   var founddata = mygods.filter(function(godobj){
        if(godobj.name === usergod)
        {
            return godobj;
        }
   });
   if(!founddata)
       res.send("The Details doesn't exist");
   else
       res.send(founddata)   ;
});

app.post("/api/newgod",function(req,res){
    console.log("Route:",req.body);
    var myUserObject = req.body;
   // myUserObject.name =myUserObject.name.replace(/\s+/g, "").toLowerCase();
//    var userObject = {
//     name:req.body.name,
//     power:req.body.power,
//     location:req.body.location,
//     days:req.body.days
//    }
   console.log(myUserObject);
   mygods.push(myUserObject);
   res.json(myUserObject);
});

app.listen(PORT,function(){
    console.log("App listineing on PORT",PORT);
});

