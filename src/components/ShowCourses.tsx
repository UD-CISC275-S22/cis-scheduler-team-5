import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
// adding a year will automatically have 4 terms, this addSemester is for ppl who wanna add to their 4 years
// export function addSemester(): JSX.Element {
//     const [term, setTerm] = useState<Term>({
//         year: 2022,
//         season: "Fall",
//         courses: [],
//         credits: 0
//     });
//     //should i use state for each of the updated fields in the term interface?
//     const [year, setYear]=useState<number>(2022);
//     const [season, setSeason]=useState<TermSeason>("Fall");

//     function setSemester(event: React.ChangeEvent<HTMLInputElement>){
//         setYear(event.target.value);
//     }
// }

// have button that onclick calls addsemester function
//materializes form that allows you to say the year, season from a dropdown,

export function ShowCourses(): JSX.Element {
    // have functions here like editCourse that use state and are called w button/editable radio switch? then put in rows?
    // state, control, view
    // an array of Courses, fn that adds a Course to the array, a table view of resulting courses including added

    // this is a const array of Course objects you'll use here for now
    const courses: Course[] = [
        {
            courseid: 181,
            name: "Introduction to Computer Science II",
            description: "Intro to programming in java",
            prereqs: []
        },
        {
            courseid: 108,
            name: "Introduction to Computer Science I",
            description: "Intro to programming in python",
            prereqs: []
        },
        {
            courseid: 210,
            name: "Introduction to Systems Programming",
            description: "Intro to programming in C and the terminal",
            prereqs: []
        }
    ];

    // map fn to make the course have CISC in front of ID
    // const termCourses= courses.map(
    //     (course: Course): Course => ({...course, courseid: INSERTCISC})
    // )
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Course ID</th>
                                    <th>Course Name</th>
                                    <th>Description</th>
                                    <th>Prerequisites</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course: Course) => (
                                    <tr key={course.courseid}>
                                        <td>{course.courseid}</td>
                                        <td>{course.name}</td>
                                        <td>{course.description}</td>
                                        <td>{course.prereqs}</td>
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
