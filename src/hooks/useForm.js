import { useContext, useState } from "react"
import context from "../context/context";

export const useForm = (initialState = '') => {
  const [value, setValue] = useState(initialState);
  const { dispatch } = useContext(context);

  const handleAdd = () => {
    if (value.length > 3) {
      dispatch({type: 'TODO_ADD', payload: {
        id: new Date().getTime(),
        description: value
      }});  
      setValue('');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    handleAdd,
    handleSubmit,
    handleChange,
    value
  }
}
