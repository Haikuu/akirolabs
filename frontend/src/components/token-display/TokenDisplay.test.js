import { render, screen } from "@testing-library/react";
import TokenDisplay from './TokenDisplay';

const token = 'test-token';

test("TokenDisplay is rendered", () => {
    render(<TokenDisplay/>)
    const textBox = screen.getByRole('textbox');
    expect(textBox).toBeInTheDocument();
});

test("TokenDisplay displays the value passed as token prop", () => {
    render(<TokenDisplay token={token}/>)
    const textBox = screen.getByRole('textbox');
    expect(textBox.value).toBe(token);
});