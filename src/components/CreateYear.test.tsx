export {};
/*
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CreateYear } from "./CreateYear";
import userEvent from "@testing-library/user-event";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import App from "../App";

describe("CreateYear Component tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("Add a Year Button lets you name and confirm a year", () => {
        const addYearButton = screen.getByText(/Add a Year/i);
        addYearButton.click();
        expect(screen.queryByText(/Confirm/i)).toBeInTheDocument();
    });
    test("You cannot confirm and add a year without a name", () => {
        const addYearButton = screen.getByText(/Add a Year/i);
        addYearButton.click();
        // what if the create plan form is open and there are 2 confirm buttons?
        const confirmButton = screen.getByRole("button", { name: /confirm/i });
        confirmButton.click();
    });
});
*/
