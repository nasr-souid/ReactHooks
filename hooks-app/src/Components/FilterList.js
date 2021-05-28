import React from "react";
import { Form, FormControl} from "react-bootstrap";
import Stars from './Stars'

const FilterList = (props) => {
  return (
    <div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.SearchByName}/>
        <Stars Search={props.SearchByRating}/>
      </Form>
    </div>
  );
};

export default FilterList;