import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

import "./contact.css";
import bgPic from "../../assets/Customerservicepic.jpg";

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

        console.log('errorMessage:', errorMessage);

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




// import React, { useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import "./contact.css";
// import bgPic from "../../assets/Customerservicepic.jpg";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_5tp0xoh",
//         "template_930s8ne",
//         form.current,
//         "r7bKStIwYjjrS4Wfu"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("Message Sent!");
//           e.target.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="formBox">
//       <div className="background">
//         <img src={bgPic} alt="Customer Service Pic" />
//       </div>

//       <div class="secHeader">
//         <h2>Contact Us:</h2>
//       </div>

//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// }

// export default Contact;
