import React from 'react';
import { TodoForm } from '../ui/form/TodoForm';
import { TodoHeader } from '../ui/header/TodoHeader';
import { TodoItemList } from '../ui/itemList/TodoItemList';
import styles from './styles.module.scss';

export const TodoContainer = () => {
  return (
    <div className={styles['todo__container']}>
      <TodoHeader />
      <TodoItemList />
      <TodoForm />
    </div>
  );
};
