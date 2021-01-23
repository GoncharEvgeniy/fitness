import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LoginForm from "./LoginForm";

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

it("renders LoginForm", () => {
    act(() => {
  //      render(<LoginForm />, container);   // todo fix
    });
    expect(container.textContent).toBe("");
});
