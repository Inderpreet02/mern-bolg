import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/TopBar';
import SinglePage from './pages/single/SinglePage';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Write from './pages/create/Write';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {

  const {user} = useContext(Context)
  return (
    <div className="App">
        <Router>
          <TopBar/> 
          <Switch>
            <Route path="/login">
              {user ? <Home/> : <Login/>}
            </Route>
            <Route path="/register">
              {user ? <Home/> : <Register/>}
            </Route>
            <Route path="/settings">
              <Setting />
            </Route>
            <Route path="/create">
              {user ? <Write/> : <Register/>}
            </Route>
            <Route path="/post/:id">
              <SinglePage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
