import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import Button from "./Button";
import App from "../App";
test("render with out crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

test("check Button Render", () => {
  const component = render(<Button />);
  const btn = component.getByTestId("button");
  expect(btn).toBeTruthy();

  //other method
  // const { getByTestId } = render(<Button />);
  // expect(getByTestId("button")).toBeTruthy();
});

test("Clicking each button", () => {
  const { getByTestId } = render(<App />);
  const { getAllByTestId } = render(<Button />);
  const btn = getAllByTestId("button");
  const header = getByTestId("header");
  expect(header.textContent).toBe("Button");

  btn.forEach((btn) => {
    document.querySelector(".header").textContent = "Button";

    fireEvent.click(btn);

    expect(header.textContent).toBe("Hello World");
  });
});
