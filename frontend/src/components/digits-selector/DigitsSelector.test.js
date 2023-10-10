import { render, screen } from "@testing-library/react";
import DigitsSelector from "./DigitsSelector";

test("DigitSelector renders", () => {
    render(<DigitsSelector digits={[]}/>)
    const title = screen.getByText('Digits');
    expect(title).toBeInTheDocument();
});