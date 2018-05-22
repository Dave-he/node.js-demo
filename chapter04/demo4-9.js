/**
 * 读取目录 异步readdir(path,callback);
 */

 var fs = require('fs');
 console.log('当前目录');
 fs.readdir('./',function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function (file){
        console.log(file);
    });
 });

