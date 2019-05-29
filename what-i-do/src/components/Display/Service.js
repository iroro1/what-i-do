import React from 'react'
import logo from './logo.png';


export default function Service(props) {
    return (
        <div>
            <div className='cardstyle my-2 d-flex sixty'>                
                    <img className='img' src={props.pic} />
                <div className='col-md pt-2'>
                    <p><b className='text-primary'>What I DO</b>: {props.title} </p>
                    <p><b className='text-primary'>Service</b>: {props.service}</p>
                    <p><b className='text-primary'>Location</b>: {props.location}.</p>
                    <p><b className='text-primary'>Price</b>: Starting From <b>{props.price}</b> <em>TL</em>.</p>
                </div>
            </div>
        </div>
    )
}
