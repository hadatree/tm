const Koa = require('Koa')
const HomeRouter = require('./routers/home')
const TeacherRouter = require('./routers/teacher')
const bodyParser = require('koa-bodyparser')
const koaBody = require("koa-body");

const app = new Koa();

app.use(
    koaBody({
        multipart: true
    })
);

app.use(require("koa-static")("public"));
app.use(bodyParser());

app.use(HomeRouter.routes());
app.use(HomeRouter.allowedMethods());

app.use(TeacherRouter.routes());

app.use(TeacherRouter.allowedMethods());



module.exports = app;