import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import { API_BASE } from '../constants'; 
// import { Dropdown } from 'semantic-ui-react'; 

const initialState = {
   title: "",
   content: "",
   image_url: "",
   likes: 0, 
   tags: [] //each tag is comprised of a disorder_id and post_id
}

const tagOptions = [
   { key: 1, text: "Anxiety Disorders", value: "Anxiety Disorders" }, // id:1
   { key: 2, text: "Clinical Depression", value: "Clinical Depression" }, // id:2
   { key: 3, text: "Disassociative Disorder", value: "Disassociative Disorder" },// id:3
   { key: 4, text: "Bipolar Disorder", value: "Bipolar Disorder" },// id:4
   { key: 5, text: "Obsessive-Compulsive Disorder", value: "Obsessive-Compulsive Disorder" },// id:5 
   { key: 6, text: "Borderline Personality Disorder", value: "Borderline Personality Disorder" },// id:6
   { key: 7, text: "Post-Traumatic Stress Disorder", value: "Post-Traumatic Stress Disorder" },// id:7
   { key: 8, text: "Schizophrenia", value: "Schizophrenia" }// id:8
]

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
         <div className="center-container">
            <br></br>
            <h4>Create a Post:</h4>
            <Form className="center-container" style={{ width: '50rem' }}>
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
