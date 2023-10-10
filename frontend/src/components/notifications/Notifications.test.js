import { fireEvent, render, screen } from "@testing-library/react";
import Notifications from './Notifications';

const setOpen = jest.fn();

test("Notification is shown when open is true", () => {
    render(<Notifications open serviceError={'Test Error'} />)
    const title = screen.getByText('Test Error');
    expect(title).toBeInTheDocument();
});

test("Notification is not shown when open is false", () => {
    render(<Notifications open={false} serviceError={'Test Error'} />)
    const title = screen.queryByText('Test Error');
    expect(title).not.toBeInTheDocument();
});

test("Notification is closed then setOpen is called", () => {
    render(<Notifications setOpen={setOpen} open={true} serviceError={'Test Error'} />)
    fireEvent(
        screen.getByRole('button'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),
    );
    expect(setOpen).toHaveBeenCalled();
});