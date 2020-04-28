import React from 'react';
import { API_BASE } from '../constants'; 

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
         <div id="disorder-page">
            <h1>{this.state.disorder.name}</h1>
            <p>{this.state.disorder.details}</p>
            <ul><strong>Common symptoms may include:</strong></ul>
            {this.state.disorder.symptoms.map(symptom => <li key={symptom.id}><strong>{symptom.name}:</strong> {symptom.description}</li>)}
            <br></br>
            <p><strong>Effective treatment plans are unique to an individual and should always be
            developed in collaboration with a mental health specialist. Below is a list of
            treatments commonly used to treat this disorder:</strong></p>
            {this.state.disorder.treatments.map(treatment => (<li key={treatment.id}><strong>{treatment.name}:</strong> {treatment.description}</li>))}
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