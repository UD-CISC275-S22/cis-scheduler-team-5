import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import { ChooseCourse } from "./components/ChooseCourse";
//import { CourseEditor } from "./components/Courses";
import { CreatePlan } from "./components/CreatePlan";
import { Requirements } from "./components/Requirements";
//import { ShowCourses } from "./components/ShowCourses";
import Catalog from "./data/catalog.json";
import { Term } from "./interfaces/term";
//import { Course } from "./interfaces/course";

function App(): JSX.Element {
    const [semesters, setSemesters] = useState<Term[]>([]);
    /*const COURSES = Object.values(EasyCatalog).map(
        (courses: Record<string, Course>): Course => ({
            Object.entries(courses).map(
                ([courseKey,course] : [string,Course]) => 
            )
        })
    );*/
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to your UD degree scheduler!</h1>{" "}
            </header>
            <Row>
                <Col md="2">
                    <ChooseCourse catalog={Catalog}></ChooseCourse>
                </Col>
                <Col>
                    <CreatePlan
                        catalog={Catalog}
                        semesters={semesters}
                        setSemesters={setSemesters}
                    ></CreatePlan>
                </Col>
                <Col md="2">
                    <Requirements
                    /*catalog={Catalog}
                        semesters={semesters}
                        setSemesters={setSemesters}*/
                    ></Requirements>
                </Col>
            </Row>
        </div>
    );
}

export default App;
