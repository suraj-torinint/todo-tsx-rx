import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="alert alert-primary text-center" role="alert">
                <Link to={"/todos"} className="display-3 fw-bold me-3 text-decoration-none text-reset">Todo App</Link>
                <span className=""> in Typescript using Redux</span>
            </div>
        </>
    );
};

export default Header;
