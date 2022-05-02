const mongoose = require('mongoose')
// const { ObjectId } = mongoose.Schema

const userSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: 'Παρακαλώ συμπληρώστε το όνομα Πελάτη.',
        index: true,
    },
    contact: String,
    phone: String,
    email: {
        type: String
    },
    // role: {
    //     type: String,
    //     default: 'subscriber'
    // },
    // cart: {
    //     type: Array,
    //     default: []
    // },
    // address: String,
    // wishList: [{
    //     type: ObjectId,
    //     ref: 'Product'
    // }],
}
)

// we export User based on userSchema model
module.exports = mongoose.model('Customer', userSchema)