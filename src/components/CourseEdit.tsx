import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { EditText, EditTextarea } from "react-edit-text";
import { Course } from "../interfaces/course";
//import { CourseEditor } from "./Courses";
export function CourseEdit({
    course,
    termCourses,
    setTermCourses
}: {
    course: Course;
    termCourses: Course[];
    setTermCourses: Dispatch<SetStateAction<Course[]>>;
}) {
    //Modal from https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(true);

    //const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    interface save {
        name: string;
        value: string;
        previousValue: string;
    }

    const handleSave = ({ name, value /*previousValue*/ }: save) => {
        const newEdit: Course = course;
        console.log(name);
        if (name === "name") {
            newEdit.name = value;
        } else if (name === "descr") {
            newEdit.descr = value;
        } else if (name === "credits") {
            newEdit.credits = value;
        } else if (name === "prereq") {
            newEdit.preReq = value;
        } else if (name === "restr") {
            newEdit.restrict = value;
        } else if (name === "breath") {
            newEdit.breadth = value;
        } else if (name === "typ") {
            newEdit.typ = value;
        }
    };

    function handleSaveChanges(): void {
        const newCourses: Course[] = termCourses;
        newCourses[termCourses.findIndex((c) => c.code == course.code)] =
            course;
        setTermCourses(newCourses);
    }

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {course.code}
                        <br></br>
                        <EditText
                            name="name"
                            style={{ width: "100%" }}
                            defaultValue={course.name}
                            onSave={handleSave}
                        ></EditText>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md="3">Course Description:</Col>
                            <Col>
                                <EditTextarea
                                    name="descr"
                                    defaultValue={course.descr}
                                    rows={10}
                                    style={{ width: "100%" }}
                                    onSave={handleSave}
                                ></EditTextarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">Course Credits:</Col>
                            <Col>
                                <EditText
                                    name="credits"
                                    style={{ width: "15%" }}
                                    defaultValue={course.credits}
                                    onSave={handleSave}
                                ></EditText>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">Course PreRequisites:</Col>
                            <Col>
                                <EditTextarea
                                    name="prereq"
                                    style={{ width: "100%" }}
                                    defaultValue={course.preReq}
                                    onSave={handleSave}
                                ></EditTextarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">Course Restrictions:</Col>
                            <Col>
                                <EditTextarea
                                    name="restr"
                                    style={{ width: "100%" }}
                                    defaultValue={course.restrict}
                                    onSave={handleSave}
                                ></EditTextarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">Course Breath:</Col>
                            <Col>
                                <EditTextarea
                                    name="breath"
                                    style={{ width: "100%" }}
                                    defaultValue={course.breadth}
                                    onSave={handleSave}
                                ></EditTextarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">Semester Offered:</Col>
                            <Col>
                                <EditTextarea
                                    name="typ"
                                    style={{ width: "100%" }}
                                    defaultValue={course.typ}
                                    onSave={handleSave}
                                ></EditTextarea>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSaveChanges();
                            setShow(false);
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
