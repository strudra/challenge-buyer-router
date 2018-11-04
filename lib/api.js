const sendJson = require('send-data/json')

module.exports = {
  pingPong
}

function pingPong (req, res, opt, cb) {
  const initialResponse = { ping: 'pong' }
  sendJson(req, res, {
    body: initialResponse,
    statusCode: 201
  })
}
