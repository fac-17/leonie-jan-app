import React from "react";
import ReactDOM from "react-dom";
import FinalPage from "../components/FinalPage";
import { render, fireEvent, cleanup } from "@testing-library/react";

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

})