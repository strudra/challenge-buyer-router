'use strict'
const api = require('./api')

const configureRoutes = router => {
  router.set('/buyers', { POST: api.addBuyer })
  router.set('/buyers/:id', { GET: api.getBuyerWithId })
  router.set('/route', { GET: api.getRoute })
}

module.exports = { configureRoutes }
