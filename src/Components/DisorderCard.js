import React from 'react'; 
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button'; 
import { useHistory } from 'react-router-dom'; 

const DisorderCard = (props) => {
   let history = useHistory();

   return (
      <Card id="disorder-card" className="text-center">
         <Card.Header>{props.disorder.name}</Card.Header>
         <Card.Body>
            <Card.Text>
               {props.disorder.details}
            </Card.Text>
            <Button variant="info" onClick={() => { history.push(`/disorders/${props.disorder.id}`); {props.toggleHideHeader()}}}>Details</Button>
            {/* <Button variant="info" onClick={() => props.handleSelect(props.disorder.id)}>Details</Button> */}
         </Card.Body>
      </Card>
   )
}

// const DisorderCard = (props) => {
//    let history = useHistory(); 

//    return (
//          <Card id="disorder-card" className="text-center">
//             <Card.Header>{props.disorder.name}</Card.Header>
//                <Card.Body>
//                {/* <Card.Title><strong></strong></Card.Title> */}
//                <Card.Text>
//                   {props.disorder.details}
//             </Card.Text>
//             <Button variant="info" onClick={() => history.push(`/disorders/${props.disorder.id}`)}>Details</Button>
//             {/* <Button variant="info" onClick={() => props.handleSelect(props.disorder.id)}>Details</Button> */}
//             </Card.Body>
//          </Card>
//    )
// }

export default DisorderCard;