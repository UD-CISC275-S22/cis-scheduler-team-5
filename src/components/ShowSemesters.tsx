import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CourseEditor } from "./CourseEditor";
//import { ShowCourses } from "./ShowCourses";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";
export function ShowSemesters({
    catalog,
    semesters,
    setSemesters,
    plans,
    setPlans,
    currentYear
}: {
    catalog: Record<string, Record<string, Course>>;
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
    currentYear: Year;
}): JSX.Element {
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
    //const newSemesters = [...semesters, newTerm, newTerm2, newTerm3, newTerm4];

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
                            newTerm2,
                            newTerm3,
                            newTerm4
                        ]
                    };
                }
            })
        })
    );
    setPlans(updateSemesters);

    const col1 = [...semesters, newTerm, newTerm2];
    const col2 = [newTerm3, newTerm4];

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
                                <CourseEditor
                                    key={sem.season}
                                    sem={sem}
                                    setSemesters={setSemesters}
                                    semesters={semesters}
                                    catalog={catalog}
                                ></CourseEditor>
                            </Col>
                        ))}
                        </Col>*/}
                    <Col>
                        {plans.map((plan: Plan) => ({
                            ...plan,
                            years: plan.years.map((year: Year) => ({
                                ...year,
                                semesters: year.semesters.map(
                                    (currentSemester: Semester) => {
                                        <Col key={currentSemester.id}>
                                            <CourseEditor
                                                key={currentSemester.id}
                                                currentSemester={
                                                    currentSemester
                                                }
                                                plans={plans}
                                                setPlans={setPlans}
                                                setSemesters={setSemesters}
                                                semesters={semesters}
                                                catalog={catalog}
                                            ></CourseEditor>
                                        </Col>;
                                    }
                                )
                            }))
                        }))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
