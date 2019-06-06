import React, {Component} from 'react'
import Addservice from './Addservice'


class Showcase extends Component {
    state={
        showform: false
    };

    render(){
    const { showform } = this.state;
    return (
        <div  style={bg}  className='bg'>
            <div className='container '>
                <div className='row'>
            <div className='col-md-6 '>
            <button onClick={() =>
                     this.setState({showform:
                      !this.state.showform})
                      } className='btn btn-outline-warning btn-block py-1 my-2'>Upload E-card</button>
                {showform ?  <Addservice />  : null}              
            </div>
            <div className='col-md-6  text-white font-1'>
                <h1 className='text-warning'>WIDE</h1>
                <p >is an acronym for What-I-Do ecards. it is aimed at given every individual in KKTC an opportunity to own an e-business card.</p>
                <p>So irrespective of profession, get on now and show what you do. Its wont't cost you a dime, from hair dressing, baking , photography, cooking etc or you just want to advertise yourself as available to work.</p>
                <p className='lead'>For enquires or complaints hit the button below.</p>
                <a href='mailto:ojigboleo@gmail.com' className='btn btn-outline-warning'>Send a Mail</a>
                <p className='mt-2'><b > Help keep this app free. Become a Patron with a minimum of 1 dollar or more a month!!!</b></p>
                <a className='btn btn-success' href="https://www.patreon.com/bePatron?u=20675470" data-patreon-widget-type="become-patron-button" target='_blank' rel="noopener noreferrer">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
            <div style={border} >
                <span  className='text-danger container'>*
            Do not send money if you cannot verify the identity or meet the service provider in person as we would not be held responsible for any fraudulent act. Thank you.
                </span>
            </div>
            </div>
            </div>
    </div>
        </div>
    )
}
}

const bg = {
    height: '100%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
}
const border ={
    background: 'rgba(255,255,255,.8)',
    borderRadius : '5px',
    padding: '1rem',
    marginTop: '.5rem'
}
export default Showcase