import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div >
        <div style={{
            height:'100%',
            background:'#1c2b4d',
            padding:'1rem',
            textAlign: 'center',
            marginTop: '2rem'
          }}>
          <p><i class="fas fa-phone  mx-2 text-warning"></i><a className='text-warning' href='tel:+905338572105'>+905338572105</a></p>
        <div>
         <a className='text-warning p-2' href='mailto:ojigboleo@gmail.com'><i class="fas fa-envelope fa-2x"></i></a>
         <a className='text-danger p-2' href='https://www.instagram.com/iroro1/' target='_blank'><i class="fab fa-instagram fa-2x"></i></a>
         <a className='text-primary p-2' href='https://www.linkedin.com/in/iroro1/' target='_blank'> <i class="fab fa-linkedin fa-2x"></i></a>
          <a className='text-light p-2' href='https://github.com/iroro1' target='_blank'><i class="fab fa-github fa-2x"></i></a>
        </div> 
        </div>
        
        <p className='footer'>&copy; 2019 Leo Ojigbo.</p>
      </div>
    )
  }
}

const foot={

}
export default Footer
