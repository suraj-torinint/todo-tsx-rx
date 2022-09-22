import React from "react";

const NewTodo = () => {
    return (
        <>
            <div className="fs-3 text-muted fw-bold mb-4">Enter the Things you wish ToDo</div>
            <form action="">
                <div className="">
                    <label htmlFor="title">Title :</label>
                    <input type="text" name="title" id="title" className="form-control" />
                </div>
                <div className="">
                    <label htmlFor="body">Body :</label>
                    <textarea name="body" id="body" rows={4} className="form-control" />
                </div>
            </form>
        </>
    );
};

export default NewTodo;
