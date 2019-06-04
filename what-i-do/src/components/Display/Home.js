import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Showcase from './Showcase'
import Service from './Service'

export default class Home extends Component {
    state = {
        promo:[],
    }
 
    componentDidMount(){      
    fetch(`https://what-i-do-34510.firebaseio.com/Promo.json`)
    .then(response => response.json())
    .then(data => this.setState({promo:data}))
    }
    
    render() {
        
        return (
            <div>
                <Showcase/>
                <h2 className="text-center pt-4 text-primary"> Services</h2>
            <div className='text-center'>
                <i className='fas fa-star fa-2x text-warning mx-2'></i>
                <b className='text-center text-danger lead '>Promoted e-cards</b>.<small className='text-danger ml-3'>Let people find you quickly by featuring a special ad that requires no scrolling down the long list. Send a Mail to get featured. View all <Link to='/services' className='nav-link text-red'><i className="fas fa-book mr-2"></i>Service E-Cards</Link> .</small>
                
            </div>
                <div className='container'>
           <div className='row '>
        {console.log((this.state.promo))}

           {

               this.state.promo.map((item,i) => {
                return (
                    <div className='col-lg-4 col-md-6 col-sm-12 py-1 ' key={item.id}>
                       <Service
                        key={item.id}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        pic={item.pic}
                        title={item.title}
                        service={item.service}
                        phone={item.phone}
                        email={item.email}
                        location={item.location}
                        price={item.price}
                        />
                          </div>
                );
            })
            }
            </div>
            </div>
            </div>
        )
    }
}
