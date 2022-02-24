import Navbar from '../components/Navbar/Navbar';
import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7sdxj88', 'template_p8nx4mr', form.current, 'user_zMUqLA0o9DxKP4w5tqTtN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        form.current.reset()
    }

    return (
        
        <div className = "Contact"> 
            <Navbar />

            <p class="contactme-header">Contact Me!</p>

            <form ref={form} onSubmit={sendEmail}>
                
                <label for="fname" class ="field-names">Name</label>
                <input type="text" id="fname" class ="subject" name="name" placeholder="Name"></input>
                <br></br>

                <label for="lname" class ="field-names">Email Address</label>
                <input type="text" id="lname" class ="subject"  name="email" placeholder="Email Address"></input>
                <br></br>

                <label for="lname" class ="field-names">Subject</label>
                <input type="text" id="lname" class ="subject"  name="subject" placeholder="Subject"></input>
                <br></br>

                <label for="subject" class ="field-names">Message</label>
                <textarea id="subject" class ="subject" name="message" placeholder="Message"></textarea>
                <br></br>

                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}

export default Contact;
