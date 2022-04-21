import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEdit } from "./CourseEdit";

export function CourseEditor({
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}): JSX.Element {
    const COURSES = getAllCourses();
    const [course, setCourse] = useState<string>(COURSES[0]);
    const [termCourses, setTermCourses] = useState<Course[]>([]);
    const [isShown, setIsShown] = useState<boolean>(false);
    const [isShown2, setIsShown2] = useState<boolean>(false);
    //const [name, setName] = useState<string>("");
    //const [modalShow, setModalShow] = React.useState(false);

    function getAllCourses(): string[] {
        const departments: string[] = Object.keys(catalog);
        const CATALOG_DATA: Record<string, Record<string, Course>> = catalog;
        let allCourses: string[] = [];
        for (let i = 0; i < departments.length; i++) {
            allCourses = allCourses.concat(
                Object.keys(CATALOG_DATA[departments[i]])
            );
        }
        return allCourses;
    }

    function findCourse(name: string): Course {
        const code = name.substring(0, 4); //gets department, Ex ACCT
        const CATALOG_DATA: Record<string, Record<string, Course>> = catalog; //converting json to record type
        let course: Course;
        try {
            course = CATALOG_DATA[code][name]; //tries to get course in catalog, has default null course if not
        } catch {
            console.log("catch");
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
    }

    function updateCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCourse(event.target.value);
    }
    function addCourse(course: string) {
        const newCourse: Course = findCourse(course);
        const updateTermCourses = [...termCourses, newCourse];
        setTermCourses(updateTermCourses);
    }
    function removeCourse(courseCode: string) {
        const newTermCourses = termCourses;
        const newnewCourses = newTermCourses.filter(
            (deleteCourse) => deleteCourse.code !== courseCode
        );
        setTermCourses(newnewCourses);
    }
    function clearCourses() {
        setTermCourses([]);
    }

    //function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    // setName(event.target.value);
    // }

    return (
        <>
            <div>
                <div>
                    {termCourses.map((oneCourse: Course) => (
                        <div
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            key={oneCourse.code}
                        >
                            <Container>
                                <Col>
                                    <Button
                                        id="btn"
                                        onClick={() => setIsShown2(true)}
                                    >
                                        {oneCourse.code} {oneCourse.name}
                                    </Button>
                                </Col>
                                <Col>
                                    {isShown && (
                                        <Button
                                            onClick={() =>
                                                removeCourse(oneCourse.code)
                                            }
                                        >
                                            {" "}
                                            Delete{" "}
                                        </Button>
                                    )}
                                </Col>
                            </Container>

                            {isShown2 && <CourseEdit></CourseEdit>}
                        </div>
                    ))}
                </div>
                <Row>
                    <Form.Group controlId="courseSelect">
                        <Form.Label>Please select a course.</Form.Label>
                        <Form.Select value={course} onChange={updateCourse}>
                            {COURSES.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <Button onClick={() => addCourse(course)}> Insert </Button>
                    <Button onClick={() => clearCourses()}>
                        {" "}
                        Clear Courses
                    </Button>
                </Row>
            </div>
        </>
    );
}
