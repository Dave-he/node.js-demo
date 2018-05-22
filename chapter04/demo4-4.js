var fs = require('fs');

fs.readFile('E:a/txt',function(err,data){
    if(err){
        return console.log('文件读取失败');
    }
    console.log(data.toString());
});