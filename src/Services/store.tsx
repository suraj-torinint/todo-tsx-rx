import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./reducers";

const store = configureStore({
    // reducer: {
    //     todos: todoReducers,
    // },
    reducer: todoReducers,
});

export default store;
// export type todoType = ReturnType<typeof todoReducers>;
