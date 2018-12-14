let http = require("http");
let PORT = 8080;
var requestHandler = function(request,response){
    //response.end("Request handled and response sent"+request.url);
    var path = request.url;
    switch(path){
        case "/":
          return homePage(path,request,response);
        case "/page1":
          return page1Display(path,request,response);
        case "/page2":
          return page2Display(path,request,response);
    }
}
var server = http.createServer(requestHandler);

server.listen(PORT,function(){
    console.log("Server Setup - App runnning on ",PORT);
});

function homePage(path,req,res)
{
    var myHTML = "<html>"+
                 "<body><h1>Home Page</h1><a href='/page1'>PAge1</a><a href='/page2'>Page2</a>"+
                 "</body></html";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(myHTML);
}

function page1Display(path,req,res)
{
    var myHTML = "<html>"+
                "<body><h2>Page1</h2><br /><a href='/'>Home Page</a>"+
                "<a href='/page2'>Page 2</a>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(myHTML);
}

function page2Display(path,req,res)
{
    var myHTML = "<html>"+
                "<body><h2>Page2</h2><br /><a href='/'>Home Page</a>"+
                "<a href='/page1'>Page 1</a>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(myHTML);
}

