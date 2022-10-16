import React, { useState } from 'react';
import FormTodo from './FormTodo';
import GridTodo from './GridTodo';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    /*
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const onChangeHandler = (e) => {
        setTodo(e.target.value);
    }

    const addTodoHandler = () => {
        const obj={
            id:uuidv4(),
            value:todo
        }
        setTodoList([...todoList, obj])
    }

    const delTodoHandler=(id)=>{
            const filter=todoList.filter((p)=>p.id!=id);
            setTodoList(filter);
    }
*/
    return (
        <>
            <FormTodo></FormTodo>
            <GridTodo></GridTodo>
            
        </>
    )
}

export default TodoList;
