import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";
import { ShowSemesters } from "./ShowSemesters";
export function Years({
    catalog,
    plans,
    setPlans,
    currentPlan
}: {
    catalog: Record<string, Record<string, Course>>;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
    currentPlan: Plan;
}): JSX.Element {
    //const [year, setYear] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    function addYear(nameYear: string) {
        if (nameYear !== "") {
            const updatePlans = plans.map((plan: Plan): Plan => {
                if (plan.name !== currentPlan.name) {
                    return plan;
                } else {
                    return {
                        ...plan,
                        years: [
                            ...plan.years,
                            { name: nameYear, semesters: [] }
                        ]
                    };
                }
            });
            setPlans(updatePlans);
            flipVisibility();
        }
    }
    function clearYears() {
        const updatePlans = plans.map((plan: Plan) => {
            if (plan.name !== currentPlan.name) {
                return plan;
            } else {
                return {
                    ...plan,
                    years: []
                };
            }
        });
        setPlans(updatePlans);
    }
    function deleteOneYear(YearName: string) {
        const updatePlans = plans.map((plan: Plan) => {
            if (plan.name !== currentPlan.name) {
                return plan;
            } else {
                const temp = { ...plan };
                const updateYear = temp.years.filter(
                    (year: Year): boolean => year.name !== YearName
                );
                return {
                    ...plan,
                    years: updateYear
                };
            }
        });
        setPlans(updatePlans);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    function ShowForm(): JSX.Element {
        return (
            <>
                <Form.Group controlId="forYearName">
                    <Form.Label>New Year Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
                <Button onClick={() => addYear(name)}>Confirm</Button>
            </>
        );
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
            {currentPlan.years.map((currentYear: Year) => {
                return (
                    <div key={currentYear.name} style={{ marginBottom: "4px" }}>
                        <Container>
                            <Row>
                                <Col
                                    style={{
                                        display: "flex",
                                        marginLeft: "44%"
                                    }}
                                >
                                    <h2>{currentYear.name} </h2>
                                    <Button
                                        style={{
                                            display: "flex",
                                            marginLeft: "auto",
                                            height: "min-content",
                                            backgroundColor: "white",
                                            borderColor: "#127845",
                                            color: "red"
                                        }}
                                        onClick={() =>
                                            deleteOneYear(currentYear.name)
                                        }
                                    >
                                        X
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <ShowSemesters
                                    currentYear={currentYear}
                                    plans={plans}
                                    setPlans={setPlans}
                                    catalog={catalog}
                                ></ShowSemesters>
                            </Row>
                        </Container>
                    </div>
                );
            })}
        </div>
    );
}
