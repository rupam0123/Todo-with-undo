let nextTodoId = 0
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_TODO = 'SET_TODO';
export const SET_UPDATING_TODO_INDEX = 'SET_UPDATING_TODO_INDEX';
export const TOGGLE_TODO = 'TOGGLE TODO'
export const UPDATE_TODO = 'UPDATE_TODO';


export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const setTodo = (payload) => ({ type: SET_TODO, payload });

export const setUpdatingTodoIndex = (payload) => ({ type: SET_UPDATING_TODO_INDEX, payload });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
