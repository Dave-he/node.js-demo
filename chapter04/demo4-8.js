/**
 * 创建目录
 */
var fs = require('fs');
console.log('在C:/Course 目录下创建目录 testDemo4-8');
fs.mkdir('./testDemo4-8.js',function(err){
    if(err){
        return console.error(err);
    }
    console.log('目录创建成功');
});

//fs.readdir(path,callback);