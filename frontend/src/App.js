import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import {LoginComponent} from './screens/Login'
import {SignUp} from './screens/SignUp'
import { Home } from './screens/Home';

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact  />
            <Route path="/login" component={LoginComponent} exact />
            <Route path="/signup" component={SignUp} exact  />
            <Route path="/posts/:id" component={LoginComponent} exact  />
            
            {/* {<Route to="/" component={} exact/>} */}
          </Switch>
        </Router>
      </div>

  );
}

export default App;
