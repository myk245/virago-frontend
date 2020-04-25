import React from 'react';
import './App.css';
import './Styles.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import MainContainer from './Containers/MainContainer';
import Auth from './Containers/Auth';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import NavBar from './Components/NavBar';
import DisordersContainer from './Containers/DisordersContainer';
import PostsContainer from './Containers/PostsContainer';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <NavBar />
        <Switch>
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route path='/disorders' component={DisordersContainer} />
          <Route path='/posts' component={PostsContainer} />
          <Route exact path='/' component={Home} />
        </Switch>
        </div>
    );
  }
}

export default App;
