//import required libraries
const express = require('express');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

//create an express app
const app = express()
app.use(bodyParser.json())

// Create a SQLite database using Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'recipes.db',
});
  
// Define a Recipe model
const Recipe = sequelize.define('recipe', {
    name: { type: Sequelize.STRING, allowNull: false },
    ingredients: Sequelize.STRING,
    instructions: Sequelize.TEXT,
});
  
  // Synchronize the model with the database
sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

// Middleware to handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
  

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})