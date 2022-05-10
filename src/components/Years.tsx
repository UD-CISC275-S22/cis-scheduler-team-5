import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { ShowSemesters } from "./ShowSemesters";
export function Years({
    catalog,
    semesters,
    setSemesters
}: {
    catalog: Record<string, Record<string, Course>>;
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
}): JSX.Element {
    const [year, setYear] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    function addYear(option: string) {
        setYear([...year, option]);
        flipVisibility();
    }
    function clearYears() {
        setYear([]);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "4px",
                backgroundColor: "#dcedc8"
            }}
        >
            <Button onClick={flipVisibility}>Add a Year</Button>
            <Button onClick={clearYears}>Delete All Years</Button>
            {visible && (
                <>
                    <Form.Group controlId="forYearName">
                        <Form.Label>New Year Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Button onClick={() => addYear(name)}>Confirm</Button>
                </>
            )}
            {year.map((oneYear: string) => (
                <div key={oneYear} style={{ marginBottom: "4px" }}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>{oneYear} </h2>
                            </Col>
                        </Row>
                        <Row>
                            <ShowSemesters
                                catalog={catalog}
                                semesters={semesters}
                                setSemesters={setSemesters}
                            ></ShowSemesters>
                        </Row>
                    </Container>
                </div>
            ))}
        </div>
    );
}
