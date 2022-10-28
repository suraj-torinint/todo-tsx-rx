import "@testing-library/jest-dom";
import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AllTodo from "../Components/AllTodo";
import store from "../Services/store";

const render = (component: JSX.Element) => {
    rtlRender(
        <BrowserRouter>
            <Provider store={store}>{component}</Provider>
        </BrowserRouter>,
    );
};

let singleTodo = store.getState().todoReducer.map((todo) => todo)[2];

describe("testing todo list", () => {
    test("testing single todo", async () => {
        render(<AllTodo {...singleTodo} />);

        waitFor(() => {
            const title = screen.getByText("implemented thunk", { exact: false });
            const body = screen.getByText("implemented thunk", { exact: false });
            expect(title).toBeInTheDocument();
            expect(body).toBeInTheDocument();
        });
    });
});
