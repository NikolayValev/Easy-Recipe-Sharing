import Grid from '@material-ui/core/Grid'
import Header from "./Header";
import Drawer from "./Drawer";
import Content from "./Content";
import SignIn from "./SignIn";
import SignUp from './SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

let state = {
    data: null
  };

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
