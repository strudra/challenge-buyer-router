const body = require('body/json')
const sendJson = require('send-data/json')

const { filterAttributes } = require('./helpers')

const addBuyer = (req, res, opt, cb) => {
  body(req, res, (err, params) => {
    if (err) return cb(err)
    if (!params) return cb(new Error('body not passed through'))

    // security: stops clients from submitting more props
    const filteredParams = filterAttributes(params, 'id', 'offers')

    // TODO: create buyer in REDIS
    sendJson(req, res, {
      body: {
        id: filteredParams.id,
        criteria: JSON.stringify(filteredParams.offers[0].criteria),
        value: filteredParams.offers[0].value,
        location: filteredParams.offers[0].location
      },
      statusCode: 201
    })
  })
}

const getBuyerWithId = (req, res, opt, cb) => {

}

const getRoute = (req, res, opt, cb) => {

}

module.exports = {
  addBuyer,
  getBuyerWithId,
  getRoute
}
