var path = require('path')
module.exports = {
    port :3000,
    host :"127.0.0.1",
    viewPath: path.join(_dirname,'views'),
    uploadPath: path.join(_dirname,'uploads')
}