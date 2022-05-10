import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { ShowCourses } from "./ShowCourses";
//https://lo-victoria.com/making-draggable-components-in-react DRAGGABLE
//https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37 DROP DRAGGABLE

//https://www.kennethlange.com/drag-and-drop-in-pure-typescript-and-react/ DRAG AND DROP

export function CourseAdder({
    catalog,
    /*semesters,
    setSemesters,*/
    sem
}: /*key*/
{
    catalog: Record<string, Record<string, Course>>;
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
    sem: Semester;
    key: string;
}): JSX.Element {
    //const COURSES = getAllCourses();
    //const [course] = useState<string>("");
    //const [SemesterCourses, setSemesterCourses] = useState<Semester["courses"]>([]);
    //const [isShown, setIsShown] = useState<boolean>(false);
    //const [visible, setVisible] = useState<boolean>(false);
    //const [value, setValue] = React.useState<string | null>(COURSES[0]);
    //const [inpu, setInpu] = useState<string>(""); //string value for input for class
    //const [name, setName] = useState<string>("");
    //const [modalShow, setModalShow] = React.useState(false);
    const [semester, setSemester] = useState<Semester>(sem);

    function findCourse(name: string): Course {
        const code = name.substring(0, 4); //gets department, Ex ACCT
        const CATALOG_DATA: Record<string, Record<string, Course>> = catalog; //converting json to record type
        let course: Course;
        try {
            course = CATALOG_DATA[code][name]; //tries to get course in catalog, has default null course if not
        } catch {
            console.log("catch");
            course = {
                code: "",
                name: "",
                descr: "",
                credits: "",
                preReq: "",
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        //exception handling
        if (course === undefined) {
            course = {
                code: "",
                name: "",
                descr: "",
                credits: "",
                preReq: "",
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        return course;
    }

    //function updateCourse(event: React.ChangeEvent<HTMLSelectElement>) {
    //    setCourse(event.target.value);
    //}
    /*function addCourse(course: string) {
        const newCourse: Course = findCourse(course);
        if (newCourse.code !== "") {
            const updateSemesterCourses = [...SemesterCourses, newCourse];
            setSemesterCourses(updateSemesterCourses);
        }
    }
    function removeCourse(courseCode: string) {
        const newSemesterCourses = SemesterCourses;
        const newnewCourses = newSemesterCourses.filter(
            (deleteCourse) => deleteCourse.code !== courseCode
        );
        setSemesterCourses(newnewCourses);
    }*/
    function clearCourses() {
        const updateSemester = {
            ...semester,
            courses: []
        };
        setSemester(updateSemester);
    }

    /*function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }*/

    //function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    // setName(event.target.value);
    // }

    /*function flipVisibility2(): void {
        // Set visible to be the logical opposite of its previous value
        setIsShown(!isShown);
    }*/

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const course = event.dataTransfer.getData("text");
        const newCourse: Course = findCourse(course);
        if (newCourse.code !== "") {
            const updateSemester = {
                ...semester,
                courses: [...semester.courses, newCourse]
            };
            setSemester(updateSemester);
        }
    };
    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
                {semester.season}
                <Container>
                    <ShowCourses
                        semester={semester}
                        /*setSemesterCourses={setSemesterCourses}*/
                    ></ShowCourses>
                    <Row>
                        <Button onClick={() => clearCourses()}>
                            {" "}
                            Clear Courses
                        </Button>
                    </Row>
                </Container>
            </div>
        </>
    );
}
