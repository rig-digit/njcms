const Router = require('koa-router')
const router = new Router()
const cCtrl = require('../controllers/customers')

router.get('/', cCtrl.getAllCustomers)
router.get('/:id', cCtrl.getSpecificCustomer)

module.exports = router.routes()