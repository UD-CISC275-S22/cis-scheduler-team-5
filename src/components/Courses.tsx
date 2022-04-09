import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function CourseEditor({
    courseOptions,
    termOptions
}: {
    courseOptions: string[];
    termOptions: string[];
}): JSX.Element {
    const [term, setTerm] = useState<string>(termOptions[0]);
    const [course, setCourse] = useState<string>(courseOptions[0]);

    function updateCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCourse(event.target.value);
    }
    function updateTerm(event: React.ChangeEvent<HTMLSelectElement>) {
        setTerm(event.target.value);
    }

    return (
        <div>
            <div>
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
            </div>
            <div>
                <Button> Insert </Button>
                <Button> Delete </Button>
            </div>
        </div>
    );
}
