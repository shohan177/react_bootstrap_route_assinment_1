import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Button, CloseButton, Col, Form, Modal, Row} from 'react-bootstrap'


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [toDoArry, setTodoArry] = useState(null);
  
  //get local storage data 
  const getLocalStorage = (key) => {
    let data = localStorage.getItem(key);
    if (data) {
      setTodoArry(JSON.parse(data))
      return JSON.parse(data)
    } else {
      setTodoArry([])
      return []
    }
  }

  //set loacl storage data
  const setLocalStorage = (key, val) => {
    let data = JSON.stringify(val)
    localStorage.setItem(key, data)
  }

  useEffect(() => {
    getLocalStorage('to-do')
  }, [])
  
  
  
  //form submit 
  const handelTodoSUbmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());
    let to_do_array = getLocalStorage('to-do');

    to_do_array.push(data)

    setLocalStorage('to-do', to_do_array)
    
    getLocalStorage('to-do')
    //console.log(data);


  }
  //delete todo 
  const handelDeleteTodo = (id) => {
    alert(id)
    var index = toDoArry.indexOf(id)
    console.log(index)
    // let update_arry = toDoArry.splice(index, 1)
    // setLocalStorage('to-do', update_arry)
    // getLocalStorage('to-do')
  }

  return (
    <>
      <Row className='py-4'>
        <Col md={10}>
          <h3>TodoList</h3>
        </Col>
        <Col md={2}>
          <Button onClick={()=>setModal(true)}>Add Task</Button>
        </Col>
      </Row>
      
     
      <table className="payment-table">
              <tr id="payment-table-head">
                  <th>Task Name</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Action</th>
              </tr>
        {toDoArry ? toDoArry.map((data,index) =>
              
              <tr className="payment-table-item">
            <td style={{ width: '250px' }}>{data.name}</td>
                <td>{data.time}</td>
                <td>{data.date}</td>
                <td><button className='btn btn-danger' onClick={()=>handelDeleteTodo(index)}>Delete</button></td>
              </tr>
              ): ""}
    
        

      </table>

      <Modal show={modal} onHide={()=>setModal(false)}>
        <Modal.Header>
          Add Taks
          <CloseButton onClick={()=>setModal(false)}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelTodoSUbmit}>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control name="name" type='text'></Form.Control>
            </Form.Group>  
            <Form.Group className='py-2'>
              <Form.Label>Time</Form.Label>
              <Row>
                <Col>
                  <Form.Control name="time" type='time'></Form.Control>
                </Col>
                <Col>
                  <Form.Control name="date" type='date'></Form.Control>                 
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className='py-3'>
              <Button type='submit'>Save</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      
    </>
  )
}

export default TodoList
