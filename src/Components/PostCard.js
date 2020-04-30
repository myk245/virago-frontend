import React from 'react'; 
import { API_BASE } from '../constants';
import Button from 'react-bootstrap/Button';
import CommentForm from '../Components/CommentForm'
import CommentCard from './CommentCard';

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
      console.log(this.state.tags)
      return (
         <div id="post-card-container">
               <div id="post-card" key={this.props.post.id}>
                  <h3>{this.props.post.title}</h3>
                  <img id="post-img" src={this.props.post.image_url} alt={this.props.post.title} />
                  <p>{this.props.post.content}</p>
                  <p>Posted by: {this.props.post.user.username}</p>
               <p>Tags: {this.state.tags.map(tag => <li>#{tag.name}</li> )} </p>
            </div>
            {this.state.displayComments && (
               <div id="comment-list">
                  {this.state.comments && this.state.comments.map(comment => <CommentCard key={comment.id} comment={comment} /> )}
               </div>
            )}
            <div id="button-container">
               <Button type="button" size="sm" variant="outline-info" onClick={this.increaseLikes}>{this.state.likes} <span role="img" aria-label="yellow-heart">💛</span></Button>{' '}
               <Button variant="outline-primary" size="sm" onClick={this.toggleDisplayCommentForm}>{this.state.displayCommentForm ? "Hide Comment Form" : "Add a Comment"}</Button>{' '}
               <Button variant="outline-primary" size="sm" onClick={this.toggleDisplayComments}>{this.state.displayComments ? "Hide Comments" : "View Comments"}</Button>
            </div>
            <div id="comment-form">
               {this.state.displayCommentForm && <CommentForm postId={this.props.post.id} comments={this.state.comments} handleNewComment={this.handleNewComment} />}
            </div>
         </div>
      )
   }
}

export default PostCard;
