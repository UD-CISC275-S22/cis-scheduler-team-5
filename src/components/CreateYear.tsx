import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";
import { CreateSemesters } from "./CreateSemesters";
function ShowForm({
    name,
    updateName,
    addYear,
    visible
}: {
    name: string;
    updateName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addYear: (s: string) => void;
    visible: boolean;
}): JSX.Element | null {
    if (visible) {
        return (
            <>
                <Form.Group controlId="forYearName">
                    <Form.Label>New Year Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
                <Button onClick={() => addYear(name)}>Confirm</Button>
            </>
        );
    } else {
        return null;
    }
}
export function CreateYear({
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
            <ShowForm
                name={name}
                updateName={updateName}
                addYear={addYear}
                visible={visible}
            ></ShowForm>
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
                                <CreateSemesters
                                    currentYear={currentYear}
                                    plans={plans}
                                    setPlans={setPlans}
                                    catalog={catalog}
                                ></CreateSemesters>
                            </Row>
                        </Container>
                    </div>
                );
            })}
        </div>
    );
}
