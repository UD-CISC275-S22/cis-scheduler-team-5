import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
//https://lo-victoria.com/making-draggable-components-in-react DRAGGABLE
//https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37 DROP DRAGGABLE

export function ChooseCourse({
    catalog
}: {
    catalog: Record<string, Record<string, Course>>;
}): JSX.Element {
    const COURSES = getAllCourses();
    const [course] = useState<string>("");
    const [termCourses, setTermCourses] = useState<Course[]>([]);
    const [inpu, setInpu] = useState<string>(""); //string value for input for class

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
        const code = name.substring(0, 4);
        const CATALOG_DATA: Record<string, Record<string, Course>> = catalog;
        let course: Course;
        try {
            course = CATALOG_DATA[code][name];
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
    function addCourse(course: string) {
        const newCourse: Course = findCourse(course);
        if (newCourse.code !== "") {
            const updateTermCourses = [...termCourses, newCourse];
            setTermCourses(updateTermCourses);
        }
    }

    function clearCourses() {
        setTermCourses([]);
    }

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData("text", event.currentTarget.id);
    };

    return (
        <>
            <div
                style={{
                    top: "0",
                    position: "sticky"
                }}
            >
                <p>
                    Choose the courses you want to insert, drag them to the
                    right semester!
                </p>
                <Container>
                    <div>
                        {termCourses.map((oneCourse: Course) => {
                            return (
                                <div
                                    key={oneCourse.code}
                                    style={{
                                        padding: "5px",
                                        margin: "4px"
                                    }}
                                >
                                    <Container>
                                        <Col>
                                            <div>
                                                <div
                                                    className="box"
                                                    id={oneCourse.code}
                                                    draggable="true"
                                                    onDragStart={
                                                        handleDragStart
                                                    }
                                                    style={{
                                                        padding: "4px",
                                                        backgroundColor:
                                                            "#e1bee7"
                                                    }}
                                                >
                                                    {oneCourse.code}{" "}
                                                    {oneCourse.name}
                                                </div>
                                            </div>
                                        </Col>
                                    </Container>
                                </div>
                            );
                        })}
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
                            renderInput={(params) => {
                                return <TextField {...params} label="Course" />;
                            }}
                        />
                    </Row>
                    <Row>
                        <Button onClick={() => addCourse(inpu)}>
                            {" "}
                            Insert{" "}
                        </Button>
                        <Button onClick={() => clearCourses()}>
                            {" "}
                            Clear Courses
                        </Button>
                    </Row>
                </Container>
            </div>
        </>
    );
}
