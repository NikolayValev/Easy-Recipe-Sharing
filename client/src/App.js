import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import Header from "./Header";
import Drawer from "./Drawer";
import Content from "./Content";
import SignIn from "./SignIn";
import SignUp from './SignUp';
import Landing from "./Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";

function componentDidMount() {
  // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}

const callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
};
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
render(){
  return (
     <Provider store={store}>
    <Router>
      {/*fix the state to remove the Drawer*/}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>

    {/*<Grid container direction="column">
      <Drawer />
    </Grid>
  */}
    </Router>
    </Provider>
  );
}
};

export default App;
