var express = require("express");
var app = express();
var path = require("path");
PORT = 3000;

var mygods=[{
    name:"Ganapathi",
    power:"first god",
    location:"Kailash",
    days:"all sankatahara chathirthi"
},{
    name:"Parvathi",
    power: "Strength, Fertility and health",
    location:"Kailash",
    days:"Tuesday Friday"
},
{
    name:"Lakshmi",
    power:"Wealth beauty and prosperity",
    location:"Vaikundum",
    days:"Fridays"
},
{
    name:"Saraswathi",
    power:"Education and Music",
    location:"",
    days:"Fridays"
}]



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


app.listen(PORT,function(){
    console.log("App listineing on PORT",PORT);
});

