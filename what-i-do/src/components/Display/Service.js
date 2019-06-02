import React from 'react'
import logo from './logo.png';


export default function Service(props) {
    return (
        <div>
            <div className=''>
                <div className='cardstyle '>
                    <div>                
                        <img className='img ' src={logo} alt='logo'/>
                    </div>
                    <div className=' serv'>
                    <h3 className='primary text-center'>{props.firstName}  {props.lastName}</h3>
                        <p className='text-light text-center'> {props.title} </p>
                        <p className='text-light'> {props.service} in {props.location}.</p>
                        
                        <p><i className='fas fa-phone primary mr-2'></i><a className='text-white ' href={`tel:${props.phone}`}>{props.phone}.</a> </p><p> <i className='fas fa-envelope primary mr-2'></i><a className='text-white' href={`mailto:${props.email}`}> {props.email}.</a></p>
{/* 
                        <p> Starting From <b className='bold'>{props.price}</b> <em>TL</em>.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
