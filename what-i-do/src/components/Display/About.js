import React from 'react'
import { Helmet } from 'react-helmet'


function About() {
    return (
        <React.Fragment>
            <Helmet>
            <title>What-I-Do | About page</title>
            <meta name='description' content="The about page of the What-I-Do." />
            <meta name='keywords' content="Services, E-cards, Trnc, kktc, cakes in cyprus, free ads cyprus, put up freee ads" />
            </Helmet>
            <div className=' col-md-12' >
            <div  style={jumb}>
            <h1 className='display-3 text-center text-white'>About W<span className='text-warning'>I</span>D<span className='text-warning'>E</span></h1>
            </div>
            </div>
            <div className='container py-2'>
                <p className='lead'>Wide was designed and developed by Leo  to link small scale businesses and startups to the public for free. Just upload your business cards and people can reach out to you. Avoid fraudulent activities and stay safe online as you transact business. Where ever you are on the Island, upload your e-business cards today and make it easier for people to find you..</p>
                <p className=" text-right text-primary "><a className=' p-2 nav-link' href='mailto:ojigboleo@gmail.com'>
                Send a mail if you wish to reach out. 
                </a></p>
            </div>
            </React.Fragment>
    )
}

const jumb = {
    padding: "1rem",
    marginTop: "3rem",
    background : "rgba(10,10,60,0.5)",
    margin: "auto",
    display : "flex",
    flexDirection: "column",
    justifyContents: "center",
    alignItems: "center",
}
export default About;