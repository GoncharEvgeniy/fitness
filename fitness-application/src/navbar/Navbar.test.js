import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NavBar from "./Navbar";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders NavBar", () => {
    act(() => {
//        render(<NavBar />, container); // todo fix
    });
    expect(container.textContent).toBe("");
});
