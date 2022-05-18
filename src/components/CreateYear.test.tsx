import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CreateYear } from "./CreateYear";
import userEvent from "@testing-library/user-event";
import { samplePlan } from "../interfaces/samplePlan";
const CATALOG = {
    ACCT: {
        "ACCT 166": {
            code: "ACCT 166",
            name: "SPECIAL PROBLEM",
            descr: "",
            credits: " 1-3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        }
    }
};
describe("CreateYear Component tests", () => {
    beforeEach(() => {
        render(
            <CreateYear
                catalog={CATALOG}
                plans={[samplePlan]}
                setPlans={() => true}
                currentPlan={samplePlan}
            />
        );
    });
    test("Add a Year Button lets you name and confirm a year", () => {
        const addYearButton = screen.getByText(/Add a Year/i);
        addYearButton.click();
        expect(screen.queryByText(/Confirm/i)).toBeInTheDocument();
        const yearName = screen.getByRole("textbox");
        userEvent.type(yearName, "Fresh");
        fireEvent.click(screen.getByRole("button", { name: /Confirm/i }));
        expect(screen.getByText(/Fresh/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /4-Semester Default/i })
        ).toBeInTheDocument();
    });
    test("You cannot confirm and add a year without a name", () => {
        fireEvent.click(screen.getByRole("button", { name: /Add a Year/i }));
        const yearName = screen.getByRole("textbox");
        fireEvent.change(yearName, { target: { value: "" } });
        fireEvent.click(screen.getByRole("button", { name: /Confirm/i }));
        expect(screen.getByText(/Confirm/i)).toBeInTheDocument();
    });
    test("Delete All Years button deletes all Year displays", () => {
        fireEvent.click(
            screen.getByRole("button", { name: /Delete All Years/i })
        );
        expect(screen.getByText(/Spring/i)).toBeInTheDocument();
    });
});
