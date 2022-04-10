import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CourseEditor } from "./Courses";
export function ShowSemesters(): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>Freshman Year</Col>
                </Row>
                <Row>
                    <Col>Fall Semester</Col>
                    <Col>Winter Session</Col>
                    <Col>Spring Semester</Col>
                    <Col>Summer Session</Col>
                </Row>
                <Row>
                    <CourseEditor
                        courseOptions={[]}
                        termOptions={[]}
                    ></CourseEditor>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Sophomore Year</Col>
                </Row>
                <Row>
                    <Col>Fall Semester</Col>
                    <Col>Winter Session</Col>
                    <Col>Spring Semester</Col>
                    <Col>Summer Session</Col>
                </Row>
                <Row>
                    <CourseEditor
                        courseOptions={[]}
                        termOptions={[]}
                    ></CourseEditor>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Junior Year</Col>
                </Row>
                <Row>
                    <Col>Fall Semester</Col>
                    <Col>Winter Session</Col>
                    <Col>Spring Semester</Col>
                    <Col>Summer Session</Col>
                </Row>
                <Row>
                    <CourseEditor
                        courseOptions={[]}
                        termOptions={[]}
                    ></CourseEditor>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Senior Year</Col>
                </Row>
                <Row>
                    <Col>Fall Semester</Col>
                    <Col>Winter Session</Col>
                    <Col>Spring Semester</Col>
                    <Col>Summer Session</Col>
                </Row>
                <Row>
                    <CourseEditor
                        courseOptions={[]}
                        termOptions={[]}
                    ></CourseEditor>
                </Row>
            </Container>
        </div>
    );
}
