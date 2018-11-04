const api = require('./api')

const configureRoutes = (router) => {
  router.set('/hi', { GET: api.pingPong })
}

module.exports = { configureRoutes }

