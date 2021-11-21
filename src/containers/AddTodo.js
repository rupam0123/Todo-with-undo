import React from 'react';
import { connect } from 'react-redux';
import { setTodo, addTodo, updateTodo } from '../actions';
import {Modal,Button} from 'react-bootstrap'

function TodoForm (props) {
  const { todo, updatingTodoIndex } = props.todos;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...todo, [name]: value };
    props.setTodo(updatedTodo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title.trim()||!todo.description.trim()) return;
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      props.addTodo({ ...todo,id:new Date().getTime(),completed:false});
    } else {
      props.updateTodo({ ...todo });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Todo</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    Title:<br/>
    <input type="text" name="title" value ={todo.title} onChange={handleChangeInput}/><br/>
    Description:<br/>
    <input type="text" name="description" value ={todo.description} onChange={handleChangeInput}/>
  </Modal.Body>

  <Modal.Footer>
    <Button type ="submit" variant="primary">addTodo</Button>
  </Modal.Footer>
</Modal.Dialog>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  setTodo,
  addTodo,
  updateTodo,
};

export default connect(mapState, mapDispatch)(TodoForm);