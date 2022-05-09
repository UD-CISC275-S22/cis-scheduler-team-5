import React from "react";
import { Container, Form } from "react-bootstrap";
import "../App.css";
//import { Course } from "../interfaces/course";
//import { Term } from "../interfaces/term";

export function Requirements(): JSX.Element {
    //const BSdata = BS;
    const requirementsBS: string[] = [
        "CISC 108",
        "CISC 181",
        "CISC 210",
        "CISC 220",
        "CISC 260",
        "CISC 275",
        "CISC 303",
        "CISC 320",
        "CISC 361",
        "CISC 372",
        "MATH 210",
        "MATH 241",
        "MATH 242",
        "6 credits 300",
        "Other requirements",
        "Total 124 credits"
    ];

    const BA: string[] = [
        "ENGL 110",
        "First Year Seminar",
        "Discovering Learning Experience",
        "Multicultural Requirement",
        "3 credits Group A Breadth",
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
        "3 credits Group A Breadth",
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
    return (
        <Container
            className="sidecolumns"
            id="move-when-scroll"
            style={{
                top: "0",
                position: "sticky"
            }}
        >
            <h2 className="subtitle">Degree Requirements</h2>
            {requirementsBS.map((req: string) => (
                <div key={req}>
                    {" "}
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label={req}
                    />
                </div>
            ))}
        </Container>
    );
}
