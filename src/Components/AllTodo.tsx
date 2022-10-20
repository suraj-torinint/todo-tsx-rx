import { Link } from "react-router-dom";
import { todoDatatype } from "../Data/Axios";
import { useAppDispatch } from "../Services/custom-hooks";
import { DeleteTodo } from "../Services/todo-actions";

const AllTodo = (todo: todoDatatype) => {
    const { id, title, body } = todo;
    let dispatch = useAppDispatch();
    const handledelete = () => {
        dispatch(DeleteTodo(id as number));
    };

    return (
        <>
            <div key={id} className={`row mx-2 my-3 align-items-center ${id}`}>
                <div className="col-sm-10">
                    <div className="h5 text-muted">
                        Title :{" "}
                        <Link to={`/todos/${id}`} className="h5 text-dark text-decoration-none">
                            {title}
                        </Link>
                    </div>
                    <div className="h5 text-muted">
                        Body :{" "}
                        <Link to={`/todos/${id}`} className="h5 text-dark text-decoration-none">
                            {body}
                        </Link>
                    </div>
                </div>
                <div className="col text-center align-middle">
                    <button onClick={handledelete} className="btn btn-danger align-middle">
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default AllTodo;
