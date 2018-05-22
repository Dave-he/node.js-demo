var copy = require('./demo4-6');

copy('E:/a.txt','E:/d.txt',function(err){
    if(err){
        return console.log('文件复制失败了');
    }
    console.log('文件复制成功了');
});