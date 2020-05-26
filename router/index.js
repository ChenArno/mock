const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

resgisterRouter = () => {
  let routers = []
  glob.sync(resolve(__dirname, './', '**/*.js'))
    .filter(value => {
      return (value.indexOf('router/index.js') === -1)
    })
    .map(router => {
      routers.push(require(router).routes())
      routers.push(require(router).allowedMethods())
    })
  return compose(routers)
}

module.exports = resgisterRouter