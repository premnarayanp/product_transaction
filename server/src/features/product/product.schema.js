import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    sold: Boolean,
    dateOfSale: Date,
    category: String,
    month: Number // New field to store the month
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
