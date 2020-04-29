import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

class Home extends React.Component {
   render() {
      return (
         <Jumbotron id="jumbotron">
            <h1 class="text-primary">Hello, friend! Welcome to Virago.</h1>
            <br></br>
            <p class="text-muted">Virago is a centralized resource and community support group for mental health care. Explore general mental health wellness tips, get further information on specific disorders, and interact with a community of compassionate people who understand what you're going through. 
            </p>
            <p><em>No matter what you're going through, you're not alone.</em></p>
            <p>
               <Button variant="primary" href="/disorders">Start Exploring Virago</Button>
            </p>
         </Jumbotron>
      )
   }
}

export default Home; 

