import React from 'react'
import PropTypes from 'prop-types'
import Button from '@restart/ui/esm/Button'

import {useSelector,useDispatch} from 'react-redux'
import { setUpdatingTodoIndex } from '../actions'


export default function Todo  ({ onClick, completed,title,description,id})  {

const todos = useSelector((state)=>state.todos)
const dispatch = useDispatch()    


const handleEdit = (todoId) => {
  const todoIndex = todos.records.findIndex((todo) => todo.id === todoId);
  dispatch(setUpdatingTodoIndex(todoIndex));
}
  
  return(
  <ul>
  <li
    onClick={onClick}
    style={{
      textDecoration:completed? 'line-through' : 'none',
      }}>
      ID:{id}<br/>
      title:{title}<br/>
      descr:{description}
      <Button  onClick={()=>handleEdit(id)} >Update</Button>
  </li>
</ul>
  )
 }

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}



