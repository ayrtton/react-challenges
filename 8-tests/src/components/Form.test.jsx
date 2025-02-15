import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Form from "./Form";

test("Verify if the submit was successful", () => { 
    const handleSunmit = jest.fn();

    render(<Form onSubmit={handleSunmit} />);

    const input = screen.getByTestId("input-text");

    fireEvent.change(input, { target: { value: "Some text" } });

    fireEvent.submit(input);

    const success = screen.getByTestId("succes");
    expect(success).toBeInTheDocument;
});