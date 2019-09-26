import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Follower from "../components/Follower";

describe("Test Follower",()=>{
    test("Component renders",()=>{
            const div = document.createElement("div");
            ReactDOM.render(<Follower follower={{}}/>, div);
            ReactDOM.unmountComponentAtNode(div);
    });
    test("It has img src coorectly",()=>{
        const {getByTestId}=render(<Follower follower={{img:"fake_pic"}}/>)
        expect(getByTestId("avatar").src.endsWith("fake_pic")).toBe(true);
    })
    test("It has no class safe if dangerous",()=>{
        const {getByTestId}=render(<Follower follower={{dangerous:true}}/>)
       expect(getByTestId("follower").classList.contains("safe")).toBe(false)
    })
    test("It has a class safe if not dangerous",()=>{
        const {getByTestId}=render(<Follower follower={{dangerous:false}}/>)
       expect(getByTestId("follower").classList.contains("safe")).toBe(true)
    })
    
})