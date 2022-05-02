const express = require('express')
const router = express.Router()

const { create, listAll } = require('../controllers/customer.js')

router.get("/customers", listAll)
router.post("/customer", create)
// router.get("/customer", (req, res) => {
//     res.json({
//         data: 'you just hit the product API endpoint'
//     })
// })

module.exports = router