import React, { useContext } from 'react';
import Context from '../../context/context';
import styles from './styles.module.scss';

export const TodoItem = ({ task }) => {
  const { dispatch } = useContext(Context);
  const handleComplete = () => {
    dispatch({ type: 'TODO_COMPLETED', payload: { index: task.id } });
  };
  const handleDelete = () => {
    dispatch({ type: 'TODO_DELETE', payload: { index: task.id } });
  };

  return (
    <>
      <li
        className={`${styles['todo__item']} ${
          task.isCompleted ? styles['todo__item--completed'] : ''
        }`}
      >
        <p className={styles['todo__item-desc']}>{task.description}</p>
        <div className={styles['todo__item-control']}>
          <input type="checkbox" onClick={handleComplete} />
          <i
            className={`fas fa-times-circle ${styles['todo__item-delete']}`}
            onClick={handleDelete}
          ></i>
        </div>
      </li>
    </>
  );
};
