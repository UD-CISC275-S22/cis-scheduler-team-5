import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEditor } from "./Courses";
export function ShowSemesters({
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Fall Semester
                        <CourseEditor catalog={catalog}></CourseEditor>
                    </Col>
                    <Col>
                        Winter Session
                        <CourseEditor catalog={catalog}></CourseEditor>
                    </Col>
                    <Col>
                        Spring Semester
                        <CourseEditor catalog={catalog}></CourseEditor>
                    </Col>
                    <Col>
                        Summer Session
                        <CourseEditor catalog={catalog}></CourseEditor>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
