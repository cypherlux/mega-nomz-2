import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import recipes from './data/recipes.js';
const port = process.env.PORT || 5000;


const app = express();

app.get('/', (req, res) => {
    res.send("API is running...");
});

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

app.get('/api/recipes/:id', (req,res) => {
    const recipe = recipes.find((r) => r._id === req.params.id);
    res.json(recipe);
});

app.listen(port, () => console.log(`Server running on port ${port}.`))