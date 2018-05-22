/**
 * 从流中读取数据
 */

 var fs = require("fs");
 var total = '';
 var readableStream = fs.createReadStream('input.txt');
 readableStream.setEncoding('UTF8');
 readableStream.on('data',function(chunk){
     total += chunk;
 });
 readableStream.on('end',function(){
     console.log(total);
 });
 readableStream.on('error',function(err){
     console.log(err.stack);
 });
 console.log("程序执行完毕");