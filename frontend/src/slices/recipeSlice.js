import { RECIPES_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const recipeSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => ({
                url: RECIPES_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getRecipeDetails: builder.query({
            query: (recipeId) => ({
                url: `${RECIPES_URL}/${recipeId}`,
            }),
            keepUnusedDataFor: 5
        }),
    }),
});




export const { useGetRecipesQuery, useGetRecipeDetailsQuery } = recipeSlice;
