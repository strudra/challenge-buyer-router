'use strict'
const URL = require('url')
const http = require('http')
const sendJson = require('send-data/json')

const router = require('http-hash-router')()

const { configureRoutes } = require('../src/routes')
configureRoutes(router)

module.exports = () => http.createServer(handler)

const handler = (req, res) => {
  router(req, res, { query: getQuery(req.url) }, onError.bind(null, req, res))
}

const onError = (req, res, err) => {
  if (!err) return

  res.statusCode = err.statusCode || 500

  sendJson(req, res, {
    error: err.message || http.STATUS_CODES[res.statusCode]
  })
}

const getQuery = (urlPath) => {
  return URL.parse(urlPath, true).query
}
