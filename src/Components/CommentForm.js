import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import { API_BASE } from '../constants'; 

const initialState = {
   content: ""
}

class CommentForm extends React.Component {
   state = initialState

   handleChange = (event) => {
      this.setState({
         content: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()

      fetch(`${API_BASE}/comments`, {
         method: 'POST', 
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }, 
         // hard-coding the user id for now until we figure out how to log in
         body: JSON.stringify({
            ...this.state,
            user_id: 1,
            post_id: this.props.postId, 
         }, ['name'])
      })
      .then(resp => resp.json())
      .then(newComment => this.props.handleNewComment(newComment))
      this.setState(initialState)
   }

   render() {
      return (
         <div>
            <Form>
               {/* <Form.Group>
                  <Form.Label>Your Username: </Form.Label>
                  <Form.Control type="text" placeholder="Enter your username here" />
               </Form.Group> */}
               <Form.Group>
                  <Form.Label>Comment: </Form.Label>
                  <Form.Control type="text" name="content" placeholder="Leave a Comment" />
               </Form.Group>
               <Button variant="outline-primary" type="submit" onClick={this.props.handleNewComment}>Submit</Button>
            </Form>
         </div>
      )
   }
}

export default CommentForm; 