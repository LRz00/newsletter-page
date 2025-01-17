import { useState } from 'react';
import Button from '../button/button'
import './email-form.css'
import { validateEmail } from '../../utils/email-validation';
import { toast } from 'react-toastify';

interface EmailFormProps {
    onSubmit: (email: string) => void;
}
function EmailForm({ onSubmit }: EmailFormProps) {
    const [email, setEmail] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(validateEmail(value));
    };

    const handleSubmit = async () => {
        if (isValid && email) {
            setIsSubmitting(true);
            try {
                const response = await fetch('http://localhost:3000/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });

                if (response.ok) {
                    onSubmit(email);
                }
            } catch (error) {
                toast.error("Error subscribing, try again")
                console.error('Error during subscription:', error);
            } finally {
                setIsSubmitting(false); 
            }
        }
    };

    return (
        <>
            <div id="form-field">
                <label id="email-label" htmlFor="email">Email address:</label>
                {!isValid && (<small>Please enter a valid Email address</small>)}
                <input value={email}
                    onChange={handleChange} placeholder='email@company.com' type="email" id="email" name="email" />
                <Button text={isSubmitting ? 'Subscribing...' : 'Subscribe to monthly newsletter'}
                    onClick={handleSubmit}></Button>
            </div>
        </>
    )
}

export default EmailForm;