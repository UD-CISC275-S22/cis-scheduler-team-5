import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { ShowCourses } from "./ShowCourses";
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
                    <Col>
                        Fall Semester
                        <Col>
                            <ShowCourses></ShowCourses>
                            <Button onClick={ShowCourses}>Add Term</Button>
                        </Col>
                    </Col>
                    <Col>
                        Winter Session
                        <Col>
                            <Button onClick={ShowCourses}>Add Term</Button>
                        </Col>
                    </Col>
                    <Col>
                        Spring Semester{" "}
                        <Col>
                            <Button onClick={ShowCourses}>Add Term</Button>
                        </Col>
                    </Col>
                    <Col>
                        Summer Session{" "}
                        <Col>
                            <Button onClick={ShowCourses}>Add Term</Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
