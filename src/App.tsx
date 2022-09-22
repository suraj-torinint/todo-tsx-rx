import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import Header from "./Pages/Header";
import DetailTodo from "./Pages/DetailTodo";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to={"/todos"} />} />
                    <Route path="/todos" element={<Home />} />
                    <Route path="/todos/:id" element={<DetailTodo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
