import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button Component', () => {
    it('renders the button with the correct text', () => {
        render(<Button text="Click Me" onClick={() => {}} />);
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls the onClick function when clicked', () => {
        const handleClick = jest.fn();
        render(<Button text="Click Me" onClick={handleClick} />);
        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
