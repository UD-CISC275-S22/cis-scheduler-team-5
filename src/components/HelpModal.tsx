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
                <Modal.Body>Instruction:</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
