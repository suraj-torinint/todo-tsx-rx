import React, { ChangeEvent, useReducer } from "react";
import { useDispatch } from "react-redux";
import TodoData, { todoDatatype } from "../Data/Axios";

interface initActionType {
    type: string;
    payload: any;
}
interface initstateType {
    title: string;
    body: string;
    titleTouched: boolean;
    bodyTouched: boolean;
}

const initialState: initstateType = {
    title: "",
    body: "",
    titleTouched: false,
    bodyTouched: false,
};

const reducer = (state: initstateType, action: initActionType) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.payload };
        case "body":
            return { ...state, body: action.payload };
        case "titleT":
            return { ...state, titleTouched: action.payload };
        case "bodyT":
            return { ...state, bodyTouched: action.payload };
        default:
            return state;
    }
};

const NewTodo = () => {
    const [state, redispatch] = useReducer(reducer, initialState);
    const dispatch = useDispatch();

    const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
        redispatch({ type: "title", payload: event.target.value });
        redispatch({ type: "titleT", payload: true });
    };

    const handleBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
        redispatch({ type: "body", payload: event.target.value });
        redispatch({ type: "bodyT", payload: true });
    };

    // valid
    let validTitle = state.title !== "";
    let validBody = state.body !== "";
    // Invalid
    let InvalidTitle = !validTitle && state.titleTouched;
    let InvalidBody = !validBody && state.bodyTouched;

    const handleForm = (event: React.FormEvent) => {
        event.preventDefault();
        redispatch({ type: "titleT", payload: true });
        redispatch({ type: "bodyT", payload: true });
        if (!validTitle || !validBody) {
            return;
        }
        let newData: todoDatatype = {
            title: state.title,
            body: state.body,
        };
        console.log(newData);
        // debugger
        TodoData.createTodo(newData).then(() => dispatch({ type: "addTodo", payload: [newData] }));
        redispatch({ type: "title", payload: "" });
        redispatch({ type: "body", payload: "" });
        redispatch({ type: "titleT", payload: false });
        redispatch({ type: "bodyT", payload: false });
        // handleReset()  <== we can use this also to reset the form
    };

    const handleReset = (event?: React.MouseEvent) => {
        event?.preventDefault();
        redispatch({ type: "title", payload: "" });
        redispatch({ type: "body", payload: "" });
        redispatch({ type: "titleT", payload: false });
        redispatch({ type: "bodyT", payload: false });
    };

    return (
        <>
            <div className="col-sm-4">
                <div className="fs-1 mb-4">
                    <span className="text-secondary">Enter the Things you wish </span>
                    <span className="text-success fw-bold">ToDo</span>
                </div>
                <form action="" onSubmit={handleForm}>
                    <div className="">
                        <label className="fs-2 mb-2" htmlFor="title">
                            Title :
                        </label>
                        <input value={state.title} onBlur={handleTitle} onChange={handleTitle} type="text" name="title" id="title" className="form-control mb-2" />
                        {InvalidTitle && <p className="text-danger">Title Cannot Be Empty</p>}
                    </div>
                    <div className="">
                        <label className="fs-2 mb-2" htmlFor="body">
                            Body :
                        </label>
                        <textarea value={state.body} onBlur={handleBody} onChange={handleBody} name="body" id="body" rows={7} className="form-control mb-2" />
                        {InvalidBody && <p className="text-danger">Body Cannot Be Empty</p>}
                    </div>
                    <button className="btn btn-danger" type="submit">
                        Submit
                    </button>
                    <button onClick={handleReset} className="d-none" type="reset">
                        reset
                    </button>
                </form>
            </div>
        </>
    );
};

export default NewTodo;
