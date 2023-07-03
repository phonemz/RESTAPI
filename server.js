//import experss
const express = require('express')
const app = express()

//import product database

//import product router
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')

//connect database
const mongoose = require('mongoose')
const database_url = "mongodb+srv://admin:admin4321@restapi.bken2az.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(database_url)
const db = mongoose.connection
db.on('error', (error) => {
        console.error(error)
})
db.once('open', () => {
        console.log('Database connected')
})

//middle to parse json
app.use(express.json());


app.get('/', (req, res) => {
        res.send('Hello World')
})

app.use('/product', productRouter)
app.use('/category', categoryRouter)

app.listen(4002, () => {
        console.log('Server Ready')
})