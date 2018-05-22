/**
 * 测试获取终端输入
 */
//通过下面的方式
process.stdin.on('data',function(data){
    console.log(data.toString(),trim());
});