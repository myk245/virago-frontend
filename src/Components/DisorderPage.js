import React from 'react';
import { API_BASE } from '../constants'; 
import { Card } from 'react-bootstrap'; 

class DisorderPage extends React.Component {
   state = {
      disorder: null
   }

   componentDidMount() {
      // console.log(this.props) //=> routerProps
      let id = this.props.match.params.id
      fetch(`${API_BASE}/disorders/${id}`)
         .then(resp => resp.json())
         .then(data => this.setState({
            disorder: data 
      }))
   }
   
   renderDisorderDetails = (selectedDisorder) => {
      return (
         <div className="disorder-page">
            <Card className="disorder-page" style={{ width: '60rem' }} border="info" key={this.state.disorder.id}>
               <Card.Header><h3>{this.state.disorder.name}</h3></Card.Header>
               <Card.Body>
                  <Card.Text><p>{this.state.disorder.details}</p></Card.Text>
               </Card.Body>
               <Card.Header><strong>Common Symptoms</strong></Card.Header>
               <Card.Body>{this.state.disorder.symptoms.map(symptom => <li key={symptom.id}><strong>{symptom.name}:</strong> {symptom.description}</li>)}</Card.Body>
               <Card.Header><strong>Treatments</strong></Card.Header>
               <br></br>
               <Card.Subtitle class="text-secondary"><em>Effective treatment plans are unique to an individual and should always be
               developed in collaboration with a mental health specialist. Below is a list of
               treatments commonly used to treat this disorder:</em></Card.Subtitle>
               <Card.Body>{this.state.disorder.treatments.map(treatment => (<li key={treatment.id}><strong>{treatment.name}:</strong> {treatment.description}</li>))}</Card.Body>            
            </Card>
         </div>
      ) 
   }

   render() {
      // console.log(this.state.disorder)
      return (
         <div>
            {this.state.disorder && this.renderDisorderDetails(this.state.disorder)}
         </div>
      )
   }
}


export default DisorderPage; 