import React from 'react'
import Service from './Service'
export default function Services(props) {
    return (
        <div className='container '>
            <h2 className="text-center pt-4 text-primary"> Services</h2>
            <form className='form-group mt-3 d-flex sixty'>
                <input className='form-control bg-light text-dark input-group-prepend' type='text' name='search' placeholder='Enter the service you looking for' />
                <input type='submit' value='Search' className='btn btn-outline-dark '/>
            </form>
            <div className='wrap my-5'>
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

