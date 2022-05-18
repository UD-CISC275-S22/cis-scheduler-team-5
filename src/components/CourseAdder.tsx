import React from "react";
import { Container } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Year } from "../interfaces/year";
import { ShowCourses } from "./ShowCourses";
//https://lo-victoria.com/making-draggable-components-in-react DRAGGABLE
//https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37 DROP DRAGGABLE
//https://www.kennethlange.com/drag-and-drop-in-pure-typescript-and-react/ DRAG AND DROP

export function CourseAdder({
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
    function findCourse(name: string): Course {
        const code = name.substring(0, 4);
        const CATALOG_DATA: Record<string, Record<string, Course>> = catalog;
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

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const course = event.dataTransfer.getData("text");
        const newCourse: Course = findCourse(course);
        if (newCourse.code !== "") {
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
                <h3>{currentSemester.season}</h3>
                <Container>
                    <ShowCourses
                        currentSemester={currentSemester}
                        plans={plans}
                        setPlans={setPlans}
                    ></ShowCourses>
                </Container>
            </div>
        </>
    );
}
