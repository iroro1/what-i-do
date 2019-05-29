import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact-container'>
        <div className='address'>
        <h3>What I Do</h3>
        <p>+905336572105</p>
        <span className='design'></span>
        </div>
      <form className=' contact'>
            <h3>Contact Form</h3>
          <input type='text' name='name' placeholder='Enter your name'/>
          <input type='email' name='email' placeholder='Enter your email'/>
          <textarea cols='10'  name='message' placeholder='Enter your Message here...'/>
          <button className='btn btn-warning'>Send</button>
      </form>
    </div>
  )
}
