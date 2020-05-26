const Router = require('koa-router')
const user = require('../../mock/user')
const router = new Router()
const response = require('../../utils/response')

router.prefix('/ett/user') // 路由层级
// http://localhost:3000/home/12/ikcamp

// 增加如下代码
// router.get('/home/:id/:name', async(ctx, next)=>{
//   console.log(ctx.params)
//   ctx.response.body = '<h1>HOME page /:id/:name</h1>'
// })
router.get('/queryDeptUserList', async (ctx, next) => {
  // get请求 querystring
  const query = ctx.request.query
  // console.log(query.pageSize)

  let res = { ...response, data: user.list, count: user.length }
  ctx.body = res
})
router.get('/queryDeptUserDetail', async (ctx, next) => {
  // get请求 querystring
  const query = ctx.request.query
  // console.log(query.pageSize)

  let res = { ...response, data: user.queryById, count: user.length }
  ctx.body = res
})
router.post('/addDeptUser', async (ctx, next) => {
  // get请求 querystring
  const body = ctx.request.body
  // ctx.body =  ctx.request.body // post请求
  let res = { ...response, msg: '用户添加成功' }
  ctx.body = res
})
router.post('/updateDeptUser', async (ctx, next) => {
  // get请求 querystring
  const body = ctx.request.body
  // ctx.body =  ctx.request.body // post请求
  let res = { ...response, msg: '用户修改成功' }
  ctx.body = res
})
router.post('/deleteDeptUser', async (ctx, next) => {
  // get请求 querystring
  const body = ctx.request.body
  // ctx.body =  ctx.request.body // post请求
  let res = { ...response, msg: '用户修改成功' }
  ctx.body = res
})
router.get('/', async (ctx, next) => {
  ctx.body = { code: 0, msg: '查询成功', data: {} }
})

module.exports = router
