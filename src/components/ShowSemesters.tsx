import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CourseEditor } from "./Courses";
//import { ShowCourses } from "./ShowCourses";
import { Course } from "../interfaces/course";
export function ShowSemesters({
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}): JSX.Element {
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
                    <Row>
                        <Col>
                            Fall Semester
                            <CourseEditor catalog={catalog}></CourseEditor>
                        </Col>
                        <Col>
                            Spring Semester
                            <CourseEditor catalog={catalog}></CourseEditor>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Winter Session
                            <CourseEditor catalog={catalog}></CourseEditor>
                        </Col>
                        <Col>
                            Summer Session
                            <CourseEditor catalog={catalog}></CourseEditor>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}
