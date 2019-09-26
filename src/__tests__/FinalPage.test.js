import React from "react";
import ReactDOM from "react-dom";
import FinalPage from "../components/FinalPage";
import { render, fireEvent } from "@testing-library/react";

describe("Test FinalPage",()=>{
    test("Page renders",()=>{
            const div = document.createElement("div");
            ReactDOM.render(<FinalPage />, div);
            ReactDOM.unmountComponentAtNode(div);
    });
    test("It shows the score",()=>{
        const {getByText}=render(<FinalPage score={666}/>)
        getByText("Your score is: 666"); 
    })
    test("It shows the killer",()=>{
        const {getByText}=render(<FinalPage killer={"Jan"}/>)
        getByText("Jan"); 
    })
    test("It shows the player name",()=>{
        const {getByText}=render(<FinalPage name={"crianonim" }/>)
        getByText("Game Over crianonim"); 
    })
    test("It reacts to a click and moves to Landing page",()=>{
        const setPage=jest.fn();
        const {getByText}=render(<FinalPage setPage={setPage} setScore={jest.fn()}name={"crianonim" }/>)
        const button=getByText("Play Again");
        fireEvent.click(button);
        expect(setPage).toBeCalledTimes(1);
        expect(setPage).toBeCalledWith("LandingPage")
        
    })
})