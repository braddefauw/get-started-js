//import required libraries
const express = require('express');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

//create an express app
const app = express()
app.use(bodyParser.json())

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})