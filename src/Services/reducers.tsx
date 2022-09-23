import { createSlice } from "@reduxjs/toolkit";

export interface actionType {
    type: string;
    payload?: any;
}

export interface stateType {
    id?: number;
    title: string;
    body: string;
}

const initialState: stateType[] = [];

const todoSlice = createSlice({
    name : "todos",
    initialState:initialState,
    reducers : {
        setTodo(state, action){
            return [...action.payload]
        },
        getATodo(state, action){
            return [...action.payload]
        },
        addTodo(state, action){
            return [...state, ...action.payload]
        }
    }
})

// const todoReducers = (state: stateType[] = initialState, action: actionType) => {
//     switch (action.type) {
//         case "setTodo":
//             return [...action.payload];
//         case "getATodo":
//             return [...action.payload];
//         case "addTodo":
//             return [...state, ...action.payload];
//         default:
//             return state;
//     }
// };   // not required once we implement the redux-toolkit

export const todoAction = todoSlice.actions
export default todoSlice;
