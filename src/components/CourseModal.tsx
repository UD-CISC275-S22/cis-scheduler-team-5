import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { EditText, EditTextarea } from "react-edit-text";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import Catalog from "../data/catalog.json";

//import { CourseEditor } from "./Courses";
export function CourseModal({
    course,
    currentSemester,
    show,
    setShow
}: /*setSemesterCourses*/
{
    course: Course;
    currentSemester: Semester;
    show: boolean;
    setShow: (s: boolean) => void;
    /*setSemesterCourses: Dispatch<SetStateAction<Course[]>>;*/
}) {
    //Modal from https://react-bootstrap.github.io/components/modal/
    //const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);

    interface save {
        name: string;
        value: string;
        previousValue: string;
    }

    /*function findCourse(name: string): Course {
        const code = name.substring(0, 4); //gets department, Ex ACCT
        const CATALOG_DATA: Record<string, Record<string, Course>> = catalog; //converting json to record type
        let course: Course;
        try {
            course = CATALOG_DATA[code][name];
        } catch {
            course = {
                code: "",
                name: "",
                descr: "",
                credits: "",
                preReq: "",
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        //exception handling
        if (course === undefined) {
            course = {
                code: "",
                name: "",
                descr: "",
                credits: "",
                preReq: "",
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        return course;
    }*/

    function findCourse(name: string): Course {
        const code = name.substring(0, 4); //gets department, Ex ACCT
        const CATALOG_DATA: Record<string, Record<string, Course>> = Catalog; //converting json to record type
        let course: Course;
        try {
            course = CATALOG_DATA[code][name];
        } catch {
            course = {
                code: "",
                name: "",
                descr: "",
                credits: "",
                preReq: "",
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        return course;
    }

    const handleSave = ({ name, value }: save) => {
        const newEdit: Course = course;
        console.log(name);
        if (name === "name") {
            newEdit.name = value;
        } else if (name === "code") {
            newEdit.code = value;
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

    const handleSafePrevious = (changeCourse: Course) => {
        const newEdit: Course = course;
        const prevCourse: Course = findCourse(changeCourse.code);
        newEdit.name = prevCourse.name;
        newEdit.code = prevCourse.code;
        newEdit.descr = prevCourse.descr;
        newEdit.credits = prevCourse.credits;
        newEdit.preReq = prevCourse.preReq;
        newEdit.restrict = prevCourse.restrict;
        newEdit.breadth = prevCourse.breadth;
        newEdit.typ = prevCourse.typ;
        handlePreviousChanges(newEdit);
    };

    function handleSaveChanges(): void {
        const newCourses: Course[] = currentSemester.courses;
        newCourses[
            currentSemester.courses.findIndex((c) => c.code == course.code)
        ] = course;
        currentSemester.courses = newCourses;
    }

    function handlePreviousChanges(newEdit: Course): void {
        const newCourses: Course[] = currentSemester.courses;
        newCourses[
            currentSemester.courses.findIndex((c) => c.code == newEdit.code)
        ] = newEdit;
        currentSemester.courses = newCourses;
    }

    /*function handlePrevious(): void {
        const newCourses: Course[] = currentSemester.courses;
        const previuousCourse = findCourse(course.code);
        /*currentSemester.courses.map((course: Course) => {
            if (course.code !== previuousCourse.code) {
                return course;
            } else {
                return {
                    ...course,
                    name: previuousCourse.name,
                    credits: previuousCourse.credits,
                    descr: previuousCourse.descr,
                    breadth: previuousCourse.breadth,
                    preReq: previuousCourse.preReq,
                    restrict: previuousCourse.restrict,
                    typ: previuousCourse.typ
                };
            }
        });*/
    /*newCourses[
            currentSemester.courses.findIndex((c) => c.code == course.code)
        ] = previuousCourse;
        currentSemester.courses = newCourses;
    }*/

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={() => {
                    setShow(false);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <EditText
                            name="code"
                            style={{ width: "100%" }}
                            defaultValue={course.code}
                            onSave={handleSave}
                        ></EditText>
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
                                    style={{ width: "100%" }}
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
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSafePrevious(course);
                            setShow(false);
                        }}
                    >
                        Default Course
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
