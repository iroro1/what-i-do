import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Showcase from './components/Display/Showcase'
import Services from './components/Display/Services'
import Contact from './components/Display/Contact'
import Footer from './components/Display/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const services = [
  {
    "id": 1,
    "pic": 'https://img.freepik.com/free-vector/world-graphics-day-background_23-2147788754.jpg?size=338&ext=jpg',
    "title": " Web Developememt",
    "service": "I build any website or web app for you, and note that distance is not a barrier.",
    "location" : "Lefke",
    "price" : "500"
  },
  {
    "id": 2,
    "pic": 'https://img.freepik.com/free-vector/world-graphics-day-background_23-2147788754.jpg?size=338&ext=jpg',
    "title": " Baking",
    "service": "I bake customised bread and biscuits and deliver to your door.",
    "location" : "Lefke",
    "price" : "60"
  },
  {
    "id": 3,
    "pic": 'https://img.freepik.com/free-vector/world-graphics-day-background_23-2147788754.jpg?size=338&ext=jpg',
    "title": " Web Developememt",
    "service": "I build any website or web app for you, and note that distance is not a barrier.",
    "location" : "Lefkosa",
    "price" : "500"
  }    
]


class App extends Component {
  render() {
    return (
      <div className=''>
        <Nav />
        <Showcase />
        <Services services={services}/>
        <Contact />
        <Footer/>
      </div>
    )
  }
}

export default App