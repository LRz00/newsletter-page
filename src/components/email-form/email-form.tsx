import { useState } from 'react';
import Button from '../button/button'
import './email-form.css'
import { validateEmail } from '../../utils/email-validation';

interface EmailFormProps {
    onSubmit: (email: string) => void; 
}
function EmailForm({ onSubmit }: EmailFormProps) {
    const [email, setEmail] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(validateEmail(value));
    };

    const handleSubmit = () => {
        if (isValid && email) {
        onSubmit(email); 
        }
    };

    return (
        <>
            <div id="form-field">
                <label id="email-label" htmlFor="email">Email address:</label>
                {!isValid && (<small>Please enter a valid Email address</small>)}
                <input value={email}
                    onChange={handleChange} placeholder='email@company.com' type="email" id="email" name="email" />
                <Button text="Subscribe to monthly newsletter" onClick={handleSubmit}></Button>
            </div>
        </>
    )
}

export default EmailForm;