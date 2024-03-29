const { Router } = require('express')
const { ordersController } = require('../controllers/orders.controller')
const {authMiddleware} = require("../middlewares/auth.middleware");
const router = Router()


router.get('', authMiddleware, ordersController.getUserOrders)
router.get('/by_ad/:adId', authMiddleware, ordersController.getAdOrders)
router.get('/:adId', authMiddleware, ordersController.getOrder)
router.post('', authMiddleware, ordersController.postOrder)
router.delete('/:id', authMiddleware, ordersController.deleteOrder)
router.patch('/:id', authMiddleware, ordersController.patchOrder)

module.exports = router;