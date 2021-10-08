import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import { API_BASE } from '../constants'; 

// each tag is comprised of a disorder_id and post_id
const initialState = {
   title: "",
   content: "",
   image_url: "",
   likes: 0, 
   disorder_ids: []
}

class PostForm extends React.Component {
   state = initialState

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSelect = (event) => {
      let options = event.target.options;
      let disorder_ids = [];
      for (let i = 0, l = options.length; i < l; i++) { 
         if (options[i].selected) {
            disorder_ids.push(parseInt(options[i].value))
         }
      }
      this.setState({
         disorder_ids: disorder_ids
      }
      )
   }

   handleSubmit = (event) => {
      event.preventDefault()

      fetch(`${API_BASE}/posts`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         },
         // randomly generating user id for now until we implement auth
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
      .then(this.props.toggleDisplayPostForm)
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
               <Form>
                  <Form.Group controlId="exampleForm.SelectCustom">
                     <Form.Label>Tag Your Post (press and hold the cmd button while selecting to select multiple tags):</Form.Label>
                     <Form.Control as="select" multiple={true} custom name="disorder_ids" onChange={this.handleSelect}>
                        {this.props.disorders.map(disorder =>
                           <option key={disorder.id} value={disorder.id}>{disorder.name}</option>
                        )}
                     </Form.Control>
                  </Form.Group>
               </Form>
               <Button variant="outline-info" size="sm" type="submit" onClick={this.handleSubmit}>Submit Post</Button>
            </Form>
         </div>
      )
   }
}

export default PostForm; 
