var fs = require('fs');
fs.stat('E:/a.txt',function(err,stats){
    console.log("是否是文件"+stats.isFile());
    console.log(stats);
})