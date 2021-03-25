const express = require('express');


const app = express();

app.get('/', (req, res) =>{
    const fruit ={
        product: 'laptop',
        price: 550,
        quantity: 1
    }
    res.send(fruit);
})

app.get('/fruit/banana', (req, res) =>{
    res.send({fruit:'banana', quantity:200, price: 2000})
})

app.listen(3000, ()=> console.log('Listening to port 3000'));