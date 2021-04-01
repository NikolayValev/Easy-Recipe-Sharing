import Grid from '@material-ui/core/Grid'
import Header from "./Header";
import Drawer from "./Drawer";
import Content from "./Content";
import SignIn from "./SignIn";
import SignUp from './SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/*fix the state to remove the the Drawer*/}
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    <Grid container direction="column">
      <Drawer />
    </Grid>
    </Router>
  );
};

export default App;
