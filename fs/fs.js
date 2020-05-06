const fs = require('fs')
fs.readFile("2.json","utf-8",(err,res)=>{
    if(err)console.log( err,"错误");
    writeFile("1.json",res,()=>{})
})

fs.writeFile("password.txt","蓝天白云node",()=>{})
function writeFile(file,content,fn){
    fs.writeFile(file,content,fn)
}