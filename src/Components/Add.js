import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';

function Add(){
  const[activity, setActivity] = useState("");
  const[description, setDescription] = useState("");

  let history = useNavigate();
  const handleSubmit =(e) =>{
    e.preventDefault();
    const ids= uuid();
    let uniqueId = ids.slice(0,8);

    let a = activity,
    b=description;

    Employees.push({id: uniqueId, Activity: a, Description: b});

    history("/");
  }

  return<div>
    <Form classActivity="d-grid gap-2" style={{magrin:"15rem"}}>
      <Form.Group classActivity="mb-3" controlId="formActivity">
        <Form.Control type="text" placeholder="Enter Activity" required onChange={(e) => setActivity(e.target.value)}>         
        </Form.Control>
      </Form.Group>
      <Form.Group classActivity="mb-3" controlId="formDescription">
        <Form.Control type="text" placeholder="Enter Description" required onChange={(e) => setDescription(e.target.value)}>         
        </Form.Control>
      </Form.Group>
      <Button type="submit" onClick={(e) =>handleSubmit(e)}>Submit</Button>
    </Form>
  </div>
    
  
}

export default Add;