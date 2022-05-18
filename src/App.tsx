import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import { CoursePool } from "./components/CoursePool";
import { CreatePlan } from "./components/CreatePlan";
import { CSVImport } from "./components/CSVImport";
import { HelpModal } from "./components/HelpModal";
import { Requirements } from "./components/Requirements";
import Catalog from "./data/catalog.json";
import { Plan } from "./interfaces/plan";

function App(): JSX.Element {
    const [plans, setPlans] = useState<Plan[]>([]);

    return (
        <div className="App">
            <header className="App-header2">
                <div
                    className="col-md-12 text-right"
                    style={{ display: "flex" }}
                >
                    <HelpModal></HelpModal>
                </div>
            </header>
            <header className="App-header">
                <h1>Welcome to your UD degree scheduler!</h1>{" "}
            </header>
            <Row>
                <Col md="2">
                    <CoursePool catalog={Catalog}></CoursePool>
                </Col>
                <Col>
                    <CreatePlan
                        plans={plans}
                        setPlans={setPlans}
                        catalog={Catalog}
                    ></CreatePlan>
                    <CSVImport
                        plans={plans}
                        setPlans={setPlans}
                        catalog={Catalog}
                    ></CSVImport>
                </Col>
                <Col md="2">
                    <Requirements></Requirements>
                </Col>
            </Row>
        </div>
    );
}

export default App;
