import React from "react";
import { useSelector } from "react-redux";
import { stateType } from "../Services/reducers";

const AllTodo = () => {
    let todos = useSelector((state: stateType[]) => state);

    return (
        <>
            <div className="card">
                {todos.map((todo, index) => (
                    <div key={index} className="row mx-2 my-3">
                        <div className="col-sm-2">
                            <div className="h5">Title : </div>
                            <div className="h5">Body : </div>
                        </div>
                        <div className="col">
                            <div className="h5">{todo.title}</div>
                            <div className="h5">{todo.body}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllTodo;
