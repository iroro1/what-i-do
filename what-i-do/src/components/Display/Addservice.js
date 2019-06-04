import React, { Component } from 'react'

export class Addservice extends Component {
  state={
    id:"",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    phone: "",
    title: "",
    service: "",
    promo: false,
    uploadDate: Date.now()
};


onSubmit = (e) => {
  let eid = this.state.email;
  let punc = eid.replace(/[.@]/g,"");
  let pid= punc.replace(/\s{2,}/g," ");
  // console.log(pid);
  this.state.id = (pid);
  let uuid = this.state.id;
  let data= (this.state);
  // let i=1
  // let uuid = i+=1
  fetch(`https://what-i-do-34510.firebaseio.com/ecards/${uuid}.json`,{
    method: 'PUT',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => alert("Successful :", JSON.stringify(response)))
  .catch(err => console.log("Error : ", err));

  // e.preventDefault();

}


onChange = (e) => {this.setState({[e.target.name] : e.target.value})}

  render() {

    return (
      <div>            
                <div className='container' id='upload'>
                <p className='text-warning pt-4 mb-3 text-center'>Please fill the form.</p>
                <form className='form-group row' onSubmit={this.onSubmit}>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='firstName' placeholder='First Name...' required
                    value={this.state.firstName}
                    onChange={this.onChange}
                    />
                    <input type='hidden' name='id' value={this.state.id}/>
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='lastName' placeholder='Last Name...' required
                    value={this.state.lastName}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='email' name='email' placeholder=' EMAIL(eg. a@yahoo.com)' required
                    value={this.state.email}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='phone' placeholder=' PHONE(eg. +901112223333)' required
                    value={this.state.phone}
                    onChange={this.onChange}
                    />
                    </div>
                    
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='title' placeholder='TITLE(eg. Artist)' required
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='service' placeholder='SERVICE RENDERED(eg. I make live ...)' required
                    value={this.state.service}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12  mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='location' placeholder='Enter LOCATION(eg. lefkosa)' required
                    value={this.state.location}
                    onChange={this.onChange}
                    />
                    </div>
                    <p className='line my-3'></p>
                    <input type='submit' value='Submit' className='btn btn-block btn-outline-warning '/>
                    <small  className=" text-primary mt-1">
                    * All fields are required. Always use the ssame particulars when changing your ads. Multiple detected ads would be dropped. Do not send money if you cannot confirm or meet the service provider in person. Thank you.
                    </small>
            </form>
            </div>

      </div>
    )
  }
}

export default Addservice
