import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { EditText, EditTextarea } from "react-edit-text";
import { Course } from "../interfaces/course";
export function CourseEdit({ course }: { course: Course }) {
    //Modal from https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(true);

    //const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {course.code}
                        <br></br>
                        <EditText defaultValue={course.name}></EditText>
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
                                ></EditTextarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">Course Credits:</Col>
                            <Col>
                                <EditText
                                    defaultValue={course.credits}
                                ></EditText>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
