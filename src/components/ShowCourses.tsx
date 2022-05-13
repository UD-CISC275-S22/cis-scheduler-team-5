import { Icon } from "@mui/material";
import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseEdit } from "./CourseModal";
import WarningIcon from "@mui/icons-material/Warning";
import { red } from "@mui/material/colors";

export function ShowCourses({
    currentSemester
}: /*setTermCourses*/
{
    currentSemester: Semester;
    /*setTermCourses: Dispatch<SetStateAction<Course[]>>;*/
}): JSX.Element {
    // have functions here like editCourse that use state and are called w button/editable radio switch? then put in rows?
    // state, control, view
    // an array of Courses, fn that adds a Course to the array, a table view of resulting courses including added

    // map fn to make the course have CISC in front of ID
    // const termCourses= courses.map(
    //     (course: Course): Course => ({...course, courseid: INSERTCISC})
    // )
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked
    //const [visible, setVisible] = useState<boolean>(false);
    /*function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }*/
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
                                                <CourseEdit
                                                    /*setTermCourses={setTermCourses}*/
                                                    show={show}
                                                    setShow={setShow}
                                                    course={course}
                                                    currentSemester={
                                                        currentSemester
                                                    }
                                                ></CourseEdit>
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
