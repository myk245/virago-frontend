import React from 'react';
import { API_BASE } from '../constants';
import PostCard from '../Components/PostCard';
import PostForm from '../Components/PostForm'; 
import Button from 'react-bootstrap/Button'

class PostsContainer extends React.Component {
   state = {
      posts: [], 
      displayPostForm: false
   }

   componentDidMount() {
      fetch(`${API_BASE}/posts`)
         .then(resp => resp.json())
         .then(data => this.setState({
         posts: data 
      }))
   }

   toggleDisplayPostForm = () => {
      this.setState({
         displayPostForm: !this.state.displayPostForm
      })
   }
 
   handleNewPost = (newPost) => {
      this.setState({
         posts: [...this.state.posts, newPost]
      })
   }

   render() {
      return (
         <div>
            <h1>Virago Community Posts</h1>
            <br></br>
            <Button variant="outline-primary" size="sm" onClick={this.toggleDisplayPostForm}>{this.state.displayPostForm ? "Hide Create Post Form" : "Display Create Post Form"}</Button>
            {this.state.displayPostForm &&
               <PostForm handleNewPost={this.handleNewPost} />}
            <br></br>
            {this.state.posts.map(post => 
               <PostCard key={post.id} post={post} />
            )}
         </div>
      )
   }
}
export default PostsContainer; 