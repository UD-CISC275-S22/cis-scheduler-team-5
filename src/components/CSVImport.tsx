import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";

function ShowButton({
    uploadPlan,
    content4,
    visible
}: {
    uploadPlan: (b: string) => void;
    content4: string;
    visible: boolean;
}): JSX.Element {
    if (visible) {
        return <Button onClick={() => uploadPlan(content4)}>Accept</Button>;
    } else {
        return <></>;
    }
}

export function CSVImport({
    plans,
    setPlans,
    catalog
}: {
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
    catalog: Record<string, Record<string, Course>>;
}): JSX.Element {
    const [content4, setContent4] = useState<string>("No file data uploaded");
    const [visible, setVisible] = useState<boolean>(false);

    function uploadFile(event: React.ChangeEvent<HTMLInputElement>) {
        // Might have removed the file, need to check that the files exist
        if (event.target.files && event.target.files.length) {
            // Get the first filename
            const filename = event.target.files[0];
            // Create a reader
            const reader = new FileReader();
            // Create lambda callback to handle when we read the file
            reader.onload = (loadEvent) => {
                // Target might be null, so provide default error value
                const newContent =
                    loadEvent.target?.result || "Data was not loaded";
                // FileReader provides string or ArrayBuffer, force it to be string
                setContent4(newContent as string);
            };
            // Actually read the file
            reader.readAsText(filename);
        }
    }

    function uploadPlan(passContent: string) {
        const newArr = passContent.split("\n").map(function (row) {
            return row.split(",");
        });

        const newPlan: Plan = {
            name: newArr[0][0],
            years: [
                {
                    name: newArr[0][1],
                    semesters: [
                        {
                            id: "1",
                            season: "Fall",
                            courses: [findCourse(newArr[0][5])]
                        },
                        {
                            id: "2",
                            season: "Winter",
                            courses: [findCourse(newArr[1][5])]
                        },
                        {
                            id: "3",
                            season: "Spring",
                            courses: [findCourse(newArr[2][5])]
                        },
                        {
                            id: "4",
                            season: "Summer",
                            courses: [findCourse(newArr[3][5])]
                        }
                    ]
                }
            ]
        };
        setPlans([...plans, newPlan]);
        flipVisibility();
    }
    function flipVisibility() {
        setVisible(!visible);
    }

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

    /*function ImportCourses(passContent: string) {
        const newArr = passContent.split("\n").map(function (row) {
            return row.split(",");
        });
        const key = newArr[0];
        for (let i = 0; i < newArr.length; i++) {
            plans.map((plan: Plan) => {
                if (plan.name === newArr[i][0]) {
                    return plan.years.map((year: Year) => {
                        if (year.name === newArr[i][1]) {
                            return year.semesters.map((semester: Semester) => {
                                if (semester.season === newArr[i][3]) {
                                    return {};
                                }
                            });
                        } else {
                            return {
                                ...plan,
                                years: [
                                    ...plan.years,
                                    {
                                        name: newArr[1][1],
                                        semesters: [
                                            {
                                                id: "1",
                                                season: "Fall",
                                                courses: [
                                                    findCourse(newArr[i][5])
                                                ]
                                            },
                                            {
                                                id: "2",
                                                season: "Winter",
                                                courses: []
                                            },
                                            {
                                                id: "3",
                                                season: "Spring",
                                                courses: []
                                            },
                                            {
                                                id: "4",
                                                season: "Summer",
                                                courses: []
                                            }
                                        ]
                                    }
                                ]
                            };
                        }
                    });
                }
            });
        }
    }*/

    function ShowImport(): JSX.Element {
        if (visible) {
            return (
                <div>
                    <pre style={{ overflow: "scroll", height: "100px" }}>
                        {content4}
                    </pre>
                    <Form.Group controlId="exampleForm">
                        <Form.Label>Upload a file</Form.Label>
                        <Form.Control type="file" onChange={uploadFile} />
                    </Form.Group>
                </div>
            );
        } else {
            return <></>;
        }
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Import Plan</Button>
            <ShowImport></ShowImport>
            <ShowButton
                uploadPlan={uploadPlan}
                content4={content4}
                visible={visible}
            ></ShowButton>
        </div>
    );
}
