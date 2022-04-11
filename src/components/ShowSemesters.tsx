import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CourseEditor } from "./Courses";
export function ShowSemesters(): JSX.Element {
    const SEMESTERS = ["Fall", "Winter", "Spring", "Summer"];
    const COURSES = ["CISC275", "CISC333"];
    return (
        <div>
            <Container>
                <Row>
                    <Col>First Year</Col>
                </Row>
                <Row>
                    <Col>
                        Fall Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Winter Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Spring Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Summer Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Second Year</Col>
                </Row>
                <Row>
                    <Col>
                        Fall Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Winter Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Spring Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Summer Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Third Year</Col>
                </Row>
                <Row>
                    <Col>
                        Fall Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Winter Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Spring Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Summer Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Fourth Year</Col>
                </Row>
                <Row>
                    <Col>
                        Fall Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Winter Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Spring Semester
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                    <Col>
                        Summer Session
                        <CourseEditor
                            courseOptions={COURSES}
                            termOptions={SEMESTERS}
                        ></CourseEditor>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
