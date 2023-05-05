var http=require("http")
var server=http.createServer(function(request,response)
{
    if(request.url=="/")
    {
        response.writeHead(200,{"Content-type":"text/html"});
        response.write("<h1>Welcome to home page</h1>");
        response.end("<html><body>The url is: "+request.url+"</body></html>");
    }
    else if(request.url=="/student")
    {
        response.writeHead(200,{"Content-type":"text/html"});
        response.write("<h1>Welcome to student page</h1>");
        response.end("<html><body>The url is: "+request.url+"</body></html>");
    }
    else if(request.url=="/admin")
    {
        response.writeHead(200,{"Content-type":"text/html"});
        response.write("<h1>Welcome to admin page</h1>");
        response.end("<html><body>The url is: "+request.url+"</body></html>");
    }
    else{
        response.end("Invalid request");
    }
});
server.listen(3000);