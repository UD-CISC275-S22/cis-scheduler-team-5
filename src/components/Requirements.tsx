import React from "react";
import { Container, Form } from "react-bootstrap";
import "../App.css";

export function Requirements(): JSX.Element {
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
    return (
        <Container className="sidecolumns" id="move-when-scroll">
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
