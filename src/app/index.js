const Koa = require('koa')
const app = new Koa()

const KoaBody = require('koa-body')
app.use(
  KoaBody()
)

const userRouter = require('../router/user.route')
app.use(userRouter.routes())

//统一错误处理
const errHandler = require('./errHandler')
app.on('error', errHandler)

module.exports = app