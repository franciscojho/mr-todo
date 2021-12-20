import React, { useContext } from 'react';
import { TodoItem } from '../item/TodoItem';
import Context from '../../context/context';
import styles from './styles.module.scss';

export const TodoItemList = () => {
  const { state } = useContext(Context);

  return (
    <ul className={styles['todo__list-item']}>
      {state.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
