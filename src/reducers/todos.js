
import {
  SET_TODO,
  ADD_TODO,
  UPDATE_TODO,
  SET_UPDATING_TODO_INDEX,
  TOGGLE_TODO
} from '../actions';

const initialState = {
  todo: { title: '', description: '' },
  records: [],
  updatingTodoIndex: null,
  completed:false
}

export default function todos (state = initialState, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case SET_UPDATING_TODO_INDEX:
      return {
        ...state,
        updatingTodoIndex: action.payload,
        todo: { ...state.records[action.payload] },
        completed:!state.completed
      };
    case ADD_TODO:
      return {
        ...state,
        records: [...state.records, action.payload],
        todo: initialState.todo,
      };
    case UPDATE_TODO:
      const records = [...state.records];
      records[state.updatingTodoIndex] = action.payload;
      return {
        ...state,
        records,
        todo: initialState.todo,
        updatingTodoIndex: null,
      };
      case TOGGLE_TODO :
        {
          if (state.id !== action.id) {
            return state
          }
          return {
            ...state,
            completed:!state.completed
          }
        }
      

   
    default:
      return state;
  }
}