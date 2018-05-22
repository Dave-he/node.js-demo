/**
 * 使用HTTP提供静态资源服务
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();
server.on('request',function(request,response){
    var url = request.url;
    if(url === '/'){
        //读取相应的静态资源内容
        fs.readFile(path.join(__dirname,'static/index.html'),'utf8',function(err,data){
            //如果出现异常抛出异常
            if (err) {
                throw err;
            } 
            response.end(data); 
        });
    }else if(url === '/login'){
        fs.readFile(path.join(__dirname,'static/register.html'),'utf8',function(err,data){
            if(err){
                throw err;
            }
            response.end(data);
        });
    }else if(url === '/register'){
        fs.readFile(path.join(__dirname,'static/register.html'),'utf8',function(err,data){
            if(err){
                throw err;
            }
            response.end(data);
        });
    }else if(url === 'login.html'){
        fs.readFile(path.join(__dirname,'static/login.html'),'utf8',function(err,data){
            if (err) {
                throw err
            }
            response.end(data);
        });
    }else if(url === '/main.css'){
        var cssPath = path.join(__dirname,'static/main.css')
        fs.readFile(cssPath,'utf8',function(err,data){
            if(err){
                throw err
            }
            response.end(data);
        });
    }else if(url ==='/image/01.jpg'){
        var imgPath = path.join(__dirname,'static/image/01.jpg')
        fs.readFile(imgPath,function(err,data) {
            if(err){
                throw err
            }
            response.end(data);
        });
    }else {
        fs.readFile(path.join(__dirname,'static/404.html'),'utf8',function(err,data){
            if(err){
                throw err
            }
            response.end(data);
        });
    }
});
server.listen(3000,function(){
    console.log('server is listening at port 3000');
});