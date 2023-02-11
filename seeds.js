const mongoose = require('mongoose');
const Product = require('./models/product');

db = mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => {
    console.log("Connection OPEN!!!");
})
.catch(err => {
    console.log("Connection ERROR!!!");
    console.log(err);
});

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p);
// })
// .then(p => {
//     console.log(p);
// })
// .catch(e => {
//     console.log(e);
// });

const seedProducts = [
    {
        name: 'Ruby Grapefruit',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Emerald Grapefruit',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Sapphire Grapefruit',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 4.99,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Bread',
        price: 5.99,
        category: 'Dairy'
    }
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    });