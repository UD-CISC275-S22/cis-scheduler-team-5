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
            <Container>
                <Row>
                    <Row>
                        <Col>
                            Fall Semester
                            <CourseEditor catalog={catalog}></CourseEditor>
                        </Col>
                        <Col>Winter Session</Col>
                    </Row>
                    <Row>
                        <Col>Spring Semester</Col>
                        <Col>Summer Session</Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}
