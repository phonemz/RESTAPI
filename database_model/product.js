const mongoose = require('mongoose')
const categoryDB = require("../database_model/category");

const productSchema = new mongoose.Schema(
        {
                name: {
                        type: String,
                        required: true
                },
                price: {
                        type: Number,
                        required: true
                },
                description: {
                        type: String,
                        required: true
                },
                category: {
                        type: mongoose.Schema.Types.ObjectId, ref:'category'
                }
        }
)

module.exports = mongoose.model('product',productSchema)