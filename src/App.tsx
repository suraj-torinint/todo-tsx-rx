import AllTodo from "./Components/AllTodo";
import NewTodo from "./Components/NewTodo";

const App = () => {
    return (
        <>

            <div className="alert alert-primary text-center" role="alert">
                <span className="display-3 fw-bold me-3">Todo App</span>
                <span className=""> in Typescript using Redux</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <NewTodo />
                    </div>
                    <div className="col">
                        <AllTodo/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
