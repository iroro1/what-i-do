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
                <h1 className='text-warning'>What-I-DO is a service web app designed to help you advertise your services.</h1>
                <p >Upload your Services for free and let people find you. This was created to target the mediterranean island community of Northern Cyprus.</p>
                <p>So student or not, get your e-business cards up now showing what you do. From hair dressing, baking , cooking etc or you just want to advertise yourself as available to work.</p>
                <p className='lead'>For enquires or complaints hit the button below.</p>
                <a href='mailto:ojigboleo@gmail.com' className='btn btn-outline-warning'>Send a Mail</a>
                <p className='mt-2'><b > Help keep this app free. Become a Patreon with a minimum of 1 dollar or more a month!!!</b></p>
                <a className='btn btn-success' href="https://www.patreon.com/bePatron?u=20675470" data-patreon-widget-type="become-patron-button" target='_blank' rel="noopener noreferrer">Become a Patreon!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
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
    paddingBottom: '5vh'
}

export default Showcase