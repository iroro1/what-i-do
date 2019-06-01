import React, {Component} from 'react'
import './Showcase.css'


class Showcase extends Component {
    state={
        showform: false
    };

    render(){
        const { showform } = this.state;
    return (
        <div className='bg ' >
            <div className='container '>
                <div className='row'>
            <div className='col-md-6 '>
                <button onClick={() =>
                     this.setState({showform:
                      !this.state.showform})
                      } className='btn btn-outline-warning btn-block py-1'>Upload Ad</button>

                {showform ? 
                <div className='container' id='upload'>
                <h2 className='text-warning pt-4 mb-3 text-center'>Add Your Service</h2>
                <form className='form-group row' >
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='firstName' placeholder='First Name' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='lastName' placeholder='Last Name' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='email' name='email' placeholder=' EMAIL' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='phone' placeholder=' PHONE NUMBER' required/>
                    </div>
                    
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='title' placeholder='TITLE(3 words)' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='service' placeholder='SERVICE RENDERED(5 words)' required/>
                    </div>
                    
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='price' placeholder='Enter price...eg 1800.' required/>
                    </div>
                    <div className='col-md-6  mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='location' placeholder='Enter LOCATION...eg lefkosa.' required/>
                    </div>
                    <p className='line my-3'></p>

                    {/* <div class="custom-file col-md-10 mx-auto mt-2 mb-2">
                    <input name="idPhoto" type="file" accept="image/*" class="custom-file-input " id="customFile" required/>
                    <label class="custom-file-label large" for="customFile">Upload a passport Photograph</label>
                    </div> */}
                    {/* <div class="custom-file col-md-10 mx-auto mb-2">
                    <input name="intPassport" type="file" accept="image/*" class="custom-file-input" id="customFile" required/>
                    <label class="custom-file-label small" for="customFile">Upload international passport datapage/National ID</label>
                    </div>
                    <div class="custom-file col-md-10 mx-auto mb-2">
                    <input name="profilePhoto" type="file" accept="image/*" class="custom-file-input" id="customFile" required/>
                    <label class="custom-file-label small" for="customFile">Upload one picture describing your service.</label>
                    </div> */}
                    <input type='submit' value='Submit' className='btn btn-block btn-outline-warning '/>
                    <small  class=" text-primary mt-1">
                    * All fields are required. Always use the ssame particulars when changing your ads. Multiple detected ads would be dropped. Do not send money if you cannot confirm or meet the service provider in person. Thank you.
                    </small>
            </form>
            </div>
            : null}
                
            </div>
            <div className='col-md-6  text-white font-1'>
                <h1 className='text-warning'>What-I-DO is a service web app designed to help you advertise your services.</h1>
                <p >Upload your Services for free and let people find you. This was created to target the mediterranean island community of Northern Cyprus.</p>
                <p>So student or not, Get your ads up now. Whether you make hair, bake, cook, garden or even if you want to advertise yourself as available to work.</p>
                <p className='lead'>For enquires or complaints hit the button below.</p>
                <a href='mailto:ojigboleo@gmail.com' className='btn btn-outline-warning'>Send a Mail</a>
                <p className='mt-2'><b > Help keep this site free for 5 dollars a month!!!</b></p>
                <a className='btn btn-success' href="https://www.patreon.com/bePatron?u=20675470" data-patreon-widget-type="become-patron-button" target='_blank'>Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
            </div>
            </div>
    </div>
        </div>
    )
}
}

// const shw ={ 
//     'height': '100%',
//    ' padding-top': '5vh',
//    ' padding-bottom': '5vh'
// }
export default Showcase