const mongoose = require('mongoose')
const app = require('./app')


mongoose.connect('mongodb://localhost/tmm', err => {
    if (err) {
        return console.error("数据库连接失败")
    }
    app.listen(8888, () => {
        console.log("server running");
    })
})