import React from 'react'


export default function Service(props) {
    return (
        <div>
                <div style={cardstyle} className='cardstyle '>
                    <div >
                    <h3 className='primary text-center'>{props.firstName}  {props.lastName}</h3>
                        <p className='text-light text-center'> {props.title} </p>
                        <p className='text-light'> {props.service} In {props.location}.</p>
                        <div className="rh">
                        <p><i className='fas fa-phone primary mr-2'></i><a className='text-white ' href={`tel:${props.phone}`}>{props.phone}.</a> </p><p> <i className='fas fa-envelope primary mr-2'></i><a className='text-white' href={`mailto:${props.email}`}> {props.email}.</a></p>
                        </div>
                    </div>
                    <div style={ico}>     
                        <div style={icoInner} className='text-warning p-2  ' target='_blank' ><i className="fab fa-instagram fa-2x"></i>
                        <p className="text-white">{props.insta}</p></div>
                        <div style={icoInner} className='text-warning p-2 ' target='_blank' ><i className="fab fa-twitter fa-2x"></i>
                        <p className="text-white">{props.twt}</p></div>
                        <div style={icoInner} className='text-warning p-2 ' target='_blank' ><i className="fab fa-linkedin fa-2x"></i>
                        <p className="text-white">{props.link}</p></div>
                    </div>
                </div>
        </div>
    )
}

const cardstyle ={
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  background:' linear-gradient(to left,rgba(54, 39, 51, 0.644), rgba(46, 54, 44, 0.842) )' ,
  borderRadius: '10px',
  transition: 'all 1s ease-in-out',
  padding: '15px',
  fontSize: '.85rem',
  display: 'flex',
  lineHeight: '1.2',
  flexDirection: 'column',
  boxShadow:' -1px 10px 15px rgba(0,0,0,0.29), 0 6px 6px rgba(0,0,0,0.33)',
  margin: '2px'
}
const ico = {
    display: 'flex',
    justifyContent: 'space-around'
}

const icoInner ={
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
}