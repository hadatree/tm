const Router = require('koa-router')

const UserModel = require("../models/user");
const crypto = require("crypto");

const router = new Router();

// 注册
router
    .post("/api/register", async ctx => {
        // 获取客户端发送过来的post数据
        // var postData = ctx.request.body;
        console.log(ctx.request.body)
        let { username, email, password, repasswd } = ctx.request.body;
        // 两次密码不一致
        if (password !== repasswd) {
            ctx.body = { state: 103, msg: "密码不一致" };
            return;
        }
        // 用户名已被注册
        let user = await UserModel.findOne({ username });
        // user 为 null 表示 用户名没被注册过
        // user 为 对象 表示 用户名已被注册过
        if (user) {
            ctx.body = { state: 101, msg: "用户名已被注册过" };
            return;
        }
        // 邮箱已被注册过
        user = await UserModel.findOne({ email });
        if (user) {
            ctx.body = { state: 102, msg: "邮箱已被注册过" };
            return;
        }
        // 代码执行到这 表示 可以注册
        // 将密码加密后 保存到数据库
        let md5 = crypto.createHash("md5");
        md5.update(password);
        password = md5.digest("hex");
        user = await new UserModel({ username, email, password }).save();
        // 如果插入成功 会将新插入的文档对象 返回
        // 就可以根据user的值 是否为null来判断 结果
        if (user) {
            ctx.body = { state: 200, msg: "注册成功" };
        } else {
            ctx.body = { state: 104, msg: "注册失败，网络超时" };
        }
    });

// 登录
router
    .post("/api/login", async ctx => {
        console.log(ctx.request.body);
        let { username, password } = ctx.request.body;
        // 以加密后的密码 去和 数据库 数据比对
        let md5 = crypto.createHash("md5");
        md5.update(password);
        password = md5.digest("hex");
        let user = await UserModel.findOne({ username, password });
        if (user) {

            ctx.body = { state: 200, msg: "登录成功", username };

        } else {
            ctx.body = { state: 301, msg: "用户名或密码错误" };
        }
    });


module.exports = router;