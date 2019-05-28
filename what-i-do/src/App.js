import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Showcase from './components/Display/Showcase'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className=''>
        {/* Only registerd users can upload service.  */}
        {/* Nav --> login/register
        Showcase
        SearchBar
        Services --> Service -->photo/servcontent
        Footer */}
        <Nav />
        <Showcase />
      </div>
    )
  }
}

export default App