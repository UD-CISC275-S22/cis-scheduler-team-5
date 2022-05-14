import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
//import BasicTabs from "./Tabs";
//import { Course } from "../interfaces/course";
import { Years } from "./Years";
//import { Plan } from "../interfaces/plan";

export function CreatePlan({
    catalog,
    plans,
    setPlans
}: {
    catalog: Record<string, Record<string, Course>>;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
}): JSX.Element {
    //const [plan, setPlan] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    function addPlan(namePlan: string) {
        const newPlan: Plan = { name: namePlan, years: [] };
        const update: Plan[] = [...plans, newPlan];
        setPlans(update);
        flipVisibility();
    }
    function clearPlan() {
        setPlans([]);
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
            {plans.length > 0 ? (
                <div
                    style={{
                        border: "3px solid black",
                        padding: "4px",
                        backgroundColor: "#bbdefb",
                        height: "100%",
                        margin: "10px"
                    }}
                >
                    {plans.map((currentPlan: Plan) => (
                        <div
                            key={currentPlan.name}
                            style={{ marginBottom: "40px" }}
                        >
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{currentPlan.name}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Years
                                        currentPlan={currentPlan}
                                        plans={plans}
                                        setPlans={setPlans}
                                        catalog={catalog}
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
