const http=require("http");

let server=http.createServer(function(req,res){
    res.end("server is started");
})

server.listen(3000);