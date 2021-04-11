import React from "react";
import { Grid } from "@material-ui/core";
import RecipeCard from "./RecipeCard";
import recepieList from "./constants";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const RecipesPage = () => {
  const getrecipeCard = recipeObj => {
    return (
      <Grid item xs={12} sm={4}>
        <RecipeCard {...recipeObj} />
      </Grid>
    );
  };

  return (
      <Grid container spacing={2}>
        {recepieList.map(recipeObj => getrecipeCard(recipeObj))}
      </Grid>
  );
};

export default RecipesPage;