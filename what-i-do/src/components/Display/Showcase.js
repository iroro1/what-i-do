import React from 'react'
import './Showcase.css'


function Showcase() {
    return (
        <div className='bg'>
            <div className='container text-white sixty-five font-1'>
                <h1 className='text-warning'>What I DO is a service web app designed to help you advertise your services.</h1>
                <p >Send a mail and Upload your Services for a token fee of <em>50 TL </em>only. Users would find your services wherever you are and connect with you. This was created to target the mediterranean island community of Northern Cyprus.</p>
                <p>So student or not, Get your ads up now. Whether you make hair, bake, cook, garden or even if you want to advertise yourself as available to work.</p>
                <a href='mailto:ojigboleo@gmail.com' className='btn btn-outline-warning'>Send a Mail</a>
            </div>
        </div>
    )
}

// const style = () => {(
//     'height': '100%',
//     'background': 'url(./bg.png) center center/cover no-repeat',   
//     'padding-top': '5vh',
//     'padding-bottom': '5vh'
// )
// }
export default Showcase