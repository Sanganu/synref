let http = require("http");
let PORT = 8080;
var fs = require("fs");

var requestHandler = function(request,response){
    //response.end("Request handled and response sent"+request.url);
    var path = request.url;
    // fs.readFile(__dirname+request.url,function(err,data){
    //     if(err) throw(err);

    // });
    switch(path){
        case "/":
          return homePage(path,request,response);
        case "/page1":
          return page1Display(path,request,response);
        case "/page2":
          return page2Display(path,request,response);
        case "/serverindex":
          return indexDisplay(path,request,response);
        case "/htmltohtml":
          return requestHandle(`${path}.html`,request,response);
        // case "/2html":
        //   return re '2html.html?username='+"IDname"
        default:
          return defaultPage(path,request,response);
    }
}
var server = http.createServer(requestHandler);

server.listen(PORT,function(){
    console.log("Server Setup - App runnning on ",PORT);
});

function homePage(path,req,res)
{
    var myHTML = "<html>"+
                 "<body><h1>Home Page</h1><a href='/page1'>Page1</a><br /><a href='/page2'>Page2</a>"+
                 "<br /><a href='/serverindex'>Index File</a>"+
                 "<br /><a href='/bn'>Index File</a>"+
                 "<br /><a href='/htmltohtml'>HtmlToHtml</a>"+
                 "</body></html";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(myHTML);
}

function page1Display(path,req,res)
{
    var myHTML = "<html>"+
                "<body><h2>Page1</h2><br /><a href='/'>Home Page</a>"+
                "<br /><a href='serverIndex'>Index File</a>"+
                "<br /><a href='/htmltohtml'>HtmlToHtml</a>"+
                "<br /><a href='/page2'>Page 2</a>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(myHTML);
}

function page2Display(path,req,res)
{
    var myHTML = "<html>"+
                "<body><h2>Page2</h2><br /><a href='/'>Home Page</a>"+
                "<br /><a href='/htmltohtml'>HtmlToHtml</a>"+
                "<br /><a href='serverIndex'>Index File</a>"+
                "<br /><a href='/page1'>Page 1</a>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(myHTML);
}

function indexDisplay(path,req,res)
{
    fs.readFile(__dirname+"/bubblesortindex.html",function(err,data){
        if(err)res.end("Error in fetching data",err);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
    });
}

function defaultPage(path,req,res)
{
    req.on("data",function(data){
        fs.readFile(__dirname+"2html.html",function(err,indexfile){
            if(err)res.end("Error in servning localstorage file!!!",err);
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end({index:indexfile,params:data});
        });
    });
    var errorhtml = "<html><body>"+
                    "<body><h5> Error in fetching the page"+path+
                    "</h5><br/><a href='/'><button>Return to home</button></a></body></html";
    res.end(errorhtml);

}

function requestHandle(path,req,res)
{
    fs.readFile(__dirname+path,function(err,data){
            if(err)res.end("Error in servning localstorage file!!!",err);
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        });
}

