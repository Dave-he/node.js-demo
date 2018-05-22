var fs = require('fs');

fs.readFile('./lrc.txt',function(err,data){
    if(err){
        return console.log('读取文件失败了');
    }
    data = data.toString();
    var lines = data.split('\n');

    var reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s*(.+)/;
    for (var index = 0; index < lines.length; index++) {
        (function(index){
            var line = lines[index];
            var matches = reg.exec(line);
            if(matches){
                var m = parseFloat(matches[1]);
                var s = parseFloat(matches[2]);
                var ms = parseFloat(matches[3]);
                var content = matches[4];
                var time = m* 60 *1000 +s*1000+ms;
                setTimeout(function(){
                    console.log(content);
                },time);
            }
        })(index);     
    }
});