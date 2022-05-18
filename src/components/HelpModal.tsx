import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
                    How to use it?
                    <ol>
                        <li>
                            Begin by clicking <b>Add Plan</b> and creating a new
                            degree plan with the name of your choosing.
                        </li>
                        <li>
                            Then, you will want to <b>Add a Year</b>, with the
                            name of your choice (freshman, year 1, etc.)
                        </li>
                        <li>
                            This new year will come with{" "}
                            <b>four empty semesters</b> by clicking 4-semesters
                            default.
                        </li>
                        <li>
                            Look to the left side of the screen to view the{" "}
                            <b>course pool</b>. Either begin typing in a course
                            code or scroll through all the options to find your
                            desired class and click insert course to place it in
                            the course pool.
                        </li>
                        <li>
                            From there, <b>click and drag</b> the class to your
                            desired semester.
                        </li>
                        <li>
                            If you are taking a required course, make sure to{" "}
                            <b>check it off on the checklist</b> on the right
                            side of the screen by clicking the course name. You
                            can <b>choose any type of CS degree</b>.
                        </li>
                        <li>
                            After inserting a course you can{" "}
                            <b>click on it to see all the information</b>, also
                            you can <b>edit the course</b> and save the new
                            changes.
                        </li>
                        <li>
                            Finally, you can <b>export and import</b> your plan
                            to a csv file using the right buttons so you can
                            share the plan with your advisor!
                        </li>
                    </ol>
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
