let http = require("http");
let PORT = 8080;
var requestHandler = function(request,response){
    response.end("Request handled and response sent"+request.url);
}
var server = http.createServer(requestHandler);

server.listen(PORT,function(){
    console.log("Server Setup");
})
