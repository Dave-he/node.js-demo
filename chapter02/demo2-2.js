//加载http模块
var http = require('http');
http.createServer(function(req,res){
    res.end('hello world');
    //监听127.0.0.1端口
}).listen(3000,'127.0.0.1');