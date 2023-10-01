import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactCard.css';


const ContactCard = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eqkzqkf', 'template_5cew5yo', form.current, 'spA7uX8w15iYjS7zk')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='ContactCardContainer'>
        <h2>Contact Us</h2>
        <div className='ContactCardContent'>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder='Name' />
                <input type="email" name="from_email" placeholder='Email' />
                <textarea name="message" className='myTextArea' placeholder='Message' />
                <button type="submit" value="Send">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default ContactCard