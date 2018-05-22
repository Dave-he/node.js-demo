/**
 * 异步代码无法使用try...catch处理异常
 */
function parseJsonStrToObj(str){
    setTimeout(function(){
        return JSON.parse(str);
    },0)
}

try{
    var obj = parseJsonStrToObj('foo');
    console.log('执行结果是'+obj);
}catch(e){
    console.log('转换失败了');
}