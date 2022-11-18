const express = require('express');
const app = express();

const cors =require('cors');
app.use(cors());
const port =process.env.PORT || 5000;




const categories = require('./data/categories.json');
const course = require('./data/product.json');

app.get('/',(req,res) => {
res.send('Course ApI Running');
}); 
app.get('/categories',(req,res) => {
res.send(categories);
}); 

const courseCollection = require("./Data/product.json");

app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = courseCollection?.find((p) => p.id == id);
    if (!getSingleItem) {
      res.send(" pai nai");
    }
    res.send(getSingleItem);
  });







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })  