import React from "react";
import { Button } from "react-bootstrap";
//import { CourseEditor } from "./Courses";
//import { CreatePlan } from "./CreatePlan";
import { Course } from "../interfaces/course";

export function CVSFile({
    termCourses
}: {
    termCourses: Course[];
}): JSX.Element {
    const CSVPlan = [termCourses];

    function downloadFile() {
        let csv = "Code,Name,Desc,Credits\n";
        CSVPlan.forEach(function (row) {
            csv += row + ",";
            csv += "\n";
        });
        document.write(csv);

        const hiddenElement = document.createElement("a");
        hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
        hiddenElement.target = "_blank";

        hiddenElement.download = "AcademicPlan.csv";
        hiddenElement.click();
    }

    return (
        <div>
            <Button onClick={downloadFile}> Download Plan </Button>
            <Button>Import Plan</Button>
        </div>
    );
}
