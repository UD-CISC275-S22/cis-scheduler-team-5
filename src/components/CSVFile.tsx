import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Year } from "../interfaces/year";

export function CSVFile({ plan }: { plan: Plan }): JSX.Element {
    const content = plan.years.map((year: Year) =>
        year.semesters.map((semester: Semester) => semester.courses)
    );
    const content2 = plan.years; //.map((year: Year) => year.semesters);
    function arrayToCsv(data: Year[]) {
        return data
            .map(
                (row) =>
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
                //row
                //   .map(String) // convert every value to String
                //   .map((v: string) => v.replaceAll("", """")) // escape double colons
                //   .map((v: string) => `"${v}"`) // quote it
                //   .join(",") // comma-separated
            )
            .join("\r\n"); // rows starting on new lines
    }
    function downloadBlob(content: Year[], filename: string) {
        // Create a blob
        const blob = new Blob([arrayToCsv(content2.flat())]);
        const url = URL.createObjectURL(blob);

        // Create a link to download it
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
                {" "}
                Download Plan{" "}
            </Button>
        </div>
    );
}
