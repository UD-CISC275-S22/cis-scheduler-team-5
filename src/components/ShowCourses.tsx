import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseModal } from "./CourseModal";
import WarningIcon from "@mui/icons-material/Warning";
import { red } from "@mui/material/colors";
import { Plan } from "../interfaces/plan";
import { Year } from "../interfaces/year";

function ShowCourseModal({
    course,
    show,
    setShow,
    currentSemester
}: {
    course: Course;
    show: boolean;
    setShow: (b: boolean) => void;
    currentSemester: Semester;
}): JSX.Element {
    if (show) {
        return (
            <CourseModal
                /*setTermCourses={setTermCourses}*/
                show={show}
                setShow={setShow}
                course={course}
                currentSemester={currentSemester}
            ></CourseModal>
        );
    } else {
        return <></>;
    }
}
function ShowWarningIcon({ course }: { course: Course }): JSX.Element {
    if (course.preReq !== "") {
        return (
            <WarningIcon
                sx={{
                    color: red[800],
                    fontSize: 20
                }}
            ></WarningIcon>
        );
    } else {
        return <></>;
    }
}
/* main function*/
export function ShowCourses({
    currentSemester,
    plans,
    setPlans
}: {
    currentSemester: Semester;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked

    function clearCourse(courseName: string) {
        const updateCourse = plans.map((plan: Plan) => ({
            ...plan,
            years: plan.years.map((year: Year) => ({
                ...year,
                semesters: year.semesters.map((semester: Semester) => {
                    if (semester.id !== currentSemester.id) {
                        return semester;
                    } else {
                        const newCourses = semester.courses.filter(
                            (course: Course) => course.code !== courseName
                        );
                        return {
                            ...semester,
                            courses: newCourses
                        };
                    }
                })
            }))
        }));
        setPlans(updateCourse);
    }

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
                                    <th>Delete Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentSemester.courses.map(
                                    (course: Course) => {
                                        return (
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
                                                    <ShowWarningIcon
                                                        course={course}
                                                    ></ShowWarningIcon>
                                                </td>
                                                <td
                                                    onClick={() => {
                                                        setShow(true);
                                                    }}
                                                >
                                                    {course.credits}
                                                </td>
                                                <ShowCourseModal
                                                    show={show}
                                                    currentSemester={
                                                        currentSemester
                                                    }
                                                    setShow={setShow}
                                                    course={course}
                                                ></ShowCourseModal>
                                                <td>
                                                    <Button
                                                        style={{
                                                            backgroundColor:
                                                                "white",
                                                            color: "red",
                                                            borderColor: "grey"
                                                        }}
                                                        onClick={() =>
                                                            clearCourse(
                                                                course.code
                                                            )
                                                        }
                                                    >
                                                        X
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
