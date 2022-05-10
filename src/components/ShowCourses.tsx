import React, { useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Term } from "../interfaces/term";
import { CourseEdit } from "./CourseModal";
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
*/

export function ShowCourses({
    semester
}: /*setTermCourses*/
{
    semester: Term;
    /*setTermCourses: Dispatch<SetStateAction<Course[]>>;*/
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked
    /*
    // Remove Single Course Button
    const [termCourses, setTerm] = useState<Course[]>(semester.courses); // stores semester courses passed in so delete is an option
    function deleteCourse() {
        const updatedTermCourses = termCourses.filter(
            (course: Course): boolean => course.code === course.code
        );
        setTerm(updatedTermCourses);
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
                                            <CourseEdit
                                                /*setTermCourses={setTermCourses}*/
                                                show={show}
                                                setShow={setShow}
                                                course={course}
                                                semester={semester}
                                            ></CourseEdit>
                                        )}
                                        <td>
                                            {" "}
                                            <Button
                                                style={{
                                                    color: "red"
                                                }}
                                                variant="outline-primary"
                                                size="sm"
                                                /*onClick={() => {
                                                    deleteCourse;
                                                }}*/
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
