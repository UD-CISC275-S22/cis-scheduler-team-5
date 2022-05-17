import React, { useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
//import { CourseEditor } from "./Courses";
export function HelpModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button
                variant="primary"
                style={{
                    marginLeft: "auto",
                    color: "blue",
                    background: "#ffd200"
                }}
                onClick={handleShow}
            >
                Help
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Welcome to your CS degree scheduler!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Row>Instructions:</Row>
                        <Row>
                            {" "}
                            Begin by clicking Add Plan and creating a new degree
                            plan with the name of your choosing. Then, you will
                            want to add a year, with the name of your choice
                            (freshman, year 1, etc.), which will give you the
                            option to populate four empty semesters. Look to the
                            left side of the screen to view the course pool.
                            Either begin typing in a course code or scroll
                            through all the options to find your desired class
                            and click insert course to place it in the course
                            pool. From there, click and drag the class to your
                            desired semester. If you are taking a required
                            course, make sure to cross it off on the list of
                            requirements on the right side of the screen by
                            clicking the requirement.
                        </Row>
                        <Row>
                            Additional Info: You can add as many plans, or years
                            within a plan, as you wish. If you want to get rid
                            of a single course within a semester, press the red
                            X next to the course. You may also delete a year
                            within a plan or delete a plan altogether by
                            pressing the corresponding red X button next to the
                            title.
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
