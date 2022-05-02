import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import { Course } from "../interfaces/course";
import { Years } from "./Years";
//import { Plan } from "../interfaces/plan";

export function CreatePlan(/*{
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}*/): JSX.Element {
    const [plan, setPlan] = useState<string[]>([]);
    const [name, setName] = useState<string>("");

    function addPlan(option: string) {
        setPlan([...plan, option]);
    }
    function clearPlan() {
        setPlan([]);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div style={{ border: "1px solid gray", padding: "4px" }}>
            <Form.Group controlId="dorPlanName">
                <Form.Label>New Plan Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <Button onClick={() => addPlan(name)}>Add Plan</Button>
            <Button onClick={clearPlan}>Delete All Plans</Button>
            {plan.map((onePlan: string) => (
                <div key={onePlan} style={{ marginBottom: "40px" }}>
                    <Container>
                        <Row>
                            <Col>
                                {onePlan} <Button>Delete</Button>
                                <Button>Edit</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Years /*catalog={catalog}*/></Years>
                        </Row>
                    </Container>
                </div>
            ))}
        </div>
    );
}
