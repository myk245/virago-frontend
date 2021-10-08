import React from 'react'; 
import { API_BASE } from '../constants';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import CommentForm from '../Components/CommentForm'
import CommentCard from './CommentCard';
import { Container, Row, ListGroup } from 'react-bootstrap';

class PostCard extends React.Component {
   state = {
      likes: this.props.post.likes, 
      displayCommentForm: false, 
      comments: this.props.post.comments, 
      displayComments: false, 
      tags: this.props.post.disorders
   }

   increaseLikes = () => {
      let newLikes = this.state.likes + 1

      fetch(`${API_BASE}/posts/${this.props.post.id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json",
         },
         body: JSON.stringify({
            likes: newLikes
         })
      })
         .then(resp => resp.json())
         .then(data => this.setState({
            likes: newLikes
         }))
   }

   toggleDisplayCommentForm = () => {
      this.setState({
         displayCommentForm: !this.state.displayCommentForm
      })
   }

   toggleDisplayComments = () => {
      this.setState({
         displayComments: !this.state.displayComments
      })
   }

   handleNewComment = (newComment) => {
      this.setState({
         comments: [...this.state.comments, newComment]
      })
   }

   render() {
      return (
         <div id="post-card-container">
            <Card id="post-card" key={this.props.post.id} border="primary" style={{ width: '50rem' }}>
               <Card.Header as="h5">{this.props.post.title}</Card.Header>
            <Card.Body>
               <Card.Img id="post-img" src={this.props.post.image_url} alt={this.props.post.title} />
                  <br></br>
                  <br></br>
                  <Card.Text>
                     {this.props.post.content}
                  </Card.Text>
                  <div id="button-container">
                     <Button type="button" size="sm" variant="outline-info" onClick={this.increaseLikes}>{this.state.likes} <span role="img" aria-label="yellow-heart">💛</span></Button>{' '}
                     <Button variant="outline-primary" size="sm" onClick={this.toggleDisplayCommentForm}>{this.state.displayCommentForm ? "Hide Comment Form" : "Add a Comment"}</Button>{' '}
                     <Button variant="outline-primary" size="sm" onClick={this.toggleDisplayComments}>{this.state.displayComments ? "Hide Comments" : "View Comments"}</Button>
                  </div>
                  <br></br>
                  {this.state.displayComments && (
                     <ListGroup id="comment-list"> <strong>Comments</strong>
                        {this.state.comments && this.state.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
                     </ListGroup>
                  )}
                  <br></br>
                  <div id="comment-form">
                     {this.state.displayCommentForm && <CommentForm postId={this.props.post.id} comments={this.state.comments} handleNewComment={this.handleNewComment} />}
                  </div>
                  <br></br>
                  <br></br>
                  <Card.Text className="text-muted">
                     <Container fluid="sm">
                        <Row>
                           Tags: {this.state.tags.map((tag, index) => <ul key={index}>#{tag.name}</ul>)}
                        </Row>
                     </Container>
                  </Card.Text>
               </Card.Body>
               <Card.Footer>Posted by: {this.props.post.user.username}</Card.Footer>
            </Card>
         </div>
      )
   }
}

export default PostCard;
