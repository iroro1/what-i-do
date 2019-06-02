import React,{ Component} from 'react'
import Service from './Service'
import escapeRegExp from 'escape-string-regexp'

class Services extends Component {
    state = {
        promo:[],
        query : ""
    }
 
    componentDidMount(){      
    fetch(`https://what-i-do-34510.firebaseio.com/Promo.json`)
    .then(response => response.json())
    .then(data => this.setState({promo:data}))
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim()})
    }

    render(){


        let showService
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showService = this.props.services.filter((service) => match.test(service.service) || match.test(service.location) ||  match.test(service.title))
        }else{
            showService = this.props.services
        }
    return (
        <div className=' container'>
            <h2 className="text-center pt-4 text-primary"> Services</h2>
            <div className='text-center'>
                <i className='fas fa-star fa-2x text-success mx-2'></i>
                <b className='text-center text-danger lead '>Promoted e-cards</b>.<small className='text-danger ml-3'>Let people find you quickly by featuring a special ad that requires no scrolling down the long list. Send a Mail to get featured.</small>
            </div>
            
            <div className='container'>
           <div className='row '>
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
            <div className=''>
            <h6 className='text-center text-primary mt-5'>Search for a Service.</h6>
            <form  onSubmit={e => e.preventDefault()} className='form-group mt-2 d-flex flex-column sixty'>
                <div className='d-flex my-2'>
                <input value={this.state.query} className='form-control col-md-12 bg-light text-dark input-group-prepend' type='text' name='serv' placeholder='Search for service' onChange={e => this.updateQuery(e.target.value)}/>

                </div>

            </form>
           </div>
           <div className='container'>
           
               <div className='row wrap'>
               {
                showService.map((item,i) => {
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



export default  Services;