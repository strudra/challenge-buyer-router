'use strict'
const body = require('body/json')
const sendJson = require('send-data/json')

const { filterAttributes } = require('./helpers')

const { handleCreateBuyer } = require('./handlers/buyer')

const addBuyer = (req, res, opt, cb) => {
  body(req, res, (err, params) => {
    if (err) return cb(err)
    if (!params) return cb(new Error('body not passed through'))

    // security: stops clients from submitting more props
    const filteredParams = filterAttributes(params, 'id', 'offers')

    handleCreateBuyer(filteredParams, () => {
      sendJson(req, res, {
        body: {},
        statusCode: 201
      })
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
