import React, { useContext } from 'react';
import context from '../../context/context';
import styles from './styles.module.scss';

export const TodoHeader = () => {
  const { state } = useContext(context);

  return (
    <div className={styles['todo__header']}>
      <p
        className={styles['todo__header-text']}
      >{`You have ${state.length} tasks`}</p>
    </div>
  );
};
