import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
          <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" className="title">
          <Link to="/product">Product</Link>
          </Typography>
          <Typography variant="h6" className="title">
          <Link to="/cart">Cart</Link>
          </Typography>
          <div className="button">
          <Button color="inherit"><Link to="/login">login</Link></Button>
          <Button color="inherit"> <Link to="/register">Register</Link></Button> 
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
                     
           
        