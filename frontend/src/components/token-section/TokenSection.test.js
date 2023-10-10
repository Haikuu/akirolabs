import { render, screen } from '@testing-library/react';
import TokenSection from './TokenSection';

test("Renders all the required components for Token Application", () => {
    render(<TokenSection/>)
    const textBox = screen.getByRole('textbox');
    const button = screen.getByText('Generate');
    const title = screen.getByText('Digits');
    expect(title).toBeInTheDocument();
    expect(textBox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});