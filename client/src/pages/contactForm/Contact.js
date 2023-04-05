import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

import "./contact.css";
import customer from "../../assets/customers.mp4";

function Contact() {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your Email is invalid!');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            }
            else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
    }

    return(
        <section>

          <div className="formBox">

              <div className="background">
                <img src={bgPic} alt="Customer Service Pic" />
              </div>

              <div class="secHeader">
                <h2>Contact Us:</h2>
              </div>

            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label class="secHeader" htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                </div>

                <div>
                    <label class="secHeader" htmlFor='email'>Email:</label>
                    <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                </div>

                <div>
                    <label class="secHeader" htmlFor='message' className='textarea-label'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' cols='30' />
                </div>

                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}

                <button type='submit' data-testid='submit-button' className='button-submit'>Submit</button>

            </form>

          </div>  

        </section>
    )
}

export default Contact;