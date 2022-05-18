import { ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "../App.css";
import Minor from "../data/Minor.json";
import BA from "../data/BA.json";
import BS from "../data/BS.json";
import BSai from "../data/BSai.json";
import BSbioinf from "../data/BSbioinf.json";
import BStheory from "../data/BStheory.json";
import BSdata from "../data/BSdata.json";
import BScyber from "../data/BScyber.json";
import BShpcomputing from "../data/BShpcomputing.json";
import BSsystems from "../data/BSsystems.json";
//import { Course } from "../interfaces/course";
//import { Semesterter} from "../interfaces/term";

export function Requirements(/*{ plans }: { plans: Plan[] }*/): JSX.Element {
    const [major, setMajor] = useState<string>("Major");
    const [bsba, setBSBA] = useState<string>("BS");
    const [conc, setConc] = useState<string>("Traditional Program");
    /*const ALLCOURSES = plans.map((plan: Plan) =>
        plan.years.map((year: Year) =>
            year.semesters.map((semester: Semester) =>
                semester.courses.map((course: Course) => {
                    return course.code;
                })
            )
        )
    );*/
    const [toDoListMinor, setToDoListMinor] = useState(Minor);
    const [toDoBA, setToDoBA] = useState(BA);
    const [toDoBS, setToDoBS] = useState(BS);
    const [toDoBSai, setToDoBSai] = useState(BSai);
    const [toDoBSsystems, setToDoBSsystems] = useState(BSsystems);
    const [toDoBStheory, setToDoBStheory] = useState(BStheory);
    const [toDoBcyber, setToDoBScyber] = useState(BScyber);
    const [toDoBSdata, setToDoBSdata] = useState(BSdata);
    const [toDoBShpcomputing, setToDoBShpcomputing] = useState(BShpcomputing);
    const [toDoBSbioinf, setToDoBSbioinf] = useState(BSbioinf);

    const ToDoListMinor = () => {
        return (
            <div>
                {toDoListMinor.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleMinor(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };
    const ToDoBA = () => {
        return (
            <div>
                {toDoBA.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBA(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleToggleMinor = (id: number) => {
        const mapped = toDoListMinor.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoListMinor(mapped);
    };

    const handleToggleBA = (id: number) => {
        const mapped = toDoBA.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBA(mapped);
    };

    const ToDoBS = () => {
        return (
            <div>
                {toDoBS.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBS(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleToggleBS = (id: number) => {
        const mapped = toDoBS.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBS(mapped);
    };

    const ToDoBSai = () => {
        return (
            <div>
                {toDoBSai.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBSai(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleToggleBSai = (id: number) => {
        const mapped = toDoBSai.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBSai(mapped);
    };

    const ToDoBSdata = () => {
        return (
            <div>
                {toDoBSdata.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBSdata(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleToggleBSdata = (id: number) => {
        const mapped = toDoBSdata.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBSdata(mapped);
    };

    const ToDoBScyber = () => {
        return (
            <div>
                {toDoBcyber.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBScyber(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleToggleBScyber = (id: number) => {
        const mapped = toDoBcyber.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBScyber(mapped);
    };

    const ToDoBStheory = () => {
        return (
            <div>
                {toDoBStheory.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBStheory(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleToggleBStheory = (id: number) => {
        const mapped = toDoBStheory.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBStheory(mapped);
    };

    const ToDoBShpcomputing = () => {
        return (
            <div>
                {toDoBShpcomputing.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBShpcomputing(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };
    const handleToggleBShpcomputing = (id: number) => {
        const mapped = toDoBShpcomputing.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBShpcomputing(mapped);
    };
    const ToDoBSsystems = () => {
        return (
            <div>
                {toDoBSsystems.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBSsystems(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };
    const handleToggleBSsystems = (id: number) => {
        const mapped = toDoBSsystems.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBSsystems(mapped);
    };
    const ToDoBSbioinf = () => {
        return (
            <div>
                {toDoBSbioinf.map((todo) => {
                    return (
                        <div
                            key={todo.code}
                            className={todo.complete ? "strike" : ""}
                            onClick={() => handleToggleBSbioinf(todo.id)}
                        >
                            <ul>{todo.code}</ul>
                        </div>
                    );
                })}
            </div>
        );
    };
    const handleToggleBSbioinf = (id: number) => {
        const mapped = toDoBSbioinf.map((task) => {
            return task.id == id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoBSbioinf(mapped);
    };

    function DropDownMenu(): JSX.Element {
        return (
            <Dropdown data-testid="concentration-row">
                <Dropdown.Toggle
                    data-testid="dropdown-bsba"
                    className="dropdown-basic"
                >
                    {bsba}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>Degree Type</Dropdown.Header>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setBSBA("BS")}
                    >
                        BS
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => {
                            setBSBA("BA");
                            setConc("Traditional Program");
                        }}
                    >
                        BA
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
    function DropDownMenuCon(): JSX.Element {
        return (
            <Dropdown
                data-testid="concentration-dropdown"
                className="dropdown-basic"
            >
                <Dropdown.Toggle id="dropdown-basic">{conc}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>Concentration</Dropdown.Header>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("Traditional Program")}
                    >
                        Traditional Program
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("AI and Robotics")}
                    >
                        Artificial Intelligence and Robotics
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("Bioinformatics")}
                    >
                        Bioinformatics
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("Cybersecurity")}
                    >
                        Cybersecurity
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("Data Science")}
                    >
                        Data Science{" "}
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("HP Computing")}
                    >
                        High Performance Computing
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("Systems & Networks")}
                    >
                        Systems and Networks Concentration
                    </Dropdown.Item>
                    <Dropdown.Item
                        data-testid="option"
                        onClick={() => setConc("Theory & Computation")}
                    >
                        Theory and Computation
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    return (
        <Container
            className="sidecolumns"
            id="move-when-scroll"
            style={{
                top: "0",
                position: "sticky"
            }}
        >
            <div>
                <ButtonGroup>
                    <Dropdown>
                        <Dropdown.Toggle
                            data-testid="dropdown-basic"
                            className="dropdown-basic"
                        >
                            {major}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Major or Minor?</Dropdown.Header>
                            <Dropdown.Item
                                data-testid="option-minor"
                                onClick={() => {
                                    setMajor("Minor");
                                    setConc("Traditional Program");
                                    setBSBA("BS");
                                }}
                            >
                                Minor
                            </Dropdown.Item>
                            <Dropdown.Item
                                data-testid="option-major"
                                onClick={() => setMajor("Major")}
                            >
                                Major
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {major === "Major" && <DropDownMenu></DropDownMenu>}
                </ButtonGroup>
                {major === "Major" && bsba === "BS" && <DropDownMenuCon />}
                {major === "Minor" && <ToDoListMinor />}
                {major === "Major" && bsba === "BA" && <ToDoBA />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "Traditional Program" && <ToDoBS />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "Data Science" && <ToDoBSdata />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "AI and Robotics" && <ToDoBSai />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "Cybersecurity" && <ToDoBScyber />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "Theory & Computation" && <ToDoBStheory />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "HP Computing" && <ToDoBShpcomputing />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "Systems & Networks" && <ToDoBSsystems />}
                {major === "Major" &&
                    bsba === "BS" &&
                    conc === "Bioinformatics" && <ToDoBSbioinf />}
            </div>
        </Container>
    );
}
