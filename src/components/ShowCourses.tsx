import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseModal } from "./CourseModal";
import WarningIcon from "@mui/icons-material/Warning";
import { red } from "@mui/material/colors";
import { Plan } from "../interfaces/plan";

export function ShowCourses({
    catalog,
    plans,
    setPlans,
    currentSemester
}: {
    catalog: Record<string, Record<string, Course>>;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
    currentSemester: Semester;
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
                                {currentSemester.courses.map(
                                    (course: Course) => (
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
                                                {course.name}{" "}
                                                {course.preReq !== "" && (
                                                    <WarningIcon
                                                        sx={{
                                                            color: red[800],
                                                            fontSize: 20
                                                        }}
                                                    ></WarningIcon>
                                                )}
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
                                                    /*setTermCourses={setTermCourses}*/
                                                    show={show}
                                                    setShow={setShow}
                                                    course={course}
                                                    currentSemester={
                                                        currentSemester
                                                    }
                                                ></CourseModal>
                                            )}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
