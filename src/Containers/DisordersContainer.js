import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import DisorderCard from '../Components/DisorderCard'; 
import DisorderPage from '../Components/DisorderPage';

class DisordersContainer extends React.Component {   
   state = {
      selectedDisorder: null
   }

   // transitioning to useHistory hook, so the below method is now unnecessary
   // selectDisorder = (id) => {
   //    this.setState({
   //       selectedDisorder: id
   //    })
   // }

   render() {
      // console.log(this.state.selectedDisorder)
      let selectedDisorder = this.props.disorders.find(disorder => disorder.id === this.state.selectedDisorder)
      return (
         <div id="disorders">
            <div id="general-disorder-info">
               <h1>Mental Health Disorders</h1>
               <p>Mental health disorder is a term used to refer to a wide range of health conditions that
               affect emotion, thinking, and/or behavior. Mental illness often involves distress and can create
               barriers to normal functioning in daily life and in social settings. According to the American Psychiatric
               Association, mental illness is common, affecting nearly 19% of U.S. adults in any given year.</p>
               <p>Below is a list of common mental health disorders. <em>Click the "Details" button to see more information regarding the specific disorder.</em></p>
            </div>
            <br>
            </br>
            <div id="disorder-list">
               {/* depending on the URL the user is on, render the show page or the index page */}
               <Switch>
                  {/* since we use component notation here, routerProps is automatically added to DisorderPage  */}
                  <Route path='/disorders/:id' component={DisorderPage} /> 
                  <Route path='/disorders'
                     render={() => this.props.disorders.map(disorder =>
                        <DisorderCard
                           key={disorder.id}
                           disorder={disorder}
                        />
                     )}
                  />
               </Switch>
               {/* {this.state.selectedDisorder
                  ? <DisorderPage {...selectedDisorder} />
                  : this.props.disorders.map(disorder =>
                     <DisorderCard key={disorder.id} disorder={disorder} handleSelect={this.selectDisorder} />)
               } */}
            </div>
         </div>
      )
   }

}

export default DisordersContainer; 