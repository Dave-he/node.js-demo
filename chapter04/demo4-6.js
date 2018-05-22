var fs = require('fs');

function copy(src,dist,callback){
    fs.readFile(src,function(err,data){
        if(err){
            return callback(err);
        }
        fs.writeFile(dist,data.toString(),function(err){
            if(err){
                return callback(err);
            }
            callback(null);
        });
    });
}
module.exports = copy;