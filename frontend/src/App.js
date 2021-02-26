import './App.css';
import { Fragment } from 'react';
import {Link, Switch , Router, Route} from 'react-router-dom'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

function App() {
  return (
    <Fragment>
      <div className="App">
        <Router>
          <Switch>
            <Route to="/login" component={Login} exact/>
            <Route to="/signup" component={SignUp} exact/>
            {/* {<Route to="/" component={} exact/>} */}
          </Switch>
        </Router>
      </div>
    </Fragment>
    
  );
}

export default App;
