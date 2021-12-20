import React, { useReducer } from 'react';
import Context from './context';
import * as TodoReducer from './todoReducer';

export const ContextTodo = ({ children }) => {
  const [state, dispatch] = useReducer(
    TodoReducer.todoReducer,
    TodoReducer.initialState
  );
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
