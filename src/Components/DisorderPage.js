import React from 'react';
import { API_BASE } from '../constants'; 

class DisorderPage extends React.Component {
   state = {
      disorder: null
   }

   componentDidMount() {
      // console.log(this.props) //=> routerProps
      let id = this.props.match.params.id
      fetch(API_BASE + `/disorders/${id}`)
         .then(resp => resp.json())
         .then(data => this.setState({
            disorder: data 
      }))
   }
   
   renderDisorderDetails = () => {
      return (
         <div>
            <h1>{this.state.disorder.name}</h1>
         </div>
      ) 
   }

   render() {
      console.log(this.state.disorder)
      return (
         <div>
            {/* {this.renderDisorderDetails()} */}
         </div>
      )
   }
}


export default DisorderPage; 