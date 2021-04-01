import React from "react";
import { Grid } from "@material-ui/core";
import RecipesPage from "./RecipesPage";
import About from "./About";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Content = () => {
  return (
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/recipes" component={RecipesPage}/>
        <Route path="/about" component={About}/>
      </Switch>
  );
};

export default Content;