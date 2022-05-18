import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { CourseAdder } from "./CourseAdder";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

/*describe("allows courses to be found added to course pool", () => {
    test("should update on change", () => {});
});
*/

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

describe("CourseAdder tests", () => {
    test("Correct code shows up for a course", () => {
        render(
            <CourseAdder
                catalog={catalog}
                plans={[]}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                currentSemester={defaultSemester}
            />
        );
        const linkElement = screen.getByDisplayValue(/CISC 108/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct title shows up for a course", () => {
        render(
            <CourseAdder
                catalog={catalog}
                plans={[]}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                currentSemester={defaultSemester}
            />
        );
        const linkElement = screen.getByDisplayValue(
            /Introduction to Computer Science I/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct credits shows up for a course", () => {
        render(
            <CourseAdder
                catalog={catalog}
                plans={[]}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                currentSemester={defaultSemester}
            />
        );
        const linkElement = screen.getByDisplayValue(/3/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct restrictions shows up for a course", () => {
        render(
            <CourseAdder
                catalog={catalog}
                plans={[]}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                currentSemester={defaultSemester}
            />
        );
        const linkElement = screen.getByDisplayValue(/""/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct breadth shows up for a course", () => {
        render(
            <CourseAdder
                catalog={catalog}
                plans={[]}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                currentSemester={defaultSemester}
            />
        );
        const linkElement = screen.getByDisplayValue(
            /University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct type shows up for a course", () => {
        render(
            <CourseAdder
                catalog={catalog}
                plans={[]}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                currentSemester={defaultSemester}
            />
        );
        const linkElement = screen.getByDisplayValue(/Fall and Spring/i);
        expect(linkElement).toBeInTheDocument();
    });
});
