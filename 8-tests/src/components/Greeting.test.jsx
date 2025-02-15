import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Greeting from "./Greeting";

test("Verify the component heading with the sent prop", () => { 
    render(<Greeting name="User01" />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContext("Hello, User01");
});