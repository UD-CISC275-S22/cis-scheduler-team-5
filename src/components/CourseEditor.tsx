import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Year } from "../interfaces/year";
import { ShowCourses } from "./ShowCourses";
//https://lo-victoria.com/making-draggable-components-in-react DRAGGABLE
//https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37 DROP DRAGGABLE

//https://www.kennethlange.com/drag-and-drop-in-pure-typescript-and-react/ DRAG AND DROP

export function CourseEditor({
    catalog,
    semesters,
    setSemesters,
    plans,
    setPlans,
    currentSemester,
    key
}: {
    catalog: Record<string, Record<string, Course>>;
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
    currentSemester: Semester;
    key: string;
}): JSX.Element {
    //const COURSES = getAllCourses();
    //const [course] = useState<string>("");
    //const [termCourses, setTermCourses] = useState<Term["courses"]>([]);
    //const [isShown, setIsShown] = useState<boolean>(false);
    //const [visible, setVisible] = useState<boolean>(false);
    //const [value, setValue] = React.useState<string | null>(COURSES[0]);
    //const [inpu, setInpu] = useState<string>(""); //string value for input for class
    //const [name, setName] = useState<string>("");
    //const [modalShow, setModalShow] = React.useState(false);
    //const [semester, setSemester] = useState<Semester>(sem);

    function findCourse(name: string): Course {
        const code = name.substring(0, 4); //gets department, Ex ACCT
        const CATALOG_DATA: Record<string, Record<string, Course>> = catalog; //converting json to record type
        let course: Course;
        try {
            course = CATALOG_DATA[code][name];
        } catch {
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
            const updateTermCourses = [...termCourses, newCourse];
            setTermCourses(updateTermCourses);
        }
    }
    function removeCourse(courseCode: string) {
        const newTermCourses = termCourses;
        const newnewCourses = newTermCourses.filter(
            (deleteCourse) => deleteCourse.code !== courseCode
        );
        setTermCourses(newnewCourses);
    }*/
    function clearCourses() {
        /*const updateSemester = {
            ...semester,
            courses: []
        };
        setSemester(updateSemester);
        const index = semesters.map((seme: Semester): number => {
            return seme.season === key ? semesters.indexOf(seme) : -1;
        });
        const newValue = index.filter((word) => word > -1);
        const newSemesters = { ...semesters };
        newSemesters.splice(newValue[0], 1, semester);
        setSemesters(newSemesters);*/
        const updateCourse = plans.map((plan: Plan) => ({
            ...plan,
            years: plan.years.map((year: Year) => ({
                ...year,
                semesters: year.semesters.map((semester: Semester) => {
                    if (semester.id !== currentSemester.id) {
                        return semester;
                    } else {
                        return {
                            ...semester,
                            courses: []
                        };
                    }
                })
            }))
        }));
        setPlans(updateCourse);
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
            /*const updateSemester = {
                ...semester,
                courses: [...semester.courses, newCourse]
            };
            setSemester(updateSemester);
            const update = semesters.map((oneSemester: Semester) => {
                if (oneSemester.season !== key) {
                    return oneSemester;
                } else {
                    return {
                        ...oneSemester,
                        courses: [...oneSemester.courses, newCourse]
                    };
                }
            });
            setSemesters(update);*/
            const updateCourse = plans.map((plan: Plan) => ({
                ...plan,
                years: plan.years.map((year: Year) => ({
                    ...year,
                    semesters: year.semesters.map((semester: Semester) => {
                        if (semester.id !== currentSemester.id) {
                            return semester;
                        } else {
                            return {
                                ...semester,
                                courses: [...semester.courses, newCourse]
                            };
                        }
                    })
                }))
            }));
            setPlans(updateCourse);
        }
    };

    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
                {currentSemester.season}
                <Container>
                    <ShowCourses
                        currentSemester={currentSemester}
                        /*setTermCourses={setTermCourses}*/
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
