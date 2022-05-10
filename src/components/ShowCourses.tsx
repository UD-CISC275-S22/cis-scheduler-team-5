import React, { useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseModal } from "./CourseModal";

export function ShowCourses({
    semester
}: /*setSemesterCourses*/
{
    semester: Semester;
    /*setSemesterCourses: Dispatch<SetStateAction<Course[]>>;*/
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked

    // Remove Single Course Button
    /*
    function deleteCourse(deleteCourseCode: string) {
        const updatedSemesterCourses = semester.courses.filter(
            (course: Course): boolean => course.code !== deleteCourseCode
        );
        return updatedSemesterCourses;
    }
    */
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Table
                            striped
                            bordered
                            hover
                            size="sm"
                            style={{
                                border: "1px solid gray",
                                padding: "4px",
                                backgroundColor: "default"
                            }}
                        >
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Course Name</th>
                                    <th>Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semester.courses.map((course: Course) => (
                                    <tr key={course.code}>
                                        <td
                                            onClick={() => {
                                                setShow(true);
                                            }}
                                        >
                                            {course.code}
                                        </td>
                                        <td
                                            onClick={() => {
                                                setShow(true);
                                            }}
                                        >
                                            {course.name}
                                        </td>
                                        <td
                                            onClick={() => {
                                                setShow(true);
                                            }}
                                        >
                                            {course.credits}
                                        </td>
                                        {show && (
                                            <CourseModal
                                                /*setSemesterCourses={setSemesterCourses}*/
                                                show={show}
                                                setShow={setShow}
                                                course={course}
                                                semester={semester}
                                            ></CourseModal>
                                        )}
                                        <td>
                                            {" "}
                                            <Button
                                                style={{
                                                    color: "red"
                                                }}
                                                variant="outline-primary"
                                                size="sm"
                                                /*
                                                onClick={() => {
                                                    deleteCourse(course.code);
                                                }}
                                                */
                                            >
                                                X
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
