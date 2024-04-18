const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route')
const app = express()

//env config
require('dotenv').config()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute)


mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to database!')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(() => {
      console.log("Connection failed")
  });

const PORT = 3000



