import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

export function CourseEditor({
    courseOptions
}: {
    courseOptions: string[];
    termOptions: string[];
}): JSX.Element {
    const [course, setCourse] = useState<string>(courseOptions[0]);
    const [termCourses, setTermCourses] = useState<string[]>([]);
    const [isShown, setIsShown] = useState<boolean>(false);

    function updateCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCourse(event.target.value);
    }
    function addCourse(course: string) {
        const updateTermCourses = [...termCourses, course];
        setTermCourses(updateTermCourses);
    }
    function removeCourse(course: string) {
        const newTermCourses = [...termCourses];
        newTermCourses.splice(termCourses.indexOf(course), 1);
        setTermCourses(newTermCourses);
    }
    function clearCourses() {
        setTermCourses([]);
    }

    return (
        <div>
            {termCourses.map((member: string) => (
                <li
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    key={member}
                >
                    {member}
                    {isShown && <div> AAAAAAAAAAAAH.</div>}
                    {isShown && <Button>Edit ME</Button>}
                    {isShown && (
                        <Button onClick={() => removeCourse(course)}>
                            {" "}
                            Delete{" "}
                        </Button>
                    )}
                </li>
            ))}
            <Row>
                <Form.Group controlId="courseSelect">
                    <Form.Label>Please select a course.</Form.Label>
                    <Form.Select value={course} onChange={updateCourse}>
                        {courseOptions.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Button onClick={() => addCourse(course)}> Insert </Button>
                <Button onClick={() => clearCourses()}> Clear Courses</Button>
            </Row>
        </div>
    );
}
