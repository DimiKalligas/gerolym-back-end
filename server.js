const express = require('express') // require looks in node_modules
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan') // mas dinei ton HTTP header kai posh wra hreiastike
const cors = require('cors')
const fs = require('fs')
// const {readdirSync} = require('fs')  -- destructure previous line
require('dotenv').config()

// import routes
// const authRoutes = require('./routes/auth') -- superseeded by fs.readdirSync

// app
const app = express()

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => console.log('DB connected'))
  .catch((e) => console.log(`DB CONNECTION ERROR ${e}`))

// middlewares
app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded())
app.use(cors({ origin: '*' }))

// routes middleware
// go through all files in /routes folder
fs.readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

const port = process.env.PORT || 8001
app.listen(port, () => console.log(`Server is running on port ${port}`))
