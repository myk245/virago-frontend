import React from 'react';
import { ListGroupItem } from 'react-bootstrap'

const CommentCard = (props) => {
   return (
      <div id="comment-card">
         <ListGroupItem><strong>{props.comment.user.name}: </strong>{props.comment.content}</ListGroupItem>
      </div>
   )
}

export default CommentCard;
