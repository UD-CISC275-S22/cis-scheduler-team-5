import React from "react";
import { render, screen } from "@testing-library/react";
import { HelpModal } from "./HelpModal";

describe("HelpModal Component tests", () => {
    beforeEach(() => render(<HelpModal />));
    test("'Instructions' are visible when the site loads initially", () => {
        const instructionsText = screen.queryByText(/Instructions/i);
        expect(instructionsText).toBeInTheDocument();
    });
    test("There is a Help button", () => {
        const helpButton = screen.getByRole("button", { name: /Help/i });
        expect(helpButton).toBeInTheDocument();
    });
    test("Clicking Help button reveals the 'Instructions'", () => {
        const helpButton = screen.getByRole("button", { name: /Help/i });
        helpButton.click();
        const instructionsText = screen.getByText(/Instructions/i);
        expect(instructionsText).toBeInTheDocument();
    });
    test("Clicking the Close hides the 'Instructions'", () => {
        const helpButton = screen.getByRole("button", {
            name: /Help/i
        });
        helpButton.click();
        const closeButton = screen.getByText(/Close/i);
        closeButton.click();
        const instructionsText = screen.queryByText(/Instructions/i);
        expect(instructionsText).not.toBeInTheDocument();
    });
});
