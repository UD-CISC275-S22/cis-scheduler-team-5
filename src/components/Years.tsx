import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { ShowSemesters } from "./ShowSemesters";
export function Years({
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}): JSX.Element {
    const [year, setYear] = useState<string[]>([]);
    const [name, setName] = useState<string>("");

    function addYear(option: string) {
        setYear([...year, option]);
    }
    function clearYears() {
        setYear([]);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "4px",
                backgroundColor: "#dcedc8"
            }}
        >
            <Form.Group controlId="forYearName">
                <Form.Label>New Year Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <Button onClick={() => addYear(name)}>Add Year</Button>
            <Button onClick={clearYears}>Delete All Years</Button>
            {year.map((oneYear: string) => (
                <div key={oneYear} style={{ marginBottom: "4px" }}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>{oneYear} </h2>
                            </Col>
                        </Row>
                        <Row>
                            <ShowSemesters catalog={catalog}></ShowSemesters>
                        </Row>
                    </Container>
                </div>
            ))}
        </div>
    );
}
