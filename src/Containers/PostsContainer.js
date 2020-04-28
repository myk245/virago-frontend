import React from 'react';
import { API_BASE } from '../constants';
import PostCard from '../Components/PostCard';
import PostForm from '../Components/PostForm'; 

class PostsContainer extends React.Component {
   state = {
      posts: []
   }

   componentDidMount() {
      fetch(`${API_BASE}/posts`)
         .then(resp => resp.json())
         .then(data => this.setState({
         posts: data 
      }))
   }

   render() {
      return (
         <div>
            <h1>Virago Community Posts</h1>
            {this.state.posts.map(post => 
               <PostCard key={post.id} post={post} />
            )}
         </div>
      )
   }
}
export default PostsContainer; 