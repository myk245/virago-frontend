import React from 'react'; 
import Form from 'react-bootstrap/Form';

class PostForm extends React.Component {
   render() {
      return (
         <div>
            <Form>
               <Form.Group controlId="formGroupEmail">
                  <Form.Label>Your Username: </Form.Label>
                  <Form.Control type="text" placeholder="Enter your username here" />
               </Form.Group>
               <Form.Group controlId="formGroupPassword">
                  <Form.Label>Comment: </Form.Label>
                  <Form.Control type="text" placeholder="Leave a Comment" />
               </Form.Group>
            </Form>
         </div>
      )
   }
}

export default PostForm; 
