import React from "react";
import { Button } from "react-bootstrap";
import { CreatePlan } from "./CreatePlan";

export function CSVFile(): JSX.Element {
    const CSVPlan = [CreatePlan];

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
