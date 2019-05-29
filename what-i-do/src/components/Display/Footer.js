import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p><a  className='text-warning' href='tel:+905338572105'>+905338572105</a></p>
        <p><a className='text-warning' href='mailto:ojigboleo@gmail.com'>ojigboleo@gmail.com</a></p>
        <p>&copy; 2019 Leo Ojigbo.</p>
      </div>
    )
  }
}

export default Footer
