import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CourseAdder } from "./CourseAdder";
//import { ShowCourses } from "./ShowCourses";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
export function ShowSemesters({
    catalog,
    semesters,
    setSemesters
}: {
    catalog: Record<string, Record<string, Course>>;
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
}): JSX.Element {
    const newSemester: Semester = { season: "Fall", courses: [] };
    const newSemester2: Semester = { season: "Winter", courses: [] };
    const newSemester3: Semester = { season: "Spring", courses: [] };
    const newSemester4: Semester = { season: "Summer", courses: [] };
    //const newSemesters = [...semesters, newSemester, newSemester2, newSemester3, newSemester4];

    const col1 = [...semesters, newSemester, newSemester2];
    const col2 = [newSemester3, newSemester4];

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
                    <Col>
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
                    </Col>
                    <Col>
                        {col2.map((sem) => (
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
