import React from 'react'; 
import { API_BASE } from '../constants';

class PostCard extends React.Component {
   state = {
      likes: this.props.post.likes
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

   render() {
      return (
         <div id="post-card-container">
               <div id="post-card" key={this.props.post.id}>
                  <h3>{this.props.post.title}</h3>
                  <img id="post-img" src={this.props.post.image_url} alt={this.props.post.title} />
                  <p>{this.props.post.content}</p>
                  <p>Posted by: {this.props.post.user.username}</p>
                  <button onClick={this.increaseLikes}>{this.state.likes} 💛</button>
               </div>
         </div>
      )
   }
}

export default PostCard;
