import React from "react";
import "./App.css";
import { ShowSemesters } from "./components/ShowSemesters";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Nabiha Syed, Mar
                Tejedor, Alexis Mainiero
            </header>
            <ShowSemesters></ShowSemesters>
        </div>
    );
}

export default App;
