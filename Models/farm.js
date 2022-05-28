const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall', 'Winter']
  }
});

const Product = mongoose.model('Product', productSchema);

Product.insertMany([
  {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
  {name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer'},
  {name: 'Asparagus', price: 3.99, season: 'Spring'},
]);