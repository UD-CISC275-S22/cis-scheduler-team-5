import React from "react";
import "./App.css";
import { CreatePlan } from "./components/CreatePlan";
import { ShowCourses } from "./components/ShowCourses";

function App(): JSX.Element {
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
            <CreatePlan></CreatePlan>
            <div>
                <ShowCourses></ShowCourses>
            </div>
        </div>
    );
}

export default App;
