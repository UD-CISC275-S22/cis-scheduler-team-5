import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Course } from "../interfaces/course";
import { CourseModal } from "./CourseModal";
import { Semester } from "../interfaces/semester";

const defaultCourse: Course = {
    code: "",
    name: "",
    descr: "",
    credits: "",
    preReq: "",
    restrict: "",
    breadth: "",
    typ: ""
};

const testCourse: Course = {
    code: "CISC 108",
    name: "Introduction to Computer Science I",
    descr: "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics.",
    credits: " 3",
    preReq: "",
    restrict: "",
    breadth:
        "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
    typ: "Fall and Spring"
};

const defaultSemester: Semester = {
    id: "",
    season: "Fall",
    courses: [defaultCourse, testCourse]
};

describe("CourseModal tests", () => {
    test("There is a close button", () => {
        render(
            <CourseModal
                course={testCourse}
                currentSemester={defaultSemester}
                show={false}
                setShow={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const closeButton = screen.getByRole("button", {
            name: /Close/i
        });
        expect(closeButton).toBeInTheDocument();
    });

    test("There is a save changes button", () => {
        render(
            <CourseModal
                course={testCourse}
                currentSemester={defaultSemester}
                show={false}
                setShow={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const saveChangesButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        expect(saveChangesButton).toBeInTheDocument();
    });
});
