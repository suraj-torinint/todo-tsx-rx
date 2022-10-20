import { createSlice } from "@reduxjs/toolkit";
import { todoDatatype } from "../Data/Axios";

export interface actionType {
    type: string;
    payload?: any;
}

const initialState: todoDatatype[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        setTodo(state, action) {
            return action.payload;
        },
        getATodo(state, action) {
            return action.payload;
        },
        addTodo(state, action) {
            return action.payload;
        },
        removeTodo(state, action) {
            return action.payload;
        },
    },
});

export const todoAction = todoSlice.actions;
export default todoSlice;
