import React from "react";
import "./App.css";
import { CreatePlan } from "./components/CreatePlan";
import Catalog from "./data/easyCatalog.json";
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
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Nabiha Syed, Mar
                Tejedor, Alexis Mainiero
            </header>
            <div>
                <h1>Welcome to your degree scheduler!</h1>{" "}
                <p>
                    We are here to help you find clarity on your courses path at
                    UD. You can get started by viewing your courses.
                </p>
            </div>
            <CreatePlan catalog={Catalog}></CreatePlan>
        </div>
    );
}

export default App;
