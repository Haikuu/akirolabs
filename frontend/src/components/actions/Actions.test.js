import { fireEvent, render, screen } from "@testing-library/react"
import Actions from "./Actions"
import { generateToken } from "../../services/generator-service";
import { VALIDATION_STATES } from "../../constants/validation";
import { validateToken } from "../../services/validator-service";

jest.mock('../../services/generator-service');
jest.mock('../../services/validator-service');

const setToken = jest.fn();
const setValidation = jest.fn();
const token = 'Token';

test('Should have button for Generate', () => {
    render(<Actions setToken={setToken} />)
    const button = screen.getByText('Generate');
    expect(button).toBeInTheDocument();
})

test('Should have button for Validate', () => {
    render(<Actions setToken={setToken} />)
    const button = screen.getByText('Validate');
    expect(button).toBeInTheDocument();
})

test('should call setToken when Generate is clicked', async () => {
    generateToken.mockImplementation(() => token );
    render(<Actions setToken={setToken} setValidation={setValidation} />)
    fireEvent(
        screen.getByText('Generate'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),
    );
    await expect(setValidation).toHaveBeenCalledWith(VALIDATION_STATES.UNVALIDATED);
    expect(setToken).toHaveBeenCalledWith(token);
})

test('should call setValidation when Validate is clicked', async () => {
    validateToken.mockImplementation(() => true );
    render(<Actions token={token} setToken={setToken} setValidation={setValidation} />)
    fireEvent(
        screen.getByText('Validate'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),
    );
    await expect(validateToken).toHaveBeenCalled();
    expect(setValidation).toHaveBeenCalledWith(VALIDATION_STATES.VALID);
})