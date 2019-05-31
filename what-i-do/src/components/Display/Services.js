import React from 'react'
import Service from './Service'
export default function Services(props) {
    return (
        <div className=' container'>
            <h2 className="text-center pt-4 text-primary"> Services</h2>
            <div className='text-center'>
                <i className='fa fas-star'></i>
                <b className='text-center text-danger lead '>STAR Ads.</b><small className='text-danger ml-3'>Let people find you quickly by featuring a special ad that requires no scrolling down the long list. Send a Mail to get featured.</small>
            </div>
            <div className=' cov-promo'>
            <div className=' promo'>
                <Service
                pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ-uUnoVIXkaZnzMPGababEpuDNNq55glw7OIcM_446a2OvQY'
                title='PROMOTION'
                service='PROMOTION'
                phone="PROMOTION"
                email='PROMOTION'
                location='PROMOTION'
                price='PROMOTION'
                />
                <Service
                pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ-uUnoVIXkaZnzMPGababEpuDNNq55glw7OIcM_446a2OvQY'
                title='PROMOTION'
                service='PROMOTION'
                phone="PROMOTION"
                email='PROMOTION'
                location='PROMOTION'
                price='PROMOTION'
                />
                <Service
                pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ-uUnoVIXkaZnzMPGababEpuDNNq55glw7OIcM_446a2OvQY'
                title='PROMOTION'
                service='PROMOTION'
                phone="PROMOTION"
                email='PROMOTION'
                location='PROMOTION'
                price='PROMOTION'
                />
            </div>
            </div>
            <h6 className='text-center text-primary mt-5'>Search for a Service.</h6>
            <form className='form-group mt-2 d-flex flex-column sixty'>
                <div className='d-flex my-2'>
                <input className='form-control col-md-6 bg-light text-dark input-group-prepend' type='text' name='serv' placeholder='search by service' />
                <input className='form-control col-md-6 ml-1 bg-light text-dark input-group-prepend' type='text' name='loc' placeholder='search by location' />
                </div>
                <input type='submit' value='Search' className='btn btn-primary text-white btn-block my- '/>
            </form>
           
            <div className='serv-list'>
            {
                props.services.map((item,i) => {
                    return (
                           <Service
                            key={i}
                            id={item.id}
                            pic={item.pic}
                            title={item.title}
                            service={item.service}
                            phone={item.phone}
                            email={item.email}
                            location={item.location}
                            price={item.price}
                            />
                    );
                })
            }
            </div>
        </div>
    )
}

