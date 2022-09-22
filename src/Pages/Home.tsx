import React from "react";
import AllTodo from "../Components/AllTodo";
import NewTodo from "../Components/NewTodo";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <NewTodo />
                    <AllTodo />
                </div>
            </div>
        </>
    );
};

export default Home;
