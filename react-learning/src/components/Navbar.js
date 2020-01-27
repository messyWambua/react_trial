import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, withStyles} from '../styles/materialUI'
import logo from '../images/logo.png'
import Shows from './Shows';
import Details from './Details';

const styles = () => ({
  logo: {
    maxWidth: '200px',
    maxHeight: '69px',
    display: 'block'
  },
  title: {
    flexGrow: 1,
    marginLeft: '50px',
  }
});

export class Navigation extends Component {
render() {
  const { classes } = this.props
  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
        <Link to="/">
        <img src={logo} className={classes.logo} data-test="logo" />
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography variant="h5" color="textPrimary" data-test="nav-links" className={classes.title}>
            Home
        </Typography>
        </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={Shows} />
        <Route path="/shows/:id" component={Details} />
        </ Switch>
    </Router>
  );
}
}


export default withStyles(styles)(Navigation);