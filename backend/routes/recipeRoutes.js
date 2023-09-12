import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Recipe from '../models/recipeModel.js'

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const recipes = await Recipe.find({});
      res.json(recipes);
    })
  );

  router.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const recipe = await Recipe.findById(req.params.id);
      if (recipe) {
        return res.json(recipe);
      } else {
        res.status(404);
        throw new Error('Resource not found');
      }
    })
  );
  
  export default router;
