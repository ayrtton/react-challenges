import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

test("Verify if the text was modified", () => { 
    render(<Button />);

    const button = screen.getByRole("button", { name: /click here/i });
    const text = screen.getByTestId("text");

    expect(text).toHaveTextContext("Initial Text");
    
    fireEvent.click(button);

    expect(text).toHaveTextContext("Modified text after click");
});