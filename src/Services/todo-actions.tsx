import { Dispatch } from "@reduxjs/toolkit";
import TodoData, { todoDatatype } from "../Data/Axios";
import { todoAction } from "./reducers";
import store from "./store";

export const DeleteTodo = (todoId: number) => {
    return async (dispatch: Dispatch) => {
        let todos = store.getState().todoReducer;
        let filteredTodo = todos.filter((todo) => todo.id !== todoId);
        try {
            await TodoData.deletePost(todoId).then(() => dispatch(todoAction.removeTodo(filteredTodo)));
        } catch (error) {
            console.log("Something went wrong");
        }
    };
};

export const AddTodo = (newTodo: todoDatatype) => {
    return async (dispatch: Dispatch) => {
        try {
            await TodoData.createTodo(newTodo);
            let newData = await TodoData.getTodos();
            dispatch(todoAction.addTodo(newData));
        } catch (error) {
            console.log("Something went wrong");
        }
    };
};
