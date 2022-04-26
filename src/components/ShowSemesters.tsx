import React from "react";
import { Col, Container, Row } from "react-bootstrap";
//import { Course } from "../interfaces/course";
//import { CourseEditor } from "./Courses";
export function ShowSemesters(/*{
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}*/): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>Fall Semester</Col>
                    <Col>Winter Session</Col>
                    <Col>Spring Semester</Col>
                    <Col>Summer Session</Col>
                </Row>
            </Container>
        </div>
    );
}
