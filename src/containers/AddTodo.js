import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Button,Modal,Form  } from 'react-bootstrap'




let AddTodo = ({ dispatch }) => {
  let input
  let description
  



    const handleSubmit=(e)=> {
    e.preventDefault();
    if(!input.trim() && !description.trim()) {
      return
    }
    dispatch(addTodo(input,description))
    e.target.reset();
  
    
  }

  

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Add and Update</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <label>Title</label><br/>
    <input type="text" onChange={(event)=> input= event.target.value}/><br/><br/>
    <label>Description</label><br/>
    <input type="text" onChange={(event)=> description= event.target.value}/>
 </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button type = "submit" variant="primary">AddTodo</Button>
  </Modal.Footer>
</Modal.Dialog>
        </Form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
