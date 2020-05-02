import React from 'react';
import { Form, FormControl, Button, FormLabel, Col, Row } from 'react-bootstrap'; 

const FilterBar = (props) => {
   return (
      <div className="filterBar">
         <Form>
            <FormLabel>Search Posts by Disorder:</FormLabel>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={props.filterTerm} onChange={props.handleChange} />
            <Button size="sm" variant="outline-info">Search</Button>
         </Form> 
      </div>
   );
}

export default FilterBar; 