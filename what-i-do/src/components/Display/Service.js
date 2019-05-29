import React from 'react'


export default function Service(props) {
    return (
        <div>
            <div className='cardstyle my-2 '>
                <div>                
                    <img className='img' src={props.pic} alt='Service Picture'/>
                    </div>
                <div className='ten '>
                    <p><b className='text-primary'>What I DO</b>: {props.title} </p>
                    <p><b className='text-primary'>Service</b>: {props.service}</p>
                    <p><b className='text-primary'>Location</b>: {props.location}.</p>
                    <p><b className='text-primary'>Phone</b>: {props.phone}.</p>
                    <p><b className='text-primary'>Email</b>: {props.email}.</p>
                    <p><b className='text-primary'>Price</b>: Starting From <b className='text-warning'>{props.price}</b> <em>TL</em>.</p>
                </div>
            </div>
        </div>
    )
}
