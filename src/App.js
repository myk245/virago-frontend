import React from 'react';
import './App.css';
import './Styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import NavBar from './Components/NavBar';
import DisordersContainer from './Containers/DisordersContainer';
import PostsContainer from './Containers/PostsContainer';
  
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route exact path='/disorders' component={DisordersContainer} />
          <Route exact path='/posts' component={PostsContainer} />
        </div>
    </Router>
    );
  }
}

export default App;
