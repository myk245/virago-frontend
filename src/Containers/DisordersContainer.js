import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import DisorderCard from '../Components/DisorderCard'; 
import DisorderPage from '../Components/DisorderPage';

class DisordersContainer extends React.Component {   
   state = {
      selectedDisorder: null
   }

   selectDisorder = (id) => {
      this.setState({
         selectedDisorder: id
      })
   }

   render() {
      // console.log(this.state.selectedDisorder)
      let selectedDisorder = this.props.disorders.find(disorder => disorder.id === this.state.selectedDisorder)
      return (
         <div id="disorders">
            <div id="general-disorder-info">
               <h1>Common Mental Health Disorders</h1>
               <p>A mental health disorder is a term used to refer to a wide range of health conditions that
               affect emotion, thinking, and/or behavior. Mental illness often involves distress and can create
               barriers to normal functioning in daily life and in social settings. According to the American Psychiatric
               Association, mental illness is common, affecting nearly 19% of U.S. adults in any given year.</p>
               <p>Below is a list of common mental health disorders. Click on a specific disorder for more information.</p>
            </div>
            <br>
            </br>
            <div id="disorder-list">
               {this.state.selectedDisorder
                  ? <DisorderPage {...selectedDisorder} />
                  : this.props.disorders.map(disorder =>
                     <DisorderCard key={disorder.id} disorder={disorder} handleSelect={this.selectDisorder} />)
               }
            </div>
         </div>
      )
   }

}

export default DisordersContainer; 