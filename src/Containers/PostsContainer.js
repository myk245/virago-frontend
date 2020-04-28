import React from 'react';
import { API_BASE } from '../constants';
import PostCard from '../Components/PostCard';

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
      console.log(this.state.posts)
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