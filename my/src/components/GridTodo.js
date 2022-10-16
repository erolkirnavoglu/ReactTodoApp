import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {delTodoAction} from '../reduxToolkit/TodoSlice';

 const GridTodo = () => {
  const todoList=useSelector((store)=>(store.TodoSlice))
  const dispatch=useDispatch();
  const delTodoHandler=(id)=>{
    dispatch(delTodoAction(id));
  }
  return (
    <div className='row py-5'>
    <ul className='list-group'>
        {todoList.map((todo, index) => (
            <li key={todo.id} className='list-group-item'>{todo.value} <button onClick={()=>delTodoHandler(todo.id)} className='btn btn-danger'>Sil</button></li>
        ))}
    </ul>
</div>
  )
}

export default GridTodo;
