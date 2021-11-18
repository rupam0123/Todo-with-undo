import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Modal,Button  } from 'react-bootstrap'



let AddTodo = ({ dispatch }) => {
  let input
  let description
  



    const handleSubmit=(e)=> {
    e.preventDefault();
    if(!input.trim()) {
      return
    }
    if(!description.trim()) {
      return
    }
    dispatch(addTodo(input))
    input ='';
    dispatch(addTodo(description))
    description='';
    
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
