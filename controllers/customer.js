const Customer = require('../models/customer')

// export const register = async (req, res) => {
//     console.log(req.body);

exports.create = async (req, res) => {
    const { cname, contact, phone, email } = req.body

    console.log('IN CREATE CONTROLLER!')
    let userExist = await Customer.findOne({ cname }).exec()
    if (userExist) return res.status(405).send('Σφάλμα: το όνομα υπάρχει ήδη.')

    try {
        const newCustomer = await new Customer({ cname, contact, phone, email })
            .save()
        // console.log(('customer Created', newCustomer));
        res.json(newCustomer)
    } catch (err) {
        console.log('*****************')
        console.log('Controller error:', err.message);
        return res.status(400).json({ err: err.message })
    }
}

exports.listAll = async (req, res) => {
    try {
        let customers = await Customer.find({}) // .populate('category')
            // .limit(parseInt(req.params.count)) // count from route
            // .populate('category') // mongo for 'join'
            // .populate('subs') // same
            .sort([['cname', 'asc']])
            .exec()
        console.log(customers)
        res.status(200).json(customers)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}