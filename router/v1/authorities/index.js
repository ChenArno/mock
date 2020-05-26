const Router = require('koa-router')
const router = new Router()
const response = require('../../../utils/v1res')
const authorities = require('../../../mock/authorities')

router.prefix('/v1/authorities') // 路由层级

router.get('/', async (ctx, next) => {
  const query = ctx.request.query
  // console.log(ctx.request)

  const { productId, authorityName, page, limit } = query
  let res = { ...response, data: { content: authorities.list.content, total: authorities.list.length } }
  ctx.body = res
  next()
})

router.get('/:id', async (ctx, next) => {
  const query = ctx.request.url.split('/')
  const id = parseInt(query[query.length - 1])
  let res = { ...response, data: { ...authorities.detail, id } }
  ctx.body = res
})

router.put('/', async (ctx, next) => {
  const body = ctx.request.body
  console.log(body)
  const { parentId, productId, authorityName, authorityType, authorityCode, orderNum } = body
  let res = { ...response }
  ctx.body = res
})

router.post('/', async (ctx, next) => {
  const body = ctx.request.body
  console.log(body)
  const { id, parentId, productId, authorityName, authorityType, authorityCode, orderNum } = body
  let res = { ...response }
  ctx.body = res
})

router.delete('/:id', async (ctx, next) => {
  const query = ctx.request.query
  let res = { ...response }
  ctx.body = res
})

module.exports = router