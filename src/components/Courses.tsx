import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEdit } from "./CourseEdit";

export function CourseEditor({
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}): JSX.Element {
    const COURSES = getAllCourses();
    const [course] = useState<string>("");
    const [termCourses, setTermCourses] = useState<Course[]>([]);
    const [isShown, setIsShown] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    //const [value, setValue] = React.useState<string | null>(COURSES[0]);
    const [inpu, setInpu] = useState<string>(""); //string value for input for class
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

    //function updateCourse(event: React.ChangeEvent<HTMLSelectElement>) {
    //    setCourse(event.target.value);
    //}
    function addCourse(course: string) {
        const newCourse: Course = findCourse(course);
        if (newCourse.code !== "") {
            const updateTermCourses = [...termCourses, newCourse];
            setTermCourses(updateTermCourses);
        }
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

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    //function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    // setName(event.target.value);
    // }

    function flipVisibility2(): void {
        // Set visible to be the logical opposite of its previous value
        setIsShown(!isShown);
    }

    return (
        <>
            <div>
                <div>
                    {termCourses.map((oneCourse: Course) => (
                        <div
                            onMouseEnter={flipVisibility2}
                            onMouseLeave={flipVisibility2}
                            key={oneCourse.code}
                        >
                            <Container>
                                <Col>
                                    <Button id="btn" onClick={flipVisibility}>
                                        {oneCourse.code} {oneCourse.name}
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        onClick={() =>
                                            removeCourse(oneCourse.code)
                                        }
                                    >
                                        X
                                    </Button>
                                </Col>
                            </Container>

                            {visible && (
                                <CourseEdit course={oneCourse}></CourseEdit>
                            )}
                        </div>
                    ))}
                </div>
                <Row>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        value={course}
                        onChange={(event, value) => {
                            setInpu(value as string);
                            event.preventDefault();
                        }}
                        options={COURSES}
                        sx={{ width: 300 }}
                        //inputValue={course}
                        renderInput={(params) => (
                            <TextField {...params} label="Course" />
                        )}
                    />
                </Row>
                <Row>
                    <Button onClick={() => addCourse(inpu)}> Insert </Button>
                    <Button onClick={() => clearCourses()}>
                        {" "}
                        Clear Courses
                    </Button>
                </Row>
            </div>
        </>
    );
}
