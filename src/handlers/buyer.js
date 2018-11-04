const client = require('../../lib/redis')()

const handleCreateBuyer = (props, cb) => {
  const id = props.id
  const offers = props.offers

  const multi = client.multi()

  multi.set(`buyer:${id}`, JSON.stringify(props))

  offers.map((offer, i) => {
    let redisKey = `buyer:${id}${i}`
    multi.set(redisKey, JSON.stringify(offer))

    Object.keys(offer.criteria).map(criterion => {
      offer.criteria[criterion].map(element => {
        multi.sadd(`${criterion}:${element}`, redisKey)
      })
    })
  })

  multi.exec(cb)
}

module.exports = {
  handleCreateBuyer
}
