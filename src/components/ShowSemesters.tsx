import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CourseEditor } from "./Courses";
//import { ShowCourses } from "./ShowCourses";
import { Course } from "../interfaces/course";
import { Term } from "../interfaces/term";
export function ShowSemesters({
    catalog,
    semesters,
    setSemesters
}: {
    catalog: Record<string, Record<string, Course>>;
    semesters: Term[];
    setSemesters: (s: Term[]) => void;
}): JSX.Element {
    const newTerm: Term = { season: "Fall", courses: [] };
    const newTerm2: Term = { season: "Winter", courses: [] };
    const newTerm3: Term = { season: "Spring", courses: [] };
    const newTerm4: Term = { season: "Summer", courses: [] };
    //const newSemesters = [...semesters, newTerm, newTerm2, newTerm3, newTerm4];

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
                    <Col>
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
                    </Col>
                    <Col>
                        {col2.map((sem) => (
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
