/**
 * 二进制数据和乱码
 */
var fs = require('fs');
fs.readFile('./demo5-1/test.txt',function(err,data){
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});