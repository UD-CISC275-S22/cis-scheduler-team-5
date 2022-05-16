import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { CSVFile } from "./CSVFile";
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
    /*const Credits = plans.map((plan: Plan) =>
        plan.years.map((year: Year) => {
            year.semesters.map((semester: Semester) =>
                semester.courses.map((course: Course) => {
                    return parseInt(course.credits);
                })
            );
        })
    );*/
    function addPlan(namePlan: string) {
        if (namePlan !== "") {
            const newPlan: Plan = { name: namePlan, years: [] };
            const update: Plan[] = [...plans, newPlan];
            setPlans(update);
            flipVisibility();
        }
    }

    function clearPlan() {
        setPlans([]);
    }
    function deleteOnePlan(PlanName: string) {
        const temp = [...plans];
        const updatePlans = temp.filter(
            (plan: Plan): boolean => plan.name !== PlanName
        );
        setPlans(updatePlans);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    function YearContent(): JSX.Element {
        return (
            <>
                {" "}
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
        );
    }
    function ShowPlan(): JSX.Element {
        if (plans.length > 0) {
            return (
                <div
                    style={{
                        border: "3px solid black",
                        padding: "4px",
                        backgroundColor: "#bbdefb",
                        height: "100%",
                        margin: "10px"
                    }}
                >
                    {plans.map((currentPlan: Plan) => {
                        return (
                            <div
                                key={currentPlan.name}
                                style={{ marginBottom: "40px" }}
                            >
                                <Container>
                                    <Row>
                                        <Col
                                            style={{
                                                display: "flex",
                                                marginLeft: "43%"
                                            }}
                                        >
                                            <h1>{currentPlan.name}</h1>
                                            <Button
                                                style={{
                                                    display: "flex",
                                                    marginLeft: "auto",
                                                    height: "min-content",
                                                    backgroundColor: "white",
                                                    color: "red"
                                                }}
                                                onClick={() =>
                                                    deleteOnePlan(
                                                        currentPlan.name
                                                    )
                                                }
                                            >
                                                X
                                            </Button>
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
                                    <Row>
                                        <CSVFile></CSVFile>
                                    </Row>
                                </Container>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    return (
        <div>
            <div>
                <Button onClick={flipVisibility}>Add a plan</Button>
                <Button onClick={clearPlan}>Delete All Plans</Button>
                {visible && <YearContent />}
            </div>
            <ShowPlan></ShowPlan>
        </div>
    );
}
