import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

let container = null;

beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders App", () => {
    act(() => {
        render(<App />, container);
    });
    expect(container.textContent).toBe("Fitness Main  Login ");
});
