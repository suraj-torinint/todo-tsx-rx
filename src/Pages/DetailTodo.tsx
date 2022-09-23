import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TodoData from "../Data/Axios";
import { todoAction } from "../Services/reducers";
import { todoState } from "../Services/store";

const DetailTodo = () => {
    const params = useParams<{ id: string }>();
    const todo = useSelector(todoState);
    const dispatch = useDispatch();

    useEffect(() => {
        TodoData.getATodo(Number(params.id)).then((data) => dispatch(todoAction.getATodo([data])));
    }, [dispatch, params.id]);

    return (
        <>
            <div className="container">
                {todo.map((todo, index) => (
                    <div className="card px-2 py-3" key={index}>
                        <div className="card-body mx-5">
                            <span className="text-muted display-5">Title : </span>
                            <span className="display-5">{todo.title}</span>
                            <div className="mt-5">
                                <span className="text-muted display-5">Body : </span>
                                <span className="display-5">{todo.body}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DetailTodo;
