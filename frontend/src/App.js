import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import {LoginComponent} from './screens/Login'
import {SignUp} from './screens/SignUp'
import { Home } from './screens/Home';
import {Profile} from './screens/Profile';
import {NewPost} from './screens/NewPost';
import { UpdatePost } from './screens/UpdatePost';

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
            <Route path="/profile" component={Profile} exact  />
            <Route path="/post/new" component={NewPost} exact  />
            {/* This route of update is using the paramters to get post ID while using routing */}
            <Route path="/update" component={UpdatePost} exact/>
            {/* {<Route to="/" component={} exact/>} */}
          </Switch>
        </Router>
      </div>

  );
}

export default App;
