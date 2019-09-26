import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render, fireEvent, cleanup } from "@testing-library/react";

// describe("Testing LandingPage component", () => {
//   test("Start Playing button displays after successful API call", () => {
//     const { getByLabelText, getByText, findByText, debug } = render(
//       <LandingPage />
//     );
//     const input = getByLabelText("Enter your Github name to get started");
//     const buttonNode = getByText("Submit");

//     const mockInput = {};
//     global.fetch = jest
//       .fn()
//       .mockImplementation(() =>
//         Promise.resolve({ json: () => Promise.resolve(mockInput) })
//       );

//     fireEvent.change(input, { target: { value: "Jan" } });
//     fireEvent.click(buttonNode);
//     debug();
//     return findByText("Start Playing");
//   });
// });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
