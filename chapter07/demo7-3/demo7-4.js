/**
 * 动态处理静态资源
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    console.log(url);
    var fullPath = path.join(__dirname,'static',url);
    if(url ==='/'){
        fullPath = path.join(__dirname,'static/index.html',url);
    }
    fs.readFile(fullPath,function(err,data){
        if(err){
            return res.end(err.message);
        }
        res.end(data);
    });
});
server.listen(3000,function(){
    console.log('server is running at port 3000');
});