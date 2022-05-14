import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CourseEditor } from "./CourseEditor";
//import { ShowCourses } from "./ShowCourses";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";
import { ShowCourses } from "./ShowCourses";
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
    console.log(currentYear.name);
    function addSemesters() {
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
                    <Button onClick={addSemesters}>ADD</Button>
                    {plans.map((plan: Plan) =>
                        plan.years.map((year: Year) =>
                            year.semesters.map((currentSemester: Semester) => {
                                return (
                                    <Col key={currentSemester.id}>
                                        <CourseEditor
                                            currentSemester={currentSemester}
                                            plans={plans}
                                            setPlans={setPlans}
                                            catalog={catalog}
                                        ></CourseEditor>
                                    </Col>
                                );
                            })
                        )
                    )}
                </Row>
            </Container>
        </div>
    );
}
