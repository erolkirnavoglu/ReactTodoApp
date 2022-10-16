import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodoAction} from '../reduxToolkit/TodoSlice';

 const FormTodo = () => {
    const [todo, setTodo] = useState('');
    const dispatch=useDispatch();
    const onChangeHandler = (e) => {
        setTodo(e.target.value);
    }
  
    const addTodoHandler=()=>{
        dispatch(
            addTodoAction(todo)
        );
    }
    
  return (
    <div className='row'>
                <div className='col-sm-6'>
                    <input type='text' value={todo} onChange={onChangeHandler} className='form-control'></input>
                </div>
                <div className='col-sm-3'>
                    <button type='button' onClick={addTodoHandler} className='btn btn-success'>Ekle</button>
                </div>
            </div>
  )
}

export default FormTodo;
