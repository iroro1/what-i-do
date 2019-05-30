import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Showcase from './components/Display/Showcase'
import Services from './components/Display/Services'
import Footer from './components/Display/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const services = [
  {
    "id": 1,
    "pic": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ-uUnoVIXkaZnzMPGababEpuDNNq55glw7OIcM_446a2OvQY',
    "title": " Web Developememt",
    "service": "I build any website or web app for you, and note that distance is not a barrier.",
    "phone" : "+905338572105",
    "email" : "ojigboleo@gmail.com",
    "location" : "Lefke",
    "price" : "500"
  },
  {
    "id": 2,
    "pic": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ-uUnoVIXkaZnzMPGababEpuDNNq55glw7OIcM_446a2OvQY',
    "title": " Baking",
    "service": "I bake customised bread and biscuits and deliver to your door.",
    "phone" : "+905338572105",
    "email" : "ojigboleo@gmail.com",
    "location" : "Lefke",
    "price" : "60"
  },
  {
    "id": 3,
    "pic": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ-uUnoVIXkaZnzMPGababEpuDNNq55glw7OIcM_446a2OvQY',
    "title": " Web Developememt",
    "service": "I build any website or web app for you, and note that distance is not a barrier.",
    "phone" : "+905338572105",
    "email" : "ojigboleo@gmail.com",
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
        <Footer/>
      </div>
    )
  }
}

export default App