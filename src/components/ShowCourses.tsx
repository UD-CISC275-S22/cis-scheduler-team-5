import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEdit } from "./CourseEdit";
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

export function ShowCourses({
    listCourses
}: {
    listCourses: Course[];
}): JSX.Element {
    // have functions here like editCourse that use state and are called w button/editable radio switch? then put in rows?
    // state, control, view
    // an array of Courses, fn that adds a Course to the array, a table view of resulting courses including added

    // this is a const array of Course objects you'll use here for now
    /*const courses: Course[] = [
        {
            code: "CISC 101",
            name: "Principles of Computing",
            descr: "Introduces students to the central ideas of computing and computer science including programs, algorithms, abstraction, the internet, and information systems. Instills ideas and practices of computational thinking and engages students in activities that show how computing and computer science change the world. Explores computing as a creative activity and empowers students to apply computational thinking to all disciplines including the arts, humanities, business, social and physical sciences, health, and entertainment.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth:
                "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
            typ: "Fall, Winter and Spring"
        },
        {
            code: "CISC 103",
            name: "Introduction to Computer Science with Web Applications",
            descr: "Principles of computer science illustrated through programming in scripting languages such as JavaScript and VBScript. Topics include control structures, arrays, functions, and procedures. Programming projects illustrate web-based applications.",
            credits: " 3",
            preReq: "",
            restrict: "Open to non-majors.",
            breadth:
                "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
            typ: "Fall and Spring"
        },
        {
            code: "CISC 106",
            name: "General Computer Science for Engineers",
            descr: "Principles of computer science illustrated and applied through programming in a general-purpose language. Programming projects illustrate computational problems, styles, and issues that arise in engineering.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth:
                "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
            typ: "Fall, Summer and Spring"
        }
    ];*/

    // map fn to make the course have CISC in front of ID
    // const termCourses= courses.map(
    //     (course: Course): Course => ({...course, courseid: INSERTCISC})
    // )
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Course Name</th>
                                    <th>Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCourses.map((course: Course) => (
                                    <tr key={course.code}>
                                        {visible && (
                                            <CourseEdit
                                                course={course}
                                            ></CourseEdit>
                                        )}
                                        <td onClick={flipVisibility}>
                                            {course.code}
                                        </td>
                                        <td onClick={flipVisibility}>
                                            {course.name}
                                        </td>
                                        <td onClick={flipVisibility}>
                                            {course.credits}
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
