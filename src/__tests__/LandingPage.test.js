import React from "react";
import { render, cleanup } from "@testing-library/react";
import LandingPage from "../components/LandingPage";

describe("Testing LandingPage component", () => {
  test("Start Playing button displays after successful API call", () => {
    const { findByText } = render(
      <LandingPage setName={jest.fn()} githubObject={{}} />
    );
    return findByText("Start Playing");
  });
  test("Check if avatar is correctly set",()=>{
    const {  getByTestId } = render(
      <LandingPage  githubObject={{avatar_url:"fake_pic"}}/>
      );
      expect(getByTestId("avatar").src.endsWith("fake_pic")).toBe(true)
  })
});

afterEach(cleanup);
