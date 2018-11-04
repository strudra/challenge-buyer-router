const filterAttributes = (obj, ...props) => {
  return Object.assign({}, ...props.map(prop => {
    if (obj[prop]) return { [prop]: obj[prop] }
  }))
}

module.exports = {
  filterAttributes
}
