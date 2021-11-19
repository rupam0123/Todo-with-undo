import React from 'react'
import PropTypes from 'prop-types'
import Button from '@restart/ui/esm/Button'
import {connect} from 'react-redux'
import { updateIndex } from '../actions'


 function Todo  ({ onClick, completed, text,desc,id ,todo})  {
  
  const handleEdit = (todoId) => {
    const todoIndex = todo.filter((todo) => todo.id === todoId);
    console.log(todoIndex)
    // updateIndex(todoIndex);
  }
  
  return(
  <ul>
  <li
    onClick={onClick}
    style={{
      textDecoration:completed? 'line-through' : 'none',
      }}>
        {id}<br/>
       Title:{text}<br/>
       Description:{desc}
  </li>
  <Button  onClick={handleEdit} >Update</Button>
</ul>
  )
 }

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  updated: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapState =(state)=>({
  todos:state.todos
});
const mapDispatch ={
  updateIndex
}

export default connect(mapState,mapDispatch)(Todo)



