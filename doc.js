const Koa = require('koa')
const app = new Koa()

const serve = require("koa-static");

app.use(serve(__dirname + "/doc", { extensions: ['html'] }));

app.listen(3001, () => {
  console.log('this server is running at http://localhost:' + 3001)
})
