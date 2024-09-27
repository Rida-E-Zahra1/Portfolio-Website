import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Check if any field is empty
    if (!name || !email || !message) {
      toast.error('Please fill in all fields before submitting.');
      return; // Stop form submission if any field is empty
    }
    // console.log('Form submitted with data:', formData); 

    emailjs.sendForm('service_pcahx5i', 'template_0vs342q', e.target, 'T8hXY8JZ7T7aaGcpO')
      .then((result) => {
        // console.log('Email sent successfully:', result.text); 
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      }, (error) => {
        // console.log('Email sending failed:', error.text); 
        toast.error('Message failed to send.');
      });
  };

  return (
    <div className='contact-content'>

      <ToastContainer />
      
      <h1 className='contact-heading'>Contact Me</h1>
      <h2 className='gradient-color'>Send Me Email Here</h2>

      <form onSubmit={handleSubmit}>
        <input 
          name='name'
          placeholder='Your Name'
          className='input'
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          name='email'
          type='email'
          placeholder='Your Email'
          className='input email'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          name='message'
          placeholder='Your Message'
          className='input textarea'
          value={formData.message}
          onChange={handleChange}
        />
        <button type='submit' className='send-btn'>Send</button>
      </form>

    </div>
  );
}
