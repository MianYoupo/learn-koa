const Koa = require("koa");
const app = new Koa();

const KoaBody = require("koa-body");
app.use(KoaBody());

const userRouter = require("../router/user.route");
app.use(userRouter.routes());

module.exprts = app;
