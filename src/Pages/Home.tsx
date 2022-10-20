import React, { useEffect } from "react";
import AllTodo from "../Components/AllTodo";
import NewTodo from "../Components/NewTodo";
import TodoData from "../Data/Axios";
import { useAppSelector, useAppDispatch } from "../Services/custom-hooks";
import { todoAction } from "../Services/reducers";
import { todoState } from "../Services/store";

const Home = () => {
    const todos = useAppSelector(todoState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let todoItems = async () => TodoData.getTodos().then((data) => dispatch(todoAction.setTodo(data)));
        try {
            todoItems();
        } catch (error) {
            console.log("Failed to load data");
        }
    }, [dispatch]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <NewTodo />
                    <div className="col">
                        <div className="card mb-3">
                            {todos.map((todo, index) => (
                                <AllTodo key={index} {...todo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
