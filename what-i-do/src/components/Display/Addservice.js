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
    insta: "",
    twt: "",
    link: "",
    uploadDate: Date.now()
};


onSubmit = (e) => {
  let eid = this.state.email;
  let punc = eid.replace(/[.@]/g,"");
  let pid= punc.replace(/\s{2,}/g," ");
  this.state.id = pid;
  let uuid = this.state.id;
  let data= (this.state);
  fetch(`https://what-i-do-34510.firebaseio.com/ecards/${uuid}.json`,{
    method: 'PUT',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => alert("Successful :", JSON.stringify(response)))
  .catch(err => alert("Error : ", err));
  setInterval(e.preventDefault(),2000)
  this.setState({
      id:"",
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      phone: "",
      title: "",
      service: "",
      promo: false,
      insta: "",
      twt: "",
      link: "",
  })
  this.setState({[e.target.name] : e.target.value})
}


onChange = (e) => {this.setState({[e.target.name] : e.target.value})}

  render() {

    return (
      <div>            
                <div className='container' id='upload'>
                <p className='text-warning pt-4 mb-3 text-center'>Please fill the form correctly.</p>
                <form className='form-group row' onSubmit={this.onSubmit}>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='firstName' placeholder='Firstname...' required
                    value={this.state.firstName}
                    onChange={this.onChange}
                    />
                    <input type='hidden' name='id' value={this.state.id}/>
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='lastName' placeholder='Lastname...' required
                    value={this.state.lastName}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='email' name='email' placeholder=' Email(eg. a@yahoo.com)' required
                    value={this.state.email}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='number' name='phone' placeholder=' Phone' required
                    value={this.state.phone}
                    onChange={this.onChange}
                    />
                    </div>
                    
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='title' placeholder='Title (eg. Computer Technician)' 
                    maxLength ="15"                    
                    required
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='service' placeholder='Service offered(eg. I make live ...)'
                    maxLength ="250"
                    required
                    value={this.state.service}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='insta' placeholder='Instagram(eg. @...)' 
                    value={this.state.insta}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='twt' placeholder='Twitter(eg. @...)' 
                    value={this.state.twt}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12 mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='link' placeholder='LinkedIn Username(eg. john Doe)' 
                    value={this.state.link}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className='col-md-12  mb-2'>
                    <input className='form-control bg-light text-dark ' type='text' name='location' placeholder='Location(eg. lefkosa)' required
                    value={this.state.location}
                    onChange={this.onChange}
                    />
                    </div>
                    <p style={line} className=' my-3'></p>
                    <input type='submit' value='Submit' className='btn btn-block btn-outline-warning '/>
                    <small  className=" text-primary mt-1">
                    * All fields are required. You can update your information by filling the form again. 
                    </small>
            </form>
            </div>

      </div>
    )
  }
}

const line ={
  borderBottom: '5px dashed rgb(255, 203, 32)',
  width: '80%',
  margin: 'auto',
}
export default Addservice;
