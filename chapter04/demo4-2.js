var fs = require('fs');
console.log(1);
fs.writeFile('e:/b.txt','程序员',function(err){
    if(err){
        console.log('不好意思，写入失败');
    }
    console.log(2);

});
console.log(3);