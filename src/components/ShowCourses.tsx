import React, { useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEdit } from "./CourseEdit";
// adding a year will automatically have 4 terms, this addSemester is for ppl who wanna add to their 4 years
// export function addSemester(): JSX.Element {
//     const [term, setTerm] = useState<Term>([]);
//     //should i use state for each of the updated fields in the term interface?
//     const [year, setYear]=useState<number>(2022);
//     const [season, setSeason]=useState<TermSeason>("Fall");

//     function setSemester(event: React.ChangeEvent<HTMLInputElement>){
//         setYear(event.target.value);
//     }
// }

// have button that onclick calls addsemester function
//materializes form that allows you to say the year, season from a dropdown,

/* 
/////delete semester button trying to lift state
    interface SemesterVisibleProps {
        setSemesterVisible: (semestervisible: boolean) => void;
    }
    const [semestervisible, setSemesterVisible] = useState<boolean>(true);
    function flipSemesterVisibility(): void {
        listCourses = [];
        setSemesterVisible(!semestervisible);
    }
    <div>
        <Button
            style={{
                margin: "8px",
                backgroundColor: "purple"
            }}
            onClick={flipSemesterVisibility}
        >
            Remove Semester
        </Button>
    </div>;
*/

export function ShowCourses({
    listCourses
}: {
    listCourses: Course[];
}): JSX.Element {
    // have functions here like editCourse that use state and are called w button/editable radio switch? then put in rows?
    // state, control, view
    // an array of Courses, fn that adds a Course to the array, a table view of resulting courses including added

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
