/**
 * 使用文件流进行文件复制
 */
var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var writableStream = fs.createWriteStream('output.txt');
readableStream.setEncoding('utf8');
readableStream.on('data',function(chunk){
    writableStream.write(chunk);
});
readableStream.on('error',function(err){
    console.log(err.stack);
});
readableStream.on('end',function(){
    writableStream.end();
});
writableStream.on('error',function(err){
    console.log(err.stack);
});