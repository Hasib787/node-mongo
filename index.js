const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const users =["Sakib", "Shohan", "Riad", "Rakin", "Nurullah"]
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


app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const name= users[id];
    res.send({id,name});
})


//post
app.post('/addUser', (req, res) =>{
    console.log(req.body);
})

app.listen(3000, ()=> console.log('Listening to port 3000'));