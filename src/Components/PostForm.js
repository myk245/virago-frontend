import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import {API_BASE} from '../constants'

const initialState = {
   title: "",
   content: "",
   image_url: "",
   likes: 0
}

class PostForm extends React.Component {
   state = initialState

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()

      fetch(`${API_BASE}/posts`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         },
         // randomly generating user id for now until we figure out how to log in
         body: JSON.stringify({
            ...this.state,
            user_id: Math.floor(Math.random() * 5) + 1,
         })
      })
         .then(resp => resp.json())
         .then(newPost => {
            this.props.handleNewPost(newPost)
         })
      .then(this.setState(initialState))
   }

   render() {
      return (
         <div>
            <h4>Create a Post:</h4>
            <Form>
               <Form.Group>
                  <Form.Label>Title: </Form.Label>
                  <Form.Control type="text" name="title" value={this.state.title} placeholder="Give your post a title!" onChange={this.handleChange} />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Post Content: </Form.Label>
                  <Form.Control type="text" name="content" value={this.state.content} placeholder="Tell us what's on your mind..." onChange={this.handleChange} />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Image: </Form.Label>
                  <Form.Control type="text" name="image_url" value={this.state.image_url} placeholder="Image URL here" onChange={this.handleChange} />
               </Form.Group>
               <Button variant="outline-info" size="sm" type="submit" onClick={this.handleSubmit}>Submit Post</Button>
            </Form>
         </div>
      )
   }
}

export default PostForm; 
