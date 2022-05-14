import { ButtonGroup } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { Button, Container, Dropdown, Form } from "react-bootstrap";
import "../App.css";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Year } from "../interfaces/year";
//import { Course } from "../interfaces/course";
//import { Semesterter} from "../interfaces/term";

export function Requirements({
    catalog,
    plans,
    setPlans
}: {
    catalog: Record<string, Record<string, Course>>;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
}): JSX.Element {
    /*const ALLCOURSES = semesters.map((semester: Semester) =>
        semester.courses.map((oneCourse: Course): string => {
            return oneCourse.code;
        })
    );*/

    const BA: string[] = [
        "ENGL 110",
        "First Year Seminar",
        "Discovering Learning Experience",
        "Multicultural Requirement",
        "3crd Group A Breadth",
        "3 credits Group B Breadth",
        "3 credits Group C Breadth",
        "3 credits Group D Breadth",
        "Capstone",
        "Language Course",
        "Second Writing",
        "CISC 108",
        "CISC 181",
        "CISC 210",
        "CISC 220",
        "CISC 260",
        "CISC 275",
        "15 credits 300",
        "MATH 210",
        "MATH 241",
        "Total 124 credits"
    ];

    const BS: string[] = [
        "ENGL 110",
        "First Year Seminar",
        "Discovering Learning Experience",
        "Multicultural Requirement",
        "3crd Breadth",
        "3 credits Group B Breadth",
        "3 credits Group C Breadth",
        "3 credits Group D Breadth",
        "9 credits Engineering Breadth",
        "Capstone",
        "Language Course",
        "Second Writing",
        "CISC 108",
        "CISC 181",
        "CISC 210",
        "CISC 220",
        "CISC 260",
        "CISC 275",
        "CISC 303",
        "CISC 320",
        "CISC 355",
        "CISC 361",
        "CISC 372",
        "MATH 210",
        "MATH 241",
        "MATH 242",
        "Lab Requirement",
        "Advance Math",
        "6 credits CISC elective over 300",
        "12 credits focus area",
        "Total 124 credits"
    ];
    /*const COURSES = Object.values(EasyCatalog).map(
        (courses: Record<string, Course>): Course => ({
            Object.entries(courses).map(
                ([courseKey,course] : [string,Course]) => 
            )
        })
    );*/
    const [major, setMajor] = useState<string>("Major");
    const [bsba, setBSBA] = useState<string>("BS");
    const [conc, setConc] = useState<string>("Traditional Program");
    const redCourses: string[] = [];
    const greenCourses: string[] = [];
    const ALLCOURSES = plans.map((plan: Plan) =>
        plan.years.map((year: Year) =>
            year.semesters.map((semester: Semester) =>
                semester.courses.map((course: Course) => {
                    return course.code;
                })
            )
        )
    );

    return (
        <Container
            className="sidecolumns"
            id="move-when-scroll"
            style={{
                top: "0",
                position: "sticky"
            }}
        >
            <div>
                <ButtonGroup>
                    <Dropdown>
                        <Dropdown.Toggle
                            data-testid="dropdown-basic"
                            className="dropdown-basic"
                        >
                            {major}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Major or Minor?</Dropdown.Header>
                            <Dropdown.Item
                                data-testid="option-minor"
                                onClick={() => {
                                    setMajor("Minor");
                                    setConc("Traditional Program");
                                    setBSBA("BS");
                                }}
                            >
                                Minor
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option-major"
                                onClick={() => setMajor("Major")}
                            >
                                Major
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {major === "Major" && (
                        <Dropdown data-testid="concentration-row">
                            <Dropdown.Toggle
                                data-testid="dropdown-bsba"
                                className="dropdown-basic"
                            >
                                {bsba}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Header>Degree Type</Dropdown.Header>
                                <Dropdown.Item
                                    data-testid="option"
                                    onClick={() => setBSBA("BS")}
                                >
                                    BS
                                </Dropdown.Item>
                                <Dropdown.Item
                                    data-testid="option"
                                    onClick={() => {
                                        setBSBA("BA");
                                        setConc("Traditional Program");
                                    }}
                                >
                                    BA
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </ButtonGroup>
                {major === "Major" && bsba === "BS" && (
                    <Dropdown
                        data-testid="concentration-dropdown"
                        className="dropdown-basic"
                    >
                        <Dropdown.Toggle id="dropdown-basic">
                            {conc}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Concentration</Dropdown.Header>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("Traditional Program")}
                            >
                                Traditional Program
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("AI and Robotics")}
                            >
                                Artificial Intelligence and Robotics
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("Bioinformatics")}
                            >
                                Bioinformatics
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("Cybersecurity")}
                            >
                                Cybersecurity
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("Data Science")}
                            >
                                Data Science{" "}
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("HP Computing")}
                            >
                                High Performance Computing
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("Systems & Networks")}
                            >
                                Systems and Networks Concentration
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option"
                                onClick={() => setConc("Theory & Computation")}
                            >
                                Theory and Computation
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                {major === "Major" &&
                    bsba === "BS" &&
                    BS.map((req: string) => (
                        <div key={req}>
                            {" "}
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                label={req}
                            />
                        </div>
                    ))}
                {major === "Major" &&
                    bsba === "BA" &&
                    BA.map((req: string) => {
                        {
                            ALLCOURSES.map((first: string[][][]) =>
                                first.map((second: string[][]) =>
                                    second.map((third: string[]) =>
                                        third.map((fourth: string) => {
                                            {
                                                if (fourth !== req) {
                                                    return [
                                                        ...redCourses,
                                                        fourth
                                                    ];
                                                } else {
                                                    return [
                                                        ...greenCourses,
                                                        fourth
                                                    ];
                                                }
                                            }
                                        })
                                    )
                                )
                            );
                        }
                    })}
                {major === "Major" &&
                    bsba === "BA" &&
                    greenCourses.map((req: string) => {
                        return req;
                    })}
                {major === "Major" &&
                    bsba === "BA" &&
                    redCourses.map((req: string) => {
                        return req;
                    })}
            </div>
        </Container>
    );
}
