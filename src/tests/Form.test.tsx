import "@testing-library/jest-dom";
import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NewTodo from "../Components/NewTodo";
import store from "../Services/store";

const render = (component: JSX.Element) => {
    rtlRender(
        <BrowserRouter>
            <Provider store={store}>{component}</Provider>
        </BrowserRouter>,
    );
};

describe("testing form component of todo", () => {
    test("testing if initially form is empty", () => {
        render(<NewTodo />);

        const title = screen.getByRole("textbox", { name: /title/i });
        const body = screen.getByRole("textbox", { name: /body/i });
        const button = screen.getByRole("button", { name: /submit/i });
        expect(title).toBeInTheDocument();
        expect(title).toHaveValue("");
        expect(body).toBeInTheDocument();
        expect(body).toHaveValue("");
        expect(button).toBeInTheDocument();
    });

    test("testing form to be empty after filling the form", () => {
        render(<NewTodo />);

        const title = screen.getByRole("textbox", { name: /title/i });
        const body = screen.getByRole("textbox", { name: /body/i });
        const button = screen.getByRole("button", { name: /submit/i });
        userEvent.type(title, "Implemented test");
        userEvent.type(body, "Implemented test");
        userEvent.click(button);

        expect(title).toHaveValue("");
        expect(body).toHaveValue("");
    });
});
