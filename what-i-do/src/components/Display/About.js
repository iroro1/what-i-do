import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div className=' col-md-12' >
            <div  style={jumb}>
            {/* <img src={logo} style={profile} alt="Leo Ojigbo"/> */}
            <h1 className='display-3 text-center text-white'>Leo Ojigbo</h1>
            </div>
            </div>
            <div className='container py-2'>
                <p className='blockqoute'>Leo Ojigbo is a Nigerian and holds a masters degree in Computer engineering from the european university of lefke in Northern Cyprus. Having obtained a Bachelors in Computer and mathematics science, he has always be passionate about development and spends most of his time studying and learning new things. His masters thesis was in machine learning emotion recognition from text and he has been engaging in studies involving machine learning to gain mastery over the techniques since then. </p>
                <p className='blockqoute'> This app was created from the need to bring small businesses together for free. Whereever you are on the Island, upload your e-business card and make it easier to find you..</p>
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