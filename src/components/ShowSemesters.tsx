import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";
import { CourseAdder } from "./CourseAdder";
export function ShowSemesters({
    catalog,
    plans,
    setPlans,
    currentYear
}: {
    catalog: Record<string, Record<string, Course>>;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
    currentYear: Year;
}): JSX.Element {
    //const newSemesters = [...semesters, newTerm, newTerm2, newTerm3, newTerm4];
    const [visible, setVisible] = useState<boolean>(true);
    function addSemesters() {
        setVisible(false);
        const newTerm: Semester = {
            id: currentYear.name + "Fall",
            season: "Fall",
            courses: []
        };
        const newTerm2: Semester = {
            id: currentYear.name + "Winter",
            season: "Winter",
            courses: []
        };
        const newTerm3: Semester = {
            id: currentYear.name + "Spring",
            season: "Spring",
            courses: []
        };
        const newTerm4: Semester = {
            id: currentYear.name + "Summer",
            season: "Summer",
            courses: []
        };
        const updateSemesters: Plan[] = plans.map(
            (plan: Plan): Plan => ({
                ...plan,
                years: plan.years.map((year: Year): Year => {
                    if (year.name !== currentYear.name) {
                        return year;
                    } else {
                        return {
                            ...year,
                            semesters: [
                                ...year.semesters,
                                newTerm,
                                newTerm3,
                                newTerm2,
                                newTerm4
                            ]
                        };
                    }
                })
            })
        );
        setPlans(updateSemesters);
    }

    //const col1 = [...semesters, newTerm, newTerm2];
    //const col2 = [newTerm3, newTerm4];

    return (
        <div>
            <Container
                style={{
                    border: "1px solid gray",
                    padding: "4px",
                    backgroundColor: "white"
                }}
            >
                <Row>
                    {/*<Col>
                        {col1.map((sem) => (
                            <Col key={sem.season}>
                                {" "}
                                <CourseAdder
                                    key={sem.season}
                                    sem={sem}
                                    setSemesters={setSemesters}
                                    semesters={semesters}
                                    catalog={catalog}
                                ></CourseAdder>
                            </Col>
                        ))}
                        </Col>*/}
                    {visible && (
                        <Button onClick={addSemesters}>
                            4-Semester Default
                        </Button>
                    )}
                    {currentYear.semesters.map((currentSemester: Semester) => {
                        return (
                            <Col key={currentSemester.id}>
                                <CourseAdder
                                    currentSemester={currentSemester}
                                    plans={plans}
                                    setPlans={setPlans}
                                    catalog={catalog}
                                ></CourseAdder>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}
