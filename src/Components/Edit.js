import React, {useState, useEffect} from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';

function Edit(){
  const[activity, setActivity] = useState("");
  const[description, setAge] = useState("");
  const[id, setId] = useState("");

  let history = useNavigate();
  var index = Employees.map(function(e){
    return e.id
  }).indexOf(id);

  const handleSubmit =(e) =>{
    e.preventDefault();
    
    let a= Employees[index];
    a.Activity = activity;
    a.Description = description;

    history("/");
  }

  useEffect(() => {
    setActivity(localStorage.getItem('Activity'))
    setAge(localStorage.getItem('Description'))
    setId(localStorage.getItem('Id'))
  })

  return(
    <div>
      <Form classActivity="d-grid gap-2" style={{magrin:"15rem"}}>
      <Form.Group classActivity="mb-3" controlId="formActivity">
        <Form.Control type="text" placeholder="Enter Activity" value={activity} required onChange={(e) => setActivity(e.target.value)}>         
        </Form.Control>
      </Form.Group>
      <Form.Group classActivity="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Description" value={description} required onChange={(e) => setAge(e.target.value)}>         
        </Form.Control>
      </Form.Group>
      <Button type="submit" onClick={(e) =>handleSubmit(e)}>Update</Button>
    </Form>
    </div>
  );
}

export default Edit;