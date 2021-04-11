import { AppBar, makeStyles, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import KitchenIcon from '@material-ui/icons/Kitchen';
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";

const useStyles = makeStyles(() => ({
  menuButton: {
    marginRight: 5,
  },
  title: {
    flexGrow: 1,
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Easy Recipes
        </Typography>
        <KitchenIcon/>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
export default Header;