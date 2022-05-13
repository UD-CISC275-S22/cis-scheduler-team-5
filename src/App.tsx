import { positions } from "@mui/system";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./App.css";
import { ChooseCourse } from "./components/CoursePool";
//import { CourseEditor } from "./components/Courses";
import { CreatePlan } from "./components/CreatePlan";
import { CVSFile } from "./components/CSVFile";
import { Requirements } from "./components/Requirements";
//import { ShowCourses } from "./components/ShowCourses";
import Catalog from "./data/catalog.json";
import { Course } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
//import { Course } from "./interfaces/course";

function App(): JSX.Element {
    //const plan1: Plan = { name: "MAR", years: [] };
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const [plans, setPlans] = useState<Plan[]>([]);
    /*const COURSES = Object.values(EasyCatalog).map(
        (courses: Record<string, Course>): Course => ({
            Object.entries(courses).map(
                ([courseKey,course] : [string,Course]) => 
            )
        })
    );*/
    const ALLCOURSES = semesters.map((semester: Semester) =>
        semester.courses.map((oneCourse: Course): string => {
            return oneCourse.code;
        })
    );
    return (
        <div className="App">
            <header className="App-header2">
                <div
                    className="col-md-12 text-right"
                    style={{ display: "flex" }}
                >
                    <Button
                        style={{
                            marginLeft: "auto",
                            color: "blue",
                            background: "#ffd200"
                        }}
                    >
                        Help
                    </Button>
                </div>
            </header>
            <header className="App-header">
                <h1>Welcome to your UD degree scheduler!</h1>{" "}
            </header>
            <Row>
                <Col md="2">
                    {"Hi!"}
                    {ALLCOURSES.map((first: string[]) =>
                        first.map((second: string) => {
                            <div key={second}>{second}</div>;
                        })
                    )}
                    <ChooseCourse catalog={Catalog}></ChooseCourse>
                </Col>
                <Col>
                    <CreatePlan
                        plans={plans}
                        setPlans={setPlans}
                        catalog={Catalog}
                        semesters={semesters}
                        setSemesters={setSemesters}
                    ></CreatePlan>
                </Col>
                <Col md="2">
                    <Requirements
                        /*catalog={Catalog}*/
                        semesters={semesters}
                        setSemesters={setSemesters}
                    ></Requirements>
                </Col>
            </Row>
            <Row>
                <CVSFile></CVSFile>
            </Row>
        </div>
    );
}

export default App;
