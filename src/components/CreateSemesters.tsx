import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";
import { CourseAdder } from "./CourseAdder";
export function CreateSemesters({
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
    const [visible, setVisible] = useState<boolean>(true);
    function AddNewSemesters({ visible }: { visible: boolean }): JSX.Element {
        if (visible) {
            return <Button onClick={flipVisibility}>4-Semester Default</Button>;
        } else {
            return <></>;
        }
    }
    function flipVisibility(): void {
        addSemesters();
        setVisible(false);
    }
    function addSemesters() {
        const newTerm: Semester = {
            id: currentYear.name + "1",
            season: "Fall",
            courses: []
        };
        const newTerm2: Semester = {
            id: currentYear.name + "2",
            season: "Winter",
            courses: []
        };
        const newTerm3: Semester = {
            id: currentYear.name + "3",
            season: "Spring",
            courses: []
        };
        const newTerm4: Semester = {
            id: currentYear.name + "4",
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
                    <AddNewSemesters visible={visible}></AddNewSemesters>
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
