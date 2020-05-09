const http = require('http');
const fs = require('fs');

let  server = http.createServer();




server.on("request",function(res,rs){
    console.log(res.method)
    let url = res.url;
    console.log(url)
    if(url === "/"){
        rs.setHeader("Content-type","text/html;charset=utf-8")
        fs.readFile("index.html","utf-8",(err,res)=>{
            if(res){
                rs.end(res);
            }
        })
    }else{
        url = "."+url;
        fs.readFile(url,(err,res)=>{
            if(res){
                rs.end(res);
            }
        })
    }
    
})






server.listen(5555,function(){console.log("127.0.1:5555")})  //0-65535
