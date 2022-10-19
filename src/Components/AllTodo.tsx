import { useEffect } from "react";
import { Link } from "react-router-dom";
import TodoData from "../Data/Axios";
import { useAppDispatch, useAppSelector } from "../Services/custom-hooks";
import { todoAction } from "../Services/reducers";
import { todoState } from "../Services/store";

const AllTodo = () => {
    const todos = useAppSelector(todoState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        TodoData.getTodos().then((data) => dispatch(todoAction.setTodo(data)));
    }, [dispatch]);

    return (
        <>
            <div className="col">
                <div className="card mb-3">
                    {todos.map((todo, index) => (
                        <div key={index} className="row mx-2 my-3 align-items-center">
                            <div className="col-sm-10">
                                <div className="h5 text-muted">
                                    Title :{" "}
                                    <Link to={`/todos/${todo.id}`} className="h5 text-dark text-decoration-none">
                                        {todo.title}
                                    </Link>
                                </div>
                                <div className="h5 text-muted">
                                    Body :{" "}
                                    <Link to={`/todos/${todo.id}`} className="h5 text-dark text-decoration-none">
                                        {todo.body}
                                    </Link>
                                </div>
                            </div>
                            <div className="col text-center align-middle">
                                <button className="btn btn-danger align-middle">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllTodo;
