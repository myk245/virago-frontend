import React from 'react';
import { Form, FormControl, FormLabel} from 'react-bootstrap'; 

const FilterBar = (props) => {
   return (
      <div className="filterBar">
         <Form>
            <FormLabel>Search Posts by Disorder:</FormLabel>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={props.filterTerm} onChange={props.handleChange} />
         </Form> 
      </div>
   );
}

export default FilterBar; 