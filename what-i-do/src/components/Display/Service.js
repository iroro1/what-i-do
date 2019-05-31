import React from 'react'
import logo from './logo.png';


export default function Service(props) {
    return (
        <div>
            <div className='width-30 '>
                <div className='cardstyle '>
                    <div>                
                        <img className='img ' src={logo} alt='Service Picture'/>
                    </div>
                    <div className=' '>
                        <p><b className='primary'>What I DO </b>: {props.title} </p>
                        <p><b className='primary'>Service </b>: {props.service}</p>
                        <p><b className='primary'>Location </b>: {props.location}.</p>
                        <p><b className='primary'>Phone </b>: {props.phone}.</p>
                        <p><b className='primary'>Email </b>: {props.email}.</p>
                        <p><b className='primary'>Price </b>: Starting From <b className='bold'>{props.price}</b> <em>TL</em>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
