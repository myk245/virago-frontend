import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import DisorderCard from '../Components/DisorderCard'; 
import DisorderPage from '../Components/DisorderPage';
import Help from '../Components/Help';

class DisordersContainer extends React.Component {   
   state = {
      hideHeader: false 
   }

   // conditionally render general info - needs to show on index page and be hidden on show page
   // when Details button has been clicked, toggle hideHeader on so that it is hidden
   toggleHideHeader = () => {
      this.setState({
         hideHeader: !this.state.hideHeader
      })
   }

   render() {
      return (
         <div id="disorders">
            {this.state.hideHeader ? null : 
               <div id="general-disorder-info">
                  <h1>Mental Health Disorders</h1>
                  <p>Mental health disorder is a term used to refer to a wide range of health conditions that
                  affect emotion, thinking, and/or behavior. Mental illness often involves distress and can create
                  barriers to normal functioning in daily life and in social settings. According to the American Psychiatric
                  Association, mental illness is common, affecting nearly 19% of U.S. adults in any given year.</p>
                  <p>Below is a list of common mental health disorders. <em>Click the "Details" button to see more information regarding the specific disorder.</em></p>
               </div>}
            <br>
            </br>
            <div id="disorder-list">
               <Switch>
                  <Route path='/disorders/:id' 
                     render={(routerProps) => <DisorderPage {...routerProps} />}
                     />
                  <Route path='/disorders'
                     render={() => this.props.disorders.map(disorder =>
                        <DisorderCard
                           key={disorder.id}
                           disorder={disorder}
                           toggleHideHeader={this.toggleHideHeader}
                        />
                     )}
                  />
               </Switch>
            </div>
            <Help />
         </div>
      )
   }

}

export default DisordersContainer; 