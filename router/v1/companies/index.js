const Router = require('koa-router')
const router = new Router()
const response = require('../../../utils/v1res')
const companies = require('../../../mock/companies')

router.prefix('/v1/companies') // 路由层级

router.get('/', async (ctx, next) => {
  const query = ctx.request.query
  // console.log(ctx.request)
  const { productId, authorityName, page, limit } = query
  let res = { ...response, data: { content: companies.list.content, total: companies.list.length } }
  ctx.body = res
  next()
})

router.get('/:id', async (ctx, next) => {
  const query = ctx.request.url.split('/')
  const id = parseInt(query[query.length - 1])
  let res = { ...response, data: { ...companies.detail, id } }
  ctx.body = res
})

router.put('/:id/:status', async (ctx, next) => {
  let res = { ...response }
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

router.delete('/1', async (ctx, next) => {
  const query = ctx.request.query
  let res = { ...response }
  ctx.body = res
})

module.exports = router