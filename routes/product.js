const express = require('express')
const router = express.Router()

const { read, create, delProduct, getCusProducts, lastOrder } = require('../controllers/product.js')

// router.post("/product", create)  // DEN PAIZEI...
// router.post("/product", (req, res) => { // OUTE AUTO PAIZEI
//     res.json({
//         data: 'you just hit POST product API endpoint'
//     })
// })
router.get("/product/:no", read)
router.post("/product", create)
router.post('/products', getCusProducts)
router.get("/lastOrder", lastOrder)
router.delete("/product", delProduct)
// router.get("/product", (req, res) => {
//     res.json({
//         data: 'you just hit the product API endpoint'
//     })
// })

module.exports = router