const router = new require('koa-router')()

router.prefix('/404')

router.get('/', async (ctx, next) => {
  ctx.body = '404'
})

module.exports = router