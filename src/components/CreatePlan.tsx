import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Term } from "../interfaces/term";
import BasicTabs from "./Tabs";
//import { Course } from "../interfaces/course";
import { Years } from "./Years";
//import { Plan } from "../interfaces/plan";

export function CreatePlan({
    catalog,
    semesters,
    setSemesters
}: {
    catalog: Record<string, Record<string, Course>>;
    semesters: Term[];
    setSemesters: (s: Term[]) => void;
}): JSX.Element {
    const [plan, setPlan] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    function addPlan(option: string) {
        setPlan([...plan, option]);
        flipVisibility();
    }
    function clearPlan() {
        setPlan([]);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    return (
        <div>
            <div>
                <Button onClick={flipVisibility}>Add a plan</Button>
                <Button onClick={clearPlan}>Delete All Plans</Button>
                <Button>Export / Import Plan</Button>
                {visible && (
                    <>
                        <Form.Group controlId="dorPlanName">
                            <Form.Label>New Plan Name:</Form.Label>
                            <Form.Control
                                style={{
                                    width: "100%"
                                }}
                                value={name}
                                onChange={updateName}
                            />
                        </Form.Group>
                        <Button onClick={() => addPlan(name)}>Confirm</Button>
                    </>
                )}
            </div>
            {plan.length > 0 ? (
                <div
                    style={{
                        border: "3px solid black",
                        padding: "4px",
                        backgroundColor: "#bbdefb",
                        height: "100%",
                        margin: "10px"
                    }}
                >
                    <BasicTabs
                        plan={plan}
                        catalog={catalog}
                        semesters={semesters}
                        setSemesters={setSemesters}
                    ></BasicTabs>
                    {plan.map((onePlan: string) => (
                        <div key={onePlan} style={{ marginBottom: "40px" }}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{onePlan}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Years
                                        catalog={catalog}
                                        semesters={semesters}
                                        setSemesters={setSemesters}
                                    ></Years>
                                </Row>
                            </Container>
                        </div>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
