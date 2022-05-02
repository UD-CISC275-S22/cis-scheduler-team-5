import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { EditText, EditTextarea } from "react-edit-text";
import { Course } from "../interfaces/course";
export function CourseEdit({ course }: { course: Course }) {
    //Modal from https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(true);

    //const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    /*interface save {
        name: string;
        value: string;
        previousValue: string;
    }*/

    /*
    const handleSave = ({ name, value, previousValue }: save) => {
        const newEdit: Course = course;
        if (name !== course.name) {
            newEdit.name = value;
        }
        if (name !== course.descr) {
            newEdit.descr = value;
        }
        if (name !== course.credits) {
            newEdit.credits = value;
        }
        if (name !== course.preReq) {
            newEdit.preReq = value;
        }
        if (name !== course.restrict) {
            newEdit.restrict = value;
        }
        if (name !== course.breadth) {
            newEdit.breadth = value;
        }
        if (name !== course.typ) {
            newEdit.typ = value;
        }
    };

    function handleSaveChanges(): void {
        const newSem: Semester = semester;
        newSem.courses[
            semester.courses.findIndex((c) => c.code == course.code)
        ] = mod;
        setSemester(newSem);
    }*/

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {course.code}
                        <br></br>
                        <EditText
                            defaultValue={course.name}
                            //onSave={handleSave}
                        ></EditText>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md="2">Course Description:</Col>
                            <Col>
                                <EditTextarea
                                    defaultValue={course.descr}
                                    rows={10}
                                    //onSave={handleSave}
                                ></EditTextarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">Course Credits:</Col>
                            <Col>
                                <EditText
                                    defaultValue={course.credits}
                                    //onSave={handleSave}
                                ></EditText>
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
                            //handleSaveChanges();
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
