import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('This email is invalid.')
            } else {
                    setErrorMessage('')
                }}
            else {
                   if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`)   
                }
                else {
                    setErrorMessage('');
                }
                
            }    
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })    
        }                     
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
            <section>
            <h1 data-testid="contact">
                Contact me
            </h1>
            
            <form id="contact-form" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5"  onBlur={handleChange} />
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
                <button type="submit" data-testid="submitBtn">Submit</button>
            </form>
        </section>
        )

}

export default ContactForm;