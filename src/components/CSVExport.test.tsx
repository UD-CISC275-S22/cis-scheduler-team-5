import React from "react";
import { render, screen } from "@testing-library/react";
import { CSVExport } from "./CSVExport";
import { samplePlan } from "../interfaces/samplePlan";

describe("CSVExport Component tests", () => {
    beforeEach(() => {
        render(<CSVExport plan={samplePlan} />);
    });
    test("There is a download Plan button", () => {
        expect(
            screen.getByRole("button", { name: /Download Plan/i })
        ).toBeInTheDocument();
    });
});
