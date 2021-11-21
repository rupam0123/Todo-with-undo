import React from 'react';
import { useSelector} from 'react-redux';
import PropTypes from 'prop-types'
import Todo from './Todo';

export default function TodoList ( {onTodoClick}) {
  
  
  const {records} = useSelector((state) => state.todos);
  console.log('eeeeeeee',records)
  return (
    <div>
      <ul>
      {records.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}