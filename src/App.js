import React from 'react';
import './App.css';
import './Styles.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
// import Auth from './Containers/Auth';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import NavBar from './Components/NavBar';
import DisordersContainer from './Containers/DisordersContainer';
import PostsContainer from './Containers/PostsContainer';
import { API_BASE } from './constants';

class App extends React.Component {
  state = {
    disorders: []
  }

  componentDidMount() {
    fetch(`${API_BASE}/disorders`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          disorders: data 
        })
      })
  }

  render() {
    console.log(this.state.disorders)
    return (
        <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
          <Route path='/disorders' render={routerProps => <DisordersContainer {...routerProps} disorders={this.state.disorders} />} />
            <Route path='/posts' component={PostsContainer} />
          </Switch>
        </div>
    );
  }
}

export default App;
