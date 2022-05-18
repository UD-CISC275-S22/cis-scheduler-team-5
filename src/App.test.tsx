import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the word UD somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD/i);
    expect(linkElement).toBeInTheDocument();
});

describe("Welcome", () => {
    it("renders welcome modal and usage guide", () => {
        expect(screen.queryByText("Welcome")).toBeInTheDocument();
    });
    it("closes welcome modal when click close button", () => {
        fireEvent.click(screen.getByRole("button", { name: "Close" }));
        expect(screen.queryByText("Usage Guide")).not.toBeInTheDocument();
    });
    it("renders welcome modal when click Help button", () => {
        fireEvent.click(screen.getByRole("button", { name: "Close Guide" })); //close the modal first
        expect(screen.queryByText("Usage Guide")).not.toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", { name: "Help" })); //then reopen modal with help button
        expect(screen.queryByText("Usage Guide")).toBeInTheDocument();
    });
});
