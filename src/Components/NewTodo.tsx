import React from "react";

const NewTodo = () => {
    const handleForm = () => {
        
    }

    return (
        <>
            <div className="col-sm-4">
                <div className="fs-1 mb-4"><span className="text-secondary">Enter the Things you wish </span><span className="text-success fw-bold">ToDo</span></div>
                <form action="" onSubmit={handleForm}>
                    <div className="">
                        <label className="fs-2 mb-2" htmlFor="title">Title :</label>
                        <input type="text" name="title" id="title" className="form-control mb-2" />
                    </div>
                    <div className="">
                        <label className="fs-2 mb-2" htmlFor="body">Body :</label>
                        <textarea name="body" id="body" rows={7} className="form-control mb-2" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewTodo;
