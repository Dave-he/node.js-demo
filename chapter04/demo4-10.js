/**
 * 删除目录
 */

 var fs = require('fs');
    console.log('读取目录');
    fs.readdir('./test/',function(err,files){
        if(err){
            return console.error(err);
        }
        files.forEach(function(file){
            console.log(file);
            fs.unlink('./test/' +file,function(err){
                if(err){
                    return console.error(err);
                }
                console.log(file + '文件删除成功!');
            });
        });
        console.log('....../test/');
        fs.rmdir('./test/',function(err){
            if (err) {
                return console.error(err);
            }
            console.log('目录删除成功！');
        });
    });