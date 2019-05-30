import React from 'react'
import './Showcase.css'
import bg from './bg.png';


function Showcase() {
    return (
        <div className='bg ' >
            <div className='container '>
                <div className='row'>
            <div className='col-md-6  text-white font-1'>
                <h1 className='text-warning'>What-I-DO is a service web app designed to help you advertise your services.</h1>
                <p >Upload your Services for free and let people find you. This was created to target the mediterranean island community of Northern Cyprus.</p>
                <p>So student or not, Get your ads up now. Whether you make hair, bake, cook, garden or even if you want to advertise yourself as available to work.</p>
                <p className='lead'>For enquires or complaints hit the button below.</p>
                <a href='mailto:ojigboleo@gmail.com' className='btn btn-outline-warning'>Send a Mail</a>
            </div>
            <div className='col-md-6 '>
                <h2 className='text-warning pt-4 mb-3 text-center'>Add Your Service</h2>
                <div className='container'>
                <form className='form-group row' method='POST'>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='firstName' placeholder='Enter your First Name' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='lastName' placeholder='Enter your Last Name' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='email' name='email' placeholder='Enter your EMAIL' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='phone' placeholder='Enter your PHONE NUMBER' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='phone' placeholder='Enter your PHONE NUMBER' required/>
                    </div>
                    
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='title' placeholder='What-you-do TITLE' required/>
                    </div>
                    <div className='col-md-6 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='price' placeholder='Enter price...eg 1800.' required/>
                    </div>
                    <div className='col-md-6  mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='location' placeholder='Enter LOCATION...eg lefkosa.' required/>
                    </div>
                    <p className='line my-3'></p>

                    <div class="custom-file col-md-10 mx-auto mt-2 mb-2">
                    <input type="file" class="custom-file-input " id="customFile" required/>
                    <label class="custom-file-label small" for="customFile">Upload a passport Photograph</label>
                    </div>
                    <div class="custom-file col-md-10 mx-auto mb-2">
                    <input type="file" class="custom-file-input" id="customFile" required/>
                    <label class="custom-file-label small" for="customFile">Upload international passport datapage/National ID</label>
                    </div>
                    <div class="custom-file col-md-10 mx-auto mb-2">
                    <input type="file" class="custom-file-input" id="customFile" required/>
                    <label class="custom-file-label small" for="customFile">Upload one picture describing your service.</label>
                    </div>
                    <input type='submit' value='Submit' className='btn btn-block btn-outline-warning '/>
                    <small  class=" text-primary mt-1">
                    * All fields are required. Documents uploads are meant to check fraudulent services. Thank you.
                    </small>
            </form>
            </div>
            </div>
            </div>
    </div>
        </div>
    )
}

// const shw ={ 
//     'height': '100%',
//    ' padding-top': '5vh',
//    ' padding-bottom': '5vh'
// }
export default Showcase