import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './styles.module.scss';

export const TodoForm = () => {
  const { handleAdd, handleSubmit, handleChange, value } = useForm();

  return (
    <form onSubmit={handleSubmit} className={styles['todo__form']}>
      <input
        type="text"
        value={value}
        className={styles['todo__form-input']}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Submit</button>
    </form>
  );
};
