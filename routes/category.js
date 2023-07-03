const express = require('express')
const category = express.Router()

const categoryDB = require("../database_model/category");

category.get('/', async (req, res) => {
        try {
                const categories = await categoryDB.find()
                res.json(categories)
        }
        catch(error) {
                res.status(500).json({message : error.message})
        }
})

category.get('/:id', async (req, res) => {
        try {
                const catID = req.params.id
                const singleCategory = await categoryDB.findById(catID)
                res.json(singleCategory)
        }
        catch (error) {
                res.status(500).json({ message: error.message})
        }
})

category.post('/', async (req, res) => {
        try {
                const catmodel = new categoryDB({
                       name:req.body.name
                }) 
                const newCat = await catmodel.save()
                res.json(newCat)
        }
        catch (error){
                res.status(500).json({message: error.message})
        }
})

category.patch('/:id', async (req, res) => {
        try {
                const catID = req.params.id
                const propertiesToBeUpdated = req.body
                const updateCategory = await categoryDB.findByIdAndUpdate(
                        catID,
                        propertiesToBeUpdated,
                        {new :true}
                )
                res.json(updateCategory)
        }
        catch (error) {
                res.status(500).json({message: error.message})
        }
})

category.delete('/:id', async (req, res) => {
        try {
                const catID = req.params.id
                const deleteCategory = await categoryDB.findByIdAndDelete(catID)
                res.status(200).json({message:'Category Deleted Successfully'})
        }
        catch (error) {
                res.status(500).json({message: error.message,});

        }
})

module.exports = category