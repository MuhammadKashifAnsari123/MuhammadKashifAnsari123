const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require('stripe')(process.env.API_SECRET_KEY)
const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello payment");
});

app.post("/payment",async (req, res) => {
    const product = await stripe.products.create({
      name:"t-shirt",  
    })
    console.log(product.name);
    if(product){
      var price = await stripe.prices.create({
        product: `${product.id}`,
        unit_amount: 100 * 100,
        currency:"inr",

      })
    }
    console.log(price.id);

    if(price.id){
      var session = await stripe.checkout.sessions.create({
        line_items:[
          {
            price:price.id,
            quantity:1,
          }
        ],
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel",
        customer_email:"demo@gmail.com"
      })
    }
    res.json(session)
}) 


app.listen(3000,() => {
    console.log('Server Running on port 3000')
})