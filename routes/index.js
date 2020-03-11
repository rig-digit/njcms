module.exports = (router) => {
  router.prefix('/v1')
  router.use('/customers', require('./customers'))
}
