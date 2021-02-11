import React from "react";
import {Dropdown} from 'react-bootstrap'


const AddProject = (props) => {

    const [category, setCategory] = useState('Front-End');
    //id, category, title
    const [title, setTitle] = useState('');

    
    const handleSubmit = (e) => {
        e.prevent.defualt();
        props.addProject({
            id: uuidv1(),
            title: title,
            category: category,
        })
    }
    console.log(`category: ${category} title: ${title}`);
  return <>
  <form onSubmit = {handleSumbit}>
    <div className="row">
      <div className="col-9">
        <div className="form-group">
        <input type="text" className="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter project"
            value = {title}
            onChange = {(e) =>setTitle(e.target.value)} />
      </div>
      </div>
      <div className="col-3">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {category}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setCategory("Front-End")} href="#/action-1">Front-End</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("Back-End")}href="#/action-2">Back-End</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    {/* end of row */}
    <button type="submit" className="btn btn-secondary">Submit</button>
  </form>
  </>;
};
export default AddProject;