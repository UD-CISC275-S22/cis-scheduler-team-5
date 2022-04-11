import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

export function CourseEditor({
    courseOptions,
    termOptions
}: {
    courseOptions: string[];
    termOptions: string[];
}): JSX.Element {
    const [term, setTerm] = useState<string>(termOptions[0]);
    const [course, setCourse] = useState<string>(courseOptions[0]);
    const [termCourses, setTermCourses] = useState<string[]>([]);

    function updateCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCourse(event.target.value);
    }
    function updateTerm(event: React.ChangeEvent<HTMLSelectElement>) {
        setTerm(event.target.value);
    }
    function addCourse(course: string) {
        const updateTermCourses = [...termCourses, course];
        setTermCourses(updateTermCourses);
    }
    function removeCourse(course: string) {
        termCourses.filter((badCourse: string): boolean => course != badCourse);
    }

    return (
        <div>
            {termCourses.map((member: string) => (
                <li key={member}>
                    {member} <Button>Edit</Button>
                    <Button onClick={() => removeCourse(course)}>
                        {" "}
                        Delete{" "}
                    </Button>
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
            </Row>
        </div>
    );
}
