const http = require('http');
const fs = require('fs');

let  server = http.createServer();




server.on("request",function(res,rs){
    console.log(res.method)
    
})




server.listen(5555,function(){console.log("127.0.1:5555")})  //0-65535
