const Router = require("koa-router");
const path = require("path");
const TeacherModel = require("../models/teacher");
const ObjectId = require("mongoose").Types.ObjectId;
const multer = require('koa-multer');
const router = new Router();
const fs = require('fs')


// 讲师列表
// router.use(async function(ctx, next) {
//     // ignore non-POSTs
//     console.log(ctx.request)
//     if ('/api/teacher/add' == ctx.request.url) {
//         const file = ctx.request.files.file;
//         console.log(file)
//         const stream = fs.createWriteStream(path.join(__dirname,'../uploads'));
//         reader.pipe(stream);
//         console.log('uploading %s -> %s', file.name, stream.path);
//         return await next()
//     };
//     return await next()

//   });


router
    .post("/api/teacher/list", async ctx => {
        let teachers = await TeacherModel.find({});
        ctx.body = { data: teachers };
    });

router
    .post("/api/teacher/add", async ctx => {

        // 上传单个文件
        const file = ctx.request.files.avatar; // 获取上传文件
        // 创建可读流
        const reader = fs.createReadStream(file.path);
        let filePath = path.join(__dirname, '../public/uploads/') + `photo${file.name}`;
        // 创建可写流
        const upStream = fs.createWriteStream(filePath);
        // 可读流通过管道写入可写流
        reader.pipe(upStream);
        // var teacherInfo = {...req.body, avatar: uploadPath + req.file.filename };
        var data = ctx.request.body;
        data.avatar = "/tm-server/public/uploads/photo" + file.name;
        console.log(data)
        var teacher = await new TeacherModel(data).save();
        if (teacher) {
            ctx.body = { state: 200, msg: "添加成功" };
        } else {
            ctx.body = { state: 401, msg: "添加失败" };
        }
    });

router.post("/api/teacher/del", async ctx => {
    let { _id } = ctx.request.body;
    let res = await TeacherModel.deleteOne({ _id: ObjectId(_id) });
    if (res.ok && res.n) {
        ctx.body = { state: 200, msg: "删除成功" };
        return;
    }
    ctx.body = { state: 501, msg: "删除失败" };
});

//get是前端不能发送数据 只能后端发送
router
    .get("/api/teacher/edit", async ctx => {
        let teacher = await TeacherModel.find({});
        ctx.body = { teacher };
    })
    .post("/api/teacher/edit", async ctx => {

        const file = ctx.request.files.avatar; // 获取上传文件
        // 创建可读流
        const reader = fs.createReadStream(file.path);
        let filePath = path.join(__dirname, '../public/uploads/') + `photo${file.name}`;
        // 创建可写流
        const upStream = fs.createWriteStream(filePath);
        // 可读流通过管道写入可写流
        reader.pipe(upStream);
        var data = ctx.request.body;
        data.avatar = "/tm-server/public/uploads/photo" + file.name;

        let _id = ObjectId(data._id);
        delete data._id;
        let res = await TeacherModel.updateOne({ _id }, { $set: {...data } });

        if (res.ok && res.n) {
            ctx.body = { state: 200, msg: "修改成功" };
            return;
        }
        ctx.body = { state: 601, msg: "修改失败" };
    });


module.exports = router;

// function uploadFile(src, dest) {
//     let rs = fs.createReadStream(src);
//     let ws = fs.createWriteStream(dest);
//     rs.pipe(ws);
// }