import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const TodoSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodoAction:(state,action)=>{
            
            let obj={
                id:uuidv4(),
                value:action.payload
            }
            state.push(obj);
        },
        delTodoAction:(state,action)=>{
            return state.filter((p)=>p.id!=action.payload);
        }
    }
});

export const {addTodoAction,delTodoAction}=TodoSlice.actions;
export default TodoSlice.reducer;