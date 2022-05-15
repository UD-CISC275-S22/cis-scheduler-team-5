import { ButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown, Form } from "react-bootstrap";
import "../App.css";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Year } from "../interfaces/year";
import { BS } from "../data/BS";
import { BA } from "../data/BA";
import { Minor } from "../data/Minor";
import { BSai } from "../data/BSai";
import { BSdata } from "../data/BSdata";
import { BStheory } from "../data/BStheory";
import { BSbioinf } from "../data/BSbioinf";
import { BSsystems } from "../data/BSsystems";
import { BShpcomputing } from "../data/BShpcompuing";
import { BScyber } from "../data/BScyber";
import Minor2 from "../data/Minor.json";
import BA2 from "../data/BA.json";
//import { Course } from "../interfaces/course";
//import { Semesterter} from "../interfaces/term";

export function Requirements({
    catalog,
    plans,
    setPlans
}: {
    catalog: Record<string, Record<string, Course>>;
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
}): JSX.Element {
    const [major, setMajor] = useState<string>("Major");
    const [bsba, setBSBA] = useState<string>("BS");
    const [conc, setConc] = useState<string>("Traditional Program");
    const ALLCOURSES = plans.map((plan: Plan) =>
        plan.years.map((year: Year) =>
            year.semesters.map((semester: Semester) =>
                semester.courses.map((course: Course) => {
                    return course.code;
                })
            )
        )
    );
    const [toDoListMinor, setToDoListMinor] = useState(Minor2);
    const [toDoBA, setToDoBA] = useState(BA2);

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

    /*useEffect(() => {
        ALLCOURSES.map((first: string[][][]) =>
            first.map((second: string[][]) =>
                second.map((third: string[]) =>
                    third.map((fourth: string) => {
                        const update = Minor2.map((req) => {
                            if (req.code === fourth) {
                                return { ...req, complete: true };
                            } else {
                                return req;
                            }
                        });
                        setToDoListMinor(update);
                    })
                )
            )
        );
    }, []);*/

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
                <div>
                    Choose your degree and click on it when the requirement is
                    fullfilled!
                </div>
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
                    {major === "Major" && (
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
                    )}
                </ButtonGroup>
                {major === "Major" && bsba === "BS" && (
                    <Dropdown
                        data-testid="concentration-dropdown"
                        className="dropdown-basic"
                    >
                        <Dropdown.Toggle id="dropdown-basic">
                            {conc}
                        </Dropdown.Toggle>
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
                )}
                {major === "Minor" && <ToDoListMinor />}
                {major === "Major" && bsba === "BA" && <ToDoBA />}
                {/*major === "Major" &&
                    bsba === "BS" &&
                    conc === "Traditional Program" &&
                    BS.map((req: string) => (
                        <div key={req}>
                            {" "}
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                label={req}
                            />
                        </div>
                    ))}
                {major === "Major" &&
                    bsba === "BA" &&
                    BA.map((req: string) => (
                        <div key={req}>
                            {" "}
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                label={req}
                            />
                        </div>
                    ))}
                {/*major === "Minor" &&
                    Minor.map((req: string) => (
                        <div key={req}>
                            {" "}
                            <Button
                                style={{
                                    backgroundColor: toogle ? "red" : "green"
                                }}
                                onClick={flipToogle}
                            >
                                {req}
                            </Button>
                        </div>
                            ))*/}
                {/*major === "Minor" &&
                    ALLCOURSES.map((first: string[][][]) =>
                        first.map((second: string[][]) =>
                            second.map((third: string[]) =>
                                third.map((fourth: string) =>
                                    Minor2.map((req) => {
                                        if (req.task === fourth) {
                                            return { ...req, complete: true };
                                        } else {
                                            return req;
                                        }
                                    })
                                )
                            )
                        )
                                )*/}
            </div>
        </Container>
    );
}
