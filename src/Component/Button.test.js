import { render, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom';
import Button from "./Button";

it("render with out crashing", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>,div);
;})

it("checkButtonRender", () => {
  const { getByTestId } = render(<Button/>);
  const btn = getByTestId("button");
  expect(btn).toBeTruthy();
});

// describe("clickButton", () => {
//   it("onClick", () => {
//     const { queryByTitle } = render(<Button />);
//     const btn = queryByTitle("button");
//     expect(q.textContent).toBe("Buttons");
//     fireEvent.click(btn);
//     expect(q.textContent).toBe("Hello World");
//   });
// });
