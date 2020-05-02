import React from 'react';
import { API_BASE } from '../constants';
import PostCard from '../Components/PostCard';
import PostForm from '../Components/PostForm'; 
import Button from 'react-bootstrap/Button';
import FilterBar from '../Components/FilterBar';

class PostsContainer extends React.Component {
   state = {
      posts: [], 
      displayPostForm: false, 
      filterTerm: ""
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

   handleChange = (event) => {
      this.setState({
         filterTerm: event.target.value
      })
   }
   
   filterPosts = () => {
      let postsToRender = []
      // map over all the posts (which returns another array) and filter to find the posts where 
      // the tagged disorder includes the filter term => if it matches, add it to the array of posts to render
      let postMatch = this.state.posts.map((post) => {
         let tagMatch = post.disorders.filter(disorder => disorder.name.toLowerCase().includes(this.state.filterTerm.toLowerCase()))
            if (tagMatch.length > 0) {
            postsToRender.push(post)
            }
      })
   return postsToRender
   }

   render() {
      return (
         <div>
            <h1>Virago Community Posts</h1>
            <br></br>
            <FilterBar filterTerm={this.state.filterTerm} handleChange={this.handleChange} />
            <br></br>
            <Button variant="outline-primary" size="sm" onClick={this.toggleDisplayPostForm}>{this.state.displayPostForm ? "Hide Create Post Form" : "Display Create Post Form"}</Button>
            {this.state.displayPostForm &&
               <PostForm handleNewPost={this.handleNewPost} />}
            <br></br>
            {this.filterPosts().map(post => 
               <PostCard key={post.id} post={post} />
            )}
         </div>
      )
   }
}
export default PostsContainer; 