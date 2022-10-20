import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers";

const store = configureStore({
    reducer: { todoReducer: todoSlice.reducer }, // now we can use multiple reducers in single store by adding an object
});

export type RootState = ReturnType<typeof store.getState>;

export const todoState = (state: RootState) => {
    return state.todoReducer;
}; // this is then passed as argument in every "useSelector(todoState)"

export default store;
export type AppDispatch = typeof store.dispatch;
