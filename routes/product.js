const express = require('express')
const product = express.Router()

//import database
const Productdb = require('../database_model/product')
const categoryDB = require('../database_model/category')

product.get('/', async (req, res) => {
        try {
                const products = await Productdb.find()
             res.json(products)   
        }
        catch (error) {
                res.json({message: error.message})
        }
})

product.post('/', async (req, res) => {
        try {
                const productmodel = new Productdb({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: categorySchema._id
        })
        const newProduct = await productmodel.save()
        res.json(newProduct)
        }
        catch (error){
               res.json({message: error.message}) 
        }
})

product.get('/:id', async (req, res) => {
        const productID = req.params.id;
        const singleProduct = await Productdb.findById(productID)
        res.json(singleProduct)
})

product.patch('/:id', async (req, res) => {
        try {
                const productID = req.params.id;
                const newProperties = req.body

                const updatedProduct = await Productdb.findByIdAndUpdate(
                        productID,
                        newProperties,
                        { new: true }
                );
                res.status(200).json(updatedProduct)
        }
        catch (error) {
                res.status(500).json({ message: error.message})
        }
})

//delete
product.delete('/:id', async (req, res) => {
        try {
                const productID = req.params.id
                const deletedProduct = await Productdb.findByIdAndRemove(productID) 
                
                res.status(200).json({message: 'Product Deleted Successfully'})   
        }
        catch (error){
              res.status(500).json({message: error.message})  
        }
})

module.exports = product