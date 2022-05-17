import React from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Year } from "../interfaces/year";

export function CSVExport({ plan }: { plan: Plan }): JSX.Element {
    const content2 = plan.years;
    function arrayToCsv(data: Year[]) {
        return data
            .map((row) =>
                row.semesters
                    .map((semester: Semester) =>
                        semester.courses
                            .map(
                                (course: Course) =>
                                    `${plan.name},${row.name},${semester.id},${semester.season},${course.name},${course.code},${course.credits}`
                            )
                            .join("\r\n")
                    )
                    .join("\r\n")
            )
            .join("\r\n");
    }
    function downloadBlob(content: Year[], filename: string) {
        const blob = new Blob([arrayToCsv(content2.flat())]);
        const url = URL.createObjectURL(blob);
        const pom = document.createElement("a");
        pom.href = url;
        pom.setAttribute("download", filename);
        pom.click();
    }

    return (
        <div>
            <Button
                onClick={() => downloadBlob(content2.flat(), "CsvExport.CSV")}
            >
                Download Plan
            </Button>
        </div>
    );
}
