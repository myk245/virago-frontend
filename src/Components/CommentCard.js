import React from 'react';

const CommentCard = (props) => {
   return (
      <div id="comment-card">
         {props.comment.user.name}: {props.comment.content}
      </div>
   )
}

export default CommentCard;
