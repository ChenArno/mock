const Koa = require('koa')

const resgisterRouter = require('./router')

const app = new Koa()
const bodyParser = require('koa-bodyparser')
const serve = require("koa-static");
const static = require('koa-static-router');
const PORT = 3000

// 跨域设置
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});
app.use(bodyParser())
app.use(resgisterRouter())
// app.use(async (ctx, next) => {
//   await next()
//   ctx.body = 'hello world'
// })
//适配vue history的中间件
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
// handle fallback for HTML5 history API
app.use(historyApiFallback({
  index: '/index.html'
}))

// app.use(serve(__dirname + "/dist", { extensions: ['html'] }));
// app.use(static([{
//   dir: "dist",
//   router: '/'
// }, {
//   dir: "doc",
//   router: '/doc'
// }]))

// app.use(async (ctx, next) => {
//   await next();
//   if (parseInt(ctx.status) === 404) {
//     ctx.response.redirect("/404")
//   }
// })

app.listen(PORT, () => {
  console.log('this server is running at http://localhost:' + PORT)
})
