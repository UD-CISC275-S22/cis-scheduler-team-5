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
            <Row>
                <Col>
                    <Form.Group controlId="termSelect">
                        <Form.Label>Please select a term.</Form.Label>
                        <Form.Select value={term} onChange={updateTerm}>
                            {termOptions.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
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
                </Col>
            </Row>
            <Row>
                <Button onClick={() => addCourse(course)}> Insert </Button>
                <Button onClick={() => removeCourse(course)}> Delete </Button>
            </Row>
        </div>
    );
}
