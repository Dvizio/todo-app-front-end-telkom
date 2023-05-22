import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from './Employees';
import {Link, useNavigate} from 'react-router-dom'

function Home(){
  document.body.style = 'background: #9DB2BF;';
  let history = useNavigate();

  const handleDelete = (id) => {
    var index = Employees.map(function(e){
      return e.id
    }).indexOf(id);
    Employees.splice(index,1);

    history('/');

  }

  const handleEdit = (id, activity, description) => {
    localStorage.setItem('Activity', activity);
    localStorage.setItem('Description', description);
    localStorage.setItem('Id', id);
  }

  return(
    <Fragment>
      <div style={{margin:"10rem", backgroundColor:'#27374D', padding:'50px', borderRadius:'50px', color: 'white',  boxShadow: '5px 5px 7px black'}}>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 'auto'}}>
        <h1>To Do List</h1>
        </div>
        <Table striped bordered hover size="lg" >
          <thead>
            <tr>
              <th style={{color: 'white'}}>
                Activity
              </th>
              <th style={{color: 'white'}}>
                Description
              </th>
              <th style={{color: 'white'}}>
                Actions
              </th>            
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
              ?
              Employees.map((item) =>{
                return(
                  <tr>
                    <td style={{color: 'white'}}>
                      {item.Activity}
                    </td>
                    <td style={{color: 'white'}}>
                      {item.Description}
                    </td>
                    <td style={{color: 'white'}}>
                      <Link to={'/edit'}>
                      <Button onClick={() => handleEdit(item.id, item.Activity, item.Description)}>Edit</Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                    </td>
                  </tr>
                )
              } )
              :
              "No data available"
            }
          </tbody>
        </Table>
        <br>
        </br>
        <Link to="/create" classActivity='d-grid gap-2'>
          <Button size="lg">Add</Button>
        </Link>
      </div>
    </Fragment>
  )
}

export default Home;