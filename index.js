const express = require('express')
const app = express()
require('dotenv').config()
const CategoryRouter = require('./API/Category/Router')
const brandrouter = require('./API/brand/router')
const productsrouter = require('./API/products/router')
const usersRouter = require('./API/users/Router')

const port = process.env.SERVER_PORT || 3500

app.use(express.json())
app.use('/api', CategoryRouter)
app.use('/api', brandrouter)
app.use('/api', usersRouter)
app.use('/api', productsrouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})