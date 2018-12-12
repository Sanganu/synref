
var axios = require('axios');
var fs = require('fs');
var search = process.argv[2] || "show";
var term = process.argv.slice(3).join(" ") || "";
var actor = require('./actordetails');
var show = require('./showdetails');


if(search === 'actor')
{
  var URL = "http://api.tvmaze.com/search/people?q=" + term;
  axios.get(URL).then((response) => {
          console.log(response.data[0].person);
          var myactor = new actor(response.data[0].person.name,
          response.data[0].person.birthday,response.data[0].person.gender,
          response.data[0].person.country,response.data[0].person.url);
          fs.appendFile("log.txt","=================================",function(err) {
            if (err) {
              console.log(err);
            }
            else {
              //console.log("Content Added!");
            }
          });
          fs.appendFile("log.txt",myactor.printDetails(),function(err) {
            if (err) {
              console.log("Error inwriting to file",err);
            }
            else {
              console.log("Content Added!");
            }
          });
  }).catch((error) => { console.log("Error in axios call",error)});
}
else {
   var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + term;
   axios.get(URL).then((response)=>{
     //console.log(response.data);
     var myshow = new show(response.data.name,
       response.data.genres,response.data.rating,
       response.data.network.name,response.data.summary);
         fs.appendFile("log.txt","=================================",function(err){
           if(err) {
             console.log("Error in writing to file",err);
           }
         });
       fs.appendFile("log.txt",myshow.printDetails(),function(err){
         if(err) {
           console.log("Error in writing to file",err);
         }
         else{
           console.log("Log created");}
         });

   }).catch((error) => {console.log("Error in axios call",error)});
}
