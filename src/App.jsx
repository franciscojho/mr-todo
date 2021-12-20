import { TodoContainer } from './components/TodoContainer';
import { ContextTodo } from './context/ContextTodo';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles['todo-layout']}>
      <ContextTodo>
        <TodoContainer />
      </ContextTodo>
    </div>
  );
};

export default App;
