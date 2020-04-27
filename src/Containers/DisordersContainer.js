import React from 'react';
import DisorderCard from '../Components/DisorderCard'; 

class DisordersContainer extends React.Component {   

   render() {
      console.log(this.props.disorders)

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
            <div id ="disorder-list">
               {this.props.disorders.map(disorder =>
                  <DisorderCard key={disorder.id} disorder={disorder} />
               )}
            </div>
         </div>
      )
   }

}

export default DisordersContainer; 