import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Showcase from './components/Display/Showcase'
import Services from './components/Display/Services'
import Footer from './components/Display/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


// for (var key in x) {
//   if (x.hasOwnProperty(key)){
//       console.log(x[key])
//   }
// }
//   fetch(`https://what-i-do-34510.firebaseio.com/List/Services/-LgHhJs7-Gy0Ey9Z47x7.json`)
//   .then(response => response.json())
//   .then(data => {
//     for (var key in data) {
//   if (data.hasOwnProperty(key)){
//       console.log(data[key])
//   }
// }
// })
class App extends Component {
  state={
    services : [],
  }
  componentDidMount(){
    fetch(`https://what-i-do-34510.firebaseio.com/Services.json`)
    .then(response => response.json())
    .then(data => this.setState({services : data}))
  }

  
  render() {
    return (
      <div >
        <Nav />
        <Showcase />
        <Services services={this.state.services} />
        <Footer/>
      </div>
    )
  }
}

export default App