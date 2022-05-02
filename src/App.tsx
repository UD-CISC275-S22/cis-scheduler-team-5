import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import { CourseEditor } from "./components/Courses";
import { CreatePlan } from "./components/CreatePlan";
// import { ShowCourses } from "./components/ShowCourses";
import Catalog from "./data/catalog.json";
//import { Course } from "./interfaces/course";

function App(): JSX.Element {
    /*const COURSES = Object.values(EasyCatalog).map(
        (courses: Record<string, Course>): Course => ({
            Object.entries(courses).map(
                ([courseKey,course] : [string,Course]) => 
            )
        })
    );*/
    return (
        <div className="App">
            <header className="App-header">UD Course Editor</header>
            <div style={{ margin: "10px" }}>
                <h1>Welcome to your degree scheduler.</h1>{" "}
                <p>
                    We are here to help you find clarity on your courses path at
                    UD. You can get started by viewing your courses.
                </p>
            </div>
            <Row>
                <Col md="2">
                    <CourseEditor catalog={Catalog}></CourseEditor>
                </Col>
                <Col>
                    <CreatePlan /*catalog={Catalog}*/></CreatePlan>
                </Col>
            </Row>
        </div>
    );
}

export default App;
