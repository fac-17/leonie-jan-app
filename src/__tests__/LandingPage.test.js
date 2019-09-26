import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import LandingPage from "../components/LandingPage";

describe("Testing LandingPage component", () => {
  test("Start Playing button displays after successful API call", () => {
    const { getByLabelText, getByText, findByText, debug } = render(
      <LandingPage />
    );
    const input = getByLabelText("Enter your Github name to get started");
    const buttonNode = getByText("Submit");

    const mockInput = {};
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(mockInput) })
      );

    fireEvent.change(input, { target: { value: "Jan" } });
    fireEvent.click(buttonNode);
    debug();
    return findByText("Start Playing");
  });
});

afterEach(cleanup);
